"use client"

export default function ContactMapComponent() {
  return (
    <div className="rounded-lg overflow-hidden shadow-md h-[400px] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
          <span className="text-3xl">📍</span>
        </div>
        <h3 className="text-xl font-bold mb-2">Visit Our Salon</h3>
        <p className="text-gray-600 mb-2">123 Beauty Lane</p>
        <p className="text-gray-600 mb-2">Mumbai, Maharashtra 400001</p>
        <p className="text-gray-600 mb-4">India</p>
        <a
          href="https://maps.google.com/?q=Mumbai,Maharashtra,India"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
        >
          View on Google Maps
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  )
}
