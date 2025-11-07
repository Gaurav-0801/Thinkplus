"use client"

import type React from "react"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [imageHovered, setImageHovered] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    if (imageRef.current && imageHovered) {
      const imageRect = imageRef.current.getBoundingClientRect()
      const centerX = imageRect.left + imageRect.width / 2
      const centerY = imageRect.top + imageRect.height / 2
      const rotateX = (e.clientY - centerY) / 10
      const rotateY = (centerX - e.clientX) / 10

      imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    }
  }

  const handleImageMouseLeave = () => {
    setImageHovered(false)
    if (imageRef.current) {
      imageRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary glow blob */}
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{
            animation: "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite, float 6s ease-in-out infinite",
          }}
        ></div>

        {/* Secondary glow blob */}
        <div
          className="absolute -bottom-8 right-10 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{
            animation: "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s, float 8s ease-in-out infinite reverse",
          }}
        ></div>

        {/* Tertiary glow blob with parallax */}
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-teal rounded-full mix-blend-multiply filter blur-3xl opacity-5"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.5}px)` }}
        ></div>

        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(233, 30, 123, 0.15), transparent 80%)`,
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-32 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 z-10">
          <div className="mb-6 animate-in fade-in slide-in-from-left-4 duration-700">
            <span className="inline-block px-4 py-2 bg-primary-600/20 border border-primary-600/40 rounded-full text-primary-400 text-sm font-semibold hover:border-primary-600/60 hover:bg-primary-600/30 transition-all duration-300 cursor-default">
              Welcome to ThinkPlus
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6 text-white leading-tight animate-in fade-in slide-in-from-left-4 duration-700 animation-delay-100">
            Crack Your Dream <span className="gradient-text">MBA Entrance</span>
          </h1>

          <p className="text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-left-4 duration-700 animation-delay-200">
            Master CAT, IPMAT, CLAT, and competitive exams with personalized coaching from IIM graduates. Achieve your
            dream MBA with ThinkPlus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-in fade-in slide-in-from-left-4 duration-700 animation-delay-300">
            <Link
              href="/contact"
              className="btn-primary flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-primary-600/50 hover:-translate-y-1 transition-all"
            >
              Start Your Journey
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="btn-secondary flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neutral-700/50 hover:-translate-y-1 transition-all"
            >
              Explore Courses
            </Link>
          </div>

          {/* Stats under CTA */}
          <div className="flex gap-8 animate-in fade-in slide-in-from-left-4 duration-700 animation-delay-400">
            <div className="group cursor-default hover:scale-105 transition-transform">
              <p className="text-3xl font-black gradient-text">10K+</p>
              <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors">
                Students Trained
              </p>
            </div>
            <div className="group cursor-default hover:scale-105 transition-transform">
              <p className="text-3xl font-black gradient-text">95%</p>
              <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors">Success Rate</p>
            </div>
            <div className="group cursor-default hover:scale-105 transition-transform">
              <p className="text-3xl font-black gradient-text">50+</p>
              <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors">Expert Mentors</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image Placeholder with Animation */}
        <div className="flex-1 z-10 animate-in fade-in slide-in-from-right-4 duration-700 animation-delay-200">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-400 rounded-2xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>

            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-accent-purple to-primary-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>

            <div
              ref={imageRef}
              className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-700 hover:border-primary-600/50 transition-all duration-500 overflow-hidden"
              style={{ transform: "perspective(1000px)" }}
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={handleImageMouseLeave}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle 400px at ${mousePosition.x - 600}px ${mousePosition.y - 200}px, rgba(255,255,255,0.1), transparent 80%)`,
                }}
              ></div>

              <div className="aspect-video bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-lg overflow-hidden flex items-center justify-center relative">
                <img
                  src="/students-studying-together-in-coaching-center.jpg"
                  alt="Coaching Center"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:saturate-125 group-hover:brightness-110"
                  style={{
                    filter: imageHovered
                      ? "drop-shadow(0 20px 50px rgba(233, 30, 123, 0.3))"
                      : "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))",
                  }}
                />
              </div>

              <div className="absolute top-4 right-4 bg-primary-600 px-4 py-2 rounded-full text-white text-sm font-semibold animate-pulse hover:animate-none transition-all hover:shadow-lg hover:shadow-primary-600/50 cursor-default">
                LIVE Coaching
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center hover:scale-110 transition-transform">
        <p className="text-neutral-500 text-sm mb-2 cursor-default">Scroll to explore</p>
        <div className="animate-bounce">
          <div className="w-1 h-8 border-l-2 border-r-2 border-primary-600 mx-auto"></div>
        </div>
      </div>
    </section>
  )
}
