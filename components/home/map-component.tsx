"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin } from "lucide-react"

// Define salon locations
const locations = [
  {
    name: "Venegas Salon & Spa",
    address: "297 Peterson Rd, Libertyville, IL 60048",
    phone: "+1 (224) 504-2113",
  },
]

export default function MapComponent() {
  const [activeLocation, setActiveLocation] = useState(0)
  
  const currentLocation = locations[activeLocation]
  
  // Create Google Maps URLs
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(currentLocation.address)}`
  const searchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentLocation.address)}`
  
  const handleMapClick = () => {
    window.open(directionsUrl, '_blank')
  }

  return (
    <div className="h-[400px] rounded-lg overflow-hidden shadow-md bg-white">
      <div className="h-full flex">
        {/* Location List */}
        <div className="w-1/3 bg-white p-4 overflow-y-auto border-r">
          <h3 className="font-bold text-lg mb-4 text-gray-900">Our Location</h3>
          {locations.map((location, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg mb-3 cursor-pointer transition-colors ${
                activeLocation === index ? "bg-yellow-400 text-black" : "bg-gray-50 hover:bg-gray-100"
              }`}
              onClick={() => setActiveLocation(index)}
            >
              <h4 className="font-semibold text-sm">{location.name}</h4>
              <p className="text-xs opacity-80 mt-1">{location.address}</p>
              <p className="text-xs opacity-80 mt-1">{location.phone}</p>
            </div>
          ))}
          
          <div className="mt-6 space-y-2">
            <Button 
              onClick={handleMapClick}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black text-sm"
              size="sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href="/booking">Book Appointment</Link>
            </Button>
          </div>
        </div>

        {/* Map Display Area */}
        <div className="flex-1 relative bg-gradient-to-br from-yellow-400/10 to-yellow-500/10">
          <div 
            className="h-full flex flex-col items-center justify-center cursor-pointer hover:bg-yellow-400/20 transition-colors p-6"
            onClick={handleMapClick}
          >
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-4 shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-10 h-10 text-black" />
            </div>
            <h4 className="font-bold text-xl mb-2 text-center text-gray-900">{currentLocation.name}</h4>
            <p className="text-gray-600 mb-2 text-center">{currentLocation.address}</p>
            <p className="text-gray-600 mb-4 text-center">{currentLocation.phone}</p>
            <div className="text-center">
              <p className="text-sm text-yellow-400 font-semibold mb-2">Click to open in Google Maps</p>
              <div className="flex space-x-2">
                                  <Button 
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(directionsUrl, '_blank')
                    }}
                    size="sm"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black"
                  >
                    Get Directions
                  </Button>
                                  <Button 
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(searchUrl, '_blank')
                    }}
                    variant="outline"
                    size="sm"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    View on Map
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
