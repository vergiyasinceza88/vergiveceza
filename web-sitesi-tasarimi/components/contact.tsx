import Image from 'next/image'
import type { SVGProps } from 'react'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { coolTones } from '@/lib/tones'

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

const channels = [
  { title: 'Telefon', value: '+90 544 282 57 75', href: 'tel:+905442825775', icon: Phone, external: false },
  { title: 'E-posta', value: 'vergiveceza@gmail.com', href: 'mailto:vergiveceza@gmail.com', icon: Mail, external: false },
  { title: 'Instagram', value: '@vergiveceza', href: 'https://www.instagram.com/vergiveceza/', icon: InstagramIcon, external: true },
  { title: 'Ofis', value: 'İstanbul, Türkiye', href: 'https://maps.google.com/?q=İstanbul', icon: MapPin, external: true },
]

export function Contact() {
  return (
    <section id="iletisim" aria-labelledby="iletisim-baslik" className="scroll-mt-24 px-3 pb-6 md:px-6">
      <div className="relative mx-auto max-w-[90rem] overflow-hidden rounded-[2rem] bg-linear-to-br from-[#eef1f4] to-[#e4e8f0] px-6 py-20 md:px-14 md:py-24 lg:px-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 size-[30rem] rounded-full bg-[#cfc9ef]/50 blur-3xl"
        />
        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-12 bg-muted-foreground/40" aria-hidden="true" />
              İletişim
            </p>
            <h2 id="iletisim-baslik" className="mt-5 font-serif text-5xl font-bold leading-[1.02] tracking-tight text-foreground text-balance md:text-6xl">
              Dosyanızı <span className="italic text-primary">birlikte</span> değerlendirelim.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Vergi uyuşmazlıklarında süreler kritiktir. Tebligatınızı aldıysanız vakit kaybetmeden iletişime geçin.
            </p>
            <a
              href="mailto:vergiveceza@gmail.com?subject=Randevu%20Talebi"
              className="group mt-10 inline-flex items-center gap-4 rounded-2xl bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-xl shadow-primary/25 transition hover:-translate-y-0.5"
            >
              Randevu talebi gönder
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          <ul className="grid gap-4">
            {channels.map((c, i) => {
              const tone = coolTones[i % coolTones.length]
              const Icon = c.icon
              return (
                <li key={c.title}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`flex items-center gap-5 rounded-3xl p-5 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.35)] transition duration-300 hover:-translate-y-1 ${tone.card}`}
                  >
                    <span className={`flex size-14 shrink-0 items-center justify-center rounded-full ${tone.blob} ${tone.icon}`}>
                      <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span>
                      <span className={`block text-sm font-semibold ${tone.title} opacity-80`}>{c.title}</span>
                      <span className={`block text-lg font-bold ${tone.title}`}>{c.value}</span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-muted-foreground md:flex-row md:px-8">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5 ring-1 ring-border">
          <Image src="/images/logo-vc.png" alt="" width={545} height={385} className="h-auto w-full object-contain" />
        </span>
        <span className="font-bold uppercase tracking-[0.2em] text-foreground">
            Vergi<span className="text-primary">ve</span>Ceza
          </span>
      </div>
      <p>{'© 2026 Yasin Çetin. Tüm hakları saklıdır.'}</p>
    </footer>
  )
}
