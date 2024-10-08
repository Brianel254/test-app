import { Shield, Clock, Users, ThumbsUp } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    description: "We offer a wide range of insurance products to ensure all your needs are met under one roof."
  },
  {
    icon: Clock,
    title: "Quick Claims Processing",
    description: "Our efficient team ensures your claims are processed swiftly, minimizing your downtime and stress."
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "We take the time to understand your unique needs and tailor our solutions accordingly."
  },
  {
    icon: ThumbsUp,
    title: "Industry Expertise",
    description: "With years of experience, we bring unparalleled knowledge to guide your insurance decisions."
  }
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At Jimmy's Insurance Agency, we stand out from the competition. Here's why our clients trust us with their insurance needs:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <reason.icon className="w-12 h-12 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}