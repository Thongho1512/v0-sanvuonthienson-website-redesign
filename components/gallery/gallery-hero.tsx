"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Camera, Video, Layout } from "lucide-react"
import Image from "next/image"

export default function GalleryHero() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={ref} className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-800/70 to-gray-900/85 z-10" />
        <Image
          src="/luxury-koi-pond-landscape-modern-design.jpg"
          alt="Thư viện công trình"
          fill
          className="object-cover opacity-30 scale-110 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] z-20" />
      </div>

      <div className="relative z-20 container mx-auto px-4 py-20 text-center">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="flex justify-center gap-6 mb-8 animate-slide-up">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Camera className="w-7 h-7 text-white" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Video className="w-7 h-7 text-white" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Layout className="w-7 h-7 text-white" />
            </div>
          </div>

          <h1 className="font-bold text-white mb-8 tracking-tighter">
            <span className="block mb-3 animate-slide-up-delay-1">Thư Viện</span>
            <span className="block bg-gradient-to-r from-emerald-300 via-white to-teal-300 bg-clip-text text-transparent animate-slide-up-delay-2">
              Công Trình
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay-3 px-4">
            Khám phá hình ảnh thực tế, video thi công và phối cảnh 3D
            <br />
            <span className="text-base sm:text-lg text-gray-300 block mt-3">
              200+ công trình · 150+ video · 15+ năm kinh nghiệm
            </span>
          </p>
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