import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'
import HistorySection from '@/components/HistorySection'
import OurTeamSection from '@/components/OurTeamSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import AwardsAchievementsSection from '@/components/AwardsAchievementsSection'
import GetInTouchSection from '@/components/GetInTouchSection'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <HistorySection />
        <OurTeamSection />
        <WhyChooseUsSection />
        <AwardsAchievementsSection />
        <GetInTouchSection />
      </main>
      <Footer />
    </>
  )
}