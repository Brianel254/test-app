import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GetInsuredHero from '@/components/GetInsuredHero'
import OurServicesSection from '@/components/OurServicesSection'
import GetInTouchSection from '@/components/GetInTouchSection'

export default function GetInsuredPage() {
  return (
    <>
      <Navbar />
      <main>
        <GetInsuredHero />
        <OurServicesSection />
        <GetInTouchSection />
      </main>
      <Footer />
    </>
  )
}