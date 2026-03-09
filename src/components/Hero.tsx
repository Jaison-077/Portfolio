'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 px-4"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-6 animate-slideInUp">
          <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-primary text-sm font-semibold">
            Welcome to my portfolio
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-6 animate-slideInUp"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="block mb-2">Hi, I&apos;m</span>
          <span className="gradient-text block">Jaison K Sebastian</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto animate-slideInUp"
          style={{ animationDelay: '0.2s' }}
        >
          Angular &amp; .NET Developer specializing in enterprise-grade web
          applications and manufacturing execution systems
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-slideInUp"
          style={{ animationDelay: '0.3s' }}
        >
          <button
            className="px-8 py-4 bg-primary text-dark font-semibold rounded-lg hover:bg-secondary transition-all duration-300 hover:shadow-lg glow-primary text-lg"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }}
          >
            View My Work
          </button>
          <button
            className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 text-lg"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }}
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}