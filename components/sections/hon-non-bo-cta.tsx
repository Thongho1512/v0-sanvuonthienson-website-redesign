"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

export default function HonNonBoCTA() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  const projects = [
    {
      title: "Thi Công Hồ Cá Koi",
      image: "/luxury-koi-pond-landscape-modern-design.jpg",
      link: "/thi-cong-ho-ca-koi"
    },
    {
      title: "Những thiết kế tiểu cảnh sân vườn độc đáo",
      image: "/modern-minimalist-garden-landscape-design.jpg",
      link: "/thu-vien-cong-trinh"
    },
    {
      title: "Những hình ảnh tiểu cảnh cầu thang đẹp, độc đáo",
      image: "/luxury-modern-koi-pond-villa-landscape.jpg",
      link: "/thu-vien-cong-trinh"
    },
    {
      title: "Thi công hòn non bộ đẹp hợp phong thủy giá rẻ nhất hcm",
      image: "/traditional-vietnamese-rock-garden-landscape.jpg",
      link: "/thi-cong-hon-non-bo"
    }
  ]

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Content */}
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            Hòn Non Bộ Thiên Sơn kính chào Quý khách!
          </h2>

          <div className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              Công ty TNHH <span className="font-bold text-emerald-400">Thiên Sơn</span> được Nghệ Nhân{" "}
              <span className="font-bold text-amber-400">LÊ ANH</span> thành lập, là người góc tạo: Huế xuất phát từ 
              phong cách Cung Đình, tỉ nghệ truyền thống có kinh nghiệm lâu năm trong việc chế tác{" "}
              <span className="font-bold text-teal-400">HÒN NON BỘ</span>,{" "}
              <span className="font-bold text-blue-400">THIẾT KẾ THI CÔNG HỒ CÁ KOI</span>,{" "}
              <span className="font-bold text-emerald-400">THIẾT KẾ SÂN VƯỜN</span> và is dọn vệ điều đau tạo nên các tác 
              phẩm <span className="font-bold text-pink-400">Tiểu Cảnh Hòn Non Bộ</span>, đã thực hiện tốn 200 công trình{" "}
              <span className="font-bold text-purple-400">HÒN NON BỘ TIỂU CẢNH</span> trên khẫp cá nước.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Với quá đây kinh nghiệm trên 15 năm nghệ lám HÒN NON BỘ TAM SƠN, đồn và Nghệ Nhận{" "}
              <span className="font-bold text-amber-400">LÊ ANH</span> cùng với đội ngũ sư, chuyển viên, Quý khách 
              được sự hưỡng trẽn mục độ thám về số cả, phong thủy hờn non bộ với cả phi hợp mể nghệ đau hòn non bộ 
              nhất tạo ra những sàn phẩm đầy hoạ và nghệ thuật lớm họn 200 công trình HÒN NON BỘ chơi giữp họp và 
              phi hợp về độ ưu nhất.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <a
              href="tel:0938386679"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white text-lg font-bold rounded-full hover:bg-emerald-700 transition-all hover:scale-105 shadow-2xl"
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
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-white text-lg font-bold rounded-full hover:bg-amber-600 transition-all hover:scale-105 shadow-2xl"
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
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 text-white text-lg font-bold rounded-full hover:bg-red-700 transition-all hover:scale-105 shadow-2xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48">
                <path d="M24 4C13.04 4 4 12.08 4 22.5c0 5.08 2.3 9.64 6 12.74v8.76l8.22-4.52c1.84.5 3.78.76 5.78.76 10.96 0 20-8.08 20-18.5S34.96 4 24 4zm10.5 24.9h-6.3v-6.3h-1.8v6.3h-6.3v1.8h6.3v6.3h1.8v-6.3h6.3v-1.8z"/>
              </svg>
              ZALO: 0938386879
            </a>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className={`group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-bold text-white leading-tight group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}