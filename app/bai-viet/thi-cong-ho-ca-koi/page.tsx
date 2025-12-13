import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"
import KoiArticleContent from "@/components/articles/koi-article-content"

export const metadata: Metadata = {
  title: "Đơn Vị Thiết Kế - Thi Công Hồ Cá Koi Số 1 Miền Nam | Thiên Sơn Landscape",
  description:
    "Thiên Sơn - đơn vị thi công hồ cá koi chuyên nghiệp, uy tín được nhiều gia chủ tin tưởng. Đội ngũ kiến trúc sư và nghệ nhân nhiều năm kinh nghiệm.",
  keywords: [
    "thi công hồ cá koi",
    "thiết kế hồ koi",
    "hồ cá koi đẹp",
    "hồ koi phong thủy",
    "đơn vị thi công hồ koi uy tín",
  ],
}

export default function KoiArticlePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <KoiArticleContent />
      <Footer />
      <FloatingContact />
    </main>
  )
}