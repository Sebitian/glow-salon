"use client"

import dynamic from "next/dynamic"

// Dynamically import to avoid SSR issues
const ContactMapComponent = dynamic(() => import("./contact-map-component"), {
  ssr: false,
  loading: () => (
    <div className="rounded-lg overflow-hidden shadow-md h-[400px] bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
        <p className="text-gray-600">Loading map...</p>
      </div>
    </div>
  ),
})

export default function LocationMap() {
  return <ContactMapComponent />
}
