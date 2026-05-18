'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Mail, ArrowDown, ExternalLink } from 'lucide-react'

const roles = [
  'Strategic Finance',
  'Business Finance',
  'FP&A',
  'Growth Strategy',
  'Fintech Analytics',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-emerald-500 top-[-200px] right-[-200px]" />
      <div className="orb w-[400px] h-[400px] bg-emerald-700 bottom-[-100px] left-[-100px]" />
      
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative">
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-emerald-400 tracking-wider uppercase">Open to Opportunities</span>
          </div>

          {/* Headline */}
          <div className="mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display leading-[0.95] tracking-tight mb-4">
              <span className="block text-white">Driving Strategic</span>
              <span className="block gradient-text italic">Finance, Growth</span>
              <span className="block text-white">& Excellence</span>
            </h1>
          </div>

          {/* Dynamic role */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-neutral-500 text-lg sm:text-xl font-light">Specialized in</span>
            <span className="text-emerald-400 text-lg sm:text-xl font-medium font-mono min-w-[240px]">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-emerald-400 ml-0.5 animate-pulse align-middle" />
            </span>
          </div>

          {/* Summary */}
          <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 font-light">
            CA with hands-on experience scaling fintech and healthtech Platforms. 
            From <span className="text-neutral-200">₹80Cr+ revenue impact</span> at Groww to building 
            real-time revenue assurance systems - I transform financial complexity into strategic clarity.
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <MapPin size={14} className="text-emerald-500" />
              <span>Bangalore, India</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <Mail size={14} className="text-emerald-500" />
              <a href="mailto:Aryanmakhija2002@gmail.com" className="hover:text-neutral-300 transition-colors">
                Aryanmakhija2002@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>CA Final - District Rank 5th</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:Aryanmakhija2002@gmail.com"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-400 text-[#080808] rounded-xl font-semibold text-sm hover:bg-emerald-300 transition-all btn-shimmer shadow-lg shadow-emerald-500/10"
            >
              Get In Touch
              <Mail size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button
              onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 px-6 py-3.5 border border-white/10 text-neutral-300 rounded-xl font-semibold text-sm hover:bg-white/[0.04] hover:border-white/20 transition-all"
            >
              View Experience
              <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
            <a
              href="https://www.linkedin.com/in/ca-aryan-makhija-b22693241/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlnPP5B2MQQuLEXU94I6oRA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 border border-white/10 text-neutral-300 rounded-xl font-semibold text-sm hover:bg-white/[0.04] hover:border-white/20 transition-all"
            >
              LinkedIn
              <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
  href="/Aryan_Resume_Finance.pdf"
  target="_blank"
rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 px-6 py-3.5 border border-emerald-500/30 text-emerald-400 rounded-xl font-semibold text-sm hover:bg-emerald-500/10 transition-all"
>
  Download CV
</a>
          </div>
        </div>

{/* Floating cards */}
<div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 space-y-4 w-72">

  {/* PlatinumRx */}
  <div
    className="glass rounded-2xl p-4 animate-float"
    style={{ animationDelay: '0s', animationDuration: '6s' }}
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
        <span className="text-base">🛡️</span>
      </div>
      <div>
        <p className="text-xs text-neutral-500 font-mono">Revenue Leakage Plugged</p>
        <p className="text-white font-semibold">1–2% MoM</p>
      </div>
    </div>
    <p className="text-xs text-neutral-500">At PlatinumRx</p>
  </div>

  {/* Revenue Impact */}
  <div
    className="glass rounded-2xl p-4 animate-float"
    style={{ animationDelay: '1s', animationDuration: '6s' }}
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
        <span className="text-base">📈</span>
      </div>
      <div>
        <p className="text-xs text-neutral-500 font-mono">Revenue Impact</p>
        <p className="text-white font-semibold">₹80 Cr+</p>
      </div>
    </div>
    <p className="text-xs text-neutral-500">Pricing strategy at Groww</p>
  </div>

  {/* Market Opportunity */}
  <div
    className="glass rounded-2xl p-4 animate-float"
    style={{ animationDelay: '2s', animationDuration: '6s' }}
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
        <span className="text-base">🎯</span>
      </div>
      <div>
        <p className="text-xs text-neutral-500 font-mono">Market Opportunity</p>
        <p className="text-white font-semibold">₹160 Cr+</p>
      </div>
    </div>
    <p className="text-xs text-neutral-500">Sized across segments at Groww</p>
  </div>

  {/* Working Capital */}
  <div
    className="glass rounded-2xl p-4 animate-float"
    style={{ animationDelay: '3s', animationDuration: '6s' }}
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
        <span className="text-base">💰</span>
      </div>
      <div>
        <p className="text-xs text-neutral-500 font-mono">Working Capital Saved</p>
        <p className="text-white font-semibold">10Cr+</p>
      </div>
    </div>
    <p className="text-xs text-neutral-500">Collections & float optimization at Groww</p>
  </div>

  {/* Experience */}
  <div
    className="glass rounded-2xl p-4 animate-float"
    style={{ animationDelay: '4s', animationDuration: '6s' }}
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
        <span className="text-base">📊</span>
      </div>
      <div>
        <p className="text-xs text-neutral-500 font-mono">Finance Experience Inc Training- 3 Yrs</p>
        <p className="text-white font-semibold">4 Years</p>
      </div>
    </div>
    <p className="text-xs text-neutral-500">Across startups & Big6</p>
  </div>
  </div>
</div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ArrowDown size={16} className="text-neutral-600" />
      </div>
    </section>
  )
}
