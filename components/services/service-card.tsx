"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

// Barber data with their Booksy URLs
const barbers = {
  david: {
    name: "David",
    title: "Owner & Barber",
    booksyUrl: "https://booksy.com/en-us/481608_ds-cuts_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVdzLJLg5yzw8uDEyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUANPssMTwAAAA%3D"
  },
  bita: {
    name: "Bita",
    title: "Stylist", 
    booksyUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville/staffer/1425005#ba_s=dl_1"
  },
  izzy: {
    name: "Izzy",
    title: "Stylist",
    booksyUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville/staffer/1432902#ba_s=dl_1"
  },
  luis: {
    name: "Pumba",
    title: "Barber",
    booksyUrl: "https://booksy.com/en-us/1409092_pumba-cuts_barber-shop_18695_libertyville#ba_s=seo"
  },
  alex: {
    name: "Alex",
    title: "Barber",
    booksyUrl: "https://booksy.com/en-us/481608_ds-cuts_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVdzLJLg5yzw8uDEyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUANPssMTwAAAA%3D"
  },
  diana: {
    name: "Diana",
    title: "Hair stylist",
    booksyUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville/staffer/1532292#ba_s=seo"
  }
}

// Service to barber mapping
const serviceBarberMapping: Record<string, string[]> = {
  // Original Services
  "h1": ["david", "izzy", "luis"], // Men's Cut
  "c3": ["david", "izzy"], // Men's Color Gray Coverage
  "h3": ["bita", "izzy"], // Kids Cut
  
  // Women's Styling & Hair Services
  "s1": ["bita", "izzy"], // Blow Out
  "s2": ["bita", "izzy"], // Blow Out XL
  "s3": ["bita", "izzy"], // Updo
  "s4": ["bita", "izzy"], // Silk Press
  "h2": ["bita", "izzy"], // Women's Cut
  
  // Color Services
  "c1": ["bita", "izzy"], // All Over Color
  "c2": ["bita", "izzy"], // Root Touch Up
  "c6": ["bita", "izzy"], // Balayage
  "c7": ["bita", "izzy"], // Fashion Color
  
  // Treatments
  "t1": ["bita", "izzy"], // Scalp Treatment Add On
  "t2": ["bita", "izzy"], // Deep Conditioning Add On
  "t3": ["bita", "izzy"], // Keratin Treatment
  
  // Natural Hair Services
  "n1": ["izzy"], // Retwist No Style
  "n2": ["izzy"], // Retwist Basic Style
  "n3": ["izzy"], // Retwist Specialty Style
  "n4": ["izzy"], // Natural Twist Style
  "n5": ["izzy"], // Box Braids
  "n6": ["izzy"], // Stitch Braids
  "n7": ["izzy"], // Starter Locs
  "s5": ["bita", "izzy"], // Wig Braid Down
  
  // David's Services
  "h4": ["david"], // Haircut (Fades)
  "h5": ["david"], // Haircut (Fades) & Beard
  "h6": ["david"], // Haircut (Fades) & Eyebrows
  "h7": ["david"], // Haircut (Fades), Beard & Eyebrows
  "h8": ["david"], // Kids Cut (Fades not included)
  "h9": ["david"], // Serious Cuts
  "t4": ["david"], // Beard Trim
  "t5": ["david"], // Shave
  
  // Pumba's Services
  "s6": ["luis"], // Blowout
  "s7": ["luis"], // Blowout & Eyebrows
  "s8": ["luis"], // Haircut & Blowout
  "s9": ["luis"], // Haircut, Blowout & Eyebrows
  "h16": ["luis"], // Haircut & Eyebrows
  
  // Alex's Services
  "h10": ["alex"], // Haircut (Skin, Bald, Taper & Eyebrows)
  "h11": ["alex"], // Kids Haircut (5-12)
  "h12": ["alex"], // Haircut & Beard (Fades, Tapers, etc)
  "h13": ["alex"], // Haircut & Eyebrows
  "h14": ["alex"], // Haircut, Beard & Eyebrows (Fades, Tapers, etc)
  "h15": ["alex"], // Senior Haircut
  "t6": ["alex"], // Beard Shaping
  "t7": ["alex"], // Eyebrows
  "t8": ["alex"], // Line Up
}

interface ServiceProps {
  service: {
    id: string
    name: string
    description: string
    price: number | string
    priceNote?: string
    duration: string
    images: string[]
  }
}

export default function ServiceCard({ service }: ServiceProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const formatPrice = () => {
    if (typeof service.price === "string") {
      return service.price
    }
    return `$${service.price}${service.priceNote || ""}`
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % service.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length)
  }

  // Get available barbers for this service
  const availableBarbers = serviceBarberMapping[service.id] || []

  return (
    <div className="salon-card overflow-hidden shadow-salon hover:shadow-lg hover:shadow-yellow-400/20 transition-all group flex flex-col h-full border border-transparent hover:border-yellow-400">
      <div className="relative h-72">
        <Image
          src={service.images[currentImageIndex] || "/placeholder.svg"}
          alt={`${service.name} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Image Navigation - Only show if multiple images */}
        {service.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-400 hover:text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all shadow-md"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4 text-gray-800 hover:text-white transition-colors" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-400 hover:text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all shadow-md"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4 text-gray-800 hover:text-white transition-colors" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {service.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors hover:bg-yellow-400 ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">{service.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{service.description}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-amber-400 text-2xl font-bold">
            <span>{formatPrice()}</span>
          </div>

          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{service.duration}</span>
          </div>
        </div>

        {/* Barber-specific booking buttons */}
        <div className="space-y-2 mt-auto">
          {availableBarbers.map((barberId) => {
            const barber = barbers[barberId as keyof typeof barbers]
            return (
              <Button
                key={barberId}
                asChild
                className="w-full bg-yellow-400 text-black-foreground border-solid border-2 border-black hover:bg-yellow-500 hover:text-white hover:border-yellow-500 rounded-full shadow-md transition-all duration-300"
              >
                <a
                  href={barber.booksyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Book with {barber.name}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )
          })}
          
          {/* Fallback button if no barbers mapped */}
          {availableBarbers.length === 0 && (
            <Button
              asChild
              className="w-full bg-yellow-400 text-black hover:bg-yellow-500 hover:text-white hover:border-yellow-500 rounded-full shadow-md transition-all duration-300"
            >
              <a href="/booking" className="flex items-center justify-center gap-2">
                Book Now
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
