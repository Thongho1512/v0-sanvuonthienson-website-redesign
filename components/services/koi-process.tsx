"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ClipboardCheck, Ruler, Hammer, Droplets, Fish, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    title: "Khảo Sát & Tư Vấn",
    description: "Đo đạc thực địa, tư vấn thiết kế phù hợp với không gian và phong thủy",
  },
  {
    icon: Ruler,
    title: "Thiết Kế Chi Tiết",
    description: "Bản vẽ 3D chi tiết, tính toán hệ thống lọc và tuần hoàn nước",
  },
  {
    icon: Hammer,
    title: "Thi Công Hồ",
    description: "Đào đất, đổ bê tông, chống thấm và ốp lát theo tiêu chuẩn",
  },
  {
    icon: Droplets,
    title: "Lắp Đặt Hệ Thống",
    description: "Lắp máy bơm, lọc nước, sục khí và hệ thống điện an toàn",
  },
  {
    icon: Fish,
    title: "Thả Cá & Huấn Luyện",
    description: "Hướng dẫn nuôi cá, cho ăn và chăm sóc hồ đúng cách",
  },
  {
    icon: CheckCircle,
    title: "Bảo Hành & Bảo Trì",
    description: "Bảo hành 5 năm, hỗ trợ bảo trì định kỳ trọn đời",
  },
]

export default function KoiProcess() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-900 via-emerald-900/30 to-gray-900 text-white relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quy Trình <span className="text-emerald-400">Thi Công</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">6 bước chuẩn mực từ tư vấn đến bàn giao</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-xl z-10 shadow-lg">
                  {index + 1}
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-emerald-500 card-hover h-full">
                  <div className="w-14 h-14 rounded-xl bg-emerald-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-teal-500/10 blur-3xl" />
      </div>
    </section>
  )
}