export default function ServicesHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">Our Services</h1>
        <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive range of insurance solutions designed to protect what matters most to you.
        </p>
      </div>
    </section>
  )
}