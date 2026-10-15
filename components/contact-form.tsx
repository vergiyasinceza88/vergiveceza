'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'

export function ContactForm() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSending(true)
    setStatus('')
    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Mesaj gönderilemedi. Lütfen tekrar deneyin.')
      form.reset()
      setStatus('Mesajınız gönderildi. En kısa sürede sizinle iletişime geçeceğiz.')
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Mesaj gönderilemedi. Lütfen tekrar deneyin.')
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-4" aria-label="İletişim formu">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-foreground">
          İsim
          <input name="name" required maxLength={100} autoComplete="name" className="mt-2 w-full rounded-xl border border-input bg-white/80 px-4 py-3 font-normal outline-none transition focus:ring-2 focus:ring-ring" />
        </label>
        <label className="block text-sm font-semibold text-foreground">
          Numara
          <input name="phone" type="tel" required maxLength={30} autoComplete="tel" className="mt-2 w-full rounded-xl border border-input bg-white/80 px-4 py-3 font-normal outline-none transition focus:ring-2 focus:ring-ring" />
        </label>
      </div>
      <label className="block text-sm font-semibold text-foreground">
        Konu
        <input name="subject" required maxLength={150} className="mt-2 w-full rounded-xl border border-input bg-white/80 px-4 py-3 font-normal outline-none transition focus:ring-2 focus:ring-ring" />
      </label>
      <label className="block text-sm font-semibold text-foreground">
        Mesajınız
        <textarea name="message" required maxLength={5000} rows={5} className="mt-2 w-full resize-y rounded-xl border border-input bg-white/80 px-4 py-3 font-normal outline-none transition focus:ring-2 focus:ring-ring" />
      </label>
      <label className="absolute -left-[10000px]" aria-hidden="true">
        Web sitesi
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button type="submit" disabled={sending} className="group inline-flex items-center gap-4 rounded-2xl bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-xl shadow-primary/25 transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60">
        {sending ? 'Gönderiliyor…' : 'Gönder'}
        <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </button>
      <p aria-live="polite" role="status" className="text-sm text-muted-foreground">{status}</p>
    </form>
  )
}
