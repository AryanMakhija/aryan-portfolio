'use client'

import { useEffect, useRef, useState } from 'react'
import { Briefcase, ArrowRight, Download } from 'lucide-react'

const roles = [
  'Strategic Finance Manager',
  'Business Finance Lead',
  'FP&A Manager',
  'Finance Business Partner',
  'Growth Finance Analyst',
  'Investment Analyst',
]

export default function CTA() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-28 px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="relative glass rounded-3xl p-10 lg:p-16 overflow-hidden border border-emerald-500/10">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-emerald-500 opacity-5 blur-3xl rounded-full" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8">
                <Briefcase size={14} className="text-emerald-400" />
                <span className="text-emerald-400 text-xs font-mono tracking-wider uppercase">Available for Opportunities</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-display text-white mb-4 leading-tight">
                Looking for a strategic<br />
                <span className="italic text-neutral-400">finance leader?</span>
              </h2>

              <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
                I bring a rare combination of startup agility, Big4 rigor, and fintech depth.
                Let's build something extraordinary together.
              </p>

              {/* Role tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {roles.map((role, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs text-neutral-400 border border-white/8 bg-white/[0.03] font-mono"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:Aryanmakhija2002@gmail.com"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-400 text-[#080808] rounded-xl font-bold text-sm hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/10 btn-shimmer"
                >
                  Let's Connect
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    alert('Add resume at /public/resume.pdf to enable download')
                  }}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-white rounded-xl font-semibold text-sm hover:bg-white/[0.04] transition-all"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
