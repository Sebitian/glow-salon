import Image from "next/image"
import { Users, Award, Sparkles } from "lucide-react"

const features = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Expert Barbers & Stylists",
    description: "Our team of certified professionals brings years of experience and creativity to every service.",
    image:
      "images/pumba.jpg",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Premium Products",
    description: "We use only the highest quality, luxurious products to ensure the best results for our clients.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop&crop=focalpoint&auto=format&q=80",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Personalized Experience",
    description: "Enjoy a tailored approach to beauty, with services customized to your unique style and needs.",
    image:
      "images/spa.png",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bggold5.jpg"
          alt="Gold background texture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-white">Why Choose Venegas Salon ?</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Experience the difference with our commitment to excellence, luxury, and personalized care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="salon-card overflow-hidden group hover-lift">
              <div className="relative h-72">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-white/90 rounded-full mr-3">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/about"
            className="inline-flex items-center text-amber-400 font-semibold hover:text-amber-300 transition-colors"
          >
            Learn More About Us
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
