"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Shield, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay - Mạnh mẽ và sâu hơn */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-teal-900/90 to-emerald-950/95 z-10" />
        
        {/* Hero Image */}
        <Image
          src="/luxury-koi-pond-landscape-modern-design.jpg"
          alt="Hồ cá Koi cao cấp"
          fill
          className="object-cover opacity-40 scale-110 animate-slow-zoom"
          priority
        />
        
        {/* Texture Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-pattern-dots z-20" />
        
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-20" />
        
        {/* Animated Light Spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse z-5" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse z-5" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-32 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Thiên Sơn Landscape"
                width={280}
                height={112}
                className="animate-fade-in w-auto h-24 sm:h-28 drop-shadow-2xl"
              />
              {/* Glow effect under logo */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-emerald-400/30 blur-2xl rounded-full" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-bold text-white mb-8 tracking-tighter drop-shadow-2xl">
            <span className="block mb-3 animate-slide-up">Kiến Tạo</span>
            <span className="block mb-3 bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent animate-slide-up-delay-1 drop-shadow-lg">
              Không Gian Sống
            </span>
            <span className="block animate-slide-up-delay-2">Đẳng Cấp</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-emerald-50/95 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay-2 px-4 drop-shadow-lg">
            Chuyên thiết kế & thi công hồ cá Koi, hòn non bộ, sân vườn cao cấp
            <br />
            <span className="text-base sm:text-lg text-teal-200/90 block mt-3 font-medium">
              ✨ Hơn 15 năm kinh nghiệm · 🏆 200+ công trình hoàn thành
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-3 mb-16">
            <Link href="/lien-he">
              <Button
                size="lg"
                className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-6 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 font-bold border-2 border-emerald-200/50"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Tư Vấn Miễn Phí
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/thu-vien-cong-trinh">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-white hover:bg-white/20 px-8 py-6 text-base sm:text-lg rounded-full backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 bg-white/10 font-bold shadow-xl hover:shadow-2xl"
              >
                <Play className="mr-2 h-5 w-5" />
                Xem Công Trình
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-emerald-300" />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">Bảo Hành 5 Năm</h3>
                <p className="text-sm text-emerald-100/80">Cam kết chất lượng dài hạn</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-teal-500/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-teal-300" />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">Công Nghệ Nhật</h3>
                <p className="text-sm text-teal-100/80">Hệ thống lọc nước hiện đại</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-cyan-300" />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">15+ Năm Kinh Nghiệm</h3>
                <p className="text-sm text-cyan-100/80">200+ công trình hoàn thành</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  )
}