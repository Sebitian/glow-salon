"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, Check } from "lucide-react"

// Updated service categories matching Booksy system
const serviceCategories = [
  {
    label: "Styling Services",
    options: [
      { value: "blow-out", label: "Blow Out - $40.00 (1h)" },
      { value: "blow-out-xl", label: "Blow Out XL - $55.00 (1h 30min)" },
      { value: "updo", label: "Updo - $60.00 (1h)" },
      { value: "silk-press", label: "Silk Press - $80.00 (1h)" },
      { value: "wig-braid-down", label: "Wig Braid Down - $60.00 (1h)" },
    ],
  },
  {
    label: "Haircuts",
    options: [
      { value: "mens-cut", label: "Men's Cut - $35.00 (45min)" },
      { value: "womens-cut", label: "Women's Cut - $60.00 (1h)" },
      { value: "kids-cut", label: "Kids Cut - $30.00 (45min)" },
    ],
  },
  {
    label: "Hair Treatments",
    options: [
      { value: "scalp-treatment", label: "Scalp Treatment Add On - $20.00 (30min)" },
      { value: "deep-conditioning", label: "Deep Conditioning Add On - $25.00 (30min)" },
      { value: "keratin-treatment", label: "Keratin Treatment - $300.00+ (2h 30min)" },
    ],
  },
  {
    label: "Hair Color",
    options: [
      { value: "all-over-color", label: "All Over Color - $100.00+ (2h)" },
      { value: "root-touch-up", label: "Root Touch Up - $65.00 (1h 30min)" },
      { value: "mens-color-gray", label: "Men's Color Gray Coverage - $65.00 (1h)" },
      { value: "full-foil", label: "Full Foil - $200.00+ (2h)" },
      { value: "partial-foil", label: "Partial Foil - $100.00+ (1h 30min)" },
      { value: "balayage", label: "Balayage - $150.00+ (2h)" },
      { value: "fashion-color", label: "Fashion Color - $50.00+ (1h 30min)" },
      { value: "toner-gloss", label: "Toner/Gloss - $30.00+ (30min)" },
      { value: "color-correction", label: "Color Correction - Varies (30min)" },
    ],
  },
  {
    label: "Natural Hair Services",
    options: [
      { value: "retwist-no-style", label: "Retwist No Style - $100.00 (1h 30min)" },
      { value: "retwist-basic", label: "Retwist Basic Style - $120.00 (2h)" },
      { value: "retwist-specialty", label: "Retwist Specialty Style - $140.00 (2h 30min)" },
      { value: "natural-twist", label: "Natural Twist Style - $80.00+ (3h)" },
      { value: "box-braids", label: "Box Braids - $80.00+ (2h 30min)" },
      { value: "stitch-braids", label: "Stitch Braids - $60.00+ (2h)" },
      { value: "starter-locs", label: "Starter Locs - $140.00+ (3h)" },
    ],
  },
]

// Time slots
const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
]

export default function BookingForm() {
  const searchParams = useSearchParams()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("")
  const [selectedService, setSelectedService] = useState<string>("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [whatsappConfirm, setWhatsappConfirm] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Set initial service from URL query parameter
  useEffect(() => {
    const serviceParam = searchParams.get("service")
    if (serviceParam) {
      // Find the matching service in our categories
      for (const category of serviceCategories) {
        const matchingService = category.options.find((option) =>
          option.label.toLowerCase().includes(serviceParam.toLowerCase()),
        )
        if (matchingService) {
          setSelectedService(matchingService.value)
          break
        }
      }
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setDate(undefined)
        setSelectedTimeSlot("")
        setName("")
        setPhone("")
        setEmail("")
        setWhatsappConfirm(true)
      }, 3000)
    }, 1500)
  }

  return (
    <Card className="max-w-3xl mx-auto shadow-salon border-0 hover:shadow-lg transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-t-lg">
        <CardTitle>Book Your Appointment</CardTitle>
        <CardDescription className="text-white/90">
          Schedule your visit to Venegas Salon & Spa. We operate by appointment only to ensure personalized service.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        {isSuccess ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-4">
              Your appointment has been scheduled successfully. We'll contact you to confirm your appointment details.
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-md"
            >
              Book Another Appointment
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="service">Select Service</Label>
                <Select value={selectedService} onValueChange={setSelectedService} required>
                  <SelectTrigger id="service" className="border-gray-300 focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.map((category) => (
                      <div key={category.label}>
                        <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">{category.label}</div>
                        {category.options.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </div>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Select Date</Label>
                  <div className="border rounded-md mt-1.5 border-gray-300">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => {
                        // Disable past dates and Sundays
                        const today = new Date()
                        today.setHours(0, 0, 0, 0)
                        return date < today || date.getDay() === 0
                      }}
                      className="rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <Label>Select Time Slot</Label>
                  <div className="grid grid-cols-2 gap-2 mt-1.5 h-[280px] overflow-y-auto border rounded-md p-2 border-gray-300">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot}
                        type="button"
                        variant={selectedTimeSlot === slot ? "default" : "outline"}
                        className={`justify-start ${selectedTimeSlot === slot ? "bg-primary text-primary-foreground" : ""}`}
                        onClick={() => setSelectedTimeSlot(slot)}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="whatsapp"
                  checked={whatsappConfirm}
                  onCheckedChange={(checked) => setWhatsappConfirm(checked as boolean)}
                />
                <label
                  htmlFor="whatsapp"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Send confirmation via text message
                </label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full shadow-md"
              disabled={!date || !selectedTimeSlot || !selectedService || !name || !phone || isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Book Appointment"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
