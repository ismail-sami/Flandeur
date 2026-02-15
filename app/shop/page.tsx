import { products, categories } from '@/lib/data'
import { ShopContent } from '@/components/shop-content'

export const metadata = {
  title: 'Shop - Flandeur',
  description: 'Browse our luxury floral arrangements. Filter by occasion and price.',
}

export default function ShopPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary py-16 text-center text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
            Our Collection
          </p>
          <h1 className="font-serif text-4xl font-bold md:text-5xl text-balance">
            Shop All Flowers
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80 leading-relaxed">
            Discover our curated selection of luxury floral arrangements,
            handcrafted for every occasion.
          </p>
        </div>
      </section>

      <ShopContent products={products} categories={categories} />
    </>
  )
}
