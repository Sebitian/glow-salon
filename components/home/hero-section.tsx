import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500">
            Discover Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500">
              Radiant Beauty
            </span>
          </h1>
    
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Indulge in premium beauty services tailored for you. Where style meets excellence and confidence is born.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="p-0.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500">
              <div className="bg-white hover:bg-gray-100 px-8 py-4 rounded-lg transition-all duration-300">
                <Link href="/booking" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500">
                  Book Now
                </Link>
              </div>
            </div>
            
            <div className="p-0.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500">
              <div className="bg-white hover:bg-gray-100 px-8 py-4 rounded-lg transition-all duration-300">
                <Link href="/services" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}
