import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CartProvider } from '@/lib/cart-context'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Flandeur - Luxury Flowers Abu Dhabi',
  description:
    'Flandeur is a premium flower shop in Abu Dhabi offering luxury floral arrangements for birthdays, weddings, and every special occasion. Same-day delivery available.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
