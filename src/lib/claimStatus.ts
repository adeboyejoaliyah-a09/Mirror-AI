import {
  CircleCheck,
  CircleDotDashed,
  CircleMinus,
  CircleQuestionMark,
  CircleX,
  Clock,
  TriangleAlert,
  type LucideIcon,
} from 'lucide-react'

export type ClaimStatus =
  | 'supported'
  | 'partially_supported'
  | 'contradicted'
  | 'outdated'
  | 'insufficient_evidence'
  | 'not_assessed'
  | 'verification_failed'

export type ScoreTreatment = 'eligible' | 'conditional' | 'excluded'

export interface ClaimStatusMeta {
  /** Human-readable label — always shown alongside the icon. */
  label: string
  description: string
  icon: LucideIcon
  /**
   * Complete class strings (not concatenated fragments) so Tailwind's
   * static scanner can detect every utility.
   */
  badgeClass: string
  scoreTreatment: ScoreTreatment
  scoreNote: string
}

export const CLAIM_STATUS_META: Record<ClaimStatus, ClaimStatusMeta> = {
  supported: {
    label: 'Supported',
    description: 'The available evidence aligns with the claim as stated.',
    icon: CircleCheck,
    badgeClass:
      'border-status-supported/30 bg-status-supported/10 text-status-supported',
    scoreTreatment: 'eligible',
    scoreNote: 'Counts toward reliability · weight 1.0',
  },
  partially_supported: {
    label: 'Partially supported',
    description:
      'The evidence supports part of the claim, but its scope or wording needs qualification.',
    icon: CircleDotDashed,
    badgeClass:
      'border-status-partial/30 bg-status-partial/10 text-status-partial',
    scoreTreatment: 'eligible',
    scoreNote: 'Counts toward reliability · weight 0.5',
  },
  contradicted: {
    label: 'Contradicted',
    description: 'The available evidence conflicts with the claim.',
    icon: CircleX,
    badgeClass:
      'border-status-contradicted/30 bg-status-contradicted/10 text-status-contradicted',
    scoreTreatment: 'eligible',
    scoreNote: 'Counts toward reliability · weight 0.0',
  },
  outdated: {
    label: 'Outdated',
    description:
      'The claim rests on information that is no longer current, so its present-day validity is in question.',
    icon: Clock,
    badgeClass:
      'border-status-outdated/30 bg-status-outdated/10 text-status-outdated',
    scoreTreatment: 'conditional',
    scoreNote:
      'Contributes only when present-day validity is defensibly assessed under the agreed scoring rules',
  },
  insufficient_evidence: {
    label: 'Insufficient evidence',
    description:
      'There was not enough accessible evidence to assess the claim in either direction.',
    icon: CircleQuestionMark,
    badgeClass:
      'border-status-insufficient/30 bg-status-insufficient/10 text-status-insufficient',
    scoreTreatment: 'excluded',
    scoreNote: 'Excluded from the reliability score',
  },
  not_assessed: {
    label: 'Not assessed',
    description:
      'The claim was identified as factual but was not evaluated in this run.',
    icon: CircleMinus,
    badgeClass:
      'border-status-not-assessed/30 bg-status-not-assessed/10 text-status-not-assessed',
    scoreTreatment: 'excluded',
    scoreNote: 'Excluded from the reliability score',
  },
  verification_failed: {
    label: 'Verification failed',
    description:
      'The verification step itself hit a technical problem. This is a system failure, never a factual contradiction.',
    icon: TriangleAlert,
    badgeClass:
      'border-status-failed/30 bg-status-failed/10 text-status-failed',
    scoreTreatment: 'excluded',
    scoreNote: 'Excluded from the reliability score',
  },
}

export const CLAIM_STATUSES = Object.keys(
  CLAIM_STATUS_META,
) as ClaimStatus[]
