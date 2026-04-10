import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import ScrollReveal from '@/components/ScrollReveal'
import GlassCard from '@/components/GlassCard'
import FAQAccordion from '@/components/FAQAccordion'
import OpenHouseForm from '@/components/OpenHouseForm'

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
        'An adult family home is a small, intimate residential setting licensed to care for up to six individuals. Unlike larger assisted living facilities that can house hundreds of residents, our adult family home provides a true home-like environment with personalized, individualized care. Our residents are family, not room numbers, and benefit from the warmth, attention, and genuine connection that only a true home can provide.',
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
        'This is one of the biggest differences between Burien Best Care Home and larger facilities. We care for a maximum of six residents. That means your parent isn\'t competing for staff attention with dozens of others. Our small size allows for genuine relationships and individualized care that simply isn\'t possible in larger settings.',
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
            '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
            name: 'Burien Best Care Home',
            image: 'https://burienbestcarehome.com/og-image.png',
            description:
              'Compassionate adult family home providing memory care, daily living assistance, respite care, and post-hospital recovery for seniors in Burien, Washington.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Burien',
              addressLocality: 'Burien',
              addressRegion: 'WA',
              postalCode: '98148',
              addressCountry: 'US',
            },
            telephone: '(206) 555-0142',
            email: 'info@burienbestcarehome.com',
            url: 'https://burienbestcarehome.com',
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
            areaServed: 'King County, Washington',
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
                item: 'https://burienbestcarehome.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Our Home',
                item: 'https://burienbestcarehome.com/#our-home',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Services',
                item: 'https://burienbestcarehome.com/services',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Our Team',
                item: 'https://burienbestcarehome.com/#our-team',
              },
            ],
          }),
        }}
      />

      {/* Main Content */}
      <div className="min-h-screen bg-cream">
        {/* Hero Section */}
        <HeroSection />

        {/* The Problem Section (StoryBrand: Character + Problem) */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest">
                  You've noticed the changes. And you can't unsee them.
                </h2>

                <p className="text-forest/70 text-lg leading-relaxed">
                  A missed medication. A fall they didn't tell you about. Meals skipped because cooking feels overwhelming now. You notice your parent moving slower, forgetting more, struggling with things they used to do without thinking. And the guilt hits hard. You wish you could be there more. You worry about them being alone. You lie awake at night wondering if they're safe.
                </p>

                <p className="text-forest/70 text-lg leading-relaxed">
                  Then there's the bigger thought: the idea of placing them somewhere else. It feels like giving up. Like admitting you can't handle this alone. Like you're abandoning them when they need you most.
                </p>

                <p className="font-serif text-xl sm:text-2xl text-forest font-normal">
                  But here's what we know: It's not giving up. It's stepping up.
                </p>

                <p className="text-forest/70 text-lg leading-relaxed">
                  At Burien Best Care Home, we help families like yours find a solution that honors your parent's dignity and gives you peace of mind. You don't have to choose between loving them and getting them the right care. You can do both.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link
                    href="/contact"
                    className="btn btn-primary inline-flex items-center justify-center min-h-12 px-8 py-4 font-medium rounded-lg transition-all duration-300 hover:shadow-lg text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
                  >
                    Schedule a Visit
                  </Link>
                  <a
                    href="#family-guide"
                    className="btn btn-secondary inline-flex items-center justify-center min-h-12 px-8 py-4 font-medium rounded-lg transition-all duration-300 hover:shadow-lg text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
                  >
                    Download Our Family Guide
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Your Simple Plan Section (StoryBrand: Plan) */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-sage-light/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest">
                Three Steps to Peace of Mind
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Step 1 */}
              <ScrollReveal delay={0}>
                <GlassCard className="h-full p-8 space-y-4 flex flex-col">
                  <div className="text-5xl font-serif text-sage">1</div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    Schedule a Visit
                  </h3>
                  <p className="text-forest/70 leading-relaxed flex-grow">
                    Walk through our home. Meet our team. Ask every question on your mind. We'll show you what daily life looks like here, introduce you to residents and caregivers, and answer honestly about everything from cost to care specifics. No pressure, no sales pitch, just real conversation.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Step 2 */}
              <ScrollReveal delay={0.1}>
                <GlassCard className="h-full p-8 space-y-4 flex flex-col">
                  <div className="text-5xl font-serif text-sage">2</div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    Build a Care Plan Together
                  </h3>
                  <p className="text-forest/70 leading-relaxed flex-grow">
                    We'll create a personalized plan around your parent's needs, preferences, and daily rhythms. What time do they wake up? What foods do they love? Do they prefer quiet mornings or social activity? We listen and build care that fits them, not the other way around.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Step 3 */}
              <ScrollReveal delay={0.2}>
                <GlassCard className="h-full p-8 space-y-4 flex flex-col">
                  <div className="text-5xl font-serif text-sage">3</div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    Watch Them Thrive
                  </h3>
                  <p className="text-forest/70 leading-relaxed flex-grow">
                    Your parent settles into a home where they're known by name, cared for around the clock, and genuinely happy. You stop worrying about falls and medication. You start noticing smiles again. That's when you know you made the right choice.
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn btn-primary inline-flex items-center justify-center min-h-12 px-8 py-4 font-medium rounded-lg transition-all duration-300 hover:shadow-lg text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
              >
                Schedule a Visit
              </Link>
              <a
                href="#family-guide"
                className="btn btn-secondary inline-flex items-center justify-center min-h-12 px-8 py-4 font-medium rounded-lg transition-all duration-300 hover:shadow-lg text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
              >
                Download Our Family Guide
              </a>
            </div>
          </div>
        </section>

        {/* What Your Parent Gets Section (Hormozi Value Stack: Outcomes) */}
        <section id="our-home" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest">
                What Life Looks Like for Your Loved One
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Outcome 1 */}
              <ScrollReveal delay={0}>
                <GlassCard className="h-full p-8 space-y-4">
                  <div className="text-4xl">🏡</div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    A Home, Not a Room Number
                  </h3>
                  <p className="text-forest/70 leading-relaxed">
                    Only six residents. Your parent is known by name, called by name, treated like family. They're not waiting in a room for someone to find time for them. They're part of a genuine home.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Outcome 2 */}
              <ScrollReveal delay={0.1}>
                <GlassCard className="h-full p-8 space-y-4">
                  <div className="text-4xl">☀️</div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    Fresh Air and Sunshine Every Day
                  </h3>
                  <p className="text-forest/70 leading-relaxed">
                    Landscaped gardens. Covered patio. Nature at the doorstep. Your parent gets outside, breathes fresh air, feels the sun. It's healing in ways medication alone can't be.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Outcome 3 */}
              <ScrollReveal delay={0.2}>
                <GlassCard className="h-full p-8 space-y-4">
                  <div className="text-4xl">🍽️</div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    Meals They Actually Look Forward To
                  </h3>
                  <p className="text-forest/70 leading-relaxed">
                    Three home-cooked meals plus snacks, tailored to their preferences. Not institutional food. Real food. Food that says someone cares enough to cook for them.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Outcome 4 */}
              <ScrollReveal delay={0.3}>
                <GlassCard className="h-full p-8 space-y-4">
                  <div className="text-4xl">👁️</div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    Someone Watching Over Them, Always
                  </h3>
                  <p className="text-forest/70 leading-relaxed">
                    24/7 trained caregivers. Never alone. Never forgotten. Someone is always there to notice if something's wrong, to help when they need it, to make sure they're safe.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Outcome 5 */}
              <ScrollReveal delay={0.4}>
                <GlassCard className="h-full p-8 space-y-4">
                  <div className="text-4xl">✨</div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    Purpose and Joy, Daily
                  </h3>
                  <p className="text-forest/70 leading-relaxed">
                    Activities designed to engage mind and body. Art. Music. Gentle exercise. Social connection. Days filled with moments that matter, not empty hours waiting for bedtime.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Outcome 6 */}
              <ScrollReveal delay={0.5}>
                <GlassCard className="h-full p-8 space-y-4">
                  <div className="text-4xl">👨‍👩‍👧</div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    You, Welcome Anytime
                  </h3>
                  <p className="text-forest/70 leading-relaxed">
                    Open-door policy. Visit for breakfast, lunch, dinner, coffee, or a quiet afternoon. Bring the grandkids. Share moments. Your parent gets their family close, and you stay involved in their care.
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Care That Meets Your Family Section (Outcome-Focused Services) */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-sage-light/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest">
                Care That Meets Your Family Where You Are
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Memory Care */}
              <ScrollReveal delay={0}>
                <GlassCard className="h-full p-8 space-y-4 flex flex-col">
                  <div className="text-4xl">🧠</div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    Memory Care
                  </h3>
                  <p className="text-forest/70 leading-relaxed flex-grow">
                    Your parent with dementia deserves more than management. They deserve moments of connection, comfort, and calm. We create a structured environment where confusion decreases and they feel safe, valued, and genuinely cared for.
                  </p>
                  <Link
                    href="/services#memory-care"
                    className="text-sage hover:text-forest font-medium transition-colors"
                  >
                    Learn More
                  </Link>
                </GlassCard>
              </ScrollReveal>

              {/* Daily Living Assistance */}
              <ScrollReveal delay={0.1}>
                <GlassCard className="h-full p-8 space-y-4 flex flex-col">
                  <div className="text-4xl">🤝</div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    Daily Living Assistance
                  </h3>
                  <p className="text-forest/70 leading-relaxed flex-grow">
                    When everyday tasks become harder, we step in with dignity-first support so your parent can focus on living. Not being done to, but cared for. Not dependent, but supported.
                  </p>
                  <Link
                    href="/services#daily-living"
                    className="text-sage hover:text-forest font-medium transition-colors"
                  >
                    Learn More
                  </Link>
                </GlassCard>
              </ScrollReveal>

              {/* Respite Care */}
              <ScrollReveal delay={0.2}>
                <GlassCard className="h-full p-8 space-y-4 flex flex-col">
                  <div className="text-4xl">🌅</div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    Respite Care
                  </h3>
                  <p className="text-forest/70 leading-relaxed flex-grow">
                    You need a break. That doesn't make you a bad person. It makes you human. Let us care for your parent while you recharge. A weekend, a week, whatever you need. You come back stronger.
                  </p>
                  <Link
                    href="/services#respite-care"
                    className="text-sage hover:text-forest font-medium transition-colors"
                  >
                    Learn More
                  </Link>
                </GlassCard>
              </ScrollReveal>

              {/* Post-Hospital Recovery */}
              <ScrollReveal delay={0.3}>
                <GlassCard className="h-full p-8 space-y-4 flex flex-col">
                  <div className="text-4xl">🏥</div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    Post-Hospital Recovery
                  </h3>
                  <p className="text-forest/70 leading-relaxed flex-grow">
                    The hospital says they're ready to go home. But home isn't ready for them. We bridge that gap. Medical coordination, physical support, and the time they need to fully recover. No rushed transitions.
                  </p>
                  <Link
                    href="/services#recovery"
                    className="text-sage hover:text-forest font-medium transition-colors"
                  >
                    Learn More
                  </Link>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* The Stakes Section (StoryBrand: Failure + Success Vision) */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left: Failure / What's at Risk */}
              <ScrollReveal delay={0}>
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-forest">
                    What Happens If You Do Nothing?
                  </h3>
                  <div className="space-y-4 text-forest/70 leading-relaxed">
                    <p>
                      A fall in the bathroom. A missed dose of medication. A late-night call from the ER. The guilt compounds. You miss work. You can't focus. Your own health suffers.
                    </p>
                    <p>
                      Your parent becomes isolated. Days blur together. They decline faster without engagement, without purpose, without community. You make crisis decisions instead of thoughtful ones. Care becomes reactive, not proactive.
                    </p>
                    <p>
                      And the relationship shifts. Instead of being their child, you become their worried guardian, managing crisis after crisis. You both suffer.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right: Success Vision */}
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-forest">
                    What Becomes Possible
                  </h3>
                  <div className="space-y-4 text-forest/70 leading-relaxed">
                    <p>
                      You sleep through the night. You stop holding your breath every time the phone rings. Your parent thrives in a home where they're known, cared for, and genuinely happy.
                    </p>
                    <p>
                      You visit for Sunday brunch, not crisis management. The grandkids come by and play with Grandma in the garden. Holidays at her home become cherished family traditions. You're present, not panicked.
                    </p>
                    <p>
                      Your relationship heals. You're their child again, not their crisis manager. You get your parent back in a different way. You get peace of mind. This is what's possible.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Open House Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-sage-light">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest mb-4">
                You Are Invited: Community Open House
              </h2>
              <p className="text-forest/70 text-lg mb-4">
                Join us for a tour of our home, meet our caregiving team, and learn about the care we provide. Light refreshments will be served. This is your opportunity to see firsthand what makes Burien Best Care Home special.
              </p>
              <p className="text-sage font-medium text-lg">Date Coming Soon</p>
            </div>

            <ScrollReveal>
              <OpenHouseForm />
            </ScrollReveal>
          </div>
        </section>

        {/* You're Not Doing This Alone Section (Guides) */}
        <section id="our-team" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest mb-4">
                You're Not Doing This Alone
              </h2>
              <p className="text-forest/70 text-lg max-w-2xl mx-auto">
                Our team has walked this road with dozens of families. We know what you're feeling, and we know how to help. We are your guides through this transition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1: Becca Pitts */}
              <ScrollReveal delay={0}>
                <GlassCard className="p-8 text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-sage-light mx-auto flex items-center justify-center text-5xl">
                    👤
                  </div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    Becca Pitts
                  </h3>
                  <p className="text-sage font-medium">Owner & Care Director</p>
                  <p className="text-forest/70 text-sm leading-relaxed">
                    Becca founded Burien Best Care Home out of a deep passion for providing genuine, dignified care for seniors. With years of experience in senior care, she understands exactly what families need. When you visit, Becca will listen to your story and help you find the right solution for your family.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Team Member 2: Mary Johnson */}
              <ScrollReveal delay={0.1}>
                <GlassCard className="p-8 text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-sage-light mx-auto flex items-center justify-center text-5xl">
                    👤
                  </div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    Mary Johnson
                  </h3>
                  <p className="text-sage font-medium">Lead Caregiver</p>
                  <p className="text-forest/70 text-sm leading-relaxed">
                    Mary brings over 12 years of experience in residential senior care. She specializes in memory care and is often the first person families meet. Her gentle touch and patient demeanor create a comforting presence that reassures both residents and their families.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Team Member 3: James Rivera */}
              <ScrollReveal delay={0.2}>
                <GlassCard className="p-8 text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-sage-light mx-auto flex items-center justify-center text-5xl">
                    👤
                  </div>
                  <h3 className="font-serif text-xl font-normal text-forest">
                    James Rivera
                  </h3>
                  <p className="text-sage font-medium">Caregiver & Activities Coordinator</p>
                  <p className="text-forest/70 text-sm leading-relaxed">
                    James is passionate about creating meaningful engagement for our residents. He knows that joy and purpose matter just as much as physical care. He's excited to show families the activities that bring light to our residents' days.
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonials Section (Reframed) */}
        <section id="testimonials" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-sage-light/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest">
                Families Who Found Peace of Mind
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <ScrollReveal delay={0}>
                <GlassCard className="p-8 space-y-4 flex flex-col">
                  <p className="text-4xl text-sage opacity-30 font-serif">"</p>
                  <p className="text-forest/80 leading-relaxed flex-grow">
                    From the moment we walked in, we knew this was the right place for Mom. The care team treats her like their own family, and she has truly flourished here. She's happier, more engaged, and we have complete peace of mind knowing she's in such loving hands.
                  </p>
                  <p className="text-sage font-medium">Sarah M., Daughter of Resident</p>
                </GlassCard>
              </ScrollReveal>

              {/* Testimonial 2 */}
              <ScrollReveal delay={0.1}>
                <GlassCard className="p-8 space-y-4 flex flex-col">
                  <p className="text-4xl text-sage opacity-30 font-serif">"</p>
                  <p className="text-forest/80 leading-relaxed flex-grow">
                    Finding Burien Best Care Home was a blessing. After Dad's hospital stay, the transition was seamless. The staff communicated with us every step of the way, answered all our questions, and helped Dad feel comfortable and supported during a vulnerable time.
                  </p>
                  <p className="text-sage font-medium">James T., Son of Resident</p>
                </GlassCard>
              </ScrollReveal>

              {/* Testimonial 3 */}
              <ScrollReveal delay={0.2}>
                <GlassCard className="p-8 space-y-4 flex flex-col">
                  <p className="text-4xl text-sage opacity-30 font-serif">"</p>
                  <p className="text-forest/80 leading-relaxed flex-grow">
                    We searched for months, touring facility after facility. Nothing felt right until we found Burien Best Care Home. It actually feels like a home, not an institution. Our entire family feels confident that Grandma is getting the best possible care.
                  </p>
                  <p className="text-sage font-medium">Linda R., Daughter of Resident</p>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest">
                The 10 Questions Every Family Asks
              </h2>
            </div>

            <ScrollReveal>
              <FAQAccordion items={faqItems} />
            </ScrollReveal>
          </div>
        </section>

        {/* Final CTA Section (Most families wait until a crisis) */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-sage-light">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest">
              Most Families Wait Until a Crisis. You Don't Have To.
            </h2>

            <p className="text-forest/70 text-lg leading-relaxed">
              Being proactive is an act of love. Taking the first step now, when you still have choices, is so much better than making decisions in panic. You deserve peace of mind. Your parent deserves quality care. Let's make this happen together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn btn-primary px-8 py-3 font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Schedule a Visit
              </Link>
              <a
                href="#family-guide"
                className="btn btn-secondary px-8 py-3 font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Download Our Family Guide
              </a>
            </div>

            <div className="pt-8 border-t border-forest/20">
              <p className="text-forest/70 text-sm">
                Licensed by WA DSHS. 24/7 Care. Maximum 6 Residents. Burien, WA.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
