'use client'

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import useWeb3Forms from "@web3forms/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const insuranceTypes = ["Life", "Motor", "Home", "Medical", "Travel", "Business"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const days = Array.from({ length: 31 }, (_, i) => i + 1)
const currentYear = new Date().getFullYear()
const years = Array.from({ length: 100 }, (_, i) => currentYear - i)

const businessInsuranceTypes = [
  "Workers' Compensation",
  "Professional Indemnity",
  "General Liability",
  "Property Insurance",
  "Cyber Liability",
  "Business Interruption",
  "Product Liability",
  "Commercial Auto",
  "Directors and Officers",
  "Employment Practices Liability"
]

export default function QuoteForm() {
  const { register, control, reset, handleSubmit, watch } = useForm()
  const [isSuccess, setIsSuccess] = useState(false)
  const [message, setMessage] = useState("")
  const [activeTab, setActiveTab] = useState("Life")

  const { submit: onSubmit } = useWeb3Forms({
    access_key: "f440c534-2d10-4982-bbc6-4bd8b1aa7ed6",
    settings: {
      from_name: "Jimmy's Insurance Agency",
      subject: "New Quote Request from Jimmy's Insurance Website",
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Personal Information</h3>
        <Input
          type="text"
       //   name="name"
          placeholder="Your Name"
          {...register("name", { required: true })}
        />
        <Input
          type="tel"
        //  name="phone"
          placeholder="Your Phone Number"
          {...register("phone", { required: true })}
        />
        <Input
          type="email"
      //    name="email"
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        <Input
          type="text"
        //  name="address"
          placeholder="Your Address"
          {...register("address", { required: true })}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Insurance Information</h3>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-16">
            {insuranceTypes.map((type) => (
              <TabsTrigger key={type} value={type}>{type}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="Life" className="space-y-4">
            <div className="grid grid-cols-3 gap-4 mt-30">
              <Controller
                name="lifeBirthMonth"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month) => (
                        <SelectItem key={month} value={month}>{month}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              <Controller
                name="lifeBirthDay"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Day" />
                    </SelectTrigger>
                    <SelectContent>
                      {days.map((day) => (
                        <SelectItem key={day} value={day.toString()}>{day}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              <Controller
                name="lifeBirthYear"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <Controller
              name="lifePlan"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Which Life Plan?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="term">Term Life</SelectItem>
                    <SelectItem value="whole">Whole Life</SelectItem>
                    <SelectItem value="universal">Universal Life</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <Input
              type="text"
          //    name="lifeInsuranceAmount"
              placeholder="How much life insurance do you want us to quote?"
              {...register("lifeInsuranceAmount")}
            />
            <Input
              type="text"
           //   name="height"
              placeholder="Height (e.g., 6'1'')"
              {...register("height")}
            />
            <Input
              type="text"
           //   name="weight"
              placeholder="Weight (e.g., 110lbs)"
              {...register("weight")}
            />
            <Textarea
           //   name="healthIssues"
              placeholder="Describe any health issues"
              {...register("healthIssues")}
            />
            <Input
              type="text"
           //   name="existingLifeInsurance"
              placeholder="Total life insurance on you right now"
              {...register("existingLifeInsurance")}
            />
            <div className="space-y-2">
              <Checkbox id="cancelExisting" {...register("cancelExisting")} />
              <Label htmlFor="cancelExisting">Are you planning on cancelling any existing life insurance?</Label>
            </div>
            <div className="space-y-2">
              <Checkbox id="groupLifeInsurance" {...register("groupLifeInsurance")} />
              <Label htmlFor="groupLifeInsurance">Do you have group life insurance through work?</Label>
            </div>
          </TabsContent>
          <TabsContent value="Motor" className="space-y-4">
            <Controller
              name="motorInsuranceType"
              control={control}
              render={({ field }) => (
                <RadioGroup onValueChange={field.onChange} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comprehensive" id="comprehensive" />
                    <Label htmlFor="comprehensive">Comprehensive</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="thirdParty" id="thirdParty" />
                    <Label htmlFor="thirdParty">Third Party</Label>
                  </div>
                </RadioGroup>
              )}
            />
            <Input
              type="text"
          //    name="vehicleType"
              placeholder="Type of Vehicle"
              {...register("vehicleType")}
            />
            <Input
              type="number"
          //    name="manufacturingYear"
              placeholder="Year of Manufacturing"
              {...register("manufacturingYear")}
            />
            <Input
              type="text"
          //    name="liabilityLimit"
              placeholder="Class of Insurance:(private, PSV ...)"
              {...register("classofinsurance")}
            />
          </TabsContent>
          <TabsContent value="Home" className="space-y-4">
            <Input
              type="number"
         //     name="bedrooms"
              placeholder="Number of Bedrooms"
              {...register("bedrooms")}
            />
            <Input
              type="number"
          //    name="bathrooms"
              placeholder="Number of Baths"
              {...register("bathrooms")}
            />
            <div className="space-y-2">
              <Checkbox id="pool" {...register("pool")} />
              <Label htmlFor="pool">Pool?</Label>
            </div>
            <div className="space-y-2">
              <Checkbox id="fencedYard" {...register("fencedYard")} />
              <Label htmlFor="fencedYard">Is the yard Fenced?</Label>
            </div>
            <Controller
              name="roofType"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Roof Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shingle">Shingle</SelectItem>
                    <SelectItem value="tile">Tile</SelectItem>
                    <SelectItem value="metal">Metal</SelectItem>
                    <SelectItem value="flat">Flat</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <Input
              type="number"
           //   name="roofAge"
              placeholder="Age of Roof"
              {...register("roofAge")}
            />
            <Input
              type="number"
          //    name="garageCapacity"
              placeholder="Garage (# of Cars)"
              {...register("garageCapacity")}
            />
            <Textarea
            //  name="floorTypes"
              placeholder="Please list all flooring types (Tile/Carpet/Laminate/etc.)"
              {...register("floorTypes")}
            />
            <Textarea
            //  name="flooringPercentage"
              placeholder="What% of each flooring type? (Example 70% Tile 30% Carpet)"
              {...register("flooringPercentage")}
            />
            <Textarea
            //  name="updates"
              placeholder="Updates to Electrical, Plumbing, or A/C? Please list and provide approx month/year of update for each."
              {...register("updates")}
            />
            <Textarea
           //   name="claims"
              placeholder="Claims in last 5 years? Describe what type and how much was paid"
              {...register("claims")}
            />
            <Input
              type="number"
           //   name="yearBuilt"
              placeholder="Year Built"
              {...register("yearBuilt")}
            />
            <Input
              type="text"
           //   name="homeSqFt"
              placeholder="Home Sq. Ft."
              {...register("homeSqFt")}
            />
            <Input
              type="text"
            //  name="poolSqFt"
              placeholder="Pool Sq. Ft."
              {...register("poolSqFt")}
            />
            <Input
              type="text"
          //    name="patioSqFt"
              placeholder="Patio Sq. Ft."
              {...register("patioSqFt")}
            />
            <Input
              type="text"
           //   name="porchSqFt"
              placeholder="Porch Sq. Ft."
              {...register("porchSqFt")}
            />
          </TabsContent>
          <TabsContent value="Medical" className="space-y-4">
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <RadioGroup onValueChange={field.onChange} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              )}
            />
            <Input
              type="number"
            //  name="age"
              placeholder="Age"
              {...register("age")}
            />
            <Controller
            name="patientStatus"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Patient Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New Patient</SelectItem>
                    <SelectItem value="existing">Existing Patient</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <div className="grid grid-cols-3 gap-4">
              <Controller
                name="medicalBirthMonth"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month) => (
                        <SelectItem key={month} value={month}>{month}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              <Controller
               name="medicalBirthDay"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Day" />
                    </SelectTrigger>
                    <SelectContent>
                      {days.map((day) => (
                        <SelectItem key={day} value={day.toString()}>{day}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              <Controller
              name="medicalBirthYear"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <Textarea
            //  name="otherApplicants"
              placeholder="Other applicants to be covered - partner/children"
              {...register("otherApplicants")}
            />
          </TabsContent>
          <TabsContent value="Travel" className="space-y-4">
            <Input
              type="text"
             // name="destination"
              placeholder="Destination"
              {...register("destination")}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="date"
            //    name="departureDate"
                placeholder="Departure Date"
                {...register("departureDate")}
              />
              <Input
                type="date"
            //    name="returnDate"
                placeholder="Return Date"
                {...register("returnDate")}
              />
            </div>
            <Input
              type="number"
        //      name="travelers"
              placeholder="Number of Travelers"
              {...register("travelers")}
            />
            <Controller
              name="travelPurpose"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Purpose of Travel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="leisure">Leisure</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="study">Study</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <div className="space-y-2">
              <Checkbox id="medicalCoverage" {...register("medicalCoverage")} />
              <Label htmlFor="medicalCoverage">Include Medical Coverage?</Label>
            </div>
            <div className="space-y-2">
              <Checkbox id="tripCancellation" {...register("tripCancellation")} />
              <Label htmlFor="tripCancellation">Include Trip Cancellation Coverage?</Label>
            </div>
          </TabsContent>
          <TabsContent value="Business" className="space-y-4">
            <Controller
              name="businessInsuranceType"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Business Insurance Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessInsuranceTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <Input
              type="text"
           //   name="businessName"
              placeholder="Business Name"
              {...register("businessName")}
            />
            <Input
              type="text"
            //  name="industry"
              placeholder="Industry"
              {...register("industry")}
            />
            <Input
              type="number"
            //  name="employees"
              placeholder="Number of Employees"
              {...register("employees")}
            />
            <Input
              type="text"
          //    name="annualRevenue"
              placeholder="Annual Revenue"
              {...register("annualRevenue")}
            />
            <Textarea
          //    name="businessDescription"
              placeholder="Brief description of your business operations"
              {...register("businessDescription")}
            />
          </TabsContent>
        </Tabs>
      </div>

      <Textarea
        //name="additionalInfo"
        placeholder="Any additional information or specific requirements?"
        {...register("additionalInfo")}
      />

      <Button type="submit" className="w-full bg-green-500 text-white hover:bg-green-600">
        Get Quote
      </Button>

      {message && (
        <div className={`mt-4 text-center ${isSuccess ? "text-green-500" : "text-red-500"}`}>
          {message}
        </div>
      )}
    </form>
  )
}
