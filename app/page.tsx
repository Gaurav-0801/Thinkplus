import HeroSection from "@/components/home/hero-section"
import ServicesShowcase from "@/components/home/services-showcase"
import StatsSection from "@/components/home/stats-section"
import CTASection from "@/components/home/cta-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesShowcase />
      <CTASection />
    </main>
  )
}
