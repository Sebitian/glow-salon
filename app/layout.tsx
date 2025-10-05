import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppWidget from "@/components/widgets/whatsapp-widget"
import GoogleAnalytics from "@/components/analytics/google-analytics"
import { Analytics } from "@vercel/analytics/next"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Venegas Salon & Spa",
  description:
    "Premier salon in Libertyville, IL offering haircuts, styling, nail care, beauty treatments, and makeup services for men and women.",
  keywords: "unisex salon, beauty salon India, haircuts, hairstyling, nail care, beauty treatments, makeup services",
  openGraph: {
    title: "Venegas Salon & Spa",
    description:
      "Premier salon in Libertyville, IL offering haircuts, styling, hair care, beauty treatments, and other services for men and women.",
    images: ["/images/og-image.jpg"],
    type: "website",
    locale: "en_IN",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <GoogleAnalytics />
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
        {/* <WhatsAppWidget /> */}
      </body>
    </html>
  )
}
