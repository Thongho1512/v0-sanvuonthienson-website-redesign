"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const reviews = [
  {
    name: "Anh Minh Tuấn",
    location: "Biệt thự An Cựu, Huế",
    avatar: "/vietnamese-man-professional-portrait.jpg",
    rating: 5,
    comment:
      "Đội ngũ Thiên Sơn làm việc rất chuyên nghiệp, tư vấn nhiệt tình. Hồ cá Koi nhà tôi sau 6 tháng vẫn hoạt động tốt, nước trong, cá khỏe mạnh. Rất hài lòng!",
    project: "Hồ Cá Koi 50m²",
  },
  {
    name: "Chị Thu Hương",
    location: "Khu đô thị Phú Mỹ An",
    avatar: "/vietnamese-woman-professional-portrait.jpg",
    rating: 5,
    comment:
      "Hòn non bộ được thiết kế đẹp, bố cục phong thủy hợp lý. Mỗi lần về nhà nhìn thấy là thấy thư giãn. Cảm ơn team Thiên Sơn đã tạo nên không gian tuyệt vời!",
    project: "Hòn Non Bộ Sân Vườn",
  },
  {
    name: "Anh Quốc Huy",
    location: "Resort Lăng Cô",
    avatar: "/vietnamese-businessman-portrait.png",
    rating: 5,
    comment:
      "Dự án cảnh quan resort của chúng tôi được Thiên Sơn thực hiện rất xuất sắc. Khách du lịch đều khen ngợi. Sẽ tiếp tục hợp tác trong các dự án tới.",
    project: "Cảnh Quan Resort",
  },
  {
    name: "Anh Đức Thịnh",
    location: "Cafe Koi Huế",
    avatar: "/vietnamese-cafe-owner-portrait.jpg",
    rating: 5,
    comment:
      "Hồ cá Koi trong quán cafe tôi được thiết kế độc đáo, thu hút rất nhiều khách. Hệ thống lọc hoạt động êm, không tốn nhiều điện. Đáng đồng tiền bát gạo!",
    project: "Hồ Koi Quán Cafe",
  },
]

function ReviewCard({ review, index }: { review: (typeof reviews)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <Card
      ref={ref}
      className={`h-full border border-sage/20 bg-white shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6 sm:p-8">
        {/* Quote icon */}
        <Quote className="h-10 w-10 text-sage/30 mb-4" />

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 italic text-base">{review.comment}</p>

        {/* Project tag */}
        <span className="inline-block px-3 py-1 bg-sage/10 text-sage-dark text-sm font-medium rounded-full mb-6">
          {review.project}
        </span>

        {/* Author info */}
        <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
          <Image
            src={review.avatar || "/placeholder.svg"}
            alt={review.name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-900">{review.name}</p>
            <p className="text-sm text-gray-600">{review.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Reviews() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-sage/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Khách Hàng <span className="text-sage-dark">Nói Gì</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Hơn 180 khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
