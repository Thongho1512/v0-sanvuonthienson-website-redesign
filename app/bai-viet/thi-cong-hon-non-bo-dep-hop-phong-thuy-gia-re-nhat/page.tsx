import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"
import HonNonBoPhongThuyArticleContent from "@/components/articles/hon-non-bo-phong-thuy-gia-re-article-content"

export const metadata: Metadata = {
  title: "Thi Công Hòn Non Bộ Đẹp Hợp Phong Thủy Giá Rẻ Nhất | Thiên Sơn Landscape",
  description:
    "Thi công hòn non bộ đẹp hợp phong thủy với hơn 10 năm kinh nghiệm. Kết hợp đá, nước, đạo và thảo mang lại tài lộc, sự hòa hợp cho gia đình bạn.",
  keywords: [
    "thi công hòn non bộ",
    "hòn non bộ đẹp",
    "hòn non bộ phong thủy",
    "hòn non bộ giá rẻ",
    "thiết kế hòn non bộ",
    "hòn non bộ hcm",
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