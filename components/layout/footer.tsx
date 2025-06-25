import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Venegas Salon & Spa */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-10 relative mr-3">
                <Image src="/images/venegas-logo.jpeg" alt="Venegas Salon & Spa Logo" fill className="object-contain" />
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Professional hair and beauty services in Libertyville. Experience excellence with our expert stylists.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-primary mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-primary transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-primary mr-3"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-400">297 Peterson Rd, Libertyville, IL 60048</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-3" />
                <span className="text-gray-400">+1 (847) 555-0123</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-3" />
                <span className="text-gray-400">info@venagassalon.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-primary mr-3"></span>
              Business Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <div>
                  <p className="text-gray-400">Monday - Saturday:</p>
                  <p className="font-semibold text-white">9:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <div>
                  <p className="text-gray-400">Sunday:</p>
                  <p className="font-semibold text-white">By Appointment Only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 pt-10 pb-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-6">Follow us on social media for the latest styles and updates.</p>
            <div className="flex justify-center space-x-4">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <span className="text-white">5.0/5 stars on Booksy</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Venegas Salon & Spa. All rights reserved.</p>
          <p className="mt-2">
            <span className="inline-block">Professional Hair & Beauty Services</span>
            <span className="mx-2">|</span>
            <span className="inline-block">Libertyville, IL</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
