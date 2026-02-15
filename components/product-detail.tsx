'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Minus, Plus, ShoppingBag } from 'lucide-react'
import type { Product, Category } from '@/lib/data'
import { ProductCard } from '@/components/product-card'
import { useCart } from '@/lib/cart-context'

interface ProductDetailProps {
  product: Product
  relatedProducts: Product[]
  productCategories: Category[]
}

export function ProductDetail({ product, relatedProducts, productCategories }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setQuantity(1)
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Detail */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          {/* Product Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            {/* Categories */}
            <div className="mb-3 flex flex-wrap gap-2">
              {productCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              {product.name}
            </h1>

            <p className="mt-2 text-2xl font-bold text-accent">
              AED {product.price}
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-medium text-foreground">
                Quantity
              </span>
              <div className="flex items-center rounded-md border border-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex h-10 w-12 items-center justify-center border-x border-border text-sm font-medium text-foreground">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:w-auto"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart — AED {(product.price * quantity).toLocaleString()}
            </button>

            {/* Delivery Info */}
            <div className="mt-8 rounded-lg border border-border bg-secondary/50 p-4">
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <p>🚚 Same-day delivery in Abu Dhabi (order before 10 PM)</p>
                <p>📦 Next-day delivery to all other Emirates</p>
                <p>🌸 Freshness guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-border bg-secondary/30 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
              You May Also Like
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
