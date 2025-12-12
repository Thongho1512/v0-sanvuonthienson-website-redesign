"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation()

  const contactItems = [
    {
      icon: MapPin,
      title: "Địa Chỉ",
      content: "Phú Bài, Thành phố Huế, Tỉnh Thừa Thiên Huế",
      color: "emerald",
    },
    {
      icon: Phone,
      title: "Số Điện Thoại",
      content: "0938 386 679",
      action: "tel:0938386679",
      color: "blue",
    },
    {
      icon: Mail,
      title: "Email",
      content: "sanvuonthienson@gmail.com",
      action: "mailto:sanvuonthienson@gmail.com",
      color: "purple",
    },
    {
      icon: Clock,
      title: "Giờ Làm Việc",
      content: "Thứ 2 - Chủ Nhật: 7:00 - 21:00",
      color: "orange",
    },
    {
      icon: MessageCircle,
      title: "Zalo",
      content: "0938 386 679",
      action: "https://zalo.me/0938386679",
      color: "teal",
    },
  ]

  return (
    <div ref={ref} className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Thông Tin Liên Hệ</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Chúng tôi luôn sẵn sàng lắng nghe và tư vấn cho bạn về các dự án cảnh quan, hồ cá Koi và hòn non bộ. Hãy liên
          hệ qua các kênh dưới đây để được hỗ trợ nhanh nhất.
        </p>
      </motion.div>

      <div className="space-y-4">
        {contactItems.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {item.action ? (
                <a
                  href={item.action}
                  target={item.action.startsWith("http") ? "_blank" : undefined}
                  rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 text-${item.color}-600`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200">
                  <div
                    className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className={`w-6 h-6 text-${item.color}-600`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-3">Cam Kết Của Chúng Tôi</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Tư vấn miễn phí 100%
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Báo giá chi tiết, minh bạch
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Bảo hành dài hạn, hỗ trợ tận tâm
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            15+ năm kinh nghiệm, 200+ công trình
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex gap-4"
      >
        <Button size="lg" className="flex-1 bg-emerald-600 hover:bg-emerald-700 h-14 text-lg rounded-full" asChild>
          <a href="tel:0938386679">
            <Phone className="mr-2 w-5 h-5" />
            Gọi Ngay
          </a>
        </Button>
        <Button size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700 h-14 text-lg rounded-full" asChild>
          <a href="https://zalo.me/0938386679" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 w-5 h-5" />
            Chat Zalo
          </a>
        </Button>
      </motion.div>
    </div>
  )
}
