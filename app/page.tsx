'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Certifications from '@/components/Certifications'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import { useState, useEffect } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <main className="relative min-h-screen bg-[#080808] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
