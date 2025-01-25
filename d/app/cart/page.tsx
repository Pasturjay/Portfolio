"use client"

import { useState } from "react"
import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"

const initialCartItems = [
  { id: "1", quantity: 2 },
  { id: "2", quantity: 1 },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const cartItemsWithDetails = cartItems.map((item) => {
    const product = products.find((p) => p.id === item.id)
    return { ...item, ...product }
  })

  const total = cartItemsWithDetails.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0)

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItemsWithDetails.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name || ""}
                    width={100}
                    height={100}
                    className="mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price?.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                    className="border rounded px-2 py-1 w-16 text-center mr-4"
                  />
                  <Button variant="destructive" onClick={() => removeItem(item.id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <div className="mt-4">
              <Link href="/checkout">
                <Button size="lg">Proceed to Checkout</Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </Layout>
  )
}

