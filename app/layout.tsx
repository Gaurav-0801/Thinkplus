import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "ThinkPlus Education - CAT, IPMAT, CLAT Coaching",
  description: "Premium online coaching for management entrance exams",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geistSans.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
