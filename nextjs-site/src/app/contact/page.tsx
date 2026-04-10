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
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Schedule a Visit',
    description:
      'Schedule a visit at Burien Best Care Home. Meet our team, see our home, and discover if we are right for your family. No pressure, no sales pitch.',
    url: 'https://burienbestcarehome.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Schedule a Visit | Burien Best Care Home',
    description:
      'Schedule a no-pressure visit. Meet our team and see if we are the right fit for your family.',
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
        'We will show you the living spaces, dining areas, bedrooms, and common areas where our residents spend their days. Ask anything. Knock on doors. This is not a show.',
    },
    {
      number: 3,
      title: 'Meet the Team',
      description:
        'You will meet the caregivers who would be supporting your loved one. Ask them hard questions. You will know in minutes if you can trust them with the person you love most.',
    },
    {
      number: 4,
      title: 'An Honest Conversation',
      description:
        'We sit down and talk honestly about your loved one, their needs, and your family. No sales pitch, no pressure. We will tell you if we are the right fit. If we are not, we will help you find somewhere that is.',
    },
    {
      number: 5,
      title: 'Next Steps, Only If You\u2019re Ready',
      description:
        'If this feels right, we can discuss next steps at your pace. If you need time to think, we completely understand. This is the biggest decision you have made in years. We are not rushing you.',
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
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-forest/90 via-forest/75 to-forest/90" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/25" />

        <div className="relative z-10 text-center px-4 sm:px-6 py-24 md:py-32 max-w-4xl">
          <p className="inline-flex items-center gap-3 text-white text-sm sm:text-base font-bold uppercase tracking-[0.15em] mb-6 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/25">
            <span aria-hidden="true" className="inline-block w-8 h-0.5 bg-cream" />
            <span>Start the Conversation</span>
          </p>
          <h1
            id="contact-hero-headline"
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight drop-shadow-lg"
          >
            The First Step Is the&nbsp;<span className="text-cream italic">Hardest</span>.
            <br />
            We&rsquo;ll Make It Easy.
          </h1>
          <p className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto drop-shadow">
            No pressure. No sales pitch. Just an honest conversation about what your parent needs and how we can&nbsp;help.
          </p>
        </div>
      </section>

      {/* Reach Out Section - Rebuilt: no icons, split layout with map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <p className="uppercase tracking-widest text-sm font-semibold text-sage mb-3">Get in Touch</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
                Reach Out However Feels&nbsp;Right
              </h2>
              <p className="text-lg text-forest/75 max-w-2xl mx-auto mt-4">
                Call, email, or drop by for a visit. Whatever feels most comfortable for&nbsp;you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Contact details card */}
            <ScrollReveal delay={0}>
              <GlassCard variant="white" className="p-8 sm:p-10 h-full flex flex-col">
                <div className="space-y-8 flex-grow">
                  {/* Phone */}
                  <div>
                    <p className="uppercase tracking-widest text-xs font-semibold text-sage mb-2">Call Us</p>
                    <a
                      href="tel:+12065550142"
                      className="font-serif text-3xl sm:text-4xl text-forest hover:text-sage transition-colors block leading-tight"
                    >
                      (206) 555-0142
                    </a>
                    <p className="text-sm text-forest/60 mt-1">Mon&ndash;Fri, 9am&ndash;5pm Pacific</p>
                  </div>

                  <div className="h-px bg-sage/20" />

                  {/* Email */}
                  <div>
                    <p className="uppercase tracking-widest text-xs font-semibold text-sage mb-2">Email Us</p>
                    <a
                      href="mailto:info@burienbestcarehome.com"
                      className="font-serif text-2xl sm:text-3xl text-forest hover:text-sage transition-colors block break-all leading-tight"
                    >
                      info@burienbestcarehome.com
                    </a>
                    <p className="text-sm text-forest/60 mt-1">We respond within 24&nbsp;hours</p>
                  </div>

                  <div className="h-px bg-sage/20" />

                  {/* Address + Hours */}
                  <div>
                    <p className="uppercase tracking-widest text-xs font-semibold text-sage mb-2">Visit Us</p>
                    <p className="font-serif text-2xl sm:text-3xl text-forest leading-tight">
                      Burien, WA&nbsp;98148
                    </p>
                    <p className="text-forest/75 mt-2">
                      Care provided 24/7 &middot; Visits welcome anytime
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-sage/20 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+12065550142"
                    className="inline-flex items-center justify-center flex-1 min-h-12 px-6 py-3 bg-sage text-white font-semibold rounded-lg shadow-md hover:bg-forest hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sage/40"
                  >
                    Call Now
                  </a>
                  <a
                    href="mailto:info@burienbestcarehome.com"
                    className="inline-flex items-center justify-center flex-1 min-h-12 px-6 py-3 bg-white text-forest font-semibold rounded-lg border-2 border-forest/20 hover:bg-cream hover:border-sage transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sage/40"
                  >
                    Email Us
                  </a>
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Map card */}
            <ScrollReveal delay={0.1}>
              <GlassCard variant="white" className="p-0 h-full overflow-hidden flex flex-col">
                <div className="relative w-full flex-grow min-h-[320px]">
                  <iframe
                    title="Map of Burien, Washington"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-122.36%2C47.44%2C-122.29%2C47.49&amp;layer=mapnik&amp;marker=47.47%2C-122.33"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-6 sm:p-8 bg-white">
                  <p className="uppercase tracking-widest text-xs font-semibold text-sage mb-1">Located in</p>
                  <p className="font-serif text-2xl text-forest leading-tight mb-3">
                    The Heart of Burien,&nbsp;Washington
                  </p>
                  <p className="text-forest/70 text-sm leading-relaxed">
                    A quiet residential neighborhood, just minutes from downtown Burien and easily accessible from I&ndash;5 and SR&ndash;509. Exact address shared when you schedule a&nbsp;visit.
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Schedule a Visit Form Section */}
      <section id="visit-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-sage-light scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="uppercase tracking-widest text-sm font-semibold text-sage mb-3">Schedule a Visit</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight mb-4">
                Come See Our Home for&nbsp;Yourself
              </h2>
              <p className="text-lg text-forest/75 max-w-2xl mx-auto leading-relaxed">
                Tour the home, meet our team, and see how your parent could live here. We will answer every question honestly, even the hard&nbsp;ones.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlassCard variant="white" className="p-6 sm:p-10">
              <ContactForm />
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Family Guide Section */}
      <section id="family-guide" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="uppercase tracking-widest text-sm font-semibold text-sage mb-3">Not Ready to Visit Yet?</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight mb-6">
              Start With Our Family&nbsp;Guide
            </h2>
            <p className="text-lg sm:text-xl text-forest/75 leading-relaxed mb-10 max-w-2xl mx-auto">
              A free, no-pressure guide walking you through the questions every family asks when choosing senior care. Written by people who&rsquo;ve walked this road with their&nbsp;own.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <a
              href="mailto:info@burienbestcarehome.com?subject=Please%20send%20me%20the%20Family%20Guide&body=Hi%2C%20please%20send%20me%20a%20copy%20of%20your%20Family%20Guide.%20Thanks%21"
              className="inline-flex items-center justify-center min-h-14 px-10 py-4 bg-sage text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-forest hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sage/40"
            >
              Request Our Family Guide
            </a>
            <p className="text-sm text-forest/60 mt-4">
              We&rsquo;ll email it to you. No forms. No sales&nbsp;calls.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sage-light">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="uppercase tracking-widest text-sm font-semibold text-sage mb-3">What to Expect</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest mb-4 leading-tight">
                Here&rsquo;s Exactly What Happens When You&nbsp;Visit
              </h2>
              <p className="text-lg text-forest/75 max-w-2xl mx-auto">
                We know this feels big. Here&rsquo;s what the experience looks like, step by&nbsp;step.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {visitSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <GlassCard variant="white" className="p-6 sm:p-8">
                  <div className="flex items-start gap-5 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-cream border-2 border-sage font-serif text-2xl sm:text-3xl font-normal text-forest shadow-sm">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-grow pt-1">
                      <h3 className="font-serif text-xl sm:text-2xl text-forest mb-2 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-base sm:text-lg text-forest/75 leading-relaxed">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="uppercase tracking-widest text-sm font-semibold text-sage mb-3">More Support</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
                Resources for Families in&nbsp;Transition
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <ScrollReveal delay={0}>
              <GlassCard variant="white" className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span aria-hidden="true" className="inline-block w-10 h-1 bg-sage rounded-full" />
                </div>
                <h3 className="font-serif text-2xl text-forest mb-3 leading-tight">
                  Your Best Season
                </h3>
                <p className="text-forest/75 mb-6 flex-grow leading-relaxed">
                  Information and resources to help you navigate senior care decisions with confidence and&nbsp;clarity.
                </p>
                <a
                  href="https://www.yourbestseason.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-12 px-6 py-3 bg-white text-forest font-semibold rounded-lg border-2 border-forest/20 hover:bg-cream hover:border-sage transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sage/40"
                >
                  Visit Website &rarr;
                </a>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <GlassCard variant="white" className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span aria-hidden="true" className="inline-block w-10 h-1 bg-sage rounded-full" />
                </div>
                <h3 className="font-serif text-2xl text-forest mb-3 leading-tight">
                  Your Next Step Home
                </h3>
                <p className="text-forest/75 mb-6 flex-grow leading-relaxed">
                  A guide to understanding adult family homes and finding the right fit for your loved one&rsquo;s&nbsp;needs.
                </p>
                <a
                  href="https://www.yournextstephome.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-12 px-6 py-3 bg-white text-forest font-semibold rounded-lg border-2 border-forest/20 hover:bg-cream hover:border-sage transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sage/40"
                >
                  Visit Website &rarr;
                </a>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <GlassCard variant="white" className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span aria-hidden="true" className="inline-block w-10 h-1 bg-sage rounded-full" />
                </div>
                <h3 className="font-serif text-2xl text-forest mb-3 leading-tight">
                  Washington State DSHS
                </h3>
                <p className="text-forest/75 mb-6 flex-grow leading-relaxed">
                  State resources and regulations for adult family homes and senior care services in&nbsp;Washington.
                </p>
                <a
                  href="https://dshs.wa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-12 px-6 py-3 bg-white text-forest font-semibold rounded-lg border-2 border-forest/20 hover:bg-cream hover:border-sage transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sage/40"
                >
                  Visit Website &rarr;
                </a>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sage-light">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6 leading-tight">
              Your Family Deserves&nbsp;<span className="text-sage italic">Peace of Mind</span>.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg sm:text-xl text-forest/75 mb-10 leading-relaxed">
              You have been carrying this decision alone long enough. Let us walk this road with&nbsp;you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#visit-form"
                className="inline-flex items-center justify-center min-h-14 px-8 py-4 bg-sage text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-forest hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sage/40"
              >
                Schedule a Visit
              </Link>
              <a
                href="tel:+12065550142"
                className="inline-flex items-center justify-center min-h-14 px-8 py-4 bg-white text-forest text-lg font-semibold rounded-lg border-2 border-forest/20 shadow-md hover:bg-cream hover:border-sage hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sage/40"
              >
                Call (206) 555-0142
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-sm text-forest/60 mt-10">
              Licensed &middot; Bonded &middot; Insured &middot; Verified by Washington State&nbsp;DSHS
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
