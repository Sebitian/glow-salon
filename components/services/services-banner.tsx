import Image from "next/image"

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
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h1 className="text-6xl md:text-7xl font-light text-white tracking-[0.2em] uppercase font-sans">
          Services
        </h1>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent z-30"></div>
    </section>
  )
}
