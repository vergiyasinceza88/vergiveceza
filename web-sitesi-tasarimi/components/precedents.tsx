import { BookOpen, ChevronRight } from 'lucide-react'
import { warmTones } from '@/lib/tones'
import { SectionHeading } from './section-heading'

const precedents = [
  { category: 'Sahte Belge', title: 'Sahte fatura kullanımı iddiası', desc: 'Sahte belge iddiasına ilişkin karar özeti ve öne çıkan değerlendirmeler.' },
  { category: 'Vergi İncelemesi', title: 'İnceleme raporunun yeterliliği', desc: 'Vergi inceleme sürecine dair karar notu ve hukuki gerekçeler.' },
  { category: 'Uzlaşma', title: 'Tarhiyat sonrası uzlaşma', desc: 'Uzlaşma veya tarhiyat hakkında emsal karar özeti.' },
  { category: 'Vergi Mahkemesi', title: 'Re’sen tarhiyatın iptali', desc: 'Vergi mahkemesi kararından kısa bir bölüm veya özet.' },
  { category: 'İstinaf', title: 'İstinaf aşamasında bozma', desc: 'İstinaf aşamasındaki karar metni ve dosyaya etkisi.' },
  { category: 'Usul', title: 'Tebligat usulsüzlüğü', desc: 'Tebligat süreçlerindeki eksikliklerin karara yansıması.' },
  { category: 'Ceza', title: 'Vergi ziyaı cezası', desc: 'Ceza miktarının belirlenmesine ilişkin öne çıkan değerlendirme.' },
  { category: 'Danıştay', title: 'Karar künyesi ve değerlendirme', desc: 'Karar künyesi ve öne çıkan hukuki değerlendirme.' },
]

export function Precedents() {
  return (
    <section
      id="emsal-kararlar"
      aria-labelledby="emsal-kararlar-baslik"
      className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHeading
        id="emsal-kararlar-baslik"
        eyebrow="Emsal Kararlar"
        title="Emsal kararlar,"
        highlight="güçlü dayanaklar."
        description="Dosyanıza ışık tutabilecek karar örnekleri ve hukuki değerlendirmeler. İçerikler düzenli olarak güncellenmektedir."
      />

      <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {precedents.map((item, i) => {
          const tone = warmTones[i % warmTones.length]
          return (
            <li key={item.title}>
              <article
                className={`group relative flex h-full flex-col rounded-3xl p-6 shadow-[0_18px_40px_-24px_rgba(122,84,40,0.4)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_55px_-25px_rgba(122,84,40,0.5)] ${tone.card}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`flex size-14 items-center justify-center rounded-full ${tone.blob} ${tone.icon}`}>
                    <BookOpen className="size-6" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className={`rounded-full bg-white/60 px-3 py-1 text-xs font-bold ${tone.title}`}>
                    {item.category}
                  </span>
                </div>

                <h3 className={`mt-7 text-lg font-bold leading-snug ${tone.title}`}>{item.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-foreground/75">{item.desc}</p>

                <div className={`mt-6 flex items-center justify-between border-t border-current/15 pt-4 text-sm font-semibold ${tone.title}`}>
                  <span className="tabular-nums opacity-60">{String(i + 1).padStart(2, '0')}</span>
                  <a href="#iletisim" className="inline-flex items-center gap-1">
                    Kararı incele
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    <span className="absolute inset-0 rounded-3xl" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
