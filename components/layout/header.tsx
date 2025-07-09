"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
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
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 transition-transform hover:scale-105">
            <div className="w-20 h-14 relative">
              <Image src="/images/venegas-logo.jpeg" alt="Venegas Salon & Spa Logo" fill className="object-contain" />
            </div>
            <span className={`text-lg font-bold transition-colors ${
              isScrolled ? "text-white" : "text-white drop-shadow-md"
            } text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500 border-2 border-amber-400 px-2 py-1 rounded`}>
              Venegas Salon & Spa
            </span>
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
                      ? "text-black hover:text-yellow-400"
                      : "text-black drop-shadow-md hover:text-yellow-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="ml-8 bg-black text-yellow-400 border-yellow-400 border-2 shadow-md hover:bg-yellow-400 hover:text-black hover:shadow-lg rounded-sm transition-all duration-300">
              <Link href="/booking">Book Now</Link>
            </Button>
          </nav>

          <Button
            size="icon"
            className="lg:hidden bg-black text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
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
            <Button className="w-full mt-4 text-yellow-400 border-yellow-400 border-2 shadow-md hover:bg-yellow-400 hover:text-black hover:shadow-lg rounded-sm transition-all duration-300">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
