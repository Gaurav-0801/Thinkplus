import HeroSection from "@/components/home/hero-section"
import ServicesShowcase from "@/components/home/services-showcase"
import StatsSection from "@/components/home/stats-section"
import CTASection from "@/components/home/cta-section"
import StudentSuccessStories from "@/components/home/student-success-stories"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <StudentSuccessStories />
      <ServicesShowcase />
      <CTASection />
    </main>
  )
}
