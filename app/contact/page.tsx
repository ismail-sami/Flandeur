import type { Metadata } from 'next'
import { MapPin, Mail, Truck, Clock } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us - Flandeur',
  description:
    'Get in touch with Flandeur. Visit us at Al Reem Tower, Al Raha Beach, Abu Dhabi. Same-day flower delivery available.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 text-center text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
            How to Find Us
          </p>
          <h1 className="font-serif text-4xl font-bold md:text-5xl text-balance">
            Get In Touch
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80 leading-relaxed">
            We'd love to hear from you. Reach out for custom orders, inquiries,
            or just to say hello.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Address */}
          <div className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center transition-shadow hover:shadow-lg">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-3 font-serif text-lg font-semibold text-foreground">
              Address
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Al Reem Tower, Al Raha Beach
              <br />
              Abu Dhabi — United Arab Emirates
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center transition-shadow hover:shadow-lg">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-3 font-serif text-lg font-semibold text-foreground">
              Email
            </h3>
            <a
              href="mailto:info@flandeur.ae"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              info@flandeur.ae
            </a>
          </div>

          {/* Delivery */}
          <div className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center transition-shadow hover:shadow-lg sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Truck className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-3 font-serif text-lg font-semibold text-foreground">
              Delivery
            </h3>
            <div className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
              <p>Same Day in Abu Dhabi within 2–4 hours</p>
              <p>Next Day to other Emirates</p>
              <p>
                Orders after 10 PM delivered the following day
                <br />
                from 1 PM to 8 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Our Location
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Visit Our Store
            </h2>
          </div>
          <div className="overflow-hidden rounded-lg border border-border shadow-lg">
            <iframe
              title="Flandeur Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3633.5!2d54.5827!3d24.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDI2JzM0LjEiTiA1NMKwMzQnNTcuOSJF!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Send Us a Message
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Have Any Questions?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Fill out the form below and our team will get back to you as soon as
            possible.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  )
}
