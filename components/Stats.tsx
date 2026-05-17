'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 80, prefix: '₹', suffix: 'Cr+', label: 'Revenue Impact at Groww', description: 'Pricing strategy contribution' },
  { value: 160, prefix: '₹', suffix: 'Cr', label: 'Market Opportunity Sized', description: 'Across commodities & algo trading' },
  { value: 10, prefix: '', suffix: 'Cr+', label: 'Working Capital Saved', description: 'Collections & float optimization' },
  { value: 3, prefix: '', suffix: "+", label: 'Years of Finance Experience', description: 'Across startups & Big4' },
]

function AnimatedCounter({ value, prefix, suffix, duration = 2000 }: { value: number; prefix: string; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = Date.now()
          const animate = () => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <div ref={ref} className="font-display text-4xl lg:text-5xl text-white">
      <span className="text-emerald-400">{prefix}</span>
      {count}
      <span className="text-emerald-400">{suffix}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-16 px-6 border-y border-white/[0.04] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/[0.06]">
          {stats.map((stat, i) => (
            <div key={i} className="lg:px-8 first:pl-0 last:pr-0">
              <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="text-white text-sm font-medium mt-2 mb-1">{stat.label}</p>
              <p className="text-neutral-500 text-xs font-mono">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
