import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'
import { Wordmark } from './Wordmark'

interface NavItem {
  to: string
  label: string
  end?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/about', label: 'About' },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-lg px-3.5 py-2 text-sm transition-colors duration-150 ${
    isActive
      ? 'bg-surface-2 font-medium text-ink'
      : 'text-ink-soft hover:bg-white/[0.05] hover:text-ink'
  }`

const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex min-h-11 items-center rounded-lg px-3 text-base transition-colors duration-150 ${
    isActive
      ? 'bg-surface-2 font-medium text-ink'
      : 'text-ink-soft hover:bg-white/[0.05] hover:text-ink'
  }`

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const locationKey = `${location.pathname}${location.hash}`
  const [lastLocationKey, setLastLocationKey] = useState(locationKey)
  if (lastLocationKey !== locationKey) {
    setLastLocationKey(locationKey)
    if (menuOpen) setMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface-0/85 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link
          to="/"
          className="-mx-1.5 rounded-md px-1.5 py-1"
          aria-label="MirroirAI — home"
        >
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink end={item.end} to={item.to} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" to="/#get-started">
            Sign in
          </Button>
          <Button variant="primary" size="sm" to="/#get-started">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface-2 text-ink-soft transition-colors duration-150 hover:text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <div id="mobile-nav" hidden={!menuOpen} className="bg-surface-0 md:hidden">
        <nav
          aria-label="Mobile"
          className="container-site flex flex-col gap-1 border-t border-line py-4"
          onClick={() => setMenuOpen(false)}
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink end={item.end} to={item.to} className={mobileLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
            <Button variant="secondary" size="md" to="/#get-started" className="w-full">
              Sign in
            </Button>
            <Button variant="primary" size="md" to="/#get-started" className="w-full">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
