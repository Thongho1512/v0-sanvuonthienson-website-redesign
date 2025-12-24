"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle, AlertCircle, X } from "lucide-react"

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

const FORM_SHOWN_KEY = "quote_form_shown"
const FIRST_VISIT_KEY = "first_visit_time"

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function QuoteFormModal() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    investmentOption: ""
  })

  useEffect(() => {
    const hasShownForm = localStorage.getItem(FORM_SHOWN_KEY)
    
    if (hasShownForm === "true") {
      return
    }

    const firstVisitTime = localStorage.getItem(FIRST_VISIT_KEY)
    const currentTime = Date.now()

    if (!firstVisitTime) {
      localStorage.setItem(FIRST_VISIT_KEY, currentTime.toString())
      
      const timer = setTimeout(() => {
        if (localStorage.getItem(FORM_SHOWN_KEY) !== "true") {
          localStorage.setItem(FORM_SHOWN_KEY, "true")
          setIsOpen(true)
        }
      }, 30000) // 3 phút

      return () => clearTimeout(timer)
    } else {
      const elapsedTime = currentTime - parseInt(firstVisitTime)
      
      if (elapsedTime >= 180000) {
        localStorage.setItem(FORM_SHOWN_KEY, "true")
        setIsOpen(true)
      } else {
        const remainingTime = 180000 - elapsedTime
        const timer = setTimeout(() => {
          if (localStorage.getItem(FORM_SHOWN_KEY) !== "true") {
            localStorage.setItem(FORM_SHOWN_KEY, "true")
            setIsOpen(true)
          }
        }, remainingTime)

        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem(FORM_SHOWN_KEY, "true")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('submitting')
    setErrorMessage("")

    try {
      // Gọi Cloudflare Function
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || data.details || 'Failed to send email')
      }

      // Thành công
      setSubmitStatus('success')
      
      // Đánh dấu đã hiển thị
      localStorage.setItem(FORM_SHOWN_KEY, "true")
      
      // Đợi 1.5 giây để user thấy thông báo thành công
      setTimeout(() => {
        setIsOpen(false)
        router.push("/cam-on")
      }, 1500)

    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Đã xảy ra lỗi. Vui lòng thử lại.')
      
      // Reset status sau 5 giây để user có thể thử lại
      setTimeout(() => {
        setSubmitStatus('idle')
        setErrorMessage("")
      }, 5000)
    }
  }

  const isFormValid = formData.name.length >= 3 && 
                      formData.phone.length >= 9 && 
                      formData.projectType && 
                      formData.investmentOption

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="relative bg-gradient-to-br from-emerald-800 to-teal-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 w-full max-w-sm sm:max-w-md shadow-2xl border-2 border-white border-opacity-20 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          disabled={submitStatus === 'submitting'}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-opacity-80 transition p-2 rounded-full hover:bg-white/10 disabled:opacity-50"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="text-center mb-6 sm:mb-8 mt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">ĐĂNG KÝ NHẬN TƯ VẤN</h2>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 rounded-xl bg-green-500 bg-opacity-20 border-2 border-green-400 flex items-center gap-3 animate-slide-up">
            <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Gửi yêu cầu thành công!</p>
              <p className="text-xs text-green-200 mt-1">Đang chuyển hướng...</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 rounded-xl bg-red-500 bg-opacity-20 border-2 border-red-400 flex items-start gap-3 animate-slide-up">
            <AlertCircle className="w-6 h-6 text-red-300 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white">Gửi yêu cầu thất bại</p>
              <p className="text-xs text-red-200 mt-1">{errorMessage}</p>
            </div>
          </div>
        )}

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
              disabled={submitStatus === 'submitting' || submitStatus === 'success'}
              title="Vui lòng nhập tên đầy đủ (tối thiểu 3 ký tự)"
              className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-full bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
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
              disabled={submitStatus === 'submitting' || submitStatus === 'success'}
              title="Vui lòng nhập số điện thoại hợp lệ (9+ chữ số)"
              className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-full bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
            {formData.phone && !/[0-9\s\-+]{9,}/.test(formData.phone) && (
              <p className="text-xs text-red-300 mt-1">⚠️ Số điện thoại không hợp lệ</p>
            )}
          </div>

          {/* Project Type Select */}
          <div>
            <label className="text-xs text-emerald-100 block mb-1">Loại công trình *</label>
            <Select 
              value={formData.projectType} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}
              disabled={submitStatus === 'submitting' || submitStatus === 'success'}
            >
              <SelectTrigger 
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg sm:rounded-full bg-white text-gray-800 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 transition disabled:opacity-50 disabled:cursor-not-allowed border-0"
              >
                <SelectValue placeholder="-- Chọn loại --" />
              </SelectTrigger>
              <SelectContent className="z-[60] max-h-48 sm:max-h-64 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                {PROJECT_TYPES.map(type => (
                  <SelectItem 
                    key={type} 
                    value={type} 
                    className="text-sm sm:text-base py-2 cursor-pointer hover:bg-emerald-50 focus:bg-emerald-100"
                  >
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Investment Option Select */}
          <div>
            <label className="text-xs text-emerald-100 block mb-1">Mức đầu tư *</label>
            <Select 
              value={formData.investmentOption} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, investmentOption: value }))}
              disabled={submitStatus === 'submitting' || submitStatus === 'success'}
            >
              <SelectTrigger 
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg sm:rounded-full bg-white text-gray-800 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 transition disabled:opacity-50 disabled:cursor-not-allowed border-0"
              >
                <SelectValue placeholder="-- Chọn mức đầu tư --" />
              </SelectTrigger>
              <SelectContent className="z-[60] max-h-48 sm:max-h-64 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                {INVESTMENT_OPTIONS.map(option => (
                  <SelectItem 
                    key={option} 
                    value={option} 
                    className="text-sm sm:text-base py-2 cursor-pointer hover:bg-emerald-50 focus:bg-emerald-100"
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || submitStatus === 'submitting' || submitStatus === 'success'}
            className="w-full mt-5 sm:mt-6 px-6 py-3 sm:py-3.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-teal-900 font-bold text-sm sm:text-base rounded-lg sm:rounded-full hover:from-yellow-300 hover:to-yellow-400 transition shadow-lg active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {submitStatus === 'submitting' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>ĐANG GỬI...</span>
              </>
            ) : submitStatus === 'success' ? (
              <>
                <CheckCircle className="w-5 h-5" />
                <span>ĐÃ GỬI THÀNH CÔNG</span>
              </>
            ) : (
              <span>TƯ VẤN NGAY</span>
            )}
          </button>

          {/* Info Text */}
          <p className="text-xs text-emerald-100 text-center mt-4">
            ✓ Hoàn toàn miễn phí | ✓ Phản hồi nhanh chóng
          </p>
        </form>
      </div>
    </div>
  )
}