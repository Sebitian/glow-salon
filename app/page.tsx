import type { Metadata } from "next"
import HeroSection from "@/components/home/hero-section"
import ServicesOverview from "@/components/home/services-overview"
import WhyChooseUsSection from "@/components/home/why-choose-us-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import InstagramSection from "@/components/home/instagram-section"
import CTASection from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Professional Salon & Spa Services in Libertyville | Venegas Salon & Spa",
  description:
    "Discover premium salon services in Libertyville, IL. Expert haircuts, styling, coloring, and spa treatments for men and women. Book your appointment today!",
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection />
      <ServicesOverview />
      <WhyChooseUsSection />
      <InstagramSection />
      <CTASection />
    </>
  )
}
