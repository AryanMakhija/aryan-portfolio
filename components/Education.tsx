'use client'

import { useEffect, useRef, useState } from 'react'

const education = [
  {
    degree: 'CA Final',
    institution: 'Institute of Chartered Accountants of India',
    year: 'May 2025',
    highlight: 'District Rank — 5th',
    badge: '🥇',
    color: 'emerald',
  },
  {
    degree: 'CA Intermediate',
    institution: 'Institute of Chartered Accountants of India',
    year: 'May 2022',
    highlight: '56.3%',
    badge: '📋',
    color: 'blue',
  },
  {
    degree: 'CA Foundation',
    institution: 'Institute of Chartered Accountants of India',
    year: 'Nov 2020',
    highlight: '55.7%',
    badge: '📚',
    color: 'purple',
  },
  {
    degree: 'Class XII (CBSE)',
    institution: 'DAV Public School',
    year: '2020',
    highlight: '92.4%',
    badge: '🎓',
    color: 'orange',
  },
  {
    degree: 'Class X (CBSE)',
    institution: 'DAV Public School',
    year: '2018',
    highlight: '68.2%',
    badge: '📖',
    color: 'neutral',
  },
]

const colorStyles: Record<string, string> = {
  emerald: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400',
  blue: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
  purple: 'border-purple-500/30 bg-purple-500/5 text-purple-400',
  orange: 'border-orange-500/30 bg-orange-500/5 text-orange-400',
  neutral: 'border-white/10 bg-white/[0.03] text-neutral-400',
}

export default function Education() {
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
    <section id="education" className="py-28 px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-emerald-500 tracking-widest uppercase">Education</span>
            <div className="flex-1 h-px bg-emerald-500/20" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-display text-white mb-12">
            Academic <span className="italic text-neutral-400">foundation.</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent hidden sm:block" />

            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className={`relative sm:pl-14 transition-all duration-500`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3.5 top-6 w-3 h-3 rounded-full border-2 border-emerald-500/50 bg-[#0a0a0a] hidden sm:block" />

                  <div className="glass glass-hover rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <span className="text-2xl shrink-0">{edu.badge}</span>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{edu.degree}</h3>
                      <p className="text-neutral-500 text-sm mt-0.5">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono border ${colorStyles[edu.color]}`}>
                        {edu.highlight}
                      </span>
                      <span className="text-neutral-600 text-xs font-mono">{edu.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
