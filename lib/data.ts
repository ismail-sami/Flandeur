export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
  description: string
}

export const categories: Category[] = [
  {
    id: 'birthday',
    name: 'Birthday',
    slug: 'birthday',
    image: '/images/birthday.jpg',
    description:
      'Celebrate their special day with vibrant and joyful birthday flower arrangements that bring smiles and warmth.',
  },
  {
    id: 'wedding',
    name: 'Wedding',
    slug: 'wedding',
    image: '/images/wedding.jpg',
    description:
      'Elegant bridal bouquets and wedding floral arrangements crafted with love for your most precious day.',
  },
  {
    id: 'romance',
    name: 'Romance',
    slug: 'romance',
    image: '/images/romance.jpg',
    description:
      'Express your deepest feelings with luxurious romantic flower arrangements and classic red roses.',
  },
  {
    id: 'sympathy',
    name: 'Sympathy',
    slug: 'sympathy',
    image: '/images/sympathy.jpg',
    description:
      'Send your heartfelt condolences with serene and respectful sympathy flower arrangements.',
  },
  {
    id: 'congratulations',
    name: 'Congratulations',
    slug: 'congratulations',
    image: '/images/congratulations.jpg',
    description:
      'Mark achievements and milestones with bright and cheerful congratulations flower bouquets.',
  },
]

export const products: Product[] = [
  {
    id: 'pink-rose-bouquet',
    name: 'Pink Rose Bouquet',
    price: 350,
    image: '/images/products/pink-rose-bouquet.jpg',
    description:
      'A delicate arrangement of soft pink roses paired with baby\'s breath and eucalyptus. Wrapped beautifully in craft paper with a satin ribbon, this bouquet is perfect for birthdays, anniversaries, or simply brightening someone\'s day.',
    category: ['birthday', 'romance', 'congratulations'],
  },
  {
    id: 'sunflower-delight',
    name: 'Sunflower Delight',
    price: 280,
    image: '/images/products/sunflower-delight.jpg',
    description:
      'Bright and cheerful sunflowers arranged with lush green foliage. This joyful bouquet brings warmth and happiness to any occasion, making it an ideal gift for birthdays and celebrations.',
    category: ['birthday', 'congratulations'],
  },
  {
    id: 'white-lily-elegance',
    name: 'White Lily Elegance',
    price: 420,
    image: '/images/products/white-lily-elegance.jpg',
    description:
      'Pure white lilies arranged with graceful simplicity in a classic style. Their timeless beauty and subtle fragrance make this arrangement suitable for weddings, sympathy, or as a sophisticated gift.',
    category: ['wedding', 'sympathy'],
  },
  {
    id: 'red-rose-classic',
    name: 'Classic Red Roses',
    price: 450,
    image: '/images/products/red-rose-classic.jpg',
    description:
      'A dozen velvety red roses tied with a luxurious ribbon. The ultimate expression of love and passion, this timeless classic is perfect for Valentine\'s Day, anniversaries, or romantic gestures.',
    category: ['romance'],
  },
  {
    id: 'mixed-garden',
    name: 'Mixed Garden Blooms',
    price: 320,
    image: '/images/products/mixed-garden.jpg',
    description:
      'A colorful medley of daisies, tulips, carnations and lush greenery arranged in a rustic wooden box. This vibrant arrangement brings the beauty of a garden indoors and is perfect for any celebration.',
    category: ['birthday', 'congratulations'],
  },
  {
    id: 'purple-orchid',
    name: 'Purple Orchid Luxury',
    price: 550,
    image: '/images/products/purple-orchid.jpg',
    description:
      'A stunning purple phalaenopsis orchid in a modern white ceramic pot. This long-lasting, elegant plant makes an exceptional gift and adds a touch of sophistication to any space.',
    category: ['congratulations', 'romance'],
  },
  {
    id: 'peony-blush',
    name: 'Peony Blush',
    price: 480,
    image: '/images/products/peony-blush.jpg',
    description:
      'Soft pink and cream peonies arranged in a romantic, lush bouquet. Peonies symbolize prosperity and romance, making this arrangement ideal for weddings, anniversaries, and heartfelt gestures.',
    category: ['wedding', 'romance'],
  },
  {
    id: 'spring-tulips',
    name: 'Spring Tulips',
    price: 260,
    image: '/images/products/spring-tulips.jpg',
    description:
      'A fresh and colorful bundle of spring tulips in red, yellow, pink, and purple. These cheerful flowers represent new beginnings and are perfect for birthdays and congratulations.',
    category: ['birthday', 'congratulations'],
  },
  {
    id: 'lavender-dream',
    name: 'Lavender Dream',
    price: 300,
    image: '/images/products/lavender-dream.jpg',
    description:
      'A calming arrangement of dried lavender stems tied with natural twine. The soothing scent and rustic elegance of lavender bring tranquility to any home or office space.',
    category: ['sympathy', 'congratulations'],
  },
  {
    id: 'tropical-paradise',
    name: 'Tropical Paradise',
    price: 520,
    image: '/images/products/tropical-paradise.jpg',
    description:
      'An exotic arrangement featuring bird of paradise, anthurium, protea, and lush tropical leaves. Bold and vibrant, this arrangement makes a statement at any celebration or event.',
    category: ['congratulations', 'birthday'],
  },
  {
    id: 'white-rose-serenity',
    name: 'White Rose Serenity',
    price: 380,
    image: '/images/products/white-rose-serenity.jpg',
    description:
      'Pure white roses arranged with delicate baby\'s breath in a serene, round bouquet. This classic arrangement conveys peace and sympathy, perfect for moments of remembrance.',
    category: ['sympathy', 'wedding'],
  },
  {
    id: 'hydrangea-bloom',
    name: 'Hydrangea Bloom',
    price: 400,
    image: '/images/products/hydrangea-bloom.jpg',
    description:
      'Lush blue and purple hydrangeas arranged in a modern white vase. Hydrangeas symbolize gratitude and heartfelt emotion, making this a meaningful gift for any occasion.',
    category: ['birthday', 'congratulations', 'sympathy'],
  },
]

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category.includes(categorySlug))
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
