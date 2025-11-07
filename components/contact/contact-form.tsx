"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "cat",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsLoading(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", course: "cat", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="md:col-span-2">
      <div className="bg-gradient-to-br from-neutral-800/60 to-neutral-900/40 border border-neutral-700/60 rounded-xl p-8 hover:border-neutral-600 transition-all duration-300">
        <h2 className="text-3xl font-black bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent mb-2">
          Send us a Message
        </h2>
        <p className="text-neutral-400 mb-8">We'll get back to you within 24 hours</p>

        {submitted ? (
          <div className="text-center py-12">
            <div className="flex justify-center mb-4">
              <CheckCircle size={48} className="text-primary-500 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-neutral-400">Thank you for reaching out. We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-white font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neutral-900/60 border border-neutral-600/40 rounded-lg text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neutral-900/60 border border-neutral-600/40 rounded-lg text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neutral-900/60 border border-neutral-600/40 rounded-lg text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 outline-none transition-all"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Course Selection */}
            <div>
              <label className="block text-white font-semibold mb-2">Which Course are you interested in?</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-900/60 border border-neutral-600/40 rounded-lg text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 outline-none transition-all"
              >
                <option value="cat">CAT Coaching</option>
                <option value="ipmat">IPMAT Coaching</option>
                <option value="clat">CLAT Coaching</option>
                <option value="iq">IQ+ Program</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-neutral-900/60 border border-neutral-600/40 rounded-lg text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 outline-none transition-all resize-none"
                placeholder="Tell us about your goals and any questions you have..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white rounded-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-primary-500/50"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {/* Terms */}
            <p className="text-neutral-500 text-xs text-center">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
