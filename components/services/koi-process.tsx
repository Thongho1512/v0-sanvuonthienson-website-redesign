"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ClipboardCheck, Ruler, Hammer, Droplets, Fish, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    title: "Khảo Sát & Tư Vấn",
    description: "Đo đạc thực địa, tư vấn thiết kế phù hợp với không gian và phong thủy",
  },
  {
    icon: Ruler,
    title: "Thiết Kế Chi Tiết",
    description: "Bản vẽ 3D chi tiết, tính toán hệ thống lọc và tuần hoàn nước",
  },
  {
    icon: Hammer,
    title: "Thi Công Hồ",
    description: "Đào đất, đổ bê tông, chống thấm và ốp lát theo tiêu chuẩn",
  },
  {
    icon: Droplets,
    title: "Lắp Đặt Hệ Thống",
    description: "Lắp máy bơm, lọc nước, sục khí và hệ thống điện an toàn",
  },
  {
    icon: Fish,
    title: "Thả Cá & Huấn Luyện",
    description: "Hướng dẫn nuôi cá, cho ăn và chăm sóc hồ đúng cách",
  },
  {
    icon: CheckCircle,
    title: "Bảo Hành & Bảo Trì",
    description: "Bảo hành 5 năm, hỗ trợ bảo trì định kỳ trọn đời",
  },
]

export default function KoiProcess() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 bg-gray-900 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Quy Trình Thi Công</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">6 bước chuẩn mực từ tư vấn đến bàn giao</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-xl z-10 shadow-lg">
                  {index + 1}
                </div>

                <div className="p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-emerald-500 transition-colors duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-emerald-900/50 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
