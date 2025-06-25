"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ServiceCard from "@/components/services/service-card"
import { Scissors, Palette, Sparkles, Users, Waves } from "lucide-react"

// Real Venegas Salon & Spa service data with actual images
const services = {
  styling: [
    {
      id: "s1",
      name: "Blow Out",
      description: "Professional blow dry styling for smooth, voluminous hair that lasts.",
      price: 40,
      duration: "1h",
      image: "/images/womens-cut.jpeg",
    },
    {
      id: "s2",
      name: "Blow Out XL",
      description: "Extended blow out service for longer or thicker hair with extra styling time.",
      price: 55,
      duration: "1h 30min",
      image: "/images/bob-highlights.jpeg",
    },
    {
      id: "s3",
      name: "Updo",
      description: "Elegant updo styling perfect for special occasions and formal events.",
      price: 60,
      duration: "1h",
      image: "/images/updo-styling.jpeg",
    },
    {
      id: "s4",
      name: "Silk Press",
      description: "Smooth, silky straight hair achieved through professional heat styling techniques.",
      price: 80,
      duration: "1h",
      image: "/images/bob-highlights.jpeg",
    },
    {
      id: "s5",
      name: "Wig Braid Down",
      description: "Professional wig preparation and braid down service for secure wig application.",
      price: 60,
      duration: "1h",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
  ],
  haircuts: [
    {
      id: "h1",
      name: "Men's Cut",
      description: "Professional men's haircut tailored to your style and face shape.",
      price: 35,
      duration: "45min",
      image: "/images/haircut-1.jpeg",
    },
    {
      id: "h2",
      name: "Women's Cut",
      description: "Expert women's haircut with consultation and precision styling.",
      price: 60,
      duration: "1h",
      image: "/images/womens-cut.jpeg",
    },
    {
      id: "h3",
      name: "Kids Cut",
      description: "Gentle and patient haircut service designed specifically for children.",
      price: 30,
      duration: "1h",
      image: "/images/haircut-4.jpeg",
    },
  ],
  treatments: [
    {
      id: "t1",
      name: "Scalp Treatment Add On",
      description: "Nourishing scalp treatment to promote healthy hair growth and scalp health.",
      price: 20,
      duration: "30min",
      image:
        "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "t2",
      name: "Deep Conditioning Add On",
      description: "Intensive conditioning treatment to restore moisture and strengthen hair.",
      price: 25,
      duration: "30min",
      image:
        "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "t3",
      name: "Keratin Treatment",
      description: "Professional keratin treatment for smooth, frizz-free hair that lasts months.",
      price: 300,
      priceNote: "+",
      duration: "2h 30min",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
  ],
  color: [
    {
      id: "c1",
      name: "All Over Color",
      description: "Complete hair color transformation with professional color application.",
      price: 100,
      priceNote: "+",
      duration: "2h",
      image: "/images/bob-highlights.jpeg",
    },
    {
      id: "c2",
      name: "Root Touch Up",
      description: "Refresh your color with professional root touch up service.",
      price: 65,
      duration: "1h 30min",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "c3",
      name: "Full Foil",
      description: "Complete foil highlighting for dramatic color and dimension.",
      price: 200,
      priceNote: "+",
      duration: "2h",
      image: "/images/bob-highlights.jpeg",
    },
    {
      id: "c4",
      name: "Partial Foil",
      description: "Strategic foil placement for subtle highlights and natural-looking dimension.",
      price: 100,
      priceNote: "+",
      duration: "1h 30min",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "c5",
      name: "Balayage",
      description: "Hand-painted highlights for a natural, sun-kissed look.",
      price: 150,
      priceNote: "+",
      duration: "2h",
      image: "/images/bob-highlights.jpeg",
    },
    {
      id: "c6",
      name: "Fashion Color",
      description: "Bold, creative color applications for unique and trendy looks.",
      price: 50,
      priceNote: "+",
      duration: "1h 30min",
      image:
        "https://images.unsplash.com/photo-1594051843789-db9e5cdcd4b8?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "c7",
      name: "Toner/Gloss",
      description: "Color toning and glossing service for enhanced shine and color correction.",
      price: 30,
      priceNote: "+",
      duration: "30min",
      image:
        "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "c8",
      name: "Color Correction",
      description: "Expert color correction service to fix and perfect previous color work.",
      price: "Varies",
      duration: "30min+",
      image:
        "https://images.unsplash.com/photo-1630406897653-6309fc2288b7?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
  ],
  natural: [
    {
      id: "n1",
      name: "Retwist No Style",
      description: "Professional loc retwist service to maintain healthy, neat locs.",
      price: 100,
      duration: "1h 30min",
      image: "/images/locs-styling.jpeg",
    },
    {
      id: "n2",
      name: "Retwist Basic Style",
      description: "Loc retwist with basic styling for a polished, finished look.",
      price: 120,
      duration: "2h",
      image: "/images/locs-styling.jpeg",
    },
    {
      id: "n3",
      name: "Retwist Specialty Style",
      description: "Loc retwist with advanced styling techniques for special occasions.",
      price: 140,
      duration: "2h 30min",
      image: "/images/locs-styling.jpeg",
    },
    {
      id: "n4",
      name: "Natural Twist Style",
      description: "Beautiful twist styling for natural hair with various pattern options.",
      price: 80,
      priceNote: "+",
      duration: "3h",
      image:
        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "n5",
      name: "Box Braids",
      description: "Classic box braid installation with various size and length options.",
      price: 80,
      priceNote: "+",
      duration: "2h 30min",
      image: "/images/mens-braids.jpeg",
    },
    {
      id: "n6",
      name: "Stitch Braids",
      description: "Precise stitch braid technique for clean, long-lasting protective styles.",
      price: 60,
      priceNote: "+",
      duration: "2h",
      image: "/images/mens-braids.jpeg",
    },
    {
      id: "n7",
      name: "Starter Locs",
      description: "Professional loc installation service to begin your loc journey.",
      price: 160,
      priceNote: "+",
      duration: "3h",
      image: "/images/locs-styling.jpeg",
    },
  ],
}

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("all")

  // Filter services based on active tab
  const getFilteredServices = () => {
    if (activeTab === "all") {
      return [...services.styling, ...services.haircuts, ...services.treatments, ...services.color, ...services.natural]
    }
    return services[activeTab as keyof typeof services] || []
  }

  return (
    <>
      <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-white shadow-md border border-gray-200 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full max-w-4xl gap-2 p-2 h-auto">
            <TabsTrigger
              value="all"
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 min-h-[44px]"
            >
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">All</span>
            </TabsTrigger>
            <TabsTrigger
              value="styling"
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 min-h-[44px]"
            >
              <Waves className="h-4 w-4" />
              <span className="hidden sm:inline">Styling</span>
            </TabsTrigger>
            <TabsTrigger
              value="haircuts"
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 min-h-[44px]"
            >
              <Scissors className="h-4 w-4" />
              <span className="hidden sm:inline">Haircuts</span>
            </TabsTrigger>
            <TabsTrigger
              value="treatments"
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 min-h-[44px]"
            >
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">Treatments</span>
            </TabsTrigger>
            <TabsTrigger
              value="color"
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 min-h-[44px]"
            >
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Color</span>
            </TabsTrigger>
            <TabsTrigger
              value="natural"
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 min-h-[44px]"
            >
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline text-center">Natural Hair</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredServices().map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="styling" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.styling.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="haircuts" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.haircuts.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="treatments" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.treatments.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="color" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.color.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="natural" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.natural.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
