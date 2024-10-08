import { Award } from 'lucide-react'

const awards = [
  {
    title: "Best Insurance Agency 2024",
    organization: "Nairobi Business Awards",
    year: "2024"
  },
  {
    title: "Excellence in Customer Service",
    organization: "Insurance Industry Association",
    year: "2023"
  },
  {
    title: "Top 10 Fast-Growing Insurance Agencies",
    organization: "Business Monthly Magazine",
    year: "2022"
  },
  {
    title: "Innovation in Insurance Technology",
    organization: "Tech in Insurance Summit",
    year: "2021"
  }
]

export default function AwardsAchievementsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards and Achievements</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders. Here are some of our recent accolades:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <Award className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
              <p className="text-green-500 font-medium mb-1">{award.organization}</p>
              <p className="text-gray-600">{award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}