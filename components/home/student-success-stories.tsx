"use client"

import { useEffect, useRef, useState } from "react"

const students = [
  {
    name: "Rajesh Kumar",
    exam: "CAT",
    score: "99.5 Percentile",
    image: "/male-student-smiling-professional-headshot.jpg",
    college: "IIM Ahmedabad",
  },
  {
    name: "Priya Singh",
    exam: "IPMAT",
    score: "98 Percentile",
    image: "/female-student-confident-professional-photo.jpg",
    college: "IIFT Delhi",
  },
  {
    name: "Arjun Patel",
    exam: "CLAT",
    score: "97.8 Percentile",
    image: "/male-student-young-professional-portrait.jpg",
    college: "NALSAR Hyderabad",
  },
  {
    name: "Divya Sharma",
    exam: "CAT",
    score: "96.5 Percentile",
    image: "/female-student-ambitious-professional-headshot.jpg",
    college: "IIM Bangalore",
  },
  {
    name: "Aditya Verma",
    exam: "IPMAT",
    score: "98.2 Percentile",
    image: "/male-student-focused-professional-photo.jpg",
    college: "IIM Indore",
  },
  {
    name: "Anushka Gupta",
    exam: "CLAT",
    score: "99.2 Percentile",
    image: "/female-student-successful-professional-portrait.jpg",
    college: "NALSAR Hyderabad",
  },
]

function StudentCard({ student, index }: { student: (typeof students)[0]; index: number }) {
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
      className={`group relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:border-primary-600/50 hover:from-neutral-800/80 hover:to-neutral-800/50 transition-all duration-300 overflow-hidden ${
        isVisible ? "animate-in fade-in scale-in-95" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Student Image */}
      <div className="relative z-10 mb-4 mx-auto w-20 h-20 md:w-24 md:h-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full p-1 group-hover:shadow-lg group-hover:shadow-primary-600/50 transition-all duration-300">
          <img
            src={student.image || "/placeholder.svg"}
            alt={student.name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* Student Info */}
      <h3 className="text-lg font-bold text-white mb-1 relative z-10">{student.name}</h3>
      <p className="text-primary-400 font-semibold mb-2 relative z-10">{student.exam}</p>
      <p className="text-neutral-400 text-sm mb-3 relative z-10">{student.college}</p>

      {/* Score Badge */}
      <div className="relative z-10 inline-block px-3 py-1 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full text-white font-bold text-sm group-hover:shadow-lg group-hover:shadow-primary-600/50 transition-all duration-300">
        {student.score}
      </div>

      {/* Border animation */}
      <div className="absolute inset-0 border-2 border-primary-600 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-300 pointer-events-none"></div>
    </div>
  )
}

export default function StudentSuccessStories() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-600/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-purple/5 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Our Top Achievers</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Meet the outstanding students who have achieved their dreams with ThinkPlus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student, index) => (
            <StudentCard key={index} student={student} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
