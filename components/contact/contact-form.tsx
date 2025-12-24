"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { MessageCircle, Phone } from "lucide-react"

const PROJECT_TYPES = [
  "Hòn non bộ",
  "Ao cá Koi",
  "Tiểu cảnh sân vườn",
  "Cảnh quan tổng thể",
  "Khác"
]

const INVESTMENT_OPTIONS = [
  "Dưới 200 triệu",
  "200 - 500 triệu",
  "500 - 700 triệu",
  "Trên 700 triệu",
]

const ZALO_PHONE = "0938386679"

export default function ContactForm() {
  const { ref, isVisible } = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    investmentOption: ""
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Tạo tin nhắn theo format đẹp
    const message = `🌿 YÊU CẦU TƯ VẤN - THIÊN SƠN LANDSCAPE

👤 Họ và tên: ${formData.name}
📱 Số điện thoại: ${formData.phone}
🏗️ Loại công trình: ${formData.projectType}
💰 Mức đầu tư: ${formData.investmentOption}

Xin chào! Tôi quan tâm đến dịch vụ của Thiên Sơn. Vui lòng tư vấn cho tôi. Cảm ơn!`

    // Mở Zalo với tin nhắn đã soạn sẵn
    const zaloUrl = `https://zalo.me/${ZALO_PHONE}?text=${encodeURIComponent(message)}`
    window.open(zaloUrl, '_blank')
    
    // Reset form sau khi gửi
    setFormData({
      name: "",
      phone: "",
      projectType: "",
      investmentOption: ""
    })
  }

  const isFormValid = formData.name.length >= 3 && 
                      formData.phone.length >= 9 && 
                      formData.projectType && 
                      formData.investmentOption

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-lg"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Gửi Yêu Cầu Tư Vấn
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
          Điền thông tin bên dưới và gửi qua Zalo để được tư vấn nhanh nhất
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Label htmlFor="name" className="text-sm sm:text-base text-gray-900 font-medium">
              Họ và tên <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Nguyễn Văn A"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              minLength={3}
              className="mt-2 h-12 sm:h-14 text-base sm:text-lg rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 px-4"
            />
            {formData.name && formData.name.length < 3 && (
              <p className="text-xs text-red-500 mt-1">Vui lòng nhập tên đầy đủ (tối thiểu 3 ký tự)</p>
            )}
          </motion.div>

          {/* Phone Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Label htmlFor="phone" className="text-sm sm:text-base text-gray-900 font-medium">
              Số điện thoại <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="0938 386 679"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              required
              pattern="[0-9\s\-+]{9,}"
              className="mt-2 h-12 sm:h-14 text-base sm:text-lg rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 px-4"
            />
            {formData.phone && formData.phone.length < 9 && (
              <p className="text-xs text-red-500 mt-1">Vui lòng nhập số điện thoại hợp lệ</p>
            )}
          </motion.div>

          {/* Project Type Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Label htmlFor="projectType" className="text-sm sm:text-base text-gray-900 font-medium">
              Loại công trình <span className="text-red-500">*</span>
            </Label>
            <Select 
              value={formData.projectType} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}
              required
            >
              <SelectTrigger className="mt-2 h-12 sm:h-14 text-base sm:text-lg rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 px-4 bg-white">
                <SelectValue placeholder="Chọn loại công trình" className="text-gray-500" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-gray-200 bg-white shadow-lg max-h-[280px] sm:max-h-[320px]">
                {PROJECT_TYPES.map(type => (
                  <SelectItem 
                    key={type} 
                    value={type}
                    className="text-base sm:text-lg py-3 px-4 cursor-pointer hover:bg-emerald-50 focus:bg-emerald-50 rounded-lg mx-1 my-0.5"
                  >
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>

          {/* Investment Option Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Label htmlFor="investmentOption" className="text-sm sm:text-base text-gray-900 font-medium">
              Mức đầu tư <span className="text-red-500">*</span>
            </Label>
            <Select 
              value={formData.investmentOption} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, investmentOption: value }))}
              required
            >
              <SelectTrigger className="mt-2 h-12 sm:h-14 text-base sm:text-lg rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 px-4 bg-white">
                <SelectValue placeholder="Chọn mức đầu tư" className="text-gray-500" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-gray-200 bg-white shadow-lg max-h-[280px] sm:max-h-[320px]">
                {INVESTMENT_OPTIONS.map(option => (
                  <SelectItem 
                    key={option} 
                    value={option}
                    className="text-base sm:text-lg py-3 px-4 cursor-pointer hover:bg-emerald-50 focus:bg-emerald-50 rounded-lg mx-1 my-0.5"
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>

          {/* Submit Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-2 space-y-3"
          >
            {/* Primary Button - Gửi qua Zalo */}
            <Button
              type="submit"
              size="lg"
              disabled={!isFormValid}
              className="w-full h-14 sm:h-16 text-base sm:text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Gửi Yêu Cầu Qua Zalo
            </Button>

            {/* Secondary Button - Gọi điện */}
            <Button
              type="button"
              size="lg"
              variant="outline"
              asChild
              className="w-full h-14 sm:h-16 text-base sm:text-lg font-semibold rounded-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
            >
              <a href={`tel:${ZALO_PHONE}`}>
                <Phone className="w-5 h-5 mr-2" />
                Hoặc Gọi Ngay: {ZALO_PHONE}
              </a>
            </Button>
          </motion.div>

          {/* Validation Message */}
          {!isFormValid && (formData.name || formData.phone || formData.projectType || formData.investmentOption) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm text-center"
            >
              ⚠️ Vui lòng điền đầy đủ thông tin để gửi yêu cầu
            </motion.div>
          )}
        </form>

        {/* Footer Contact */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-gray-500">
            <span>📞 Hotline:</span>
            <a 
              href={`tel:${ZALO_PHONE}`}
              className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline"
            >
              {ZALO_PHONE}
            </a>
            <span className="hidden sm:inline">•</span>
            <span>💬 Chat Zalo:</span>
            <a 
              href={`https://zalo.me/${ZALO_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              {ZALO_PHONE}
            </a>
          </div>
          <p className="text-xs text-gray-400 text-center mt-3">
            ✅ Tư vấn miễn phí • ⏰ Phản hồi trong 30 phút • 🏆 Hơn 15 năm kinh nghiệm
          </p>
        </div>
      </motion.div>
    </div>
  )
}