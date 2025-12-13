"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Hồ Koi Biệt Thự Phú Mỹ Hưng",
    location: "TP. Hồ Chí Minh",
    area: "50m²",
    image: "/luxury-koi-pond-landscape-modern-design.jpg",
  },
  {
    id: 2,
    title: "Hồ Koi Resort Phú Quốc",
    location: "Phú Quốc",
    area: "120m²",
    image: "/luxury-modern-koi-pond-villa-landscape.jpg",
  },
  {
    id: 3,
    title: "Hồ Koi Nhà Hàng Nhật Bản",
    location: "Hà Nội",
    area: "35m²",
    image: "/public/placeholder.svg?height=600&width=800&query=japanese restaurant koi pond",
  },
  {
    id: 4,
    title: "Hồ Koi Cafe Garden",
    location: "Đà Nẵng",
    area: "28m²",
    image: "/public/placeholder.svg?height=600&width=800&query=cafe garden koi pond",
  },
]

export default function KoiGallery() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 sm:py-24 md:py-32 overflow-hidden relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <div className="absolute inset-0 bg-pattern-grid opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h2 className="font-bold text-foreground mb-6">
            Dự Án <span className="text-emerald-600">Tiêu Biểu</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Những công trình hồ cá Koi đẳng cấp đã hoàn thành
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl h-full min-h-[300px] sm:min-h-[400px] transition-all duration-700 shadow-lg hover:shadow-2xl ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="image-reveal h-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-1.5 bg-emerald-600/90 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold rounded-full mb-3 w-fit">
                  {project.area}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/thu-vien-cong-trinh">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-primary-foreground px-8 py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 font-semibold"
            >
              Xem Tất Cả Công Trình
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}