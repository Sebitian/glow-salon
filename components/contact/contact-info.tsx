import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="salon-card p-8 shadow-salon">
      <h2 className="heading-md mb-6 flex items-center">
        <span className="w-8 h-0.5 bg-primary mr-2"></span>
        Get In Touch
      </h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-amber-400 shrink-0 mt-0.5 mr-3" />
          <div>
            <h3 className="font-semibold mb-1">Address</h3>
            <p className="text-gray-600">297 Peterson Rd, Libertyville, IL 60048</p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-6 w-6 text-amber-400 shrink-0 mt-0.5 mr-3" />
          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <a 
              href="tel:+12245042113" 
              className="text-gray-600 hover:text-amber-400 transition-colors"
            >
              (224) 504-2113
            </a>
          </div>
        </div>

        {/* <div className="flex items-start">
          <Mail className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-gray-600">info@glowsalon.in</p>
          </div>
        </div> */}

        <div className="flex items-start">
          <Clock className="h-6 w-6 text-amber-400 shrink-0 mt-0.5 mr-3" />
          <div>
            <h3 className="font-semibold mb-1">Business Hours</h3>
            <div className="text-gray-600 space-y-1">
              <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <h3 className="font-semibold mb-3">Connect With Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/venegassalonspa/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-200"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61576609551054"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.tiktok.com/@venegassalon"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-100 p-2 rounded-full hover:bg-black hover:text-white transition-colors"
            aria-label="TikTok"
          >
            <img src="/images/tiktok.png" alt="TikTok" className="h-5 w-5" />
          </a>
          <a
            href="https://g.page/venegassalon"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-100 p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors"
            aria-label="Google"
          >
            <img src="/images/google.png" alt="Google" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
