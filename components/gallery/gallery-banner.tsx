import Image from "next/image"

export default function GalleryBanner() {
  return (
    <section className="relative pt-32 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="images/salon2.jpg"
          alt="Salon gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <h1 className="heading-xl mb-4 text-white font-bold drop-shadow-lg">Our Gallery</h1>
          <p className="text-lg md:text-xl text-white/95 drop-shadow-md">
            Browse through our collection of hairstyles, nail art, makeup looks, and more.
          </p>
        </div>
      </div>
    </section>
  )
}
