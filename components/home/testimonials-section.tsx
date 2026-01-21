"use client"

import { useEffect, useRef } from "react"

const testimonials = [
  {
    id: 1,
    text: "David provides exceptional professional haircuts and beard services. Always leaves looking sharp and feeling confident!",
    author: "Yoshio J.",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    id: 2,
    text: "I've been coming here for 7 years and the quality is always consistent. Never disappointed with the results.",
    author: "Alex D.",
    rating: 5,
    date: "1 month ago",
  },
  {
    id: 3,
    text: "Friendly service and such a comfortable experience. The atmosphere makes you feel right at home.",
    author: "Rafael F.",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    id: 4,
    text: "Best salon experience I've had! The attention to detail and professionalism is unmatched.",
    author: "Maria S.",
    rating: 5,
    date: "1 week ago",
  },
  {
    id: 5,
    text: "Amazing transformation every time. David really knows how to work with different hair types.",
    author: "James K.",
    rating: 5,
    date: "2 months ago",
  },
  {
    id: 6,
    text: "Clean, professional, and the results speak for themselves. Highly recommend to anyone!",
    author: "Sarah L.",
    rating: 5,
    date: "5 days ago",
  },
]

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const containerWidth = scrollContainer.clientWidth

    let animationId: number
    let currentPosition = 0

    const scroll = () => {
      currentPosition += 0.5 // Adjust speed by changing this value
      
      if (currentPosition >= scrollWidth / 2) {
        currentPosition = 0
      }
      
      scrollContainer.scrollLeft = currentPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="section-padding bg-[#1A1C20] relative overflow-hidden">
      <div className="container-custom relative z-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-white">What Our Customers Say</h2>
          <div className="flex items-center justify-center space-x-4 text-lg mb-2">
            <div className="flex items-center">
              <span className="text-primary mr-2 text-2xl">★★★★★</span>
              <span className="font-semibold text-gray-200">5/5 stars on Booksy</span>
            </div>
            {/* <span className="text-gray-400">•</span> */}
            {/* <span className="text-gray-400">500+ reviews across platforms</span> */}
           </div>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-hidden gap-8"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-80 salon-card p-6 hover-lift bg-white shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-primary text-lg">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{testimonial.date}</span>
                </div>
                <p className="text-gray-900 text-base leading-relaxed mb-4 font-medium">
                  "{testimonial.text}"
                </p>
                <p className="text-primary font-semibold text-sm">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays to fade edges */}
          <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-[#1A1C20] to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-[#1A1C20] to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  )
}
