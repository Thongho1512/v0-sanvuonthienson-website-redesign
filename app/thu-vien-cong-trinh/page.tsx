import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"
import GalleryHero from "@/components/gallery/gallery-hero"
import ImageGallery from "@/components/gallery/image-gallery"
import VideoGallery from "@/components/gallery/video-gallery"

export const metadata: Metadata = {
  title: "Thư Viện Hình Ảnh & Video Công Trình | Thiên Sơn Landscape",
  description:
    "Khám phá thư viện hình ảnh và video các công trình hồ cá Koi, hòn non bộ, sân vườn đẹp do Thiên Sơn Landscape thi công. Phối cảnh 3D chuyên nghiệp.",
  keywords: ["hình ảnh hồ cá koi", "video công trình", "phối cảnh 3D", "hòn non bộ đẹp", "công trình cảnh quan"],
}

export default function GalleryPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <GalleryHero />
      <ImageGallery />
      <VideoGallery />
      <Footer />
      <FloatingContact />
    </main>
  )
}
