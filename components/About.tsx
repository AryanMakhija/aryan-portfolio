'use client'

import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Target, BarChart3, Zap } from 'lucide-react'

const pillars = [
  {
    icon: TrendingUp,
    title: 'Revenue Architecture',
    desc: 'Building real-time revenue assurance systems, GM% frameworks, and pricing strategies that protect unit economics at scale.',
  },
  {
    icon: Target,
    title: 'Strategic FP&A',
    desc: 'Driving Annual Operating Plans, competitor benchmarking across 10+ players, and market opportunity sizing with precision.',
  },
  {
    icon: BarChart3,
    title: 'Capital Markets',
    desc: 'Deep understanding of MTF, mutual funds, P&L analysis, TER strategy, and investment platform dynamics.',
  },
  {
    icon: Zap,
    title: 'Operational Excellence',
    desc: 'Cross-functional workflow automation, logistics optimization, vendor reconciliation, and process reengineering.',
  },
]

export default function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-16 items-start transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Left column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-emerald-500 tracking-widest uppercase">About</span>
              <div className="flex-1 h-px bg-emerald-500/20" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-display text-white mb-6 leading-tight">
              Finance Professional<br />
              <span className="italic text-neutral-400">built for impact.</span>
            </h2>

            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Chartered Accountant (District Rank 5th)</span>  with a track record of driving measurable business outcomes at the intersection of finance, technology, and strategy.
              </p>
              <p>
                              At <span className="text-white font-medium">PlatinumRx</span>, I built a 360° live revenue assurance ecosystem from scratch, developed a real-time GM% framework, led legal due diligence for fundraising, and drove cross-functional automation - all in a scaling HealthTech environment.
              </p>
              <p>
                At <span className="text-white font-medium">Groww</span>, I contributed to pricing decisions generating ₹80Cr+ in annual revenue, sized ₹160Cr+ market opportunities, and led AOP planning for one of India's largest investment platforms.
              </p>
              <p>

                My foundation at <span className="text-white font-medium">BDO India LLP</span> (awarded SPOT Award & Article of the Quarter) gave me rigorous grounding in statutory audits, internal controls, and financial compliance.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['CA- District Rank 5th', 'Fintech', 'HealthTech', 'Startups', 'Big6 Background'].map((tag) => (
                <span key={tag} className="skill-chip px-3 py-1.5 rounded-full text-xs">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right column — pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <div
                  key={i}
                  className="glass glass-hover rounded-2xl p-6 cursor-default"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/8 border border-emerald-500/15 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">{p.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
