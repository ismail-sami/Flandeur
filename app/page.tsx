import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories, products } from '@/lib/data'
import { ProductCard } from '@/components/product-card'

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Luxury floral arrangement"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-background/80">
              Luxury Flowers in Abu Dhabi
            </p>
            <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-background md:text-7xl text-balance">
              Where Elegance Blooms
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-background/90">
              Handcrafted floral arrangements for every special moment.
              Same-day delivery across Abu Dhabi.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-md border border-background/40 bg-transparent px-8 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Browse by Occasion
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Find the Perfect Arrangement
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group relative flex h-72 items-end overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/30 transition-colors group-hover:bg-foreground/40" />
              <div className="relative z-10 p-6">
                <h3 className="font-serif text-2xl font-bold text-background">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-background/80">
                  {category.description.substring(0, 60)}...
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-background underline-offset-4 group-hover:underline">
                  Explore
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Handpicked for You
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Featured Arrangements
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent sm:inline-flex"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Delivery Banner */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12">
          <h2 className="mb-4 font-serif text-3xl font-bold text-balance">
            Same-Day Delivery in Abu Dhabi
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-primary-foreground/80 leading-relaxed">
            Order before 10 PM and receive your flowers within 2-4 hours.
            Next-day delivery available to all other Emirates.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Order Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
