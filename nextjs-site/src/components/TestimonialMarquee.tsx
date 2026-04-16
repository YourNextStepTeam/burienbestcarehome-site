'use client'

import { useState } from 'react'
import GlassCard from './GlassCard'

interface Testimonial {
  quote: string
  author: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'From the moment we walked in, we knew this was the right place for Mom. The care team treats her like their own family, and she has truly flourished here. She is happier, more engaged, and we have complete peace of mind knowing she is in such loving hands.',
    author: 'Sarah M., Daughter of Resident',
  },
  {
    quote:
      'Finding Burien Best Care Home was a blessing. After Dad\u2019s hospital stay, the transition was seamless. The staff communicated with us every step of the way, answered all our questions, and helped Dad feel comfortable and supported during a vulnerable time.',
    author: 'James T., Son of Resident',
  },
  {
    quote:
      'We searched for months, touring facility after facility. Nothing felt right until we found Burien Best Care Home. It actually feels like a home, not an institution. Our entire family feels confident that Grandma is getting the best possible care.',
    author: 'Linda R., Daughter of Resident',
  },
  {
    quote:
      'The difference between this place and the big facilities we toured is night and day. Here, Mom is a person, not a patient. The caregivers know her favorite music, her stories, her little preferences. That means everything to us.',
    author: 'Michael K., Son of Resident',
  },
  {
    quote:
      'I was terrified of making the wrong choice for Dad. Becca walked us through every question, never rushed us, and made us feel like family. Six months in, Dad is thriving and I\u2019m finally sleeping through the night.',
    author: 'Rebecca H., Daughter of Resident',
  },
]

export default function TestimonialMarquee() {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate the array so the CSS animation loops seamlessly
  const loop = [...testimonials, ...testimonials]

  return (
    <div
      className="relative overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Edge fade masks for polished marquee edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-terracotta-light/70 to-transparent z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-terracotta-light/70 to-transparent z-10"
      />

      <div
        className="flex gap-6 md:gap-8 marquee-track py-4"
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {loop.map((t, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[85vw] sm:w-[420px]"
            tabIndex={0}
          >
            <GlassCard variant="white" className="p-8 h-full flex flex-col min-h-[280px]">
              <p
                aria-hidden="true"
                className="text-5xl text-sage/30 font-serif leading-none mb-2"
              >
                &ldquo;
              </p>
              <p className="text-ink-soft leading-relaxed flex-grow italic">
                {t.quote}
              </p>
              <p className="text-forest font-semibold uppercase tracking-wide text-sm mt-6 pt-4 border-t border-sage/30">
                {t.author}
              </p>
            </GlassCard>
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
          width: max-content;
          animation: marquee 60s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
