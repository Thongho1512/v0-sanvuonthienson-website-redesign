"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/90 via-forest/70 to-forest/85 z-10" />
        <Image
          src="/luxury-koi-pond-landscape-modern-design.jpg"
          alt="Hồ cá Koi cao cấp"
          fill
          className="object-cover opacity-40 scale-110 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] z-20" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-32 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="mb-12 flex justify-center">
            <Image
              src="/logo.png"
              alt="Thiên Sơn Landscape"
              width={240}
              height={96}
              className="animate-fade-in w-auto h-20 sm:h-24"
            />
          </div>

          <h1 className="font-bold text-white mb-8 tracking-tighter">
            <span className="block mb-3 animate-slide-up">Kiến Tạo</span>
            <span className="block mb-3 bg-gradient-to-r from-sage-light via-white to-sage-light bg-clip-text text-transparent animate-slide-up-delay-1">
              Không Gian Sống
            </span>
            <span className="block animate-slide-up-delay-2">Đẳng Cấp</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-sage-light/95 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay-2 px-4">
            Chuyên thiết kế & thi công hồ cá Koi, hòn non bộ, sân vườn cao cấp
            <br />
            <span className="text-base sm:text-lg text-sage-light/75 block mt-3">
              Hơn 15 năm kinh nghiệm · 200+ công trình hoàn thành
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-3">
            <Link href="/lien-he">
              <Button
                size="lg"
                className="bg-white text-forest hover:bg-sage-light px-8 py-6 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold"
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
                <Play className="mr-2 h-5 w-5" />
                Xem Công Trình
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  )
}
