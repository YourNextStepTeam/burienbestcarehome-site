import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import GlassCard from '@/components/GlassCard'
import Link from 'next/link'

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
      name: 'Becca Pitts',
      role: 'Owner & Care Director',
      bio: 'Founded the home after 20+ years in senior care. She has been where you are right now, helping her own family navigate this decision. She knows the exhaustion of trying to find a place that feels like home, not a facility. She built this because she wished it existed for her family.',
    },
    {
      name: 'Mary Johnson',
      role: 'Lead Caregiver',
      bio: '12+ years specializing in memory care. Families trust her instincts and her gentle way with residents. She knows the difference between managing someone and truly seeing them. That difference shows up in every interaction.',
    },
    {
      name: 'James Rivera',
      role: 'Caregiver & Activities Coordinator',
      bio: 'Believes every day should have purpose and joy. Creates moments that families talk about for years. He knows that your parent is not just a care case. They are still the person you love, and they deserve days that feel like living, not just surviving.',
    },
  ]

  const promises = [
    {
      title: 'Your parent\'s dignity comes first',
      description: 'We never rush, never talk down, never treat care as a checklist. Your parent is not a task. They are a person with a lifetime of stories and wisdom.',
    },
    {
      title: 'You are always part of the team',
      description: 'Open communication, welcome visits, your input shapes their care. This is partnership. You do not step back. You step in.',
    },
    {
      title: 'Small by design, not by accident',
      description: 'Six residents maximum. Because real care requires real attention. We say no to growth so we can say yes to each person.',
    },
    {
      title: 'We do what we say',
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
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-forest/75 via-forest/55 to-forest/80" />
        <div className="relative z-10 text-center px-4 sm:px-6 py-20 md:py-24 max-w-3xl">
          <h1
            id="about-hero-headline"
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight"
          >
            We Built This Home Because Your Family Deserves Better
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-cream leading-relaxed">
            After 20 years in senior care, we saw the same story over and over. Families forced to choose between institutions that felt cold and staying home until a crisis. We built Burien Best Care Home to give families a third option.
          </p>
        </div>
      </section>

      {/* Our Why Section (The Guide's Backstory) */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-12 text-center">
              Why This Home Exists
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6 text-lg text-forest leading-relaxed">
              <p>
                Becca saw families struggling. She watched loved ones fade in large facilities where they were room numbers, not people. She watched families torn between guilt and exhaustion. And she decided to create something different.
              </p>
              <p>
                Not a facility. A home. A place where six residents are treated like family, where caregivers know every person's story, and where families find the peace of mind they have been searching for.
              </p>
              <p>
                This is what happens when someone who has walked this road with their own family says, "I can do this better." When they build not for profit margins, but for people. When they understand that you are not just looking for a place to put your parent. You are looking for a place where your parent can keep living, and where you can stop carrying this alone.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Promises Section (Outcomes, not features) */}
      <section className="py-20 px-6 bg-sage-light">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-16 text-center">
              Our Promises to Your Family
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promises.map((promise, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard className="p-8 h-full hover:shadow-xl transition-shadow">
                  <h3 className="font-serif text-2xl text-forest mb-4">
                    {promise.title}
                  </h3>
                  <p className="text-forest text-lg leading-relaxed">
                    {promise.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Guides, not just staff) */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6 text-center">
              The People Walking This Road With You
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-center text-lg text-forest max-w-2xl mx-auto mb-16">
              Our team does not just provide care. They become part of your family's story.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <GlassCard className="p-8 flex flex-col h-full">
                  <h3 className="font-serif text-2xl text-forest mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sage font-semibold mb-4 text-lg">
                    {member.role}
                  </p>
                  <p className="text-forest leading-relaxed flex-grow">
                    {member.bio}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Family Philosophy Section */}
      <section className="py-20 px-6 bg-sage-light">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-forest mb-8">
                  A Place Where Families Belong
                </h2>
                <div className="space-y-6 text-lg text-forest leading-relaxed">
                  <p>
                    We want you here. For morning coffee. For dinner. For no reason at all. This is your parent's home, and by extension, it's yours.
                  </p>
                  <p>
                    You do not hand off your parent at the door. You walk in whenever you need to. You are part of every decision. You know your parent is not just being cared for. Your parent is being loved.
                  </p>
                  <p>
                    Open doors are not a policy at Burien Best Care Home. They are a promise. Your presence matters. Your voice matters. Your parent's connection to you matters more than any schedule or routine.
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
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-8">
              Come See It for Yourself
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg text-forest mb-12">
              The best way to know if we are right for your family is to walk through our door. See the home. Meet the team. Feel the difference.
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
                href="/contact"
                className="btn btn-secondary px-8 py-4 rounded-full font-semibold text-lg inline-block"
              >
                Download Our Family Guide
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-sm text-forest mt-8">
              Licensed + Bonded + Insured. No surprises, no hidden fees, no excuses.
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
