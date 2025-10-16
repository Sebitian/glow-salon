"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" }, 
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 animate-fadeIn ${
        isScrolled ? "bg-black shadow-md py-2" : "bg-black/30 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-5 transition-transform hover:scale-105">
            <div className="w-20 h-20 relative rounded-full overflow-hidden border-4 border-amber-400">
              <Image src="/images/venegas-logo.jpeg" alt="Venegas Salon & Spa Logo" fill className="object-cover" />
            </div>
            <span className={`text-lg font-bold transition-colors duration-300 ${
              isScrolled 
                ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500"
                : "text-white drop-shadow-lg"
            }`}>
              Venegas Salon & Spa
            </span>
            <div className="flex flex-col space-y-1">
              <div className="cursor-pointer flex items-center" onClick={() => window.open('https://maps.google.com?q=297+Peterson+Rd,+Libertyville,+IL+60048', '_blank')}>
                <span className={`text-sm font-bold transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-white drop-shadow-lg"
                }`}>
                  297 Peterson Rd, Libertyville
                </span>
              </div>
              <div className="cursor-pointer flex items-center">
                <span className={`text-sm font-bold transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-white drop-shadow-lg"
                }`}>
                  (224) 504-2113
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 transform ${
                  pathname === item.href
                    ? "text-yellow-400 font-bold"
                    : isScrolled 
                      ? "text-white hover:text-yellow-400"
                      : "text-white drop-shadow-lg hover:text-yellow-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="p-0.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500">
              <Button className="relative overflow-hidden bg-white hover:bg-gray-100 shadow-md hover:shadow-lg rounded-lg transition-all duration-300 border-0 group">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <Link href="/booking" className="relative text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 font-bold">
                  Book Now
                </Link>
              </Button>
            </div>
          </nav>

          <Button
            size="icon"
            className={`lg:hidden transition-all duration-300 h-10 w-10 ${
              isScrolled 
                ? "bg-white text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black"
                : "bg-white/90 text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-full text-base font-semibold mb-2 transition-all duration-300 ${
                  pathname === item.href
                    ? "text-yellow-400 font-bold"
                    : "text-black hover:text-yellow-400"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-white text-yellow-400 border-yellow-400 border-2 shadow-md hover:bg-yellow-400 hover:text-black hover:shadow-lg rounded-sm transition-all duration-300">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
