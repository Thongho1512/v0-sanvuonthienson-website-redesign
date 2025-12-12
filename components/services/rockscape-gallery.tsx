"use client"

import { motion } from "framer-motion"
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
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Tác Phẩm Tiêu Biểu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Những công trình hòn non bộ nghệ thuật đã hoàn thành
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.type}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 h-14 px-8 text-lg rounded-full" asChild>
            <Link href="/thu-vien-cong-trinh">
              Xem Tất Cả Tác Phẩm
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
