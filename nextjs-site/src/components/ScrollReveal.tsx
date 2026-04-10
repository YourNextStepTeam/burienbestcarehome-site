'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
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

  const getInitialState = () => {
    const baseState = { opacity: 0 }
    if (prefersReducedMotion) {
      return { opacity: 1 }
    }

    switch (direction) {
      case 'up':
        return { ...baseState, y: 30 }
      case 'down':
        return { ...baseState, y: -30 }
      case 'left':
        return { ...baseState, x: 30 }
      case 'right':
        return { ...baseState, x: -30 }
      default:
        return baseState
    }
  }

  const getFinalState = () => {
    if (prefersReducedMotion) {
      return { opacity: 1 }
    }

    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 }
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 }
      default:
        return { opacity: 1 }
    }
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={getInitialState()}
      whileInView={getFinalState()}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
