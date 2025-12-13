"use client"

import { useState, useEffect } from "react"
import { Camera, Video, Layers } from "lucide-react"
import { motion } from "framer-motion"

interface GalleryNavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function GalleryNavigation({ activeSection, onSectionChange }: GalleryNavigationProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sections = [
    { id: "images", label: "Hình Ảnh", icon: Camera },
    { id: "videos", label: "Video Thực Tế", icon: Video },
    { id: "3d", label: "Phối Cảnh 3D", icon: Layers },
  ]

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? "bottom-4" : "bottom-6"
      }`}
    >
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-full shadow-2xl border border-gray-200 dark:border-gray-700 p-2">
        <div className="flex items-center gap-1 sm:gap-2">
          {sections.map((section) => {
            const Icon = section.icon
            const isActive = activeSection === section.id
            
            return (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`relative flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <Icon className={`relative z-10 w-5 h-5 ${isActive ? "animate-pulse" : ""}`} />
                
                <span className="relative z-10 text-sm sm:text-base whitespace-nowrap hidden sm:inline">
                  {section.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Mobile labels */}
      <div className="flex sm:hidden justify-center gap-2 mt-2">
        {sections.map((section) => (
          activeSection === section.id && (
            <motion.span
              key={section.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xs font-medium text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full"
            >
              {section.label}
            </motion.span>
          )
        ))}
      </div>
    </motion.nav>
  )
}