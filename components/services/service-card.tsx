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
    booksyUrl: "https://booksy.com/en-us/104425_venegas-salon-spa_barber-shop_18204_libertyville?do=invite&from=business_page"
  },
  bita: {
    name: "Bita",
    title: "Stylist", 
    booksyUrl: "https://booksy.com/en-us/110565_bita-at-venegas-salon-spa_hair-salon_18204_libertyville?do=invite&from=business_page"
  },
  pumba: {
    name: "Pumba",
    title: "Stylist",
    booksyUrl: "https://booksy.com/en-us/117647_pumba-at-venegas-salon-spa_hair-salon_18204_libertyville?do=invite&from=business_page"
  }
}

// Service to barber mapping
const serviceBarberMapping: Record<string, string[]> = {
  // Men's Services
  "h1": ["david"], // Men's Cut
  "c3": ["david"], // Men's Color Gray Coverage
  "h3": ["david"], // Kids Cut
  
  // Women's Styling & Hair Services
  "s1": ["bita"], // Blow Out
  "s2": ["bita"], // Blow Out XL
  "s3": ["bita"], // Updo
  "s4": ["bita"], // Silk Press
  "h2": ["bita"], // Women's Cut
  
  // Color Services
  "c1": ["bita"], // All Over Color
  "c2": ["bita"], // Root Touch Up
  "c6": ["bita"], // Balayage
  "c7": ["bita"], // Fashion Color
  
  // Treatments
  "t1": ["bita"], // Scalp Treatment Add On
  "t2": ["bita"], // Deep Conditioning Add On
  "t3": ["bita"], // Keratin Treatment
  
  // Natural Hair Services
  "n1": ["pumba"], // Retwist No Style
  "n2": ["pumba"], // Retwist Basic Style
  "n3": ["pumba"], // Retwist Specialty Style
  "n4": ["pumba"], // Natural Twist Style
  "n5": ["pumba"], // Box Braids
  "n6": ["pumba"], // Stitch Braids
  "n7": ["pumba"], // Starter Locs
  "s5": ["pumba"], // Wig Braid Down
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
    <div className="salon-card overflow-hidden shadow-salon hover:shadow-salon-hover transition-all group flex flex-col h-full">
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
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4 text-gray-800" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4 text-gray-800" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {service.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
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
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{service.description}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-primary font-semibold">
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
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-md"
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
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full shadow-md"
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
