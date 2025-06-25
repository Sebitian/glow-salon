import Image from "next/image"

export default function ServicesBanner() {
  return (
    <section className="relative pt-32 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920&h=600&fit=crop&crop=focalpoint&auto=format&q=80"
          alt="Venegas Salon & Spa services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="heading-xl mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Discover our comprehensive range of professional hair and beauty services at Venegas Salon & Spa.
          </p>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★★★★★</span>
              <span>5.0/5 stars</span>
            </div>
            <span>•</span>
            <span>250+ reviews on Booksy</span>
            <span>•</span>
            <span>Appointment only</span>
          </div>
        </div>
      </div>
    </section>
  )
}
