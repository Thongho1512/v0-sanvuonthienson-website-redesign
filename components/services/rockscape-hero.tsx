"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mountain, Sparkles, Award } from "lucide-react"
import Link from "next/link"

export default function RockscapeHero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/traditional-vietnamese-rock-garden-landscape.jpg)",
            transform: "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 text-amber-300 font-medium mb-6">
              <Mountain className="w-4 h-4" />
              Nghệ Thuật Hòn Non Bộ
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-balance leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Hòn Non Bộ
            <span className="block text-amber-400">Tinh Hoa Nghệ Thuật</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed text-pretty"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Thi công hòn non bộ đẹp hợp phong thủy bởi nghệ nhân Lê Anh. Hơn 15 năm kinh nghiệm, 200+ công trình tiêu
            biểu trên toàn quốc.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white h-14 px-8 text-lg rounded-full shadow-xl shadow-amber-600/30"
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
              className="h-14 px-8 text-lg rounded-full border-2 border-white text-white hover:bg-white hover:text-amber-600 bg-transparent"
              asChild
            >
              <Link href="/thu-vien-cong-trinh">Xem Tác Phẩm</Link>
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
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Nghệ Nhân Lê Anh</h3>
                <p className="text-sm text-gray-300">Tay nghề cao, uy tín</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                <Mountain className="w-6 h-6 text-orange-300" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Đá Tự Nhiên</h3>
                <p className="text-sm text-gray-300">Nguồn gốc rõ ràng</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">200+ Công Trình</h3>
                <p className="text-sm text-gray-300">Khắp mọi miền đất nước</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
