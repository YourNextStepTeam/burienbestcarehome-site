import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import ScrollReveal from '@/components/ScrollReveal'
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: 'Our Services | Memory Care & Senior Care in Burien, WA',
  description:
    'Personalized memory care, daily living assistance, respite care, and post-hospital recovery for seniors in Burien and King County. Focus on outcomes, not facilities.',
  keywords: [
    'memory care Burien',
    'senior care King County',
    'adult family home',
    'dementia care Washington',
    'respite care Burien',
  ],
  openGraph: {
    title: 'Our Services | Burien Best Care Home',
    description:
      'Care that sees your parent as a person. Personalized services designed for outcomes, not one-size-fits-all.',
    type: 'website',
    url: 'https://burienbestcarehome.com/services',
  },
}

interface FeatureItem {
  title: string
  description: string
}

const memoryCareFeaturesData: FeatureItem[] = [
  {
    title: 'Consistent Daily Routines',
    description:
      'Less confusion. More comfort. Predictable days that reduce anxiety and help your parent feel secure.',
  },
  {
    title: 'Person-Centered Dementia Care',
    description:
      'Caregivers who know your parent\'s story, not just their diagnosis. Care that honors who they were and who they are.',
  },
  {
    title: 'Safe Home Environment',
    description:
      'A space designed for security, so you can stop worrying about wandering and falls. Peace of mind for your family.',
  },
  {
    title: 'Engaging Activities',
    description:
      'Music, art, and gentle movement that spark joy and purpose. Moments of connection and happiness every day.',
  },
  {
    title: 'Family Communication',
    description:
      'You\'ll never wonder how they\'re doing. We keep you informed, always. Photos, updates, stories from their day.',
  },
  {
    title: 'Medication Management',
    description:
      'Medications tracked, coordinated with doctors, never missed. One less thing for you to worry about.',
  },
]

const dailyLivingFeaturesData: FeatureItem[] = [
  {
    title: 'Bathing & Personal Hygiene',
    description:
      'Your parent stays clean and comfortable, with their dignity preserved. Support delivered with warmth, never shame.',
  },
  {
    title: 'Dressing & Mobility Support',
    description:
      'Help choosing clothes they love and moving safely throughout the home. Independence maintained, risk reduced.',
  },
  {
    title: 'Medication Management',
    description:
      'Every pill taken on time, every interaction with doctors coordinated. Your parent\'s health stays on track.',
  },
  {
    title: 'Nutritious Home-Cooked Meals',
    description:
      'Three daily meals and snacks made fresh, tailored to preferences and needs. The comfort of home cooking.',
  },
  {
    title: 'Housekeeping & Laundry',
    description:
      'A clean, comfortable home maintained with care. Your parent wakes up to fresh sheets and tidy spaces.',
  },
  {
    title: 'Medical Transportation',
    description:
      'Coordinated support for doctor appointments and medical visits. Getting where they need to be, safely and on time.',
  },
]

const respiteCareFeaturesData: FeatureItem[] = [
  {
    title: 'Flexible Stay Lengths',
    description:
      'From a few days to several weeks, we accommodate your timeline. Break when you need it, for as long as you need it.',
  },
  {
    title: 'Full Care Access',
    description:
      'All our services available during your parent\'s stay. Everything they need, nothing you have to manage.',
  },
  {
    title: 'Personalized Care Plans',
    description:
      'Developed before arrival to ensure a smooth transition. Your parent arrives to care already tailored to them.',
  },
  {
    title: 'Regular Family Updates',
    description:
      'Stay connected with daily communication about activities, meals, and moments of joy throughout their stay.',
  },
  {
    title: 'Smooth Transitions',
    description:
      'Support for both your parent and your family during arrival and departure. We make it easy on everyone.',
  },
  {
    title: 'No Long-Term Commitment',
    description:
      'Flexible arrangement, no binding contracts or ongoing obligations. Pure flexibility, pure relief.',
  },
]

const recoveryCareFeaturesData: FeatureItem[] = [
  {
    title: 'Hospital Coordination',
    description:
      'Seamless communication with discharge planners and physicians. We know exactly what your parent needs to recover.',
  },
  {
    title: '24/7 Professional Oversight',
    description:
      'Trained caregivers watching over them around the clock during the critical recovery period. Always monitored, never alone.',
  },
  {
    title: 'Medication Management',
    description:
      'Precise tracking of medications and health metrics. Recovery progress monitored daily, doctors kept informed.',
  },
  {
    title: 'Physical Therapy Support',
    description:
      'Assistance with exercises and mobility rehabilitation. Gentle, consistent support that rebuilds strength.',
  },
  {
    title: 'Healing-Focused Nutrition',
    description:
      'Nutritious meals specifically designed to support recovery. The right fuel for healing bodies.',
  },
  {
    title: 'Transition Planning',
    description:
      'Gradual planning for return home or longer-term care options. No sudden shifts, always thoughtful next steps.',
  },
]

function FeatureGrid({ features }: { features: FeatureItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {features.map((feature, index) => (
        <div key={index} className="p-6 bg-cream/40 rounded-lg border border-sage/10">
          <h4 className="font-semibold text-forest mb-2 font-serif text-lg">
            {feature.title}
          </h4>
          <p className="text-forest/80 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}

function ServiceSection({
  id,
  title,
  subtitle,
  paragraphs,
  features,
  delay,
}: {
  id: string
  title: string
  subtitle: string
  paragraphs: string[]
  features: FeatureItem[]
  delay: number
}) {
  return (
    <section id={id} className="py-16 md:py-24 px-4">
      <ScrollReveal delay={delay} className="w-full">
        <GlassCard className="w-full max-w-4xl mx-auto p-8 md:p-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-2">
                {title}
              </h2>
              <h3 className="text-xl md:text-2xl text-sage font-semibold">
                {subtitle}
              </h3>
            </div>

            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-forest/90 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <FeatureGrid features={features} />

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-sage text-white rounded-lg font-semibold hover:bg-forest transition-colors duration-300 text-center"
              >
                Schedule a Visit
              </Link>
              <a
                href="/family-guide.pdf"
                className="inline-block px-8 py-3 border-2 border-sage text-sage rounded-lg font-semibold hover:bg-cream transition-colors duration-300 text-center"
              >
                Download Our Family Guide
              </a>
            </div>
          </div>
        </GlassCard>
      </ScrollReveal>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Structured Data: BreadcrumbList */}
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
                name: 'Services',
                item: 'https://burienbestcarehome.com/services',
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section
        aria-labelledby="services-hero-headline"
        className="relative min-h-[70vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1478144592103-25e218a04891?w=1600&q=80&auto=format&fit=crop"
          alt=""
          role="presentation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-forest/75 via-forest/55 to-forest/80" />

        <ScrollReveal className="relative z-10 text-center text-white px-4 sm:px-6 py-20 md:py-24 max-w-3xl">
          <h1
            id="services-hero-headline"
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal mb-6 leading-tight"
          >
            Care That Sees Your Parent as a Person, Not a Patient
          </h1>
          <p className="text-lg md:text-xl text-cream leading-relaxed">
            Every care plan we build starts with one question: what does your parent need to feel safe, happy, and at home?
          </p>
        </ScrollReveal>
      </section>

      {/* Services Intro Section */}
      <section className="py-12 md:py-16 px-4 bg-cream">
        <ScrollReveal className="max-w-3xl mx-auto">
          <p className="text-center text-forest/90 leading-relaxed text-lg">
            At Burien Best Care Home, we don't believe in one-size-fits-all care. With only six residents, we have the time and attention to truly know your parent. Their morning preferences, their favorite music, the stories that make them smile. This is what personalized care actually looks like.
          </p>
        </ScrollReveal>
      </section>

      {/* Memory Care Section */}
      <ServiceSection
        id="memory-care"
        title="Memory Care"
        subtitle="Your parent with memory loss deserves more than supervision. They deserve connection."
        paragraphs={[
          'Your parent is more than their diagnosis. Even with memory loss, they remember the warmth of your touch. They feel the difference between someone going through the motions and someone who truly cares. Our memory care program is built on that truth.',
          'We don\'t just manage symptoms. We preserve dignity. We maintain routines that feel familiar. We play music they grew up with, encourage activities that spark joy, and speak to them the way they deserve to be spoken to. And we make sure you know what\'s happening every single day.',
        ]}
        features={memoryCareFeaturesData}
        delay={0.1}
      />

      {/* Daily Living Assistance Section */}
      <ServiceSection
        id="daily-living"
        title="Daily Living Assistance"
        subtitle="When everyday tasks get harder, we help your parent keep their independence and their dignity."
        paragraphs={[
          'Needing help with bathing, dressing, or meals doesn\'t mean losing who you are. Your parent can still make choices. Still have preferences. Still maintain the self-respect that comes with dignity. That\'s the care we provide.',
          'Every interaction is designed to preserve independence while ensuring safety. We move at your parent\'s pace. We ask permission before helping. We treat every moment as if someone you love is watching (because someone is: you).',
        ]}
        features={dailyLivingFeaturesData}
        delay={0.2}
      />

      {/* Respite Care Section */}
      <ServiceSection
        id="respite-care"
        title="Respite Care"
        subtitle="You need a break. Your parent needs to be safe. Both of those things can be true."
        paragraphs={[
          'You\'ve been doing this for months. Maybe years. You love your parent fiercely, but you\'re exhausted. Burnt out. Running on empty. And you feel guilty about needing a break, when the truth is: needing rest doesn\'t make you a bad child. It makes you human.',
          'Our respite care gives you permission to breathe while your parent receives the same attentive, personalized care they\'d get in any other stay. No rushing. No shortcuts. Just professional care from people who understand what your parent needs.',
        ]}
        features={respiteCareFeaturesData}
        delay={0.3}
      />

      {/* Post-Hospital Recovery Section */}
      <ServiceSection
        id="recovery"
        title="Post-Hospital Recovery"
        subtitle="The hospital says they're ready to leave. But going home alone isn't an option. We bridge that gap."
        paragraphs={[
          'Coming home from the hospital is supposed to be good news. But you\'re terrified. What if they fall? What if they don\'t take their medications right? What if something goes wrong and you can\'t handle it? These fears are real, and they\'re valid.',
          'Our post-hospital recovery program gives your family the breathing room you need. Your parent gets 24/7 professional oversight from caregivers trained in recovery support. Medications coordinated. Progress monitored. Doctors kept informed. You get to focus on being their child again, not their nurse.',
        ]}
        features={recoveryCareFeaturesData}
        delay={0.4}
      />

      {/* What Makes Our Care Different */}
      <section className="py-16 md:py-24 px-4 bg-sage-light/30">
        <ScrollReveal delay={0.5} className="w-full">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-12 text-center">
              Why Families Choose a Home Over a Facility
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Personalized */}
              <ScrollReveal delay={0.6} direction="up">
                <GlassCard className="p-8 h-full">
                  <h3 className="text-2xl font-serif font-bold text-forest mb-4">
                    Personalized, Not Programmatic
                  </h3>
                  <p className="text-forest/80 leading-relaxed">
                    Care plans built with you, updated as needs change. Not pulled from a template. Not one of fifty identical routines. Built around your parent's story, preferences, and who they are.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Card 2: Partners */}
              <ScrollReveal delay={0.7} direction="up">
                <GlassCard className="p-8 h-full">
                  <h3 className="text-2xl font-serif font-bold text-forest mb-4">
                    Partners, Not Providers
                  </h3>
                  <p className="text-forest/80 leading-relaxed">
                    We involve your family in every decision. You're not filling out paperwork and stepping back. You're making care decisions together with people who genuinely want your parent to thrive.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Card 3: Six Residents */}
              <ScrollReveal delay={0.8} direction="up">
                <GlassCard className="p-8 h-full">
                  <h3 className="text-2xl font-serif font-bold text-forest mb-4">
                    Six Residents, One Family
                  </h3>
                  <p className="text-forest/80 leading-relaxed">
                    Your parent is known by name, by story, by heart. Not a bed number. Not a resident code. A person we genuinely care for, woven into the fabric of our small home community.
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <ScrollReveal delay={0.9} className="w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">
              Your Parent Deserves Care That Feels Like Home
            </h2>
            <p className="text-lg text-forest/80 leading-relaxed mb-8">
              Whether you're planning ahead or need support right now, let's talk about what your family actually needs. We're here to listen, answer your questions, and help you make the decision that feels right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-sage text-white rounded-lg font-semibold hover:bg-forest transition-colors duration-300 text-center"
              >
                Schedule a Visit
              </Link>
              <a
                href="/family-guide.pdf"
                className="px-8 py-3 border-2 border-sage text-sage rounded-lg font-semibold hover:bg-cream transition-colors duration-300 text-center"
              >
                Download Our Family Guide
              </a>
            </div>
            <p className="text-sm text-forest/60 mt-8">
              Licensed by Washington State DSHS. Bonded and insured. Serving families in Burien and King County since 2020.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
