interface GlassCardProps {
  children: React.ReactNode
  className?: string
  /**
   * Card surface treatment.
   *   - glass: default tinted cream glass with sage border (use on white or photo sections)
   *   - white: solid white card (use on terracotta sections so it pops)
   *   - terracotta: solid terracotta-deep card with white text (use on white sections so it pops)
   */
  variant?: 'glass' | 'white' | 'terracotta'
}

export default function GlassCard({
  children,
  className = '',
  variant = 'glass',
}: GlassCardProps) {
  let base: string
  let hover: string

  switch (variant) {
    case 'white':
      base = 'bg-white border border-sage/15 shadow-lg text-ink'
      hover =
        'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:border-sage/50 hover:ring-2 hover:ring-sage/20'
      break
    case 'terracotta':
      base = 'bg-terracotta-deep border border-terracotta/40 shadow-lg text-white'
      hover =
        'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:border-white/40 hover:ring-2 hover:ring-white/20'
      break
    case 'glass':
    default:
      base =
        'backdrop-blur-xl bg-cream/70 border border-sage/20 shadow-lg text-ink'
      hover =
        'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:border-sage/50 hover:ring-2 hover:ring-sage/20'
  }

  return (
    <div className={`${base} ${hover} rounded-2xl ${className}`}>
      {children}
    </div>
  )
}
