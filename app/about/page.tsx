import PageHeader from "@/components/page-header"
import CEOStory from "@/components/about/ceo-story"
import VisionMission from "@/components/about/vision-mission"
import TeamShowcase from "@/components/about/team-showcase"
import JourneyTimeline from "@/components/about/journey-timeline"

export const metadata = {
  title: "About Us - ThinkPlus Education",
  description: "Learn about our mission, vision, and the team behind ThinkPlus",
}

export default function AboutPage() {
  return (
    <main>
      <PageHeader title="About Us" subtitle="Our Story & Mission" />
      <CEOStory />
      <VisionMission />
      <JourneyTimeline />
      <TeamShowcase />
    </main>
  )
}
