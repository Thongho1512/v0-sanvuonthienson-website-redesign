"use client"

import { useState } from "react"

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      name: "Ông Trần Văn A",
      location: "Biệt Thự Huế",
      rating: 5,
      text: "Tôi rất hài lòng với công trình hồ cá Koi của Thiên Sơn. Đội thi công chuyên nghiệp, tính cẩn thận, hệ thống lọc nước hoạt động tuyệt vời. Khuyên cộng sự.",
      avatar: "👨‍💼",
    },
    {
      name: "Chị Lê Thị B",
      location: "Quán Cafe Sài Gòn",
      rating: 5,
      text: "Thiên Sơn đã tạo ra không gian cafe vườn cá Koi rất độc đáo. Khách hàng rất thích, doanh thu tăng 30%. Dịch vụ tư vấn miễn phí cũng rất bổ ích.",
      avatar: "👩‍💼",
    },
    {
      name: "Ông Phạm Văn C",
      location: "Dự Án Bất Động Sản",
      rating: 5,
      text: "Cảnh quan của Thiên Sơn nâng cao giá trị dự án nhà ở rất nhiều. Tư vấn chuyên sâu, thiết kế chi tiết, thi công đúng tiến độ. Rất đáng tin cậy.",
      avatar: "👨‍🔧",
    },
    {
      name: "Cô Ngô Thị D",
      location: "Sân Vườn Biệt Thự",
      rating: 5,
      text: "Hòn non bộ của Thiên Sơn rất đẹp và hợp phong thủy. Từ khảo sát đến hoàn thành chỉ 3 tuần. Thợ lành nghề, tư vấn tâm huyết.",
      avatar: "👩‍🦰",
    },
    {
      name: "Ông Hoàng Văn E",
      location: "Resort Nha Trang",
      rating: 5,
      text: "Thiên Sơn thiết kế cảnh quan resort rất chuyên nghiệp. Khu vực chơi nước, vườn cây, hồ cá rất hài hòa. Lượt khách tăng 25%.",
      avatar: "🧔",
    },
    {
      name: "Chị Vũ Thị F",
      location: "Nhà Hàng Hải Phòng",
      rating: 5,
      text: "TUI rất ấn tượng với dịch vụ của Thiên Sơn. Từ tiểu cảnh nhỏ đến hồ cá lớn, tất cả đều hoàn thiện. Giá hợp lý, chất lượng cao.",
      avatar: "👩",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const getVisibleReviews = () => {
    return [
      reviews[currentIndex],
      reviews[(currentIndex + 1) % reviews.length],
      reviews[(currentIndex + 2) % reviews.length],
    ]
  }

  return (
    <section id="reviews" className="py-20 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-semibold">
            Đánh Giá Khách Hàng
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Những Lời Khen Từ Khách Hàng</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Hơn 500+ khách hàng hài lòng với các công trình của Thiên Sơn
          </p>
        </div>

        {/* Reviews Slider */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {getVisibleReviews().map((review, idx) => (
              <div
                key={idx}
                className="p-8 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-primary-foreground/90 mb-6 line-clamp-4 leading-relaxed italic">"{review.text}"</p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center text-2xl">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">{review.name}</p>
                    <p className="text-sm text-primary-foreground/70">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-all text-primary-foreground"
              aria-label="Trước"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-all text-primary-foreground"
              aria-label="Tiếp"
            >
              →
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx >= currentIndex && idx < currentIndex + 3
                    ? "bg-primary-foreground/70 w-8"
                    : "bg-primary-foreground/30"
                }`}
                aria-label={`Tới đánh giá ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
