import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Analytics } from "@vercel/analytics/next"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Professional Salon & Spa Services in Libertyville | Venegas Salon & Spa",
  description:
    "Discover premium salon services in Libertyville, IL. Expert haircuts, styling, coloring, and spa treatments for men and women. Book your appointment today!",
  keywords: "salon Libertyville IL, spa services, haircuts, hair coloring, styling, beauty treatments, Venegas Salon, Peterson Rd salon",
  icons: {
    icon: [
      { url: "/images/venegas-logo.jpeg" },
      { url: "/images/venegas-logo.jpeg", type: "image/jpeg", sizes: "32x32" }
    ],
    apple: "/images/venegas-logo.jpeg",
  },
  openGraph: {
    title: "Professional Salon & Spa Services in Libertyville | Venegas Salon & Spa",
    description: "Discover premium salon services in Libertyville, IL. Expert haircuts, styling, coloring, and spa treatments for men and women.",
    images: [
      {
        url: "/images/venegas-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Venegas Salon & Spa Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        {/* <GoogleAnalytics /> */}
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
        {/* <WhatsAppWidget /> */}
      </body>
    </html>
  )
}
