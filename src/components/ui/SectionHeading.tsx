import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-2xl text-center' : ''} ${className}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.18em] text-accent-hover uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-2xl leading-tight sm:text-3xl lg:text-[2.25rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed text-ink-soft sm:text-[1.0625rem] ${
            centered ? 'mx-auto max-w-xl' : 'max-w-2xl'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
