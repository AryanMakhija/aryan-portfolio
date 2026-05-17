'use client'

import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    company: 'PlatinumRx',
    role: 'Business Finance Lead',
    type: 'Series A Startup — HealthTech',
    period: 'Nov 2025 – Present',
    location: 'Bangalore',
    color: 'emerald',
    emoji: '💊',
    tagline: 'Driving Strategic Finance & Operational Excellence for a Scaling HealthTech Platform',
    categories: [
      {
        name: 'Performance Reporting',
        highlights: [
          'Engineered a 360° live revenue assurance ecosystem, eliminating leakage of 1–2% of Monthly Revenue',
          'Developed a real-time GM% Framework enabling immediate pricing pivots, protecting unit-economics by ~1%',
          'Deep MIS analysis with cost-bridge linking gross margin to each major cost component',
        ],
      },
      {
        name: 'Cost Optimization',
        highlights: [
          'Built a logistics allocation engine reducing TAT, improving serviceability, and optimising zone-weight allocation',
          'Automated logistics audit tool to validate vendor invoices, identify billing gaps, and reduce shipping costs',
          'Led inventory audit overhauls; established lead-level accountability, materially reducing stock shrinkage',
        ],
      },
      {
        name: 'Business Investment & Process',
        highlights: [
          'Spearheaded Legal Due Diligence for fundraising',
          'Orchestrated cross-functional workflow automation via Zoho Sprints',
          'Redesigned Invoice Template for GST optimization — automated item-level tax calculation ensuring 100% tax accuracy',
          'Improved RFD turnaround time by streamlining end-to-end flow from procurement through warehouse to logistics',
        ],
      },
    ],
  },
  {
    company: 'Groww',
    role: 'Industrial Trainee — Business Finance',
    type: 'Investment Platform (Unicorn)',
    period: 'Apr 2024 – Oct 2025',
    location: 'Bangalore',
    color: 'blue',
    emoji: '📊',
    tagline: 'Driving Growth and Innovation in Business Finance at India\'s leading investment platform',
    categories: [
      {
        name: 'Stocks, F&O, MTF & IPO',
        highlights: [
          'Contributed to pricing strategy changes in cash market, enabling revenue increase of ₹80 Cr+ annually',
          'Sized market opportunities in commodities, algo trading, bonds & ETF — ~₹160 Cr in revenue potential',
          'Optimized working capital: improving collections, payouts & float utilization — ~₹10 Cr in annual savings',
          'Assisted in securing ₹160 Cr funding for the Margin Trading Facility (MTF) product',
          'Analyzed P2P & P2M payment flows, enabling cost savings of ~₹2 Cr with improved success rates',
        ],
      },
      {
        name: 'Strategy & Planning',
        highlights: [
          'Led strategic planning through Annual Operating Plan (AOP) development — defining roadmap & key milestones',
          'Strengthened market positioning through competitor benchmarking across 10+ Indian brokers',
          'Identified growth opportunities via new products, features, and business lines',
        ],
      },
      {
        name: 'AMC & Mutual Funds',
        highlights: [
          'Suggested TER for funds and strategized new fund launches through competitor & market analysis',
          'Led empanelment with AMCs to distribute regular funds and drive new revenue streams',
          'Well-versed in AMC and scheme expense P&Ls; analyzed underperforming schemes and advised management on TER',
        ],
      },
    ],
  },
  {
    company: 'BDO India LLP',
    role: 'Article Assistant — Statutory Audit',
    type: 'Big4 Equivalent — Professional Services',
    period: 'Oct 2022 – Apr 2024',
    location: 'Gurgaon',
    color: 'orange',
    emoji: '🏛️',
    tagline: 'Awarded SPOT Award and Article of the Quarter',
    categories: [
      {
        name: 'Statutory Audit',
        highlights: [
          'Conducted audits across Receivables, Payables, Statutory Dues, Borrowings, Fixed Assets & Investments',
          'Performed walkthroughs and tested internal controls for design and operational effectiveness',
          'Carried out inventory audits for LT Foods, Azure India, RG Hospital, and Winone',
          'Prepared audit certificates: SGD, BCD, GST, APR, and UFCE',
          'Involved in special purpose audits ensuring compliance for Azure India Pvt Limited',
        ],
      },
    ],
  },
]

const colorMap: Record<string, { accent: string; bg: string; border: string; dot: string }> = {
  emerald: {
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/8',
    border: 'border-emerald-500/20',
    dot: 'bg-emerald-400',
  },
  blue: {
    accent: 'text-blue-400',
    bg: 'bg-blue-500/8',
    border: 'border-blue-500/20',
    dot: 'bg-blue-400',
  },
  orange: {
    accent: 'text-orange-400',
    bg: 'bg-orange-500/8',
    border: 'border-orange-500/20',
    dot: 'bg-orange-400',
  },
}

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-28 px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-emerald-500 tracking-widest uppercase">Experience</span>
            <div className="flex-1 h-px bg-emerald-500/20" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-display text-white mb-12">
            Where I've <span className="italic text-neutral-400">created impact.</span>
          </h2>

          {/* Company tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {experiences.map((exp, i) => {
              const colors = colorMap[exp.color]
              return (
                <button
                  key={i}
                  onClick={() => setActiveExp(i)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeExp === i
                      ? `${colors.bg} ${colors.border} border ${colors.accent}`
                      : 'text-neutral-500 border border-transparent hover:text-neutral-300 hover:bg-white/[0.03]'
                  }`}
                >
                  <span>{exp.emoji}</span>
                  <span>{exp.company}</span>
                  {i === 0 && (
                    <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">Current</span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Active experience */}
          {experiences.map((exp, i) => {
            if (i !== activeExp) return null
            const colors = colorMap[exp.color]

            return (
              <div key={i} className="animate-fade-in">
                {/* Card header */}
                <div className={`glass rounded-2xl p-6 mb-6 border ${colors.border}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{exp.emoji}</span>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                          <p className={`text-sm font-medium ${colors.accent}`}>{exp.role}</p>
                        </div>
                      </div>
                      <p className="text-neutral-500 text-sm mt-1">{exp.type}</p>
                      <p className="text-neutral-400 text-sm mt-3 italic">"{exp.tagline}"</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono ${colors.bg} ${colors.accent} border ${colors.border}`}>
                        {exp.period}
                      </span>
                      <span className="text-neutral-500 text-xs">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-4">
                  {exp.categories.map((cat, ci) => (
                    <div key={ci} className="glass rounded-2xl p-6 glass-hover">
                      <h4 className={`text-xs font-mono uppercase tracking-wider mb-4 ${colors.accent}`}>
                        {cat.name}
                      </h4>
                      <ul className="space-y-3">
                        {cat.highlights.map((h, hi) => (
                          <li key={hi} className="flex items-start gap-3">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`} />
                            <span className="text-neutral-300 text-sm leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
