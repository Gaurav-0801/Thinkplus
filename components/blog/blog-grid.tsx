"use client"

import type React from "react"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const articles = [
  {
    id: 1,
    title: "Top 10 CLAT Preparation Tips",
    category: "CLAT",
    date: "Nov 5, 2024",
    excerpt: "Master the essential strategies to ace your CLAT examination.",
    readTime: "5 min read",
    image: "/clat-books-studying.jpg",
    author: "Raj Kumar Singh",
    authorImage: "/male-teacher-professional-photo.jpg",
  },
  {
    id: 2,
    title: "IPMAT vs CAT: Which Exam is Right for You?",
    category: "Career",
    date: "Nov 3, 2024",
    excerpt: "Understand the differences and choose your path wisely.",
    readTime: "7 min read",
    image: "/student-comparing-exams.jpg",
    author: "Priya Sharma",
    authorImage: "/female-teacher-professional-photo.jpg",
  },
  {
    id: 3,
    title: "Mock Test Strategy: How to Maximize Your Score",
    category: "Study Tips",
    date: "Nov 1, 2024",
    excerpt: "Learn how to make the most out of your mock test practice.",
    readTime: "6 min read",
    image: "/test-exam-practice.jpg",
    author: "Aditya Patel",
    authorImage: "/male-mentor-professional-headshot.jpg",
  },
  {
    id: 4,
    title: "Time Management for Competitive Exams",
    category: "Study Tips",
    date: "Oct 30, 2024",
    excerpt: "Master the art of time management during exams.",
    readTime: "5 min read",
    image: "/clock-time-management.jpg",
    author: "Divya Verma",
    authorImage: "/female-mentor-professional-portrait.jpg",
  },
  {
    id: 5,
    title: "Quantitative Aptitude Shortcuts & Tricks",
    category: "CAT",
    date: "Oct 28, 2024",
    excerpt: "Quick techniques to solve QA questions faster.",
    readTime: "8 min read",
    image: "/math-calculations-numbers.jpg",
    author: "Rohit Gupta",
    authorImage: "/male-expert-professional-photo.jpg",
  },
  {
    id: 6,
    title: "Logical Reasoning Patterns You Must Know",
    category: "CLAT",
    date: "Oct 26, 2024",
    excerpt: "Common patterns in LR questions and how to solve them.",
    readTime: "6 min read",
    image: "/logic-puzzle-reasoning.jpg",
    author: "Sneha Mishra",
    authorImage: "/female-expert-professional-headshot.jpg",
  },
]

interface BlogCardProps {
  article: (typeof articles)[0]
  index: number
}

function BlogCard({ article, index }: BlogCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (cardRef.current) observer.observe(cardRef.current)
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
        ref={cardRef}
        className={`h-full bg-neutral-800/50 border border-neutral-700 rounded-xl overflow-hidden hover:border-pink-500/50 hover:bg-neutral-800/80 transition-all duration-500 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: `${index * 50}ms` }}
        onMouseMove={handleMouseMove}
      >
        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-neutral-700 to-neutral-800">
          <img
            src={article.image || "/placeholder.svg?height=192&width=400&query=blog-article"}
            alt={article.title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? "opacity-100" : "opacity-50"
            }`}
          />
          {/* Light effect overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(233, 30, 123, 0.4), transparent 70%)`,
            }}
          />
        </div>

        <div className="p-6 flex flex-col h-full justify-between">
          <div>
            <div
              className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-4 transition-all ${
                categoryColors[article.category as keyof typeof categoryColors] ||
                "bg-neutral-700/50 text-neutral-300 border-neutral-600"
              }`}
            >
              {article.category}
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors line-clamp-2">
              {article.title}
            </h3>

            <p className="text-neutral-400 text-sm mb-6 line-clamp-2">{article.excerpt}</p>
          </div>

          <div>
            <div className="flex items-center justify-between pt-4 border-t border-neutral-700 mb-4">
              <div className="flex items-center gap-2 text-neutral-500 text-xs">
                <Calendar size={14} />
                <span>{article.date}</span>
              </div>
              <span className="text-neutral-500 text-xs">{article.readTime}</span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={article.authorImage || "/placeholder.svg?height=32&width=32&query=author"}
                alt={article.author}
                className="w-8 h-8 rounded-full object-cover border border-pink-600/30"
              />
              <div className="flex-1 min-w-0">
                <p className="text-neutral-400 text-xs truncate">{article.author}</p>
              </div>
              <ArrowRight size={16} className="text-pink-400 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function BlogGrid() {
  return (
    <section className="w-full py-16 md:py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Latest Articles</h2>
          <p className="text-neutral-400 text-lg">
            Stay updated with tips, strategies, and insights for exam preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <BlogCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
