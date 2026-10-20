import { ArrowRight, CircleCheck, FileSearch, FileText, ListChecks, Scale } from 'lucide-react'
import { ReportPreview } from '../components/ReportPreview'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { StatusBadge } from '../components/ui/StatusBadge'
import { usePageMetadata } from '../hooks/usePageMetadata'

const FEATURES = [
  {
    icon: ListChecks,
    title: 'Claim extraction',
    body: 'An answer is split into individual factual claims, so each statement is judged on its own terms instead of inheriting the paragraph\'s confidence.',
  },
  {
    icon: FileSearch,
    title: 'Evidence assessment',
    body: 'Each claim is checked against accessible evidence, and the result points back to what was actually reviewed — not just a verdict.',
  },
  {
    icon: Scale,
    title: 'Status with a reason',
    body: 'Claims are classified into seven readable statuses that separate contradicted from merely unproven, outdated, or untested.',
  },
  {
    icon: FileText,
    title: 'Reports with limits',
    body: 'Every report states what was assessed and what was not, so you know where the analysis stops and your own judgment begins.',
  },
] as const

const WORKFLOW = [
  { step: '01', title: 'Submit', body: 'Paste an AI-generated answer.' },
  { step: '02', title: 'Extract claims', body: 'Split it into factual statements.' },
  { step: '03', title: 'Assess evidence', body: 'Gather what the evidence says.' },
  { step: '04', title: 'Classify', body: 'Assign each claim a status and a reason.' },
  { step: '05', title: 'Review', body: 'Read the report and its limitations.' },
] as const

const PRINCIPLES = [
  {
    title: 'Claim-level assessment',
    body: 'Reliability is judged one claim at a time — never as a single grade stamped across the whole answer.',
  },
  {
    title: 'Evidence transparency',
    body: 'Every status is anchored to evidence you can inspect, so conclusions can be questioned, not just consumed.',
  },
  {
    title: 'Visible uncertainty',
    body: 'Gaps stay gaps. Missing or partial evidence is reported as uncertainty rather than smoothed into confidence.',
  },
  {
    title: 'Original preserved',
    body: 'The submitted answer stays exactly as written. MirroirAI verifies it; it never silently rewrites it.',
  },
] as const

const PROBLEM_EXAMPLE = {
  answer:
    'Vitamin C supplements shorten the common cold, the daily allowance set in the 1950s still applies today, and most adults need eight glasses of water a day.',
  claims: [
    { text: 'Vitamin C shortens the common cold', status: 'partially_supported' as const },
    { text: 'The 1950s allowance still applies today', status: 'outdated' as const },
    { text: 'Eight glasses of water a day are required', status: 'insufficient_evidence' as const },
  ],
}

export default function Home() {
  usePageMetadata(
    'MirroirAI — See what the evidence supports',
    'MirroirAI breaks AI-generated answers into individual factual claims, assesses them against accessible evidence, and makes uncertainty visible — without rewriting your answer.',
  )

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(ellipse_55%_60%_at_50%_0%,rgba(170,59,255,0.15),transparent_70%)]"
        />
        <div className="container-site relative pt-16 pb-16 md:pt-24 md:pb-20 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mx-auto">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              Claim-level AI answer verification
            </Badge>

            <h1 className="mt-7 text-4xl leading-[1.06] font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.1rem]">
              Don&apos;t just read what AI tells you.{' '}
              <span className="bg-gradient-to-r from-accent-hover via-accent to-accent-hover bg-clip-text text-transparent">
                See what the evidence supports.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              MirroirAI breaks an AI answer into individual factual claims,
              evaluates each one against the evidence it can access, and shows
              what holds up, what fails, and what remains genuinely uncertain —
              while your original answer stays untouched.
            </p>

            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button size="lg" to="/#preview">
                Start Verifying
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button size="lg" variant="secondary" to="/how-it-works">
                How It Works
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-muted">
              {['Claims assessed individually', 'Evidence kept in view', 'Uncertainty stays visible'].map(
                (item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Product preview */}
      <section
        id="preview"
        className="scroll-mt-24 border-y border-line bg-surface-1 py-16 md:py-20"
      >
        <div className="container-site">
          <SectionHeading
            align="center"
            eyebrow="Product preview"
            title="A report that shows its work"
            description="One answer, split into claims — each with a status, a short evidence note, and the original text preserved above it."
            className="mb-10 md:mb-12"
          />
          <ReportPreview />
        </div>
      </section>

      {/* The problem */}
      <section className="py-16 md:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The problem"
              title="One answer rarely deserves one level of trust."
              description="AI answers arrive as a single block of fluent prose, which makes it easy to treat every sentence as equally reliable. In practice, one paragraph can mix a well-established fact, a figure that stopped being true years ago, and a leap nobody can source — with nothing on the surface telling you which is which."
            />
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              Grading an entire answer up or down hides the only question that
              matters: which specific claims hold up. MirroirAI answers at the
              level the question is actually asked.
            </p>
          </div>

          <Card className="p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-accent-hover uppercase">
              One paragraph
            </p>
            <p className="mt-3 border-l-2 border-accent/50 pl-4 text-sm leading-relaxed text-ink-soft">
              {PROBLEM_EXAMPLE.answer}
            </p>
            <p className="mt-6 flex items-center gap-2 text-xs font-medium tracking-wide text-ink-muted uppercase">
              Read as claims
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </p>
            <ul className="mt-3 flex flex-col gap-3">
              {PROBLEM_EXAMPLE.claims.map((claim) => (
                <li
                  key={claim.text}
                  className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-xl border border-line bg-surface-1 p-3.5"
                >
                  <span className="min-w-0 flex-1 text-sm text-ink">
                    {claim.text}
                  </span>
                  <StatusBadge status={claim.status} />
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-ink-muted">
              Same paragraph, three very different verdicts — visible only at
              claim level.
            </p>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="pb-16 md:pb-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="What MirroirAI does"
            title="Built to inform your judgment, not replace it."
            description="The product is deliberately narrow: decompose, assess, classify, and disclose. Nothing more."
            className="mb-10 md:mb-12"
          />
          <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <li key={feature.title}>
                  <Card className="h-full p-6 transition-colors duration-150 hover:border-accent/30">
                    <span className="inline-flex rounded-xl border border-line bg-surface-3 p-2.5">
                      <Icon
                        className="h-5 w-5 text-accent-hover"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="mt-5 text-base font-semibold">{feature.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                      {feature.body}
                    </p>
                  </Card>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Workflow overview */}
      <section className="border-y border-line bg-surface-1 py-16 md:py-20">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The workflow"
              title="From pasted answer to reviewed report"
              description="Five steps, each with a defined outcome and a defined limit."
            />
            <Button variant="secondary" size="sm" to="/how-it-works" className="shrink-0">
              Full walkthrough
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {WORKFLOW.map((item) => (
              <li
                key={item.step}
                className="flex flex-col rounded-card border border-line bg-surface-2 p-5"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-accent-hover">
                  {item.step}
                </span>
                <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Principles"
            title="What the product refuses to fudge."
            description="Four commitments that shape every report MirroirAI produces."
            className="mb-10 md:mb-12"
          />
          <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((principle, index) => (
              <li key={principle.title} className="border-t border-line pt-5">
                <span className="text-xs font-semibold text-ink-muted">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-base font-semibold">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {principle.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="get-started"
        className="relative scroll-mt-24 overflow-hidden border-t border-line"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[320px] bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(170,59,255,0.12),transparent_70%)]"
        />
        <div className="container-site relative py-20 text-center md:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl leading-tight sm:text-3xl lg:text-[2.25rem]">
              The workspace is on the way. The process is here now.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-[1.0625rem]">
              Sign-in and live verification arrive in a later phase — there is
              nothing to sign up for today. Until then, walk through exactly how
              an answer becomes a claim-by-claim report, and where the product
              draws the line on what it cannot know.
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button size="lg" to="/how-it-works">
                See How It Works
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button size="lg" variant="secondary" to="/about">
                About MirroirAI
              </Button>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-ink-muted">
              <CircleCheck className="h-4 w-4 text-status-supported" aria-hidden="true" />
              Reading the site requires no account.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
