import {
  ChevronRight,
  ClipboardCheck,
  FileSearch,
  FileText,
  FileX,
  FolderKanban,
  Handshake,
  Landmark,
  Reply,
  type LucideIcon,
} from 'lucide-react'
import { coolTones } from '@/lib/tones'
import { SectionHeading } from './section-heading'

type Area = { title: string; desc: string; icon: LucideIcon }

const areas: Area[] = [
  {
    title: 'Vergi İncelemeleri',
    desc: 'Vergi inceleme sürecini, tespitleri ve firmanız için doğabilecek sonuçları birlikte değerlendiriyoruz.',
    icon: FileSearch,
  },
  {
    title: 'Sahte Belge İddiaları',
    desc: 'Sahte veya muhteviyatı itibarıyla yanıltıcı belge iddialarına karşı mali ve hukuki zemini analiz edilmeli.',
    icon: FileX,
  },
  {
    title: 'Uzlaşma Süreci',
    desc: 'Tarhiyat ve ceza ihbarnameleri sonrasında uzlaşma seçeneğini, riskleri ve olası sonuçları ele alınmalı.',
    icon: Handshake,
  },
  {
    title: 'Dava Dilekçeleri',
    desc: 'Vergi mahkemesine sunulacak dava ve cevap dilekçelerini dosyanızın gerçeklerine göre hazırlanmalı.',
    icon: FileText,
  },
  {
    title: 'Savunma Stratejisi',
    desc: 'İnceleme raporu, tutanak ve tebligatları inceleyerek dosyanızın savunma yol haritasını belirlenmeli.',
    icon: ClipboardCheck,
  },
  {
    title: 'İstinaf Başvuruları',
    desc: 'Karar sonrasında sizin ya da firmanızın lehine veya aleyhine oluşan tabloya göre istinaf süreci belirlenmeli.',
    icon: Landmark,
  },
  {
    title: 'İstinafa Cevap',
    desc: 'Vergi dairesinin itirazlarına veya karşı tarafın başvurusuna yönelik cevap dilekçeleri hazırlanmalı.',
    icon: Reply,
  },
  {
    title: 'Dosya Takibi',
    desc: 'Vergi uyuşmazlığının incelemeden yargılamaya kadar tüm aşamalar düzenli ve anlaşılır biçimde izlenmeli.',
    icon: FolderKanban,
  },
]

export function PracticeAreas() {
  return (
    <section
      id="calisma-alanlari"
      aria-labelledby="calisma-alanlari-baslik"
      className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHeading
        id="calisma-alanlari-baslik"
        eyebrow="Çalışma Alanları"
        title="Dosyanızın her aşamasında"
        highlight="stratejik destek."
        description="Sahte belge iddiaları ve vergi incelemeleri sonrasında, firmanızın seçeneklerini ve izleyebileceği süreci birlikte değerlendirelim."
      />

      <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {areas.map((area, i) => {
          const tone = coolTones[i % coolTones.length]
          const Icon = area.icon
          return (
            <li key={area.title}>
              <article
                className={`group relative flex h-full flex-col rounded-3xl p-6 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.35)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_55px_-25px_rgba(20,33,61,0.45)] ${tone.card}`}
              >
                <div className="flex items-start justify-between">
                  <span className={`flex size-16 items-center justify-center rounded-full ${tone.blob} ${tone.icon}`}>
                    <Icon className="size-7" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className={`text-sm font-bold tabular-nums ${tone.title} opacity-60`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className={`mt-8 text-xl font-bold ${tone.title}`}>{area.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-foreground/75">{area.desc}</p>

                <a
                  href="#iletisim"
                  className={`mt-6 inline-flex items-center gap-1 text-sm font-semibold ${tone.title}`}
                >
                  Detaylı bilgi
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  <span className="absolute inset-0 rounded-3xl" aria-hidden="true" />
                </a>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
