import { notFound } from "next/navigation"
import ServiceDetail from "@/components/services/service-detail"

const serviceData: Record<string, any> = {
  cat: {
    title: "CAT - Certified Aptitude Test",
    subtitle: "Gateway to IIM",
    color: "from-green-500 to-emerald-600",
    accent: "bg-green-500/10 border-green-500/30",
    description: "Comprehensive CAT preparation program designed to crack India's toughest MBA entrance exam.",
    highlights: [
      "Expert faculty from IIMs and top institutes",
      "100+ full-length mock tests",
      "Personalized doubt solving sessions",
      "Live classes & recorded sessions",
      "One-on-one mentoring available",
    ],
    curriculum: [
      { module: "Quantitative Aptitude", topics: "Numbers, Algebra, Geometry, Trigonometry" },
      { module: "Data Interpretation", topics: "Graphs, Tables, Charts Analysis" },
      { module: "Logical Reasoning", topics: "Puzzles, Arrangements, Syllogism" },
      { module: "Verbal Ability", topics: "RC, Para Jumbles, Sentence Correction" },
    ],
    pricing: {
      basic: "₹15,000",
      standard: "₹25,000",
      premium: "₹40,000",
    },
    duration: "6 months",
    batch: "Batch 2025-Jan",
  },
  ipmat: {
    title: "IPMAT - IIM Indore Entrance",
    subtitle: "Start Your MBA Journey",
    color: "from-blue-500 to-cyan-600",
    accent: "bg-blue-500/10 border-blue-500/30",
    description:
      "Specialized coaching for IIM Indore IPMAT exam with comprehensive coverage of MCQ and descriptive sections.",
    highlights: [
      "IIM Indore exam specialists",
      "80+ mock tests aligned with actual exam",
      "Descriptive writing practice sessions",
      "Real-time performance analysis",
      "Guaranteed doubt resolution",
    ],
    curriculum: [
      { module: "Quantitative Aptitude", topics: "Arithmetic, Geometry, Modern Math" },
      { module: "Logical Reasoning", topics: "Puzzles, Games, Arrangement" },
      { module: "Reading Comprehension", topics: "Critical Reading, Inference" },
      { module: "Descriptive Questions", topics: "Essay, Summary, Arguments" },
    ],
    pricing: {
      basic: "₹12,000",
      standard: "₹20,000",
      premium: "₹35,000",
    },
    duration: "4 months",
    batch: "Batch 2025-Feb",
  },
  clat: {
    title: "CLAT - Common Law Admission",
    subtitle: "Law School Excellence",
    color: "from-red-500 to-orange-600",
    accent: "bg-red-500/10 border-red-500/30",
    description: "Comprehensive CLAT coaching designed to help you crack India's premier law entrance examination.",
    highlights: [
      "Expert legal minds as faculty",
      "150+ section-wise mock tests",
      "Legal reasoning mastery program",
      "GK & current affairs updates",
      "Interview preparation included",
    ],
    curriculum: [
      { module: "English Language", topics: "Reading Comp, Vocabulary, Grammar" },
      { module: "Legal Reasoning", topics: "Case Analysis, Legal Principles" },
      { module: "Logical Reasoning", topics: "Puzzles, Arguments, Critical Thinking" },
      { module: "General Knowledge", topics: "Current Affairs, Static GK" },
    ],
    pricing: {
      basic: "₹10,000",
      standard: "₹18,000",
      premium: "₹32,000",
    },
    duration: "3 months",
    batch: "Batch 2025-Mar",
  },
  iq: {
    title: "IQ+ Program",
    subtitle: "Build Your Intelligence Quotient",
    color: "from-teal-500 to-cyan-600",
    accent: "bg-teal-500/10 border-teal-500/30",
    description:
      "A comprehensive program designed to enhance your analytical and reasoning skills for all competitive exams.",
    highlights: [
      "Foundation building for all exams",
      "Interactive problem-solving sessions",
      "Pattern recognition training",
      "Speed & accuracy coaching",
      "Lifetime access to resources",
    ],
    curriculum: [
      { module: "Number Systems", topics: "Basics, Patterns, Problem Solving" },
      { module: "Logic Building", topics: "Reasoning, Deduction, Induction" },
      { module: "Spatial Reasoning", topics: "Visualization, 3D, Patterns" },
      { module: "Speed Drills", topics: "Time Management, Accuracy Improvement" },
    ],
    pricing: {
      basic: "₹8,000",
      standard: "₹14,000",
      premium: "₹25,000",
    },
    duration: "2 months",
    batch: "Batch 2025-Jan",
  },
}

export async function generateStaticParams() {
  return Object.keys(serviceData).map((id) => ({
    id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const service = serviceData[params.id]
  if (!service) return notFound()
  return {
    title: `${service.title} - ThinkPlus Education`,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = serviceData[params.id]
  if (!service) notFound()

  return (
    <main>
      <ServiceDetail service={service} />
    </main>
  )
}
