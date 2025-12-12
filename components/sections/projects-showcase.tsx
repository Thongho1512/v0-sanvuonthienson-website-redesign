"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredProjects = [
  {
    title: "Hồ Cá Koi Biệt Thự Cao Cấp",
    category: "Hồ Cá Koi",
    image: "/luxury-modern-koi-pond-villa-landscape.jpg",
    size: "large",
  },
  {
    title: "Hòn Non Bộ Truyền Thống",
    category: "Hòn Non Bộ",
    image: "/traditional-vietnamese-rock-garden-landscape.jpg",
    size: "medium",
  },
  {
    title: "Sân Vườn Hiện Đại",
    category: "Sân Vườn",
    image: "/modern-minimalist-garden-landscape-design.jpg",
    size: "medium",
  },
]

export default function ProjectsShowcase() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 sm:py-24 md:py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <div className="absolute inset-0 bg-pattern-grid opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-bold text-foreground mb-6">
            Công Trình <span className="text-primary">Tiêu Biểu</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Khám phá những dự án đã hoàn thành với chất lượng cao nhất
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <ProjectCard project={featuredProjects[0]} index={0} featured />

          <div className="grid grid-cols-1 sm:grid-rows-2 gap-4 sm:gap-6">
            <ProjectCard project={featuredProjects[1]} index={1} />
            <ProjectCard project={featuredProjects[2]} index={2} />
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/thu-vien-cong-trinh">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground px-8 py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 font-semibold"
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

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof featuredProjects)[0]
  index: number
  featured?: boolean
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-3xl ${
        featured ? "h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]" : "h-full min-h-[240px] sm:min-h-[280px]"
      } transition-all duration-700 shadow-lg hover:shadow-2xl ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
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
        <span className="inline-block px-4 py-1.5 bg-primary/90 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold rounded-full mb-3 w-fit">
          {project.category}
        </span>
        <h3
          className={`font-bold text-white tracking-tight ${
            featured ? "text-3xl sm:text-4xl md:text-5xl" : "text-xl sm:text-2xl md:text-3xl"
          }`}
        >
          {project.title}
        </h3>
      </div>
    </div>
  )
}
