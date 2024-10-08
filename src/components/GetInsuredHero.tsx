import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function GetInsuredHero() {
  return (
    <section className="bg-green-500 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Get Insured Today
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
            Protect what matters most with our comprehensive insurance solutions. Start your journey to peace of mind today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-green-500 hover:bg-gray-100 text-lg py-6 px-8">
              <Link href="/get-a-quote">Get a Quote</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white  bg-green-500 hover:text-white hover:bg-green-600 text-lg py-6 px-8">
              <Link href="/claims"> Submit a Claim</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}