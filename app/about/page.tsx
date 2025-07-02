import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - Venegas Salon & Spa",
  description: "Learn about our history, mission, and our team of expert stylists.",
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-light py-20 mb-12">
        <div className="container-custom">
          <h1 className="heading-xl text-white text-center mb-4">About Venegas Salon & Spa</h1>
          <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
            Discover our story, our passion for beauty, and our commitment to excellence.
          </p>
        </div>
      </div>
      <div className="container-custom mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="heading-lg mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2025, Venegas Salon & Spa has been at the forefront of beauty and style in Libertyville. Our journey began
              with a simple vision: to provide top-quality beauty services in a welcoming, luxurious environment.
            </p>
            <p className="text-gray-600 mb-4">
              With our unwavering commitment to excellence and passionate team of skilled professionals, we aspire to grow
              from our humble beginnings as a local salon into a renowned beauty destination that will touch countless lives.
            </p>
            <Button asChild className="mt-4">
              <Link href="/booking">Book an Appointment</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="images/salon2.jpg"
              alt="Venegas Salon Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="heading-lg mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Venegas Salon & Spa, our mission is to enhance the natural beauty of every client, boost their confidence, and
            provide a relaxing and rejuvenating experience that leaves them feeling refreshed and radiant.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="heading-lg text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Barbers */}
            <div className="salon-card text-center p-6">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <Image src="/images/david.png" alt="David - Owner & Master Barber" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">David</h3>
              <p className="text-gray-600 mb-1">Owner & Barber</p>
              <p className="text-gray-600 mb-4">15+ years of unmatched customer satisfaction</p>
              <a 
                href="https://booksy.com/en-us/481608_ds-cuts_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVdzLJLg5yzw8uDEyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUANPssMTwAAAA%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#00D4AA] hover:bg-[#00B894] text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <Image 
                  src="/images/booksy_logo.png" 
                  alt="Booksy" 
                  width={20} 
                  height={20} 
                  className="mr-2"
                />
                Book with David
              </a>
            </div>

            <div className="salon-card text-center p-6">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <Image src="/images/pumba2.png" alt="Luis (Pumba) - Barber" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Luis (Pumba)</h3>
              <p className="text-gray-600 mb-1">Barber</p>
              <p className="text-gray-600 mb-4">Specializing in fades and modern styles</p>
              <a 
                href="https://booksy.com/en-us/1409092_pumba-cuts_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FV9zF1igjJNki0DEyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAIQzrHjwAAAA%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#00D4AA] hover:bg-[#00B894] text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <Image 
                  src="/images/booksy_logo.png" 
                  alt="Booksy" 
                  width={20} 
                  height={20} 
                  className="mr-2"
                />
                Book with Luis
              </a>
            </div>

            <div className="salon-card text-center p-6">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <Image src="/images/ig3.png" alt="Alex - Barber" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alex</h3>
              <p className="text-gray-600 mb-1">Barber</p>
              <p className="text-gray-600 mb-4">Master of classic and contemporary cuts</p>
              <a 
                href="https://booksy.com/en-us/1404532_ar-fadez_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVLy5w8vIzLXcsDUyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAhomW8TwAAAA%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#00D4AA] hover:bg-[#00B894] text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <Image 
                  src="/images/booksy_logo.png" 
                  alt="Booksy" 
                  width={20} 
                  height={20} 
                  className="mr-2"
                />
                Book with Alex
              </a>
            </div>

            {/* Stylists */}
            <div className="salon-card text-center p-6">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <Image src="/images/bita.jpg" alt="Bita - Hair Stylist" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bita</h3>
              <p className="text-gray-600 mb-1">Hair Stylist</p>
              <p className="text-gray-600 mb-4">Expert in coloring and styling</p>
              <a 
                href="https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL64wMwqrMgz1CUmyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAixInkzwAAAA%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#00D4AA] hover:bg-[#00B894] text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <Image 
                  src="/images/booksy_logo.png" 
                  alt="Booksy" 
                  width={20} 
                  height={20} 
                  className="mr-2"
                />
                Book with Bita
              </a>
            </div>

            <div className="salon-card text-center p-6">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <Image src="/images/izzy.jpg" alt="Izzy - Hair Stylist" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Izzy</h3>
              <p className="text-gray-600 mb-1">Hair Stylist</p>
              <p className="text-gray-600 mb-4">Specializing in cuts and treatments</p>
              <a 
                href="https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL64wMwqrMgz1CUmyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAixInkzwAAAA%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#00D4AA] hover:bg-[#00B894] text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <Image 
                  src="/images/booksy_logo.png" 
                  alt="Booksy" 
                  width={20} 
                  height={20} 
                  className="mr-2"
                />
                Book with Izzy
              </a>
            </div>

            {/* Spa Specialist */}
            <div className="salon-card text-center p-6">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <Image src="/images/ashley.jpg" alt="Ashley - Spa Specialist" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ashley</h3>
              <p className="text-gray-600 mb-1">Spa Specialist</p>
              <p className="text-gray-600 mb-4">Expert in skincare and spa treatments</p>
              <a 
                href="https://ashleysanchez6.glossgenius.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#00D4AA] hover:bg-[#00B894] text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <Image 
                  src="/images/booksy_logo.png" 
                  alt="Booksy" 
                  width={20} 
                  height={20} 
                  className="mr-2"
                />
                Book with Ashley
              </a>
            </div>
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
    </>
  )
}
