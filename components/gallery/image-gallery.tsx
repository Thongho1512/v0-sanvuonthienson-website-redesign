"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { useState } from "react"
import { Eye, X, Camera } from "lucide-react"
const galleryImages = [
  {
    id: 1,
    src: "/luxury-koi-pond-landscape-modern-design.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
    category: "Hồ Cá Koi",
    title: "Hồ Koi Biệt Thự Phú Mỹ Hưng",
  },
  {
    id: 2,
    src: "/traditional-vietnamese-rock-garden-landscape.jpg",
    alt: "Hòn non bộ truyền thống phong cách Việt",
    category: "Hòn Non Bộ",
    title: "Hòn Non Bộ Chùa Linh Ẩn",
  },
  {
    id: 3,
    src: "/modern-minimalist-garden-landscape-design.jpg",
    alt: "Sân vườn hiện đại tối giản",
    category: "Sân Vườn",
    title: "Sân Vườn Villa Đà Lạt",
  },
  {
    id: 4,
    src: "/luxury-modern-koi-pond-villa-landscape.jpg",
    alt: "Hồ Koi sang trọng tại villa",
    category: "Hồ Cá Koi",
    title: "Hồ Koi Resort Phú Quốc",
  },
  {
    id: 5,
    src: "/public/placeholder.svg?height=600&width=800&query=traditional stone landscape garden",
    alt: "Cảnh quan đá tự nhiên",
    category: "Hòn Non Bộ",
    title: "Tiểu Cảnh Đá Nhà Hàng",
  },
  {
    id: 6,
    src: "/public/placeholder.svg?height=600&width=800&query=modern japanese zen garden koi pond",
    alt: "Vườn Zen Nhật Bản với hồ Koi",
    category: "Sân Vườn",
    title: "Vườn Zen Cafe Sài Gòn",
  },
  {
    id: 7,
    src: "/public/placeholder.svg?height=600&width=800&query=luxury koi pond waterfall landscape",
    alt: "Hồ Koi với thác nước",
    category: "Hồ Cá Koi",
    title: "Hồ Koi Thác Nước Quận 2",
  },
  {
    id: 8,
    src: "/public/placeholder.svg?height=600&width=800&query=artistic rockscape bonsai garden",
    alt: "Hòn non bộ nghệ thuật với cây cảnh",
    category: "Hòn Non Bộ",
    title: "Tiểu Cảnh Showroom",
  },
  {
    id: 9,
    src: "/public/placeholder.svg?height=600&width=800&query=rooftop garden landscape design",
    alt: "Sân vườn trên mái",
    category: "Sân Vườn",
    title: "Vườn Trên Mái Penthouse",
  },
]

export default function ImageGallery() {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")
  const [lightboxImage, setLightboxImage] = useState<(typeof galleryImages)[0] | null>(null)

  const categories = ["Tất cả", "Hồ Cá Koi", "Hòn Non Bộ", "Sân Vườn"]

  const filteredImages =
    selectedCategory === "Tất cả" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <>
      <section className="py-20 sm:py-24 bg-emerald-50 relative overflow-hidden" ref={ref} id="images">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-pattern-dots opacity-[0.02]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 font-medium mb-4">
              <Camera className="w-4 h-4" />
              Hình Ảnh Công Trình
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hình Ảnh <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">Công Trình Thực Tế</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những dự án tiêu biểu đã được Thiên Sơn Landscape hoàn thành
            </p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setLightboxImage(image)}
              >
                <div className="image-reveal h-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium text-emerald-300 mb-1">{image.category}</p>
                    <h3 className="text-xl font-bold">{image.title}</h3>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox - giữ nguyên */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="relative max-w-6xl w-full aspect-[4/3]">
            <Image
              src={lightboxImage.src || "/placeholder.svg"}
              alt={lightboxImage.alt}
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-8 left-0 right-0 text-center text-white">
            <p className="text-sm text-emerald-300 mb-2">{lightboxImage.category}</p>
            <h3 className="text-2xl font-bold">{lightboxImage.title}</h3>
          </div>
        </div>
      )}
    </>
  )
}