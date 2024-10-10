import Image from 'next/image'

export default function CommunityInputSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Input in the Community</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-4">
              As part of our corporate social responsibility efforts, we proudly support a girls' shelter in Pangani - <a href="https://www.rescuedada.org/" className='text-green-500 font-bold' target="_blank">Rescue Dada.</a> This remarkable shelter has opened its doors to more than sixty young orphaned girls, providing them with care, support, and hope for a brighter future.
            </p>
            <p className="text-lg text-gray-700">
              Education is our primary focus in this initiative. We demonstrate our commitment by regularly donating essential educational materials, including school textbooks, exercise books, and various types of stationery. Our goal is to empower these young girls through education, giving them the tools they need to build a better life for themselves and contribute positively to their communities.
            </p>
            <p className="text-lg text-gray-700">
            Our commitment to Rescue Dada extends beyond mere donations. We see education as a powerful force for change, and through this partnership, we hope to inspire lasting transformation in the lives of these girls, ensuring they have the opportunities they deserve.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4 h-1/2">
              <div className="col-span-2">
                <Image
                  src="/community-support1.jpeg"
                  alt="Community Support 1"
                  width={600}
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div>
                <Image
                  src="/community-support2.jpeg"
                  alt="Community Support 2"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div>
                <Image
                  src="/community-support3.jpeg"
                  alt="Community Support 3"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}