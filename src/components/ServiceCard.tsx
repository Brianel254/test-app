import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={image} alt={title} width={300} height={200} className="w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link}>
          <Button className="w-full bg-green-500 text-white hover:bg-green-600">
            Explore More
          </Button>
        </Link>
      </div>
    </div>
  )
}