"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-24 bg-gradient-to-br from-sage via-sage-dark to-forest relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Sẵn Sàng Tạo Nên
            <br />
            <span className="text-sage-light">Không Gian Mơ Ước?</span>
          </h2>

          <p className="text-xl text-sage-light/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Liên hệ ngay hôm nay để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="tel:0938386679">
              <Button
                size="lg"
                className="bg-white text-sage hover:bg-sage-light hover:text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Gọi Ngay: 0938 386 679
              </Button>
            </Link>

            <Link href="https://zalo.me/0938386679" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-sage px-8 py-6 text-lg rounded-full backdrop-blur-sm hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat Zalo
              </Button>
            </Link>
          </div>

          {/* Additional info */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sage-light rounded-full" />
              <span>Tư vấn miễn phí 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sage-light rounded-full" />
              <span>Báo giá nhanh trong 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sage-light rounded-full" />
              <span>Bảo hành dài hạn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
