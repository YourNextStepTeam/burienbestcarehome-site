'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScheduleVisitButton from './ScheduleVisitButton';

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
      {/* Actual photo of Burien Best Care Home */}
      <Image
        src="/hero-home.jpg"
        alt="Burien Best Care Home, a welcoming gray craftsman-style adult family home with a covered porch"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover"
      />

      {/*
         Minimal vignette — just enough to ground the centered glass panel without
         dulling the home photo. No more full-frame slate overlay.
       */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
      />

      {/* Content Container */}
      <motion.div
        className="relative z-10 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-24 sm:py-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* True frosted glass — backdrop blur over the photo, subtle warm bone tint, bright border to catch the light. Photo warmth comes THROUGH the panel. */}
        <motion.div
          className="max-w-2xl w-full backdrop-blur-2xl backdrop-saturate-150 bg-[rgba(253,251,247,0.32)] border border-white/55 rounded-2xl p-6 sm:p-10 lg:p-14 shadow-2xl ring-1 ring-white/20"
          variants={itemVariants}
        >
          {/* Eyebrow — plain text, centered so left/right padding inside the glass panel is equal */}
          <motion.p
            className="text-[color:var(--color-slate-soft)] text-[11px] sm:text-xs lg:text-sm font-semibold uppercase tracking-[0.18em] mb-5 text-center text-balance max-w-[34ch] mx-auto"
            variants={itemVariants}
          >
            For families in Burien, Kent, Renton &amp; across King County
          </motion.p>

          {/* Headline — "safety" highlighted in brand sage; intentional break for breathing room */}
          <motion.h1
            id="hero-headline"
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[color:var(--color-ink)] mb-6 leading-[1.1]"
            variants={itemVariants}
          >
            Your parent&rsquo;s <span className="italic font-semibold text-[color:var(--color-sunshine-deep)]">safety</span>
            <br />
            shouldn&rsquo;t keep you up at&nbsp;night.
          </motion.h1>

          {/* Supporting Paragraph — promise of ongoing care, not just one decision */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-[color:var(--color-ink)] mb-8 leading-relaxed"
            variants={itemVariants}
          >
            You&rsquo;ve noticed the changes. Your parent needs more help than living alone can safely provide.
            Burien Best Care Home is a licensed adult family home where seniors receive 24/7 personalized support
            with daily living: meals, medication, bathing, dressing, and everything in between.
            Whether your loved one needs light assistance or around-the-clock care, we meet them exactly where they&nbsp;are.
          </motion.p>

          {/* CTA — single outlined "Schedule a Visit" button; stroke is white to contrast with the glass panel */}
          <motion.div
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <ScheduleVisitButton surface="on-white" />
          </motion.div>

          {/* Trust Badges */}
          <motion.ul
            aria-label="Trust signals"
            className="flex flex-wrap gap-x-5 gap-y-2 text-[color:var(--color-ink-soft)] text-sm"
            variants={itemVariants}
          >
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[color:var(--color-moss)]" />
              Licensed by WA State DSHS
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[color:var(--color-moss)]" />
              24/7 Care
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[color:var(--color-moss)]" />
              Max 8 Residents
            </li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
