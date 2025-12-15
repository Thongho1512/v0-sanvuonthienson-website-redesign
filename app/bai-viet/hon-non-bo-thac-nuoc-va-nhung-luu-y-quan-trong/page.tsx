import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"
import HonNonBoThacNuocArticleContent from "@/components/articles/hon-non-bo-thac-nuoc-article-content"

export const metadata: Metadata = {
  title: "Hòn Non Bộ Thác Nước Và Những Lưu Ý Quan Trọng | Thiên Sơn Landscape",
  description:
    "Hòn non bộ thác nước - Nghệ thuật kết hợp cây đá thiên nhiên, tạo không gian xanh tươi mát, mang lại vận khí và tài lộc cho gia đình bạn.",
  keywords: [
    "hòn non bộ thác nước",
    "thác nước hòn non bộ",
    "thiết kế thác nước",
    "hòn non bộ kết hợp thác nước",
    "tiểu cảnh thác nước",
    "hòn non bộ đẹp",
  ],
}

export default function HonNonBoThacNuocArticlePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <HonNonBoThacNuocArticleContent />
      <Footer />
      <FloatingContact />
    </main>
  )
}