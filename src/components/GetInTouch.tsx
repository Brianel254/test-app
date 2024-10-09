import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function GetInTouch() {
  return (
    <section className="py-12 bg-green-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-white text-lg mb-8">Contact us today to learn more about our insurance solutions and how we can help protect what matters most to you.</p>
        <div className="space-x-4">
          <Link href="/contact">
            <Button className="bg-white text-green-500 hover:bg-gray-100">Contact Us</Button>
          </Link>
          <Link href="/get-a-quote">
            <Button className="bg-green-600 text-white hover:bg-green-700">Get a Quote</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}