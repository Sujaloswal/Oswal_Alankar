import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          width={400}
          height={300}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-amber-50 text-sm font-medium">{category.toUpperCase()} COLLECTION</span>
        </div>
      </Link>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-stone-800 font-serif">{name}</h3>
        <p className="text-stone-600 mt-1 text-sm">{price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-amber-700 text-amber-50 hover:bg-amber-800 transition-colors shadow-md">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}
