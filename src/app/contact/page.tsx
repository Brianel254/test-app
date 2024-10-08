import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactUsSection from '@/components/ContactUsSection'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="py-20">
        <ContactUsSection />
      </main>
      <Footer />
    </>
  )
}