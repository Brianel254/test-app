'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import useWeb3Forms from "@web3forms/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function ClaimForm() {
  const { register, control, reset, handleSubmit } = useForm()
  const [isSuccess, setIsSuccess] = useState(false)
  const [message, setMessage] = useState("")

  const { submit: onSubmit } = useWeb3Forms({
    access_key: "f440c534-2d10-4982-bbc6-4bd8b1aa7ed6",
    settings: {
      from_name: "Jimmy's Insurance Agency",
      subject: "New Claim Submission from Jimmy's Insurance Website",
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
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-6 bg-white p-6 rounded-lg shadow-md max-w-2xl ">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Your Full Name"
          {...register("name", { required: true })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="policyNumber">Policy Number</Label>
        <Input
          id="policyNumber"
          type="text"
          placeholder="Your Policy Number"
          {...register("policyNumber", { required: true })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="claimType">Type of Claim</Label>
        <Select onValueChange={(value) => register("claimType").onChange({ target: { value } })}>
          <SelectTrigger>
            <SelectValue placeholder="Select Claim Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="auto">Auto</SelectItem>
            <SelectItem value="home">Home</SelectItem>
            <SelectItem value="life">Life</SelectItem>
            <SelectItem value="health">Health</SelectItem>
            <SelectItem value="travel">Travel</SelectItem>
            <SelectItem value="business">Business</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="incidentDate">Date of Incident</Label>
        <Input
          id="incidentDate"
          type="date"
          {...register("incidentDate", { required: true })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description of Incident</Label>
        <Textarea
          id="description"
          placeholder="Please provide a detailed description of the incident"
          {...register("description", { required: true })}
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="claimAmount">Estimated Claim Amount (Ksh)</Label>
        <Input
          id="claimAmount"
          type="number"
          placeholder="Enter amount in Ksh"
          {...register("claimAmount", { required: true })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactNumber">Contact Number</Label>
        <Input
          id="contactNumber"
          type="tel"
          placeholder="Your Contact Number"
          {...register("contactNumber", { required: true })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="Your Email Address"
          {...register("email", { required: true })}
        />
      </div>

      <Button type="submit" className="w-full bg-green-500 text-white hover:bg-green-600">
        Submit Claim
      </Button>

      {message && (
        <div className={`mt-4 text-center ${isSuccess ? "text-green-500" : "text-red-500"}`}>
          {message}
        </div>
      )}
    </form>
  )
}