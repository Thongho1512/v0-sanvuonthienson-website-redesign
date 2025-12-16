"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Play, Layers, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface Video3DType {
  id: number
  videoPath: string
  duration: string
}

const videos3D: Video3DType[] = [
  {
    id: 1,
    videoPath: "/videos3d/1.mp4",
    duration: "2:45",
  },
  {
    id: 2,
    videoPath: "/videos3d/2.mp4",
    duration: "3:20",
  },
  {
    id: 3,
    videoPath: "/videos3d/3.mp4",
    duration: "2:15",
  },
  {
    id: 4,
    videoPath: "/videos3d/4.mp4",
    duration: "4:10",
  },
  {
    id: 5,
    videoPath: "/videos3d/5.mp4",
    duration: "3:05",
  },
  {
    id: 6,
    videoPath: "/videos3d/6.mp4",
    duration: "2:50",
  },
  {
    id: 7,
    videoPath: "/videos3d/7.mp4",
    duration: "3:15",
  },
  {
    id: 8,
    videoPath: "/videos3d/8.mp4",
    duration: "2:30",
  },
  {
    id: 9,
    videoPath: "/videos3d/9.mp4",
    duration: "3:40",
  },
  {
    id: 10,
    videoPath: "/videos3d/10.mp4",
    duration: "4:25",
  },
  {
    id: 11,
    videoPath: "/videos3d/11.mp4",
    duration: "3:00",
  },
  {
    id: 12,
    videoPath: "/videos3d/12.mp4",
    duration: "2:55",
  },
]

export default function Video3DGallery() {
  const { ref, isVisible } = useScrollAnimation()
  const [selectedVideo, setSelectedVideo] = useState<Video3DType | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }, [selectedVideo])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setSelectedVideo(null)
    setIsPlaying(false)
  }

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
              <span className="text-white">Video</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Phối Cảnh 3D</span>
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
                  {/* Video Thumbnail */}
                  <video
                    src={video.videoPath}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-300" />

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
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            onClick={closeModal}
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
            className="relative max-w-6xl w-full aspect-video rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={selectedVideo.videoPath}
              className="w-full h-full object-contain bg-black"
              controls
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Custom play/pause overlay */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                onClick={togglePlayPause}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            )}
          </motion.div>

          {/* Video description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 max-w-4xl w-full px-4"
          >
            <div className="bg-gray-900/80 backdrop-blur-md rounded-xl p-4 border border-purple-500/30">
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <span>⏱️ {selectedVideo.duration}</span>
                <span>•</span>
                <span>🎬 Video {selectedVideo.id}</span>
              </div>
              <p className="text-white text-sm mt-3">
                💡 Mọi thông tin chi tiết vui lòng liên hệ <strong className="text-purple-400">0938 386 679</strong>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}