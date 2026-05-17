'use client'

import { useEffect, useRef, useState } from 'react'
import { Award } from 'lucide-react'

const certs = [
  {
    name: 'Mutual Fund Distributor',
    issuer: 'AMFI — Series VA',
    desc: 'Licensed to distribute mutual funds across all AMC categories and fund types.',
    icon: '📜',
    color: 'emerald',
  },
  {
    name: 'VBA (Visual Basic for Applications)',
    issuer: 'Microsoft Office Automation',
    desc: 'Proficient in building macros, automation scripts, and financial models in Excel.',
    icon: '⚙️',
    color: 'blue',
  },
  {
    name: 'Analytical Excel',
    issuer: 'Advanced Data Analytics',
    desc: 'Advanced Excel for business analytics, pivot tables, complex formulas, and dashboards.',
    icon: '📊',
    color: 'purple',
  },
  {
    name: 'Financial Modeling & Valuation',
    issuer: 'Professional Certification',
    desc: 'Comprehensive training in DCF, LBO, comparable analysis, and M&A financial models.',
    icon: '💹',
    color: 'orange',
  },
]

const colorStyles: Record<string, { badge: string; icon: string }> = {
  emerald: { badge: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400', icon: 'bg-emerald-500/10 border-emerald-500/20' },
  blue: { badge: 'border-blue-500/20 bg-blue-500/5 text-blue-400', icon: 'bg-blue-500/10 border-blue-500/20' },
  purple: { badge: 'border-purple-500/20 bg-purple-500/5 text-purple-400', icon: 'bg-purple-500/10 border-purple-500/20' },
  orange: { badge: 'border-orange-500/20 bg-orange-500/5 text-orange-400', icon: 'bg-orange-500/10 border-orange-500/20' },
}

export default function Certifications() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-emerald-500 tracking-widest uppercase">Certifications</span>
            <div className="flex-1 h-px bg-emerald-500/20" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-display text-white mb-12">
            Credentials & <span className="italic text-neutral-400">qualifications.</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {certs.map((cert, i) => {
              const colors = colorStyles[cert.color]
              return (
                <div
                  key={i}
                  className="glass glass-hover rounded-2xl p-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${colors.icon}`}>
                      <span className="text-xl">{cert.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-sm mb-1">{cert.name}</h3>
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-mono border mb-3 ${colors.badge}`}>
                        {cert.issuer}
                      </span>
                      <p className="text-neutral-500 text-xs leading-relaxed">{cert.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Awards */}
          <div className="mt-8 glass rounded-2xl p-6 border border-yellow-500/15">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                <span className="text-xl">🏆</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Awards & Recognition</h3>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono border border-yellow-500/20 bg-yellow-500/5 text-yellow-400">
                    SPOT Award — BDO India LLP
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono border border-yellow-500/20 bg-yellow-500/5 text-yellow-400">
                    Article of the Quarter — BDO India LLP
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono border border-emerald-500/20 bg-emerald-500/5 text-emerald-400">
                    District Rank 5th — CA Final
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
