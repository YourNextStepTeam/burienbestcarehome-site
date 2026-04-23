interface GlassCardProps {
  children: React.ReactNode
  className?: string
  /**
   * Card surface treatment. Phase E is deliberately Apple-marketing minimalist:
   * one clean card style site-wide, with glass reserved for moments that
   * actually sit over photography (the hero).
   *
   *   - solid (default): warm off-white card, hairline ink border, soft slate shadow.
   *     This is the card pattern used EVERYWHERE except the hero.
   *   - glass: true frosted glass — backdrop-blur over photography. Hero only.
   *   - white, tinted: legacy names. Both now alias to `solid` so old markup
   *     keeps rendering without visual regressions.
   */
  variant?: 'solid' | 'glass' | 'white' | 'tinted'
}

export default function GlassCard({
  children,
  className = '',
  variant = 'solid',
}: GlassCardProps) {
  let base: string
  let hover: string

  switch (variant) {
    case 'glass':
      // Real frosted glass — only use when there's photography or complex visual content behind the card
      base =
        'backdrop-blur-2xl backdrop-saturate-150 bg-white/35 border border-white/55 shadow-2xl ring-1 ring-white/20 text-ink'
      hover =
        'transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/45 hover:border-white/70'
      break
    case 'solid':
    case 'white':
    case 'tinted':
    default:
      base =
        'bg-[color:var(--color-bone)] border border-[rgba(45,62,74,0.08)] shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_10px_28px_-12px_rgba(45,62,74,0.16),0_2px_6px_rgba(45,62,74,0.05)] text-ink'
      hover =
        'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_22px_44px_-14px_rgba(45,62,74,0.24),0_4px_10px_rgba(45,62,74,0.07)] hover:border-[rgba(45,62,74,0.14)]'
  }

  return (
    <div className={`${base} ${hover} rounded-2xl ${className}`}>
      {children}
    </div>
  )
}
