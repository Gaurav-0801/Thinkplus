"use client"

import type React from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useRef, useState } from "react"

const services = [
  {
    id: "cat",
    title: "CAT",
    subtitle: "Gateway to IIM",
    description: "Comprehensive CAT preparation with mock tests and personalized guidance",
    icon: "📊",
    color: "from-green-500 to-emerald-600",
    accent: "bg-green-500/10 border-green-500/30",
  },
  {
    id: "ipmat",
    title: "IPMAT",
    subtitle: "Start Your MBA Journey",
    description: "Specialized coaching for IIM Indore IPMAT exam",
    icon: "📈",
    color: "from-blue-500 to-cyan-600",
    accent: "bg-blue-500/10 border-blue-500/30",
  },
  {
    id: "clat",
    title: "CLAT",
    subtitle: "Law School Excellence",
    description: "Strategic preparation for CLAT and other law entrance exams",
    icon: "⚖️",
    color: "from-red-500 to-orange-600",
    accent: "bg-red-500/10 border-red-500/30",
  },
  {
    id: "iq",
    title: "IQ+",
    subtitle: "Build Your IQ",
    description: "Enhance your analytical and reasoning skills for competitive exams",
    icon: "🧠",
    color: "from-teal-500 to-cyan-600",
    accent: "bg-teal-500/10 border-teal-500/30",
  },
]

export default function ServicesShowcase() {
  const scrollContainer = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const scroll = (direction: "left" | "right") => {
    if (scrollContainer.current) {
      const scrollAmount = 400
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setHoveredIndex(index)
  }

  return (
    <section className="py-16 md:py-24 bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-blue/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-600/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Courses</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Specialized programs designed for different competitive entrance exams
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div
            ref={scrollContainer}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
          >
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="flex-shrink-0 w-full md:w-80"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`group bg-neutral-800/50 border ${service.accent} rounded-xl p-6 h-full hover:bg-neutral-800 transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden`}
                >
                  {hoveredIndex === index && (
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, currentColor, transparent 70%)`,
                      }}
                    ></div>
                  )}

                  {/* Color accent bar */}
                  <div
                    className={`h-1 w-12 bg-gradient-to-r ${service.color} rounded-full mb-6 transition-all duration-300 group-hover:w-24`}
                  ></div>

                  {/* Icon */}
                  <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-black text-white mb-2 relative z-10">{service.title}</h3>
                  <p className="text-neutral-400 text-sm mb-4 relative z-10">{service.subtitle}</p>

                  {/* Description */}
                  <p className="text-neutral-300 mb-6 text-sm leading-relaxed relative z-10">{service.description}</p>

                  {/* Stats or features */}
                  <div className="space-y-2 text-sm text-neutral-400 relative z-10">
                    <div className="flex items-center gap-2 transition-all duration-300 group-hover:translate-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                      <span>Expert Faculty</span>
                    </div>
                    <div
                      className="flex items-center gap-2 transition-all duration-300 group-hover:translate-x-2"
                      style={{ transitionDelay: "50ms" }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                      <span>Live Sessions</span>
                    </div>
                    <div
                      className="flex items-center gap-2 transition-all duration-300 group-hover:translate-x-2"
                      style={{ transitionDelay: "100ms" }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                      <span>100+ Mock Tests</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-6 border-t border-neutral-700 relative z-10">
                    <span className="text-primary-400 font-semibold group-hover:translate-x-2 inline-flex items-center gap-2 transition-transform">
                      Explore Course
                      <ChevronRight size={16} />
                    </span>
                  </div>

                  <div className="absolute inset-0 border border-primary-600/0 group-hover:border-primary-600/50 rounded-xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-primary-600 hover:bg-primary-500 text-white p-2 rounded-full transition-all hidden md:flex items-center justify-center hover:scale-125 hover:shadow-lg hover:shadow-primary-600/50"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-primary-600 hover:bg-primary-500 text-white p-2 rounded-full transition-all hidden md:flex items-center justify-center hover:scale-125 hover:shadow-lg hover:shadow-primary-600/50"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
