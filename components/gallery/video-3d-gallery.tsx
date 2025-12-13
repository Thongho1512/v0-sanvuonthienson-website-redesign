"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Play, Layers, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const videos3D = [
  {
    id: 1,
    title: "Phối Cảnh 3D Biệt Thự Vườn Cá Koi",
    thumbnail: "/public/placeholder.svg?height=400&width=600&query=3d villa koi pond rendering",
    duration: "2:45",
    views: "8.5K",
    category: "Biệt Thự",
  },
  {
    id: 2,
    title: "Mô Phỏng 3D Hòn Non Bộ Sân Vườn",
    thumbnail: "/public/placeholder.svg?height=400&width=600&query=3d rockscape garden visualization",
    duration: "3:20",
    views: "6.2K",
    category: "Hòn Non Bộ",
  },
  {
    id: 3,
    title: "Render 3D Sân Vườn Cafe Hiện Đại",
    thumbnail: "/public/placeholder.svg?height=400&width=600&query=3d modern cafe garden design",
    duration: "2:15",
    views: "9.8K",
    category: "Cafe",
  },
  {
    id: 4,
    title: "Phối Cảnh 3D Hồ Koi Resort Cao Cấp",
    thumbnail: "/public/placeholder.svg?height=400&width=600&query=3d luxury resort koi pond",
    duration: "4:10",
    views: "12K",
    category: "Resort",
  },
  {
    id: 5,
    title: "Mô Phỏng 3D Tiểu Cảnh Nhà Hàng",
    thumbnail: "/public/placeholder.svg?height=400&width=600&query=3d restaurant landscape design",
    duration: "3:05",
    views: "7.3K",
    category: "Nhà Hàng",
  },
  {
    id: 6,
    title: "Render 3D Vườn Zen Nhật Bản",
    thumbnail: "/public/placeholder.svg?height=400&width=600&query=3d japanese zen garden render",
    duration: "2:50",
    views: "10K",
    category: "Sân Vườn",
  },
]

export default function Video3DGallery() {
  const { ref, isVisible } = useScrollAnimation()
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos3D)[0] | null>(null)

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white" ref={ref} id="3d">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 font-medium mb-4">
              <Layers className="w-4 h-4" />
              Phối Cảnh 3D
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Phối Cảnh 3D</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Xem trước thiết kế qua mô hình 3D chân thực trước khi thi công
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos3D.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800 mb-4 border border-gray-700">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-300" />

                  {/* 3D badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-purple-600/90 backdrop-blur-sm text-white text-xs font-bold">
                    3D RENDER
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-black/80 backdrop-blur-sm text-white text-sm font-medium">
                    {video.duration}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-900/30 border border-purple-500/30 text-purple-300">
                    {video.category}
                  </span>
                  <h3 className="font-semibold text-lg text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500">{video.views} lượt xem</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            className="relative max-w-6xl w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Placeholder content - Thay bằng video player thực tế */}
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <Layers className="w-16 h-16 mx-auto mb-4 opacity-50 text-purple-400 animate-pulse" />
                <p className="text-xl font-medium mb-2">{selectedVideo.title}</p>
                <p className="text-sm text-gray-400 mb-4">Video 3D sẽ được tích hợp ở đây</p>
                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    {selectedVideo.category}
                  </span>
                  <span>•</span>
                  <span>{selectedVideo.duration}</span>
                  <span>•</span>
                  <span>{selectedVideo.views} lượt xem</span>
                </div>
              </div>
            </div>

            {/* Loading skeleton effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-shimmer pointer-events-none" />
          </motion.div>
        </motion.div>
      )}
    </>
  )
}