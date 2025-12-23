"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, Phone, MessageCircle, Clock } from "lucide-react"

export default function ThankYouPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pt-20 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 text-white animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cảm Ơn Bạn! 🎉
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            Yêu cầu tư vấn của bạn đã được gửi thành công
          </p>
          <p className="text-base sm:text-lg text-emerald-600 font-semibold">
            Chúng tôi sẽ liên hệ với bạn sớm nhất
          </p>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {/* Response Time */}
          <div className="bg-white rounded-2xl p-6 border-2 border-emerald-100 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Thời Gian</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Chúng tôi sẽ phản hồi trong vòng <span className="font-bold text-emerald-600">30 phút</span>
            </p>
          </div>

          {/* Phone Support */}
          <div className="bg-white rounded-2xl p-6 border-2 border-emerald-100 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Điện Thoại</h3>
            </div>
            <p className="text-gray-600 text-sm">
              <a href="tel:0938386679" className="font-bold text-emerald-600 hover:underline">
                0938 386 679
              </a>
            </p>
          </div>

          {/* Zalo Chat */}
          <div className="bg-white rounded-2xl p-6 border-2 border-emerald-100 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Zalo</h3>
            </div>
            <p className="text-gray-600 text-sm">
              <a href="https://zalo.me/0938386679" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline">
                Chat qua Zalo
              </a>
            </p>
          </div>
        </motion.div>

        {/* What Happens Next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-10 text-white mb-12 shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Tiếp Theo Là Gì?</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white bg-opacity-20">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Xác Nhận Thông Tin</h3>
                <p className="text-white text-opacity-90">Chúng tôi sẽ xác nhận thông tin dự án của bạn</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white bg-opacity-20">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Tư Vấn Miễn Phí</h3>
                <p className="text-white text-opacity-90">Nhận tư vấn chi tiết về thiết kế và chi phí dự án</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white bg-opacity-20">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Bảng Giá & Hợp Đồng</h3>
                <p className="text-white text-opacity-90">Nhận bảng giá chi tiết và thỏa thuận hợp đồng</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full hover:shadow-lg transition transform hover:scale-105"
          >
            ← Quay Về Trang Chủ
          </Link>
          <Link
            href="/thu-vien-cong-trinh"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition"
          >
            Xem Thư Viện Công Trình →
          </Link>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Hoặc hãy khám phá thêm về các dự án của chúng tôi
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/thi-cong-hon-non-bo" className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline">
              Hòn Non Bộ
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/thi-cong-ho-ca-koi" className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline">
              Hồ Cá Koi
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/thu-vien-cong-trinh" className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline">
              Thư Viện
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
