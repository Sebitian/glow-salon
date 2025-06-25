"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Define salon locations
const locations = [
  {
    name: "Glow Salon - Bandra",
    address: "123 Bandra West, Mumbai 400050",
    phone: "+91 98765 43210",
  },
  {
    name: "Glow Salon - Andheri",
    address: "456 Andheri East, Mumbai 400069",
    phone: "+91 98765 43211",
  },
  {
    name: "Glow Salon - Powai",
    address: "789 Powai, Mumbai 400076",
    phone: "+91 98765 43212",
  },
]

export default function MapComponent() {
  const [activeLocation, setActiveLocation] = useState(0)

  return (
    <div className="h-[400px] rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="h-full flex">
        {/* Location List */}
        <div className="w-1/3 bg-white p-4 overflow-y-auto">
          <h3 className="font-bold text-lg mb-4">Our Locations</h3>
          {locations.map((location, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg mb-3 cursor-pointer transition-colors ${
                activeLocation === index ? "bg-primary text-white" : "bg-gray-50 hover:bg-gray-100"
              }`}
              onClick={() => setActiveLocation(index)}
            >
              <h4 className="font-semibold text-sm">{location.name}</h4>
              <p className="text-xs opacity-80 mt-1">{location.address}</p>
              <p className="text-xs opacity-80">{location.phone}</p>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="flex-1 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">📍</span>
            </div>
            <h4 className="font-bold text-lg mb-2">{locations[activeLocation].name}</h4>
            <p className="text-gray-600 mb-2">{locations[activeLocation].address}</p>
            <p className="text-gray-600 mb-4">{locations[activeLocation].phone}</p>
            <Button asChild size="sm" className="bg-primary text-white">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
