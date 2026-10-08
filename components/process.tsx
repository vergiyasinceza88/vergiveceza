const steps = [
  { title: 'Ön Görüşme', desc: 'Dosyanızın mevcut durumunu, süreleri ve öncelikleri birlikte netleştiriyoruz.' },
  { title: 'Belge Analizi', desc: 'İnceleme raporu, tutanak ve tebligatları ayrıntılı biçimde inceliyoruz.' },
  { title: 'Strateji', desc: 'Uzlaşma, dava veya istinaf seçeneklerinden size uygun yolu belirliyoruz.' },
  { title: 'Takip & Sonuç', desc: 'Sürecin her adımını raporluyor, karar aşamasına kadar yanınızda oluyoruz.' },
]

export function Process() {
  return (
    <section id="surec" aria-labelledby="surec-baslik" className="scroll-mt-24 px-3 md:px-6">
      <div className="mx-auto max-w-[90rem] overflow-hidden rounded-[2rem] bg-foreground px-6 py-20 text-white md:px-14 md:py-24 lg:px-20">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              <span className="h-px w-12 bg-white/30" aria-hidden="true" />
              Nasıl Çalışıyoruz
            </p>
            <h2 id="surec-baslik" className="mt-5 font-serif text-5xl font-bold leading-[1.02] tracking-tight text-balance md:text-6xl">
              Dört adımda <span className="italic text-[#c3d6ee]">net bir yol.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-white/70 lg:justify-self-end">
            Her dosya farklıdır; ancak izlediğimiz yöntem her zaman şeffaf, planlı ve ölçülebilirdir.
          </p>
        </div>

        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10 transition hover:bg-white/[0.1]">
              <span className="font-serif text-5xl font-bold italic text-[#c3d6ee]">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
