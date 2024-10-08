import { Shield, Briefcase, Home, Car, Heart, Plane } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const services = [
  {
    icon: Briefcase,
    title: "Business Insurance",
    description: "Protect your company with our comprehensive business insurance solutions tailored to your industry's needs."
  },
  {
    icon: Home,
    title: "Home Insurance",
    description: "Safeguard your home and belongings with our flexible home insurance policies designed for your peace of mind."
  },
  {
    icon: Car,
    title: "Auto Insurance",
    description: "Get on the road with confidence. Our auto insurance covers you against accidents, theft, and liability."
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description: "Secure your family's future with our life insurance plans that provide financial protection and peace of mind."
  },
  {
    icon: Shield,
    title: "Liability Insurance",
    description: "Protect yourself and your business from potential lawsuits with our comprehensive liability coverage."
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description: "Explore the world worry-free with our travel insurance that covers medical emergencies, trip cancellations, and more."
  }
]

export default function OurServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of insurance solutions to meet your personal and business needs. Explore our services and find the perfect coverage for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <service.icon className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button asChild variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-50">
                <Link href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild className="bg-green-500 text-white hover:bg-green-600 text-lg py-6 px-8">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}