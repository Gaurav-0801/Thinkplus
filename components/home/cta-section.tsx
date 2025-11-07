import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-900 border-t border-neutral-700">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-primary-600/20 to-accent-purple/20 border border-primary-600/30 rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Ready to Transform Your Future?</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their MBA dreams with ThinkPlus. Start your journey
            today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 group">
              Get Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="btn-secondary inline-flex items-center justify-center gap-2">
              View All Courses
            </Link>
          </div>

          <p className="text-neutral-500 text-sm mt-8">Limited seats available for this batch</p>
        </div>
      </div>
    </section>
  )
}
