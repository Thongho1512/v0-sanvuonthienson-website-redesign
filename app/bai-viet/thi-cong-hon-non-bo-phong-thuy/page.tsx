import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"
import HonNonBoPhongThuyArticleContent from "@/components/articles/hon-non-bo-phong-thuy-article-content"

export const metadata: Metadata = {
  title: "Thi Công Hòn Non Bộ Phong Thủy | Thiên Sơn Landscape",
  description:
    "Thi công hòn non bộ phong thủy bởi nghệ nhân Huế. Kết hợp kiến trúc hiện đại và kiến thức phong thủy, mang lại tài lộc, sức khỏe cho gia đình.",
  keywords: [
    "hòn non bộ phong thủy",
    "thi công hòn non bộ",
    "phong thủy hòn non bộ",
    "hòn non bộ đẹp",
    "thiên sơn landscape",
  ],
}

export default function HonNonBoPhongThuyArticlePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <HonNonBoPhongThuyArticleContent />
      <Footer />
      <FloatingContact />
    </main>
  )
}