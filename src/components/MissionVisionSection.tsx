import { Target, Eye } from 'lucide-react'

export default function MissionVisionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-green-600 mr-2" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-700">
              Our mission is to serve the community with reliable, flexible, and timely insurance services at the most competitive prices through innovation and continued improvisation. We strive to provide peace of mind to our clients by offering comprehensive coverage and exceptional customer service.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-green-600 mr-2" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-700">
              Our vision is to be the most trusted insurance agency in the East and Central African region. We aim to set new standards in the insurance industry by consistently delivering value, fostering long-term relationships with our clients, and contributing positively to the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}