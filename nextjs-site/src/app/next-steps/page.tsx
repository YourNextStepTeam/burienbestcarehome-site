import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import ScheduleVisitButton from '@/components/ScheduleVisitButton'
import FAQAccordion from '@/components/FAQAccordion'
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: 'Next Steps | Burien Best Care Home',
  description:
    'What to expect after you decide Burien Best Care Home is the right fit. A clear, unhurried path from first visit to move-in, with pricing transparency, care plan timeline, and FAQs.',
  alternates: {
    canonical: '/next-steps',
  },
  openGraph: {
    title: 'Next Steps | Burien Best Care Home',
    description:
      'What to expect after you decide Burien Best Care Home is the right fit for your family.',
    url: 'https://burienbestcarehome.site/next-steps',
    type: 'website',
  },
}

const steps = [
  {
    n: '01',
    title: 'Tour the home & meet the team',
    body:
      'Walk through the house. Meet Becca and the caregivers. Sit in the living room. Look at the garden. Ask every question on your list and the ones you haven’t thought of yet. There is no sales pitch. If it isn’t the right fit, we’ll say so and help you figure out what is.',
    duration: '60–90 min',
  },
  {
    n: '02',
    title: 'Build the care plan together',
    body:
      'We sit down with you and your parent to map out the details: medications, meals, daily rhythm, mobility needs, sleep schedule, the foods they love, the music they hate. We write a plan that fits their life, not a template that fits ours.',
    duration: '1 conversation, ongoing adjustments',
  },
  {
    n: '03',
    title: 'Prepare for move-in',
    body:
      'We help you think through what to bring, how to talk to your parent about the transition, and what the first week looks like. We’ll coordinate with their current doctor, pharmacy, and any case managers. We handle the logistics so you can focus on your family.',
    duration: '1–2 weeks of prep',
  },
  {
    n: '04',
    title: 'Settle in and stay connected',
    body:
      'The first days matter. We go slow, introduce routines gently, and check in with you often. You’re welcome any time — for Sunday dinner, birthdays, or just because. Your parent is home. You’re still their family.',
    duration: 'Lifetime of care',
  },
]

const faqs = [
  {
    question: 'How much does it cost?',
    answer:
      'Monthly care at Burien Best Care Home ranges from roughly $6,500 to $9,500, depending on the level of care your parent needs. Memory care and full-mobility assistance sit at the higher end; lighter daily-living support sits at the lower end. We quote every family a specific number after the care plan conversation — no hidden fees, no surprise add-ons, and no pressure to commit on the spot.',
  },
  {
    question: 'Does Medicaid or long-term care insurance cover this?',
    answer:
      'We accept private pay, long-term care insurance, and some VA benefits. We are not a Medicaid-contracted facility today, though we can connect you with local adult family homes that are if that’s the right path for your family. If you have LTC insurance, we’ll help you work through the claim process with your carrier.',
  },
  {
    question: 'How fast can my parent move in?',
    answer:
      'When we have an open room, the timeline from first visit to move-in is usually 1–3 weeks — long enough to build a real care plan, coordinate medical records, and give your parent time to say goodbye to their current home without rushing them. If you’re in a hospital-discharge situation, we can often accelerate that to a matter of days.',
  },
  {
    question: 'What if my parent’s needs change over time?',
    answer:
      'That’s what an adult family home is built for. We adjust the care plan as your parent’s needs evolve — more help with bathing one month, a new medication the next, hospice support if and when that day comes. You won’t be forced to move them to a different facility when things change.',
  },
  {
    question: 'Can family visit anytime?',
    answer:
      'Yes. This is their home now, which makes it an extension of yours. Come for lunch, bring the grandkids, show up on a Tuesday afternoon. We don’t keep visiting hours. We keep a home.',
  },
  {
    question: 'What happens if it isn’t the right fit?',
    answer:
      'Sometimes a family visits and it’s clear — for them or for us — that another setting would serve their parent better. We’ll tell you honestly, and we’ll help you find the right home. No one benefits from forcing a fit that isn’t there.',
  },
]

export default function NextSteps() {
  return (
    <>
      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://burienbestcarehome.site' },
              { '@type': 'ListItem', position: 2, name: 'Next Steps', item: 'https://burienbestcarehome.site/next-steps' },
            ],
          }),
        }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section
        aria-labelledby="next-steps-hero-headline"
        className="relative min-h-[60vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop"
          alt=""
          role="presentation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-forest/85 via-forest/70 to-forest/85" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/25" />

        <div className="relative z-10 text-center px-4 sm:px-6 py-24 md:py-32 max-w-4xl">
          <p className="text-white/90 text-[11px] sm:text-xs lg:text-sm font-semibold uppercase tracking-[0.18em] mb-6 drop-shadow-sm">
            What Happens Next
          </p>
          <h1
            id="next-steps-hero-headline"
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight drop-shadow-lg"
          >
            A clear path,&nbsp;<span className="text-sunshine italic">at your pace</span>.
          </h1>
          <p className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto drop-shadow">
            Once a visit feels right, this is what working together looks like. No rush, no surprises, and no pressure to decide before you&rsquo;re ready.
          </p>
        </div>
      </section>

      {/* The Path Forward — 4 steps */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <p className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-sunshine-deep mb-3">
                The Path Forward
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-ink leading-tight">
                From first visit to &ldquo;they&rsquo;re home.&rdquo;
              </h2>
              <p className="mt-5 text-base md:text-lg text-ink-soft max-w-2xl mx-auto">
                Four steps. No rushed deposits, no high-pressure sales. Just a real process that respects your parent and your family.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6 md:space-y-8">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 0.1}>
                <GlassCard variant="solid" className="p-6 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                    <div className="md:w-32 shrink-0 mb-4 md:mb-0">
                      <div className="font-serif text-4xl md:text-5xl text-sunshine-deep leading-none">{s.n}</div>
                      <div className="mt-2 text-xs uppercase tracking-widest text-ink-soft">{s.duration}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl md:text-3xl text-ink mb-3">{s.title}</h3>
                      <p className="text-base md:text-lg text-ink-soft leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing transparency */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-sunshine-deep mb-3">
              About Cost
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-6">
              We&rsquo;ll tell you the number before you ask twice.
            </h2>
            <p className="text-base md:text-lg text-ink-soft leading-relaxed mb-4">
              Monthly care typically runs <span className="text-ink font-semibold">$6,500 to $9,500</span>, depending on the level of support your parent needs. Memory care and full-mobility assistance sit at the higher end. Lighter daily-living support sits at the lower end.
            </p>
            <p className="text-base md:text-lg text-ink-soft leading-relaxed mb-10">
              We quote every family a specific number after the care plan conversation. No hidden fees. No surprise add-ons. No pressure to commit on the spot.
            </p>
            <ScheduleVisitButton surface="on-white" />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-sunshine-deep mb-3">
                Families Ask
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
                The questions we hear most.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <FAQAccordion items={faqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <GlassCard variant="solid" className="p-8 md:p-14 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-5">
              Start with a visit. <span className="text-sunshine-deep italic">That&rsquo;s it.</span>
            </h2>
            <p className="text-base md:text-lg text-ink-soft leading-relaxed mb-8 max-w-xl mx-auto">
              There&rsquo;s no form to fill out first, no checklist to complete, no commitment implied. Just a tour, a conversation, and a chance to see if we&rsquo;re the right home for your parent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ScheduleVisitButton surface="on-white" />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-ink font-semibold underline decoration-sunshine decoration-2 underline-offset-4 hover:decoration-sunshine-deep transition-colors"
              >
                Or send us a message &rarr;
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  )
}
