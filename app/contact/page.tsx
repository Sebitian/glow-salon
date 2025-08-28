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
      <div className="container-custom mb-5 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </>
  )
}
