import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@thinkplus.com",
      href: "mailto:info@thinkplus.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Room No 7224, Hostel Block, IIT Udaipur",
      href: "#",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "9 AM - 10 PM Daily",
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Linkedin, name: "LinkedIn", url: "#" },
    { icon: Youtube, name: "YouTube", url: "#" },
  ]

  return (
    <div className="space-y-6">
      {contactDetails.map((detail, index) => {
        const Icon = detail.icon
        return (
          <a
            key={index}
            href={detail.href}
            className="group bg-gradient-to-br from-neutral-800/60 to-neutral-900/40 border border-neutral-700/60 rounded-xl p-6 hover:border-primary-500/60 hover:from-neutral-800/80 hover:to-neutral-900/60 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div>
                <p className="text-neutral-400 text-sm font-semibold">{detail.label}</p>
                <p className="text-white font-bold mt-1">{detail.value}</p>
              </div>
            </div>
          </a>
        )
      })}

      {/* Quick Links */}
      <div className="bg-gradient-to-br from-primary-600/15 to-primary-500/5 border border-primary-500/40 rounded-xl p-6 hover:border-primary-500/60 transition-all">
        <h3 className="text-white font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
              Download Brochure
            </a>
          </li>
          <li>
            <a href="#" className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
              Schedule Demo
            </a>
          </li>
          <li>
            <a href="#" className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
              Testimonials
            </a>
          </li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="bg-gradient-to-br from-neutral-800/60 to-neutral-900/40 border border-neutral-700/60 rounded-xl p-6 hover:border-neutral-600 transition-all">
        <h3 className="text-white font-bold mb-4">Follow Us</h3>
        <div className="flex gap-3">
          {socialLinks.map((social) => {
            const IconComponent = social.icon
            return (
              <a
                key={social.name}
                href={social.url}
                className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/40 rounded-lg flex items-center justify-center hover:from-primary-500/30 hover:to-primary-600/20 transition-all"
                title={social.name}
              >
                <IconComponent size={18} className="text-primary-400" />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
