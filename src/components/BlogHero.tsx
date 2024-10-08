import Image from 'next/image'

export default function BlogHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <Image
        src="/placeholder.svg?height=400&width=1600"
        alt="Blog Hero Background"
        width={1600}
        height={400}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Our Insurance Blog
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Stay informed with the latest insights, tips, and news from the world of insurance.
          </p>
        </div>
      </div>
    </section>
  )
}