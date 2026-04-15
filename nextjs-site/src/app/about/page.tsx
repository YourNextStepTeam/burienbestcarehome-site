import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import GlassCard from '@/components/GlassCard'
import ScheduleVisitButton from '@/components/ScheduleVisitButton'

export const metadata: Metadata = {
  title: 'About Us | Our Story & Team',
  description:
    'Meet Becca and the Burien Best Care Home team. We built this home for families like yours who need a better way to care for aging parents in Burien, WA.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Our Story & Team',
    description:
      'Meet Becca and the Burien Best Care Home team. We built this home for families like yours who need a better way to care for aging parents.',
    url: 'https://burienbestcarehome.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Our Story & Team | Burien Best Care Home',
    description:
      'Meet Becca and the team behind Burien Best Care Home, a warm, family-centered alternative to institutional senior care.',
  },
}

export default function About() {
  const teamMembers = [
    {
      initials: 'BP',
      name: 'Becca Pitts',
      role: 'Owner & Care Director',
      bio: 'Becca founded this home after years walking alongside families in senior care. She has been where you are right now, helping her own family navigate this decision. She knows the exhaustion of trying to find a place that feels like home, not a facility. She built this because she wished it existed for her own family.',
    },
    {
      initials: 'DT',
      name: 'Daniela Torkelson',
      role: 'Lead Caregiver',
      bio: 'Daniela brings a calm steadiness to everything she does. She knows the difference between managing someone and truly seeing them, and that difference shows up in every interaction. Families trust her instincts, and residents feel safer the moment she walks in the room.',
    },
  ]

  const promises = [
    {
      title: 'Your Parent\u2019s Dignity First',
      description: 'We never rush, never talk down, never treat care as a checklist. Your parent is not a task. They are a person with a lifetime of stories and wisdom.',
    },
    {
      title: 'We Keep You Informed',
      description: 'Open communication, welcome visits, honest conversations. You stay in the loop on what matters. You choose how involved to be.',
    },
    {
      title: 'Small by Design',
      description: 'An adult family home with up to eight residents. Because real care requires real attention. We say no to growth so we can say yes to each person.',
    },
    {
      title: 'Clear Commitments, Kept',
      description: 'Licensed, bonded, insured. No hidden fees, no surprises, no excuses. You know exactly what you are getting.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section
        aria-labelledby="about-hero-headline"
        className="relative min-h-[70vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80&auto=format&fit=crop"
          alt=""
          role="presentation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-forest/85 via-forest/75 to-forest/90" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20" />
        <div className="relative z-10 text-center px-4 sm:px-6 py-24 md:py-32 max-w-4xl">
          <p className="text-white/90 text-[11px] sm:text-xs lg:text-sm font-semibold uppercase tracking-[0.18em] mb-6 drop-shadow-sm">
            Our Story
          </p>
          <h1
            id="about-hero-headline"
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight drop-shadow-lg"
          >
            A Home Built for Families Who Wanted&nbsp;<span className="text-sage italic">Real</span>&nbsp;Alternatives.
          </h1>
          <p className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto drop-shadow">
            We kept watching families forced to choose between cold institutions and staying home until a crisis. We built Burien Best Care Home to give families a third option. A place with the warmth of home and the professionalism of trained caregivers. Peace of mind, without the&nbsp;distance.
          </p>
        </div>
      </section>

      {/* Our Why Section (The Guide's Backstory) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="uppercase tracking-widest text-sm font-semibold text-sage mb-3">Our Why</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
                Why This Home Exists
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlassCard variant="terracotta" className="p-8 sm:p-12 lg:p-14">
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  We saw families struggling. We watched loved ones fade in large facilities where they were room numbers, not people. We watched families torn between guilt and exhaustion. And we decided to create something&nbsp;different.
                </p>
                <p>
                  Not a facility. A home. A place where residents are treated like family, where caregivers know every person&rsquo;s story, and where families find the peace of mind they have been searching&nbsp;for.
                </p>
                <p>
                  You are looking for peace of mind. You are looking for a place where someone who genuinely knows your parent can carry the responsibility of their care with the same love you&nbsp;would.
                </p>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Promises Section (Outcomes, not features) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-terracotta-deep">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="uppercase tracking-widest text-sm font-semibold text-cream mb-3">Our Promises</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                What We Promise Your Family
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {promises.map((promise, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard variant="white" className="p-8 sm:p-10 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span aria-hidden="true" className="inline-block w-10 h-1 bg-terracotta-deep rounded-full" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-forest mb-4 leading-tight">
                    {promise.title}
                  </h3>
                  <p className="text-ink-soft text-lg leading-relaxed">
                    {promise.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Guides, not just staff) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="uppercase tracking-widest text-sm font-semibold text-sage mb-3">Our Team</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest mb-4 leading-tight">
                The People Walking This Road&nbsp;With&nbsp;You
              </h2>
              <p className="text-lg text-ink-soft max-w-2xl mx-auto">
                We become part of your family&rsquo;s&nbsp;story.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto items-stretch">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <GlassCard variant="terracotta" className="p-8 sm:p-10 text-center h-full flex flex-col">
                  <div
                    aria-hidden="true"
                    className="w-28 h-28 rounded-full bg-white/20 mx-auto mb-5 flex items-center justify-center font-serif text-3xl text-white border-4 border-white/30 shadow-inner"
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-cream font-semibold uppercase tracking-wide text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-white/90 leading-relaxed flex-grow">
                    {member.bio}
                  </p>
                  {index === 0 && (
                    <p className="text-xs text-cream font-semibold uppercase tracking-wide mt-4 pt-4 border-t border-white/20">Founder &amp;&nbsp;Care&nbsp;Director</p>
                  )}
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Family Philosophy Section */}
      <section className="py-20 px-6 bg-terracotta-deep">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
                  A Place Where Families Belong
                </h2>
                <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                  <p>
                    Our door is always open. For morning coffee. For dinner. For no reason at all. Your parent&rsquo;s home is your home. Your pace is yours.
                  </p>
                  <p>
                    We keep families informed about what matters. We welcome your visits and your questions. You decide how involved you want to be. There is no right amount. We meet you where you&nbsp;are.
                  </p>
                  <p>
                    Your parent is not just being cared for. Your parent is being loved. And you are never an intrusion. You belong&nbsp;here.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80&auto=format&fit=crop"
                  alt="Bright and welcoming living room with natural light and comfortable seating"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6 leading-tight">
              Come See It for&nbsp;Yourself
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg sm:text-xl text-ink-soft mb-10 leading-relaxed">
              The best way to know if we are right for your family is to walk through our door. See the home. Meet the team. Feel the&nbsp;difference.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex justify-center">
              <ScheduleVisitButton surface="on-white" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-sm text-forest/60 mt-10">
              Licensed. Bonded. Insured. No surprises, no hidden fees, no excuses.
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
                name: 'About Us',
                item: 'https://burienbestcarehome.com/about',
              },
            ],
          }),
        }}
      />
    </>
  )
}
