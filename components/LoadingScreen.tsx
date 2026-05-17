'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808]">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo mark */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl border border-emerald-500/30 flex items-center justify-center bg-emerald-500/5">
            <span className="font-display text-2xl text-emerald-400 italic">AM</span>
          </div>
          <div className="absolute inset-0 rounded-2xl animate-ping border border-emerald-500/20" style={{ animationDuration: '2s' }} />
        </div>

        {/* Name */}
        <div className="text-center">
          <p className="text-sm tracking-[0.3em] text-neutral-500 uppercase font-mono">Loading Portfolio</p>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-px bg-neutral-800 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <p className="font-mono text-xs text-neutral-600">{Math.min(Math.round(progress), 100)}%</p>
      </div>
    </div>
  )
}
