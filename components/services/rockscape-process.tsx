"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { MessageSquare, PenTool, Mountain, Wrench, Sparkles, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Trao Đổi Ý Tưởng",
    description: "Lắng nghe mong muốn của bạn về phong cách, kích thước và ý nghĩa",
  },
  {
    icon: PenTool,
    title: "Phác Thảo Thiết Kế",
    description: "Vẽ phác thảo bố cục, chọn đá và cây cảnh phù hợp",
  },
  {
    icon: Mountain,
    title: "Chọn Đá & Vật Liệu",
    description: "Tuyển chọn từng viên đá tự nhiên đẹp, độc đáo",
  },
  {
    icon: Wrench,
    title: "Thi Công Lắp Đặt",
    description: "Nghệ nhân trực tiếp xếp đá, tạo hình theo nghệ thuật",
  },
  {
    icon: Sparkles,
    title: "Hoàn Thiện Chi Tiết",
    description: "Trồng cây, lắp đèn, thác nước và trang trí tinh tế",
  },
  {
    icon: CheckCircle,
    title: "Bàn Giao & Bảo Hành",
    description: "Hướng dẫn chăm sóc, bảo hành và hỗ trợ lâu dài",
  },
]

export default function RockscapeProcess() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900/30 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Quy Trình Thi Công</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Từ ý tưởng đến tác phẩm nghệ thuật hoàn chỉnh</p>
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
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center font-bold text-xl z-10 shadow-lg">
                  {index + 1}
                </div>

                <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-amber-500 transition-colors duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-amber-900/50 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-amber-400" />
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
