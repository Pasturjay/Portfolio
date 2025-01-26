import Layout from "@/components/layout"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { products } from "@/lib/products"

const featuredProducts = products.slice(0, 3)

export default function Home() {
  return (
    <Layout>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to PalStore</h1>
        <p className="text-xl text-gray-600 mb-8">Discover amazing products at great prices</p>
        <Link href="/products">
          <Button size="lg">Shop Now</Button>
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

