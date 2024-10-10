import Image from 'next/image'

const teamMembers = [
  {
    name: "Hesmita Dave",
    role: "CEO & Founder",
    image: "/hesmita.png",
    bio: "With over 20 years of experience in the insurance industry, Hesmita leads our team with vision and expertise."
  },
  {
    name: "Raytone Cheti",
    role: "Manager",
    image: "/ray.png?height=300&width=300",
    bio: "Raytone's deep understanding of risk assessment ensures our clients receive the best coverage possible."
  },
  {
    name: "Benson Mutua",
    role: "General Underwriter",
    image: "/ben.png?height=300&width=300",
    bio: "Benson's dedication to client satisfaction has been key to our agency's growth and stellar reputation."
  },
  {
    name: "Franklyne Obunia",
    role: "Claims Processing Specialist",
    image: "/franklyne.png?height=300&width=300",
    bio: "Franklyne's efficiency and attention to detail make our claims process smooth and hassle-free for clients."
  }
]

export default function OurTeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals behind Jimmy's Insurance Agency. Our experienced team is committed to providing you with the best insurance solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}