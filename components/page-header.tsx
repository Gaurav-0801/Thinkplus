interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative bg-gradient-to-b from-neutral-800 to-neutral-900 pt-20 pb-12 md:pb-16 border-b border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-2">{title}</h1>
        {subtitle && <p className="text-xl text-neutral-400">{subtitle}</p>}
      </div>

      {/* Decorative dots */}
      <div className="absolute top-10 right-10 flex gap-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-2">
            {[...Array(4)].map((_, j) => (
              <div
                key={j}
                className="w-2 h-2 rounded-full bg-primary-600/30"
                style={{ opacity: Math.random() * 0.5 + 0.3 }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
