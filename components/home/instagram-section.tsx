"use client"

import { useState } from "react"
import { Instagram, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"

const instagramPosts = [
  "images/opening.png",
  "images/ig.png",
  "images/ig2.png",
  "images/ig3.png",
  ]

export default function InstagramSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc)
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setSelectedIndex(null)
  }

  return (
    <section className="section-padding bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-6">Join Our Instagram Community</h2>
          <p className="text-xl text-gray-600 mb-8">
            Follow us on Instagram for daily inspiration, behind-the-scenes content, and exclusive offers.
          </p>
          {/* <div className="flex items-center justify-center mb-8">
            <Instagram className="w-12 h-12 text-primary mr-4" />
            <span className="text-4xl font-bold gradient-text">35K+ Followers</span>
          </div> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {instagramPosts.map((post, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover-lift group"
              onClick={() => openLightbox(post, index)}
            >
              <Image
                src={post || "/placeholder.svg"}
                alt={`Instagram post ${index + 1}`}
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

        <div className="text-center">
          <Button asChild size="lg">
            <a href="https://www.instagram.com/venegassalonspa/" target="_blank" rel="noopener noreferrer">
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
