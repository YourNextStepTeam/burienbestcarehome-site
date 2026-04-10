import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import GlassCard from '@/components/GlassCard'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | Schedule a Visit',
  description:
    'Schedule a visit at Burien Best Care Home. Meet our team, see our home, and discover if we are right for your family. No pressure, no sales pitch.',
  openGraph: {
    title: 'Contact Us | Schedule a Visit',
    description:
      'Schedule a visit at Burien Best Care Home. Meet our team, see our home, and discover if we are right for your family. No pressure, no sales pitch.',
    url: 'https://burienbestcarehome.com/contact',
    type: 'website',
  },
}

export default function Contact() {
  const visitSteps = [
    {
      number: 1,
      title: 'A Warm Welcome',
      description:
        'You will be greeted by name as you arrive. We want you to feel comfortable and at home from the moment you step through our door. No clipboard. No cold reception. Just genuine welcome.',
    },
    {
      number: 2,
      title: 'A Real Tour',
      description:
        'We will show you the living spaces, dining areas, bedrooms, and common areas where our residents spend their days. See where your loved one would live and spend their time. Ask anything. Knock on doors. This is not a show.',
    },
    {
      number: 3,
      title: 'Meet the Team',
      description:
        'You will meet the caregivers and staff who would be supporting your loved one. Talk to them. Ask them hard questions. Get a feel for the people who make our home special. You will know in minutes if you can trust them with the person you love most.',
    },
    {
      number: 4,
      title: 'An Honest Conversation',
      description:
        'We sit down and talk honestly about your loved one, their needs, preferences, and your family. No sales pitch, no pressure, just real conversation. We will tell you if we think we are the right fit. And if we are not, we will help you find somewhere that is.',
    },
    {
      number: 5,
      title: 'Next Steps, Only If You Are Ready',
      description:
        'If this feels like the right fit, we can discuss next steps at your pace. If you need time to think or discuss with family, we completely understand. This is the biggest decision you have made in years. We are not rushing you.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section
        aria-labelledby="contact-hero-headline"
        className="relative min-h-[70vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&q=80&auto=format&fit=crop"
          alt=""
          role="presentation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-forest/75 via-forest/55 to-forest/80" />
        <div className="relative z-10 text-center px-4 sm:px-6 py-20 md:py-24 max-w-3xl">
          <h1
            id="contact-hero-headline"
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight"
          >
            The First Step Is the Hardest. We'll Make It Easy.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-cream leading-relaxed">
            No pressure. No sales pitch. Just an honest conversation about what your parent needs and how we can help.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-16 text-center">
              Reach Out However Feels Right
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phone */}
            <ScrollReveal delay={0}>
              <GlassCard className="p-8 h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-forest mb-2 text-lg">Phone</h3>
                <a
                  href="tel:2065550142"
                  className="text-sage font-semibold text-lg hover:text-forest transition"
                >
                  (206) 555-0142
                </a>
                <p className="text-sm text-forest mt-2">Mon-Fri 9am-5pm</p>
              </GlassCard>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal delay={0.1}>
              <GlassCard className="p-8 h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-forest mb-2 text-lg">Email</h3>
                <a
                  href="mailto:info@burienbestcarehome.com"
                  className="text-sage font-semibold text-lg hover:text-forest transition break-all"
                >
                  info@burienbestcarehome.com
                </a>
                <p className="text-sm text-forest mt-2">We respond within 24 hours</p>
              </GlassCard>
            </ScrollReveal>

            {/* Address */}
            <ScrollReveal delay={0.2}>
              <GlassCard className="p-8 h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-forest mb-2 text-lg">Address</h3>
                <p className="text-forest text-lg font-semibold">Burien, WA 98148</p>
                <p className="text-sm text-forest mt-2">King County</p>
              </GlassCard>
            </ScrollReveal>

            {/* Hours */}
            <ScrollReveal delay={0.3}>
              <GlassCard className="p-8 h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-forest mb-2 text-lg">Hours</h3>
                <p className="text-sm text-forest">
                  <span className="font-semibold">Office:</span> Mon-Fri 9am-5pm
                </p>
                <p className="text-sm text-forest mt-1">
                  <span className="font-semibold">Care:</span> 24/7
                </p>
                <p className="text-sm text-forest mt-1">
                  <span className="font-semibold">Visits:</span> Welcome anytime
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Schedule a Visit Form Section */}
      <section className="py-20 px-6 bg-sage-light">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6 text-center">
              Schedule a Visit
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-center text-lg text-forest max-w-2xl mx-auto mb-12">
              The best way to know if Burien Best Care Home is right for your family is to walk through our door. Tour the home, meet our team, and see how your parent could live here. We will answer every question honestly, even the hard ones.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-8">
              <p className="text-forest mb-4">
                Not ready for a visit yet?
              </p>
              <Link
                href="/contact"
                className="text-sage font-semibold hover:text-forest transition inline-block"
              >
                Download Our Family Guide to get started
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6 text-center">
              Here's Exactly What Happens When You Visit
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-center text-lg text-forest max-w-2xl mx-auto mb-16">
              We know this feels big. Here is what the experience looks like, step by step, so there are no surprises.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {visitSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard className="p-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sage text-white font-serif text-xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-serif text-2xl text-forest mb-2">
                        {step.title}
                      </h3>
                      <p className="text-lg text-forest leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-6 bg-sage-light">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-16 text-center">
              Resources for Families in Transition
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <GlassCard className="p-8 h-full flex flex-col">
                <h3 className="font-serif text-2xl text-forest mb-4">
                  Your Best Season
                </h3>
                <p className="text-forest mb-6 flex-grow">
                  Information and resources to help you navigate senior care decisions with confidence and clarity.
                </p>
                <a
                  href="https://www.yourbestseason.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage font-semibold hover:text-forest transition"
                >
                  Visit Website
                </a>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <GlassCard className="p-8 h-full flex flex-col">
                <h3 className="font-serif text-2xl text-forest mb-4">
                  Your Next Step Home
                </h3>
                <p className="text-forest mb-6 flex-grow">
                  A guide to understanding adult family homes and finding the right fit for your loved one's needs.
                </p>
                <a
                  href="https://www.yournextstephome.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage font-semibold hover:text-forest transition"
                >
                  Visit Website
                </a>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <GlassCard className="p-8 h-full flex flex-col">
                <h3 className="font-serif text-2xl text-forest mb-4">
                  Washington State DSHS
                </h3>
                <p className="text-forest mb-6 flex-grow">
                  State resources and regulations for adult family homes and senior care services in Washington.
                </p>
                <a
                  href="https://dshs.wa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage font-semibold hover:text-forest transition"
                >
                  Visit Website
                </a>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-8">
              Your Family Deserves Peace of Mind
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg text-forest mb-12">
              You have been carrying this decision alone long enough. Let us walk this road with you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="btn btn-primary px-8 py-4 rounded-full font-semibold text-lg inline-block"
              >
                Schedule a Visit
              </Link>
              <a
                href="tel:2065550142"
                className="btn btn-secondary px-8 py-4 rounded-full font-semibold text-lg inline-block"
              >
                Call Us Today
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-sm text-forest mt-8">
              Licensed + Bonded + Insured. Verified by Washington State DSHS. Open families always welcome.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://burienbestcarehome.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Contact Us',
                item: 'https://burienbestcarehome.com/contact',
              },
            ],
          }),
        }}
      />
    </>
  )
}
