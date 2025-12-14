"use client"

import { Phone } from "lucide-react"
import Image from "next/image"

export default function AboutIntro() {
  const highlights = [
    {
      number: "1",
      title: "Hồn non bộ",
      description: "Trong rất nhiều công trình tiểu cảnh sân vườn mà Thiên Sơn đã thực hiện thì Hòn non bộ luôn là một trong những điểm nhấn tuyệt vời nhất tạo ấn tượng cho người xem."
    },
    {
      number: "2",
      title: "Cá Koi",
      description: "Việc lấy ý tưởng cảm hứng từ các công trình nguyên bản đẹp xây dựng Hòn non bộ hợp phong thủy luôn là yếu tố quan trọng để đảm bảo sự hài hòa."
    },
    {
      number: "3",
      title: "Chất lượng",
      description: "Các hình ảnh hòn non bộ đẹp này chỉ mang tính chất tham khảo giúp bạn có cái nhìn đa chiều và chiêm nghưỡng những tác phẩm của các nghệ nhân."
    },
    {
      number: "4",
      title: "Phong thủy",
      description: "Để đảm bảo tốt nhất có một gia đình, Thiên Sơn sẽ khảo sát thực tế - Gặp trực tiếp gia chủ. Tư vấn theo yêu cầu và Phong thủy."
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements - smaller on mobile */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-emerald-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-teal-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Content - Stack on mobile, side by side on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
          
          {/* Left: Text Content */}
          <div className="w-full order-2 lg:order-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              {/* Logo Icon */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                  <path
                    d="M50 20 C30 25, 25 40, 30 55 C35 70, 45 75, 50 80 C55 75, 65 70, 70 55 C75 40, 70 25, 50 20 Z"
                    fill="#ff6b6b"
                    opacity="0.8"
                  />
                  <circle cx="45" cy="35" r="2" fill="white" />
                  <path
                    d="M30 30 C25 35, 25 45, 30 50 C35 55, 45 55, 50 50"
                    fill="#ff8787"
                    opacity="0.6"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">THIÊN SƠN KOI</h3>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              <span className="text-emerald-600">Thiên Sơn</span> nhận tư vấn, thiết kế bản thảo và thi công các{" "}
              <span className="text-emerald-600">công trình hòn non bộ đẹp</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              tại tu gia, biệt thự, sân vườn, quán cafe. Bên cạnh đó, với hơn 10 năm trong nghề cùng tài hoa của 
              nghệ nhân tại Huế, Thiên Sơn có thể nhận và hoàn thành các công trình hòn non bộ cho chùa, Nhà thờ 
              cũng như các quán cafe sân vườn muốn trang trí bằng hồ cá Koi kết hợp thác nước và hòn non bộ...
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="tel:0938386679"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden xs:inline">Liên hệ: </span>0938 386 679
              </a>
            </div>
          </div>

          {/* Right: Static Koi Fish Image - optimized for mobile */}
          <div className="w-full order-1 lg:order-2">
            <div className="relative aspect-square max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              {/* Koi Fish Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/luxury-koi-pond-landscape-modern-design.png"
                  alt="Cá Koi đẹp - Thiên Sơn Landscape"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 z-10">
                <div className="bg-white rounded-2xl shadow-xl p-3 sm:p-4 border-4 border-emerald-100">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-600">15+</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">Năm kinh nghiệm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-lg sm:text-2xl font-bold text-white">{item.number}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 pt-1 sm:pt-2">{item.title}</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}