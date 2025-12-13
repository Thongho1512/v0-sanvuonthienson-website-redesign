"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: 'Thi Công Hồ Cá Koi',
    category: 'Hồ Cá Koi',
    image: '/luxury-koi-pond-landscape-modern-design.jpg',
    description: 'Thiết kế và thi công hồ cá Koi chuyên nghiệp với hệ thống lọc hiện đại',
    link: '/bai-viet/thi-cong-ho-ca-koi'
  },
  {
    id: 2,
    title: 'Thi Công Hòn Non Bộ',
    category: 'Hòn Non Bộ',
    image: '/traditional-vietnamese-rock-garden-landscape.jpg',
    description: 'Nghệ thuật hòn non bộ truyền thống Việt Nam',
    link: '/bai-viet/thi-cong-hon-non-bo'
  },
  {
    id: 3,
    title: 'Thiết Kế Sân Vườn Hiện Đại',
    category: 'Sân Vườn',
    image: '/modern-minimalist-garden-landscape-design.jpg',
    description: 'Không gian sân vườn tối giản, hiện đại',
    link: '/bai-viet/san-vuon-hien-dai'
  },
  {
    id: 4,
    title: 'Hồ Koi Biệt Thự Cao Cấp',
    category: 'Hồ Cá Koi',
    image: '/luxury-modern-koi-pond-villa-landscape.jpg',
    description: 'Hồ cá Koi đẳng cấp cho biệt thự',
    link: '/bai-viet/ho-koi-biet-thu'
  },
  {
    id: 5,
    title: 'Tiểu Cảnh Cầu Thang',
    category: 'Tiểu Cảnh',
    image: '/modern-minimalist-garden-landscape-design.jpg',
    description: 'Tiểu cảnh độc đáo bên cầu thang',
    link: '/bai-viet/tieu-canh-cau-thang'
  },
  {
    id: 6,
    title: 'Hòn Non Bộ Thác Nước',
    category: 'Hòn Non Bộ',
    image: '/traditional-vietnamese-rock-garden-landscape.jpg',
    description: 'Hòn non bộ kết hợp thác nước tự nhiên',
    link: '/bai-viet/hon-non-bo-thac-nuoc'
  },
  {
    id: 7,
    title: 'Cafe Sân Vườn Koi',
    category: 'Cafe',
    image: '/luxury-koi-pond-landscape-modern-design.jpg',
    description: 'Thiết kế quán cafe với hồ cá Koi',
    link: '/bai-viet/cafe-san-vuon'
  },
  {
    id: 8,
    title: 'Resort Cảnh Quan',
    category: 'Resort',
    image: '/luxury-modern-koi-pond-villa-landscape.jpg',
    description: 'Cảnh quan tổng thể cho resort cao cấp',
    link: '/bai-viet/canh-quan-resort'
  }
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
            8 dự án nổi bật được nhiều khách hàng tin tưởng và yêu thích
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/thu-vien-cong-trinh">
            <button className="px-8 py-4 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
              Xem Tất Cả Công Trình
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible
}: {
  project: typeof projects[0]
  index: number
  isVisible: boolean
}) {
  return (
    <Link
      href={project.link}
      className={`group relative overflow-hidden rounded-2xl h-80 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="image-reveal h-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

      <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <span className="inline-block px-4 py-1.5 bg-primary/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-3 w-fit">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="text-white/80 text-sm mb-4">{project.description}</p>
        
        <div className="flex items-center text-emerald-300 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Xem chi tiết</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:ml-4 transition-all" />
        </div>
      </div>
    </Link>
  )
}