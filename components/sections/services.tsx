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
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    hoverGradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
    link: "/thi-cong-ho-ca-koi",
  },
  {
    icon: Mountain,
    title: "Thi Công Hòn Non Bộ",
    description:
      "Thiết kế hòn non bộ độc đáo, chọn đá tự nhiên cao cấp, bố cục phong thủy. Mang thiên nhiên hùng vĩ vào không gian sống của bạn.",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    hoverGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
    link: "/thi-cong-hon-non-bo",
  },
  {
    icon: Trees,
    title: "Thiết Kế Sân Vườn",
    description:
      "Quy hoạch tổng thể sân vườn, lựa chọn cây cảnh phù hợp khí hậu, bố trí không gian hài hòa. Tạo nên khu vườn xanh mát, thư giãn.",
    gradient: "from-emerald-500 to-green-500",
    bgGradient: "from-emerald-500/10 via-green-500/5 to-transparent",
    hoverGradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
    link: "/",
  },
  {
    icon: Flower2,
    title: "Tiểu Cảnh Trang Trí",
    description:
      "Thiết kế tiểu cảnh mini, bonsai, terrarium, góc xanh trong nhà. Điểm nhấn tinh tế cho không gian sống hiện đại.",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    hoverGradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
    link: "/",
  },
  {
    icon: Home,
    title: "Cảnh Quan Biệt Thự",
    description:
      "Thiết kế tổng thể cảnh quan biệt thự, resort, khách sạn. Kết hợp kiến trúc và thiên nhiên, tạo không gian sống đẳng cấp.",
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-500/10 via-violet-500/5 to-transparent",
    hoverGradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    iconBg: "bg-gradient-to-br from-purple-500 to-violet-600",
    link: "/",
  },
  {
    icon: Sparkles,
    title: "Tư Vấn Phong Thủy",
    description:
      "Tư vấn phong thủy sân vườn, bố trí hồ nước, hòn non bộ hợp mệnh. Giúp gia chủ thu hút tài lộc, may mắn và bình an.",
    gradient: "from-yellow-500 to-amber-500",
    bgGradient: "from-yellow-500/10 via-amber-500/5 to-transparent",
    hoverGradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
    iconBg: "bg-gradient-to-br from-yellow-500 to-amber-600",
    link: "/",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const Icon = service.icon

  return (
    <Link href={service.link}>
      <Card
        ref={ref}
        className={`group h-full border-0 bg-white shadow-xl hover:shadow-2xl card-hover cursor-pointer overflow-hidden relative ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Gradient Background Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Animated Border Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
        
        <CardContent className="p-6 sm:p-8 relative z-10">
          {/* Icon Container */}
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
            <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
          </div>
          
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {service.description}
          </p>

          {/* Arrow Icon on Hover */}
          <div className="mt-6 flex items-center text-emerald-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
            <span className="mr-2">Xem chi tiết</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </CardContent>

        {/* Corner Accent */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
      </Card>
    </Link>
  )
}

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white" />
      <div className="absolute inset-0 bg-pattern-dots opacity-[0.03]" />
      <div className="absolute inset-0 bg-mesh-gradient" />
      
      {/* Decorative Blurs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-700 font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Dịch Vụ Chuyên Nghiệp
          </div>
          
          <h2 className="font-bold mb-6">
            <span className="text-gray-900">Dịch Vụ </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              Chuyên Nghiệp
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
            Chúng tôi cung cấp giải pháp toàn diện cho không gian sân vườn của bạn
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Không tìm thấy dịch vụ bạn cần? Hãy liên hệ với chúng tôi
          </p>
          <Link href="/lien-he">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              <Sparkles className="w-5 h-5" />
              Liên Hệ Tư Vấn Ngay
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}