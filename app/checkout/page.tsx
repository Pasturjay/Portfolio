"use client"

import { useState } from "react"
import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server or payment processor
    console.log("Form submitted:", formData)
    alert("Thank you for your order!")
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input id="country" name="country" value={formData.country} onChange={handleInputChange} required />
          </div>
        </div>
        <div>
          <Label htmlFor="zipCode">Zip Code</Label>
          <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="expirationDate">Expiration Date</Label>
            <Input
              id="expirationDate"
              name="expirationDate"
              placeholder="MM/YY"
              value={formData.expirationDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" name="cvv" value={formData.cvv} onChange={handleInputChange} required />
          </div>
        </div>
        <Button type="submit" size="lg" className="w-full">
          Place Order
        </Button>
      </form>
    </Layout>
  )
}

