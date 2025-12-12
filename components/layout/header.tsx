"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
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

  const navItems = [
    { label: "Trang Chủ", href: "/" },
    { label: "Thi Công Hồ Cá Koi", href: "/thi-cong-ho-ca-koi" },
    { label: "Thi Công Hòn Non Bộ", href: "/thi-cong-hon-non-bo" },
    { label: "Thư Viện Công Trình", href: "/thu-vien-cong-trinh" },
    { label: "Liên Hệ", href: "/lien-he" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" title="Thiên Sơn Landscape">
          <Image
            src="/logo.png"
            alt="Thiên Sơn Landscape"
            width={50}
            height={50}
            className="w-12 h-12 object-contain"
          />
          <div className="hidden sm:block">
            <div className="font-bold text-xl text-foreground">Thiên Sơn</div>
            <div className="text-xs text-muted-foreground">Landscape</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary font-semibold" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0938386679"
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-accent transition-all transform hover:scale-105"
          >
            <Phone size={18} />
            <span>0938 386 679</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-border lg:hidden shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block text-base font-medium transition-colors py-2 ${
                    pathname === item.href ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:0938386679"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-accent transition-colors"
              >
                <Phone size={18} />
                <span>Gọi Ngay: 0938 386 679</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
