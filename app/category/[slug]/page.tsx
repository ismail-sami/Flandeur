import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { categories, getProductsByCategory, getCategoryBySlug } from '@/lib/data'
import { ProductCard } from '@/components/product-card'

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return { title: 'Category Not Found' }

  return {
    title: `${category.name} Flowers - Flandeur`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(slug)

  return (
    <>
      {/* Category Hero */}
      <section className="relative flex h-72 items-end overflow-hidden md:h-96">
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10">
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-background/80 transition-colors hover:text-background"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="font-serif text-4xl font-bold text-background md:text-5xl">
            {category.name}
          </h1>
          <p className="mt-2 max-w-xl text-base text-background/80 leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing{' '}
            <span className="font-medium text-foreground">{products.length}</span>{' '}
            {products.length === 1 ? 'arrangement' : 'arrangements'}
          </p>
          <Link
            href="/shop"
            className="text-sm font-medium text-primary transition-colors hover:text-accent"
          >
            View All Flowers
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card py-20">
            <p className="text-lg font-medium text-foreground">
              No arrangements found
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Check back soon for new additions
            </p>
            <Link
              href="/shop"
              className="mt-4 rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Browse All Flowers
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Other Categories */}
      <section className="border-t border-border bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold text-foreground">
            Explore Other Occasions
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories
              .filter((c) => c.slug !== slug)
              .map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  className="group relative flex h-40 items-end overflow-hidden rounded-lg"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/30 transition-colors group-hover:bg-foreground/40" />
                  <div className="relative z-10 p-4">
                    <h3 className="font-serif text-lg font-bold text-background">
                      {cat.name}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
