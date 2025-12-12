"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { useState } from "react"
import { Eye, X } from "lucide-react"

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
  const { ref, isVisible } = useScrollAnimation()
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")
  const [lightboxImage, setLightboxImage] = useState<(typeof galleryImages)[0] | null>(null)

  const categories = ["Tất cả", "Hồ Cá Koi", "Hòn Non Bộ", "Sân Vườn"]

  const filteredImages =
    selectedCategory === "Tất cả" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <>
      <section className="py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Hình Ảnh Công Trình Thực Tế</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những dự án tiêu biểu đã được Thiên Sơn Landscape hoàn thành
            </p>
          </motion.div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => setLightboxImage(image)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium text-emerald-300 mb-1">{image.category}</p>
                    <h3 className="text-xl font-bold">{image.title}</h3>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
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
