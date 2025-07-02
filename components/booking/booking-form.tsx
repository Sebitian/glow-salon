"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ExternalLink, Phone, MapPin, Instagram, Facebook, Video, Globe } from "lucide-react"

// Staff data organized by categories with real Booksy URLs
const staffCategories = [
  {
    label: "Barbers",
    staff: [
      {
        name: "David",
        title: "Owner & Barber",
        image: "/images/david.png",
        booksyUrl: "https://booksy.com/en-us/481608_ds-cuts_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVdzLJLg5yzw8uDEyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUANPssMTwAAAA%3D",
        specialties: ["Men's Cuts", "Beard Styling", "Classic Cuts"],
        description: "15+ years of unmatched customer satisfaction"
      },
      {
        name: "Luis (Pumba)",
        title: "Barber", 
        image: "/images/pumba2.png",
        booksyUrl: "https://booksy.com/en-us/1409092_pumba-cuts_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FV9zF1igjJNki0DEyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAIQzrHjwAAAA%3D",
        specialties: ["Fades", "Modern Styles", "Contemporary Cuts"],
        description: "Specializing in fades and modern styles"
      },
      {
        name: "Alex",
        title: "Barber",
        image: "/images/ig3.png",
        booksyUrl: "https://booksy.com/en-us/1404532_ar-fadez_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVLy5w8vIzLXcsDUyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAhomW8TwAAAA%3D",
        specialties: ["Classic Cuts", "Contemporary Cuts", "Styling"],
        description: "Master of classic and contemporary cuts"
      }
    ]
  },
  {
    label: "Hair Stylists",
    staff: [
      {
        name: "Bita",
        title: "Hair Stylist",
        image: "/images/bita.jpg",
        booksyUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL64wMwqrMgz1CUmyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAixInkzwAAAA%3D",
        specialties: ["Hair Color", "Styling", "Color Correction"],
        description: "Expert in coloring and styling"
      },
      {
        name: "Izzy",
        title: "Hair Stylist",
        image: "/images/izzy.jpg",
        booksyUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL64wMwqrMgz1CUmyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAixInkzwAAAA%3D",
        specialties: ["Cuts", "Treatments", "Styling"],
        description: "Specializing in cuts and treatments"
      }
    ]
  },
  {
    label: "Spa Services",
    staff: [
      {
        name: "Ashley",
        title: "Spa Specialist",
        image: "/images/ashley.jpg",
        booksyUrl: "https://ashleysanchez6.glossgenius.com/",
        specialties: ["Facials", "Skincare", "Spa Treatments"],
        description: "Expert in skincare and spa treatments"
      }
    ]
  }
]

const contactInfo = {
  phone: "(224) 504-2113",
  address: "297 Peterson Rd, Libertyville, IL 60048",
  socialLinks: {
    instagram: "https://www.instagram.com/venegassalonspa",
    facebook: "https://www.facebook.com/profile.php?id=61576609551054&sk=about", 
    tiktok: "https://www.tiktok.com/@venegassalonandspa",
    google: "https://www.g.page/venegassalon"
  }
}

export default function BookingForm() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleBookNow = (staff: any) => {
    // Open Booksy/GlossGenius in new tab
    window.open(staff.booksyUrl, '_blank')
  }

  const handleCallNow = () => {
    window.open(`tel:${contactInfo.phone}`, '_self')
  }

  const handleDirections = () => {
    const address = encodeURIComponent(contactInfo.address)
    window.open(`https://maps.google.com?q=${address}`, '_blank')
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Card */}
      <Card className="shadow-salon border-0 hover:shadow-lg transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-t-lg text-center">
          <CardTitle className="text-2xl md:text-3xl">Venegas Salon & Spa</CardTitle>
          <CardDescription className="text-white/90 text-lg">
            Book with our professional team
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
            <Button 
              onClick={handleCallNow}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-3"
            >
              <Phone className="h-4 w-4" />
              {contactInfo.phone}
            </Button>
            <Button 
              onClick={handleDirections}
              variant="outline"
              className="flex items-center gap-2 rounded-full px-6 py-3"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
            </Button>
          </div>

          {/* Social Links with Icon Badges */}
          <div className="flex justify-center gap-3 mb-6">
            <Badge 
              onClick={() => window.open(contactInfo.socialLinks.instagram, '_blank')}
              className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full p-3 transition-all duration-200 hover:scale-105"
            >
              <Instagram className="h-5 w-5" />
            </Badge>
            <Badge 
              onClick={() => window.open(contactInfo.socialLinks.facebook, '_blank')}
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-all duration-200 hover:scale-105"
            >
              <Facebook className="h-5 w-5" />
            </Badge>
            <Badge 
              onClick={() => window.open(contactInfo.socialLinks.tiktok, '_blank')}
              className="cursor-pointer bg-black hover:bg-gray-800 text-white rounded-full p-3 transition-all duration-200 hover:scale-105"
            >
              <img src="/images/tiktok.png" alt="TikTok" className="h-7 w-7" />
            </Badge>
            <Badge 
              onClick={() => window.open(contactInfo.socialLinks.google, '_blank')}
              className="cursor-pointer bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 transition-all duration-200 hover:scale-105"
            >
              <img src="/images/google.png" alt="Google" className="h-5 w-5" />
            </Badge>
          </div>

          <p className="text-center text-sm text-gray-600">
            {contactInfo.address}
          </p>
        </CardContent>
      </Card>

      {/* Staff Categories */}
      {staffCategories.map((category) => (
        <Card key={category.label} className="shadow-salon border-0 hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground">
            <CardTitle className="text-xl">{category.label}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.staff.map((staff) => (
                <Card key={staff.name} className="border border-gray-200 hover:shadow-md transition-all duration-300 h-full">
                  <CardContent className="p-4 h-full">
                    <div className="flex flex-col items-center text-center h-full">
                      {/* Staff Image */}
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 mb-3">
                        <img 
                          src={staff.image} 
                          alt={staff.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = '/images/placeholder-user.jpg'
                          }}
                        />
                      </div>
                      
                      {/* Staff Info - Flexible area */}
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{staff.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{staff.title}</p>
                          <p className="text-xs text-gray-500 mb-3">{staff.description}</p>
                          
                          {/* Specialties */}
                          <div className="flex flex-wrap justify-center gap-1 mb-4 min-h-[2.5rem]">
                            {staff.specialties.map((specialty) => (
                              <Badge key={specialty} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Book Now Button - Always at bottom */}
                        <Button 
                          onClick={() => handleBookNow(staff)}
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-md flex items-center justify-center gap-2 mt-auto"
                        >
                          <Calendar className="h-4 w-4" />
                          Book with {staff.name.split(' ')[0]}
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* General Booking Option */}
      <Card className="shadow-salon border-0 hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Not sure who to book with?</h3>
          <p className="text-gray-600 mb-4">Call us and we'll help you find the perfect stylist for your needs</p>
          <Button 
            onClick={handleCallNow}
            variant="outline"
            className="rounded-full px-8 py-3"
          >
            <Phone className="h-4 w-4 mr-2" />
            Call for Consultation
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
