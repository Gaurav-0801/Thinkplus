"use client"

import type React from "react"

import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const articles = [
  {
    title: "Top 10 CLAT Preparation Tips",
    category: "CLAT",
    date: "Nov 5, 2024",
    excerpt: "Master the essential strategies to ace your CLAT examination.",
    readTime: "5 min read",
    image: "/clat-books-studying.jpg",
  },
  {
    title: "IPMAT vs CAT: Which Exam is Right for You?",
    category: "Career",
    date: "Nov 3, 2024",
    excerpt: "Understand the differences and choose your path wisely.",
    readTime: "7 min read",
    image: "/student-comparing-exams.jpg",
  },
  {
    title: "Mock Test Strategy: How to Maximize Your Score",
    category: "Study Tips",
    date: "Nov 1, 2024",
    excerpt: "Learn how to make the most out of your mock test practice.",
    readTime: "6 min read",
    image: "/test-exam-practice.jpg",
  },
  {
    title: "Time Management for Competitive Exams",
    category: "Study Tips",
    date: "Oct 30, 2024",
    excerpt: "Master the art of time management during exams.",
    readTime: "5 min read",
    image: "/clock-time-management.jpg",
  },
  {
    title: "Quantitative Aptitude Shortcuts & Tricks",
    category: "CAT",
    date: "Oct 28, 2024",
    excerpt: "Quick techniques to solve QA questions faster.",
    readTime: "8 min read",
    image: "/math-calculations-numbers.jpg",
  },
  {
    title: "Logical Reasoning Patterns You Must Know",
    category: "CLAT",
    date: "Oct 26, 2024",
    excerpt: "Common patterns in LR questions and how to solve them.",
    readTime: "6 min read",
    image: "/logic-puzzle-reasoning.jpg",
  },
]

function BlogCard({ article, index }: { article: (typeof articles)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef(null)
  const cardRef = useRef<HTMLDivElement>(null)

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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const categoryColors: Record<string, string> = {
    CAT: "bg-green-500/10 text-green-400 border-green-500/30",
    CLAT: "bg-red-500/10 text-red-400 border-red-500/30",
    Career: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    "Study Tips": "bg-purple-500/10 text-purple-400 border-purple-500/30",
  }

  return (
    <Link href="#" className="group h-full">
      <div
        ref={ref}
        className={`h-full bg-neutral-800/50 border border-neutral-700 rounded-xl overflow-hidden hover:border-primary-600/50 hover:bg-neutral-800 transition-all duration-500 ${
          isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
        onMouseMove={handleMouseMove}
        ref={cardRef}
      >
        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-neutral-700 to-neutral-800">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
              filter: `saturate(${imageLoaded ? 1.1 : 1})`,
            }}
          />

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(233, 30, 123, 0.4), transparent 70%)`,
            }}
          ></div>

          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-700 via-neutral-600 to-neutral-700 animate-pulse"></div>
          )}
        </div>

        <div className="p-6">
          {/* Category badge */}
          <div
            className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-4 transition-all group-hover:scale-110 ${categoryColors[article.category as keyof typeof categoryColors]}`}
          >
            {article.category}
          </div>

          {/* Title with animation */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-neutral-400 text-sm mb-6 line-clamp-2">{article.excerpt}</p>

          {/* Meta */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-700">
            <div className="flex items-center gap-2 text-neutral-500 text-xs">
              <Calendar size={14} />
              <span>{article.date}</span>
            </div>
            <span className="text-neutral-500 text-xs">{article.readTime}</span>
          </div>

          <div className="mt-4 flex items-center gap-2 text-primary-400 font-semibold group-hover:translate-x-2 group-hover:gap-3 transition-all">
            Read More
            <ArrowRight size={16} className="group-hover:scale-125 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function BlogGrid() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Latest Articles</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Stay updated with tips, strategies, and insights for exam preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <BlogCard key={index} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
