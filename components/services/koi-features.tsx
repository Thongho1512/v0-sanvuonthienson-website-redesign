"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Droplets, Filter, Waves, Sun, Wind, Leaf } from "lucide-react"

const features = [
  {
    icon: Filter,
    title: "Hệ Thống Lọc Nước",
    description: "Lọc sinh học, cơ học và UV hiện đại đảm bảo nước trong sạch cho cá Koi",
    color: "emerald",
  },
  {
    icon: Waves,
    title: "Tuần Hoàn Nước",
    description: "Thiết kế hệ thống tuần hoàn tối ưu, tiết kiệm điện năng",
    color: "blue",
  },
  {
    icon: Droplets,
    title: "Chống Thấm Chuyên Nghiệp",
    description: "Sử dụng màng chống thấm cao cấp, đảm bảo không rò rỉ",
    color: "teal",
  },
  {
    icon: Sun,
    title: "Tính Toán Ánh Sáng",
    description: "Bố trí ánh sáng phù hợp cho sức khỏe và màu sắc cá Koi",
    color: "amber",
  },
  {
    icon: Wind,
    title: "Sục Khí Oxy",
    description: "Hệ thống sục khí đảm bảo oxy hòa tan tối ưu",
    color: "sky",
  },
  {
    icon: Leaf,
    title: "Cây Xanh & Đá",
    description: "Kết hợp cây cảnh và đá tự nhiên tạo cảnh quan hài hòa",
    color: "green",
  },
]

export default function KoiFeatures() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Tính Năng Vượt Trội</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hồ cá Koi của chúng tôi được thiết kế với tiêu chuẩn cao nhất
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-${feature.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
