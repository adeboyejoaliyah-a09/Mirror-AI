import { FileText, Lock } from 'lucide-react'
import type { ClaimStatus } from '../lib/claimStatus'
import { Badge } from './ui/Badge'
import { StatusBadge } from './ui/StatusBadge'

interface ExampleClaim {
  text: string
  status: ClaimStatus
  note: string
}

const EXAMPLE_ANSWER =
  'Solar panels convert sunlight into electricity through photovoltaic cells, and panel efficiency has risen steadily over the last ten years. Rooftop solar now supplies the majority of electricity in most developed countries. In most markets, residential systems pay for themselves within two years.'

const EXAMPLE_CLAIMS: ExampleClaim[] = [
  {
    text: 'Solar panels convert sunlight into electricity through photovoltaic cells.',
    status: 'supported',
    note: 'Consistent with the evidence reviewed for this example.',
  },
  {
    text: 'Panel efficiency has risen steadily over the last ten years.',
    status: 'partially_supported',
    note: 'Broadly supported, but the scope of the claim needs qualification.',
  },
  {
    text: 'Rooftop solar supplies the majority of electricity in most developed countries.',
    status: 'contradicted',
    note: 'Conflicts with the evidence reviewed for this example.',
  },
  {
    text: 'Most residential systems pay for themselves within two years.',
    status: 'insufficient_evidence',
    note: 'Not enough accessible evidence to assess this claim either way.',
  },
]

export function ReportPreview() {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-line bg-surface-1 shadow-[0_40px_80px_-48px_rgba(0,0,0,0.9)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-surface-2/70 px-5 py-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
              <FileText className="h-4 w-4 text-accent-hover" aria-hidden="true" />
              Verification report
            </span>
            <Badge>Illustrative example</Badge>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs text-ink-muted">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            Original preserved
          </span>
        </div>

        <div className="grid lg:grid-cols-2">
          <div className="border-b border-line p-5 sm:p-6 lg:border-r lg:border-b-0">
            <p className="text-xs font-semibold tracking-wide text-ink-muted uppercase">
              Submitted answer
            </p>
            <p className="mt-3 border-l-2 border-accent/50 pl-4 text-sm leading-relaxed text-ink-soft">
              {EXAMPLE_ANSWER}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-ink-muted">
              MirroirAI reports on this text — it never rewrites it.
            </p>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold tracking-wide text-ink-muted uppercase">
                Extracted claims
              </p>
              <span className="text-xs text-ink-muted">
                {EXAMPLE_CLAIMS.length} claims
              </span>
            </div>
            <ol className="mt-4 flex flex-col divide-y divide-line rounded-xl border border-line bg-surface-0/60">
              {EXAMPLE_CLAIMS.map((claim) => (
                <li
                  key={claim.text}
                  className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2.5 p-4"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm leading-snug text-ink">{claim.text}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                      {claim.note}
                    </p>
                  </div>
                  <StatusBadge status={claim.status} />
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line bg-surface-0/70 px-5 py-3.5 text-xs text-ink-soft sm:px-6">
          <span>4 claims extracted</span>
          <span aria-hidden="true" className="text-line">
            ·
          </span>
          <span>3 assessed</span>
          <span aria-hidden="true" className="text-line">
            ·
          </span>
          <span>1 without sufficient evidence</span>
          <span className="ml-auto text-ink-muted">Example data only</span>
        </div>
      </div>

      <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-relaxed text-ink-muted">
        Illustrative example. The claims, statuses, and evidence summaries shown
        here are fictional and do not represent a real verification result.
      </p>
    </div>
  )
}
