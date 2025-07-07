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
      <div className="bg-black from-primary to-primary-light py-20 mb-12">
        <div className="container-custom">
          <h1 className="heading-xl text-white text-center mb-4">About <span className="text-yellow-400 animate-fadeIn hover:animate-none transition-all bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-500 bg-clip-text" >Venegas Salon & Spa </span> </h1>
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
            <Button asChild className="mt-4 text-black bg-yellow-400 border-solid border-2 border-black ">
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
            <div className="group bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 text-center p-6 border-2 border-black rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:rotate-1">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-black shadow-xl group-hover:border-white transition-all duration-300">
                <Image src="/images/david.png" alt="David - Owner & Master Barber" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black group-hover:text-white transition-colors duration-300">David</h3>
              <p className="text-black/80 mb-1 font-medium group-hover:text-white/90 transition-colors duration-300">Owner & Barber</p>
              <p className="text-black/70 mb-4 group-hover:text-white/80 transition-colors duration-300">15+ years of unmatched customer satisfaction</p>
              <a 
                href="https://booksy.com/en-us/481608_ds-cuts_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVdzLJLg5yzw8uDEyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUANPssMTwAAAA%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-black hover:bg-gray-800 text-yellow-400 font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
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

            <div className="group bg-gradient-to-br from-black via-gray-800 to-gray-900 text-center p-6 border-2 border-yellow-400 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-rotate-1">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-yellow-400 shadow-xl group-hover:border-white transition-all duration-300">
                <Image src="/images/pumba3.jpeg" alt="Luis (Pumba) - Barber" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400 group-hover:text-white transition-colors duration-300">Luis (Pumba)</h3>
              <p className="text-yellow-400/80 mb-1 font-medium group-hover:text-white/90 transition-colors duration-300">Barber</p>
              <p className="text-yellow-400/70 mb-4 group-hover:text-white/80 transition-colors duration-300">Specializing in fades and modern styles</p>
              <a 
                href="https://booksy.com/en-us/1409092_pumba-cuts_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FV9zF1igjJNki0DEyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAIQzrHjwAAAA%3D" 
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
                Book with Luis
              </a>
            </div>

            <div className="group bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 text-center p-6 border-2 border-black rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:rotate-1">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-black shadow-xl group-hover:border-white transition-all duration-300">
                <Image src="/images/ig3.png" alt="Alex - Barber" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black group-hover:text-white transition-colors duration-300">Alex</h3>
              <p className="text-black/80 mb-1 font-medium group-hover:text-white/90 transition-colors duration-300">Barber</p>
              <p className="text-black/70 mb-4 group-hover:text-white/80 transition-colors duration-300">Master of classic and contemporary cuts</p>
              <a 
                href="https://booksy.com/en-us/1404532_ar-fadez_barber-shop_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVLy5w8vIzLXcsDUyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAhomW8TwAAAA%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-black hover:bg-gray-800 text-yellow-400 font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
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
            <div className="group bg-gradient-to-br from-black via-gray-800 to-gray-900 text-center p-6 border-2 border-yellow-400 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-rotate-1">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-yellow-400 shadow-xl group-hover:border-white transition-all duration-300">
                <Image src="/images/bita.jpg" alt="Bita - Hair Stylist" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400 group-hover:text-white transition-colors duration-300">Bita</h3>
              <p className="text-yellow-400/80 mb-1 font-medium group-hover:text-white/90 transition-colors duration-300">Hair Stylist</p>
              <p className="text-yellow-400/70 mb-4 group-hover:text-white/80 transition-colors duration-300">Expert in coloring and styling</p>
              <a 
                href="https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL64wMwqrMgz1CUmyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAixInkzwAAAA%3D" 
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
                Book with Bita
              </a>
            </div>

            <div className="group bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 text-center p-6 border-2 border-black rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:rotate-1">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-black shadow-xl group-hover:border-white transition-all duration-300">
                <Image src="/images/izzy.jpeg" alt="Izzy - Hair Stylist" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black group-hover:text-white transition-colors duration-300">Izzy</h3>
              <p className="text-black/80 mb-1 font-medium group-hover:text-white/90 transition-colors duration-300">Hair Stylist</p>
              <p className="text-black/70 mb-4 group-hover:text-white/80 transition-colors duration-300">Specializing in cuts and treatments</p>
              <a 
                href="https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL64wMwqrMgz1CUmyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAixInkzwAAAA%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-black hover:bg-gray-800 text-yellow-400 font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
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

            <div className="group bg-gradient-to-br from-black via-gray-800 to-gray-900 text-center p-6 border-2 border-yellow-400 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-rotate-1">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-yellow-400 shadow-xl group-hover:border-white transition-all duration-300">
                <Image src="images/ahtziri.jpeg" alt="Ahtziri Gonzalez - Hair Stylist" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400 group-hover:text-white transition-colors duration-300">Ahtziri Gonzalez</h3>
              <p className="text-yellow-400/80 mb-1 font-medium group-hover:text-white/90 transition-colors duration-300">Hair Stylist</p>
              <p className="text-yellow-400/70 mb-4 group-hover:text-white/80 transition-colors duration-300">Expert in modern styling techniques</p>
              <a 
                href="https://booksy.com/en-us/1500556_venegas-salon-spa_hair-salon_18695_libertyville?do=invite&_branch_match_id=1410311065173934361&utm_medium=invite_from_share_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL64wMwqrMgz1CUmyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAixInkzwAAAA%3D" 
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
                Book with Ahtziri
              </a>
            </div>

            <div className="group bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 text-center p-6 border-2 border-black rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:rotate-1">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-black shadow-xl group-hover:border-white transition-all duration-300">
                <Image src="images/lyzzet.jpeg" alt="Lyzzet Nunez - Hair Stylist" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black group-hover:text-white transition-colors duration-300">Lyzzet Nunez</h3>
              <p className="text-black/80 mb-1 font-medium group-hover:text-white/90 transition-colors duration-300">Hair Stylist</p>
              <p className="text-black/70 mb-4 group-hover:text-white/80 transition-colors duration-300">Specializing in color and texture</p>
              <div className="inline-flex items-center justify-center px-4 py-2 bg-black text-yellow-400 font-medium rounded-lg border-2 border-yellow-400 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <span className="text-sm font-bold">Coming Soon</span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-black via-gray-800 to-gray-900 text-center p-6 border-2 border-yellow-400 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-rotate-1">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-yellow-400 shadow-xl group-hover:border-white transition-all duration-300">
                <Image src="images/diana.png" alt="Diana Escobar - Hair Stylist" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400 group-hover:text-white transition-colors duration-300">Diana Escobar</h3>
              <p className="text-yellow-400/80 mb-1 font-medium group-hover:text-white/90 transition-colors duration-300">Hair Stylist</p>
              <p className="text-yellow-400/70 mb-4 group-hover:text-white/80 transition-colors duration-300">Expert in precision cuts and styling</p>
              <div className="inline-flex items-center justify-center px-4 py-2 bg-yellow-400 text-black font-medium rounded-lg border-2 border-black shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <span className="text-sm font-bold">Coming Soon</span>
              </div>
            </div>

            {/* Spa Specialist */}
            <div className="group bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 text-center p-6 border-2 border-black rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:rotate-1">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-black shadow-xl group-hover:border-white transition-all duration-300">
                <Image src="/images/ashley.jpg" alt="Ashley - Spa Specialist" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black group-hover:text-white transition-colors duration-300">Ashley</h3>
              <p className="text-black/80 mb-1 font-medium group-hover:text-white/90 transition-colors duration-300">Spa Specialist</p>
              <p className="text-black/70 mb-4 group-hover:text-white/80 transition-colors duration-300">Expert in skincare and spa treatments</p>
              <a 
                href="https://ashleysanchez6.glossgenius.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-black hover:bg-gray-800 text-yellow-400 font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
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
