"use client"

import { MapPin, Navigation, Phone } from "lucide-react"

export default function ContactMapComponent() {
  const salonAddress = "297 Peterson Rd, Libertyville, IL 60048"
  const encodedAddress = encodeURIComponent(salonAddress)

  const handleDirections = () => {
    window.open(`https://maps.google.com/maps?daddr=${encodedAddress}`, '_blank')
  }

  const handleCall = () => {
    window.open('tel:+12245042113', '_self')
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-md h-[400px] bg-gradient-to-br from-amber-400/10 to-secondary/10 flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mb-6 mx-auto">
          <MapPin className="h-10 w-10 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2">Visit Our Salon</h3>
        <p className="text-gray-600 mb-2 font-medium">Venegas Salon & Spa</p>
        <p className="text-gray-600 mb-4">{salonAddress}</p>
        
        <div className="space-y-3">
          <button
            onClick={handleDirections}
            className="inline-flex items-center justify-center gap-2 bg-amber-400 text-white px-6 py-2 rounded-full hover:bg-amber-500 transition-colors font-medium"
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </button>
          
          <div className="flex gap-2 justify-center">
            <button
              onClick={handleCall}
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-500 font-medium text-sm"
            >
              <Phone className="h-4 w-4" />
              (224) 504-2113
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
