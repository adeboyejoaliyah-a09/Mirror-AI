import { ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { usePageMetadata } from '../hooks/usePageMetadata'

export default function NotFound() {
  usePageMetadata(
    'Page not found — MirroirAI',
    'The page you were looking for does not exist on the MirroirAI public site.',
  )

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(170,59,255,0.1),transparent_70%)]"
      />
      <div className="container-site relative py-24 text-center md:py-32">
        <p className="text-xs font-semibold tracking-[0.18em] text-accent-hover uppercase">
          Error 404
        </p>
        <h1 className="mt-5 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          This page couldn&apos;t be found.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
          The address you followed isn&apos;t part of the MirroirAI public site.
          If you were looking for the verification workspace, it arrives in a
          later phase — everything available today lives on the pages below.
        </p>
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button size="lg" to="/">
            Back to Home
          </Button>
          <Button size="lg" variant="secondary" to="/how-it-works">
            How It Works
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
