import Image from 'next/image'

export default function OurDirectorSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row max-w-3xl mx-auto items-center md:items-start gap-8">
          <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
            <Image
              src="/director.png"
              alt="Director"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-grow md:mt-8">
            <blockquote className="text-lg md:text-xl text-gray-700 italic">
              "After working at two different insurance brokers for a cumulative period of well over fifteen years, and having served clients from diverse backgrounds with varied needs, I decided to start my own insurance agency with the utmost confidence that I will be able to serve my clients with the very best service round the clock with total commitment and reliability."
            </blockquote>
            <p className="mt-4 text-gray-600 font-semibold">- Hesmita</p>
          </div>
        </div>
      </div>
    </section>
  )
}