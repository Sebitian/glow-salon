"use client"

import { useState } from "react"
import { Instagram, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"

// Extended the array to have more images for carousel demonstration
const instagramPosts = [
  "images/opening.png",
  "images/ig.png",
  "images/ig4.png",
  "images/ig5.png",
  "images/ig6.png",
  "images/ig7.png",
  "images/salon2.jpg",
  "images/pumba.jpg",
  "images/ig9.png",
  "images/ig8.png",
  "images/ig10.png",
]

export default function InstagramSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const openLightbox = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc)
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setSelectedIndex(null)
  }

  const itemsPerSlide = 4
  const totalSlides = Math.ceil(instagramPosts.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  const getVisibleItems = () => {
    const start = currentSlide * itemsPerSlide
    const end = start + itemsPerSlide
    return instagramPosts.slice(start, end)
  }

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-6 text-yellow-400">Join Our Instagram Community</h2>
          <p className="text-xl text-white mb-8">
            Follow us on Instagram for daily inspiration, behind-the-scenes content, and exclusive offers.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-8">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-yellow-400/90 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Previous images"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-yellow-400/90 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Next images"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          {/* Images Container */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {instagramPosts
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((post, index) => (
                        <div 
                          key={`${slideIndex}-${index}`}
                          className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover-lift group"
                          onClick={() => openLightbox(post, slideIndex * itemsPerSlide + index)}
                        >
                          <Image
                            src={post || "/placeholder.svg"}
                            alt={`Instagram post ${slideIndex * itemsPerSlide + index + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                                <Instagram className="w-4 h-4 text-gray-800" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modern Dot Indicators */}
        <div className="flex justify-center space-x-3 mb-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-yellow-400' 
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Instagram Follow Button */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-yellow-400 hover:bg-gray-100 text-black items-center gap-2 px-8">
            <a href="https://www.instagram.com/venegassalonspa/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
              Follow Us on Instagram
            </a>
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
          <div className="relative">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 z-50 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>
            
            {selectedImage && (
              <div className="relative w-full h-[80vh] rounded-lg overflow-hidden bg-white">
                <Image
                  src={selectedImage}
                  alt={`Instagram post ${(selectedIndex ?? 0) + 1} - enlarged view`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
