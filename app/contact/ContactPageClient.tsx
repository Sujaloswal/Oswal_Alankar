"use client"

import type React from "react"
// Removed: import Image from "next/image"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react"
import GoogleMaps from "@/components/google-maps"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message! We will get back to you shortly. (This is a demo, no actual submission)")
    setFormData({ name: "", email: "", message: "" }) // Clear form
    setIsLoading(false)
  }

  return (
    <div className="relative bg-stone-50 py-16 md:py-24 overflow-hidden">
      {/* Removed: Background Image */}
      {/* Removed: Background Gradient Overlay */}
      <div className="relative z-10 container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-serif font-bold text-amber-700 mb-4">Connect With Us</h1>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto">
            We&apos;d love to hear from you. Reach out to us for any inquiries, appointments, or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/90 p-8 md:p-12 rounded-xl shadow-2xl border border-stone-200 backdrop-blur-sm animate-fade-in-up delay-200">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-stone-700">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border-stone-300 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-stone-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border-stone-300 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message" className="text-stone-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="border-stone-300 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-amber-700 text-amber-50 hover:bg-amber-800 transition-colors shadow-lg py-3 text-lg font-semibold"
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Our Details</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-stone-700">
                <Mail className="h-6 w-6 text-amber-700" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>info@oswalalankar.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-stone-700">
                <Phone className="h-6 w-6 text-amber-700" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+91 8149829797 (Bharat Oswal)</p>
                  <p>+91 9822299998 (Nitin Oswal)</p>
                </div>
              </div>
              <div className="flex items-start gap-4 text-stone-700">
                <MapPin className="h-6 w-6 text-amber-700 mt-1" />
                <div className="flex-1">
                  <p className="font-semibold">Address</p>
                  <p>Shop No 43 C Ward, Gujari Rd, near by H F Jewellers, Bazar, Kolhapur, Maharashtra 416002</p>
                  <Button
                    onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=16.696228208520868,74.22313951086511&travelmode=driving', '_blank')}
                    className="mt-2 bg-amber-700 text-amber-50 hover:bg-amber-800 transition-colors text-sm px-4 py-2"
                    size="sm"
                  >
                    🗺️ Get Directions
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-4 text-stone-700">
                <Clock className="h-6 w-6 text-amber-700 mt-1" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p>Mon - Sun: 10:00 AM - 8:00 PM</p>
                  <p>Saturday: Closed</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="w-full h-64 animate-fade-in delay-300">
              <GoogleMaps
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE'}
                latitude={16.696092015433692} // Kolhapur, India coordinates (you can change this to your actual shop location)
                longitude={74.22309650185055}
                zoom={15}
                title="Oswal Alankar Jewellery"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
