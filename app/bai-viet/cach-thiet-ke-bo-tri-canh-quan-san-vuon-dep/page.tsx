import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"
import CanhQuanSanVuonArticleContent from "@/components/articles/canh-quan-san-vuon-article-content"

export const metadata: Metadata = {
  title: "Cách Thiết Kế, Bố Trí Cảnh Quan Sân Vườn Đẹp | Thiên Sơn Landscape",
  description:
    "Hướng dẫn cách thiết kế, bố trí cảnh quan sân vườn đẹp và khoa học. Vật liệu, cây cối, bố cục và không gian thư giãn cho sân vườn của bạn.",
  keywords: [
    "thiết kế cảnh quan sân vườn",
    "bố trí sân vườn đẹp",
    "cảnh quan sân vườn",
    "thiết kế sân vườn",
    "sân vườn đẹp",
  ],
}

export default function CanhQuanSanVuonArticlePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <CanhQuanSanVuonArticleContent />
      <Footer />
      <FloatingContact />
    </main>
  )
}