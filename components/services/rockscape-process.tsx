"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { MessageSquare, PenTool, Mountain, Wrench, Sparkles, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Trao Đổi Ý Tưởng",
    description: "Lắng nghe mong muốn của bạn về phong cách, kích thước và ý nghĩa",
  },
  {
    icon: PenTool,
    title: "Phác Thảo Thiết Kế",
    description: "Vẽ phác thảo bố cục, chọn đá và cây cảnh phù hợp",
  },
  {
    icon: Mountain,
    title: "Chọn Đá & Vật Liệu",
    description: "Tuyển chọn từng viên đá tự nhiên đẹp, độc đáo",
  },
  {
    icon: Wrench,
    title: "Thi Công Lắp Đặt",
    description: "Nghệ nhân trực tiếp xếp đá, tạo hình theo nghệ thuật",
  },
  {
    icon: Sparkles,
    title: "Hoàn Thiện Chi Tiết",
    description: "Trồng cây, lắp đèn, thác nước và trang trí tinh tế",
  },
  {
    icon: CheckCircle,
    title: "Bàn Giao & Bảo Hành",
    description: "Hướng dẫn chăm sóc, bảo hành và hỗ trợ lâu dài",
  },
]

export default function RockscapeProcess() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-900 via-amber-900/30 to-gray-900 text-white relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quy Trình <span className="text-amber-400">Thi Công</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Từ ý tưởng đến tác phẩm nghệ thuật hoàn chỉnh</p>
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
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center font-bold text-xl z-10 shadow-lg">
                  {index + 1}
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-amber-500 card-hover h-full">
                  <div className="w-14 h-14 rounded-xl bg-amber-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-orange-500/10 blur-3xl" />
      </div>
    </section>
  )
}