"use client"

import { useEffect, useRef, useState } from "react"

const timeline = [
  {
    year: "2017",
    title: "Founded",
    description: "ThinkPlus started with a vision to revolutionize entrance exam preparation",
  },
  {
    year: "2018",
    title: "1000+ Students",
    description: "Crossed the 1000 student milestone and expanded to 2 centers",
  },
  {
    year: "2020",
    title: "Online Launch",
    description: "Launched online coaching during pandemic, reaching students nationwide",
  },
  {
    year: "2022",
    title: "5000+ Success Stories",
    description: "Achieved 5000+ successful admissions to top MBA colleges",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Recognized as a leading EdTech platform for entrance exam preparation",
  },
]

function TimelineItem({ item, index, isActive }: { item: (typeof timeline)[0]; index: number; isActive: boolean }) {
  return (
    <div className="flex gap-6 relative">
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full border-4 transition-all duration-500 ${
            isActive ? "bg-primary-600 border-primary-400 scale-150" : "bg-neutral-800 border-neutral-600"
          }`}
        ></div>
        {index !== timeline.length - 1 && (
          <div
            className={`w-1 h-20 transition-colors duration-500 ${isActive ? "bg-primary-600" : "bg-neutral-700"}`}
          ></div>
        )}
      </div>

      {/* Content */}
      <div className={`pb-12 transition-all duration-500 ${isActive ? "opacity-100" : "opacity-60"}`}>
        <div className="text-primary-400 font-bold text-lg mb-1">{item.year}</div>
        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-neutral-400 max-w-xs">{item.description}</p>
      </div>
    </div>
  )
}

export default function JourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % timeline.length)
          }, 2000)
          return () => clearInterval(interval)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 md:py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Journey</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            From a small vision to becoming an industry leader in entrance exam preparation
          </p>
        </div>

        <div ref={ref} className="max-w-2xl mx-auto">
          {timeline.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} isActive={index === activeIndex} />
          ))}
        </div>
      </div>
    </section>
  )
}
