'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <img
        src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200"
        alt="Peaceful senior care environment"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />

      {/* Content Container */}
      <motion.div
        className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Glassmorphism Panel */}
        <motion.div
          className="max-w-2xl w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl"
          variants={itemVariants}
        >
          {/* Label */}
          <motion.p
            className="text-sage-600 dark:text-sage-300 text-sm font-medium uppercase tracking-wide mb-4"
            variants={itemVariants}
          >
            For families navigating senior care in Burien, WA
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Your parent's safety shouldn't keep you up at night.
          </motion.h1>

          {/* Pain-Agitate-Solution Paragraph */}
          <motion.p
            className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            You've noticed the changes. The small lapses in memory. The worry in their voice when they're alone. And now you're facing the question every adult child dreads: what's the right move? What if you wait too long? What if you choose the wrong place and they're not truly happy, truly safe? We've helped dozens of families in Burien find peace of mind. We know this decision feels overwhelming, and we're here to walk you through it with compassion and clarity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            variants={itemVariants}
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="flex items-center justify-center px-8 py-3 sm:py-4 bg-sage-600 hover:bg-sage-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Visit
            </Link>

            {/* Secondary/Transitional CTA */}
            <button
              onClick={() => {
                // Placeholder for guide download functionality
                console.log('Download guide clicked');
              }}
              className="flex items-center justify-center px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              Download Our Family Guide
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap gap-4 sm:gap-6 text-white/80 text-sm justify-center"
            variants={itemVariants}
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-sage-400 rounded-full" />
              Licensed by WA State DSHS
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-sage-400 rounded-full" />
              24/7 Care
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-sage-400 rounded-full" />
              Max 6 Residents
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
