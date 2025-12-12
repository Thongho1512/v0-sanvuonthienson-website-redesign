"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Mountain, Compass, Palmtree, Droplets, Sun, Home } from "lucide-react"

const features = [
  {
    icon: Mountain,
    title: "Đá Tự Nhiên Cao Cấp",
    description: "Sử dụng đá tự nhiên đẹp từ các nguồn uy tín, đa dạng màu sắc và hình dáng",
    color: "amber",
  },
  {
    icon: Compass,
    title: "Tư Vấn Phong Thủy",
    description: "Bố trí hòn non bộ theo phong thủy, hợp mệnh gia chủ",
    color: "orange",
  },
  {
    icon: Palmtree,
    title: "Cây Cảnh Đi Kèm",
    description: "Lựa chọn cây cảnh phù hợp tạo nên bức tranh hài hòa",
    color: "green",
  },
  {
    icon: Droplets,
    title: "Thác Nước Tự Nhiên",
    description: "Thiết kế thác nước, suối nhỏ tạo không gian thư giãn",
    color: "blue",
  },
  {
    icon: Sun,
    title: "Đèn LED Nghệ Thuật",
    description: "Hệ thống đèn LED tạo hiệu ứng ánh sáng lung linh ban đêm",
    color: "yellow",
  },
  {
    icon: Home,
    title: "Mọi Không Gian",
    description: "Phù hợp sân vườn, tiểu cảnh nhà hàng, chùa chiền, khu du lịch",
    color: "stone",
  },
]

export default function RockscapeFeatures() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Đặc Điểm Nổi Bật</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hòn non bộ được tạo nên từ tâm huyết và tay nghề cao
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
                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300"
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
