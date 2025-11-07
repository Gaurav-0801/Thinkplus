import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import FAQSection from "@/components/contact/faq-section"

export const metadata = {
  title: "Contact Us - ThinkPlus Education",
  description: "Get in touch with our team for queries and support",
}

export default function ContactPage() {
  return (
    <main>
      <PageHeader title="Get In Touch" subtitle="We're Here to Help" />
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 bg-gradient-to-b from-neutral-900 to-neutral-800/50">
        <ContactForm />
        <ContactInfo />
      </div>
      <FAQSection />
    </main>
  )
}
