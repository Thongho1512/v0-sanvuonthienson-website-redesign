"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

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

export default function ContactForm() {
  const { ref, isVisible } = useScrollAnimation()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    investmentOption: ""
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Gọi Cloudflare Function (không phải /api/send-quote nữa)
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.details || 'Failed to send email')
      }

      console.log('✅ Email sent successfully:', data)

      setIsSuccess(true)
      setFormData({
        name: "",
        phone: "",
        projectType: "",
        investmentOption: ""
      })

      // Redirect to thank you page after 1 second
      setTimeout(() => {
        router.push("/cam-on")
      }, 1000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert("❌ Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ qua Hotline: 0938 386 679")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-lg"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Gửi Yêu Cầu Tư Vấn</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Điền thông tin bên dưới, chúng tôi sẽ liên hệ trong 30 phút</p>

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
              disabled={isSubmitting}
              className="mt-2 h-12 sm:h-14 text-base sm:text-lg rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 px-4"
            />
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
              disabled={isSubmitting}
              className="mt-2 h-12 sm:h-14 text-base sm:text-lg rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 px-4"
            />
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
              disabled={isSubmitting}
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
              Mục đầu tư <span className="text-red-500">*</span>
            </Label>
            <Select 
              value={formData.investmentOption} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, investmentOption: value }))}
              disabled={isSubmitting}
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

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-2"
          >
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting || isSuccess || !formData.projectType || !formData.investmentOption}
              className="w-full h-14 sm:h-16 text-base sm:text-lg font-semibold rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-600/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Đang gửi...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Đã gửi thành công!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Gửi Yêu Cầu Tư Vấn
                </>
              )}
            </Button>
          </motion.div>

          {/* Success Message */}
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-center text-sm sm:text-base"
            >
              Cảm ơn bạn! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
            </motion.div>
          )}
        </form>

        {/* Footer Contact */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-500 text-center">
            Hoặc liên hệ trực tiếp qua{" "}
            <a href="tel:0938386679" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Hotline: 0938 386 679
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
