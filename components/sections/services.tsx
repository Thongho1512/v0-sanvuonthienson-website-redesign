"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

const services = [
  {
    title: "Thiết Kế Hồ Cá Koi",
    description: "Thiết kế & thi công hồ cá Koi chuyên nghiệp, hệ thống lọc hiện đại, phong thủy hợp lý. Cam kết chất lượng nước trong, môi trường sống tốt nhất cho cá Koi.",
    image: "/luxury-koi-pond-landscape-modern-design.jpg",
  },
  {
    title: "Thi Công Hòn Non Bộ",
    description: "Thiết kế hòn non bộ độc đáo, chọn đá tự nhiên cao cấp, bố cục phong thủy. Mang thiên nhiên hùng vĩ vào không gian sống của bạn.",
    image: "/traditional-vietnamese-rock-garden-landscape.jpg",
  },
  {
    title: "Thiết Kế Sân Vườn",
    description: "Quy hoạch tổng thể sân vườn, lựa chọn cây cảnh phù hợp khí hậu, bố trí không gian hài hòa. Tạo nên khu vườn xanh mát, thư giãn.",
    image: "/modern-minimalist-garden-landscape-design.jpg",
  },
  {
    title: "Tiểu Cảnh Trang Trí",
    description: "Thiết kế tiểu cảnh mini, bonsai, terrarium, góc xanh trong nhà. Điểm nhấn tinh tế cho không gian sống hiện đại.",
    image: "/luxury-modern-koi-pond-villa-landscape.jpg",
  },
  {
    title: "Cảnh Quan Biệt Thú",
    description: "Thiết kế tổng thể cảnh quan biệt thự, resort, khách sạn. Kết hợp kiến trúc và thiên nhiên, tạo không gian sống đẳng cấp.",
    image: "/luxury-koi-pond-landscape-modern-design.jpg",
  },
  {
    title: "Tư Vấn Phong Thủy",
    description: "Tư vấn phong thủy sân vườn, bố trí hồ nước, hòn non bộ hợp mệnh. Giúp gia chủ thu hút tài lộc, may mắn và bình an.",
    image: "/traditional-vietnamese-rock-garden-landscape.jpg",
  },
]

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-pattern-dots opacity-[0.02]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-semibold mb-6 shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Title overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}