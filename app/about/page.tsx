import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { Metadata } from "next"
import { Sparkles, ShieldCheck, Heart, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Oswal Alankar, its history, and its owners, Bharat Rupchand Oswal and Nitin Rupchand Oswal.",
}

export default function AboutPage() {
  return (
    <div className="bg-stone-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-serif font-bold text-amber-700 mb-4">About Oswal Alankar</h1>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto">
            A legacy of trust, craftsmanship, and timeless beauty since 19XX.
          </p>
        </div>

        {/* History Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl border border-stone-200 animate-fade-in delay-200">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Vintage Jewellery Shop"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="space-y-6 animate-fade-in-up delay-300">
            <h2 className="text-4xl font-serif font-bold text-stone-800">Our Rich History</h2>
            <p className="text-lg text-stone-700 leading-relaxed">
              Oswal Alankar was founded with a vision to bring unparalleled artistry and purity to every piece of
              jewellery. For decades, we have been a cherished name, known for our commitment to quality and our deep
              understanding of traditional and contemporary designs. Our journey began with a simple promise: to craft
              not just ornaments, but heirlooms.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Every piece at Oswal Alankar tells a story of dedication, precision, and the timeless beauty of precious
              metals and stones. We pride ourselves on maintaining the highest standards of craftsmanship, ensuring that
              each creation is a masterpiece.
            </p>
          </div>
        </section>

        {/* Owners Section */}
        <section className="text-center mb-20">
          <h2 className="text-4xl font-serif font-bold text-amber-700 mb-12 animate-fade-in-up">
            Meet Our Visionaries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-4 bg-white p-8 rounded-lg shadow-lg border border-stone-200 animate-fade-in-up delay-200 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Bharat Rupchand Oswal"
                width={150}
                height={150}
                className="rounded-full object-cover border-4 border-amber-700 shadow-md"
              />
              <h3 className="text-2xl font-serif font-semibold text-stone-800">Bharat Rupchand Oswal</h3>
              <p className="text-stone-600 text-center">
                Co-owner and visionary, Bharat Rupchand Oswal brings decades of experience and a profound understanding
                of the jewellery market. His dedication to quality and customer satisfaction has been a cornerstone of
                Oswal Alankar&apos;s success.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 bg-white p-8 rounded-lg shadow-lg border border-stone-200 animate-fade-in-up delay-300 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Nitin Rupchand Oswal"
                width={150}
                height={150}
                className="rounded-full object-cover border-4 border-amber-700 shadow-md"
              />
              <h3 className="text-2xl font-serif font-semibold text-stone-800">Nitin Rupchand Oswal</h3>
              <p className="text-stone-600 text-center">
                Co-owner, Nitin Rupchand Oswal combines traditional values with modern innovation. He is instrumental in
                bringing contemporary designs and efficient practices, ensuring Oswal Alankar remains at the forefront
                of the industry.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-stone-100 rounded-lg shadow-inner border border-stone-200 mb-20">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold text-amber-700 mb-4">Our Core Values</h2>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto">
              The principles that guide our craftsmanship and customer relationships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-6">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-stone-200 animate-fade-in-up delay-100 hover:shadow-xl transition-shadow duration-300">
              <Sparkles className="h-10 w-10 text-amber-700 mb-3" />
              <h3 className="text-xl font-semibold text-stone-800 font-serif mb-1">Purity</h3>
              <p className="text-stone-600 text-sm">Uncompromising quality in every metal and gem.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-stone-200 animate-fade-in-up delay-200 hover:shadow-xl transition-shadow duration-300">
              <ShieldCheck className="h-10 w-10 text-amber-700 mb-3" />
              <h3 className="text-xl font-semibold text-stone-800 font-serif mb-1">Trust</h3>
              <p className="text-stone-600 text-sm">Building lasting relationships through transparency.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-stone-200 animate-fade-in-up delay-300 hover:shadow-xl transition-shadow duration-300">
              <Heart className="h-10 w-10 text-amber-700 mb-3" />
              <h3 className="text-xl font-semibold text-stone-800 font-serif mb-1">Passion</h3>
              <p className="text-stone-600 text-sm">Crafting with love and dedication to art.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-stone-200 animate-fade-in-up delay-400 hover:shadow-xl transition-shadow duration-300">
              <Leaf className="h-10 w-10 text-amber-700 mb-3" />
              <h3 className="text-xl font-semibold text-stone-800 font-serif mb-1">Integrity</h3>
              <p className="text-stone-600 text-sm">Ethical practices from sourcing to sales.</p>
            </div>
          </div>
        </section>

        {/* Craftsmanship Showcase */}
        <section className="text-center mb-20">
          <h2 className="text-4xl font-serif font-bold text-amber-700 mb-12 animate-fade-in-up">The Art of Creation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg border border-stone-200 animate-fade-in-up delay-100 group">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Artisan at work"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 text-amber-50 text-xl font-semibold font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Precision Crafting
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg border border-stone-200 animate-fade-in-up delay-200 group">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Polished Diamond"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 text-amber-50 text-xl font-semibold font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Finest Materials
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg border border-stone-200 animate-fade-in-up delay-300 group">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Design Process"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 text-amber-50 text-xl font-semibold font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Innovative Designs
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-amber-700 text-amber-50 p-12 rounded-lg shadow-xl text-center animate-fade-in-up">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold">Visit Our Showroom</h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Experience the beauty of Oswal Alankar jewellery firsthand. Our dedicated team awaits to assist you in
              finding the perfect piece.
            </p>
            <Button
              asChild
              variant="outline"
              className="px-8 py-3 text-lg border-amber-50 text-amber-50 hover:bg-amber-50 hover:text-amber-700 transition-colors shadow-md bg-transparent"
            >
              <Link href="/contact">Plan Your Visit</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
