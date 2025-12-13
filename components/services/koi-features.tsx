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
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-pattern-dots opacity-40" />
      <div className="absolute inset-0 bg-mesh-gradient" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h2 className="font-bold text-foreground mb-6">
            Tính Năng <span className="text-emerald-600">Vượt Trội</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Hồ cá Koi của chúng tôi được thiết kế với tiêu chuẩn cao nhất
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group h-full border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-emerald-600/10 card-hover p-6 sm:p-8 rounded-2xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}