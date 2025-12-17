"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: 'Thi Công Hồ Cá Koi',
    image: '/22.jpg',
    link: '/bai-viet/thi-cong-ho-ca-koi'
  },
  {
    id: 2,
    title: 'Những thiết kế tiểu cảnh sân vườn độc đáo',
    image: '/30.jpg',
    link: '/bai-viet/nhung-thiet-ke-tieu-canh-san-vuon-doc-dao'
  },
  {
    id: 4,
    title: 'Thi công hòn non bộ đẹp hợp phong thủy giá rẻ nhất',
    image: '/12.jpg',
    link: '/bai-viet/thi-cong-hon-non-bo-dep-hop-phong-thuy-gia-re-nhat'
  },
  {
    id: 5,
    title: 'Hòn non bộ thác nước và những lưu ý quan trọng',
    image: '/25.jpg',
    link: '/bai-viet/hon-non-bo-thac-nuoc-va-nhung-luu-y-quan-trong'
  },
  {
    id: 6,
    title: 'Lưu ý quan trọng khi thiết kế hòn non bộ cho người mệnh thủy',
    image: '/26.png',
    link: '/bai-viet/luu-y-quan-trong-khi-thiet-ke-hon-non-bo-cho-nguoi-menh-thuy'
  },
  {
    id: 7,
    title: 'Thi công hòn non bộ phong thủy',
    image: '/20.jpg',
    link: '/bai-viet/thi-cong-hon-non-bo-phong-thuy'
  },
  {
    id: 8,
    title: 'Cách thiết kế, bố trí cảnh quan sân vườn đẹp',
    image: '/21.jpg',
    link: '/bai-viet/cach-thiet-ke-bo-tri-canh-quan-san-vuon-dep'
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
            Bí quyết thiết kế cảnh quan
          </h2>
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

      {/* Badge "Bài viết" - Góc trên bên phải */}
      <div className="absolute top-4 right-4 z-10">
        <div className="px-4 py-2 bg-emerald-600/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold shadow-lg border border-white/20 group-hover:bg-emerald-500 transition-colors">
          📄 Bài viết
        </div>
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Spacer for top */}
        <div></div>
        
        {/* Bottom content */}
        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
            {project.title}
          </h3>          
          {/* "Xem chi tiết" - Góc dưới bên trái */}
          <div className="flex items-center gap-2 text-white font-semibold">
            <span className="text-sm">Xem chi tiết</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}