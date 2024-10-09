import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GetInTouch from '@/components/GetInTouch'

const services = {
  auto: {
    title: "Auto Insurance",
    description: "Comprehensive coverage for your vehicles, protecting you on the road.",
    image: "/moto-insurance-illustration---a-car-protected-by-a.svg",
    definition: "Auto insurance provides financial protection for you and your vehicle in case of accidents, theft, or damage. It's designed to mitigate the risks associated with driving and is often required by law.",
    benefits: [
      "Protection against financial loss in case of accidents",
      "Coverage for medical expenses resulting from auto accidents",
      "Legal defense costs coverage if you're sued due to an auto accident",
      "Peace of mind while driving",
      "Compliance with legal requirements for vehicle owners"
    ]
  },
  home: {
    title: "Home Insurance",
    description: "Safeguard your home and belongings with our comprehensive policies.",
    image: "/home-insurance-illustration--a-house-being-protect.svg",
    definition: "Home insurance, also known as homeowner's insurance, provides coverage for your house and personal belongings against damage, theft, and other perils. It also includes liability protection for accidents that might occur on your property.",
    benefits: [
      "Protection for your home's structure and personal belongings",
      "Liability coverage for accidents on your property",
      "Additional living expenses coverage if your home becomes uninhabitable",
      "Peace of mind knowing your largest asset is protected",
      "Often required by mortgage lenders"
    ]
  },
  life: {
    title: "Life Insurance",
    description: "Ensure your loved ones' financial security with our life insurance plans.",
    image: "/life-insurance-illustration--family-together--prot.svg",
    definition: "Life insurance provides financial protection for your loved ones in the event of your death. It pays out a sum of money to your beneficiaries, helping them maintain their standard of living and achieve long-term financial goals.",
    benefits: [
      "Financial security for your family after your passing",
      "Coverage for final expenses and outstanding debts",
      "Replacement of lost income for dependents",
      "Tax-free benefits for beneficiaries",
      "Peace of mind knowing your loved ones are protected"
    ]
  },
  health: {
    title: "Health Insurance",
    description: "Quality healthcare coverage to keep you and your family healthy.",
    image: "/health-insurance-illustration--a-person-in-hospita.svg",
    definition: "Health insurance helps cover the cost of medical care, from routine check-ups to major surgeries. It provides financial protection against high medical costs and ensures access to necessary healthcare services.",
    benefits: [
      "Coverage for preventive care and routine check-ups",
      "Protection against high medical costs",
      "Access to a network of healthcare providers",
      "Coverage for prescription medications",
      "Peace of mind knowing you're protected in case of illness or injury"
    ]
  },
  travel: {
    title: "Travel Insurance",
    description: "Travel with peace of mind knowing you're covered for unexpected events.",
    image: "/gravel-insurance-illustration--a-travel-bag-and-tr.svg",
    definition: "Travel insurance provides coverage for unexpected events that may occur before or during your trip. It can include protection for trip cancellations, medical emergencies, lost luggage, and more.",
    benefits: [
      "Coverage for trip cancellations or interruptions",
      "Emergency medical coverage while traveling",
      "Protection for lost, stolen, or damaged luggage",
      "24/7 travel assistance services",
      "Peace of mind while exploring the world"
    ]
  },
  business: {
    title: "Business Insurance",
    description: "Protect your business assets and operations with our tailored policies.",
    image: "/business-insurance-illustration--a-company-protect.svg",
    definition: "Business insurance, also known as commercial insurance, provides protection for companies against financial losses due to events that may occur during the normal course of business. It can cover property damage, liability claims, employee-related risks, and more.",
    benefits: [
      "Protection for business property and assets",
      "Liability coverage for potential lawsuits",
      "Coverage for business interruption and lost income",
      "Employee-related protections like workers' compensation",
      "Customizable policies to fit your specific business needs"
    ]
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative h-[400px] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            layout="fill"
            objectFit="cover"
            className="filter blur-sm"
          />
          <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl  text-gray-900 md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-gray-900 max-w-2xl mx-auto">{service.description}</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">What is {service.title}?</h2>
            <p className="text-gray-600 text-lg">{service.definition}</p>
          </div>
        </section>

        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
              {/* Left Column: Image */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <img 
                  src={service.image} 
                  alt={`${service.title} Image`} 
                  className="rounded-lg shadow-md" 
                />
              </div>
              
              {/* Right Column: Content */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6">Benefits of {service.title}</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-600 text-lg">{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>



        <GetInTouch />
      </main>
      <Footer />
    </div>
  )
}