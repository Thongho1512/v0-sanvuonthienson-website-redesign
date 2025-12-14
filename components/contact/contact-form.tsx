"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const { ref, isVisible } = useScrollAnimation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1500)
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Label htmlFor="name" className="text-gray-900 font-medium">
              Họ và tên <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Nguyễn Văn A"
              required
              className="mt-2 h-12 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Label htmlFor="phone" className="text-gray-900 font-medium">
              Số điện thoại <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="0938 386 679"
              required
              className="mt-2 h-12 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Label htmlFor="email" className="text-gray-900 font-medium">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              className="mt-2 h-12 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Label htmlFor="service" className="text-gray-900 font-medium">
              Dịch vụ quan tâm <span className="text-red-500">*</span>
            </Label>
            <Select name="service" required>
              <SelectTrigger className="mt-2 h-12 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500">
                <SelectValue placeholder="Chọn dịch vụ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="koi">Thi công hồ cá Koi</SelectItem>
                <SelectItem value="rockscape">Thi công hòn non bộ</SelectItem>
                <SelectItem value="garden">Thiết kế sân vườn</SelectItem>
                <SelectItem value="landscape">Cảnh quan tổng thể</SelectItem>
                <SelectItem value="consultation">Tư vấn phong thủy</SelectItem>
                <SelectItem value="other">Dịch vụ khác</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Label htmlFor="message" className="text-gray-900 font-medium">
              Nội dung chi tiết
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Mô tả chi tiết về dự án của bạn: diện tích, vị trí, phong cách mong muốn..."
              rows={5}
              className="mt-2 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting || isSuccess}
              className="w-full h-14 text-lg rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-600/30"
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

          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-center"
            >
              Cảm ơn bạn! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
            </motion.div>
          )}
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
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
