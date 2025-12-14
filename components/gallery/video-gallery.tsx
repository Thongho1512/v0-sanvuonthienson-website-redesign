"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Play, VideoIcon, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const videos = [
  {
    id: 1,
    title: "Thi Công Hồ Koi Biệt Thú 50m² - Phú Mỹ Hưng",
    thumbnail: "/public/placeholder.svg?height=400&width=600&query=luxury koi pond construction site",
    duration: "5:30",
    views: "15K",
    category: "Hồ Cá Koi",
  },
  {
    id: 2,
    title: "Quá Trình Làm Hòn Non Bộ Chùa Linh Ẩn",
    thumbnail: "/public/placeholder.svg?height=400&width=600&query=traditional rockscape construction process",
    duration: "8:15",
    views: "22K",
    category: "Hòn Non Bộ",
  },
  {
    id: 3,
    title: "Phối Cảnh 3D Sân Vườn Villa Đà Lạt",
    thumbnail: "/public/placeholder.svg?height=400&width=600&query=3d garden landscape visualization",
    duration: "3:45",
    views: "12K",
    category: "Phối Cảnh 3D",
  },
  {
    id: 4,
    title: "Thi Công Hệ Thống Lọc Nước Hồ Koi Chuyên Nghiệp",
    thumbnail: "/public/placeholder.svg?height=400&width=600&query=koi pond filtration system installation",
    duration: "6:20",
    views: "18K",
    category: "Hồ Cá Koi",
  },
  {
    id: 5,
    title: "Nghệ Thuật Đặt Đá Hòn Non Bộ - Bí Quyết Từ Nghệ Nhân",
    thumbnail: "/public/placeholder.svg?height=400&width=600&query=artistic stone placement technique",
    duration: "10:30",
    views: "35K",
    category: "Hòn Non Bộ",
  },
  {
    id: 6,
    title: "Review Sau 2 Năm Sử Dụng Hồ Koi Thiên Sơn",
    thumbnail: "/public/placeholder.svg?height=400&width=600&query=beautiful koi pond after 2 years",
    duration: "4:50",
    views: "28K",
    category: "Hồ Cá Koi",
  },
]

export default function VideoGallery() {
  const { ref, isVisible } = useScrollAnimation()
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)

  return (
    <>
      <section 
        className="py-20 bg-violet-200 relative overflow-hidden" 
        ref={ref} 
        id="videos"
      >
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-pattern-dots opacity-[0.02]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 font-medium mb-4">
              <VideoIcon className="w-4 h-4" />
              Video Thi Công
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Thi Công & Thực Tế</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Xem quy trình thi công thực tế các dự án đã hoàn thành
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800 mb-4 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* ✅ Image với lazy loading thay cho background-image */}
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-black/80 backdrop-blur-sm text-white text-sm font-medium">
                    {video.duration}
                  </div>

                  {/* View count overlay on hover */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-sm text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    👁️ {video.views} views
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                    {video.category}
                  </span>
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500">{video.views} lượt xem</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Theo dõi kênh YouTube để xem thêm nhiều video thi công mới nhất
            </p>
            <a
              href="https://youtube.com/@thiensongarden"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Đăng Ký Kênh YouTube
            </a>
          </motion.div>
        </div>
      </section>

      {/* Video modal với animation mượt */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            onClick={() => setSelectedVideo(null)}
            aria-label="Đóng"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Video container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative max-w-6xl w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Placeholder content - Thay bằng video player thực tế */}
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <VideoIcon className="w-16 h-16 mx-auto mb-4 opacity-50 text-blue-400 animate-pulse" />
                <p className="text-xl font-medium mb-2">{selectedVideo.title}</p>
                <p className="text-sm text-gray-400 mb-4">Video player sẽ được tích hợp ở đây</p>
                
                {/* Video info */}
                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {selectedVideo.category}
                  </span>
                  <span>•</span>
                  <span>⏱️ {selectedVideo.duration}</span>
                  <span>•</span>
                  <span>👁️ {selectedVideo.views} lượt xem</span>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 justify-center mt-6">
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                    ▶️ Phát Video
                  </button>
                  <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                    📤 Chia Sẻ
                  </button>
                </div>
              </div>
            </div>

            {/* Loading skeleton effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-shimmer pointer-events-none" />
          </motion.div>

          {/* Video description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 max-w-4xl w-full px-4"
          >
            <div className="bg-gray-900/80 backdrop-blur-md rounded-xl p-4 border border-gray-700">
              <p className="text-white text-sm text-center">
                💡 <strong>Lưu ý:</strong> Đây là video thực tế quá trình thi công. 
                Mọi thông tin chi tiết vui lòng liên hệ <strong className="text-blue-400">0938 386 679</strong>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}