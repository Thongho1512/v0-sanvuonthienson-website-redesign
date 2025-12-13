"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function HonNonBoCTA() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Background gradient with blue-teal accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/60 via-transparent to-teal-950/40" />
      
      {/* Soft glowing blobs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/12 rounded-full blur-3xl translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
      
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
      <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-teal-400/8 animate-float"
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
          <h2 className={`text-5xl md:text-6xl font-bold text-white mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            Hòn Non Bộ <span className="text-teal-300">Thiên Sơn</span>
          </h2>

          <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <p className="text-xl text-gray-100 leading-relaxed mb-8 font-light">
              Công ty TNHH <span className="font-semibold text-teal-300">Thiên Sơn</span> được Nghệ Nhân <span className="font-semibold text-blue-300">LÊ ANH</span> thành lập, là người góc tạo: Huế xuất phát từ phong cách Cung Đình, tỉ nghệ truyền thống có kinh nghiệm lâu năm trong việc chế tác <span className="font-semibold text-teal-300">HÒN NON BỘ</span>, <span className="font-semibold text-teal-400">THIẾT KẾ THI CÔNG HỒ CÁ KOI</span>, <span className="font-semibold text-blue-300">THIẾT KẾ SÂN VƯỜN</span>.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed mb-8 font-light">
              Với quá đây kinh nghiệm trên 15 năm nghệ lám HÒN NON BỘ, Nghệ Nhân <span className="font-semibold text-blue-300">LÊ ANH</span> cùng với đội ngũ chuyên viên, Quý khách được sự hưỡng dẫn tử vấn về phong thủy hòn non bộ để tạo ra những sản phẩm đầy nghệ thuật và tinh tế.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed font-light">
              Đã thực hiện tốn <span className="font-semibold text-teal-300">200+ công trình HÒN NON BỘ</span> trên khắp cả nước, mang lại vẻ đẹp thiên nhiên và phong thủy cho các biệt thự, quán cafe, chùa chiền và không gian sống của Quý khách.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <a
              href="tel:0938386679"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-lg font-bold rounded-full hover:from-teal-700 hover:to-cyan-700 transition-all hover:scale-105 shadow-lg hover:shadow-teal-500/40"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              GỌI: 0938 386 679
            </a>

            <a
              href="https://zalo.me/0938386679"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-lg font-bold rounded-full hover:from-blue-700 hover:to-teal-700 transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/40"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48">
                <path d="M24 4C13.04 4 4 12.08 4 22.5c0 5.08 2.3 9.64 6 12.74v8.76l8.22-4.52c1.84.5 3.78.76 5.78.76 10.96 0 20-8.08 20-18.5S34.96 4 24 4zm10.5 24.9h-6.3v-6.3h-1.8v6.3h-6.3v1.8h6.3v6.3h1.8v-6.3h6.3v-1.8z"/>
              </svg>
              ZALO: 0938386679
            </a>

            <a
              href="https://zalo.me/0938386679"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-lg font-bold rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-cyan-500/40"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48">
                <path d="M24 4C13.04 4 4 12.08 4 22.5c0 5.08 2.3 9.64 6 12.74v8.76l8.22-4.52c1.84.5 3.78.76 5.78.76 10.96 0 20-8.08 20-18.5S34.96 4 24 4zm10.5 24.9h-6.3v-6.3h-1.8v6.3h-6.3v1.8h6.3v6.3h1.8v-6.3h6.3v-1.8z"/>
              </svg>
              ZALO: 0938386879
            </a>
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