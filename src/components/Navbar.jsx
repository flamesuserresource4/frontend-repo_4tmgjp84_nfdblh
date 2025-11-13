import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? 'backdrop-blur-md bg-white/65 dark:bg-neutral-950/55 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <a
          href="#home"
          className="font-semibold tracking-tight text-gray-900 dark:text-white text-lg"
        >
          Anggi Nabila
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm rounded-full bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            Let’s talk
          </a>
          <ThemeToggle />
        </div>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-2xl border bg-white/90 dark:bg-neutral-900/90 backdrop-blur p-4 flex flex-col gap-2 shadow">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-gray-800 dark:text-gray-100"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between gap-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-2 rounded-xl bg-gray-900 text-white"
              >
                Let’s talk
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
