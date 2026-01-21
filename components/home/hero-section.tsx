"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import InstagramLinks from "./instagram-links"


export default function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="images/salon2.jpg"
          alt="Luxurious salon interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            {/* <div className="flex justify-center lg:justify-start mb-6">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm ring-1 ring-white/20 shadow-2xl">
                <Image
                  src="/images/venegas-logo.jpeg"
                  alt="Venegas Salon & Spa logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div> */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-10 mt-16 md:mt-24 lg:mt-32 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              Venegas Salon & Spa
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Indulge in premium beauty services tailored for you. Where style meets excellence and confidence is born.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="p-0.5 rounded-lg bg-gradient-to-r from-accent via-primary to-accent">
                <div className="bg-white hover:bg-gray-100 px-4 py-2 md:px-8 md:py-4 rounded-lg transition-all duration-300">
                  <Link href="/booking" className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                    Book Now
                  </Link>
                </div>
              </div>
              
              <div className="p-0.5 rounded-lg bg-gradient-to-r from-accent via-primary to-accent">
                <div className="bg-white hover:bg-gray-100 px-4 py-2 md:px-8 md:py-4 rounded-lg transition-all duration-300">
                  <Link href="/services" className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Instagram links */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-2xl p-6 max-w-md w-full">
              <InstagramLinks />
            </div>
          </div>
        </div> 
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}
