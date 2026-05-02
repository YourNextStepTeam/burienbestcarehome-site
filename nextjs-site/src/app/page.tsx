import Script from 'next/script'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import ScrollReveal from '@/components/ScrollReveal'
import ScheduleVisitButton from '@/components/ScheduleVisitButton'
import GlassCard from '@/components/GlassCard'
import FAQAccordion from '@/components/FAQAccordion'
import OpenHouseForm from '@/components/OpenHouseForm'
import TestimonialMarquee from '@/components/TestimonialMarquee'

export default function Home() {
  // FAQ Items - 10 core family questions
  const faqItems = [
    {
      question: 'What if my parent hates it here?',
      answer:
        'We understand this is a real concern. That\'s why we have a detailed transition plan for every new resident. The first week includes gradual introduction to our home, routines, and team. We provide daily updates to families and work closely with your loved one to ensure a comfortable adjustment. We\'ve found that when families stay involved and visit regularly, the transition is smoother. Your loved one will have time to adjust, and we\'re with them every step of the way.',
    },
    {
      question: 'What is an adult family home and how is it different from assisted living?',
      answer:
        'An adult family home is a small, intimate residential setting licensed to care for up to eight individuals. Unlike larger assisted living facilities that can house hundreds of residents, our adult family home provides a true home-like environment with personalized, individualized care. Our residents are family, not room numbers, and benefit from the warmth, attention, and genuine connection that only a true home can provide.',
    },
    {
      question: 'How much does this cost? Can we afford it?',
      answer:
        'Care costs vary based on the level of care required. Our rates are competitive with other facilities in the area. Many families use long-term care insurance, VA benefits, Medicaid COPES program, or private pay to cover costs. We work with families to understand their financial situation and explore all available options. We\'re committed to helping you find a solution that works for your budget. Schedule a consultation to discuss pricing and payment options specific to your situation.',
    },
    {
      question: 'What happens if their needs change over time?',
      answer:
        'Care needs often evolve, and we\'re prepared for that. We conduct regular assessments with families to ensure our care plans stay aligned with your loved one\'s current needs. If needs change significantly, we work with you and their medical team to adjust care or discuss alternative options. Our goal is always to provide the right level of care at the right time.',
    },
    {
      question: 'Will they get enough attention with other residents?',
      answer:
        'This is one of the biggest differences between Burien Best Care Home and larger facilities. We care for a maximum of eight residents. That means your parent isn\'t competing for staff attention with dozens of others. Our small size allows for genuine relationships and individualized care that simply isn\'t possible in larger settings.',
    },
    {
      question: 'Can we visit anytime?',
      answer:
        'Absolutely. Family visits are always welcome at Burien Best Care Home. We encourage family involvement in your loved one\'s care and daily activities. Visit whenever works best for your schedule. Early morning, afternoon, evening, weekends - you\'re always welcome. Your presence matters, and we love seeing families connected and engaged.',
    },
    {
      question: 'What types of care do you provide?',
      answer:
        'We provide comprehensive care including memory care for seniors with dementia or Alzheimer\'s, daily living assistance with bathing, dressing, grooming, and personal hygiene, respite care for family caregivers who need short-term relief, and post-hospital recovery support. Each resident receives a personalized care plan tailored to their unique needs, preferences, and goals.',
    },
    {
      question: 'What if there\'s an emergency?',
      answer:
        'Safety is our top priority. Our team is trained in emergency response and has 24/7 access to medical protocols and emergency services. We work closely with local hospitals and coordinate care with your loved one\'s medical providers. Families are notified immediately of any health concerns. You can rest assured your parent is always monitored and supported.',
    },
    {
      question: 'What happens during the first week?',
      answer:
        'We have a detailed transition plan for every new resident. Day one focuses on getting comfortable with the space and meeting the team. Days 2-3 introduce routines and activities. Days 4-7 deepen connections and adjustment. We provide daily updates to family members and work closely with your loved one to ensure a supported adjustment period. We understand that moving to a new home is significant, and we treat it with care and attention.',
    },
    {
      question: 'Is Burien Best Care Home licensed?',
      answer:
        'Yes, Burien Best Care Home is licensed by the Washington State Department of Social and Health Services (DSHS). We are bonded and insured, meeting all state requirements for adult family homes. You can verify our license and check our compliance record with DSHS. We maintain the highest standards of care and regulatory compliance.',
    },
  ]

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['LocalBusiness', 'AssistedLivingFacility'],
            name: 'Burien Best Care Home',
            image: 'https://burienbestcarehome.site/og-image.png',
            description:
              'Compassionate adult family home providing memory care, daily living assistance, respite care, and post-hospital recovery for seniors in Burien, Kent, Renton, Tukwila, SeaTac, and across King County, Washington.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Burien',
              addressLocality: 'Burien',
              addressRegion: 'WA',
              postalCode: '98148',
              addressCountry: 'US',
            },
            telephone: '(206) 555-0142',
            email: 'info@burienbestcarehome.site',
            url: 'https://burienbestcarehome.site',
            priceRange: '$$',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '47.4954',
              longitude: '-122.3307',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              ratingCount: '12',
            },
            knowsAbout: [
              'Memory Care',
              'Daily Living Assistance',
              'Respite Care',
              'Post-Hospital Recovery',
              'Adult Family Home',
            ],
            areaServed: [
              { '@type': 'City', name: 'Burien' },
              { '@type': 'City', name: 'Kent' },
              { '@type': 'City', name: 'Renton' },
              { '@type': 'City', name: 'Tukwila' },
              { '@type': 'City', name: 'SeaTac' },
              { '@type': 'City', name: 'Des Moines' },
              { '@type': 'City', name: 'Normandy Park' },
              { '@type': 'City', name: 'White Center' },
              { '@type': 'AdministrativeArea', name: 'King County, Washington' },
            ],
            founder: {
              '@type': 'Person',
              name: 'Becca Pitts',
            },
          }),
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <Script
        id="breadcrumb-schema"
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
                item: 'https://burienbestcarehome.site/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Our Home',
                item: 'https://burienbestcarehome.site/#our-home',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Services',
                item: 'https://burienbestcarehome.site/services',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Our Team',
                item: 'https://burienbestcarehome.site/#our-team',
              },
            ],
          }),
        }}
      />

      {/* Main Content */}
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* The Problem Section (StoryBrand: Character + Problem) — floats on gradient */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="glass-panel p-8 sm:p-12 lg:p-16 space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest leading-[1.15]">
                  You&rsquo;ve noticed the changes.
                  <br />
                  And you <span className="italic text-[color:var(--color-slate)] underline decoration-2 underline-offset-4 decoration-[color:var(--color-sunshine-deep)]">can&rsquo;t unsee</span> them.
                </h2>

                <p className="text-ink-soft text-lg leading-relaxed">
                  A missed medication. A fall they didn&rsquo;t tell you about. Meals skipped because cooking feels overwhelming now.
                  You notice your parent moving slower, forgetting more, struggling with things they used to do without thinking.
                  And the guilt hits hard.
                </p>

                <p className="text-ink-soft text-lg leading-relaxed">
                  You wish you could be there more. You worry about them being alone.
                  You lie awake at night wondering if they&rsquo;re safe.
                </p>

                <p className="text-ink-soft text-lg leading-relaxed">
                  Then there&rsquo;s the bigger thought: the idea of placing them somewhere else. It feels like giving up.
                  Like admitting you can&rsquo;t handle this alone. Like you&rsquo;re abandoning them when they need you most.
                </p>

                <p className="font-serif text-xl sm:text-2xl text-forest font-normal">
                  But here&rsquo;s the truth: this isn&rsquo;t giving up, it&rsquo;s <span className="text-[color:var(--color-sunshine-deep)] italic font-semibold">stepping&nbsp;up</span>.
                </p>

                <p className="text-ink-soft text-lg leading-relaxed">
                  At Burien Best Care Home, we help families like yours find a solution that honors your parent&rsquo;s dignity
                  and gives you peace of mind. You don&rsquo;t have to choose between loving them and getting them the right care.
                  You can do both.
                </p>

                <div className="flex pt-6">
                  <ScheduleVisitButton surface="on-white" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Your Simple Plan Section (StoryBrand: Plan) — WARM STONE */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest">
                Three Steps to Peace of Mind
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {/* Step 1 */}
              <ScrollReveal delay={0}>
                <GlassCard variant="solid" className="h-full p-8 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <span aria-hidden="true" className="font-serif text-5xl leading-none text-sage">1</span>
                    <h3 className="font-serif text-2xl font-normal text-forest leading-tight">
                      Schedule a Visit
                    </h3>
                  </div>
                  <p className="text-ink-soft leading-relaxed flex-grow">
                    Walk through our home and meet our team. We&rsquo;ll show you what daily life looks like,
                    introduce you to the people who live and work here, and talk through cost, care, and what
                    to&nbsp;expect.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Step 2 */}
              <ScrollReveal delay={0.1}>
                <GlassCard variant="solid" className="h-full p-8 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <span aria-hidden="true" className="font-serif text-5xl leading-none text-sage">2</span>
                    <h3 className="font-serif text-2xl font-normal text-forest leading-tight">
                      Build a Care Plan
                    </h3>
                  </div>
                  <p className="text-ink-soft leading-relaxed flex-grow">
                    We&rsquo;ll create a personalized plan around your parent&rsquo;s needs, preferences, and daily rhythms.
                    What time do they wake up? What foods do they love? Do they prefer quiet mornings or social activity?
                    We listen and build care that fits&nbsp;them.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Step 3 */}
              <ScrollReveal delay={0.2}>
                <GlassCard variant="solid" className="h-full p-8 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <span aria-hidden="true" className="font-serif text-5xl leading-none text-sage">3</span>
                    <h3 className="font-serif text-2xl font-normal text-forest leading-tight">
                      Watch Them Settle&nbsp;In
                    </h3>
                  </div>
                  <p className="text-ink-soft leading-relaxed flex-grow">
                    Your parent settles into a home where they&rsquo;re known by name and cared for around the clock.
                    You can take a&nbsp;breath.
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>

            <div className="flex justify-center">
              <ScheduleVisitButton surface="on-white" />
            </div>
          </div>
        </section>

        {/* What Your Parent Gets Section (Hormozi Value Stack: Outcomes) — WHITE with terracotta cards */}
        <section id="our-home" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest leading-tight">
                What Life Looks Like for Your Loved&nbsp;One
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Outcome 1 */}
              <ScrollReveal delay={0}>
                <GlassCard variant="tinted" className="h-full p-8 flex flex-col">
                  <div aria-hidden="true" className="w-12 h-1 bg-[color:var(--color-sunshine)] rounded-full mb-5" />
                  <h3 className="font-serif text-2xl font-normal text-forest mb-3 leading-tight">
                    A Real Home
                  </h3>
                  <p className="text-ink-soft leading-relaxed">
                    Only eight residents. Your parent is known by name and treated like family. They&rsquo;re part
                    of a genuine&nbsp;home.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Outcome 2 */}
              <ScrollReveal delay={0.1}>
                <GlassCard variant="tinted" className="h-full p-8 flex flex-col">
                  <div aria-hidden="true" className="w-12 h-1 bg-[color:var(--color-sunshine)] rounded-full mb-5" />
                  <h3 className="font-serif text-2xl font-normal text-forest mb-3 leading-tight">
                    Organized Activities
                  </h3>
                  <p className="text-ink-soft leading-relaxed">
                    Garden planters in spring. Park outings when the weather cooperates. Local music students
                    who play piano and violin. The day has rhythm and small&nbsp;joys.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Outcome 3 */}
              <ScrollReveal delay={0.2}>
                <GlassCard variant="tinted" className="h-full p-8 flex flex-col">
                  <div aria-hidden="true" className="w-12 h-1 bg-[color:var(--color-sunshine)] rounded-full mb-5" />
                  <h3 className="font-serif text-2xl font-normal text-forest mb-3 leading-tight">
                    Meals They Enjoy
                  </h3>
                  <p className="text-ink-soft leading-relaxed">
                    Three home-cooked meals plus snacks, tailored to their preferences. We pay close attention
                    to nutrition, every&nbsp;day.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Outcome 4 */}
              <ScrollReveal delay={0.3}>
                <GlassCard variant="tinted" className="h-full p-8 flex flex-col">
                  <div aria-hidden="true" className="w-12 h-1 bg-[color:var(--color-sunshine)] rounded-full mb-5" />
                  <h3 className="font-serif text-2xl font-normal text-forest mb-3 leading-tight">
                    24/7 Attentive&nbsp;Care
                  </h3>
                  <p className="text-ink-soft leading-relaxed">
                    Trained caregivers on-site, around the clock. Someone is always there if something
                    feels&nbsp;off.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Outcome 5 */}
              <ScrollReveal delay={0.4}>
                <GlassCard variant="tinted" className="h-full p-8 flex flex-col">
                  <div aria-hidden="true" className="w-12 h-1 bg-[color:var(--color-sunshine)] rounded-full mb-5" />
                  <h3 className="font-serif text-2xl font-normal text-forest mb-3 leading-tight">
                    Purpose and&nbsp;Joy
                  </h3>
                  <p className="text-ink-soft leading-relaxed">
                    Art, music, gentle exercise, social connection. Days with moments that&nbsp;matter.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Outcome 6 */}
              <ScrollReveal delay={0.5}>
                <GlassCard variant="tinted" className="h-full p-8 flex flex-col">
                  <div aria-hidden="true" className="w-12 h-1 bg-[color:var(--color-sunshine)] rounded-full mb-5" />
                  <h3 className="font-serif text-2xl font-normal text-forest mb-3 leading-tight">
                    Family Welcome Throughout the&nbsp;Day
                  </h3>
                  <p className="text-ink-soft leading-relaxed">
                    Bring the grandkids. Share moments. Stay involved in their care. Daytime visits welcome.
                    Just check in when you&nbsp;arrive.
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Care That Meets Your Family Section (Outcome-Focused Services) — TERRACOTTA */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest leading-tight">
                Care Shaped Around Your Family
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Memory Care */}
              <ScrollReveal delay={0}>
                <GlassCard variant="solid" className="h-full p-8 flex flex-col">
                  <div aria-hidden="true" className="w-12 h-1 bg-[color:var(--color-sunshine)] rounded-full mb-5" />
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-forest mb-4 leading-tight">
                    Memory Care
                  </h3>
                  <p className="text-ink-soft leading-relaxed flex-grow mb-6">
                    Your parent with dementia deserves more than management. They deserve moments of connection,
                    comfort, and calm. We create a structured environment where confusion decreases and they feel
                    safe, valued, and genuinely cared for.
                  </p>
                  <Link
                    href="/services#memory-care"
                    className="inline-flex items-center text-forest hover:text-[color:var(--color-sunshine-deep)] font-semibold underline underline-offset-4 decoration-2 decoration-[color:var(--color-sunshine)]/60 hover:decoration-[color:var(--color-sunshine-deep)] transition-colors"
                  >
                    Learn More <span aria-hidden="true" className="ml-2">&rarr;</span>
                  </Link>
                </GlassCard>
              </ScrollReveal>

              {/* Daily Living Assistance */}
              <ScrollReveal delay={0.1}>
                <GlassCard variant="solid" className="h-full p-8 flex flex-col">
                  <div aria-hidden="true" className="w-12 h-1 bg-[color:var(--color-sunshine)] rounded-full mb-5" />
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-forest mb-4 leading-tight">
                    Daily Living Assistance
                  </h3>
                  <p className="text-ink-soft leading-relaxed flex-grow mb-6">
                    When everyday tasks become harder, we step in with dignity-first support so your parent can
                    focus on living. Never done-to, always cared-for. Never dependent, always&nbsp;supported.
                  </p>
                  <Link
                    href="/services#daily-living"
                    className="inline-flex items-center text-forest hover:text-[color:var(--color-sunshine-deep)] font-semibold underline underline-offset-4 decoration-2 decoration-[color:var(--color-sunshine)]/60 hover:decoration-[color:var(--color-sunshine-deep)] transition-colors"
                  >
                    Learn More <span aria-hidden="true" className="ml-2">&rarr;</span>
                  </Link>
                </GlassCard>
              </ScrollReveal>

              {/* Respite Care */}
              <ScrollReveal delay={0.2}>
                <GlassCard variant="solid" className="h-full p-8 flex flex-col">
                  <div aria-hidden="true" className="w-12 h-1 bg-[color:var(--color-sunshine)] rounded-full mb-5" />
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-forest mb-4 leading-tight">
                    Respite Care
                  </h3>
                  <p className="text-ink-soft leading-relaxed flex-grow mb-6">
                    You need a break. That doesn&rsquo;t make you a bad person. It makes you human. Let us care for your
                    parent while you recharge. A weekend, a week, whatever you need. You come back&nbsp;stronger.
                  </p>
                  <Link
                    href="/services#respite-care"
                    className="inline-flex items-center text-forest hover:text-[color:var(--color-sunshine-deep)] font-semibold underline underline-offset-4 decoration-2 decoration-[color:var(--color-sunshine)]/60 hover:decoration-[color:var(--color-sunshine-deep)] transition-colors"
                  >
                    Learn More <span aria-hidden="true" className="ml-2">&rarr;</span>
                  </Link>
                </GlassCard>
              </ScrollReveal>

              {/* Post-Hospital Recovery */}
              <ScrollReveal delay={0.3}>
                <GlassCard variant="solid" className="h-full p-8 flex flex-col">
                  <div aria-hidden="true" className="w-12 h-1 bg-[color:var(--color-sunshine)] rounded-full mb-5" />
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-forest mb-4 leading-tight">
                    Post-Hospital Recovery
                  </h3>
                  <p className="text-ink-soft leading-relaxed flex-grow mb-6">
                    The hospital says they&rsquo;re ready to go home. But home isn&rsquo;t ready for them. We bridge that gap.
                    Medical coordination, physical support, and the time they need to fully recover. No rushed&nbsp;transitions.
                  </p>
                  <Link
                    href="/services#recovery"
                    className="inline-flex items-center text-forest hover:text-[color:var(--color-sunshine-deep)] font-semibold underline underline-offset-4 decoration-2 decoration-[color:var(--color-sunshine)]/60 hover:decoration-[color:var(--color-sunshine-deep)] transition-colors"
                  >
                    Learn More <span aria-hidden="true" className="ml-2">&rarr;</span>
                  </Link>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* The Stakes Section (StoryBrand: Failure + Success Vision) — WHITE, terracotta risk / forest possibility cards */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest">
                Two Futures. One Choice.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
              {/* Left: Failure / What's at Risk — dark forest card for the heavier scenario */}
              <ScrollReveal delay={0}>
                <div className="rounded-2xl bg-forest border border-sage/40 shadow-lg p-8 sm:p-10 h-full transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span aria-hidden="true" className="inline-block w-10 h-1 bg-white/40 rounded-full" />
                      <span className="uppercase tracking-widest text-xs font-semibold text-white/70">The Risk</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white leading-tight">
                      What Happens If You Do <span className="italic text-[color:var(--color-sunshine)] underline decoration-2 underline-offset-4 decoration-[color:var(--color-sunshine-deep)]">Nothing</span>?
                    </h3>
                    <div className="text-left space-y-4 text-white/85 leading-relaxed">
                      <p>
                        A fall in the bathroom. A missed dose of medication. A late-night call from the ER. The guilt compounds. You miss work. You can&rsquo;t focus. Your own health suffers.
                      </p>
                      <p>
                        Your parent becomes isolated. Days blur together. They decline faster without engagement, without purpose, without community. You make <span className="italic font-semibold text-[color:var(--color-sunshine)] pr-1">crisis</span> decisions instead of thoughtful&nbsp;ones.
                      </p>
                      <p>
                        And the relationship shifts. Instead of being their child, you become their worried guardian, managing crisis after crisis. You both&nbsp;suffer.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right: Success Vision — light tinted card for the brighter scenario */}
              <ScrollReveal delay={0.1}>
                <GlassCard variant="tinted" className="p-8 sm:p-10 h-full">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span aria-hidden="true" className="inline-block w-10 h-1 bg-[color:var(--color-sunshine)] rounded-full" />
                      <span className="uppercase tracking-widest text-xs font-semibold text-[color:var(--color-sunshine-deep)]">The Possibility</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-forest leading-tight">
                      What Becomes <span className="italic text-[color:var(--color-sunshine-deep)] underline decoration-2 underline-offset-4 decoration-[color:var(--color-sunshine)]">Possible</span>?
                    </h3>
                    <div className="text-left space-y-4 text-ink-soft leading-relaxed">
                      <p>
                        You sleep through the night. You stop holding your breath every time the phone rings. Your parent thrives in a home where they&rsquo;re known, cared for, and genuinely&nbsp;happy.
                      </p>
                      <p>
                        You visit for Sunday brunch, not crisis management. The grandkids come by and play with Grandma in the garden. Holidays become cherished family&nbsp;traditions.
                      </p>
                      <p>
                        Your relationship heals. You&rsquo;re their child again, not their crisis manager. You get your parent back in a different way. You get peace of&nbsp;mind.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Open House Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <p className="uppercase tracking-widest text-sm font-semibold text-[color:var(--color-slate-soft)] mb-3">You&rsquo;re Invited</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest mb-4 leading-tight">
                Community Open House
              </h2>
              <p className="text-ink-soft text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                We host regular open houses so families can tour our home, meet our caregiving team, and ask every question on their mind. Join the list below and we&rsquo;ll email you when the next date is&nbsp;set.
              </p>
            </div>

            <ScrollReveal>
              <div className="rounded-2xl bg-forest border border-sage/30 shadow-xl p-6 sm:p-10">
                <OpenHouseForm onDark />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* You're Not Doing This Alone Section (Guides) — WHITE with terracotta cards */}
        <section id="our-team" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <p className="uppercase tracking-widest text-sm font-semibold text-forest mb-3">Our Team</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest mb-4 leading-tight">
                You&rsquo;re Not Doing This&nbsp;Alone
              </h2>
              <p className="text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
                Our team has walked this road with dozens of families. We know what you&rsquo;re feeling, and we know how to help. We are your guides through this&nbsp;transition.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto items-stretch">
              {/* Team Member 1: Becca Pitts */}
              <ScrollReveal delay={0}>
                <GlassCard variant="tinted" className="p-8 sm:p-10 text-center h-full flex flex-col">
                  <div
                    aria-hidden="true"
                    className="w-28 h-28 rounded-full bg-[color:var(--color-sunshine)]/25 mx-auto mb-5 flex items-center justify-center font-serif text-3xl text-[color:var(--color-ink)] border-4 border-[color:var(--color-sunshine)]/40 shadow-inner"
                  >
                    BP
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-forest mb-1">
                    Becca Pitts
                  </h3>
                  <p className="text-[color:var(--color-sunshine-deep)] font-semibold uppercase tracking-wide text-sm mb-4">Co-Founder</p>
                  <p className="text-ink-soft leading-relaxed flex-grow">
                    Becca founded Burien Best Care Home out of a deep passion for providing genuine, dignified care for seniors. When you visit, Becca will listen to your story and help you find the right solution for your&nbsp;family.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Team Member 2: Daniela Torkelson */}
              <ScrollReveal delay={0.1}>
                <GlassCard variant="tinted" className="p-8 sm:p-10 text-center h-full flex flex-col">
                  <div
                    aria-hidden="true"
                    className="w-28 h-28 rounded-full bg-[color:var(--color-sunshine)]/25 mx-auto mb-5 flex items-center justify-center font-serif text-3xl text-[color:var(--color-ink)] border-4 border-[color:var(--color-sunshine)]/40 shadow-inner"
                  >
                    DT
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-forest mb-1">
                    Daniela Torkelson
                  </h3>
                  <p className="text-[color:var(--color-sunshine-deep)] font-semibold uppercase tracking-wide text-sm mb-4">Provider &amp; Resident Manager</p>
                  <p className="text-ink-soft leading-relaxed flex-grow">
                    Daniela is the warm, steady presence our residents rely on every day. She believes care is about more than tasks. It&rsquo;s about knowing each person&rsquo;s story and honoring who they&nbsp;are.
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonials Section (Marquee) — TERRACOTTA */}
        <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <p className="uppercase tracking-widest text-sm font-semibold text-[color:var(--color-sunshine-deep)] mb-3">In Their Own Words</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest leading-tight">
                Families Who Found Peace of&nbsp;Mind
              </h2>
            </div>
          </div>

          <TestimonialMarquee />
        </section>

        {/* FAQ Section — WHITE */}
        <section id="faq" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest">
                Questions You Might Have
              </h2>
            </div>

            <ScrollReveal>
              <FAQAccordion items={faqItems} />
            </ScrollReveal>
          </div>
        </section>

        {/* Final CTA Section — floats on gradient */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 lg:p-16 text-center space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest leading-[1.15]">
              Most Families Wait Until a&nbsp;<span className="text-[color:var(--color-sunshine-deep)] italic font-semibold">Crisis</span>.
              <br />
              You Don&rsquo;t Have&nbsp;To.
            </h2>

            <p className="text-ink-soft text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Being proactive is an act of love. Taking a step now, while you still have choices, gives you time to make thoughtful&nbsp;decisions.
            </p>

            <p className="text-ink-soft text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              You deserve peace of mind. Your parent deserves quality care. Let&rsquo;s take the next step&nbsp;together.
            </p>

            <div className="flex justify-center pt-4">
              <ScheduleVisitButton surface="on-white" />
            </div>

            <div className="pt-10 mt-4 border-t border-terracotta/20">
              <p className="text-ink-soft text-sm">
                Licensed by WA DSHS &middot; 24/7 Care &middot; Adult Family Home &middot; Burien,&nbsp;WA
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
