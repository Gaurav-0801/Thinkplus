"use client"

import { Check, Users, Clock, BookOpen } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ServiceDetail({ service }: any) {
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "standard" | "premium">("standard")

  const plans = [
    {
      name: "Basic",
      key: "basic" as const,
      features: ["Live Classes", "Study Materials", "Email Support", "Practice Tests"],
    },
    {
      name: "Standard",
      key: "standard" as const,
      features: ["All Basic Features", "Doubt Sessions", "Monthly Mentoring", "Progress Reports"],
      popular: true,
    },
    {
      name: "Premium",
      key: "premium" as const,
      features: ["All Standard Features", "1-on-1 Mentoring", "Career Counseling", "Lifetime Access"],
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-800 to-neutral-900 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className={`h-2 w-8 bg-gradient-to-r ${service.color} rounded-full`}></div>
            <span className="text-primary-400 font-semibold">Our Program</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">{service.title}</h1>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl">{service.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Clock className="text-primary-600" size={24} />
              <div>
                <p className="text-neutral-400 text-sm">Duration</p>
                <p className="text-white font-bold">{service.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-primary-600" size={24} />
              <div>
                <p className="text-neutral-400 text-sm">Current Batch</p>
                <p className="text-white font-bold">{service.batch}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BookOpen className="text-primary-600" size={24} />
              <div>
                <p className="text-neutral-400 text-sm">Format</p>
                <p className="text-white font-bold">Live + Recorded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-black text-white mb-12">Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.highlights.map((highlight: string, i: number) => (
              <div key={i} className="flex gap-4 bg-neutral-800/30 p-6 rounded-lg border border-neutral-700">
                <div className="flex-shrink-0">
                  <Check className="text-primary-600" size={24} />
                </div>
                <p className="text-neutral-300">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 md:py-24 bg-neutral-800/30 border-y border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-black text-white mb-12">Curriculum Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.curriculum.map((module: any, i: number) => (
              <div
                key={i}
                className="bg-neutral-900 border border-neutral-700 rounded-lg p-6 hover:border-primary-600/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2">{module.module}</h3>
                <p className="text-neutral-400">{module.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Choose Your Plan</h2>
            <p className="text-neutral-400">Flexible pricing options to suit your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.key}
                className={`rounded-xl overflow-hidden transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  plan.popular
                    ? "ring-2 ring-primary-600 bg-gradient-to-b from-neutral-800 to-neutral-900"
                    : "bg-neutral-800/50 border border-neutral-700"
                }`}
                onClick={() => setSelectedPlan(plan.key)}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-primary-600 to-primary-400 py-2 text-center">
                    <span className="text-white text-sm font-bold">MOST POPULAR</span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-black gradient-text">{service.pricing[plan.key]}</span>
                    <span className="text-neutral-400 ml-2">one-time</span>
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-bold mb-6 transition-all ${
                      selectedPlan === plan.key
                        ? "bg-primary-600 text-white"
                        : "bg-neutral-700 text-white hover:bg-neutral-600"
                    }`}
                  >
                    Select Plan
                  </button>

                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check size={16} className="text-primary-600" />
                        <span className="text-neutral-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
