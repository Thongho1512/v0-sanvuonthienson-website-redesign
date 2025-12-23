"use client"

import { useState, useEffect } from "react"
import QuoteFormModal from "@/components/contact/quote-form-modal"

const VIETNAMESE_NAMES = [
  "Thị Hương",
  "Văn Hùng",
  "Minh Châu",
  "Hoàng Anh",
  "Thế Bảo",
  "Linh Phương",
  "Quang Huy",
  "Hà Trang",
  "Đình Long",
  "Thảo Nhi",
  "Tuấn Kiệt",
  "Thanh Huyền",
  "Gia Hân",
  "Mạnh Cường",
  "Kiều Oanh",
  "Tú Anh",
  "Khánh Linh",
  "Minh Đức",
  "Hương Giang",
  "Việt Hà",
  "Hải Yến",
  "Thương Hoài",
  "Quốc Bảo",
  "Vân Anh",
  "Duy Nhân",
  "Xuân Phương",
  "Anh Tuấn",
  "Thùy Linh",
  "Khôi Nguyên",
  "Hồng Nhân",
  "Phúc Tâm",
  "Hà My",
  "Khánh Đông",
  "Trang Anh",
  "Đức Hiếu",
  "Yến Nhi",
  "Thanh Long",
  "Thùy Dương",
  "Huy Hoàng",
  "Vân Hương",
  "Minh Tuấn",
  "Bích Ngọc",
  "Tân Tài",
  "Hương Ly",
  "Quang Vinh",
  "Linh Điều",
  "Mạnh Tiến",
  "Hồng Anh",
  "Phú Niên",
  "Gia Liên",
  "Quốc Huy",
  "Hà Linh",
  "Văn Toàn",
  "Xuân Hương",
  "Tuấn Anh",
  "Thảo Linh",
  "Đạo Minh",
  "Tú Nhi",
  "Hải Long",
  "Yên Phương",
  "Quang Tuấn",
  "Hương Mai",
  "Thịnh Phát",
  "Vân Trang",
  "Minh Hoàng",
  "Linh Nhi",
  "Khôi Tú",
  "Hồng Tuyên",
  "Bảo Anh",
  "Hà Vy",
  "Huy Tú",
  "Xuân Thủy",
  "Thanh Sơn",
  "Linh Giang",
  "Quang Nghĩa",
  "Vân Quyên",
  "Minh Phúc",
  "Khánh Hà",
  "Tân Lợi",
  "Hương Thơm",
  "Dũng Mạnh",
  "Trang Thơm",
  "Huy Tân",
  "Yến Như",
  "Văn Phong",
  "Hà Giang",
  "Quốc Thắng",
  "Linh Nương",
  "Minh Khánh",
  "Thảo Vy",
  "Kiên Long",
  "Hương Trang",
  "Quang Trung",
  "Hồng Nhung",
  "Phúc Lợi",
  "Gia Kỳ",
  "Huy Hoạt",
  "Vân Tú",
  "Đức Anh",
  "Linh Trâm"
]

function NotificationBanner() {
  const [currentName, setCurrentName] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [nameIndex, setNameIndex] = useState(0)

  useEffect(() => {
    const showNotification = () => {
      setCurrentName(VIETNAMESE_NAMES[nameIndex])
      setIsVisible(true)

      const hideTimer = setTimeout(() => {
        setIsVisible(false)
      }, 8000)

      const nextTimer = setTimeout(() => {
        setNameIndex((prev) => (prev + 1) % VIETNAMESE_NAMES.length)
      }, 9000)

      return () => {
        clearTimeout(hideTimer)
        clearTimeout(nextTimer)
      }
    }

    const initialTimer = setTimeout(showNotification, 180000)

    return () => clearTimeout(initialTimer)
  }, [nameIndex])

  return (
    <div
      className={`fixed bottom-20 left-6 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow-lg transition-all duration-500 z-40 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-96"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center shadow-md animate-pulse">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Đặt dịch vụ thành công</p>
          <p className="text-sm font-semibold">✨ {currentName}</p>
        </div>
      </div>
    </div>
  )
}

export default function FloatingContact() {
  return (
    <>
      <QuoteFormModal />
      <NotificationBanner />
      <div className="floating-contact">
        {/* Zalo Button with Official Logo */}
        <a
          href="https://zalo.me/0938386679"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn bg-[#0068FF] hover:bg-[#0052CC]"
          title="Chat Zalo"
        >
          <img 
            src="/zalo-logo.png" 
            alt="Zalo" 
            className="w-7 h-7"
          />
        </a>

        {/* Phone Button */}
        <a href="tel:0938386679" className="contact-btn bg-[#25D366] hover:bg-[#1ebe57]" title="Gọi điện">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </a>
      </div>
    </>
  )
}