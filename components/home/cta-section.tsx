import Link from "next/link"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact/contact-form"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-6">Our Locations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Visit us at our newly opened salon and spa in Libertyville!
          </p>
        </div>

        <div className="mb-12">
          <ContactForm />
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Glow?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Book your appointment today and let our expert stylists help you look and feel your best.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-yellow-400 animate-bounce text-secondary-foreground hover:bg-secondary/90 rounded-full shadow-md"
          >
            <Link href="/booking">Book Your Appointment Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
