import type { Metadata } from 'next'
import { Leaf, Heart, Truck, Award } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'About Us - Flandeur',
  description:
    'Learn about Flandeur — Abu Dhabi\'s premier luxury flower shop. Handcrafted arrangements, same-day delivery, and a passion for beauty.',
}

const values = [
  {
    icon: Leaf,
    title: 'Fresh & Natural',
    description:
      'We source the finest blooms from trusted growers around the world, ensuring every arrangement is crafted with the freshest flowers.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description:
      'Each bouquet is designed by our expert florists who pour their creativity and passion into every petal and stem.',
  },
  {
    icon: Truck,
    title: 'Same-Day Delivery',
    description:
      'Order before 10 PM and receive your flowers within 2–4 hours anywhere in Abu Dhabi. Next-day delivery across the UAE.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description:
      'We never compromise on quality. From packaging to presentation, every detail is handled with the utmost care.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-72 items-end overflow-hidden md:h-96">
        <img
          src="/images/hero.jpg"
          alt="Flandeur flower shop"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-background/70">
            Our Story
          </p>
          <h1 className="font-serif text-4xl font-bold text-background md:text-5xl">
            About Flandeur
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Who We Are
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Bringing Elegance to Every Occasion
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Founded in the heart of Abu Dhabi, <strong className="text-foreground">Flandeur</strong> was
                born from a simple belief: flowers have the power to transform moments into lasting memories.
              </p>
              <p>
                Our team of passionate florists combines traditional artistry with modern design to create
                stunning arrangements that speak louder than words. Whether it's a joyful celebration,
                a heartfelt apology, or a gesture of love — we craft the perfect bouquet for every story.
              </p>
              <p>
                From hand-picked roses to exotic orchids, every stem is carefully selected and arranged
                to ensure your gift arrives fresh, vibrant, and beautifully presented.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/romance.jpg"
              alt="Handcrafted floral arrangement"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              What Makes Us Special
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Have Any Questions - Contact Form */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Left Side - Info */}
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Get In Touch
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Have Any Questions?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              We'd love to hear from you. Whether you have a question about our arrangements,
              need help choosing the perfect bouquet, or want to discuss a custom order —
              our team is here to help.
            </p>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="text-lg">📍</span>
                <span>Al Reem Tower, Al Raha Beach, Abu Dhabi, UAE</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <a href="mailto:info@flandeur.ae" className="transition-colors hover:text-primary">
                  info@flandeur.ae
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <a href="tel:+97126666666" className="transition-colors hover:text-primary">
                  +971 2 666 6666
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">🕐</span>
                <span>Sun–Thu: 9 AM – 10 PM · Fri–Sat: 10 AM – 11 PM</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <ContactForm />
        </div>
      </section>
    </>
  )
}
