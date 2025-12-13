"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { Phone } from "lucide-react"

export default function AboutIntro() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  const highlights = [
    {
      number: "1",
      title: "Hồn non bộ",
      description: "Trong rất nhiều công trình tiểu cảnh sân vườn mà Thiên Sơn đã thực hiện thì Hòn non bộ luôn là một trong những điểm nhấn tuyệt vời nhất tạo ấn tượng cho người xem. Ngoài ra, hòn non bộ còn có tác dụng rất lớn trong văn hóa phong thủy."
    },
    {
      number: "2",
      title: "Cá Koi",
      description: "Việc lấy ý tưởng cảm từ các công trình nguyên bản đẹc xây dựng Hòn non bộ hợp phong thủy luôn là yêu tố quan trọng để đảm bảo sự hài hòa, làng đồ thần mỹ và còn mang lại vượn, sức khỏe cho gia chủ."
    },
    {
      number: "3",
      title: "Chất lượng",
      description: "Các hình ảnh hòn non bộ đẹp này chỉ mang tính chất tham khảo giúp ban có cái nhìn đa chiều và chiêm nghưỡng những tác phẩm của các nghệ nhân hòn non bộ."
    },
    {
      number: "4",
      title: "Phong thủy",
      description: "Để đảm bảo tôi mất có một gia đình, Thiên Sơn sẽ khảo sát thực tế - Gặp trực tiếp gia chủ. Tư vấn theo yêu cầu và Phong thủy đề có thể thiết kế thị công hòn non bộ đẹp - phù hợp với tôi ưu nhất."
    }
  ]

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="flex items-center gap-4 mb-6">
              {/* Logo Icon */}
              <div className="relative w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-14 h-14">
                  {/* Koi fish paths - simplified */}
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
                <h3 className="text-2xl font-bold text-gray-900">THIÊN SƠN KOI</h3>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-emerald-600">Thiên Sơn</span> nhận tư vấn, thiết kế bản thảo và thi công các{" "}
              <span className="text-emerald-600">công trình hòn non bộ đẹp</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              tại tu gia, biệt thự, sân vườn, quán cafe. Bên cạnh đó, với hơn 10 năm trong nghề cùng tài hoa của 
              nghệ nhân tại Huế, Thiên Sơn có thể nhận và hoàn thành các công trình hòn non bộ cho chùa, Nhà thờ 
              cũng như các quán cafe sân vườn muốn trang trí bằng hồ cá Koi kết hợp thác nước và hòn non bộ...
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0938386679"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Liên hệ: 0938 386 679
              </a>
            </div>
          </div>

          {/* Right: Animated Koi Fish */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Water ripple effect background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-teal-400/20 to-emerald-400/20 animate-pulse" />
              
              {/* Animated Koi Fish */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full animate-float">
                  <Image
                    src="/luxury-koi-pond-landscape-modern-design.jpg"
                    alt="Cá Koi"
                    fill
                    className="object-contain drop-shadow-2xl"
                    style={{
                      clipPath: "ellipse(45% 40% at 50% 50%)",
                    }}
                  />
                  
                  {/* Floating lotus flower */}
                  <div className="absolute bottom-10 right-10 animate-bounce-slow">
                    <div className="w-16 h-16 rounded-full bg-pink-400/80 flex items-center justify-center shadow-lg">
                      <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm0-3a5 5 0 110-10 5 5 0 010 10z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bubbles animation */}
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-white/40 rounded-full animate-bubble"
                    style={{
                      left: `${20 + i * 15}%`,
                      bottom: "10%",
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + i}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section with Numbers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl font-bold text-white">{item.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 pt-2">{item.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(-2deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bubble {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-400px) scale(0.5);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-bubble {
          animation: bubble linear infinite;
        }
      `}</style>
    </section>
  )
}