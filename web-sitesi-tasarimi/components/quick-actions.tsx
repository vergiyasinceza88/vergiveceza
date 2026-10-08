import { CalendarClock, FileSearch, Phone } from 'lucide-react'
import { coolTones } from '@/lib/tones'

const actions = [
  { title: 'Randevu Al', desc: 'Ön görüşme için uygun bir zaman seçin.', href: '#iletisim', icon: CalendarClock },
  { title: 'Dosya Ön Değerlendirme', desc: 'Tebligat ve raporlarınızı birlikte inceleyelim.', href: '#iletisim', icon: FileSearch },
  { title: 'Hemen Arayın', desc: 'Acil süreler için doğrudan ulaşın.', href: '#iletisim', icon: Phone },
]

export function QuickActions() {
  return (
    <section aria-label="Hızlı işlemler" className="mx-auto max-w-7xl px-5 md:px-8">
      <ul className="grid gap-5 sm:grid-cols-3">
        {actions.map((action, i) => {
          const tone = coolTones[i]
          const Icon = action.icon
          return (
            <li key={action.title}>
              <a
                href={action.href}
                className={`group flex h-full flex-col items-start gap-5 rounded-3xl p-6 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_-24px_rgba(20,33,61,0.45)] md:p-7 ${tone.card}`}
              >
                <span className={`flex size-16 items-center justify-center rounded-full ${tone.blob} ${tone.icon}`}>
                  <Icon className="size-8" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span>
                  <span className={`block text-xl font-bold ${tone.title}`}>{action.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-foreground/70">{action.desc}</span>
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
