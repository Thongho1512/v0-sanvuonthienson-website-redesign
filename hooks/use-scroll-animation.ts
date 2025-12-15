"use client"

import { useEffect, useRef, useState, useMemo } from "react"

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Memoize observer options
  const observerOptions = useMemo(() => ({
    threshold,
    rootMargin: '50px', // Trigger animation sớm hơn một chút
  }), [threshold])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Use IntersectionObserver (đã được tối ưu bởi browser)
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Chỉ set state khi thực sự cần
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Unobserve sau khi đã visible để tăng performance
          observer.unobserve(element)
        }
      },
      observerOptions
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [observerOptions, isVisible])

  return { ref, isVisible }
}

// Hook mới cho scroll smooth hơn
export function useOptimizedScroll() {
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    
    // Passive event listener để không block scroll
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return scrollY
}