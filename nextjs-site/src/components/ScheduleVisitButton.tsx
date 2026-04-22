import Link from 'next/link';

type Surface = 'on-dark' | 'on-white' | 'on-terracotta' | 'on-sage-light';

interface ScheduleVisitButtonProps {
  /**
   * The background color the button is sitting on. This drives the outline
   * and text color so the button is always visible.
   *   - on-dark: use inside a glass panel over a hero photo -> white outline
   *   - on-white: use over white/cream section bg -> terracotta-deep outline
   *   - on-terracotta: use over a terracotta section bg -> white outline
   *   - on-sage-light: use over pale sage section bg -> forest outline
   */
  surface?: Surface;
  /** Override the destination if needed. Defaults to the visit form anchor on the contact page. */
  href?: string;
  /** Override the button label. Defaults to "Schedule a Visit". */
  label?: string;
  /** Make the button take the full width of its container. */
  fullWidth?: boolean;
  /** Optional extra classes (layout / spacing). */
  className?: string;
}

const styles: Record<Surface, string> = {
  'on-dark':
    'bg-[color:var(--color-sunshine)] border-[color:var(--color-sunshine)] text-[color:var(--color-ink)] hover:bg-[color:var(--color-sunshine-deep)] hover:border-[color:var(--color-sunshine-deep)] focus-visible:ring-[color:var(--color-sunshine)]/60 focus-visible:ring-offset-transparent',
  'on-white':
    'bg-[color:var(--color-sunshine)] border-[color:var(--color-sunshine)] text-[color:var(--color-ink)] hover:bg-[color:var(--color-sunshine-deep)] hover:border-[color:var(--color-sunshine-deep)] focus-visible:ring-[color:var(--color-sunshine)]/50 focus-visible:ring-offset-white',
  'on-terracotta':
    'bg-[color:var(--color-slate)] border-[color:var(--color-slate)] text-white hover:bg-[color:var(--color-ink)] hover:border-[color:var(--color-ink)] focus-visible:ring-[color:var(--color-slate)]/40 focus-visible:ring-offset-[color:var(--color-bone)]',
  'on-sage-light':
    'bg-[color:var(--color-sunshine)] border-[color:var(--color-sunshine)] text-[color:var(--color-ink)] hover:bg-[color:var(--color-sunshine-deep)] hover:border-[color:var(--color-sunshine-deep)] focus-visible:ring-[color:var(--color-sunshine)]/50 focus-visible:ring-offset-[color:var(--color-bone)]',
};

export default function ScheduleVisitButton({
  surface = 'on-white',
  href = '/contact#visit-form',
  label = 'Schedule a Visit',
  fullWidth = false,
  className = '',
}: ScheduleVisitButtonProps) {
  const base =
    'inline-flex items-center justify-center min-h-12 px-8 py-4 border-2 font-semibold rounded-lg transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2';

  return (
    <Link
      href={href}
      className={`${base} ${styles[surface]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {label}
    </Link>
  );
}
