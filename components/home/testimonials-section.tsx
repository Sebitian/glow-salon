"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    image: "/images/review-1.png",
    alt: "5-star review from Yoshio J about professional haircut and beard service by David Venegas",
  },
  {
    id: 2,
    image: "/images/review-2.png",
    alt: "5-star review from Alex D about consistent quality haircuts over 7 years",
  },
  {
    id: 3,
    image: "/images/review-3.png",
    alt: "5-star review from Rafael F about friendly service and comfortable experience",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="salon-section bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden animate-fadeIn">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-salon-pattern"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="salon-section-title">
          <h2 className="heading-lg">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Real reviews from our valued clients on Booksy. See why we maintain a 5.0/5 star rating.
          </p>
          <div className="flex items-center justify-center space-x-4 text-lg">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-2 text-2xl">★★★★★</span>
              <span className="font-semibold">5.0/5 stars</span>
            </div>
            <span>•</span>
            <span>250+ reviews on Booksy</span>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="salon-card p-8 shadow-salon">
                    <div className="relative w-full h-64 md:h-48 rounded-lg overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
