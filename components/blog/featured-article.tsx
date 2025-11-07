"use client"

import type React from "react"

import { ArrowRight, Calendar, User, ZoomIn } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"

export default function FeaturedArticle() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [imageFilter, setImageFilter] = useState(0)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group cursor-pointer" ref={imageContainerRef} onMouseMove={handleMouseMove}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-primary-400/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-purple rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

            <div className="relative bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700 group-hover:border-primary-600/50 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="/student-studying-focused-exam-prep.jpg"
                  alt="Featured Article"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  style={{
                    filter: `brightness(${1 + imageFilter * 0.2}) saturate(${1 + imageFilter * 0.3})`,
                  }}
                />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.3), transparent 70%)`,
                  }}
                ></div>
              </div>

              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-4 right-4 bg-primary-600 hover:bg-primary-500 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 duration-300 shadow-lg hover:shadow-primary-600/50"
              >
                <ZoomIn size={20} />
              </button>

              <div className="absolute top-4 left-4 bg-primary-600 px-4 py-2 rounded-full text-white text-sm font-bold animate-pulse hover:animate-none transition-all">
                FEATURED
              </div>
            </div>
          </div>

          <div className="group">
            <div className="inline-block px-4 py-2 bg-primary-600/20 border border-primary-600/40 rounded-full text-primary-400 text-sm font-semibold mb-6 group-hover:border-primary-600/60 group-hover:bg-primary-600/30 transition-all duration-300">
              Latest Article
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 group-hover:gradient-text transition-all duration-300">
              5 Proven Strategies to Crack CAT in 6 Months
            </h2>

            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              Learn the battle-tested strategies that helped thousands of ThinkPlus students ace the CAT exam. From time
              management to advanced problem-solving techniques, we break down everything you need to know.
            </p>

            <div className="flex gap-6 mb-8 text-neutral-400">
              <div className="flex items-center gap-2 group/meta hover:text-primary-400 transition-colors cursor-default">
                <User size={16} />
                <span className="text-sm">By Raj Kumar Singh</span>
              </div>
              <div className="flex items-center gap-2 group/meta hover:text-primary-400 transition-colors cursor-default">
                <Calendar size={16} />
                <span className="text-sm">Nov 7, 2024</span>
              </div>
            </div>

            <Link
              href="#"
              className="btn-primary inline-flex items-center gap-2 group/btn hover:shadow-lg hover:shadow-primary-600/50"
            >
              Read Full Article
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full animate-in zoom-in-75 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-primary-400 transition-colors font-bold text-2xl"
            >
              ✕
            </button>
            <img
              src="/student-studying-focused-exam-prep.jpg"
              alt="Featured Article Full"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
