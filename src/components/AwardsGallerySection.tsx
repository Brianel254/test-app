import Image from 'next/image'

const awards = [
  {
    title: "Best Agent in Non-motor Insurance",
    year: "2022",
    description: "At Jimmy’s insurance agency, we’re committed to providing exceptional service to our clients. We’re proud to have been recognized for our efforts by some of the most respected organizations in the industry. We’re proud of the recognition we’ve received, but what matters most to us is the satisfaction of our clients. We work hard every day to ensure that our clients have the protection they need, and the peace of mind they deserve.",
    image: "/geminia-bestagent.jpg?height=400&width=300",
    isPortrait: true
  },
  {
    title: "Community Impact Award",
    year: "2022",
    description: "Honored for our significant contributions to local community development.",
    image: "/geminia-agric.jpg?height=300&width=400",
    isPortrait: false
  },
  {
    title: "Insurance Innovation of the Year",
    year: "2021",
    description: "Awarded for introducing cutting-edge technology in insurance processes.",
    image: "/award-mayfair.jpg?height=400&width=300",
    isPortrait: true
  }
]

export default function AwardsGallerySection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 hidden text-center">Awards and Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden ${award.isPortrait ? 'row-span-3' : 'col-span-2'}`}>
              <Image
                src={award.image}
                alt={award.title}
                width={award.isPortrait ? 300 : 400}
                height={award.isPortrait ? 400 : 300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <p className="text-gray-600 mb-2">{award.year}</p>
                <p className="text-gray-700">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}