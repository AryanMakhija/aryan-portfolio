'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#080808]/90 backdrop-blur-xl border-b border-white/[0.04]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/15 transition-all">
              <span className="font-display text-sm text-emerald-400 italic">A</span>
            </div>
            <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors tracking-wide">
              Aryan Makhija
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04] font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:Aryanmakhija2002@gmail.com"
              className="px-4 py-2 text-sm font-medium text-emerald-400 border border-emerald-500/25 rounded-lg hover:bg-emerald-500/8 transition-all hover:border-emerald-500/40"
            >
              Hire Me
            </a>
  <a
  href="/Aryan_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  download
  className="px-4 py-2 text-sm font-medium text-[#080808] bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-all btn-shimmer"
>
  Resume ↓
</a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-neutral-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-0 z-30 pt-20 pb-8 px-6 bg-[#080808]/98 backdrop-blur-xl border-b border-white/[0.06] transition-all duration-300 ${
          mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="py-3 px-4 text-left text-neutral-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-4 pt-4 border-t border-white/[0.06] flex gap-3">
            <a
              href="mailto:Aryanmakhija2002@gmail.com"
              className="flex-1 py-2.5 text-center text-sm font-medium text-emerald-400 border border-emerald-500/25 rounded-lg"
            >
              Hire Me
            </a>
            <a
              href="#"
              className="flex-1 py-2.5 text-center text-sm font-medium text-[#080808] bg-emerald-400 rounded-lg"
            >
              Resume ↓
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
