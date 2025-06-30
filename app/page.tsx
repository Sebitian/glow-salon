import type { Metadata } from "next"
import HeroSection from "@/components/home/hero-section"
import ServicesOverview from "@/components/home/services-overview"
import WhyChooseUsSection from "@/components/home/why-choose-us-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import InstagramSection from "@/components/home/instagram-section"
import CTASection from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Venegas Salon & Spa",
  description:
    "Premier salon in Libertyville, IL offering haircuts, styling, hair treatments, and other services for men and women.",
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
