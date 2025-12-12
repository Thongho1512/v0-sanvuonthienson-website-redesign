"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Camera, Video, Layout } from "lucide-react"

export default function GalleryHero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(6 78 59) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Icons grid */}
          <motion.div
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 flex items-center justify-center">
              <Camera className="w-7 h-7 text-emerald-600" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-teal-600/10 flex items-center justify-center">
              <Video className="w-7 h-7 text-teal-600" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-green-600/10 flex items-center justify-center">
              <Layout className="w-7 h-7 text-green-600" />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
              Thư Viện Công Trình
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Khám phá hình ảnh thực tế, video thi công và phối cảnh 3D các dự án hồ cá Koi, hòn non bộ do Thiên Sơn
            Landscape thực hiện
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="px-6 py-3 rounded-full bg-white shadow-md border border-gray-100">
              <span className="font-semibold text-emerald-600">200+</span> Công trình
            </div>
            <div className="px-6 py-3 rounded-full bg-white shadow-md border border-gray-100">
              <span className="font-semibold text-teal-600">150+</span> Video thi công
            </div>
            <div className="px-6 py-3 rounded-full bg-white shadow-md border border-gray-100">
              <span className="font-semibold text-green-600">15+</span> Năm kinh nghiệm
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
