"use client"

import { useEffect, useRef, useState } from "react"

const team = [
  {
    name: "Raj Kumar Singh",
    role: "Founder & CEO",
    expertise: "CAT, IPMAT Strategy",
    image: "R",
  },
  {
    name: "Priya Sharma",
    role: "Head of Academics",
    expertise: "Curriculum Design",
    image: "P",
  },
  {
    name: "Amit Patel",
    role: "Sr. Faculty - CAT",
    expertise: "Quantitative Aptitude",
    image: "A",
  },
  {
    name: "Neha Verma",
    role: "Sr. Faculty - CLAT",
    expertise: "Legal Reasoning",
    image: "N",
  },
]

export default function TeamShowcase() {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([])
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          team.forEach((_, i) => {
            setTimeout(() => {
              setVisibleIndices((prev) => [...prev, i])
            }, i * 150)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 md:py-24 bg-neutral-800/30 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Meet Our Team</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Experienced educators from top institutions dedicated to your success
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group bg-neutral-900 border border-neutral-700 rounded-xl overflow-hidden hover:border-primary-600 transition-all duration-500 ${
                visibleIndices.includes(index) ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0"
              }`}
            >
              {/* Avatar */}
              <div className="aspect-square bg-gradient-to-br from-primary-600/30 to-accent-purple/30 flex items-center justify-center overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                  <span className="text-6xl font-black text-primary-400 group-hover:scale-110 transition-transform">
                    {member.image}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-black text-white mb-1">{member.name}</h3>
                <p className="text-primary-400 text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-neutral-400 text-sm">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
