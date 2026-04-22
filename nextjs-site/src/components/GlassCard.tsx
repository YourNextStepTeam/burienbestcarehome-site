interface GlassCardProps {
  children: React.ReactNode
  className?: string
  /**
   * Card surface treatment.
   *   - glass: default translucent bone-white glass with slate border (macOS-like).
   *            Sits on the body gradient and picks up warmth from it.
   *   - white: opaque bone-white card. Use when translucency is undesirable
   *            (e.g. over busy photography).
   *   - tinted: subtle moss-tinted glass — used for secondary content or to
   *             differentiate a cluster of cards from a plain-glass neighbor.
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
        'backdrop-blur-xl backdrop-saturate-150 bg-[rgba(216,226,213,0.48)] border border-[color:rgba(90,110,88,0.22)] shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_14px_32px_-14px_rgba(45,62,74,0.15)] text-ink'
      hover =
        'transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[rgba(216,226,213,0.58)] hover:border-[color:rgba(90,110,88,0.4)]'
      break
    case 'glass':
    default:
      base =
        'backdrop-blur-xl backdrop-saturate-150 bg-[rgba(253,251,247,0.62)] border border-[color:rgba(45,62,74,0.12)] shadow-[0_1px_0_rgba(255,255,255,0.55)_inset,0_20px_40px_-16px_rgba(45,62,74,0.15),0_2px_8px_rgba(45,62,74,0.05)] text-ink'
      hover =
        'transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[rgba(253,251,247,0.78)] hover:border-[color:rgba(45,62,74,0.2)] hover:shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_28px_52px_-16px_rgba(45,62,74,0.22),0_4px_12px_rgba(45,62,74,0.08)]'
  }

  return (
    <div className={`${base} ${hover} rounded-2xl ${className}`}>
      {children}
    </div>
  )
}
