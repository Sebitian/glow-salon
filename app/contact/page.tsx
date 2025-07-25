import type { Metadata } from "next"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import LocationMap from "@/components/contact/location-map"

export const metadata: Metadata = {
  title: "Contact Us - Venegas Salon & Spa",
  description: "Get in touch with Venegas Salon & Spa. Find our location, contact information, and business hours.",
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-amber-400 primary to-yellow-400/80 py-10 mb-12 pt-24">
        <div className="container-custom">
          <h1 className="heading-xl text-white text-center mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
            We're here to answer any questions you may have about our services or to book your next appointment.
          </p>
        </div>
      </div>
      <div className="container-custom mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </>
  )
}
