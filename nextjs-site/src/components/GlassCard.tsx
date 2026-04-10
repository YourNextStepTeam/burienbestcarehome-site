interface GlassCardProps {
  children: React.ReactNode
  className?: string
  /**
   * When true, use a solid white background instead of the default tinted cream glass.
   * Useful on sections where the card needs to visually "pop" off a cream-colored background.
   */
  variant?: 'glass' | 'white'
}

export default function GlassCard({
  children,
  className = '',
  variant = 'glass',
}: GlassCardProps) {
  const base = variant === 'white'
    ? 'bg-white border border-sage/15 shadow-lg'
    : 'backdrop-blur-xl bg-cream/70 border border-sage/20 shadow-lg'

  // Hover treatment: subtle lift, stronger border, gentle sage glow.
  const hover =
    'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:border-sage/50 hover:ring-2 hover:ring-sage/20'

  return (
    <div className={`${base} ${hover} rounded-2xl ${className}`}>
      {children}
    </div>
  )
}
