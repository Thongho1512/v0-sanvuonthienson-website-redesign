import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"
import RockscapeHero from "@/components/services/rockscape-hero"
import RockscapeFeatures from "@/components/services/rockscape-features"
import RockscapeGallery from "@/components/services/rockscape-gallery"
import RockscapeProcess from "@/components/services/rockscape-process"

export const metadata: Metadata = {
  title: "Thi Công Hòn Non Bộ Đẹp Hợp Phong Thủy | Thiên Sơn Landscape",
  description:
    "Thi công hòn non bộ đẹp, nghệ thuật bởi nghệ nhân Lê Anh từ Huế. Hơn 15 năm kinh nghiệm, 200+ công trình hoàn thành. Tư vấn phong thủy miễn phí.",
  keywords: [
    "thi công hòn non bộ",
    "hòn non bộ đẹp",
    "hòn non bộ Huế",
    "hòn non bộ phong thủy",
    "tiểu cảnh hòn non bộ",
  ],
}

export default function RockscapePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <RockscapeHero />
      <RockscapeFeatures />
      <RockscapeProcess />
      <RockscapeGallery />
      <Footer />
      <FloatingContact />
    </main>
  )
}
