import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/products"

interface ProductCardProps extends Product {}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={300}
        height={300}
        className="w-full h-48 object-cover"
        unoptimized
      />
      <div className="p-4">
        <Badge className="mb-2">{category}</Badge>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">${price.toFixed(2)}</p>
        <div className="flex justify-between items-center">
          <Link href={`/products/${id}`}>
            <Button variant="outline">View Details</Button>
          </Link>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}

