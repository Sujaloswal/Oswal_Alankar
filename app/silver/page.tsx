import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import type { Metadata } from "next"
import Image from "next/image"
import { Filter, SortAsc } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export const metadata: Metadata = {
  title: "Silver Jewellery",
  description: "Explore the elegant collection of silver jewellery from Oswal Alankar.",
}

export default function SilverPage() {
  const silverProducts = [
    {
      id: "silver-ring-1",
      name: "Sterling Silver Ring",
      price: "₹ 8,000",
      imageUrl: "/silver/IMG-20250802-WA0028.jpg",
      imageAlt: "Sterling Silver Ring with elegant design",
    },
    {
      id: "silver-pendant-2",
      name: "Delicate Silver Pendant",
      price: "₹ 12,000",
      imageUrl: "/silver/IMG-20250802-WA0028.jpg",
      imageAlt: "Delicate Silver Pendant with intricate details",
    },
    {
      id: "silver-anklet-3",
      name: "Artisan Silver Anklet",
      price: "₹ 5,500",
      imageUrl: "/silver/IMG-20250802-WA0028.jpg",
      imageAlt: "Artisan Silver Anklet with traditional pattern",
    },
    {
      id: "silver-earrings-4",
      name: "Bohemian Silver Earrings",
      price: "₹ 7,000",
      imageUrl: "/silver/IMG-20250802-WA0028.jpg",
      imageAlt: "Bohemian Silver Earrings with unique style",
    },
    {
      id: "silver-bracelet-5",
      name: "Chunky Silver Bracelet",
      price: "₹ 15,000",
      imageUrl: "/silver/IMG-20250802-WA0028.jpg",
      imageAlt: "Chunky Silver Bracelet with modern design",
    },
    {
      id: "silver-chain-6",
      name: "Minimalist Silver Chain",
      price: "₹ 9,500",
      imageUrl: "/silver/IMG-20250802-WA0028.jpg",
      imageAlt: "Minimalist Silver Chain with clean lines",
    },
    {
      id: "silver-toe-ring-7",
      name: "Traditional Toe Ring Set",
      price: "₹ 3,000",
      imageUrl: "/silver/IMG-20250802-WA0028.jpg",
      imageAlt: "Traditional Toe Ring Set with cultural significance",
    },
    {
      id: "silver-kada-8",
      name: "Engraved Silver Kada",
      price: "₹ 18,000",
      imageUrl: "/silver/IMG-20250802-WA0028.jpg",
      imageAlt: "Engraved Silver Kada with detailed work",
    },
  ]

  return (
    <div className="bg-stone-50">
      {/* Hero Section for Silver */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-br from-stone-100 to-white">
        <Image
          src="/silver/IMG-20250802-WA0028.jpg"
          alt="Silver Jewellery Collection Banner"
          fill
          className="absolute inset-0 z-0 opacity-50 animate-fade-in object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-stone-50/70 to-transparent"></div>
        <div className="relative z-10 container px-4 md:px-6 text-center text-stone-900">
          <h1 className="text-5xl md:text-6xl font-serif font-extrabold tracking-tight text-amber-700 drop-shadow-lg animate-fade-in-up">
            The Silver Collection
          </h1>
          <p className="text-xl md:text-2xl text-stone-700 leading-relaxed mt-4 max-w-3xl mx-auto animate-fade-in delay-200">
            Discover the understated elegance of our silver jewellery, perfect for every occasion and style.
          </p>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-16 md:py-24">
        {/* Filter and Sort Section */}
        <div className="flex justify-between items-center mb-8 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-serif font-bold text-stone-800">All Silver Jewellery</h2>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-stone-300 text-stone-700 hover:bg-stone-100 hover:text-amber-700 transition-colors bg-transparent"
                >
                  <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>By Price (Low to High)</DropdownMenuItem>
                <DropdownMenuItem>By Price (High to Low)</DropdownMenuItem>
                <DropdownMenuItem>By Type (Ring, Pendant, etc.)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-stone-300 text-stone-700 hover:bg-stone-100 hover:text-amber-700 transition-colors bg-transparent"
                >
                  <SortAsc className="mr-2 h-4 w-4" /> Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>Newest Arrivals</DropdownMenuItem>
                <DropdownMenuItem>Popular</DropdownMenuItem>
                <DropdownMenuItem>Alphabetical (A-Z)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {silverProducts.map((product, index) => (
            <div key={product.id} className={`animate-fade-in-up delay-${400 + index * 50}`}>
              <ProductCard {...product} category="silver" />
            </div>
          ))}
        </div>

        {/* Call to Action for Custom Silver */}
        <section className="mt-20 bg-amber-700 text-amber-50 p-12 rounded-lg shadow-xl text-center animate-fade-in-up delay-500">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold leading-tight">Craft Your Perfect Silver Piece</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Looking for something truly unique? Our artisans can create a custom silver design that reflects your
              personal style.
            </p>
            <Button
              asChild
              variant="outline"
              className="px-8 py-3 text-lg border-amber-50 text-amber-50 hover:bg-amber-50 hover:text-amber-700 transition-colors shadow-md bg-transparent"
            >
              <Link href="/contact">Inquire About Custom Silver</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
