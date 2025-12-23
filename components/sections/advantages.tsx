"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { motion } from "framer-motion"
import { CheckCircle, DollarSign, Users, Zap, Award, Clock } from "lucide-react"

const advantages = [
  {
    id: 1,
    icon: DollarSign,
    title: "Chi Phí Rẻ & Hợp Lý",
    description: "Giá cạnh tranh, không chi phí ẩn. Bạn nhận được giá trị tốt nhất cho dự án của mình.",
  },
  {
    id: 2,
    icon: Users,
    title: "Hỗ Trợ Tận Tâm",
    description: "Đội ngũ chuyên nghiệp sẵn sàng tư vấn và hỗ trợ bạn 24/7 trong quá trình thực hiện.",
  },
  {
    id: 3,
    icon: Zap,
    title: "Dịch Vụ Trọn Gói",
    description: "Từ thiết kế, thi công đến bảo trì - chúng tôi xử lý mọi thứ cho bạn.",
  },
  {
    id: 4,
    icon: Award,
    title: "Chất Lượng Cao",
    description: "Sử dụng vật liệu chính hãng, kỹ thuật tiên tiến đảm bảo độ bền lâu dài.",
  },
  {
    id: 5,
    icon: Clock,
    title: "Giao Hạn Đúng Hẹn",
    description: "Cam kết hoàn thành đúng thời gian đã thỏa thuận, không trễ tiến độ.",
  },
  {
    id: 6,
    icon: CheckCircle,
    title: "Bảo Hành & Bảo Trì",
    description: "Bảo hành toàn diện sau thi công và hỗ trợ bảo trì định kỳ miễn phí.",
  },
]

export default function Advantages() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ưu Điểm Nổi Bật Của Thiên Sơn
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp giải pháp cảnh quan hoàn hảo với dịch vụ chuyên nghiệp và giá cạnh tranh
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <motion.div
                key={advantage.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex p-3 bg-emerald-100 rounded-xl">
                  <Icon size={28} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
            <CheckCircle size={20} />
            <span>Sẵn Sàng Bắt Đầu Dự Án Của Bạn?</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
