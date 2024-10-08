import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteForm from '@/components/QuoteForm'

export default function GetAQuotePage() {
  return (
    <>
      <Navbar />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Get a Quote</h1>
          <div className="max-w-2xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}