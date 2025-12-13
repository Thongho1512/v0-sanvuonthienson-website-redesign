"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mountain, Sparkles, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RockscapeHero() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/90 via-stone-800/70 to-amber-900/85 z-10" />
        <Image
          src="/traditional-vietnamese-rock-garden-landscape.jpg"
          alt="Hòn non bộ truyền thống"
          fill
          className="object-cover opacity-40 scale-110 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] z-20" />
      </div>

      <div className="relative z-20 container mx-auto px-4 py-32 text-center">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 text-amber-300 font-medium mb-6 animate-slide-up">
            <Mountain className="w-4 h-4" />
            Nghệ Thuật Hòn Non Bộ
          </div>

          <h1 className="font-bold text-white mb-8 tracking-tighter">
            <span className="block mb-3 animate-slide-up">Hòn Non Bộ</span>
            <span className="block mb-3 bg-gradient-to-r from-amber-300 via-white to-amber-300 bg-clip-text text-transparent animate-slide-up-delay-1">
              Tinh Hoa Nghệ Thuật
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-amber-100/95 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay-2 px-4">
            Thi công hòn non bộ đẹp hợp phong thủy bởi nghệ nhân Lê Anh
            <br />
            <span className="text-base sm:text-lg text-amber-200/75 block mt-3">
              Hơn 15 năm kinh nghiệm · 200+ công trình tiêu biểu
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-3 mb-12">
            <Link href="/lien-he">
              <Button
                size="lg"
                className="bg-white text-amber-900 hover:bg-amber-100 px-8 py-6 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold"
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
                Xem Tác Phẩm
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 card-hover">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-amber-300" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white mb-1">Nghệ Nhân Lê Anh</h3>
                <p className="text-sm text-amber-200">Tay nghề cao, uy tín</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 card-hover">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                <Mountain className="w-6 h-6 text-orange-300" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white mb-1">Đá Tự Nhiên</h3>
                <p className="text-sm text-orange-200">Nguồn gốc rõ ràng</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 card-hover">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-yellow-300" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white mb-1">200+ Công Trình</h3>
                <p className="text-sm text-yellow-200">Khắp mọi miền đất nước</p>
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