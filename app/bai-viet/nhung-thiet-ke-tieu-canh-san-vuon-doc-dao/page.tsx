import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"
import TieuCanhSanVuonArticleContent from "@/components/articles/tieu-canh-san-vuon-article-content"

export const metadata: Metadata = {
  title: "Những Thiết Kế Tiểu Cảnh Sân Vườn Độc Đáo | Thiên Sơn Landscape",
  description:
    "Khám phá những thiết kế tiểu cảnh sân vườn đơn giản, gọn gàng nhưng vẫn sang trọng, tinh tế. Mang không gian xanh và sức sống cho gia đình bạn.",
  keywords: [
    "thiết kế tiểu cảnh sân vườn",
    "tiểu cảnh sân vườn đẹp",
    "sân vườn đơn giản",
    "thiết kế sân vườn",
    "tiểu cảnh độc đáo",
  ],
}

export default function TieuCanhSanVuonArticlePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <TieuCanhSanVuonArticleContent />
      <Footer />
      <FloatingContact />
    </main>
  )
}