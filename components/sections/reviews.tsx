"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

const reviews = [
  {
    name: "Anh Minh Tuấn",
    location: "Bình Thuận",
    avatar: "/vietnamese-man-professional-portrait.jpg",
    rating: 5,
    comment:
      "Đội ngũ Thiên Sơn làm việc rất chuyên nghiệp, tư vấn nhiệt tình. Hồ cá Koi nhà tôi sau 6 tháng vẫn hoạt động tốt, nước trong, cá khỏe mạnh. Rất hài lòng!",
    project: "Hồ Cá Koi 50m²",
  },
  {
    name: "Chị Thu Hương",
    location: "TP. Hồ Chí Minh",
    avatar: "/vietnamese-woman-professional-portrait.jpg",
    rating: 5,
    comment:
      "Hòn non bộ được thiết kế đẹp, bố cục phong thủy hợp lý. Mỗi lần về nhà nhìn thấy là thấy thư giãn. Cảm ơn team Thiên Sơn đã tạo nên không gian tuyệt vời!",
    project: "Hòn Non Bộ Sân Vườn",
  },
  {
    name: "Anh Quốc Huy",
    location: "Bình Phước",
    avatar: "/vietnamese-businessman-portrait.png",
    rating: 5,
    comment:
      "Dự án cảnh quan resort của chúng tôi được Thiên Sơn thực hiện rất xuất sắc. Khách du lịch đều khen ngợi. Sẽ tiếp tục hợp tác trong các dự án tới.",
    project: "Cảnh Quan Resort",
  },
  {
    name: "Anh Đức Thịnh",
    location: "Đồng Nai",
    avatar: "/vietnamese-cafe-owner-portrait.jpg",
    rating: 5,
    comment:
      "Hồ cá Koi trong quán cafe tôi được thiết kế độc đáo, thu hút rất nhiều khách. Hệ thống lọc hoạt động êm, không tốn nhiều điện. Đáng đồng tiền bát gạo!",
    project: "Hồ Koi Quán Cafe",
  },
]

export default function Reviews() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section 
      ref={ref}
      className="py-20 sm:py-28 bg-gradient-to-b from-emerald-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nhận Xét Của Khách Hàng
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Một số nhận xét của đối tác và khách hàng dành cho dịch vụ của Thiên Sơn Landscape
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
            >
              {/* Quote Mark */}
              <div className="text-4xl text-emerald-600 mb-3 leading-none">
                "
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[120px] line-clamp-6">
                {review.comment}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array(review.rating)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
              </div>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900 text-sm">
                  {review.name}
                </p>
                <p className="text-xs text-gray-600">
                  {review.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
