import PageHeader from "@/components/page-header"
import AllServices from "@/components/services/all-services"
import ServiceFeatures from "@/components/services/service-features"

export const metadata = {
  title: "Our Courses - ThinkPlus Education",
  description: "Explore our specialized courses for CAT, IPMAT, CLAT, and IQ preparation",
}

export default function ServicesPage() {
  return (
    <main>
      <PageHeader title="Our Courses" subtitle="Specialized Programs for Your Success" />
      <AllServices />
      <ServiceFeatures />
    </main>
  )
}
