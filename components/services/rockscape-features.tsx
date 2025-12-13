"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Mountain, Compass, Palmtree, Droplets, Sun, Home } from "lucide-react"

const features = [
  {
    icon: Mountain,
    title: "Đá Tự Nhiên Cao Cấp",
    description: "Sử dụng đá tự nhiên đẹp từ các nguồn uy tín, đa dạng màu sắc và hình dáng",
  },
  {
    icon: Compass,
    title: "Tư Vấn Phong Thủy",
    description: "Bố trí hòn non bộ theo phong thủy, hợp mệnh gia chủ",
  },
  {
    icon: Palmtree,
    title: "Cây Cảnh Đi Kèm",
    description: "Lựa chọn cây cảnh phù hợp tạo nên bức tranh hài hòa",
  },
  {
    icon: Droplets,
    title: "Thác Nước Tự Nhiên",
    description: "Thiết kế thác nước, suối nhỏ tạo không gian thư giãn",
  },
  {
    icon: Sun,
    title: "Đèn LED Nghệ Thuật",
    description: "Hệ thống đèn LED tạo hiệu ứng ánh sáng lung linh ban đêm",
  },
  {
    icon: Home,
    title: "Mọi Không Gian",
    description: "Phù hợp sân vườn, tiểu cảnh nhà hàng, chùa chiền, khu du lịch",
  },
]

export default function RockscapeFeatures() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-pattern-dots opacity-40" />
      <div className="absolute inset-0 bg-mesh-gradient" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h2 className="font-bold text-foreground mb-6">
            Đặc Điểm <span className="text-amber-600">Nổi Bật</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Hòn non bộ được tạo nên từ tâm huyết và tay nghề cao
</p>
</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <div
            key={index}
            className={`group h-full border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-amber-600/10 card-hover p-6 sm:p-8 rounded-2xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
              <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-amber-600 transition-colors duration-300">
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