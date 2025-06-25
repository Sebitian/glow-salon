import type { Metadata } from "next"
import { Suspense } from "react"
import BookingForm from "@/components/booking/booking-form"
import BookingBanner from "@/components/booking/booking-banner"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Book an Appointment - Glow Unisex Salon",
  description:
    "Book your appointment at Glow Unisex Salon. Choose from our range of services and select a convenient time slot.",
}

function BookingFormFallback() {
  return (
    <Card className="max-w-3xl mx-auto shadow-salon border-0">
      <CardContent className="p-8">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <span className="ml-2 text-gray-600">Loading booking form...</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default function BookingPage() {
  return (
    <>
      <BookingBanner />
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <Suspense fallback={<BookingFormFallback />}>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </>
  )
}
