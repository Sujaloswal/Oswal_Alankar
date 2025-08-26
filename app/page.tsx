import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { Sparkles, Handshake, Crown, Diamond } from "lucide-react"
import { HeroSlider } from "@/components/hero-slider"

export default function HomePage() {
  const featuredGoldProducts = [
    {
      id: "gold-necklace-1",
      name: "Traditional Gold Necklace Set",
      price: "₹ 85,000",
      imageUrl: "/gold/IMG-20250802-WA0058(1).jpg",
      imageAlt: "Traditional Gold Necklace Set with intricate design",
    },
    {
      id: "gold-earrings-2",
      name: "Elegant Gold Earrings",
      price: "₹ 45,000",
      imageUrl: "/gold/IMG-20250802-WA0060(1).jpg",
      imageAlt: "Elegant Gold Earrings with traditional design",
    },
    {
      id: "gold-bracelet-3",
      name: "Designer Gold Bracelet",
      price: "₹ 65,000",
      imageUrl: "/gold/IMG-20250802-WA0056(1).jpg",
      imageAlt: "Designer Gold Bracelet with modern styling",
    },
  ]

  const featuredSilverProducts = [
    {
      id: "silver-ring-1",
      name: "Artisan Silver Ring",
      price: "₹ 8,000",
      imageUrl: "/silver/IMG-20250802-WA0028.jpg",
      imageAlt: "Artisan Silver Ring with elegant design",
    },
    {
      id: "silver-pendant-2",
      name: "Minimalist Silver Pendant",
      price: "₹ 12,000",
      imageUrl: "/silver/IMG-20250802-WA0028.jpg",
      imageAlt: "Minimalist Silver Pendant with intricate details",
    },
    {
      id: "silver-anklet-3",
      name: "Ethnic Silver Anklet",
      price: "₹ 5,500",
      imageUrl: "/silver/IMG-20250802-WA0028.jpg",
      imageAlt: "Ethnic Silver Anklet with traditional pattern",
    },
  ]

  return (
    <>
      {/* Hero Section - Sliding Images */}
      <section className="w-full">
        <HeroSlider />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-amber-700 mb-4 animate-fade-in-up">
              Why Choose Oswal Alankar?
            </h2>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto animate-fade-in delay-100">
              Experience the difference of true craftsmanship and dedicated service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-stone-50 rounded-lg shadow-md border border-stone-200 animate-fade-in-up delay-200 hover:shadow-xl transition-shadow duration-300">
              <Sparkles className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold text-stone-800 font-serif mb-2">Exquisite Craftsmanship</h3>
              <p className="text-stone-600">
                Each piece is meticulously handcrafted by master artisans, ensuring unparalleled quality and detail.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-stone-50 rounded-lg shadow-md border border-stone-200 animate-fade-in-up delay-300 hover:shadow-xl transition-shadow duration-300">
              <Handshake className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold text-stone-800 font-serif mb-2">Trusted Heritage</h3>
              <p className="text-stone-600">
                With generations of experience, we uphold a legacy of trust, purity, and customer satisfaction.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-stone-50 rounded-lg shadow-md border border-stone-200 animate-fade-in-up delay-400 hover:shadow-xl transition-shadow duration-300">
              <Diamond className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold text-stone-800 font-serif mb-2">Ethical Sourcing</h3>
              <p className="text-stone-600">
                We are committed to responsible and ethical sourcing of all our precious materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gold Jewellery */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-amber-700 mb-4 animate-fade-in-up">
              Featured Gold Jewellery
            </h2>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto animate-fade-in delay-100">
              Discover our handpicked selection of the finest gold pieces, crafted with unparalleled artistry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGoldProducts.map((product, index) => (
              <div key={product.id} className={`animate-fade-in-up delay-${200 + index * 100}`}>
                <ProductCard {...product} category="gold" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in delay-500">
            <Button
              asChild
              className="px-8 py-3 text-lg bg-amber-700 text-amber-50 hover:bg-amber-800 transition-colors shadow-md"
            >
              <Link href="/gold">View All Gold Jewellery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Silver Jewellery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-amber-700 mb-4 animate-fade-in-up">
              Featured Silver Jewellery
            </h2>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto animate-fade-in delay-100">
              Explore our exquisite silver collection, where modern design meets timeless elegance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSilverProducts.map((product, index) => (
              <div key={product.id} className={`animate-fade-in-up delay-${200 + index * 100}`}>
                <ProductCard {...product} category="silver" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in delay-500">
            <Button
              asChild
              className="px-8 py-3 text-lg bg-amber-700 text-amber-50 hover:bg-amber-800 transition-colors shadow-md"
            >
              <Link href="/silver">View All Silver Jewellery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-amber-700 mb-4 animate-fade-in-up">
              What Our Customers Say
            </h2>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto animate-fade-in delay-100">
              Hear from those who have experienced the Oswal Alankar difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-stone-200 animate-fade-in-up delay-200 hover:shadow-xl transition-shadow duration-300">
              <p className="text-stone-700 italic mb-4">
                &quot;The craftsmanship at Oswal Alankar is simply breathtaking. My gold necklace is a true work of art,
                and the service was impeccable.&quot;
              </p>
              <p className="font-semibold text-amber-700">- Priya Sharma</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-stone-200 animate-fade-in-up delay-300 hover:shadow-xl transition-shadow duration-300">
              <p className="text-stone-700 italic mb-4">
                &quot;I found the perfect silver anklet here. The quality is superb, and it arrived beautifully
                packaged. Highly recommend!&quot;
              </p>
              <p className="font-semibold text-amber-700">- Rohan Mehta</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold text-amber-700">Our Legacy of Craftsmanship</h2>
            <p className="text-lg text-stone-700 leading-relaxed">
              For generations, Oswal Alankar has been synonymous with trust, quality, and unparalleled artistry in the
              world of jewellery. Founded on principles of integrity and passion, we continue to craft pieces that tell
              stories and celebrate moments.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Meet our dedicated owners, Bharat Rupchand Oswal and Nitin Rupchand Oswal, who uphold the family tradition
              of excellence.
            </p>
            <Button
              asChild
              className="px-8 py-3 text-lg bg-amber-700 text-amber-50 hover:bg-amber-800 transition-colors shadow-md"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl border border-stone-200 animate-fade-in delay-200">
            <Image
              src="/gold/IMG-20250802-WA0047(1).jpg"
              alt="Intricate Gold Jewellery Design"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Custom Design CTA */}
      <section className="py-16 md:py-24 bg-amber-700 text-amber-50 text-center">
        <div className="container px-4 md:px-6 space-y-8 animate-fade-in-up">
          <Crown className="h-20 w-20 mx-auto mb-4 animate-bounce-slow" />
          <h2 className="text-5xl font-serif font-bold leading-tight">Dreaming of a Unique Piece?</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Let us bring your vision to life. Our master artisans specialize in creating bespoke jewellery tailored to
            your desires.
          </p>
          <Button
            asChild
            variant="outline"
            className="px-10 py-4 text-xl border-amber-50 text-amber-50 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg bg-transparent"
          >
            <Link href="/contact">Request a Custom Design</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
