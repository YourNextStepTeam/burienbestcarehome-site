interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`backdrop-blur-xl bg-cream/70 border border-sage/20 rounded-2xl shadow-lg ${className}`}
    >
      {children}
    </div>
  )
}
