import Image from 'next/image'

export default function HistorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
            <p className="text-lg text-gray-700 mb-4">
              Founded in 2005, Jimmy's Insurance Agency has been a cornerstone of the Nairobi insurance landscape for over 15 years. Our journey began with a simple mission: to provide personalized, reliable insurance solutions to individuals and businesses in our community.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Over the years, we've grown from a small local agency to a trusted name in insurance across Kenya. Our commitment to excellence, customer service, and innovative solutions has allowed us to expand our offerings and serve a diverse clientele.
            </p>
            <p className="text-lg text-gray-700">
              Today, we continue to build on our rich history, combining years of experience with cutting-edge insurance products to meet the evolving needs of our clients in the 21st century.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="/history.webp?height=400&width=600"
              alt="Jimmy's Insurance Agency History"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}