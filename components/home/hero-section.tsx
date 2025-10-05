"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function HeroSection() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

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
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-10 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500">
              Venegas Salon & Spa
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

          {/* Right side - Instagram post */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-2xl">
              <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Promotion October 1-16th
              </p>
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/p/DPRrtsXD2pS/"
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '8px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '500px',  // Changed from 400px
                  minWidth: '400px',  // Changed from 326px
                  padding: '0',
                  width: '100%',
                  height: '600px',    // Added this line
                  overflow: 'hidden'  // Added this line
                }}
              >
                <div style={{ 
                  padding: '8px',     // Changed from 16px
                  height: '100%',     // Added this line
                  display: 'flex',    // Added this line
                  alignItems: 'center',    // Added this line
                  justifyContent: 'center' // Added this line
                }}>
                  <a 
                    href="https://www.instagram.com/p/DPRrtsXD2pS/"
                    style={{
                      background: '#FFFFFF',
                      lineHeight: '0',
                      padding: '8px 16px',  // Changed from '0 0'
                      textAlign: 'center',
                      textDecoration: 'none',
                      width: '100%',
                      borderRadius: '4px',   // Added this line
                      fontSize: '14px',      // Added this line
                      color: '#262626'       // Added this line
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View this post on Instagram
                  </a>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}
