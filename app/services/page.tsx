import type { Metadata } from "next"
import ServicesTabs from "@/components/services/services-tabs"
import ServicesBanner from "@/components/services/services-banner"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Our Services - Venegas Salon & Spa",
  description:
    "Explore our wide range of beauty and grooming services for men and women, including haircuts, styling, nail care, and makeup.",
}

function ServicesTabsFallback() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <span className="ml-2 text-gray-600">Loading services...</span>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <ServicesBanner />
      <div className="py-16">
        <div className="container-custom">
          <Suspense fallback={<ServicesTabsFallback />}>
            <ServicesTabs />
          </Suspense>
        </div>
      </div>
    </>
  )
}
