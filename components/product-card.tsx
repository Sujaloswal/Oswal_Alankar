import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  id: string
  name: string
  price: string
  imageUrl: string
  imageAlt: string
  category: "gold" | "silver"
}

export function ProductCard({ id, name, price, imageUrl, imageAlt, category }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl border-stone-200 group">
      <Link href={`/${category}/${id}`} className="block relative overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-amber-50 text-sm font-medium">{category.toUpperCase()} COLLECTION</span>
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-stone-800 font-serif mb-2">{name}</h3>
        <p className="text-amber-700 font-semibold text-lg">Starts from {price}</p>
      </CardContent>
    </Card>
  )
}
