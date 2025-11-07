"use client"

import Link from "next/link"
import { Check } from "lucide-react"

const services = [
  {
    id: "cat",
    title: "CAT",
    subtitle: "Gateway to IIM",
    color: "from-green-500 to-emerald-600",
    features: ["Expert Faculty", "100+ Mocks", "Personalized Guidance"],
    price: "From ₹15,000",
  },
  {
    id: "ipmat",
    title: "IPMAT",
    subtitle: "IIM Indore Excellence",
    color: "from-blue-500 to-cyan-600",
    features: ["IIM Specialists", "80+ Mocks", "Descriptive Training"],
    price: "From ₹12,000",
  },
  {
    id: "clat",
    title: "CLAT",
    subtitle: "Law School Admission",
    color: "from-red-500 to-orange-600",
    features: ["Legal Experts", "150+ Mocks", "Interview Prep"],
    price: "From ₹10,000",
  },
  {
    id: "iq",
    title: "IQ+",
    subtitle: "Build Your IQ",
    color: "from-teal-500 to-cyan-600",
    features: ["Foundation Building", "Speed Drills", "Lifetime Access"],
    price: "From ₹8,000",
  },
]

export default function AllServices() {
  return (
    <section className="py-16 md:py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Comprehensive Programs</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Choose from our specialized courses tailored for different competitive exams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`} className="group">
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8 hover:bg-neutral-800 hover:border-primary-600/50 transition-all duration-300 h-full hover:shadow-2xl hover:shadow-primary-600/10">
                {/* Color bar */}
                <div className={`h-1 w-16 bg-gradient-to-r ${service.color} rounded-full mb-6`}></div>

                {/* Title */}
                <h3 className="text-3xl font-black text-white mb-2">{service.title}</h3>
                <p className="text-neutral-400 text-sm mb-6">{service.subtitle}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-600/20 border border-primary-600 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-primary-400" />
                      </div>
                      <span className="text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex justify-between items-center pt-6 border-t border-neutral-700">
                  <p className="text-primary-400 font-bold">{service.price}</p>
                  <span className="text-primary-400 font-semibold group-hover:translate-x-2 transition-transform">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
