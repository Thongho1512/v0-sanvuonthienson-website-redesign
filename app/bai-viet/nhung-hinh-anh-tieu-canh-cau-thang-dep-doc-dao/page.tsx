import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"
import TieuCanhCauThangArticleContent from "@/components/articles/tieu-canh-cau-thang-article-content"

export const metadata: Metadata = {
  title: "Những Hình Ảnh Tiểu Cảnh Cầu Thang Đẹp, Độc Đáo | Thiên Sơn Landscape",
  description:
    "Khám phá những mẫu tiểu cảnh cầu thang đẹp, độc đáo. Thiết kế tiểu cảnh gầm cầu thang khô và nước, tận dụng không gian 'góc chết' thành khu vườn xanh.",
  keywords: [
    "tiểu cảnh cầu thang",
    "tiểu cảnh gầm cầu thang",
    "tiểu cảnh cầu thang đẹp",
    "tiểu cảnh cầu thang khô",
    "tiểu cảnh dưới cầu thang",
    "thiết kế tiểu cảnh cầu thang",
  ],
}

export default function TieuCanhCauThangArticlePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <TieuCanhCauThangArticleContent />
      <Footer />
      <FloatingContact />
    </main>
  )
}
