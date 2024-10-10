import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicesHero from '@/components/ServicesHero'
import ServiceCard from '@/components/ServiceCard'
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';

export const metadata: Metadata = {
  title: "Our Services",
  description: "We offer a wide range of insurance solutions to meet your personal and business needs. Explore our services and find the perfect coverage for you.",
};

const services = [
  {
    title: "Auto Insurance",
    description: "Comprehensive coverage for your vehicles, protecting you on the road.",
    image: "/moto-insurance-illustration---a-car-protected-by-a.svg",
    link: "/services/auto"
  },
  {
    title: "Home Insurance",
    description: "Safeguard your home and belongings with our comprehensive policies.",
    image: "/home-insurance-illustration--a-house-being-protect.svg",
    link: "/services/home"
  },
  {
    title: "Life Insurance",
    description: "Ensure your loved ones' financial security with our life insurance plans.",
    image: "/life-insurance-illustration--family-together--prot.svg",
    link: "/services/life"
  },
  {
    title: "Health Insurance",
    description: "Quality healthcare coverage to keep you and your family healthy.",
    image: "/health-insurance-illustration--a-person-in-hospita.svg",
    link: "/services/health"
  },
  {
    title: "Travel Insurance",
    description: "Travel with peace of mind knowing you're covered for unexpected events.",
    image: "/gravel-insurance-illustration--a-travel-bag-and-tr.svg",
    link: "/services/travel"
  },
  {
    title: "Business Insurance",
    description: "Protect your business assets and operations with our tailored policies.",
    image: "/business-insurance-illustration--a-company-protect.svg",
    link: "/services/business"
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ServicesHero />
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}