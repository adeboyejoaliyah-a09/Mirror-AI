import type { ReactNode } from 'react'

interface BadgeProps {
  className?: string
  children: ReactNode
}

/** Neutral pill for metadata such as "Illustrative example". */
export function Badge({ className = '', children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium text-ink-soft ${className}`}
    >
      {children}
    </span>
  )
}
