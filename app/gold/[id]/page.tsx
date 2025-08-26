import { goldProducts } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { Separator } from "@/components/ui/separator"
import { Shield, Truck, Gem } from "lucide-react"

export async function generateStaticParams() {
  return goldProducts.map((product) => ({
    id: product.id,
  }))
}

export default function GoldProductPage({ params }: { params: { id: string } }) {
  const product = goldProducts.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = goldProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg border border-stone-200 animate-fade-in">
            <Image
              src={product.imageUrl}
              alt={product.imageAlt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6 animate-fade-in-up delay-100">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-700">{product.name}</h1>
              <p className="text-2xl font-semibold text-stone-800">{product.price}</p>
            </div>

            <Separator />

            <p className="text-lg text-stone-700 leading-relaxed">{product.description}</p>

            <Separator />

            {/* Quality & Delivery Info */}
            <div className="space-y-4 text-stone-700">
              <div className="flex items-center gap-3">
                <Gem className="w-6 h-6 text-amber-600" />
                <span className="font-medium">Pure 22-Carat Gold</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-amber-600" />
                <span className="font-medium">Hallmark Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-amber-600" />
                <span className="font-medium">Free & Insured Shipping</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="flex-1 bg-amber-700 text-amber-50 hover:bg-amber-800 transition-colors shadow-md text-lg">
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1 border-amber-700 text-amber-700 hover:bg-amber-50 hover:text-amber-800 transition-colors shadow-md text-lg bg-transparent">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-stone-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-amber-700 mb-12 animate-fade-in-up">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((relatedProduct, index) => (
              <div key={relatedProduct.id} className={`animate-fade-in-up delay-${100 + index * 100}`}>
                <ProductCard {...relatedProduct} category="gold" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
