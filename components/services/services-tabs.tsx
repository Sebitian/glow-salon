"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scissors, Palette, Sparkles, User, ExternalLink, Phone, Clock, Heart, Waves } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Staff information
const staffInfo = {
  david: {
    name: "David",
    title: "Owner & Barber",
    image: "/images/david.png",
    phoneNumber: "+12245042113",
    booksyUrl: "https://booksy.com/en-us/481608_ds-cuts_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVdzLJLg5yzw8uDEyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUANPssMTwAAAA%3D"
  },
  luis: {
    name: "Luis (Pumba)",
    title: "Barber",
    image: "/images/pumba2.png",
    phoneNumber: "+12245042113",
    booksyUrl: "https://booksy.com/en-us/1409092_pumba-cuts_barber-shop_18695_libertyville#ba_s=seo"
  },
  alex: {
    name: "Alex",
    title: "Barber",
    image: "/images/ig3.png",
    phoneNumber: "+12245042113",
    booksyUrl: "https://booksy.com/en-us/1404532_ar-fadez_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVLy5w8vIzLXcsDUyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAhomW8TwAAAA%3D"
  },
  bita: {
    name: "Bita",
    title: "Hair Stylist",
    image: "/images/bita.jpg",
    phoneNumber: "+12245042113",
    booksyUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville/staffer/1425005#ba_s=dl_1"
  },
  izzy: {
    name: "Izzy",
    title: "Hair Stylist",
    image: "/images/izzy.JPEG",
    phoneNumber: "+12245042113",
    booksyUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville/staffer/1432902#ba_s=dl_1"
  },
  ahtziri: {
    name: "Ahtziri Gonzalez",
    title: "Hair Stylist",
    image: "/images/ahtziri.JPEG",
    phoneNumber: "+12245042113",
    booksyUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL64wMwqrMgz1CUmyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAixInkzwAAAA%3D"
  },
  ashley: {
    name: "Ashley",
    title: "Spa Specialist",
    image: "/images/ashley.jpg",
    phoneNumber: "+12245042113",
    booksyUrl: "https://ashleysanchez6.glossgenius.com/"
  }
}

// Services organized by category
const serviceCategories = {
  haircuts: {
    title: "Haircuts",
    icon: Scissors,
    description: "Professional cuts for all hair types and styles",
    services: [
      {
        id: "mens-haircut-fades",
        name: "Men's Haircut (Fades)",
        description: "Professional fade cuts with precision and style",
        price: "35+",
        duration: "45min-1h",
        images: ["images/services15.jpeg", "images/services8.jpeg", "/images/haircut-1.jpeg", "/images/haircut-2.jpeg", "images/services7.jpeg"],
        staff: ["david", "luis", "alex", "ahtziri", "izzy"]
      },
      {
        id: "womens-cut",
        name: "Women's Cut",
        description: "Expert women's haircut with consultation and styling",
        price: 60,
        duration: "1h",
        images: ["/images/services2.jpeg", "/images/bob-highlights.jpeg"],
        staff: ["bita", "izzy", "ahtziri"]
      },
      {
        id: "haircut-beard",
        name: "Haircut (Fades) & Beard",
        description: "Complete grooming package with fade and beard styling",
        price: "50+",
        duration: "1h",
        images: ["/images/haircut-3.jpeg", "/images/services9.jpeg"],
        staff: ["david", "luis", "alex"]
      },
      {
        id: "kids-cut",
        name: "Kids Cut (Fades Not Included)",
        description: "Professional haircut for children 12 years old and younger",
        price: "30+",
        duration: "30-45min",
        images: ["images/services13.jpeg", "images/services14.jpeg", "/images/haircut-4.jpeg", "images/services3.jpeg"],
        staff: ["david", "luis", "alex", "bita", "izzy", "ahtziri"]
      },
      {
        id: "shave",
        name: "Shave",
        description: "Traditional straight razor shave experience",
        price: "30+",
        duration: "45min",
        images: ["/images/haircut-1.jpeg"],
        staff: ["david", "luis", "alex"]
      },
      {
        id: "haircut-beard-eyebrows",
        name: "Haircut (Fades) & Beard & Eyebrows",
        description: "Complete grooming package with haircut, beard styling, and eyebrow grooming",
        price: "55+",
        duration: "1h 15min",
        images: ["/images/services10.jpeg"],
        staff: ["david", "luis", "alex"]
      },
      {
        id: "senior-cut",
        name: "Senior Cuts (No Beard Trim)",
        description: "Specialized cuts for senior clients, beard trim not included",
        price: "25+",
        duration: "45min",
        images: ["/images/services12.jpeg", "/images/services11.jpeg"],
        staff: ["david", "luis", "alex"]
      }
    ]
  },
  haircolor: {
    title: "Hair Color",
    icon: Palette,
    description: "Professional hair coloring services for vibrant, lasting results",
    services: [
      {
        id: "all-over-color",
        name: "All Over Color",
        description: "Complete hair color from root to ends",
        price: "100+",
        duration: "2h",
        images: ["/images/all-over-color-1.jpeg", "/images/all-over-color-2.jpeg", "images/services4.jpeg"],
        staff: ["bita", "izzy", "ahtziri"]
      },
      {
        id: "root-touch-up",
        name: "Root Touch Up",
        description: "Color application on roots only to maintain your look",
        price: 65,
        duration: "1h 30min",
        images: ["/images/root-touch-up-1.jpeg"],
        staff: ["bita", "izzy", "ahtziri"]
      },
      {
        id: "balayage",
        name: "Balayage",
        description: "Hand-painted highlights for a natural, sun-kissed look",
        price: "150+",
        duration: "2h",
        images: ["/images/balayage-1.jpeg"],
        staff: ["bita", "izzy", "ahtziri"]
      },
      {
        id: "fashion-color",
        name: "Fashion Color",
        description: "Vibrant, creative colors for a bold statement",
        price: "50+",
        duration: "1h 30min",
        images: ["/images/fashion-color-1.jpeg", "/images/fashion-color-2.jpeg"],
        staff: ["bita", "izzy", "ahtziri"]
      },
      {
        id: "toner-gloss",
        name: "Toner/Gloss",
        description: "Toner can be used after to enhance your current color and the gloss can add shine to your hair",
        price: "50+",
        duration: "1h 30min",
        images: ["images/services5.jpg"],
        staff: ["bita", "ahtziri"]
      },
      {
        id: "color-correction",
        name: "Color Correction",
        description: "Consult will be needed first",
        price: "100+",
        duration: "1h 30min",
        images: ["images/services6.jpg"],
        staff: ["bita", "ahtziri"]
      },
    ]
  },
  hairtreatments: {
    title: "Hair Treatments",
    icon: Heart,
    description: "Restorative treatments for healthy, beautiful hair",
    services: [
      {
        id: "keratin-treatment",
        name: "Keratin Treatment",
        description: "Keratin Complex treatment to reduce frizz, enhance shine, and improve manageability",
        price: "300+",
        duration: "2h 30min",
        images: ["/images/keratin-treatment-before-after.jpeg"],
        staff: ["bita", "izzy", "ahtziri"]
      },
      {
        id: "deep-conditioning",
        name: "Deep Conditioning Treatment",
        description: "Intensive conditioning treatment to restore moisture and strength",
        price: 25,
        duration: "30min",
        images: ["/images/deep-conditioning-treatment.png"],
        staff: ["bita", "izzy", "ahtziri"]
      },
      {
        id: "scalp-treatment",
        name: "Scalp Treatment",
        description: "Nourishing scalp treatment to promote healthy hair growth",
        price: 20,
        duration: "30min",
        images: ["/images/services17.png"],
        staff: ["bita", "izzy", "ahtziri"]
      }
    ]
  },
  styling: {
    title: "Styling",
    icon: Waves,
    description: "Professional styling services for any occasion",
    services: [
      {
        id: "blow-out",
        name: "Blow Out",
        description: "Shampoo and professional blow dry styling",
        price: 40,
        duration: "1h",
        images: ["/images/womens-cut.jpeg"],
        staff: ["bita", "izzy", "ahtziri"]
      },
      {
        id: "blow-out-xl",
        name: "Blow Out XL",
        description: "Blow dry with brush plus iron, flat iron, or curling iron included",
        price: 55,
        duration: "1h 30min",
        images: ["/images/womens-cut.jpeg"],
        staff: ["bita", "izzy", "ahtziri"]
      },
      {
        id: "updo",
        name: "Updo Styling",
        description: "Elegant updo styling for special occasions",
        price: 60,
        duration: "1h",
        images: ["images/services18.jpeg", "images/services19.jpeg", "/images/updo-styling.jpeg"],
        staff: ["bita", "izzy", "ahtziri"]
      },
      {
        id: "silk-press",
        name: "Silk Press",
        description: "Professional silk press styling for smooth, sleek results",
        price: 80,
        duration: "1h",
        images: ["/images/services20.jpeg"],
        staff: ["bita", "izzy", "ahtziri"]
      },
      {
        id: "wig-braid-down",
        name: "Wig Braid Down",
        description: "Professional wig preparation with wash and blow dry included",
        price: 60,
        duration: "1h",
        images: ["/images/wig-braid-down.png"],
        staff: ["izzy"]
      }
    ]
  },
  naturalhair: {
    title: "Natural Hair Services",
    icon: User,
    description: "Specialized services for natural hair textures and protective styles",
    services: [
      {
        id: "retwist-no-style",
        name: "Retwist (No Style)",
        description: "Wash and basic loc maintenance included",
        price: 100,
        duration: "1h 30min",
        images: ["/images/retwist-no-style.jpeg"],
        staff: ["izzy"]
      },
      {
        id: "retwist-basic-style",
        name: "Retwist with Basic Style",
        description: "Wash, maintenance, and basic style included (braids, two strand twists, etc.)",
        price: 120,
        duration: "2h",
        images: ["/images/retwist-basic-style-1.jpeg", "/images/retwist-basic-style-2.jpeg"],
        staff: ["izzy"]
      },
      {
        id: "retwist-specialty-style",
        name: "Retwist with Specialty Style",
        description: "Wash, maintenance, and specialty style included (barrel rolls, bantu knots, flat twists, etc.)",
        price: 140,
        duration: "2h 30min",
        images: ["/images/retwist-specialty-style-2.jpeg"],
        staff: ["izzy"]
      },
      {
        id: "natural-twist-style",
        name: "Natural Twist Style",
        description: "Wash and blow dry included (traditional two strand twists, kinkakou twists, etc.)",
        price: "80+",
        duration: "3h",
        images: ["/images/natural-twist-style.jpeg", "/images/natural-twist-style-2.jpeg"],
        staff: ["izzy"]
      },
      {
        id: "box-braids",
        name: "Box Braids",
        description: "Wash and blow dry included (no feed-in hair)",
        price: "80+",
        duration: "2h 30min",
        images: ["/images/box-braids-2.jpeg"],
        staff: ["izzy"]
      },
      {
        id: "stitch-braids",
        name: "Stitch Braids",
        description: "Precise stitch braid technique for clean, long-lasting styles",
        price: "60+",
        duration: "2h",
        images: ["/images/stitch-braids-2.jpeg"],
        staff: ["izzy"]
      },
      {
        id: "starter-locs",
        name: "Starter Locs",
        description: "Wash included with choice of parting for new loc journey",
        price: "140+",
        duration: "3h",
        images: ["/images/locs-styling.jpeg"],
        staff: ["izzy"]
      }
    ]
  },
  facials: {
    title: "Facials",
    icon: Sparkles,
    description: "Professional facial treatments for healthy, glowing skin",
    services: [
      {
        id: "basic-facial",
        name: "Basic Facial",
        description: "A relaxing facial using cleansers, an exfoliant w/steam, a masque and dermal layering targeted towards your skin type. This service includes hand and facial massage techniques.",
        price: 65,
        duration: "60min",
        images: [], // Removed images
        staff: ["ashley"]
      },
      {
        id: "advanced-facial",
        name: "Advanced Facial",
        description: "Similar to the signature facial but better this facial includes extractions, deeper exfoliation and high frequency all while targeting your skin needs. This service includes hand and facial massage techniques.",
        price: 75,
        duration: "70min",
        images: [], // Removed images
        staff: ["ashley"]
      },
      {
        id: "clarifying-facial",
        name: "Clarifying Facial",
        description: "Targeted for oily and acneic skin types this facial uses specified products to help minimize pores, reduce blemishes and redness, while brightening the skin to help minimize premature signs of aging. This service includes hand and facial massage techniques.",
        price: 75,
        duration: "60min",
        images: [], // Removed images
        staff: ["ashley"]
      },
      {
        id: "honey-glow-facial",
        name: "Honey Glow Facial",
        description: "The signature, honey glow facial works with key ingredients like turmeric, Manuka honey and lemon to soothe hydrate and brighten the skin. These ingredients carry antibacterial and anti-inflammatory properties to give the skin that smooth and glowing effect.",
        price: 80,
        duration: "70min",
        images: [], // Removed images
        staff: ["ashley"]
      }
    ]
  },
  waxing: {
    title: "Waxing",
    icon: User,
    description: "Professional waxing services for smooth, hair-free skin",
    services: [
      {
        id: "eyebrow-wax",
        name: "Eyebrow Wax",
        description: "Professional eyebrow shaping and grooming",
        price: 10,
        duration: "15min",
        images: [], // Removed images
        staff: ["ashley"]
      },
      {
        id: "upper-lip-chin-wax",
        name: "Upper Lip Or Chin Wax",
        description: "Quick and precise upper lip or chin hair removal",
        price: 10,
        duration: "10min",
        images: [], // Removed images
        staff: ["ashley"]
      },
      {
        id: "underarm-wax",
        name: "Underarm Wax",
        description: "Professional underarm hair removal",
        price: 25,
        duration: "20min",
        images: [], // Removed images
        staff: ["ashley"]
      },
      {
        id: "arm-wax",
        name: "Arm Wax",
        description: "Professional arm hair removal with 2 options available",
        price: "20+",
        duration: "20+ min",
        images: [], // Removed images
        staff: ["ashley"]
      },
      {
        id: "leg-wax",
        name: "Leg Wax",
        description: "Professional leg hair removal with 2 options available",
        price: "25+",
        duration: "20+ min",
        images: [], // Removed images
        staff: ["ashley"]
      },
      {
        id: "brazilian-wax",
        name: "Brazilian Wax",
        description: "Professional Brazilian wax with 2 options available",
        price: "25+",
        duration: "10+ min",
        images: [], // Removed images
        staff: ["ashley"]
      }
    ]
  }
}

// Service Card Component
function ServiceCard({ service }: { service: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const formatPrice = (price: number | string) => {
    if (typeof price === "string") return `$${price}`
    return `$${price}`
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === service.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? service.images.length - 1 : prev - 1
    )
  }

  const hasImages = service.images && service.images.length > 0

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-yellow-400 overflow-hidden">
      {/* Image Carousel - Only render if service has images */}
      {hasImages && (
        <div className="relative h-64 bg-gray-100">
          <Image
            src={service.images[currentImageIndex]}
            alt={`${service.name} - Image ${currentImageIndex + 1}`}
            fill
            className="object-contain"
            onError={(e) => {
              e.currentTarget.src = '/images/placeholder.jpg'
            }}
          />
          
          {/* Navigation Arrows - Only show if multiple images */}
          {service.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {service.images.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Service Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">{service.name}</h3>
          <div className="text-right ml-2">
            <span className="text-xl font-bold text-yellow-600">{formatPrice(service.price)}</span>
            <div className="flex items-center text-gray-500 text-xs mt-1">
              <Clock className="h-3 w-3 mr-1" />
              <span>{service.duration}</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
      </div>

      {/* Staff Members */}
      <div className="p-4">
        <h4 className="text-xs font-semibold text-gray-700 mb-2">Available with:</h4>
        <div className="space-y-2">
          {service.staff.map((staffId: string) => {
            const staff = staffInfo[staffId as keyof typeof staffInfo]
            return (
              <div key={staffId} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={staff.image}
                      alt={staff.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/images/placeholder-user.jpg'
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{staff.name}</p>
                    <p className="text-xs text-gray-500">{staff.title}</p>
                  </div>
                </div>
                
                <div className="flex gap-1">
                  <Button 
                    asChild
                    size="sm"
                    className="bg-[#00b3a4] text-white hover:bg-yellow-500 transition-all duration-300 font-medium text-xs px-2 py-1 h-auto"
                  >
                    <a
                      href={staff.booksyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Image 
                        src="/images/booksy_logo.png" 
                        alt="Booksy" 
                        width={12} 
                        height={12} 
                        className="object-contain"
                      />
                      Book
                      <ExternalLink className="h-2 w-2" />
                    </a>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function ServicesTabs() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("haircuts")

  // Handle URL hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && Object.keys(serviceCategories).includes(hash)) {
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

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-white shadow-md border border-gray-200 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full max-w-6xl gap-1 p-2 h-auto">
            {Object.entries(serviceCategories).map(([key, category]) => {
              const IconComponent = category.icon
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex flex-col items-center gap-1 bg-gray-50 hover:bg-yellow-100 data-[state=active]:bg-yellow-400 data-[state=active]:text-white rounded-md px-2 py-3 text-xs font-medium transition-all duration-200 min-h-[60px]"
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="text-center leading-tight">{category.title}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>
        </div>

        {Object.entries(serviceCategories).map(([key, category]) => (
          <TabsContent key={key} value={key} className="mt-0">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
              {category.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
