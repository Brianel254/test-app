import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function AboutUsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <Image
              src="/green-circle.png?height=600&width=600"
              alt="About Jimmy's Insurance Agency"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">About Jimmy's Insurance Agency</h2>
            <p className="text-lg text-gray-700">
              Jimmy's Insurance Agency Ltd. has been a trusted name in Kenya's insurance landscape for over 5 years. We pride ourselves on providing personalized insurance solutions that cater to the unique needs of our clients, both individuals and businesses alike.
            </p>
            <p className="text-lg text-gray-700">
              Our team of experienced professionals is dedicated to ensuring that you receive the best coverage at competitive rates. We understand that insurance can be complex, which is why we're committed to guiding you through every step of the process with clarity and transparency.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Comprehensive range of insurance products</li>
              <li>Personalized service and expert advice</li>
              <li>Quick and hassle-free claims processing</li>
              <li>Strong relationships with leading insurance providers</li>
            </ul>
            <Button asChild className="bg-green-500 text-white hover:bg-green-600 text-lg py-6 px-8 mt-4">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}