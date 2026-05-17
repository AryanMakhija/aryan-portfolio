'use client'

import { useState, useEffect, useRef } from 'react'
import { Send, Mail, Linkedin, MapPin, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
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
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const text = `
New Portfolio Inquiry

Name: ${form.name}
Email: ${form.email}
Company: ${form.company}

Message:
${form.message}
  `

const whatsappURL = `https://wa.me/917011375517?text=${encodeURIComponent(text)}`

  window.open(whatsappURL, '_blank')
}

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'Aryanmakhija2002@gmail.com', href: 'mailto:Aryanmakhija2002@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://linkedin.com' },
    { icon: MapPin, label: 'Location', value: 'Bangalore, India', href: null },
  ]

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-emerald-500 tracking-widest uppercase">Contact</span>
            <div className="flex-1 h-px bg-emerald-500/20" />
          </div>
<h2 className="text-3xl lg:text-5xl font-display text-white mb-5 leading-tight">
  Looking for a{" "}
  <span className="italic text-neutral-400">
    strategic finance professional?
  </span>
</h2>

<p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
  Let’s connect and explore how I can contribute across
  Business Finance, FP&A, Growth Strategy, and Operational Excellence.
</p>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left — info */}
            <div>
              <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                Whether you're a recruiter, founder, or finance leader - I'd love to explore how I can contribute to your organization's growth. 
              </p>

              <div className="space-y-5">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/8 border border-emerald-500/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-neutral-500 text-xs font-mono uppercase tracking-wider">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="text-neutral-200 text-sm hover:text-emerald-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-neutral-200 text-sm">{info.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Roles I'm targeting */}
              <div className="mt-10 p-5 glass rounded-2xl">
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-3">Open to roles in</p>
                <div className="flex flex-wrap gap-2">
                  {['Business Finance', 'FP&A', 'Growth Strategy & Operation Excellence',].map((r) => (
                    <span key={r} className="skill-chip px-3 py-1.5 rounded-full text-xs">{r}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {status === 'sent' ? (
                <div className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full">
                  <CheckCircle size={40} className="text-emerald-400 mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Message Received!</h3>
                  <p className="text-neutral-400 text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Your name"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-emerald-500/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="your@company.com"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-emerald-500/40 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">Company / Organization</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      placeholder="Where you work"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-emerald-500/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about the opportunity..."
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-emerald-500/40 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 bg-emerald-400 text-[#080808] rounded-xl font-bold text-sm hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 disabled:opacity-70 btn-shimmer"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#080808]/30 border-t-[#080808] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={15} />
                      </>
                    )}
                  </button>
                  <p className="text-neutral-600 text-xs text-center">
                    Or email directly at{' '}
                    <a href="mailto:Aryanmakhija2002@gmail.com" className="text-emerald-500 hover:text-emerald-400">
                      Aryanmakhija2002@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
