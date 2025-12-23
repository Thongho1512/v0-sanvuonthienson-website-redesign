// final
"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const PROJECT_TYPES = [
  "Hòn non bộ",
  "Ao cá Koi",
  "Tiểu cảnh sân vườn",
  "Khác"
]

const INVESTMENT_OPTIONS = [
  "Dưới 200 triệu",
  "200 - 500 triệu",
  "500 - 700 triệu",
  "Trên 700 triệu",
]

const ZALO_PHONE = "0394710774"
const FORM_SHOWN_KEY = "quote_form_shown" // Key để lưu vào localStorage
const FIRST_VISIT_KEY = "first_visit_time" // Key lưu thời gian truy cập lần đầu

export default function QuoteFormModal() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    investmentOption: ""
  })

  useEffect(() => {
    // Kiểm tra xem form đã từng hiển thị chưa
    const hasShownForm = localStorage.getItem(FORM_SHOWN_KEY)
    
    if (hasShownForm === "true") {
      // Nếu đã hiển thị rồi thì không làm gì cả
      return
    }

    // Kiểm tra thời gian truy cập lần đầu
    const firstVisitTime = localStorage.getItem(FIRST_VISIT_KEY)
    const currentTime = Date.now()

    if (!firstVisitTime) {
      // Lần đầu tiên truy cập, lưu thời gian
      localStorage.setItem(FIRST_VISIT_KEY, currentTime.toString())
      
      // Set timer 3 phút
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem(FORM_SHOWN_KEY, "true")
      }, 180000) // 3 phút = 180000ms

      return () => clearTimeout(timer)
    } else {
      // Đã có thời gian truy cập, tính khoảng cách thời gian
      const elapsedTime = currentTime - parseInt(firstVisitTime)
      
      if (elapsedTime >= 180000) {
        // Đã qua 3 phút, hiển thị form ngay
        setIsOpen(true)
        localStorage.setItem(FORM_SHOWN_KEY, "true")
      } else {
        // Chưa đủ 3 phút, set timer cho thời gian còn lại
        const remainingTime = 180000 - elapsedTime
        const timer = setTimeout(() => {
          setIsOpen(true)
          localStorage.setItem(FORM_SHOWN_KEY, "true")
        }, remainingTime)

        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClose = () => {
    setIsOpen(false)
    // Đánh dấu là đã hiển thị khi user đóng form
    localStorage.setItem(FORM_SHOWN_KEY, "true")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      setIsOpen(false)
      setFormData({
        name: "",
        phone: "",
        projectType: "",
        investmentOption: ""
      })

      // Đánh dấu là đã hiển thị khi submit thành công
      localStorage.setItem(FORM_SHOWN_KEY, "true")
      
      router.push("/cam-on")
    } catch (error) {
      console.error('Error submitting form:', error)
      alert("❌ Có lỗi xảy ra. Vui lòng thử lại.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="relative bg-linear-to-br from-emerald-800 to-teal-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 w-full max-w-sm sm:max-w-md shadow-2xl border-2 border-white border-opacity-20 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white text-xl sm:text-2xl hover:text-opacity-80 transition p-1"
        >
          ✕
        </button>

        {/* Title */}
        <div className="text-center mb-6 sm:mb-8 mt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">ĐĂNG KÝ NHẬN TƯ VẤN</h2>
          <p className="text-xs sm:text-sm text-emerald-100">Kiến trúc sư sẽ liên hệ trong 30 phút</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Name Input */}
          <div>
            <label className="text-xs text-emerald-100 block mb-1">Họ và tên *</label>
            <input
              type="text"
              name="name"
              placeholder="Nguyễn Văn A"
              value={formData.name}
              onChange={handleInputChange}
              minLength={3}
              required
              disabled={isSubmitting}
              title="Vui lòng nhập tên đầy đủ (tối thiểu 3 ký tự)"
              className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-full bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 transition disabled:opacity-50 invalid:ring-2 invalid:ring-red-400"
            />
            {formData.name && formData.name.length < 3 && (
              <p className="text-xs text-red-300 mt-1">⚠️ Tên phải có ít nhất 3 ký tự</p>
            )}
          </div>

          {/* Phone Input */}
          <div>
            <label className="text-xs text-emerald-100 block mb-1">Số điện thoại *</label>
            <input
              type="tel"
              name="phone"
              placeholder="0938 386 679"
              value={formData.phone}
              onChange={handleInputChange}
              pattern="[0-9\s\-+]{9,}"
              required
              disabled={isSubmitting}
              title="Vui lòng nhập số điện thoại hợp lệ (9+ chữ số)"
              className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-full bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 transition disabled:opacity-50 invalid:ring-2 invalid:ring-red-400"
            />
            {formData.phone && !/[0-9\s\-+]{9,}/.test(formData.phone) && (
              <p className="text-xs text-red-300 mt-1">⚠️ Số điện thoại không hợp lệ</p>
            )}
          </div>

          {/* Project Type Select */}
          <div>
            <label className="text-xs text-emerald-100 block mb-1">Loại công trình *</label>
            <Select value={formData.projectType} onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}>
              <SelectTrigger 
                disabled={isSubmitting}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg sm:rounded-full bg-white text-gray-800 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 transition disabled:opacity-50 invalid:ring-2 invalid:ring-red-400 border border-gray-200"
              >
                <SelectValue placeholder="-- Chọn loại --" />
              </SelectTrigger>
              <SelectContent className="z-50 max-h-48 sm:max-h-64 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                {PROJECT_TYPES.map(type => (
                  <SelectItem key={type} value={type} className="text-sm sm:text-base py-2 cursor-pointer hover:bg-emerald-50 focus:bg-emerald-100">
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formData.projectType && (
              <p className="text-xs text-emerald-200 mt-1">✓ Đã chọn: {formData.projectType}</p>
            )}
          </div>

          {/* Investment Option Select */}
          <div>
            <label className="text-xs text-emerald-100 block mb-1">Mục đầu tư *</label>
            <Select value={formData.investmentOption} onValueChange={(value) => setFormData(prev => ({ ...prev, investmentOption: value }))}>
              <SelectTrigger 
                disabled={isSubmitting}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg sm:rounded-full bg-white text-gray-800 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 transition disabled:opacity-50 invalid:ring-2 invalid:ring-red-400 border border-gray-200"
              >
                <SelectValue placeholder="-- Chọn mức đầu tư --" />
              </SelectTrigger>
              <SelectContent className="z-50 max-h-48 sm:max-h-64 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                {INVESTMENT_OPTIONS.map(option => (
                  <SelectItem key={option} value={option} className="text-sm sm:text-base py-2 cursor-pointer hover:bg-emerald-50 focus:bg-emerald-100">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formData.investmentOption && (
              <p className="text-xs text-emerald-200 mt-1">✓ Đã chọn: {formData.investmentOption}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-5 sm:mt-6 px-6 py-3 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-teal-900 font-bold text-sm sm:text-base rounded-lg sm:rounded-full hover:from-yellow-300 hover:to-yellow-400 transition shadow-lg active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Đang gửi..." : "TƯ VẤN NGAY"}
          </button>

          {/* Info Text */}
          <p className="text-xs text-emerald-100 text-center mt-4">
            ✓ Hoàn toàn miễn phí | ✓ Nhanh chóng
          </p>
        </form>
      </div>
    </div>
  )
}