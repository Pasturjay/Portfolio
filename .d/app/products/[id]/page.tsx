"use client"

import { useState } from "react"
import Image from "next/image"
import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useParams } from "next/navigation"
import { products } from "@/lib/products"

export default function ProductDetailPage() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <Layout>
        <div>Product not found</div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div>
          <Badge className="mb-2">{product.category}</Badge>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="mr-4">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
              className="border rounded px-2 py-1 w-16 text-center"
            />
          </div>
          <Button size="lg" onClick={() => alert(`Added ${quantity} ${product.name}(s) to cart`)}>
            Add to Cart
          </Button>
        </div>
      </div>
    </Layout>
  )
}

