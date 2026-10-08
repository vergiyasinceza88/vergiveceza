import Image from 'next/image'
import { ArrowUpRight, ChevronRight, ShieldCheck } from 'lucide-react'

const credentials = [
  { label: 'Atatürk Üniversitesi', title: 'Adalet' },
  { label: 'Marmara Üniversitesi', title: 'İktisatt' },
  { label: 'Anadolu Üniversitesi', title: 'Dış Ticaret' },
  { label: 'Deneyim', title: '10+ Yıllık Tecrübe' },
]

export function Hero() {
  return (
    <section className="px-3 pb-10 md:px-6">
      <div className="relative mx-auto max-w-[90rem] overflow-hidden rounded-[2rem] bg-linear-to-br from-[#eef1f4] via-[#eceef1] to-[#e4e8f0] shadow-[0_30px_80px_-40px_rgba(20,33,61,0.35)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(20,33,61,0.05)_1px,transparent_1px)] bg-[size:8.5rem_100%]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-[36rem] rounded-full bg-[#c9d3ec]/60 blur-3xl"
        />

        <div className="relative grid gap-14 px-6 py-16 md:px-14 md:py-24 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:px-20 lg:py-28">
          <div>
            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-12 bg-muted-foreground/40" aria-hidden="true" />
              Vergi Uyuşmazlıkları
            </p>

            <h1 className="mt-8 font-serif text-6xl font-bold leading-[0.95] tracking-tight text-foreground text-balance sm:text-7xl lg:text-8xl">
              VERGİ VE
              <span className="mt-2 flex items-center gap-6 italic text-primary">
                CEZA
                <span className="hidden h-1.5 w-28 rounded-full bg-primary sm:block" aria-hidden="true" />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Vergi inceleme ve uyuşmazlık süreçlerinde, dosyanızın ilk gününden karar aşamasına kadar uzman destek.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#calisma-alanlari"
                className="group inline-flex items-center gap-4 rounded-2xl bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-xl shadow-primary/25 transition hover:-translate-y-0.5"
              >
                Çalışma alanlarını keşfet
                <ArrowUpRight
                  className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#iletisim"
                className="group inline-flex items-center gap-1.5 text-base font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                İletişime geç
                <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-white/60 shadow-[0_24px_60px_-30px_rgba(38,58,138,0.45)] ring-1 ring-white">
              <Image
                src="/images/team-3d.png"
                alt="Yuvarlak bir masada birlikte çalışan bir erkek ve iki kadından oluşan 3D ekip figürü"
                width={1408}
                height={768}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white/50 px-5 py-4 ring-1 ring-white/80 backdrop-blur-sm">
              <ShieldCheck className="size-7 shrink-0 text-primary" aria-hidden="true" />
              <dl className="grid flex-1 grid-cols-2 gap-x-4 gap-y-3">
                {credentials.map((item, index) => (
                  <div key={item.title} className={index % 2 === 1 ? 'border-l border-border pl-4' : ''}>
                    <dt className="text-xs leading-snug text-muted-foreground">{item.label}</dt>
                    <dd className="font-bold leading-snug text-foreground">{item.title}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
