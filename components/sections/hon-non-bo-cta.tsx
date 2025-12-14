"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function HonNonBoCTA() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#e8e4d8] via-[#e5e1d5] to-[#e8e4d8] relative overflow-hidden shadow-2xl">
      {/* Background gradient with beige accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#d8d4c8]/30 via-transparent to-[#d8d4c8]/20" />
      
      {/* Soft glowing blobs - smaller on mobile */}
      <div className="absolute top-0 left-1/3 w-48 sm:w-80 md:w-96 h-48 sm:h-80 md:h-96 bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-40 sm:w-72 md:w-80 h-40 sm:h-72 md:h-80 bg-amber-500/8 rounded-full blur-3xl translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-0 w-32 sm:w-64 md:w-72 h-32 sm:h-64 md:h-72 bg-amber-400/5 rounded-full blur-3xl -translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Accent line decoration */}
      <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-600/6 animate-float"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${12 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Content */}
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a3326] mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            Hòn Non Bộ <span className="text-amber-700">Thiên Sơn</span>
          </h2>

          <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <p className="text-base sm:text-lg md:text-xl text-[#2d5339] leading-relaxed mb-6 sm:mb-8 font-medium px-2 sm:px-0">
              Công ty TNHH <span className="font-bold text-amber-800">Thiên Sơn</span> được Nghệ Nhân <span className="font-bold text-amber-700">LÊ ANH</span> thành lập, là người góc tạo: Huế xuất phát từ phong cách Cung Đình, tỉ nghệ truyền thống có kinh nghiệm lâu năm trong việc chế tác <span className="font-bold text-amber-800">HÒN NON BỘ</span>, <span className="font-bold text-amber-700">THIẾT KẾ THI CÔNG HỒ CÁ KOI</span>, <span className="font-bold text-amber-700">THIẾT KẾ SÂN VƯỜN</span>.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-[#2d5339] leading-relaxed mb-6 sm:mb-8 font-medium px-2 sm:px-0">
              Với quá đây kinh nghiệm trên 15 năm nghệ lám HÒN NON BỘ, Nghệ Nhân <span className="font-bold text-amber-700">LÊ ANH</span> cùng với đội ngũ chuyên viên, Quý khách được sự hưỡng dẫn tử vấn về phong thủy hòn non bộ để tạo ra những sản phẩm đầy nghệ thuật và tinh tế.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-[#2d5339] leading-relaxed font-medium px-2 sm:px-0">
              Đã thực hiện tốn <span className="font-bold text-amber-800">200+ công trình HÒN NON BỘ</span> trên khắp cả nước, mang lại vẻ đẹp thiên nhiên và phong thủy cho các biệt thự, quán cafe, chùa chiền và không gian sống của Quý khách.
            </p>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
            transform: translateY(-200px) translateX(50px) rotate(180deg);
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-400px) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  )
}