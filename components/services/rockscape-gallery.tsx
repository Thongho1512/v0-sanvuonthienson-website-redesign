"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Hòn Non Bộ Chùa Linh Ẩn",
    location: "Huế",
    type: "Chùa chiền",
    image: "/traditional-vietnamese-rock-garden-landscape.jpg",
  },
  {
    id: 2,
    title: "Tiểu Cảnh Nhà Hàng Nhật Bản",
    location: "Hà Nội",
    type: "Nhà hàng",
    image: "/public/placeholder.svg?height=600&width=800&query=japanese restaurant rockscape garden",
  },
  {
    id: 3,
    title: "Hòn Non Bộ Sân Vườn Biệt Thự",
    location: "Đà Nẵng",
    type: "Biệt thự",
    image: "/public/placeholder.svg?height=600&width=800&query=luxury villa rockscape garden",
  },
  {
    id: 4,
    title: "Tiểu Cảnh Khu Du Lịch",
    location: "Phú Quốc",
    type: "Resort",
    image: "/public/placeholder.svg?height=600&width=800&query=resort landscape rockscape",
  },
]

export default function RockscapeGallery() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 sm:py-24 md:py-32 overflow-hidden relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <div className="absolute inset-0 bg-pattern-grid opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h2 className="font-bold text-foreground mb-6">
            Tác Phẩm <span className="text-amber-600">Tiêu Biểu</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Những công trình hòn non bộ nghệ thuật đã hoàn thành
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
                <span className="inline-block px-4 py-1.5 bg-amber-600/90 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold rounded-full mb-3 w-fit">
                  {project.type}
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
              className="bg-amber-600 hover:bg-amber-700 text-primary-foreground px-8 py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 font-semibold"
            >
              Xem Tất Cả Tác Phẩm
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}