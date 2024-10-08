"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  text: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "John Doe",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Jimmy's Insurance Agency provided exceptional service. They found the perfect coverage for my needs at a great price."
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4,
    text: "I've been with Jimmy's for years. Their customer support is top-notch, and they always go above and beyond."
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The team at Jimmy's made insurance easy to understand. I feel confident knowing I have the right coverage."
  }
]

export default function CustomerReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const timer = setInterval(nextReview, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600"></div>
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience with Jimmy's Insurance Agency.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="flex items-center mb-6">
              <Image
                src={reviews[currentReview].avatar}
                alt={reviews[currentReview].name}
                width={80}
                height={80}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{reviews[currentReview].name}</h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < reviews[currentReview].rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-lg italic">"{reviews[currentReview].text}"</p>
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              onClick={prevReview}
              variant="outline"
              className="bg-white text-green-500 hover:bg-green-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextReview}
              variant="outline"
              className="bg-white text-green-500 hover:bg-green-50"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}