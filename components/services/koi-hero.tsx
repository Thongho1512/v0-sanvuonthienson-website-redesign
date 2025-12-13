"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Droplets, Shield, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function KoiHero() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 via-emerald-800/70 to-emerald-900/85 z-10" />
        <Image
          src="/luxury-koi-pond-landscape-modern-design.jpg"
          alt="Hồ cá Koi cao cấp"
          fill
          className="object-cover opacity-40 scale-110 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] z-20" />
      </div>

      <div className="relative z-20 container mx-auto px-4 py-32 text-center">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 font-medium mb-6 animate-slide-up">
            <Droplets className="w-4 h-4" />
            Chuyên Gia Hồ Cá Koi
          </div>

          <h1 className="font-bold text-white mb-8 tracking-tighter">
            <span className="block mb-3 animate-slide-up">Thi Công Hồ Cá Koi</span>
            <span className="block mb-3 bg-gradient-to-r from-emerald-300 via-white to-emerald-300 bg-clip-text text-transparent animate-slide-up-delay-1">
              Đẳng Cấp & Bền Vững
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-emerald-100/95 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay-2 px-4">
            Thiết kế và thi công hồ cá Koi chuyên nghiệp, hợp phong thủy với hệ thống lọc nước hiện đại
            <br />
            <span className="text-base sm:text-lg text-emerald-200/75 block mt-3">
              Bảo hành 5 năm · 200+ công trình hoàn thành
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-3 mb-12">
            <Link href="/lien-he">
              <Button
                size="lg"
                className="bg-white text-emerald-900 hover:bg-emerald-100 px-8 py-6 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold"
              >
                Tư Vấn Miễn Phí
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/thu-vien-cong-trinh">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base sm:text-lg rounded-full backdrop-blur-sm hover:scale-105 active:scale-95 transition-all duration-300 bg-transparent font-semibold"
              >
                Xem Công Trình
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 card-hover">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-emerald-300" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white mb-1">Bảo Hành 5 Năm</h3>
                <p className="text-sm text-emerald-200">Cam kết chất lượng dài hạn</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 card-hover">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                <Droplets className="w-6 h-6 text-teal-300" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white mb-1">Lọc Nước Hiện Đại</h3>
                <p className="text-sm text-teal-200">Công nghệ Nhật Bản</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 card-hover">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-blue-300" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white mb-1">15+ Năm Kinh Nghiệm</h3>
                <p className="text-sm text-blue-200">200+ công trình hoàn thành</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  )
}