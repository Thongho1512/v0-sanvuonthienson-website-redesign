import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Liên Hệ Tư Vấn Miễn Phí | Thiên Sơn Landscape",
  description:
    "Liên hệ Thiên Sơn Landscape để được tư vấn miễn phí về thiết kế hồ cá Koi, hòn non bộ, sân vườn. Hotline: 0938 386 679. Phục vụ tận tâm 24/7.",
  keywords: ["liên hệ thiên sơn", "tư vấn hồ cá koi", "báo giá hòn non bộ", "tư vấn cảnh quan"],
}

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <Footer />
      <FloatingContact />
    </main>
  )
}
