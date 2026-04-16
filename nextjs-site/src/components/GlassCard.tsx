interface GlassCardProps {
  children: React.ReactNode
  className?: string
  /**
   * Card surface treatment.
   *   - glass: default tinted cream glass with sage border
   *   - white: solid white card (use on terracotta-light sections)
   *   - terracotta: soft terracotta-light card with dark text (use on white sections)
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
      base = 'bg-terracotta-light border border-terracotta/20 shadow-lg text-forest'
      hover =
        'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:border-terracotta/40 hover:ring-2 hover:ring-terracotta/15'
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
