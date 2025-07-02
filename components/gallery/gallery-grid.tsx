"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Scissors, Palette, Sparkles, Users } from "lucide-react"

// Gallery data with real salon images
const galleryItems = {
  all: [
    // Men's Haircuts
    {
      id: 1,
      src: "/images/haircut-1.jpeg",
      alt: "Professional men's fade haircut with beard styling",
      category: "hair",
    },
    {
      id: 2,
      src: "/images/haircut-2.jpeg",
      alt: "Men's curly hair fade cut",
      category: "hair",
    },
    {
      id: 3,
      src: "/images/haircut-3.jpeg",
      alt: "Clean men's fade with beard trim",
      category: "hair",
    },
    {
      id: 4,
      src: "/images/haircut-4.jpeg",
      alt: "Kids haircut with modern fade",
      category: "hair",
    },
    // Women's Hair Services
    {
      id: 5,
      src: "/images/womens-cut.jpeg",
      alt: "Women's layered haircut",
      category: "hair",
    },
    {
      id: 6,
      src: "/images/bob-highlights.jpeg",
      alt: "Sleek bob with highlights and balayage",
      category: "hair",
    },
    {
      id: 7,
      src: "/images/updo-styling.jpeg",
      alt: "Elegant updo with pearl accessories",
      category: "hair",
    },
    {
      id: 8,
      src: "/images/balayage-1.jpeg",
      alt: "Beautiful balayage hair coloring technique",
      category: "hair",
    },
    // Color Services
    {
      id: 9,
      src: "/images/all-over-color-1.jpeg",
      alt: "All-over hair color transformation",
      category: "hair",
    },
    {
      id: 10,
      src: "/images/all-over-color-2.jpeg",
      alt: "Vibrant all-over color treatment",
      category: "hair",
    },
    {
      id: 11,
      src: "/images/all-over-color-3.jpeg",
      alt: "Professional hair color application",
      category: "hair",
    },
    {
      id: 12,
      src: "/images/fashion-color-1.jpeg",
      alt: "Creative fashion color styling",
      category: "hair",
    },
    {
      id: 13,
      src: "/images/fashion-color-2.jpeg",
      alt: "Bold fashion color transformation",
      category: "hair",
    },
    {
      id: 14,
      src: "/images/root-touch-up-1.jpeg",
      alt: "Root touch-up color service",
      category: "hair",
    },
    // Braiding and Natural Hair
    {
      id: 15,
      src: "/images/mens-braids.jpeg",
      alt: "Intricate men's braiding patterns",
      category: "hair",
    },
    {
      id: 16,
      src: "/images/box-braids-2.jpeg",
      alt: "Professional box braids styling",
      category: "hair",
    },
    {
      id: 17,
      src: "/images/box-braids-3.jpeg",
      alt: "Beautiful box braids with accessories",
      category: "hair",
    },
    {
      id: 18,
      src: "/images/stitch-braids-2.jpeg",
      alt: "Precise stitch braids technique",
      category: "hair",
    },
    {
      id: 19,
      src: "/images/stitch-braids-3.jpeg",
      alt: "Elegant stitch braids styling",
      category: "hair",
    },
    {
      id: 20,
      src: "/images/natural-twist-style.jpeg",
      alt: "Natural twist hairstyle",
      category: "hair",
    },
    {
      id: 21,
      src: "/images/natural-twist-style-2.jpeg",
      alt: "Creative natural twist styling",
      category: "hair",
    },
    {
      id: 22,
      src: "/images/natural-twist-style-3.jpeg",
      alt: "Professional natural twist technique",
      category: "hair",
    },
    {
      id: 23,
      src: "/images/natural-twist-style-4.jpeg",
      alt: "Elegant natural twist updo",
      category: "hair",
    },
    {
      id: 24,
      src: "/images/natural-twist-style-5.jpeg",
      alt: "Stylish natural twist pattern",
      category: "hair",
    },
    {
      id: 25,
      src: "/images/natural-twist-style-6.jpeg",
      alt: "Beautiful natural twist arrangement",
      category: "hair",
    },
    {
      id: 26,
      src: "/images/natural-twist-style-7.jpeg",
      alt: "Modern natural twist style",
      category: "hair",
    },
    // Locs and Retwist Services
    {
      id: 27,
      src: "/images/locs-styling.jpeg",
      alt: "Professional loc maintenance and styling",
      category: "hair",
    },
    {
      id: 28,
      src: "/images/retwist-basic-style-1.jpeg",
      alt: "Basic retwist styling service",
      category: "hair",
    },
    {
      id: 29,
      src: "/images/retwist-basic-style-2.jpeg",
      alt: "Clean retwist with basic styling",
      category: "hair",
    },
    {
      id: 30,
      src: "/images/retwist-basic-style-3.jpeg",
      alt: "Professional basic retwist technique",
      category: "hair",
    },
    {
      id: 31,
      src: "/images/retwist-specialty-style-2.jpeg",
      alt: "Specialty retwist with advanced styling",
      category: "hair",
    },
    {
      id: 32,
      src: "/images/retwist-specialty-style-3.jpeg",
      alt: "Creative specialty retwist design",
      category: "hair",
    },
    {
      id: 33,
      src: "/images/retwist-no-style.jpeg",
      alt: "Basic retwist maintenance",
      category: "hair",
    },
    // Hair Treatments
    {
      id: 34,
      src: "/images/keratin-treatment-before-after.jpeg",
      alt: "Keratin treatment before and after results",
      category: "hair",
    },
    {
      id: 35,
      src: "/images/deep-conditioning-treatment.png",
      alt: "Deep conditioning hair treatment",
      category: "hair",
    },
    {
      id: 36,
      src: "/images/wig-braid-down.png",
      alt: "Wig styling and braid down service",
      category: "hair",
    },
    // Spa Services (using spa.png for this category)
    {
      id: 37,
      src: "/images/spa.png",
      alt: "Relaxing spa treatment",
      category: "spa",
    },
    // Salon Interior
    {
      id: 38,
      src: "/images/salon.jpg",
      alt: "Venegas Salon interior",
      category: "salon",
    },
    {
      id: 39,
      src: "/images/opening.png",
      alt: "Salon opening celebration",
      category: "salon",
    },
  ],
  get hair() {
    return this.all.filter((item) => item.category === "hair")
  },
  get spa() {
    return this.all.filter((item) => item.category === "spa")
  },
  get salon() {
    return this.all.filter((item) => item.category === "salon")
  },
}

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedAlt, setSelectedAlt] = useState<string>("")

  return (
    <>
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-white/90 backdrop-blur-sm shadow-md border">
            <TabsTrigger value="all" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white">
              <Users className="h-4 w-4" />
              <span>All</span>
            </TabsTrigger>
            <TabsTrigger value="hair" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white">
              <Scissors className="h-4 w-4" />
              <span>Hair Services</span>
            </TabsTrigger>
            <TabsTrigger value="spa" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white">
              <Sparkles className="h-4 w-4" />
              <span>Spa</span>
            </TabsTrigger>
            <TabsTrigger value="salon" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white">
              <Palette className="h-4 w-4" />
              <span>Our Salon</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {Object.keys(galleryItems).map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryItems[category as keyof typeof galleryItems].map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div
                      className="relative aspect-square overflow-hidden rounded-md cursor-pointer group salon-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => {
                        setSelectedImage(item.src)
                        setSelectedAlt(item.alt)
                      }}
                    >
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white font-semibold text-sm drop-shadow-lg">{item.alt}</span>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <div className="relative aspect-video w-full">
                      <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-contain" />
                    </div>
                    <p className="text-center text-gray-700 mt-2 font-medium">{item.alt}</p>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}
