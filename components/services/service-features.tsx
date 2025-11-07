const features = [
  {
    icon: "🎓",
    title: "Expert Faculty",
    description: "Learn from graduates and subject matter experts from top institutions",
  },
  {
    icon: "📱",
    title: "Flexible Learning",
    description: "Access live classes and recorded sessions anytime, anywhere",
  },
  {
    icon: "📊",
    title: "100+ Mock Tests",
    description: "Practice with comprehensive mock tests aligned with actual exams",
  },
  {
    icon: "👥",
    title: "Doubt Solving",
    description: "Real-time doubt resolution sessions with experienced mentors",
  },
  {
    icon: "📈",
    title: "Performance Tracking",
    description: "Detailed analytics and progress reports to monitor your growth",
  },
  {
    icon: "💬",
    title: "Community Support",
    description: "Connect with fellow aspirants and share your learning journey",
  },
]

export default function ServiceFeatures() {
  return (
    <section className="py-16 md:py-24 bg-neutral-800/30 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What Makes Us Special</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Comprehensive features designed to maximize your success rate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 hover:border-primary-600/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
