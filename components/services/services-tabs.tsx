"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ServiceCard from "@/components/services/service-card"
import { Scissors, Palette, Sparkles, Users, Waves } from "lucide-react"

// Updated Venegas Salon & Spa service data with multiple images per service
const services = {
  styling: [
    {
      id: "s1",
      name: "Blow Out",
      description: "Shampoo and Blowdry",
      price: 40,
      duration: "1h",
      images: ["/images/womens-cut.jpeg"],
    },
    {
      id: "s2",
      name: "Blow Out XL",
      description: "Blow dry with brush PLUS iron or Flat iron or Curling iron included",
      price: 55,
      duration: "1h 30min",
      images: ["/images/womens-cut.jpeg"],
    },
    {
      id: "s3",
      name: "Updo",
      description: "Special Occasion Style",
      price: 60,
      duration: "1h",
      images: ["/images/updo-styling.jpeg"],
    },
    {
      id: "s4",
      name: "Silk Press",
      description: "Professional silk press styling for smooth, sleek results",
      price: 80,
      duration: "1h",
      images: ["/images/bob-highlights.jpeg"],
    },
    {
      id: "s5",
      name: "Wig Braid Down",
      description: "Wash and Blowdry included",
      price: 60,
      duration: "1h",
      images: ["/images/wig-braid-down.png"],
    },
  ],
  haircuts: [
    {
      id: "h1",
      name: "Men's Cut",
      description: "Professional men's haircut tailored to your style",
      price: 35,
      duration: "45min",
      images: ["/images/haircut-1.jpeg", "/images/haircut-2.jpeg", "/images/haircut-3.jpeg"],
    },
    {
      id: "h2",
      name: "Women's Cut",
      description: "Expert women's haircut with consultation and styling",
      price: 60,
      duration: "1h",
      images: ["/images/womens-cut.jpeg", "/images/bob-highlights.jpeg"],
    },
    {
      id: "h3",
      name: "Kids Cut",
      description: "12 years old and younger",
      price: 30,
      duration: "45min",
      images: ["/images/haircut-4.jpeg"],
    },
  ],
  treatments: [
    {
      id: "t1",
      name: "Scalp Treatment Add On",
      description: "Nourishing scalp treatment to promote healthy hair growth",
      price: 20,
      duration: "30min",
      images: ["/images/deep-conditioning-treatment.png"],
    },
    {
      id: "t2",
      name: "Deep Conditioning Add On",
      description: "Intensive conditioning treatment to restore moisture and strength",
      price: 25,
      duration: "30min",
      images: ["/images/deep-conditioning-treatment.png"],
    },
    {
      id: "t3",
      name: "Keratin Treatment",
      description:
        "Keratin Treatment done with Keratin Complex. Helps reduce frizz, enhance shine, and improve manageability",
      price: 300,
      priceNote: "+",
      duration: "2h 30min",
      images: ["/images/keratin-treatment-before-after.jpeg"],
    },
  ],
  color: [
    {
      id: "c1",
      name: "All Over Color",
      description: "Color from Root to Ends",
      price: 100,
      priceNote: "+",
      duration: "2h",
      images: ["/images/all-over-color-1.jpeg", "/images/all-over-color-2.jpeg", "/images/all-over-color-3.jpeg"],
    },
    {
      id: "c2",
      name: "Root Touch Up",
      description: "Color on Roots Only",
      price: 65,
      duration: "1h 30min",
      images: ["/images/root-touch-up-1.jpeg"],
    },
    {
      id: "c3",
      name: "Men's Color Gray Coverage",
      description: "Professional gray coverage for men",
      price: 65,
      duration: "1h",
      images: ["/images/haircut-3.jpeg"],
    },
    {
      id: "c6",
      name: "Balayage",
      description: "Balayage Hand Painting Balayage",
      price: 150,
      priceNote: "+",
      duration: "2h",
      images: ["/images/balayage-1.jpeg", "/images/bob-highlights.jpeg"],
    },
    {
      id: "c7",
      name: "Fashion Color",
      description: "A fun color that is vibrant",
      price: 50,
      priceNote: "+",
      duration: "1h 30min",
      images: ["/images/fashion-color-1.jpeg", "/images/fashion-color-2.jpeg"],
    },
  ],
  natural: [
    {
      id: "n1",
      name: "Retwist No Style",
      description: "Wash and basic loc maintenance included",
      price: 100,
      duration: "1h 30min",
      images: ["/images/retwist-no-style.jpeg"],
    },
    {
      id: "n2",
      name: "Retwist Basic Style",
      description: "Wash, Maintenance, and Basic Style included (Braids, Two Strand Twists, etc.)",
      price: 120,
      duration: "2h",
      images: [
        "/images/retwist-basic-style-1.jpeg",
        "/images/retwist-basic-style-2.jpeg",
        "/images/retwist-basic-style-3.jpeg",
      ],
    },
    {
      id: "n3",
      name: "Retwist Specialty Style",
      description: "Wash, Maintenance, and Specialty Style included (Barrel Rolls, Bantu Knots, Flat Twists, etc.)",
      price: 140,
      duration: "2h 30min",
      images: ["/images/retwist-specialty-style-2.jpeg", "/images/retwist-specialty-style-3.jpeg"],
    },
    {
      id: "n4",
      name: "Natural Twist Style",
      description: "Wash and Blow Dry included (Traditional Two Strand Twists, Kinkakou Twists, etc.)",
      price: 80,
      priceNote: "+",
      duration: "3h",
      images: [
        "/images/natural-twist-style.jpeg",
        "/images/natural-twist-style-2.jpeg",
        "/images/natural-twist-style-3.jpeg",
      ],
    },
    {
      id: "n5",
      name: "Box Braids",
      description: "Wash and Blowdry included (No Feed-in Hair)",
      price: 80,
      priceNote: "+",
      duration: "2h 30min",
      images: ["/images/box-braids-2.jpeg", "/images/box-braids-3.jpeg"],
    },
    {
      id: "n6",
      name: "Stitch Braids",
      description: "Precise stitch braid technique for clean, long-lasting styles",
      price: 60,
      priceNote: "+",
      duration: "2h",
      images: ["/images/mens-braids.jpeg", "/images/stitch-braids-2.jpeg"],
    },
    {
      id: "n7",
      name: "Starter Locs",
      description: "Wash included and Choice of Parting",
      price: 140,
      priceNote: "+",
      duration: "3h",
      images: ["/images/locs-styling.jpeg"],
    },
  ],
}

export default function ServicesTabs() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("all")

  // Handle URL hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && ["all", "styling", "haircuts", "treatments", "color", "natural"].includes(hash)) {
        setActiveTab(hash)
      }
    }

    // Set initial tab from URL hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  // Update URL when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    // Update URL hash without triggering page reload
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${value}`)
    }
  }

  // Filter services based on active tab
  const getFilteredServices = () => {
    if (activeTab === "all") {
      return [...services.styling, ...services.haircuts, ...services.treatments, ...services.color, ...services.natural]
    }
    return services[activeTab as keyof typeof services] || []
  }

  return (
    <>
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-white shadow-md border border-gray-200 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full max-w-4xl gap-2 p-2 h-auto">
            <TabsTrigger
              value="all"
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 data-[state=active]:bg-yellow-400 data-[state=active]:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 min-h-[44px]"
            >
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">All</span>
            </TabsTrigger>
            <TabsTrigger
              value="styling"
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 data-[state=active]:bg-yellow-400 data-[state=active]:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 min-h-[44px]"
            >
              <Waves className="h-4 w-4" />
              <span className="hidden sm:inline">Styling</span>
            </TabsTrigger>
            <TabsTrigger
              value="haircuts"
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 data-[state=active]:bg-yellow-400 data-[state=active]:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 min-h-[44px]"
            >
              <Scissors className="h-4 w-4" />
              <span className="hidden sm:inline">Haircuts</span>
            </TabsTrigger>
            <TabsTrigger
              value="treatments"
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 data-[state=active]:bg-yellow-400 data-[state=active]:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 min-h-[44px]"
            >
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">Treatments</span>
            </TabsTrigger>
            <TabsTrigger
              value="color"
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 data-[state=active]:bg-yellow-400 data-[state=active]:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 min-h-[44px]"
            >
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Color</span>
            </TabsTrigger>
            <TabsTrigger
              value="natural"
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 data-[state=active]:bg-yellow-400 data-[state=active]:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 min-h-[44px]"
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
