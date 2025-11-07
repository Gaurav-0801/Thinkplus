"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const stories = [
  {
    title: "10,000+ Students",
    subtitle: "Success Rate",
    stat: "95%",
    description: "Students who trained with us successfully cleared their target exams",
  },
  {
    title: "Expert Mentors",
    subtitle: "Average Experience",
    stat: "8+ yrs",
    description: "Mentors with proven track record from IIMs and other top institutions",
  },
  {
    title: "Mock Tests",
    subtitle: "Available",
    stat: "200+",
    description: "Comprehensive mock tests aligned with actual exam patterns",
  },
  {
    title: "Placement Rate",
    subtitle: "Into Top Colleges",
    stat: "98%",
    description: "Students securing admissions into top MBA and law colleges",
  },
]

export default function SuccessStoriesCarousel() {
  const scrollContainer = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainer.current) {
      const scrollAmount = 400
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-neutral-800/30 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">By The Numbers</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Our impressive track record speaks for itself</p>
        </div>

        <div className="relative">
          <div ref={scrollContainer} className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
            {stories.map((story, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full md:w-96 bg-gradient-to-br from-primary-600/10 to-accent-purple/10 border border-primary-600/30 rounded-xl p-8 hover:border-primary-600 transition-all duration-300"
              >
                <p className="text-neutral-400 text-sm font-semibold mb-2">{story.subtitle}</p>
                <h3 className="text-4xl font-black gradient-text mb-4">{story.stat}</h3>
                <h4 className="text-xl font-bold text-white mb-3">{story.title}</h4>
                <p className="text-neutral-300">{story.description}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-primary-600 hover:bg-primary-500 text-white p-2 rounded-full transition-all hidden md:flex items-center justify-center"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-primary-600 hover:bg-primary-500 text-white p-2 rounded-full transition-all hidden md:flex items-center justify-center"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
