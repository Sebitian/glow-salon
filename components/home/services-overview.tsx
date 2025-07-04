import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"

const services = [
  {
    icon: (
      <Image
        src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=100&h=100&fit=crop&crop=faces&auto=format&q=60"
        alt="Hairstyling"
        width={64}
        height={64}
        className="rounded-full object-cover"
      />
    ),
    title: "Expert Haircuts & Styling",
    description: "Precision cuts and trendsetting styles for all hair types.",
    link: "/services#haircuts",
  },
  {
    icon: (
      <Image
        src="images/all-over-color-2.jpeg"
        alt="Hair Color"
        width={64}
        height={64}
        className="rounded-full object-cover"
      />
    ),
    title: "Hair Treatment & Coloring",
    description: "Professional color services including highlights, balayage, and fashion colors.",
    link: "/services#color",
  },
  {
    icon: (
      <Image
        src="images/box-braids-3.jpeg"
        alt="Natural Hair"
        width={64}
        height={64}
        className="rounded-full object-cover"
      />
    ),
    title: "Natural Hair",
    description: "Specialized care for natural hair textures including locs, braids, twists, and protective styling.",
    link: "/services#natural",
  },
]

export default function ServicesOverview() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bggold4.jpg"
          alt="Gold background texture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-white">Our Premium Services</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Indulge in our wide range of <span className="text-amber-400">luxury</span> beauty treatments, tailored to enhance your unique style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="salon-card p-8 text-center hover-lift transition-all duration-300 hover:bg-black/50 bg-black/30 backdrop-blur-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-400/20 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="text-amber-400 font-medium hover:text-amber-300 transition-colors inline-flex items-center"
              >
                Learn More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
              
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-amber-400 hover:bg-amber-500 text-black font-bold px-8 py-6 text-lg border-2 border-black">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-2xl mx-auto">
          {/* Green Phone Button */}
          <Button
            size="lg"
            className="h-24 bg-green-500 hover:bg-green-600 text-white font-bold text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl transform"
            asChild
          >
            <a href="tel:5042113" className="flex flex-col items-center justify-center space-y-2">
              <Phone className="h-8 w-8" />
              <div className="text-center">
                <div className="text-sm font-normal">(224) 504-2113</div>
              </div>
            </a>
          </Button>

          {/* Booksy Button */}
          <Button
            size="lg"
            className="h-24 bg-teal-500 hover:bg-teal-600 text-white font-bold text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl transform"
            asChild
          >
            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3"
            >
              <Image
                src="/images/booksy_logo.png"
                alt="Booksy Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span>Book Now</span>
            </a>
          </Button>
        </div>

        <div className="text-center mt-8">
          
        </div>
      </div>
    </section>
  )
}
