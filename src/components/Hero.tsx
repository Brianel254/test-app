'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import ScheduleCallPopup from './ScheduleCallPopup'
import { useState } from 'react'

export default function Hero() {
  const partners = [
    { name: 'Partner 1', logo: '/fastassurance.png' },
    { name: 'Partner 2', logo: '/britam.png' },
    { name: 'Partner 3', logo: '/mayfair.png' },
    { name: 'Partner 4', logo: '/kenindia.png' },
    { name: 'Partner 5', logo: '/geminia.png' },
    { name: 'Partner 6', logo: '/ga.png' },
  ]
  const [isScheduleCallOpen, setIsScheduleCallOpen] = useState(false)

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background with blurred circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 opacity-20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400 opacity-20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left column: Text content and partners */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="text-left">
              <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-4">
                Award Winning Agency
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Quick and Reliable Insurance Solutions in Nairobi
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Jimmy's Insurance Agency Ltd is your trusted partner for personalized business and personal insurance solutions, ensuring comprehensive coverage and quick claims processing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setIsScheduleCallOpen(true)}
                  className="bg-green-500 text-white hover:bg-green-600 text-lg py-6 px-8"
                >
                  <Link href="/#">Schedule a Call</Link>
                </Button>
                <ScheduleCallPopup
                  isOpen={isScheduleCallOpen}
                  onClose={() => setIsScheduleCallOpen(false)}
                />
                <Button asChild variant="outline" className="border-green-500 text-green-500 hover:bg-green-50 text-lg py-6 px-8">
                  <Link href="/get-a-quote">Get a Quote Now!</Link>
                </Button>
              </div>
            </div>
            
            {/* Trusted Partners */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">Our Trusted Partners</h2>
              <div className="grid grid-cols-3 gap-4">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-center justify-center bg-white p-2 rounded-lg shadow-sm">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={100}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/hero-1.png?height=600&width=600"
              alt="Insurance Solutions"
              width={600}
              height={600}
              className=" "
            />
          </div>
        </div>
      </div>
    </section>
  )
}