import { Metadata } from 'next'
import Image from 'next/image'
import Script from 'next/script'
import ScrollReveal from '@/components/ScrollReveal'
import GlassCard from '@/components/GlassCard'
import ScheduleVisitButton from '@/components/ScheduleVisitButton'

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
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Our Services | Burien Best Care Home',
    description:
      'Care that sees your parent as a person. Personalized services designed for outcomes, not one-size-fits-all.',
    type: 'website',
    url: 'https://burienbestcarehome.com/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Memory Care & Senior Care in Burien, WA',
    description:
      'Memory care, daily living assistance, respite care, and post-hospital recovery in a small, family-centered home.',
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
      'You\'ll stay connected with regular updates about their day. We keep you informed and involved in their care.',
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
      'Stay connected with regular communication about activities, meals, and moments of joy throughout their stay.',
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
    title: 'Physical Therapy Coordination',
    description:
      'Coordination with your parent\'s physical therapist and support for exercises at home. Consistent help that rebuilds strength.',
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

type Surface = 'white' | 'terracotta'

function FeatureGrid({ features, surface }: { features: FeatureItem[]; surface: Surface }) {
  const onTerracotta = surface === 'terracotta'
  const cardClass = onTerracotta
    ? 'p-6 sm:p-7 bg-white rounded-xl border border-sage/15 shadow-sm h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-sage/40'
    : 'p-6 sm:p-7 bg-terracotta-deep rounded-xl border border-terracotta/40 shadow-sm h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-white/40'
  const accentClass = onTerracotta ? 'bg-sage' : 'bg-white'
  const titleClass = onTerracotta ? 'text-forest' : 'text-white'
  const bodyClass = onTerracotta ? 'text-ink-soft' : 'text-white/90'

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 items-stretch">
      {features.map((feature, index) => (
        <div key={index} className={cardClass}>
          <div className="flex items-center gap-3 mb-3">
            <span aria-hidden="true" className={`inline-block w-8 h-0.5 rounded-full ${accentClass}`} />
          </div>
          <h4 className={`font-semibold mb-2 font-serif text-xl sm:text-2xl leading-tight ${titleClass}`}>
            {feature.title}
          </h4>
          <p className={`text-base leading-relaxed ${bodyClass}`}>
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
  surface,
}: {
  id: string
  title: string
  subtitle: React.ReactNode
  paragraphs: string[]
  features: FeatureItem[]
  delay: number
  surface: Surface
}) {
  const onTerracotta = surface === 'terracotta'
  const sectionBg = onTerracotta ? 'bg-terracotta-deep' : 'bg-white'
  const eyebrow = onTerracotta ? 'text-cream' : 'text-sage'
  const heading = onTerracotta ? 'text-white' : 'text-forest'
  const subheading = onTerracotta ? 'text-white/90' : 'text-ink-soft'
  const body = onTerracotta ? 'text-white/90' : 'text-ink-soft'
  const buttonSurface = onTerracotta ? 'on-terracotta' : 'on-white'

  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${sectionBg}`}>
      <ScrollReveal delay={delay} className="w-full">
        <div className="w-full max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="text-center">
              <p className={`uppercase tracking-widest text-sm font-semibold mb-3 ${eyebrow}`}>Our Services</p>
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-5 leading-tight ${heading}`}>
                {title}
              </h2>
              <h3 className={`text-xl md:text-2xl font-normal max-w-2xl mx-auto leading-snug ${subheading}`}>
                {subtitle}
              </h3>
            </div>

            <div className="space-y-5 max-w-3xl mx-auto">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className={`leading-relaxed text-lg ${body}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            <FeatureGrid features={features} surface={surface} />

            <div className="flex pt-4 justify-center">
              <ScheduleVisitButton surface={buttonSurface} />
            </div>
          </div>
        </div>
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
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-forest/90 via-forest/75 to-forest/90" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/25" />

        <ScrollReveal className="relative z-10 text-center px-4 sm:px-6 py-24 md:py-32 max-w-4xl">
          <div className="backdrop-blur-xl bg-gradient-to-br from-forest/65 via-forest/55 to-sage/50 border border-white/30 rounded-2xl p-6 sm:p-10 lg:p-14 shadow-2xl ring-1 ring-white/10">
            <h1
              id="services-hero-headline"
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-white mb-6 leading-tight"
            >
              Care That Treats Your Parent as a&nbsp;<span className="text-sage italic">Person</span>.
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
              Every care plan starts with one question: what does your parent need to feel safe, happy, and at&nbsp;home?
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Services Intro Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <ScrollReveal className="max-w-3xl mx-auto">
          <GlassCard variant="terracotta" className="p-8 sm:p-10">
            <p className="text-center text-white/90 leading-relaxed text-lg sm:text-xl">
              We don&rsquo;t believe in one-size-fits-all care. In our home, we have the time and attention to truly know your parent. Their morning preferences, their favorite music, the stories that make them smile. This is what personalized care actually looks&nbsp;like.
            </p>
          </GlassCard>
        </ScrollReveal>
      </section>

      {/* Memory Care Section */}
      <ServiceSection
        id="memory-care"
        title="Memory Care"
        subtitle={
          <>
            Your parent with memory loss deserves more than&nbsp;supervision.
            <br className="hidden sm:block" />
            <span> They deserve <em className="text-sage not-italic font-semibold">connection</em>.</span>
          </>
        }
        paragraphs={[
          'Your parent is more than their diagnosis. Even with memory loss, they remember the warmth of your touch. They feel the difference between someone going through the motions and someone who truly cares. Our memory care program is built on that truth.',
          'We don\u2019t just manage symptoms. We preserve dignity. We maintain routines that feel familiar. We play music they grew up with, encourage activities that spark joy, and speak to them the way they deserve to be spoken to. And we make sure you know what\u2019s happening every single day.',
        ]}
        features={memoryCareFeaturesData}
        delay={0.1}
        surface="terracotta"
      />

      {/* Daily Living Assistance Section */}
      <ServiceSection
        id="daily-living"
        title="Daily Living Assistance"
        subtitle={
          <>
            When everyday tasks get harder, we help your parent keep their independence&nbsp;and their&nbsp;dignity.
          </>
        }
        paragraphs={[
          'Needing help with bathing, dressing, or meals doesn\'t mean losing who you are. Your parent can still make choices. Still have preferences. Still maintain the self-respect that comes with dignity. That\'s the care we provide.',
          'Every interaction is designed to preserve independence while ensuring safety. We move at your parent\'s pace. We ask permission before helping. We treat every moment as if someone you love is watching (because someone is: you).',
        ]}
        features={dailyLivingFeaturesData}
        delay={0.2}
        surface="white"
      />

      {/* Respite Care Section */}
      <ServiceSection
        id="respite-care"
        title="Respite Care"
        subtitle={
          <>
            You need a break. Your parent needs to be&nbsp;safe.
            <br className="hidden sm:block" />
            <span> Both of those things can be true.</span>
          </>
        }
        paragraphs={[
          'You\u2019ve been doing this for months. Maybe years. You love your parent fiercely, but you\u2019re exhausted. Burnt out. Running on empty. And you feel guilty about needing a break, when the truth is: needing rest doesn\u2019t make you a bad child. It makes you human.',
          'Our respite care gives you permission to breathe while your parent receives the same attentive, personalized care they\'d get in any other stay. No rushing. No shortcuts. Just professional care from people who understand what your parent needs.',
        ]}
        features={respiteCareFeaturesData}
        delay={0.3}
        surface="terracotta"
      />

      {/* Post-Hospital Recovery Section */}
      <ServiceSection
        id="recovery"
        title="Post-Hospital Recovery"
        subtitle={
          <>
            The hospital says they&rsquo;re ready to&nbsp;leave.
            <br className="hidden sm:block" />
            But going home alone isn&rsquo;t an&nbsp;option.
            <br className="hidden sm:block" />
            <span> We <em className="text-sage not-italic font-semibold">bridge</em> that gap.</span>
          </>
        }
        paragraphs={[
          'Coming home from the hospital is supposed to be good news. But you\'re terrified. What if they fall? What if they don\'t take their medications right? What if something goes wrong and you can\'t handle it? These fears are real, and they\'re valid.',
          'Our post-hospital recovery program gives your family the breathing room you need. Your parent gets 24/7 professional oversight from caregivers trained in recovery support. Medications coordinated. Progress monitored. Doctors kept informed. You get to focus on being their child again, not their nurse.',
        ]}
        features={recoveryCareFeaturesData}
        delay={0.4}
        surface="white"
      />

      {/* What Makes Our Care Different */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-terracotta-deep">
        <ScrollReveal delay={0.5} className="w-full">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="uppercase tracking-widest text-sm font-semibold text-cream mb-3">The Difference</p>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-white leading-tight">
                Why Families Choose a Home&nbsp;Over a&nbsp;Facility
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {/* Card 1: Personalized */}
              <ScrollReveal delay={0.6} direction="up">
                <GlassCard variant="white" className="p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span aria-hidden="true" className="inline-block w-10 h-1 bg-terracotta-deep rounded-full" />
                  </div>
                  <h3 className="text-2xl font-serif font-normal text-forest mb-4 leading-tight">
                    Personalized Care Plans
                  </h3>
                  <p className="text-ink-soft leading-relaxed">
                    Each care plan is built with you and updated as your parent&rsquo;s needs change. We customize around your parent&rsquo;s story, preferences, and who they&nbsp;are.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Card 2: Partners */}
              <ScrollReveal delay={0.7} direction="up">
                <GlassCard variant="white" className="p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span aria-hidden="true" className="inline-block w-10 h-1 bg-terracotta-deep rounded-full" />
                  </div>
                  <h3 className="text-2xl font-serif font-normal text-forest mb-4 leading-tight">
                    True Partnership in Care
                  </h3>
                  <p className="text-ink-soft leading-relaxed">
                    You&rsquo;re not stepping back after intake paperwork. You&rsquo;re making care decisions together with people who genuinely want your parent to&nbsp;thrive.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {/* Card 3: Known by heart */}
              <ScrollReveal delay={0.8} direction="up">
                <GlassCard variant="white" className="p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span aria-hidden="true" className="inline-block w-10 h-1 bg-terracotta-deep rounded-full" />
                  </div>
                  <h3 className="text-2xl font-serif font-normal text-forest mb-4 leading-tight">
                    Known by Name and Heart
                  </h3>
                  <p className="text-ink-soft leading-relaxed">
                    Your parent is known by name, by story, and by heart. They&rsquo;re a person we genuinely care for, woven into our small home&nbsp;community.
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <ScrollReveal delay={0.9} className="w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-forest mb-6 leading-tight">
              Your Parent Deserves Care&nbsp;That Feels Like&nbsp;<span className="text-sage italic">Home</span>.
            </h2>
            <p className="text-lg sm:text-xl text-ink-soft leading-relaxed mb-10">
              Whether you&rsquo;re planning ahead or need support right now, let&rsquo;s talk about what your family actually&nbsp;needs.
            </p>
            <div className="flex justify-center">
              <ScheduleVisitButton surface="on-white" />
            </div>
            <p className="text-sm text-forest/60 mt-10">
              Licensed by Washington State DSHS &middot; Bonded and insured &middot; Serving families in Burien, Kent, Renton and across King&nbsp;County.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
