"use client"

import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "CAT 99.5 Percentile",
    image: "A",
    text: "ThinkPlus helped me crack CAT with 99.5 percentile. The personalized mentoring and doubt sessions were game-changers!",
    rating: 5,
    college: "IIM Ahmedabad",
  },
  {
    name: "Neha Gupta",
    role: "IPMAT Selected",
    image: "N",
    text: "The expert faculty and comprehensive mock tests made me confident. I cleared IPMAT and got into IIM Indore!",
    rating: 5,
    college: "IIM Indore",
  },
  {
    name: "Rohit Verma",
    role: "CLAT 98 Percentile",
    image: "R",
    text: "Outstanding coaching with focus on legal reasoning. The mentors helped me crack CLAT and secure my dream law college.",
    rating: 5,
    college: "NLSIU Bangalore",
  },
  {
    name: "Priya Patel",
    role: "CAT 98 Percentile",
    image: "P",
    text: "The structured approach and live sessions made all the difference. Highly recommend ThinkPlus to anyone serious about MBA!",
    rating: 5,
    college: "IIM Bangalore",
  },
  {
    name: "Sanjay Kumar",
    role: "IPMAT 96 Percentile",
    image: "S",
    text: "Best decision to join ThinkPlus. The curriculum is well-designed and the faculty is incredibly supportive.",
    rating: 5,
    college: "IIM Indore",
  },
  {
    name: "Isha Singh",
    role: "CLAT 97 Percentile",
    image: "I",
    text: "Excellent coaching center with experienced mentors. The doubt solving sessions were particularly helpful!",
    rating: 5,
    college: "NALSAR Hyderabad",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) {
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
    <div
      ref={ref}
      className={`group bg-neutral-800/50 border border-neutral-700 rounded-xl p-8 hover:border-primary-600/50 transition-all duration-500 hover:bg-neutral-800 ${
        isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-neutral-300 text-lg mb-6 italic leading-relaxed">"{testimonial.text}"</p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-neutral-700">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-400 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">{testimonial.image}</span>
        </div>
        <div>
          <p className="font-bold text-white">{testimonial.name}</p>
          <p className="text-sm text-primary-400">{testimonial.role}</p>
          <p className="text-xs text-neutral-500">{testimonial.college}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What Students Say</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Real stories from successful students who achieved their dream colleges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
