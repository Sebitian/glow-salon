"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, ChevronLeft, ChevronRight } from "lucide-react"

interface ServiceProps {
  service: {
    id: string
    name: string
    description: string
    price: number | string
    priceNote?: string
    duration: string
    images: string[] // Changed from single image to array of images
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

  return (
    <div className="salon-card overflow-hidden shadow-salon hover:shadow-salon-hover transition-all group">
      <div className="relative h-48">
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

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-primary font-semibold">
            <span>{formatPrice()}</span>
          </div>

          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{service.duration}</span>
          </div>
        </div>

        {/* Show image count if multiple images */}
        {service.images.length > 1 && (
          <div className="text-xs text-gray-500 mb-3 text-center">
            {currentImageIndex + 1} of {service.images.length} photos
          </div>
        )}

        <Button
          asChild
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full shadow-md"
        >
          <Link href={`/booking?service=${encodeURIComponent(service.name)}`}>Book Now</Link>
        </Button>
      </div>
    </div>
  )
}
