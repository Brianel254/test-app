import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutUsSection from '@/components/AboutUsSection'
import OurServicesSection from '@/components/OurServicesSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import OurTeamSection from '@/components/OurTeamSection'
import NewsArticlesSection from '@/components/NewsArticlesSection'
import AwardsAchievementsSection from '@/components/AwardsAchievementsSection'
import CustomerReviewsSection from '@/components/CustomerReviewsSection'
import ContactUsSection from '@/components/ContactUsSection'
import Footer from '@/components/Footer'
import GetInTouch from '@/components/GetInTouch'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUsSection />
      <OurServicesSection />
      <WhyChooseUsSection />
      <GetInTouch/>
      <OurTeamSection />
      <NewsArticlesSection />
      <AwardsAchievementsSection />
      <CustomerReviewsSection />
      <ContactUsSection />
      <Footer />
    </main>
  )
}