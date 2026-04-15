import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import ScheduleVisitButton from '@/components/ScheduleVisitButton'

export const metadata: Metadata = {
  title: 'Next Steps | Burien Best Care Home',
  description:
    'What to expect after you decide Burien Best Care Home is the right fit for your family. A clear, unhurried path from first visit to move-in.',
  alternates: {
    canonical: '/next-steps',
  },
  openGraph: {
    title: 'Next Steps | Burien Best Care Home',
    description:
      'What to expect after you decide Burien Best Care Home is the right fit for your family.',
    url: 'https://burienbestcarehome.com/next-steps',
    type: 'website',
  },
}

export default function NextSteps() {
  return (
    <>
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
            A clear path,&nbsp;<span className="text-sage italic">at your pace</span>.
          </h1>
          <p className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto drop-shadow">
            Once a visit feels right, this is what working together looks like. No rush, no surprises.
          </p>
        </div>
      </section>

      {/* Placeholder body — content to be moved from Contact in a later pass */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="uppercase tracking-widest text-sm font-semibold text-sage mb-3">Coming Soon</p>
            <h2 className="font-serif text-3xl md:text-4xl text-forest leading-tight mb-6">
              The Path Forward
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto mb-10">
              This page will walk you through what happens after your visit: the care plan conversation, move-in preparation, and the rhythm of life once your parent is with us. We&rsquo;re still shaping this section so it reflects the real experience of the families we serve.
            </p>
            <ScheduleVisitButton surface="on-white" />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
