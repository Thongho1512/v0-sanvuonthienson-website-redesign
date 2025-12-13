"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Play, VideoIcon } from "lucide-react"
import { useState } from "react"

const videos = [
  {
    id: 1,
    title: "Thi Công Hồ Koi Biệt Thự 50m² - Phú Mỹ Hưng",
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
      <section className="py-20 bg-gradient-to-br from-gray-100 via-blue-100/50 to-indigo-100/50 relative overflow-hidden" ref={ref} id="videos">
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
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  />
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
        </div>
      </section>

      {/* Video modal - giữ nguyên */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative max-w-6xl w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <VideoIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-xl font-medium">{selectedVideo.title}</p>
                <p className="text-sm text-gray-400 mt-2">Video player sẽ được tích hợp ở đây</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}