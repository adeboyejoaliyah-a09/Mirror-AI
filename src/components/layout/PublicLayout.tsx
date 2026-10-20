import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function PublicLayout() {
  const location = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    mainRef.current?.focus({ preventScroll: true })
  }, [location.pathname])

  useEffect(() => {
    const { hash } = location
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        const reduceMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches
        target.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start',
        })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location])

  return (
    <div className="flex min-h-screen flex-col bg-surface-0">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:border focus:border-accent/40 focus:bg-surface-2 focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main
        ref={mainRef}
        id="main-content"
        tabIndex={-1}
        className="flex-1 outline-none"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
