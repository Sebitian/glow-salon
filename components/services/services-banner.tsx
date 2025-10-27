"use client"

import Image from "next/image"
import { Button } from "../ui/button"

export default function ServicesBanner() {
  return (
    <section className="relative">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Video Background */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/services.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6">
        <h1 className="text-6xl md:text-7xl font-light text-white tracking-[0.2em] uppercase font-montserrat">
          Services
        </h1>

        <Button 
          onClick={() => window.open('https://linktr.ee/venegassalonnspa?utm_source=linktree_admin_share&fbclid=PAZXh0bgNhZW0CMTEAAacMAXslrw4GF2lYztAu4K_gbvYKmgUnfzhopGzIMfwcpSyGwYD-KHNczJqjMg_aem_2djK2MogFLrIrjffXZxoQA', '_blank')}
            className="rounded-lg text-black animate-bounce bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500"
        >
          Book Now
        </Button>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent z-30"></div>
    </section>
  )
}
