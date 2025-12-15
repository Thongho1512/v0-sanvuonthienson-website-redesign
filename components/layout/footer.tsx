import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo-removebg-preview.png" alt="Thiên Sơn" width={48} height={48} className="w-12 h-12 brightness-0 invert" />
              <div>
                <div className="font-bold text-xl">Thiên Sơn</div>
                <div className="text-sm text-background/70">Landscape</div>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-4">
              Công ty TNHH Sân Vườn Thiên Sơn
            </p>
            <p className="text-background/80 leading-relaxed text-sm">
              Đơn vị thiết kế và thi công hồ cá Koi, hòn non bộ, cảnh quan sân vườn chuyên nghiệp.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Dịch Vụ</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/thi-cong-ho-ca-koi" className="text-background/80 hover:text-primary transition-colors">
                  Thi Công Hồ Cá Koi
                </Link>
              </li>
              <li>
                <Link href="/thi-cong-hon-non-bo" className="text-background/80 hover:text-primary transition-colors">
                  Thi Công Hòn Non Bộ
                </Link>
              </li>
              <li>
                <Link href="/thu-vien-cong-trinh" className="text-background/80 hover:text-primary transition-colors">
                  Thư Viện Công Trình
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-background/80 hover:text-primary transition-colors">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/70 text-sm mb-1">Hotline</p>
                  <a href="tel:0938386679" className="text-background/90 hover:text-primary transition-colors font-semibold">
                    0938 38 66 79
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/70 text-sm mb-1">Trụ Sở</p>
                  <span className="text-background/90 text-sm">178/19/33 Trương Thị Hoa, P.19, P.Tân Thới Hiệp, Q12, TP.HCM</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="font-bold text-lg mb-4">Cơ Sở</h3>
            <ul className="space-y-3 text-background/80 text-sm">
              <li>
                <p className="font-semibold text-background/90 mb-1">Cơ Sở 1</p>
                <p className="leading-relaxed">315 Hùng Vương, TT Ngãi Giao, Châu Đức – Bà Rịa – Vũng Tàu</p>
              </li>
              <li>
                <p className="font-semibold text-background/90 mb-1">Cơ Sở 2</p>
                <p className="leading-relaxed">Phonghenh, Campuchia</p>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </footer>
  )
}