'use client'

import { useState } from 'react'
import Link from 'next/link'
import ResumeViewer from '@/components/ResumeViewer'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showResume, setShowResume] = useState(false)

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="#home" className="text-2xl font-bold gradient-text">
              JAISON
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                className="px-6 py-2 bg-primary text-dark font-semibold rounded-lg hover:bg-secondary transition-all duration-300 hover:shadow-lg glow-primary"
                onClick={() => setShowResume(true)}
              >
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden text-primary"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-gray-300 hover:text-primary hover:bg-primary/10 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                className="w-full mt-4 px-4 py-2 bg-primary text-dark font-semibold rounded-lg hover:bg-secondary transition-all"
                onClick={() => {
                  setIsOpen(false)
                  setShowResume(true)
                }}
              >
                Resume
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Resume PDF Viewer modal */}
      <ResumeViewer
        open={showResume}
        onClose={() => setShowResume(false)}
      />
    </>
  )
}