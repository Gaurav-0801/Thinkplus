"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

const stats = [
  { number: 10000, label: "Students Trained", suffix: "+", color: "from-primary-600" },
  { number: 95, label: "Success Rate", suffix: "%", color: "from-accent-blue" },
  { number: 50, label: "Expert Mentors", suffix: "+", color: "from-accent-purple" },
  { number: 7, label: "Years Experience", suffix: "+", color: "from-accent-teal" },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const duration = 2000

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(target * progress))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [target])

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  )
}

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={ref}
      className={`group bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 hover:bg-neutral-800 transition-all duration-300 overflow-hidden relative ${
        isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        animationFillMode: "both",
      }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(233, 30, 123, 0.3), transparent 80%)`,
        }}
      ></div>

      <div className={`relative z-10 bg-gradient-to-br ${stat.color} to-neutral-600 bg-clip-text`}>
        <p className="text-4xl font-black text-transparent mb-2">
          {isVisible ? <AnimatedCounter target={stat.number} suffix={stat.suffix} /> : "0"}
        </p>
      </div>
      <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors relative z-10">{stat.label}</p>

      <div className="absolute inset-0 border border-primary-600/0 group-hover:border-primary-600/50 rounded-xl transition-all duration-300 pointer-events-none"></div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-neutral-900 border-y border-neutral-700 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Track Record</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Proven results from thousands of successful students worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
