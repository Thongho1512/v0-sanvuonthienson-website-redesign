"use client"

import { useState, useRef, useEffect } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"
import GalleryHero from "@/components/gallery/gallery-hero"
import ImageGallery from "@/components/gallery/image-gallery"
import VideoGallery from "@/components/gallery/video-gallery"
import Video3DGallery from "@/components/gallery/video-3d-gallery"
import GalleryNavigation from "@/components/gallery/gallery-navigation"

export default function GalleryPage() {
  const [activeSection, setActiveSection] = useState("images")
  const imagesRef = useRef<HTMLDivElement>(null)
  const videosRef = useRef<HTMLDivElement>(null)
  const videos3DRef = useRef<HTMLDivElement>(null)

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    
    let targetElement: HTMLDivElement | null = null
    
    switch (section) {
      case "images":
        targetElement = imagesRef.current
        break
      case "videos":
        targetElement = videosRef.current
        break
      case "3d":
        targetElement = videos3DRef.current
        break
    }

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  // Auto-update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      const videos3DElement = videos3DRef.current
      const videosElement = videosRef.current
      const imagesElement = imagesRef.current

      if (videos3DElement && scrollPosition >= videos3DElement.offsetTop) {
        setActiveSection("3d")
      } else if (videosElement && scrollPosition >= videosElement.offsetTop) {
        setActiveSection("videos")
      } else if (imagesElement && scrollPosition >= imagesElement.offsetTop) {
        setActiveSection("images")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <GalleryHero />
      
      <div ref={imagesRef}>
        <ImageGallery />
      </div>
      
      <div ref={videosRef}>
        <VideoGallery />
      </div>
      
      <div ref={videos3DRef}>
        <Video3DGallery />
      </div>
      
      <Footer />
      <FloatingContact />
      
      <GalleryNavigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
    </main>
  )
}