import { Contact, SiteFooter } from '@/components/contact'
import { Hero } from '@/components/hero'
import { PracticeAreas } from '@/components/practice-areas'
import { Precedents } from '@/components/precedents'
import { Process } from '@/components/process'
import { QuickActions } from '@/components/quick-actions'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <QuickActions />
        <PracticeAreas />
        <Process />
        <Precedents />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
