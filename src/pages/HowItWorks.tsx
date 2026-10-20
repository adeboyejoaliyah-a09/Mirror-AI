import { ArrowRight, Info, Scale, SearchX, Wrench } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { StatusBadge } from '../components/ui/StatusBadge'
import { usePageMetadata } from '../hooks/usePageMetadata'
import {
  CLAIM_STATUS_META,
  CLAIM_STATUSES,
  type ClaimStatus,
} from '../lib/claimStatus'

const PROCESS_STEPS = [
  {
    title: 'Submit an AI-generated answer',
    body: 'The answer is stored exactly as written and treated as the original. Nothing downstream is allowed to edit it.',
    outcome: 'A preserved original to verify against.',
  },
  {
    title: 'Extract individual factual claims',
    body: 'The answer is decomposed into factual statements. Opinion and instruction are separated from claims that can actually be checked.',
    outcome: 'A list of checkable claims.',
  },
  {
    title: 'Retrieve and assess relevant evidence',
    body: 'MirroirAI works with evidence it can actually access, records where access was limited, and weighs that evidence against each claim.',
    outcome: 'Evidence attached to every assessed claim.',
  },
  {
    title: 'Classify each claim and explain the result',
    body: 'Every claim receives one of seven statuses with a short explanation — distinguishing contradicted from unproven, stale, or untested.',
    outcome: 'A status and a reason, per claim.',
  },
  {
    title: 'Review the report and its limitations',
    body: 'The report shows statuses, evidence notes, reliability, and coverage — alongside an explicit account of what was not assessed.',
    outcome: 'A report you can challenge line by line.',
  },
] as const

const GUARDRAILS = [
  {
    icon: Scale,
    title: 'Reliability is not a truth probability',
    body: 'The score summarizes how eligible claims resolved. It is not a statement about the chance that the whole answer is true.',
  },
  {
    icon: SearchX,
    title: 'Missing evidence is not a verdict',
    body: 'When evidence is unavailable, the claim stays uncertain. Lack of proof never becomes proof of falsehood.',
  },
  {
    icon: Wrench,
    title: 'Technical failure is not contradiction',
    body: 'If a verification step errors, the report says verification failed. An outage is never dressed up as a factual finding.',
  },
] as const

const TREATMENT_LABEL: Record<ClaimStatus, string> = {
  supported: 'Eligible for reliability',
  partially_supported: 'Eligible for reliability',
  contradicted: 'Eligible for reliability',
  outdated: 'Conditional contribution',
  insufficient_evidence: 'Excluded from reliability',
  not_assessed: 'Excluded from reliability',
  verification_failed: 'Excluded from reliability',
}

export default function HowItWorks() {
  usePageMetadata(
    'How It Works — MirroirAI',
    'How MirroirAI verifies AI answers: submit, extract claims, assess evidence, classify every claim with one of seven statuses, and review the report — including reliability score and evidence coverage.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(ellipse_55%_60%_at_50%_0%,rgba(170,59,255,0.13),transparent_70%)]"
        />
        <div className="container-site relative pt-16 pb-14 md:pt-20 md:pb-16">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent-hover uppercase">
            How it works
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem]">
            From a single answer to a claim-by-claim report.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Five steps from submission to review, the seven statuses a claim can
            hold, and the difference between a reliability score and evidence
            coverage.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="The process"
            title="Five steps, each with a defined outcome"
            className="mb-10 md:mb-12"
          />
          <ol className="flex flex-col gap-7 md:gap-9">
            {PROCESS_STEPS.map((step, index, steps) => (
              <li key={step.title} className="flex gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-accent/40 bg-surface-2 text-sm font-semibold text-accent-hover">
                    {index + 1}
                  </span>
                  {index < steps.length - 1 ? (
                    <span aria-hidden="true" className="mt-2 w-px flex-1 bg-line" />
                  ) : null}
                </div>
                <div className="min-w-0 flex-1 pb-1">
                  <h3 className="text-lg font-semibold sm:text-xl">{step.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft sm:text-base">
                    {step.body}
                  </p>
                  <p className="mt-2.5 text-xs font-medium tracking-wide text-ink-muted uppercase">
                    Outcome — {step.outcome}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Statuses */}
      <section
        id="statuses"
        className="scroll-mt-24 border-y border-line bg-surface-1 py-16 md:py-20"
      >
        <div className="container-site">
          <SectionHeading
            eyebrow="Claim statuses"
            title="Seven outcomes, honestly named"
            description="Each claim ends in exactly one status. The labels separate what contradicts an answer from what merely couldn't be verified — a distinction that matters more than any score."
            className="mb-10 md:mb-12"
          />

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CLAIM_STATUSES.map((status) => {
              const meta = CLAIM_STATUS_META[status]
              return (
                <li key={status} className="h-full">
                  <Card className="flex h-full flex-col p-5">
                    <StatusBadge status={status} />
                    <p className="mt-3.5 flex-1 text-sm leading-relaxed text-ink-soft">
                      {meta.description}
                    </p>
                    <div className="mt-4 border-t border-line pt-3">
                      <p className="text-[0.6875rem] font-semibold tracking-wide text-ink-muted uppercase">
                        {TREATMENT_LABEL[status]}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                        {meta.scoreNote}
                      </p>
                    </div>
                  </Card>
                </li>
              )
            })}
          </ul>

          <p className="mt-6 inline-flex items-start gap-2 text-sm leading-relaxed text-ink-muted">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            Color is never the only signal: every status pairs its color with an
            icon and a readable label.
          </p>
        </div>
      </section>

      {/* Scoring */}
      <section
        id="scoring"
        className="scroll-mt-24 py-16 md:py-20"
      >
        <div className="container-site">
          <SectionHeading
            eyebrow="Reading the numbers"
            title="Reliability score vs. evidence coverage"
            description="Two different measurements that answer two different questions. Neither is a truth percentage."
            className="mb-10 md:mb-12"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6 sm:p-7">
              <h3 className="text-lg font-semibold sm:text-xl">Reliability score</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                The mean of eligible claim weights, multiplied by 100. It
                summarizes how the claims that were assessed resolved — nothing
                more.
              </p>

              <dl className="mt-5 divide-y divide-line rounded-xl border border-line bg-surface-1">
                {[
                  { label: 'Supported', weight: '1.0' },
                  { label: 'Partially supported', weight: '0.5' },
                  { label: 'Contradicted', weight: '0.0' },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between px-4 py-3"
                  >
                    <dt className="text-sm text-ink">{row.label}</dt>
                    <dd className="text-sm font-semibold text-ink-soft tabular-nums">
                      {row.weight}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                <p>
                  <span className="font-medium text-ink">Outdated claims</span>{' '}
                  contribute only when present-day validity has been defensibly
                  assessed under the agreed scoring rules; no weight is asserted
                  for them here.
                </p>
                <p>
                  <span className="font-medium text-ink">Insufficient evidence</span>,{' '}
                  <span className="font-medium text-ink">not assessed</span>, and{' '}
                  <span className="font-medium text-ink">verification failed</span>{' '}
                  are excluded from the calculation entirely.
                </p>
                <p className="rounded-xl border border-accent/30 bg-accent/[0.07] p-4 text-ink">
                  If no claims are eligible, the report reads{' '}
                  <span className="font-semibold">
                    &ldquo;Not enough evidence to calculate a score&rdquo;
                  </span>{' '}
                  — never 0%.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-7">
              <h3 className="text-lg font-semibold sm:text-xl">Evidence coverage</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                How much of the answer was actually examined — whether its claims
                had accessible evidence to assess them against. Coverage measures
                reach, not outcomes.
              </p>

              <div className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
                <p>
                  Coverage and reliability move independently. An answer can be
                  heavily covered and still unreliable, or lightly covered with
                  every eligible claim supported — which is exactly why both
                  numbers appear side by side.
                </p>
                <p>
                  When an answer contains{' '}
                  <span className="font-medium text-ink">no factual claims</span>,
                  coverage is{' '}
                  <span className="font-medium text-ink">Not Applicable</span> —
                  there is nothing to examine, and a zero would be a lie.
                </p>
                <p className="rounded-xl border border-line bg-surface-1 p-4 text-ink">
                  Coverage answers{' '}
                  <span className="font-semibold">
                    &ldquo;how much was looked at?&rdquo;
                  </span>{' '}
                  Reliability answers{' '}
                  <span className="font-semibold">
                    &ldquo;how did the examined claims resolve?&rdquo;
                  </span>
                </p>
              </div>
            </Card>
          </div>

          {/* Guardrails */}
          <div className="mt-4 rounded-card border border-line bg-surface-1 p-6 sm:p-7">
            <h3 className="text-base font-semibold">Three rules the product never bends</h3>
            <ul className="mt-5 grid gap-5 sm:grid-cols-3">
              {GUARDRAILS.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.title} className="flex gap-3.5">
                    <span className="mt-0.5 inline-flex shrink-0">
                      <Icon className="h-5 w-5 text-accent-hover" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-ink">{item.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                        {item.body}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-16 md:py-20">
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl leading-tight sm:text-3xl">
              See the report this process produces
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              The homepage carries an illustrative verification report — claims,
              statuses, and the preserved original in one view.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/#preview">
              View report preview
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button variant="secondary" to="/about">
              About MirroirAI
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
