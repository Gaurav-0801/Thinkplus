import PageHeader from "@/components/page-header"
import TestimonialsSection from "@/components/testimonials/testimonials-section"
import SuccessStoriesCarousel from "@/components/testimonials/success-stories-carousel"

export const metadata = {
  title: "Testimonials - ThinkPlus Education",
  description: "Read success stories from our students",
}

export default function TestimonialsPage() {
  return (
    <main>
      <PageHeader title="Student Testimonials" subtitle="Success Stories from Our Community" />
      <TestimonialsSection />
      <SuccessStoriesCarousel />
    </main>
  )
}
