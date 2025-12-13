"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { MessageCircle, Phone, Mail } from "lucide-react"

export default function ContactHero() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={ref} className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-4 py-20 text-center">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="flex justify-center gap-6 mb-8 animate-slide-up">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
          </div>

          <h1 className="font-bold text-white mb-8 tracking-tighter">
            <span className="block mb-3 animate-slide-up-delay-1">Liên Hệ</span>
            <span className="block animate-slide-up-delay-2">Với Chúng Tôi</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay-3 px-4">
            Thiên Sơn Landscape luôn sẵn sàng tư vấn miễn phí
            <br />
            <span className="text-base sm:text-lg text-white/75 block mt-3">
              📞 Hotline: 0938 386 679 · ⏰ Phục vụ 24/7 · ✅ Tư vấn miễn phí
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