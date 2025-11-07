export default function VisionMission() {
  const items = [
    {
      title: "Our Vision",
      description:
        "To build a self-sustaining learning ecosystem that empowers students worldwide to achieve their dreams through accessible, high-quality education and personalized mentoring.",
      icon: "🎯",
      color: "border-l-accent-blue",
    },
    {
      title: "Our Mission",
      description:
        "We deliver specialized courses and personalized mentoring to enhance aptitude, enabling students to crack competitive exams and gain admission to their dream colleges.",
      icon: "🚀",
      color: "border-l-primary-600",
    },
    {
      title: "Our Values",
      description:
        "Excellence in teaching, integrity in practice, innovation in approach, and commitment to student success. We believe in transparency and building long-term relationships.",
      icon: "💎",
      color: "border-l-accent-teal",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-neutral-800/30 border-y border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-neutral-900 border-l-4 ${item.color} rounded-lg p-8 hover:bg-neutral-800/50 transition-all duration-300 group`}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
              <p className="text-neutral-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
