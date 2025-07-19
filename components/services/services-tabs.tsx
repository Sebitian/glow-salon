"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scissors, Users, Sparkles, User, ExternalLink, Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

// Staff data with their individual services and Booksy URLs
const staffData = {
  barbers: [
    {
      id: "david",
      name: "David",
      title: "Owner & Barber",
      image: "/images/david.png",
      phoneNumber: "+12245042113",
      booksyUrl: "https://booksy.com/en-us/481608_ds-cuts_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVLy5w8vIzLXcsDUyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAhomW8TwAAAA%3D",
      specialties: ["Men's Cuts", "Beard Styling", "Classic Cuts"],
      description: "15+ years of unmatched customer satisfaction",
      services: [
        {
          id: "h4",
          name: "Haircut (Fades)",
          description: "Professional fade cuts with precision and style",
          price: 35,
          duration: "45min",
          images: ["/images/haircut-1.jpeg", "/images/haircut-2.jpeg"]
        },
        {
          id: "h5",
          name: "Haircut (Fades) & Beard",
          description: "Complete grooming package with fade and beard styling",
          price: 50,
          duration: "1h",
          images: ["/images/haircut-3.jpeg"]
        },
        {
          id: "h6",
          name: "Haircut (Fades) & Eyebrows",
          description: "Haircut with eyebrow grooming",
          price: 45,
          duration: "1h",
          images: ["/images/haircut-1.jpeg"]
        },
        {
          id: "h7",
          name: "Haircut (Fades), Beard & Eyebrows",
          description: "Complete grooming package",
          price: 60,
          duration: "1h 15min",
          images: ["/images/haircut-2.jpeg"]
        },
        {
          id: "h8",
          name: "Kids Cut (Fades not included)",
          description: "Professional kids haircut for ages 12 and under",
          price: 30,
          duration: "30min",
          images: ["/images/haircut-4.jpeg"]
        },
        {
          id: "h9",
          name: "Serious Cuts",
          description: "Premium cutting service for complex styles",
          price: 45,
          duration: "1h",
          images: ["/images/haircut-3.jpeg"]
        },
        {
          id: "t4",
          name: "Beard Trim",
          description: "Professional beard trimming and styling",
          price: 30,
          duration: "30min",
          images: ["/images/haircut-2.jpeg"]
        },
        {
          id: "t5",
          name: "Shave",
          description: "Traditional straight razor shave experience",
          price: 35,
          duration: "45min",
          images: ["/images/haircut-1.jpeg"]
        }
      ]
    },
    {
      id: "luis",
      name: "Luis (Pumba)",
      title: "Barber",
      image: "/images/pumba2.png",
      phoneNumber: "+12245042113",
      booksyUrl: "https://booksy.com/en-us/1409092_pumba-cuts_barber-shop_18695_libertyville#ba_s=seo",
      specialties: ["Men's Haircuts", "Beard Styling", "Eyebrow Grooming", "Kids Cuts"],
      description: "Specializing in precision men's cuts, beard styling, and eyebrow grooming",
      services: [
        {
          id: "p1",
          name: "Male Haircut",
          description: "Professional men's haircut for ages 13 and over",
          price: 34.40,
          duration: "45min",
          images: ["/images/haircut-1.jpeg"]
        },
        {
          id: "p2",
          name: "Haircut & Eyebrows",
          description: "Complete haircut with professional eyebrow grooming",
          price: 34.40,
          duration: "45min",
          images: ["/images/haircut-2.jpeg"]
        },
        {
          id: "p3",
          name: "Haircut",
          description: "Standard professional haircut service",
          price: 30.10,
          duration: "45min",
          images: ["/images/haircut-3.jpeg"]
        },
        {
          id: "p4",
          name: "Kid Haircut",
          description: "Professional haircut for kids 12 and under",
          price: 25.80,
          duration: "45min",
          images: ["/images/haircut-4.jpeg"]
        },
        {
          id: "p5",
          name: "Haircut & Beard",
          description: "Complete haircut and beard styling service with hot towel",
          price: 43.00,
          duration: "1h",
          images: ["/images/haircut-2.jpeg"]
        },
        {
          id: "p6",
          name: "Haircut, Beard & Eyebrows",
          description: "Complete grooming package with haircut, beard styling, and eyebrow grooming",
          price: 47.30,
          duration: "1h",
          images: ["/images/haircut-1.jpeg"]
        },
        {
          id: "p7",
          name: "Haircut & Design",
          description: "Haircut with custom design work - price varies by complexity",
          price: "34.40",
          priceNote: "+",
          duration: "45min",
          images: ["/images/haircut-3.jpeg"]
        }
      ]
    },
    {
      id: "alex",
      name: "Alex",
      title: "Barber",
      image: "/images/ig3.png",
      phoneNumber: "+12245042113",
      booksyUrl: "https://booksy.com/en-us/1404532_ar-fadez_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVLy5w8vIzLXcsDUyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAhomW8TwAAAA%3D",
      specialties: ["Classic Cuts", "Contemporary Cuts", "Styling"],
      description: "Master of classic and contemporary cuts",
      services: [
        {
          id: "h10",
          name: "Haircut (Skin, Bald, Taper & Eyebrows)",
          description: "Precision cuts with eyebrow grooming",
          price: 45,
          duration: "1h",
          images: ["/images/haircut-1.jpeg"]
        },
        {
          id: "h11",
          name: "Kids Haircut (5-12)",
          description: "Professional cuts for children ages 5-12",
          price: 30,
          duration: "45min",
          images: ["/images/haircut-4.jpeg"]
        },
        {
          id: "h12",
          name: "Haircut & Beard (Fades, Tapers, etc)",
          description: "Complete men's grooming with cut and beard styling",
          price: 55,
          duration: "1h 15min",
          images: ["/images/haircut-2.jpeg"]
        },
        {
          id: "h13",
          name: "Haircut & Eyebrows",
          description: "Professional cut with eyebrow shaping",
          price: 45,
          duration: "1h",
          images: ["/images/haircut-3.jpeg"]
        },
        {
          id: "h14",
          name: "Haircut, Beard & Eyebrows (Fades, Tapers, etc)",
          description: "Complete grooming package",
          price: 65,
          duration: "1h 30min",
          images: ["/images/haircut-1.jpeg"]
        },
        {
          id: "h15",
          name: "Senior Haircut",
          description: "Specialized cuts for senior clients",
          price: 25,
          duration: "45min",
          images: ["/images/haircut-2.jpeg"]
        },
        {
          id: "t6",
          name: "Beard Shaping",
          description: "Professional beard sculpting and styling",
          price: 25,
          duration: "30min",
          images: ["/images/haircut-3.jpeg"]
        },
        {
          id: "t7",
          name: "Eyebrows",
          description: "Professional eyebrow grooming and shaping",
          price: 15,
          duration: "20min",
          images: ["/images/haircut-1.jpeg"]
        },
        {
          id: "t8",
          name: "Line Up",
          description: "Precision hairline and edge detailing",
          price: 20,
          duration: "20min",
          images: ["/images/haircut-2.jpeg"]
        }
      ]
    }
  ],
  stylists: [
    {
      id: "bita",
      name: "Bita",
      title: "Hair Stylist",
      image: "/images/bita.jpg",
      phoneNumber: "+12245042113",
      booksyUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville/staffer/1425005#ba_s=dl_1",
      specialties: ["Hair Color", "Styling", "Color Correction"],
      description: "Expert in coloring and styling",
      services: [
        {
          id: "h2",
          name: "Women's Cut",
          description: "Expert women's haircut with consultation and styling",
          price: 60,
          duration: "1h",
          images: ["/images/womens-cut.jpeg", "/images/bob-highlights.jpeg"]
        },
        {
          id: "s1",
          name: "Blow Out",
          description: "Shampoo and Blowdry",
          price: 40,
          duration: "1h",
          images: ["/images/womens-cut.jpeg"]
        },
        {
          id: "s2",
          name: "Blow Out XL",
          description: "Blow dry with brush PLUS iron or Flat iron or Curling iron included",
          price: 55,
          duration: "1h 30min",
          images: ["/images/womens-cut.jpeg"]
        },
        {
          id: "s3",
          name: "Updo",
          description: "Special Occasion Style",
          price: 60,
          duration: "1h",
          images: ["/images/updo-styling.jpeg"]
        },
        {
          id: "s4",
          name: "Silk Press",
          description: "Professional silk press styling for smooth, sleek results",
          price: 80,
          duration: "1h",
          images: ["/images/bob-highlights.jpeg"]
        },
        {
          id: "c1",
          name: "All Over Color",
          description: "Color from Root to Ends",
          price: 100,
          priceNote: "+",
          duration: "2h",
          images: ["/images/all-over-color-1.jpeg", "/images/all-over-color-2.jpeg"]
        },
        {
          id: "c2",
          name: "Root Touch Up",
          description: "Color on Roots Only",
          price: 65,
          duration: "1h 30min",
          images: ["/images/root-touch-up-1.jpeg"]
        },
        {
          id: "c6",
          name: "Balayage",
          description: "Balayage Hand Painting Balayage",
          price: 150,
          priceNote: "+",
          duration: "2h",
          images: ["/images/balayage-1.jpeg", "/images/bob-highlights.jpeg"]
        },
        {
          id: "c7",
          name: "Fashion Color",
          description: "A fun color that is vibrant",
          price: 50,
          priceNote: "+",
          duration: "1h 30min",
          images: ["/images/fashion-color-1.jpeg", "/images/fashion-color-2.jpeg"]
        },
        {
          id: "t3",
          name: "Keratin Treatment",
          description: "Keratin Treatment done with Keratin Complex. Helps reduce frizz, enhance shine, and improve manageability",
          price: 300,
          priceNote: "+",
          duration: "2h 30min",
          images: ["/images/keratin-treatment-before-after.jpeg"]
        }
      ]
    },
    {
      id: "izzy",
      name: "Izzy",
      title: "Hair Stylist",
      image: "/images/izzy.JPEG",
      phoneNumber: "+12245042113",
      booksyUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville/staffer/1432902#ba_s=dl_1",
      specialties: ["Cuts", "Treatments", "Natural Hair"],
      description: "Specializing in cuts, treatments, and natural hair",
      services: [
        {
          id: "h2",
          name: "Women's Cut",
          description: "Expert women's haircut with consultation and styling",
          price: 60,
          duration: "1h",
          images: ["/images/haircut-1.jpeg"]
        },
        {
          id: "h3",
          name: "Kids Cut",
          description: "12 years old and younger",
          price: 30,
          duration: "45min",
          images: ["/images/haircut-4.jpeg"]
        },
        {
          id: "s1",
          name: "Blow Out",
          description: "Shampoo and Blowdry",
          price: 40,
          duration: "1h",
          images: ["/images/womens-cut.jpeg"]
        },
        {
          id: "s5",
          name: "Wig Braid Down",
          description: "Wash and Blowdry included",
          price: 60,
          duration: "1h",
          images: ["/images/wig-braid-down.png"]
        },
        {
          id: "n1",
          name: "Retwist No Style",
          description: "Wash and basic loc maintenance included",
          price: 100,
          duration: "1h 30min",
          images: ["/images/retwist-no-style.jpeg"]
        },
        {
          id: "n2",
          name: "Retwist Basic Style",
          description: "Wash, Maintenance, and Basic Style included (Braids, Two Strand Twists, etc.)",
          price: 120,
          duration: "2h",
          images: ["/images/retwist-basic-style-1.jpeg", "/images/retwist-basic-style-2.jpeg"]
        },
        {
          id: "n3",
          name: "Retwist Specialty Style",
          description: "Wash, Maintenance, and Specialty Style included (Barrel Rolls, Bantu Knots, Flat Twists, etc.)",
          price: 140,
          duration: "2h 30min",
          images: ["/images/retwist-specialty-style-2.jpeg"]
        },
        {
          id: "n4",
          name: "Natural Twist Style",
          description: "Wash and Blow Dry included (Traditional Two Strand Twists, Kinkakou Twists, etc.)",
          price: 80,
          priceNote: "+",
          duration: "3h",
          images: ["/images/natural-twist-style.jpeg", "/images/natural-twist-style-2.jpeg"]
        },
        {
          id: "n5",
          name: "Box Braids",
          description: "Wash and Blowdry included (No Feed-in Hair)",
          price: 80,
          priceNote: "+",
          duration: "2h 30min",
          images: ["/images/box-braids-2.jpeg"]
        },
        {
          id: "n6",
          name: "Stitch Braids",
          description: "Precise stitch braid technique for clean, long-lasting styles",
          price: 60,
          priceNote: "+",
          duration: "2h",
          images: ["/images/stitch-braids-2.jpeg"]
        },
        {
          id: "n7",
          name: "Starter Locs",
          description: "Wash included and Choice of Parting",
          price: 140,
          priceNote: "+",
          duration: "3h",
          images: ["/images/locs-styling.jpeg"]
        },
        {
          id: "t1",
          name: "Scalp Treatment Add On",
          description: "Nourishing scalp treatment to promote healthy hair growth",
          price: 20,
          duration: "30min",
          images: ["/images/deep-conditioning-treatment.png"]
        },
        {
          id: "t2",
          name: "Deep Conditioning Add On",
          description: "Intensive conditioning treatment to restore moisture and strength",
          price: 25,
          duration: "30min",
          images: ["/images/deep-conditioning-treatment.png"]
        }
      ]
    }
  ],
  spa: [
    {
      id: "ashley",
      name: "Ashley",
      title: "Spa Specialist",
      image: "/images/ashley.jpg",
      phoneNumber: "+12245042113",
      booksyUrl: "https://ashleysanchez6.glossgenius.com/",
      specialties: ["Facials", "Skincare", "Spa Treatments"],
      description: "Expert in skincare and spa treatments",
      services: [
        {
          id: "sp1",
          name: "Classic Facial",
          description: "Deep cleansing facial with extraction and moisturizing",
          price: 75,
          duration: "1h",
          images: ["/images/spa.png"]
        },
        {
          id: "sp2",
          name: "Anti-Aging Facial",
          description: "Advanced facial treatment targeting fine lines and aging",
          price: 95,
          duration: "1h 15min",
          images: ["/images/spa.png"]
        },
        {
          id: "sp3",
          name: "Hydrating Facial",
          description: "Intensive moisture treatment for dry and dehydrated skin",
          price: 85,
          duration: "1h",
          images: ["/images/spa.png"]
        },
        {
          id: "sp4",
          name: "Acne Treatment Facial",
          description: "Specialized treatment for acne-prone skin",
          price: 90,
          duration: "1h 15min",
          images: ["/images/spa.png"]
        },
        {
          id: "sp5",
          name: "Chemical Peel",
          description: "Professional chemical peel for skin renewal",
          price: 120,
          duration: "1h 30min",
          images: ["/images/spa.png"]
        },
        {
          id: "sp6",
          name: "Microdermabrasion",
          description: "Exfoliating treatment for smoother, brighter skin",
          price: 110,
          duration: "1h",
          images: ["/images/spa.png"]
        }
      ]
    }
  ]
}

// Staff Card Component
function StaffCard({ staff }: { staff: any }) {
  const formatPrice = (price: number | string, priceNote?: string) => {
    if (typeof price === "string") return price
    return `$${price}${priceNote || ""}`
  }

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-yellow-400">
      {/* Staff Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-6 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white/20 border-2 border-white/30">
              <Image
                src={staff.image}
                alt={staff.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder-user.jpg'
                }}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">{staff.name}</h3>
              <p className="text-yellow-100">{staff.title}</p>
              <p className="text-sm text-yellow-100 mt-1">{staff.description}</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Button 
              asChild
              size="lg"
              className="bg-white text-yellow-500 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-300 font-semibold shadow-lg"
            >
              <a
                href={staff.booksyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Book with {staff.name}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              asChild
              size="lg"
              className="bg-green-600 text-white hover:bg-white/30 transition-all duration-300 font-semibold shadow-lg border border-white/30"
            >
              <a
                href={`tel:${staff.phoneNumber}`}
                className="flex items-center justify-center gap-2"
              >
                Call/Text for appointments
                <Phone className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Specialties */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {staff.specialties.map((specialty: string, index: number) => (
              <span key={index} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="p-6">
        <div className="space-y-4">
          {staff.services.map((service: any) => (
            <div key={service.id} className="border border-gray-200 rounded-lg p-4 hover:border-yellow-400 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-lg group-hover:text-yellow-600 transition-colors">{service.name}</h4>
                <div className="text-right">
                  <span className="text-xl font-bold text-yellow-600">{formatPrice(service.price, service.priceNote)}</span>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{service.duration}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ServicesTabs() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("barbers")
  const [activeBarberTab, setActiveBarberTab] = useState("david")
  const [activeStylistTab, setActiveStylistTab] = useState("bita")
  const [activeSpaTab, setActiveSpaTab] = useState("ashley")

  // Handle URL hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && ["barbers", "stylists", "spa"].includes(hash)) {
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

  // Handle sub-tab changes
  const handleBarberTabChange = (value: string) => {
    setActiveBarberTab(value)
  }

  const handleStylistTabChange = (value: string) => {
    setActiveStylistTab(value)
  }

  const handleSpaTabChange = (value: string) => {
    setActiveSpaTab(value)
  }

  return (
    <>
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-white shadow-md border border-gray-200 grid grid-cols-3 w-full max-w-2xl gap-2 p-2 h-auto">
            <TabsTrigger
              value="barbers"
              className="flex items-center gap-2 bg-gray-50 hover:bg-yellow-100 data-[state=active]:bg-yellow-400 data-[state=active]:text-white rounded-md px-4 py-3 text-sm font-medium transition-all duration-200 min-h-[50px]"
            >
              <Scissors className="h-5 w-5" />
              <span>Barbers</span>
            </TabsTrigger>
            <TabsTrigger
              value="stylists"
              className="flex items-center gap-2 bg-gray-50 hover:bg-yellow-100 data-[state=active]:bg-yellow-400 data-[state=active]:text-white rounded-md px-4 py-3 text-sm font-medium transition-all duration-200 min-h-[50px]"
            >
              <Users className="h-5 w-5" />
              <span>Stylists</span>
            </TabsTrigger>
            <TabsTrigger
              value="spa"
              className="flex items-center gap-2 bg-gray-50 hover:bg-yellow-100 data-[state=active]:bg-yellow-400 data-[state=active]:text-white rounded-md px-4 py-3 text-sm font-medium transition-all duration-200 min-h-[50px]"
            >
              <Sparkles className="h-5 w-5" />
              <span>Spa</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Barbers Tab Content with Nested Tabs */}
        <TabsContent value="barbers" className="mt-0">
          <Tabs value={activeBarberTab} onValueChange={handleBarberTabChange} className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="bg-gray-100 shadow-sm border border-gray-200 grid grid-cols-3 w-full max-w-3xl gap-1 p-1 h-auto">
                {staffData.barbers.map((barber) => (
                  <TabsTrigger
                    key={barber.id}
                    value={barber.id}
                    className="flex items-center gap-2 bg-white hover:bg-yellow-50 data-[state=active]:bg-yellow-400 data-[state=active]:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 min-h-[44px]"
                  >
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={barber.image}
                        alt={barber.name}
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="hidden sm:inline">{barber.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {staffData.barbers.map((barber) => (
              <TabsContent key={barber.id} value={barber.id} className="mt-0">
                <div className="flex justify-center">
                  <div className="w-full max-w-4xl">
                    <StaffCard staff={barber} />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>

        {/* Stylists Tab Content with Nested Tabs */}
        <TabsContent value="stylists" className="mt-0">
          <Tabs value={activeStylistTab} onValueChange={handleStylistTabChange} className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="bg-gray-100 shadow-sm border border-gray-200 grid grid-cols-2 w-full max-w-2xl gap-1 p-1 h-auto">
                {staffData.stylists.map((stylist) => (
                  <TabsTrigger
                    key={stylist.id}
                    value={stylist.id}
                    className="flex items-center gap-2 bg-white hover:bg-yellow-50 data-[state=active]:bg-yellow-400 data-[state=active]:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 min-h-[44px]"
                  >
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={stylist.image}
                        alt={stylist.name}
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="hidden sm:inline">{stylist.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {staffData.stylists.map((stylist) => (
              <TabsContent key={stylist.id} value={stylist.id} className="mt-0">
                <div className="flex justify-center">
                  <div className="w-full max-w-4xl">
                    <StaffCard staff={stylist} />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>

        {/* Spa Tab Content with Nested Tabs */}
        <TabsContent value="spa" className="mt-0">
          <Tabs value={activeSpaTab} onValueChange={handleSpaTabChange} className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="bg-gray-100 shadow-sm border border-gray-200 grid grid-cols-1 w-full max-w-md gap-1 p-1 h-auto">
                {staffData.spa.map((spa) => (
                  <TabsTrigger
                    key={spa.id}
                    value={spa.id}
                    className="flex items-center gap-2 bg-white hover:bg-yellow-50 data-[state=active]:bg-yellow-400 data-[state=active]:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 min-h-[44px]"
                  >
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={spa.image}
                        alt={spa.name}
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="hidden sm:inline">{spa.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {staffData.spa.map((spa) => (
              <TabsContent key={spa.id} value={spa.id} className="mt-0">
                <div className="flex justify-center">
                  <div className="w-full max-w-4xl">
                    <StaffCard staff={spa} />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>
      </Tabs>
    </>
  )
}
