import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GetInsuredHero from '@/components/GetInsuredHero'
import OurServicesSection from '@/components/OurServicesSection'
import GetInTouchSection from '@/components/GetInTouchSection'
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface'

export const metadata: Metadata = {
  title: "Get Insured",
  description: "Protect what matters most. Explore our insurance options and get covered today.",
};

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