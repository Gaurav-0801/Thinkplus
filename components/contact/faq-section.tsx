"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What are your course fees?",
    answer:
      "Our courses range from ₹8,000 to ₹40,000 depending on the program and features. We offer flexible payment plans and discounts for group batches. Contact us for personalized pricing.",
  },
  {
    question: "Do you offer a free trial class?",
    answer:
      "Yes! We offer a free trial class for all courses. You can experience our teaching methodology and faculty quality before enrolling. Book your free trial today.",
  },
  {
    question: "What is the batch size?",
    answer:
      "Our live classes have a maximum of 25-30 students per batch to ensure personalized attention. We also offer one-on-one mentoring sessions for premium members.",
  },
  {
    question: "Are classes available online?",
    answer:
      "Yes, all our classes are available both online and offline. You can attend live classes from anywhere and access recorded sessions anytime. We also provide lifetime access to course materials.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 7-day money-back guarantee if you are not satisfied with our courses. You can also pause or switch courses within 15 days of enrollment.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "While we focus on exam preparation, we provide career counseling and guidance on college selection. Many of our students secure excellent placements through their respective colleges.",
  },
]

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0)

  return (
    <div className="border border-neutral-700 rounded-lg overflow-hidden hover:border-primary-600/50 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-neutral-800/50 hover:bg-neutral-800 transition-colors text-left"
      >
        <span className="font-bold text-white">{faq.question}</span>
        <ChevronDown
          size={20}
          className={`text-primary-600 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-neutral-900 border-t border-neutral-700">
          <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-800/30 border-t border-neutral-700">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-neutral-400">Find answers to common questions about our courses and services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center">
          <p className="text-neutral-400 mb-4">Didn't find what you were looking for?</p>
          <a href="#" className="btn-secondary inline-block">
            Contact Our Support Team
          </a>
        </div>
      </div>
    </section>
  )
}
