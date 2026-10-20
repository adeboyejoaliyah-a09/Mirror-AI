import { ArrowRight, Eye, FileSearch, Quote, ShieldCheck, Split } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { usePageMetadata } from '../hooks/usePageMetadata'

const APPROACH = [
  {
    icon: FileSearch,
    title: 'Evidence before verdict',
    body: 'Statuses are derived from evidence that was actually retrieved. When access is limited, the limitation is recorded rather than glossed over.',
  },
  {
    icon: Split,
    title: 'Assessment, not generation',
    body: 'MirroirAI does not draft, improve, or rephrase answers. Its only job is to evaluate what was submitted and explain the evaluation.',
  },
  {
    icon: ShieldCheck,
    title: 'Distinct failure modes',
    body: 'Contradicted, outdated, insufficient evidence, unassessed, and failed verification are different situations — so they are reported differently.',
  },
] as const

const LIMITATIONS = [
  {
    title: 'Evidence access is partial by nature',
    body: 'What can be assessed depends on what can be retrieved. Relevant evidence may sit behind paywalls, offline, or unpublished — and the report will say so.',
  },
  {
    title: 'A score is not a truth probability',
    body: 'Reliability summarizes eligible claims only. With few eligible claims it carries little information, and it never estimates the chance the whole answer is true.',
  },
  {
    title: 'Statuses are assessments, not proofs',
    body: 'Each status reflects the evidence available at the time of checking. It can change when the evidence changes.',
  },
  {
    title: 'Outdated detection has limits',
    body: 'A claim is treated as outdated only when its present-day validity can be defensibly assessed; staleness on its own is not a verdict.',
  },
  {
    title: 'Verification itself can fail',
    body: 'Technical failures are reported as failures — never rewritten into factual findings — but they do leave some claims unverified.',
  },
  {
    title: 'Not a substitute for expert judgment',
    body: 'MirroirAI sharpens reading, not decision-making. High-stakes calls still belong with people who know the domain.',
  },
] as const

export default function About() {
  usePageMetadata(
    'About MirroirAI — Verify, don’t silently rewrite',
    'Why MirroirAI exists: the problem of uniformly trusting AI answers, our evidence-first mission, why the original answer is preserved, how uncertainty stays visible, and the product’s known limitations.',
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
            About
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Verify, don&apos;t silently rewrite.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            MirroirAI exists because an AI answer should be read the way a claim
            is read: sentence by sentence, against evidence, with uncertainty
            left intact.
          </p>
        </div>
      </section>

      {/* What it is + the problem */}
      <section className="py-16 md:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="What MirroirAI is"
              title="An AI-answer verification platform."
              description="It takes a generated answer, breaks it into the individual factual claims inside it, assesses those claims against evidence it can access, and returns a report showing which claims hold up, which fail, and which remain open. It does not generate answers and does not edit them."
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="The problem"
              title="Uniform confidence, invisible differences."
              description="AI answers read with one even tone from first sentence to last, so trust collapses into an all-or-nothing choice: accept the whole paragraph or discard it. Neither is an informed position — and most interfaces offer nothing in between."
            />
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Meanwhile the sentences inside a single answer can rest on very
              different ground: a settled fact, a stale figure, an unsourced
              leap. The tone never changes. MirroirAI is built to make that
              difference visible.
            </p>
          </div>
        </div>
      </section>

      {/* Mission band */}
      <section className="border-y border-line bg-surface-1 py-16 md:py-20">
        <div className="container-site max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent-hover uppercase">
            Mission
          </p>
          <p className="mt-5 text-2xl leading-snug font-medium tracking-tight text-ink sm:text-3xl lg:text-[2rem]">
            Make the strength of every claim inspectable — so people can judge
            AI output for themselves instead of trusting or discarding it on
            faith.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            MirroirAI is deliberately narrow in ambition: it reports on answers,
            it does not improve them. The judgment stays with the reader, who
            finally has something concrete to judge.
          </p>
        </div>
      </section>

      {/* Evidence-first approach */}
      <section className="py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Evidence-first"
            title="How the approach holds together"
            className="mb-10 md:mb-12"
          />
          <ul className="grid gap-4 md:grid-cols-3">
            {APPROACH.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.title}>
                  <Card className="h-full p-6">
                    <span className="inline-flex rounded-xl border border-line bg-surface-3 p-2.5">
                      <Icon className="h-5 w-5 text-accent-hover" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                      {item.body}
                    </p>
                  </Card>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Preservation + uncertainty */}
      <section className="pb-16 md:pb-20">
        <div className="container-site grid gap-4 md:grid-cols-2">
          <Card className="p-6 sm:p-8">
            <span className="inline-flex rounded-xl border border-line bg-surface-3 p-2.5">
              <Quote className="h-5 w-5 text-accent-hover" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-xl font-semibold sm:text-2xl">
              Why the original answer is preserved
            </h2>
            <p className="mt-3.5 text-sm leading-relaxed text-ink-soft sm:text-base">
              The submitted answer is the object under test. Rewrite it and the
              record of what was actually claimed disappears — along with any
              chance of judging whether the rewrite helped. MirroirAI keeps the
              original text exactly as written and attaches its findings to it,
              so verification and source never drift apart.
            </p>
          </Card>

          <Card className="p-6 sm:p-8">
            <span className="inline-flex rounded-xl border border-line bg-surface-3 p-2.5">
              <Eye className="h-5 w-5 text-accent-hover" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-xl font-semibold sm:text-2xl">
              Commitment to transparent uncertainty
            </h2>
            <p className="mt-3.5 text-sm leading-relaxed text-ink-soft sm:text-base">
              A system that always sounds certain is hiding its gaps. Insufficient
              evidence, unassessed claims, and failed verification are reported
              as first-class results with the same clarity as a supported claim.
              When MirroirAI does not know, the report says it does not know —
              and never inflates a gap into a conclusion.
            </p>
          </Card>
        </div>
      </section>

      {/* Limitations */}
      <section
        id="limitations"
        className="scroll-mt-24 border-y border-line bg-surface-1 py-16 md:py-20"
      >
        <div className="container-site">
          <SectionHeading
            eyebrow="Honest limits"
            title="What MirroirAI does not claim"
            description="Stating the boundaries is part of the method, not a disclaimer bolted on afterward."
            className="mb-10 md:mb-12"
          />
          <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {LIMITATIONS.map((item) => (
              <li key={item.title} className="border-t border-line pt-5">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl leading-tight sm:text-3xl">
              See the method in sequence
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              The How It Works page walks through the full process, all seven
              claim statuses, and how the numbers are read.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/how-it-works">
              See How It Works
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button variant="secondary" to="/">
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
