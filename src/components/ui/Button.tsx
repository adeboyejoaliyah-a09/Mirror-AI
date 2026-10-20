import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-tight transition-colors duration-150'

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-accent-deep text-white hover:bg-accent shadow-[0_10px_30px_-16px_rgba(170,59,255,0.9)]',
  secondary:
    'border border-line bg-surface-2 text-ink hover:border-accent/40 hover:bg-surface-3',
  ghost: 'text-ink-soft hover:bg-white/[0.05] hover:text-ink',
}

const SIZES: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-[0.9375rem]',
  lg: 'h-12 px-6 text-base',
}

interface ButtonProps {
  variant?: Variant
  size?: Size
  /** Internal route — renders a React Router link (no full page reload). */
  to?: string
  /** External URL — renders a plain anchor. */
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  children: ReactNode
  'aria-label'?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  children,
  ...aria
}: ButtonProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  if (to !== undefined) {
    return (
      <Link to={to} className={classes} aria-label={aria['aria-label']}>
        {children}
      </Link>
    )
  }

  if (href !== undefined) {
    return (
      <a href={href} className={classes} aria-label={aria['aria-label']}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={aria['aria-label']}>
      {children}
    </button>
  )
}
