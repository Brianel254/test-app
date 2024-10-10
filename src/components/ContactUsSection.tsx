'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import useWeb3Forms from "@web3forms/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactUsSection() {
  const { register, reset, handleSubmit } = useForm()
  const [isSuccess, setIsSuccess] = useState(false)
  const [message, setMessage] = useState("")

  const { submit: onSubmit } = useWeb3Forms({
    access_key: "f440c534-2d10-4982-bbc6-4bd8b1aa7ed6",
    settings: {
      from_name: "Jimmy's Insurance Agency",
      subject: "New Contact Message from Jimmy's Insurance Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true)
      setMessage(msg)
      reset()
    },
    onError: (msg, data) => {
      setIsSuccess(false)
      setMessage(msg)
    },
  })

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to us. We're here to help you with all your insurance needs.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
          //      name="name"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
              <Input
                type="email"
           //     name="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
              />
              <Input
                type="tel"
           //     name="phone"
                placeholder="Your Phone"
                {...register("phone")}
              />
              <Textarea
           //     name="message"
                placeholder="Your Message"
                rows={4}
                {...register("message", { required: true })}
              />
              <Button type="submit" className="w-full bg-green-500 text-white hover:bg-green-600">
                Send Message
              </Button>
            </form>
            {message && (
              <div className={`mt-4 text-center ${isSuccess ? "text-green-500" : "text-red-500"}`}>
                {message}
              </div>
            )}
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+254 733 844 802</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">info@jimmysinsuranceagency.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">Pamba Road, Pangani. <br/> P.O Box. 40715 – 00100 Nairobi, Kenya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}