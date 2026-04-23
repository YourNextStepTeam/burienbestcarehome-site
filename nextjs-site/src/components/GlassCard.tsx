interface GlassCardProps {
  children: React.ReactNode
  className?: string
  /**
   * Card surface treatment.
   *   - glass: Apple-style frosted glass. 40% white fill + 200% saturation backdrop-blur.
   *            Needs a colored backdrop behind it to read as glass.
   *   - white: opaque bone-white card. Use when translucency is undesirable
   *            (e.g. over busy photography).
   *   - tinted: same frosted-glass formula as `glass`, slightly more transparent.
   *             Used to differentiate clusters of cards in the same section.
   */
  variant?: 'glass' | 'white' | 'tinted'
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
      base =
        'bg-[color:var(--color-bone)] border border-[color:var(--color-glass-border)] shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_12px_32px_-12px_rgba(45,62,74,0.18),0_2px_6px_rgba(45,62,74,0.06)] text-ink'
      hover =
        'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_24px_48px_-16px_rgba(45,62,74,0.28),0_4px_10px_rgba(45,62,74,0.08)] hover:border-[color:rgba(90,110,88,0.35)]'
      break
    case 'tinted':
      base =
        'backdrop-blur-2xl backdrop-saturate-200 bg-white/35 border border-white/60 shadow-[0_1px_0_rgba(255,255,255,0.85)_inset,0_22px_52px_-20px_rgba(45,62,74,0.28),0_2px_10px_rgba(45,62,74,0.08)] text-ink'
      hover =
        'transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/50 hover:border-white/80 hover:shadow-[0_1px_0_rgba(255,255,255,0.95)_inset,0_28px_60px_-20px_rgba(45,62,74,0.32),0_4px_14px_rgba(45,62,74,0.10)]'
      break
    case 'glass':
    default:
      base =
        'backdrop-blur-2xl backdrop-saturate-200 bg-white/40 border border-white/65 shadow-[0_1px_0_rgba(255,255,255,0.85)_inset,0_22px_52px_-20px_rgba(45,62,74,0.22),0_2px_10px_rgba(45,62,74,0.08)] text-ink'
      hover =
        'transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/55 hover:border-white/85 hover:shadow-[0_1px_0_rgba(255,255,255,0.95)_inset,0_30px_60px_-20px_rgba(45,62,74,0.28),0_4px_14px_rgba(45,62,74,0.10)]'
  }

  return (
    <div className={`${base} ${hover} rounded-2xl ${className}`}>
      {children}
    </div>
  )
}
