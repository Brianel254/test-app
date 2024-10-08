import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function GetInTouchSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
            </div>
            <Input type="tel" placeholder="Your Phone Number" required />
            <Textarea placeholder="Your Message" rows={4} required />
            <Button type="submit" className="w-full bg-green-500 text-white hover:bg-green-600">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}