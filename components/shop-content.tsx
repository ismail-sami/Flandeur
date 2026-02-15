'use client'

import { useState, useMemo } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import type { Product, Category } from '@/lib/data'
import { ProductCard } from '@/components/product-card'

interface ShopContentProps {
  products: Product[]
  categories: Category[]
}

export function ShopContent({ products, categories }: ShopContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
  const [sortBy, setSortBy] = useState<string>('default')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let filtered = products

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category.includes(selectedCategory))
    }

    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    if (sortBy === 'price-asc') {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name))
    }

    return filtered
  }, [products, selectedCategory, priceRange, sortBy])

  const hasActiveFilters = selectedCategory !== 'all' || priceRange[0] > 0 || priceRange[1] < 1000

  const clearFilters = () => {
    setSelectedCategory('all')
    setPriceRange([0, 1000])
    setSortBy('default')
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {hasActiveFilters && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] text-accent-foreground">
              !
            </span>
          )}
        </button>

        {/* Sidebar Filters */}
        <aside
          className={`shrink-0 lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}
        >
          <div className="sticky top-24 flex flex-col gap-8 rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Filters
              </h3>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-xs text-accent hover:underline"
                >
                  Clear All
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Category
              </h4>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-secondary'
                  }`}
                >
                  All Flowers
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`rounded-md px-3 py-2 text-left text-sm transition-colors ${
                      selectedCategory === cat.slug
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Price Range (AED)
              </h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="min-price" className="text-xs text-muted-foreground">Min</label>
                    <input
                      id="min-price"
                      type="number"
                      min={0}
                      max={priceRange[1]}
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([Number(e.target.value), priceRange[1]])
                      }
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
                    />
                  </div>
                  <span className="mt-5 text-muted-foreground">-</span>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="max-price" className="text-xs text-muted-foreground">Max</label>
                    <input
                      id="max-price"
                      type="number"
                      min={priceRange[0]}
                      max={1000}
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sort */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Sort By
              </h4>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
                aria-label="Sort products"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing{' '}
              <span className="font-medium text-foreground">
                {filteredProducts.length}
              </span>{' '}
              {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card py-20">
              <p className="text-lg font-medium text-foreground">
                No products found
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your filters
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
