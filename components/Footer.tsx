'use client'

import { Mail, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.04] bg-[#080808] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <span className="font-display text-sm text-emerald-400 italic">A</span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">Aryan Makhija</p>
              <p className="text-neutral-600 text-xs font-mono">Strategic Finance Professional</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:Aryanmakhija2002@gmail.com"
              className="w-9 h-9 rounded-lg border border-white/[0.06] flex items-center justify-center text-neutral-500 hover:text-emerald-400 hover:border-emerald-500/25 transition-all"
            >
              <Mail size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/ca-aryan-makhija-b22693241/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlnPP5B2MQQuLEXU94I6oRA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/[0.06] flex items-center justify-center text-neutral-500 hover:text-emerald-400 hover:border-emerald-500/25 transition-all"
            >
              <Linkedin size={15} />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-9 h-9 rounded-lg border border-white/[0.06] flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/15 transition-all ml-2"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div className="section-divider my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-neutral-600 text-xs font-mono">
            © {year} Aryan Makhija. All rights reserved.
          </p>
          <p className="text-neutral-700 text-xs font-mono">
            Bangalore, India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}
