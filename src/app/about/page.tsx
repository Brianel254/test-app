import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'
import HistorySection from '@/components/HistorySection'
import OurTeamSection from '@/components/OurTeamSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import AwardsAchievementsSection from '@/components/AwardsAchievementsSection'
import GetInTouchSection from '@/components/GetInTouchSection'
import OurDirectorSection from '@/components/OurDirectorSection'
import CommunityInputSection from '@/components/CommunityInputSection'
import AwardsGallerySection from '@/components/AwardsGallerySection'
import MissionVisionSection from '@/components/MissionVisionSection'

export const metadata = {
  title: "About Us",
  description: "Learn more about our company and our mission.",
};  

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <HistorySection />
        <OurDirectorSection />
        <CommunityInputSection />
        <MissionVisionSection />
        <OurTeamSection />
        <WhyChooseUsSection />
        <AwardsAchievementsSection />
        <AwardsGallerySection />
        <GetInTouchSection />
      </main>
      <Footer />
    </>
  )
}