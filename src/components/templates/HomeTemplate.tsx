import { Header } from '@/components/molecules/Header'
import { Hero } from '@/components/molecules/Hero'
import { Highlights } from '@/components/molecules/Highlights'
import { BioCard } from '@/components/organisms/BioCard'
import { Feed } from '@/components/molecules/Feed'
import { Testimonials } from '@/components/organisms/Testimonials'
import { ContentGrid } from '@/components/organisms/ContentGrid'
import { CTASection } from '@/components/molecules/CTASection'
import { Footer } from '@/components/molecules/Footer'

export function HomeTemplate() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <BioCard />
        <Feed />
        <Testimonials />
        <ContentGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
