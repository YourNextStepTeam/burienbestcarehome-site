'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(false)
      return
    }

    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [prefersReducedMotion])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="status"
          aria-label="Loading page"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-cream z-50 flex flex-col items-center justify-center"
        >
          <div className="text-center space-y-4">
            <div
              aria-hidden="true"
              className="font-serif text-5xl md:text-6xl text-sage font-bold"
            >
              Burien Best Care Home
            </div>
            <p aria-hidden="true" className="font-serif text-xl md:text-2xl text-sage/70">
              Where Family Feels Like Home
            </p>
            <span className="sr-only">Loading Burien Best Care Home</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
