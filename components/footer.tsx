import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">T+</span>
              </div>
              <span className="gradient-text font-bold">ThinkPlus</span>
            </div>
            <p className="text-neutral-400 text-sm">Premium coaching for CAT, IPMAT, CLAT, and more entrance exams.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Courses</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="#" className="hover:text-primary-400 transition-colors">
                  CAT Coaching
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-400 transition-colors">
                  IPMAT Coaching
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-400 transition-colors">
                  CLAT Coaching
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-400 transition-colors">
                  IQ+ Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>&copy; 2025 ThinkPlus Education. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
