"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ExternalLink, Phone, MapPin, Instagram, Facebook, Video, Globe, Link } from "lucide-react"
import Image from "next/image"

// Updated team data to match About page structure
const teamMembers = [
  {
    id: "david",
    name: "David",
    title: "Owner & Barber",
    image: "/images/david.png",
    services: ["Haircuts", "Fades", "Beards", "Eyebrows"],
    bookingUrl: "https://booksy.com/en-us/481608_ds-cuts_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVdzLJLg5yzw8uDEyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUANPssMTwAAAA%3D",
    available: true,
    category: "Barbers"
  },
  {
    id: "luis",
    name: "Luis (Pumba)",
    title: "Barber",
    image: "/images/pumba3.JPEG",
    services: ["Haircuts", "Fades", "Beards", "Eyebrows"],
    bookingUrl: "https://booksy.com/en-us/1409092_pumba-cuts_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FV9zF1igjJNki0DEyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAIQzrHjwAAAA%3D",
    available: true,
    category: "Barbers"
  },
  {
    id: "alex",
    name: "Alex",
    title: "Barber",
    image: "/images/ig3.png",
    services: ["Haircuts", "Fades", "Beards", "Eyebrows"],
    bookingUrl: "https://booksy.com/en-us/1404532_ar-fadez_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVLy5w8vIzLXcsDUyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAhomW8TwAAAA%3D",
    available: true,
    category: "Barbers"
  },
  {
    id: "izzy",
    name: "Izzy",
    title: "Hair Stylist",
    image: "/images/izzy.JPEG",
    services: ["Hair Color", "Treatments", "Styling", "Haircuts"],
    bookingUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL64wMwqrMgz1CUmyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAixInkzwAAAA%3D",
    available: true,
    category: "Hair Stylists"
  },
  {
    id: "ahtziri",
    name: "Ahtziri Gonzalez",
    title: "Hair Stylist",
    image: "/images/ahtziri.JPEG",
    services: ["Hair Color", "Treatments", "Styling", "Haircuts"],
    bookingUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL64wMwqrMgz1CUmyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAixInkzwAAAA%3D",
    available: true,
    category: "Hair Stylists"
  },
  {
    id: "lyzzet",
    name: "Lyzzet Nunez",
    title: "Hair Stylist",
    image: "/images/lyzzet.JPEG",
    services: ["Haircuts", "Hair Color", "Treatments", "Styling", "Haircuts"],
    bookingUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville/staffer/1508689#ba_s=seo",
    available: true,
    category: "Hair Stylists"
  },
  {
    id: "diana",
    name: "Diana Escobar",
    title: "Hair Stylist",
    image: "/images/diana.PNG",
    services: ["Hair Color", "Treatments", "Styling", "Haircuts"],
    bookingUrl: "",
    available: true,
    category: "Hair Stylists"
  },
  {
    id: "andrea",
    name: "Andrea",
    title: "Spa Specialist",
    image: "/images/andrea.jpg",
    services: ["Facials", "Wax"],
    bookingUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville/staffer/1478262#ba_s=seo",
    available: true,
    category: "Spa"
  }
]



// Group team members by category
const staffCategories = teamMembers.reduce((acc, member) => {
  const category = member.category
  if (!acc[category]) {
    acc[category] = []
  }
  acc[category].push(member)
  return acc
}, {} as Record<string, typeof teamMembers>)

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
  const handleBookNow = (staff: any) => {
    window.open(staff.bookingUrl, '_blank')
  }

  const handleCallNow = () => {
    window.open(`tel:${contactInfo.phone}`, '_self')
  }

  const handleDirections = () => {
    const address = encodeURIComponent(contactInfo.address)
    window.open(`https://maps.google.com?q=${address}`, '_blank')
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6 bg-white min-h-screen pt-24 pb-12">
      {/* Header Card */}
      <Card className="shadow-salon border-0 hover:shadow-lg transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-amber-400 primary to-yellow-400/80 text-white rounded-t-lg text-center">
          <CardTitle className="text-2xl md:text-3xl">Venegas Salon & Spa</CardTitle>
          <CardDescription className="text-white/90 text-lg">
            Book with our professional team
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
            <Button 
              onClick={() => window.open('https://linktr.ee/venegassalonnspa?utm_source=linktree_admin_share&fbclid=PAZXh0bgNhZW0CMTEAAacMAXslrw4GF2lYztAu4K_gbvYKmgUnfzhopGzIMfwcpSyGwYD-KHNczJqjMg_aem_2djK2MogFLrIrjffXZxoQA', '_blank')}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-3"
            >
              <img src="/images/linktree.png" alt="Linktree" className="h-8 w-8" />
              Linktr.ee
            </Button>
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

          {/* Social Links */}
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

      {/* Team Members by Category */}
      {Object.entries(staffCategories).map(([categoryName, members]) => (
        <div key={categoryName} className="px-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">{categoryName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div key={member.id} className="p-0.5 rounded-xl shadow-xl">
                <div className="group bg-white text-center p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:rotate-1 h-full">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-amber-400 shadow-xl group-hover:border-amber-500 transition-all duration-300">
                    <Image 
                      src={member.image} 
                      alt={`${member.name} - ${member.title}`} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{member.name}</h3>
                  <p className="text-black/80 mb-3 font-medium">{member.title}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black text-sm font-medium rounded-full shadow-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  
                  {member.available ? (
                    <button 
                      onClick={() => handleBookNow(member)}
                      className="inline-flex items-center justify-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <Image 
                        src="/images/booksy_logo.png" 
                        alt="Booksy" 
                        width={20} 
                        height={20} 
                        className="mr-2"
                      />
                      Book with {member.name.split(' ')[0]}
                    </button>
                  ) : (
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg border-2 border-gray-500 shadow-md">
                      <span className="text-sm font-bold">Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* General Booking Option */}
      <div className="px-8">
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
    </div>
  )
}
