import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products, getProductById, categories } from '@/lib/data'
import { ProductDetail } from '@/components/product-detail'

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) return { title: 'Product Not Found' }

  return {
    title: `${product.name} - Flandeur`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter(
      (p) =>
        p.id !== product.id &&
        p.category.some((c) => product.category.includes(c))
    )
    .slice(0, 4)

  const productCategories = categories.filter((c) =>
    product.category.includes(c.slug)
  )

  return (
    <ProductDetail
      product={product}
      relatedProducts={relatedProducts}
      productCategories={productCategories}
    />
  )
}
