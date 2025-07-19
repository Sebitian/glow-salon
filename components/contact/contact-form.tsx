"use client"

import { MapPin, Navigation, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const salonAddress = "297 Peterson Rd, Libertyville, IL 60048"
  const encodedAddress = encodeURIComponent(salonAddress)

  const handleDirections = () => {
    window.open(`https://maps.google.com/maps?daddr=${encodedAddress}`, '_blank')
  }

  const handleViewOnMaps = () => {
    window.open(`https://maps.google.com/maps?q=${encodedAddress}`, '_blank')
  }

  const handleCall = () => {
    window.open('tel:+12245042113', '_self')
  }

  return (
    <div className="salon-card p-8 shadow-salon">
      <h2 className="heading-md mb-6 flex items-center">
        <span className="w-8 h-0.5 bg-primary mr-2"></span>
        Find Our Salon
      </h2>

      {/* Google Maps Embed - No API Key Required */}
      <div className="rounded-lg overflow-hidden shadow-md h-[400px] mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.8254234567!2d-87.9528!3d42.2737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcc5e12345678%3A0x1234567890abcdef!2s297%20Peterson%20Rd%2C%20Libertyville%2C%20IL%2060048%2C%20USA!5e0!3m2!1sen!2sus!4v1640123456789!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Venegas Salon & Spa Location"
        />
      </div>

      {/* Address and Action Buttons */}
      <div className="space-y-4">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-yellow-400 shrink-0 mt-1 mr-3" />
          <div>
            <h3 className="font-semibold text-lg mb-1">Venegas Salon & Spa</h3>
            <p className="text-gray-600">{salonAddress}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <div className="p-0.5 rounded-lg bg-gradient-to-r from-green-500 via-green-400 to-green-500">
            <div className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-all duration-300">
              <button onClick={handleCall} className="flex items-center gap-2 text-sm font-bold text-white">
                <Phone className="h-4 w-4 text-white" />
                Call Now
              </button>
            </div>
          </div>

          <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500">
            <div className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-all duration-300">
              <button onClick={handleViewOnMaps} className="flex items-center gap-2 text-sm font-bold text-white">
                <MapPin className="h-4 w-4 text-white" />
                View on Google Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
