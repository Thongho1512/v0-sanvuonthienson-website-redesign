"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Liên Hệ Với Chúng Tôi
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Sẵn Sàng Biến Không Gian Của Bạn?</h2>
          <p className="text-lg text-foreground/70">Liên hệ với chúng tôi ngay hôm nay để tư vấn miễn phí và báo giá</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Thông Tin Liên Hệ</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Địa Chỉ</p>
                    <p className="text-foreground/70">Huế, Thừa Thiên Huế, Việt Nam</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Điện Thoại</p>
                    <p className="text-foreground/70">+84 (0) 234 567 8900</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1">
                    ✉️
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-foreground/70">info@thienson.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Giờ Làm Việc</h3>
              <div className="space-y-2 text-foreground/70">
                <p>Thứ Hai - Thứ Sáu: 8:00 AM - 6:00 PM</p>
                <p>Thứ Bảy: 9:00 AM - 4:00 PM</p>
                <p>Chủ Nhật: Đóng cửa</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Họ và Tên
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                placeholder="Tên của bạn"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                Số Điện Thoại
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                placeholder="+84 (0) 123 456 7890"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Thông Điệp
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                placeholder="Mô tả về dự án của bạn..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition-all transform hover:scale-105"
            >
              Gửi Thông Điệp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
