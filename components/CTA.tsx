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

 return null
}
