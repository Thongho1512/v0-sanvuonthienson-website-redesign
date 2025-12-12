"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { Droplets, Mountain, Trees, Flower2, Home, Sparkles } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Droplets,
    title: "Thiết Kế Hồ Cá Koi",
    description:
      "Thiết kế & thi công hồ cá Koi chuyên nghiệp, hệ thống lọc hiện đại, phong thủy hợp lý. Cam kết chất lượng nước trong, môi trường sống tốt nhất cho cá Koi.",
    color: "text-blue-400",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    link: "/thi-cong-ho-ca-koi",
  },
  {
    icon: Mountain,
    title: "Thi Công Hòn Non Bộ",
    description:
      "Thiết kế hòn non bộ độc đáo, chọn đá tự nhiên cao cấp, bố cục phong thủy. Mang thiên nhiên hùng vĩ vào không gian sống của bạn.",
    color: "text-stone-400",
    bgGradient: "from-stone-500/10 to-amber-500/10",
    link: "/thi-cong-hon-non-bo",
  },
  {
    icon: Trees,
    title: "Thiết Kế Sân Vườn",
    description:
      "Quy hoạch tổng thể sân vườn, lựa chọn cây cảnh phù hợp khí hậu, bố trí không gian hài hòa. Tạo nên khu vườn xanh mát, thư giãn.",
    color: "text-green-400",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    link: "/",
  },
  {
    icon: Flower2,
    title: "Tiểu Cảnh Trang Trí",
    description:
      "Thiết kế tiểu cảnh mini, bonsai, terrarium, góc xanh trong nhà. Điểm nhấn tinh tế cho không gian sống hiện đại.",
    color: "text-pink-400",
    bgGradient: "from-pink-500/10 to-rose-500/10",
    link: "/",
  },
  {
    icon: Home,
    title: "Cảnh Quan Biệt Thự",
    description:
      "Thiết kế tổng thể cảnh quan biệt thự, resort, khách sạn. Kết hợp kiến trúc và thiên nhiên, tạo không gian sống đẳng cấp.",
    color: "text-purple-400",
    bgGradient: "from-purple-500/10 to-violet-500/10",
    link: "/",
  },
  {
    icon: Sparkles,
    title: "Tư Vấn Phong Thủy",
    description:
      "Tư vấn phong thủy sân vườn, bố trí hồ nước, hòn non bộ hợp mệnh. Giúp gia chủ thu hút tài lộc, may mắn và bình an.",
    color: "text-yellow-400",
    bgGradient: "from-yellow-500/10 to-amber-500/10",
    link: "/",
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const Icon = service.icon

  return (
    <Link href={service.link}>
      <Card
        ref={ref}
        className={`group h-full border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-primary/10 card-hover cursor-pointer ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <CardContent className="p-6 sm:p-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
            <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-40" />
      <div className="absolute inset-0 bg-mesh-gradient" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-bold text-foreground mb-6">
            Dịch Vụ <span className="text-primary">Chuyên Nghiệp</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Chúng tôi cung cấp giải pháp toàn diện cho không gian sân vườn của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
