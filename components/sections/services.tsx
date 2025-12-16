"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

const services = [
  {
    title: "HÒN NON BỘ",
    description: "Tư vấn theo kich thước gia chủ. Lựa chọn đá tự nhiên, bố cục hài hòa. Tạo điểm nhấn thiên nhiên trong không gian sống.",
    image: "/26.png",
  },
  {
    title: "HỒ CÁ KOI",
    description: "Kích hoạt may mắn và tài lộc cho gia chủ. Thiết kế hồ cá Koi đẹp mắt, hệ thống lọc nước hiện đại, tiết kiệm chi phí vận hành.",
    image: "/15.jpg",
  },
  {
    title: "TIỂU CẢNH SÂN VƯỜN",
    description: "Có bảng vẽ thiết kế phối cảnh 2D, 3D theo phong cách bạn chọn. Thiết kế cảnh quan sân vườn hài hòa với kiến trúc ngôi nhà.",
    image: "/27.png",
  },
  {
    title: "QUÁN CAFE CÁ KOI",
    description: "Tiết kiệm tối đa chi phí thi công với hồ cá Koi. Tạo không gian thư giãn, thu hút khách hàng.",
    image: "/22.jpg",
  },
  {
    title: "THIẾT KẾ CẢNH QUAN",
    description: "Mang đến tác phẩm cảnh quan hài hòa phù hợp nhất với khách hàng và môi trường xung quanh.",
    image: "/12.jpg",
  },
  {
    title: "NON BỘ + CÁ KOI",
    description: "Tư vấn thiết bị phù hợp nhất với nhu cầu sử dụng của gia chủ. Thiết kế hồ cá Koi kết hợp hòn non bộ độc đáo, ấn tượng.",
    image: "/29.jpg",
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
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
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