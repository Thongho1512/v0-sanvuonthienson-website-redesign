"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Home, Briefcase, Mountain, Droplets, BookOpen, Mail } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { label: "Trang Chủ", href: "/", icon: Home },
    { label: "Thi Công Hồ Cá Koi", href: "/thi-cong-ho-ca-koi", icon: Droplets },
    { label: "Thi Công Hòn Non Bộ", href: "/thi-cong-hon-non-bo", icon: Mountain },
    { label: "Thư Viện Công Trình", href: "/thu-vien-cong-trinh", icon: Briefcase },
    { label: "Bài Viết", href: "/bai-viet", icon: BookOpen },
    { label: "Liên Hệ", href: "/lien-he", icon: Mail },
  ]

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <Image
              src="/logo-removebg-preview.png"
              alt="Thiên Sơn Koi"
              width={160}
              height={64}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  pathname === item.href ? "text-emerald-600 font-semibold" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-full transition-all z-50 ${
              isOpen 
                ? "bg-gray-900 text-white hover:bg-gray-800" 
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Overlay with blur */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-md z-40 lg:hidden transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Glassmorphism Floating Sidebar */}
      <div
        className={`fixed top-4 right-4 bottom-4 w-[360px] rounded-3xl z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-[400px] opacity-0"
        }`}
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3) inset'
        }}
      >
        <div className="h-full flex flex-col p-6 pt-20 overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/40 backdrop-blur-sm hover:bg-white/60 flex items-center justify-center transition-all border border-white/50"
            aria-label="Close menu"
          >
            <X size={20} className="text-gray-800" />
          </button>

          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 drop-shadow-sm">Menu</h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-3">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 group backdrop-blur-sm ${
                    pathname === item.href 
                      ? "bg-white/60 text-emerald-600 shadow-sm border border-white/50" 
                      : "text-gray-800 hover:bg-white/40 hover:text-emerald-600 border border-transparent hover:border-white/30"
                  }`}
                  style={{
                    animation: isOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : "none"
                  }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all backdrop-blur-sm ${
                    pathname === item.href
                      ? "bg-emerald-500/20 border border-emerald-300/30"
                      : "bg-white/30 group-hover:bg-emerald-500/20 border border-white/30 group-hover:border-emerald-300/30"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-lg drop-shadow-sm">{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}