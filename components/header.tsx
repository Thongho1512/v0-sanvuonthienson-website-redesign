"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Trang Chủ", href: "#home" },
    { label: "Giới Thiệu", href: "#about" },
    { label: "Dịch Vụ", href: "#services" },
    { label: "Dự Án", href: "#gallery" },
    { label: "Liên Hệ", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" title="Thiên Sơn Landscape">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">TS</span>
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:inline">Thiên Sơn</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-accent transition-colors">
            Báo Giá Ngay
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Mở menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-border md:hidden">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-accent transition-colors">
                Báo Giá Ngay
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
