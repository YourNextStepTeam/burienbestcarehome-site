'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isReducedMotion ? 0 : 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isReducedMotion ? 0 : 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      aria-labelledby="hero-headline"
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Warm home background — replacing clinical imagery with a bright, welcoming interior */}
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop"
        alt=""
        role="presentation"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover"
      />

      {/* Layered gradient overlay — heavier base contrast so headline text carries on any photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-forest/80 via-forest/65 to-forest/85"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20"
      />

      {/* Content Container */}
      <motion.div
        className="relative z-10 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-24 sm:py-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Glassmorphism Panel — brand-tinted (forest to sage) for both legibility and on-brand feel */}
        <motion.div
          className="max-w-2xl w-full backdrop-blur-xl bg-gradient-to-br from-forest/65 via-forest/55 to-sage/50 border border-white/30 rounded-2xl p-6 sm:p-10 lg:p-14 shadow-2xl ring-1 ring-white/10"
          variants={itemVariants}
        >
          {/* Eyebrow label — bright cream accent bar + high-contrast chip so it reads on any photo */}
          <motion.p
            className="inline-flex items-center gap-3 text-white text-sm sm:text-base font-bold uppercase tracking-[0.15em] mb-6 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/25"
            variants={itemVariants}
          >
            <span aria-hidden="true" className="inline-block w-8 h-0.5 bg-cream" />
            <span>For Families Navigating Senior Care in Burien,&nbsp;WA</span>
          </motion.p>

          {/* Headline — "safety" and "peace" highlighted in cream to pull the eye to key words */}
          <motion.h1
            id="hero-headline"
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white mb-6 leading-[1.1] drop-shadow-lg"
            variants={itemVariants}
          >
            Your parent&rsquo;s <span className="text-cream italic">safety</span> shouldn&rsquo;t keep you up at&nbsp;night.
          </motion.h1>

          {/* Supporting Paragraph — meaningful line breaks that keep phrases intact */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-white mb-8 leading-relaxed drop-shadow"
            variants={itemVariants}
          >
            You&rsquo;ve noticed the changes. The small lapses. The worry in their voice when they&rsquo;re alone.
            We walk families through this decision with compassion and clarity, so you can finally exhale.
          </motion.p>

          {/* CTA Buttons — 48px+ touch targets */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            variants={itemVariants}
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-12 px-8 py-4 bg-sage text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:bg-forest hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-cream/60 focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
            >
              Schedule a Visit
            </Link>

            {/* Secondary/Transitional CTA */}
            <Link
              href="/contact#family-guide"
              className="inline-flex items-center justify-center min-h-12 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg bg-white/5 hover:bg-white/20 transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-cream/60 focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
            >
              Download Our Family Guide
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.ul
            aria-label="Trust signals"
            className="flex flex-wrap gap-x-5 gap-y-2 text-white/90 text-sm"
            variants={itemVariants}
          >
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="w-2 h-2 bg-sage rounded-full" />
              Licensed by WA State DSHS
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="w-2 h-2 bg-sage rounded-full" />
              24/7 Care
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="w-2 h-2 bg-sage rounded-full" />
              Max 6 Residents
            </li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
