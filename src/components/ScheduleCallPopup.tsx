'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import useWeb3Forms from "@web3forms/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from 'lucide-react'

interface ScheduleCallPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ScheduleCallPopup({ isOpen, onClose }: ScheduleCallPopupProps) {
  const { register, reset, handleSubmit, setValue } = useForm()
  const [isSuccess, setIsSuccess] = useState(false)
  const [message, setMessage] = useState("")

  const { submit: onSubmit } = useWeb3Forms({
    access_key: "f440c534-2d10-4982-bbc6-4bd8b1aa7ed6",
    settings: {
      from_name: "Jimmy's Insurance Agency",
      subject: "New Call Schedule Request from Jimmy's Insurance Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true)
      setMessage(msg)
      reset()
      setTimeout(() => {
        onClose()
      }, 3000)
    },
    onError: (msg, data) => {
      setIsSuccess(false)
      setMessage(msg)
    },
  })

  const handleSelectChange = (value: string) => {
    setValue("preferredTime", value)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4">Schedule a Call</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            type="text"
          //  name="name"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
          <Input
            type="tel"
        //    name="phone"
            placeholder="Your Phone Number"
            {...register("phone", { required: true })}
          />
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="Preferred Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning</SelectItem>
              <SelectItem value="afternoon">Afternoon</SelectItem>
              <SelectItem value="evening">Evening</SelectItem>
            </SelectContent>
          </Select>
          <input
            type="hidden"
       //     name="preferredTime"
            {...register("preferredTime")}
          />
          <Button type="submit" className="w-full bg-green-500 text-white hover:bg-green-600">
            Schedule Call
          </Button>
        </form>
        {message && (
          <div className={`mt-4 text-center ${isSuccess ? "text-green-500" : "text-red-500"}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  )
}