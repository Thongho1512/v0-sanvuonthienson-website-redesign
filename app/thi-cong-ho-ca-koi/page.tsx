import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"
import KoiHero from "@/components/services/koi-hero"
import KoiArticleSection from "@/components/services/koi-article-section" 

export const metadata: Metadata = {
  title: "Thi Công Hồ Cá Koi Chuyên Nghiệp | Thiên Sơn Landscape",
  description:
    "Thiết kế và thi công hồ cá Koi đẹp, hợp phong thủy tại Huế. Tư vấn kích thước, lọc nước, chọn cá Koi. Bảo hành dài hạn, giá rẻ nhất thị trường.",
  keywords: ["thi công hồ cá koi", "thiết kế hồ koi", "hồ cá koi đẹp", "hồ koi phong thủy", "thi công hồ cá Huế"],
}

export default function KoiPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <KoiHero />
      <KoiArticleSection />
      <Footer />
      <FloatingContact />
    </main>
  )
}
