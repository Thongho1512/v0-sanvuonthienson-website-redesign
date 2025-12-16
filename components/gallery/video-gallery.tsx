"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Video, X, Pause } from "lucide-react"

interface VideoType {
  id: number
  videoPath: string
  duration: string
}

const videos: VideoType[] = [
  {
    id: 1,
    videoPath: "/video/1.mp4",
    duration: "1:22",
  },
  {
    id: 2,
    videoPath: "/video/2.mp4",
    duration: "0:34",
  },
  {
    id: 3,
    videoPath: "/video/3.mp4",
    duration: "4:32",
  },
  {
    id: 4,
    videoPath: "/video/4.mp4",
    duration: "6:20",
  },
  {
    id: 5,
    videoPath: "/video/5.mp4",
    duration: "0:25",
  },
  {
    id: 6,
    videoPath: "/video/6.mp4",
    duration: "3:18",
  },
  {
    id: 7,
    videoPath: "/video/7.mp4",
    duration: "3:24",
  },
  {
    id: 8,
    videoPath: "/video/8.mp4",
    duration: "5:05",
  },
]

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<VideoType | null>(null)
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
      <section 
        className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden" 
        id="videos"
      >
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/15 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 font-medium mb-4">
              <Video className="w-4 h-4" />
              Video Thi Công
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Thi Công & Thực Tế</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Xem quy trình thi công thực tế các dự án đã hoàn thành
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="group cursor-pointer opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800 mb-4 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Video Thumbnail */}
                  <video
                    src={video.videoPath}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-black/80 backdrop-blur-sm text-white text-sm font-medium">
                    {video.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12 opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
            <p className="text-gray-600 mb-4">
              Theo dõi kênh YouTube để xem thêm nhiều video thi công mới nhất
            </p>
            <a
              href="https://www.youtube.com/@sanvuonthienson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Đăng Ký Kênh YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal với Video Player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
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
          <div
            className="relative max-w-6xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl animate-[scaleIn_0.3s_ease-out_0.1s_both]"
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

            {/* Custom play/pause overlay (optional) */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                onClick={togglePlayPause}
              >
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                  <Play className="w-10 h-10 text-gray-800 ml-1" fill="currentColor" />
                </div>
              </div>
            )}
          </div>

          {/* Video description */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 max-w-4xl w-full px-4 animate-[fadeInUp_0.3s_ease-out_0.2s_both]">
            <div className="bg-gray-900/80 backdrop-blur-md rounded-xl p-4 border border-gray-700">
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <span>⏱️ {selectedVideo.duration}</span>
                <span>🎬 Video {selectedVideo.id}</span>
              </div>
              <p className="text-white text-sm mt-3">
                💡 Mọi thông tin chi tiết vui lòng liên hệ <strong className="text-blue-400">0938 386 679</strong>
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  )
}