import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

type ContactPayload = {
  name?: unknown
  phone?: unknown
  subject?: unknown
  message?: unknown
  website?: unknown
}

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!)
}

export async function POST(request: Request) {
  let payload: ContactPayload
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Form bilgileri okunamadı.' }, { status: 400 })
  }

  // Quietly accept honeypot submissions without forwarding them.
  if (clean(payload.website, 200)) return NextResponse.json({ ok: true })

  const name = clean(payload.name, 100)
  const phone = clean(payload.phone, 30)
  const subject = clean(payload.subject, 150)
  const message = clean(payload.message, 5000)
  if (!name || !phone || !subject || !message) {
    return NextResponse.json({ error: 'Lütfen tüm alanları doldurun.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM
  if (!apiKey || !from) {
    return NextResponse.json({ error: 'E-posta gönderimi henüz yapılandırılmamış.' }, { status: 503 })
  }

  const text = [`İsim: ${name}`, `Numara: ${phone}`, `Konu: ${subject}`, '', 'Mesaj:', message].join('\n')
  const html = `<p><strong>İsim:</strong> ${escapeHtml(name)}</p><p><strong>Numara:</strong> ${escapeHtml(phone)}</p><p><strong>Konu:</strong> ${escapeHtml(subject)}</p><p><strong>Mesaj:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: ['vergiveceza@gmail.com'],
        subject: `Web sitesi iletişim formu: ${subject}`,
        text,
        html,
      }),
    })
    if (!response.ok) {
      console.error('Contact email provider returned an error:', response.status)
      return NextResponse.json({ error: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact email request failed:', error)
    return NextResponse.json({ error: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.' }, { status: 502 })
  }
}
