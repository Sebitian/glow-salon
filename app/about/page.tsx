import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - Venegas Salon & Spa",
  description: "Learn about our history, mission, and our team of expert stylists.",
}

const teamMembers = [
  {
    id: "david",
    name: "David",
    title: "Owner & Barber",
    image: "/images/david.png",
    services: ["Haircuts", "Fades", "Beards", "Eyebrows"],
    bookingUrl: "https://booksy.com/en-us/481608_ds-cuts_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVdzLJLg5yzw8uDEyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUANPssMTwAAAA%3D",
    available: true
  },
  {
    id: "luis",
    name: "Luis (Pumba)",
    title: "Barber",
    image: "/images/pumba3.JPEG",
    services: ["Haircuts", "Fades", "Beards", "Eyebrows"],
    bookingUrl: "https://booksy.com/en-us/1409092_pumba-cuts_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FV9zF1igjJNki0DEyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAIQzrHjwAAAA%3D",
    available: true
  },
  {
    id: "alex",
    name: "Alex",
    title: "Barber",
    image: "/images/ig3.png",
    services: ["Haircuts", "Fades", "Beards", "Eyebrows"],
    bookingUrl: "https://booksy.com/en-us/1404532_ar-fadez_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVLy5w8vIzLXcsDUyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAhomW8TwAAAA%3D",
    available: true
  },
  // {
  //   id: "izzy",
  //   name: "Izzy",
  //   title: "Hair Stylist",
  //   image: "/images/izzy.JPEG",
  //   services: ["Hair Color", "Treatments", "Styling", "Haircuts"],
  //   bookingUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville/staffer/1432902#ba_s=seo",
  //   available: true
  // },
  // {
  //   id: "ahtziri",
  //   name: "Ahtziri",
  //   title: "Hair Stylist",
  //   image: "/images/ahtziri.JPEG",
  //   services: ["Hair Color", "Treatments", "Styling", "Haircuts"],
  //   bookingUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville/staffer/1457245#ba_s=seo",
  //   available: true
  // },
  {
    id: "lyzzet",
    name: "Lyzzet Nunez",
    title: "Hair Stylist",
    image: "/images/lyzzet.JPEG",
    services: ["Haircuts", "Hair Color", "Treatments", "Styling", "Haircuts"],
    bookingUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville/staffer/1508689#ba_s=seo",
    available: true
  },
  {
    id: "diana",
    name: "Diana Escobar",
    title: "Hair Stylist",
    image: "/images/diana.PNG",
    services: ["Hair Color", "Treatments", "Styling", "Haircuts"],
    bookingUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville/staffer/1532292#ba_s=seo",
    available: true
  },
  {
    id: "andrea",
    name: "Andrea",
    title: "Spa Specialist",
    image: "/images/andrea.jpg",
    services: ["Facials", "Wax"],
    bookingUrl: "https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville/staffer/1478262#ba_s=seo",
    available: true
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="relative py-20 bg-cover bg-no-repeat" style={{backgroundImage: 'url(/images/all2.jpg)', backgroundPosition: 'center 25%'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 pt-16">
          <h1 className="heading-xl text-white text-center pt-24 mb-4">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500 font-bold">Venegas Salon & Spa</span> </h1>
          <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
            Discover our story, our passion for beauty, and our commitment to excellence.
          </p>
        </div>
      </div>
      <div className="bg-black">
        <div className="container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 px-8">
          <div>
            <h2 className="heading-lg mb-6 text-white">Our Story</h2>
            <p className="text-white/80 mb-4 leading-relaxed text-lg">
              Founded in 2025, Venegas Salon & Spa has been at the forefront of beauty and style in Libertyville. Our journey began
              with a simple vision: to provide top-quality beauty services in a welcoming, luxurious environment.
            </p>
            <p className="text-white/80 mb-4 leading-relaxed text-lg">
              With our unwavering commitment to excellence and passionate team of skilled professionals, we aspire to grow
              from our humble beginnings as a local salon into a renowned beauty destination that will touch countless lives.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="images/salon2.jpg"
              alt="Venegas Salon Interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="relative mb-20 mx-8 rounded-xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/bggold6.jpg"
              alt="Golden Smoke Background"
              fill
              className="object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center py-20 px-8">
            <h2 className="heading-lg mb-6 text-white drop-shadow-lg">Our Mission</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              At Venegas Salon & Spa, our mission is to enhance the natural beauty of every client, boost their confidence, and
              provide a relaxing and rejuvenating experience that leaves them feeling refreshed and radiant.
            </p>
          </div>
        </div>

                <div className="mb-20 px-8">
          <h2 className="heading-lg text-center mb-12 text-white">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
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
                        className="px-2 py-1 border border-yellow-400 text-yellow-400 text-sm font-bold rounded-full shadow-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  
                  {member.available ? (
                    <a 
                      href={member.bookingUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
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
                    </a>
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
{/* 
        <div className="text-center">
          <h2 className="heading-lg mb-6">Experience the Glow Difference</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We invite you to visit Glow Salon and experience our commitment to beauty, style, and exceptional service
            firsthand.
          </p>
          <Button asChild size="lg">
            <Link href="/booking">Book Your Appointment Today</Link>
          </Button>
        </div> */}
      </div>
      </div>
    </main>
  )
}
