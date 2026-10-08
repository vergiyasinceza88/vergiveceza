'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CalendarClock, Menu, X } from 'lucide-react'

const links = [
  { href: '#calisma-alanlari', label: 'Çalışma Alanları' },
  { href: '#surec', label: 'Süreç' },
  { href: '#emsal-kararlar', label: 'Emsal Kararlar' },
  { href: '#iletisim', label: 'İletişim' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="VergiveCeza ana sayfa">
          <span className="flex size-12 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-md shadow-primary/10 ring-1 ring-border">
            <Image src="/images/logo-vc.png" alt="" width={545} height={385} className="h-auto w-full object-contain" priority />
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-foreground">
            Vergi<span className="text-primary">ve</span>Ceza
          </span>
        </a>

        <nav aria-label="Ana menü" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#iletisim"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-xl md:inline-flex"
        >
          <CalendarClock className="size-4" aria-hidden="true" />
          Randevu Al
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border border-border bg-card md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobil menü" className="border-t border-border bg-background px-5 pb-6 md:hidden">
          <ul className="flex flex-col pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 text-base font-medium text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#iletisim"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <CalendarClock className="size-4" aria-hidden="true" />
            Randevu Al
          </a>
        </nav>
      )}
    </header>
  )
}
