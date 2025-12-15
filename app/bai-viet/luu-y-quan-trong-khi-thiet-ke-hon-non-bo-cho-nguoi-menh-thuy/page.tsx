import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"
import MenhThuyArticleContent from "@/components/articles/menh-thuy-article-content"

export const metadata: Metadata = {
  title: "Lưu Ý Quan Trọng Khi Thiết Kế Hòn Non Bộ Cho Người Mệnh Thủy | Thiên Sơn Landscape",
  description:
    "Hướng dẫn chi tiết các lưu ý quan trọng khi thiết kế hòn non bộ cho người mệnh thủy. Tư vấn phong thủy, bố cục, vị trí đặt, số lượng cá và cây trồng phù hợp.",
  keywords: [
    "hòn non bộ mệnh thủy",
    "thiết kế hòn non bộ phong thủy",
    "hòn non bộ cho người mệnh thủy",
    "phong thủy mệnh thủy",
    "bố cục hòn non bộ",
    "tư vấn phong thủy",
  ],
}

export default function MenhThuyArticlePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <MenhThuyArticleContent />
      <Footer />
      <FloatingContact />
    </main>
  )
}