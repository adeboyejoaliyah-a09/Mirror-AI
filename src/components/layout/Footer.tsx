import { Link } from 'react-router-dom'
import { Wordmark } from './Wordmark'

const siteLinks = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/about', label: 'About' },
]

const exploreLinks = [
  { to: '/#preview', label: 'Report preview' },
  { to: '/how-it-works#statuses', label: 'Claim statuses' },
  { to: '/how-it-works#scoring', label: 'Scoring explained' },
  { to: '/about#limitations', label: 'Product limitations' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-surface-1">
      <div className="container-site py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm space-y-4">
            <Link
              to="/"
              className="-mx-1.5 inline-block rounded-md px-1.5 py-1"
              aria-label="MirroirAI — home"
            >
              <Wordmark />
            </Link>
            <p className="text-sm leading-relaxed text-ink-soft">
              AI answers broken down into individual claims, assessed against
              accessible evidence, with uncertainty kept visible and the
              original answer preserved.
            </p>
            <p className="text-sm font-medium text-ink">
              Verify, don&apos;t silently rewrite.
            </p>
          </div>

          <nav aria-label="Public site">
            <h2 className="mb-4 text-sm font-semibold text-ink">Public site</h2>
            <ul className="space-y-2.5">
              {siteLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-soft transition-colors duration-150 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Explore">
            <h2 className="mb-4 text-sm font-semibold text-ink">Explore</h2>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-soft transition-colors duration-150 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-muted">
            © {year} MirroirAI. All rights reserved.
          </p>
          <p className="text-sm text-ink-muted">
            Verification workspace and sign-in arrive in a later phase.
          </p>
        </div>
      </div>
    </footer>
  )
}
