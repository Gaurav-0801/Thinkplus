"use client"

import { useEffect, useRef, useState } from "react"

export default function CEOStory() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 md:py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div ref={ref} className={`relative ${isVisible ? "animate-in fade-in slide-in-from-left-4" : "opacity-0"}`}>
            {/* Decorative dots background */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary-600/20 to-primary-400/20 rounded-lg"></div>

            <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden border border-neutral-700">
              <img
                src="/ceo-professional-headshot-in-coaching-center.jpg"
                alt="CEO of ThinkPlus"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-40"></div>
            </div>

            {/* Accent badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-primary-600 to-primary-400 rounded-lg p-4 text-white font-bold text-sm max-w-xs">
              <p className="text-lg">IIM Alumnus</p>
              <p className="text-xs opacity-90">8+ Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className={isVisible ? "animate-in fade-in slide-in-from-right-4" : "opacity-0"}>
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-primary-600/20 border border-primary-600/40 rounded-full text-primary-400 text-sm font-semibold">
                About
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">In the Words of Our Founder</h2>

            <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
              "When I started ThinkPlus, I saw a common problem: brilliant students were struggling with entrance exams
              not because they lacked intelligence, but because they lacked personalized guidance. I realized that every
              student deserves individualized attention and care."
            </p>

            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              "We concluded that the student success rate mergers depended on three factors: Quality guidance,
              Personalized mentoring, and Right resources. That's why we bring together the best faculty, cutting-edge
              technology, and proven strategies to help you achieve your dreams."
            </p>

            {/* Founder Info */}
            <div className="border-l-4 border-primary-600 pl-6">
              <p className="text-white font-bold text-lg">Raj Kumar Singh</p>
              <p className="text-primary-400 font-semibold">Founder & CEO, ThinkPlus Education</p>
              <p className="text-neutral-400 text-sm mt-2">IIM Bangalore | MBA Graduate | 8+ Years in EdTech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
