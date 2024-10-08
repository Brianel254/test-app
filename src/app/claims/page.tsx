import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClaimsHero from '@/components/ClaimsHero'
import ClaimForm from '@/components/ClaimForm'

export default function ClaimsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ClaimsHero />
        <div className="container mx-auto px-4 py-12">
          <ClaimForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}