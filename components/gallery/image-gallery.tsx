"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { useState } from "react"
import { Eye, X, Camera } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/35.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 2,
    src: "/34.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 3,
    src: "/33.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 4,
    src: "/32.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 5,
    src: "/31.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 6,
    src: "/30.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 7,
    src: "/29.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 8,
    src: "/28.png",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 9,
    src: "/27.png",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 10,
    src: "/26.png",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 11,
    src: "/25.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 12,
    src: "/24.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 13,
    src: "/23.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 14,
    src: "/22.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 15,
    src: "/21.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 16,
    src: "/20.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 17,
    src: "/19.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 18,
    src: "/18.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 19,
    src: "/17.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 20,
    src: "/16.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 21,
    src: "/15.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 22,
    src: "/14.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 23,
    src: "/13.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 24,
    src: "/12.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 25,
    src: "/11.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 26,
    src: "/10.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 27,
    src: "/9.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 28,
    src: "/8.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 29,
    src: "/7.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 30,
    src: "/6.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 31,
    src: "/5.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 32,
    src: "/4.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 33,
    src: "/3.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 34,
    src: "/2.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
  {
    id: 35,
    src: "/1.jpg",
    alt: "Hồ cá Koi cao cấp tại biệt thự Huế",
  },
]

export default function ImageGallery() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [lightboxImage, setLightboxImage] = useState<(typeof galleryImages)[0] | null>(null)

  return (
    <>
      <section className="py-20 sm:py-24 bg-emerald-50 relative overflow-hidden" ref={ref} id="images">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-pattern-dots opacity-[0.02]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header with animation */}
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

          {/* Gallery Grid - No animation per image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={`gallery-${image.id}`}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setLightboxImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index < 6}
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            onClick={() => setLightboxImage(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}