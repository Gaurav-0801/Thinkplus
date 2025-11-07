import PageHeader from "@/components/page-header"
import BlogGrid from "@/components/blog/blog-grid"
import FeaturedArticle from "@/components/blog/featured-article"

export const metadata = {
  title: "Blog - ThinkPlus Education",
  description: "Tips, strategies, and insights for competitive exam preparation",
}

export default function BlogPage() {
  return (
    <main>
      <PageHeader title="Blog & Resources" subtitle="Tips, Insights & Success Strategies" />
      <FeaturedArticle />
      <BlogGrid />
    </main>
  )
}
