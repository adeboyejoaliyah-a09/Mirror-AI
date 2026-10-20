import { CLAIM_STATUS_META, type ClaimStatus } from '../../lib/claimStatus'

interface StatusBadgeProps {
  status: ClaimStatus
  className?: string
}

/**
 * Status pill: icon + readable label + color.
 * Meaning never depends on color alone — the label is always present.
 */
export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const meta = CLAIM_STATUS_META[status]
  const Icon = meta.icon

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium whitespace-nowrap ${meta.badgeClass} ${className}`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {meta.label}
    </span>
  )
}
