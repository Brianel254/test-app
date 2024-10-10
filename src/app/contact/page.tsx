import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactUsSection from '@/components/ContactUsSection'


export const metadata = {
  title: "Contact Us",
  description: "Get in touch with our team. Fill out the form and our team will get back to you as soon as possible.",
}
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