'use client'

import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    category: 'Finance & Strategy',
    icon: '📊',
    skills: [
      { name: 'Strategic Finance', level: 95 },
      { name: 'Financial Planning & Analysis', level: 92 },
      { name: 'Business Finance', level: 95 },
      { name: 'Revenue Operations', level: 90 },
      { name: 'Financial Modeling', level: 88 },
      { name: 'Valuation', level: 85 },
    ],
  },
  {
    category: 'Capital Markets',
    icon: '📈',
    skills: [
      { name: 'Capital Markets', level: 88 },
      { name: 'Mutual Funds & AMC', level: 85 },
      { name: 'Equity & F&O', level: 82 },
      { name: 'MTF & IPO', level: 80 },
      { name: 'Market Research', level: 88 },
      { name: 'Competitor Analysis', level: 90 },
    ],
  },
  {
    category: 'Analytics & Tools',
    icon: '⚡',
    skills: [
      { name: 'BigQuery & AI Tools', level: 80 },
      { name: 'Power BI', level: 78 },
      { name: 'Excel (Advanced)', level: 95 },
      { name: 'VBA / Automation', level: 82 },
      { name: 'Metabase', level: 75 },
      { name: 'Zoho Sprints', level: 78 },
    ],
  },
]

const tags = [
  'Strategic Finance', 'FP&A', 'Business Finance', 'Revenue Assurance',
  'Capital Markets', 'Mutual Funds', 'Financial Modeling', 'Excel',
  'VBA', 'Power BI', 'BigQuery', 'AI Tools', 'Market Research',
  'AOP Planning', 'Competitor Benchmarking', 'Statutory Audit',
  'Internal Controls', 'Working Capital', 'Valuation', 'Metabase',
]

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const [animateBars, setAnimateBars] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          setTimeout(() => setAnimateBars(true), 400)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
{/* Header */}
<div className="flex items-center gap-3 mb-4">
  <span className="font-mono text-xs text-emerald-500 tracking-widest uppercase">
    Skills
  </span>
  <div className="flex-1 h-px bg-emerald-500/20" />
</div>

          {/* Tag cloud */}
          <div className="glass rounded-2xl p-6">
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">All Skills</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="skill-chip px-3 py-1.5 rounded-full cursor-default"
                  style={{ animationDelay: `${i * 30}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
