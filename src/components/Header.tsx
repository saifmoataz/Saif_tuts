'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollThreshold = 50

      setScrolled(scrollTop > 20)

      // Calculate scroll progress for blur intensity
      const progress = Math.min(scrollTop / scrollThreshold, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled
          ? `rgba(255, 255, 255, ${0.1 + scrollProgress * 0.05})`
          : 'transparent',
        backdropFilter: scrolled ? `blur(${8 + scrollProgress * 12}px)` : 'none',
        borderBottom: scrolled
          ? `1px solid rgba(255, 255, 255, ${0.1 + scrollProgress * 0.1})`
          : 'none',
        boxShadow: scrolled
          ? `0 8px 32px rgba(0, 0, 0, ${0.1 + scrollProgress * 0.1})`
          : 'none'
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-800 dark:text-white">
            Showcase
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 dark:text-white/90 hover:text-slate-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <a href="#videos" className="text-slate-700 dark:text-white/90 hover:text-slate-900 dark:hover:text-white transition-colors">
              Videos
            </a>
            
           
            <a href="#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full transition-colors">
              Contact
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-800 dark:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4 bg-white/20 dark:bg-black/20 backdrop-blur-lg rounded-lg p-4">
              <Link
                href="/"
                className="text-slate-700 dark:text-white/90 hover:text-slate-900 dark:hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="#videos"
                className="text-slate-700 dark:text-white/90 hover:text-slate-900 dark:hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Videos
              </a>
              <a
                href="#about"
                className="text-slate-700 dark:text-white/90 hover:text-slate-900 dark:hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
