"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Droplets, Shield, Award } from "lucide-react"
import Link from "next/link"

export default function KoiHero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/luxury-koi-pond-landscape-modern-design.jpg)",
            transform: "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 font-medium mb-6">
              <Droplets className="w-4 h-4" />
              Chuyên Gia Hồ Cá Koi
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-balance leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Thi Công Hồ Cá Koi
            <span className="block text-emerald-400">Đẳng Cấp & Bền Vững</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed text-pretty"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Thiết kế và thi công hồ cá Koi chuyên nghiệp, hợp phong thủy với hệ thống lọc nước hiện đại. Bảo hành dài
            hạn, cam kết chất lượng.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white h-14 px-8 text-lg rounded-full shadow-xl shadow-emerald-600/30"
              asChild
            >
              <Link href="/lien-he">
                Tư Vấn Miễn Phí
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg rounded-full border-2 border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
              asChild
            >
              <Link href="/thu-vien-cong-trinh">Xem Công Trình</Link>
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Bảo Hành 5 Năm</h3>
                <p className="text-sm text-gray-300">Cam kết chất lượng dài hạn</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                <Droplets className="w-6 h-6 text-teal-300" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Lọc Nước Hiện Đại</h3>
                <p className="text-sm text-gray-300">Công nghệ Nhật Bản</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">15+ Năm Kinh Nghiệm</h3>
                <p className="text-sm text-gray-300">200+ công trình hoàn thành</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
