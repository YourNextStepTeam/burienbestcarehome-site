import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import GlassCard from '@/components/GlassCard'
import ContactForm from '@/components/ContactForm'
import ScheduleVisitButton from '@/components/ScheduleVisitButton'

export const metadata: Metadata = {
  title: 'Contact Us | Schedule a Visit',
  description:
    'Schedule a visit at Burien Best Care Home. Meet our team, see our home, and discover if we are right for your family.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Schedule a Visit',
    description:
      'Schedule a visit at Burien Best Care Home. Meet our team, see our home, and discover if we are right for your family.',
    url: 'https://burienbestcarehome.site/contact',
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
      title: 'You Reach Out, We Respond',
      description:
        'You call or email, and we\u2019ll get back to you within 24 hours. We\u2019ll listen to what matters most to your family and find a time that works for you.',
    },
    {
      number: 2,
      title: 'We Schedule Your Visit',
      description:
        'We\u2019ll work around your schedule. No rush, no pressure. You\u2019ll get all the details you need and answers to any questions before you arrive.',
    },
    {
      number: 3,
      title: 'You Tour the Home and Meet Our Team',
      description:
        'You\u2019ll see the living spaces, meet the people who\u2019ll care for your parent, and ask anything you want. We\u2019ll talk you through how we do things here and what a typical day looks like.',
    },
    {
      number: 4,
      title: 'We Talk About What Matters Most',
      description:
        'We\u2019ll sit down and get to know your parent and your family. We\u2019ll listen more than we talk. If we\u2019re the right fit, we\u2019ll be honest about that. If we\u2019re not, we\u2019ll help you find the right place.',
    },
    {
      number: 5,
      title: 'You Decide in Your Own Time',
      description:
        'If everything feels right, we can talk next steps at your pace. Take time to think. Ask us more questions. We understand this is one of the biggest decisions you\u2019ll ever make.',
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
          <p className="text-white/90 text-[11px] sm:text-xs lg:text-sm font-semibold uppercase tracking-[0.18em] mb-6 drop-shadow-sm">
            Start the Conversation
          </p>
          <h1
            id="contact-hero-headline"
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight drop-shadow-lg"
          >
            The First Step Is the&nbsp;<span className="text-sage-light italic">Hardest</span>.
            <br />
            We&rsquo;ll Make It Easy.
          </h1>
          <p className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto drop-shadow">
            Just an honest conversation about what your parent needs and how we can&nbsp;help.
          </p>
        </div>
      </section>

      {/* Reach Out Section - Rebuilt: no icons, split layout with map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <p className="uppercase tracking-widest text-sm font-semibold text-forest mb-3">Get in Touch</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
                Reach Out However Feels&nbsp;Right
              </h2>
              <p className="text-lg text-ink-soft max-w-2xl mx-auto mt-4">
                Call or email to schedule a visit. We look forward to meeting you and your family.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Contact details card */}
            <ScrollReveal delay={0}>
              <GlassCard variant="white" className="p-8 sm:p-10 h-full flex flex-col">
                <div className="space-y-8 flex-grow">
                  {/* Phone - Placeholder */}
                  <div>
                    <p className="uppercase tracking-widest text-xs font-semibold text-[color:var(--color-slate-soft)] mb-2">Call Us</p>
                    <p className="font-serif text-3xl sm:text-4xl text-forest/50 block leading-tight">
                      Phone number coming soon
                    </p>
                    <p className="text-sm text-ink-soft mt-1">Mon&ndash;Fri, 9am&ndash;5pm Pacific</p>
                  </div>

                  <div className="h-px bg-terracotta/20" />

                  {/* Email */}
                  <div>
                    <p className="uppercase tracking-widest text-xs font-semibold text-[color:var(--color-slate-soft)] mb-2">Email Us</p>
                    <a
                      href="mailto:info@burienbestcarehome.site"
                      className="font-serif text-2xl sm:text-3xl text-forest hover:text-[color:var(--color-sunshine-deep)] transition-colors block break-all leading-tight"
                    >
                      info@burienbestcarehome.site
                    </a>
                    <p className="text-sm text-ink-soft mt-1">We respond within 24&nbsp;hours</p>
                  </div>

                  <div className="h-px bg-terracotta/20" />

                  {/* Hours */}
                  <div>
                    <p className="uppercase tracking-widest text-xs font-semibold text-[color:var(--color-slate-soft)] mb-2">Care Hours</p>
                    <p className="font-serif text-2xl sm:text-3xl text-forest leading-tight">
                      24/7 Care
                    </p>
                    <p className="text-ink-soft mt-2">
                      We're here for your family around the clock
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-terracotta/20 flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:info@burienbestcarehome.site"
                    className="inline-flex items-center justify-center flex-1 min-h-12 px-6 py-3 border-2 bg-[color:var(--color-sunshine)] border-[color:var(--color-sunshine)] text-[color:var(--color-ink)] font-semibold rounded-lg hover:bg-[color:var(--color-sunshine-deep)] hover:border-[color:var(--color-sunshine-deep)] transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-terracotta-deep/70"
                  >
                    Email Us
                  </a>
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Address Section */}
            <ScrollReveal delay={0.1}>
              <GlassCard variant="white" className="p-6 sm:p-8 h-full flex flex-col">
                <p className="uppercase tracking-widest text-xs font-semibold text-[color:var(--color-slate-soft)] mb-1">Located in</p>
                <p className="font-serif text-2xl text-forest leading-tight mb-3">
                  Burien, Washington
                </p>
                <p className="text-ink-soft leading-relaxed flex-grow">
                  Address available upon request. We'll share the exact location when you schedule a&nbsp;visit.
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Schedule a Visit Form Section */}
      <section id="visit-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="uppercase tracking-widest text-sm font-semibold text-forest mb-3">Schedule a Visit</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight mb-4">
                Come See Our Home for&nbsp;Yourself
              </h2>
              <p className="text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
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


      {/* What to Expect Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="uppercase tracking-widest text-sm font-semibold text-forest mb-3">What to Expect</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest mb-4 leading-tight">
                Here&rsquo;s Exactly What Happens When You&nbsp;Visit
              </h2>
              <p className="text-lg text-ink-soft max-w-2xl mx-auto">
                We know this feels big. Here&rsquo;s what the experience looks like, step by&nbsp;step.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {visitSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <GlassCard variant="tinted" className="p-6 sm:p-8">
                  <div className="flex items-start gap-5 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-terracotta/20 border-2 border-terracotta/40 font-serif text-2xl sm:text-3xl font-normal text-forest shadow-sm">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-grow pt-1">
                      <h3 className="font-serif text-xl sm:text-2xl text-forest mb-2 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="uppercase tracking-widest text-sm font-semibold text-forest mb-3">More Support</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
                Resources for Families in&nbsp;Transition
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <ScrollReveal delay={0}>
              <GlassCard variant="white" className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span aria-hidden="true" className="inline-block w-10 h-1 bg-[color:var(--color-sunshine)] rounded-full" />
                </div>
                <h3 className="font-serif text-2xl text-forest mb-3 leading-tight">
                  Your Best Season
                </h3>
                <p className="text-ink-soft mb-6 flex-grow leading-relaxed">
                  Information and resources to help you navigate senior care decisions with confidence and&nbsp;clarity.
                </p>
                <a
                  href="https://www.yourbestseason.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-12 px-6 py-3 border-2 bg-[color:var(--color-sunshine)] border-[color:var(--color-sunshine)] text-[color:var(--color-ink)] font-semibold rounded-lg hover:bg-[color:var(--color-sunshine-deep)] hover:border-[color:var(--color-sunshine-deep)] transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-terracotta-deep/40"
                >
                  Visit Website &rarr;
                </a>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <GlassCard variant="white" className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span aria-hidden="true" className="inline-block w-10 h-1 bg-[color:var(--color-sunshine)] rounded-full" />
                </div>
                <h3 className="font-serif text-2xl text-forest mb-3 leading-tight">
                  Your Next Step Home
                </h3>
                <p className="text-ink-soft mb-6 flex-grow leading-relaxed">
                  A guide to understanding adult family homes and finding the right fit for your loved one&rsquo;s&nbsp;needs.
                </p>
                <a
                  href="https://www.yournextstephome.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-12 px-6 py-3 border-2 bg-[color:var(--color-sunshine)] border-[color:var(--color-sunshine)] text-[color:var(--color-ink)] font-semibold rounded-lg hover:bg-[color:var(--color-sunshine-deep)] hover:border-[color:var(--color-sunshine-deep)] transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-terracotta-deep/40"
                >
                  Visit Website &rarr;
                </a>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <GlassCard variant="white" className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span aria-hidden="true" className="inline-block w-10 h-1 bg-[color:var(--color-sunshine)] rounded-full" />
                </div>
                <h3 className="font-serif text-2xl text-forest mb-3 leading-tight">
                  Washington State DSHS
                </h3>
                <p className="text-ink-soft mb-6 flex-grow leading-relaxed">
                  State resources and regulations for adult family homes and senior care services in&nbsp;Washington.
                </p>
                <a
                  href="https://dshs.wa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-12 px-6 py-3 border-2 bg-[color:var(--color-sunshine)] border-[color:var(--color-sunshine)] text-[color:var(--color-ink)] font-semibold rounded-lg hover:bg-[color:var(--color-sunshine-deep)] hover:border-[color:var(--color-sunshine-deep)] transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-terracotta-deep/40"
                >
                  Visit Website &rarr;
                </a>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6 leading-tight">
              Your Family Deserves&nbsp;<span className="text-[color:var(--color-sunshine-deep)] italic font-semibold">Peace of Mind</span>.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg sm:text-xl text-ink-soft mb-10 leading-relaxed">
              You have been carrying this decision alone long enough. Let us walk this road with&nbsp;you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex justify-center">
              <ScheduleVisitButton surface="on-white" href="#visit-form" />
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
                item: 'https://burienbestcarehome.site',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Contact Us',
                item: 'https://burienbestcarehome.site/contact',
              },
            ],
          }),
        }}
      />
    </>
  )
}
