"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { MessageCircle, Phone, Mail } from "lucide-react"

export default function ContactHero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Icons */}
          <motion.div
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Liên Hệ Với Chúng Tôi
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Thiên Sơn Landscape luôn sẵn sàng tư vấn miễn phí về thiết kế hồ cá Koi, hòn non bộ và cảnh quan sân vườn.
            Hãy để chúng tôi biến không gian của bạn thành hiện thực!
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium">
              📞 Hotline: 0938 386 679
            </div>
            <div className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium">
              ⏰ Phục vụ 24/7
            </div>
            <div className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium">
              ✅ Tư vấn miễn phí
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
