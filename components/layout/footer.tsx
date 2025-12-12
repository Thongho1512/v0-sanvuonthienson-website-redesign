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
              <Image src="/logo.png" alt="Thiên Sơn" width={48} height={48} className="w-12 h-12 brightness-0 invert" />
              <div>
                <div className="font-bold text-xl">Thiên Sơn</div>
                <div className="text-sm text-background/70">Landscape</div>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Đơn vị thiết kế và thi công hồ cá Koi, hòn non bộ, cảnh quan sân vườn chuyên nghiệp tại Huế.
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
                  <a href="tel:0938386679" className="text-background/80 hover:text-primary transition-colors">
                    0938 386 679
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-background/80">Huế, Thừa Thiên Huế</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Giờ Làm Việc</h3>
            <ul className="space-y-2 text-background/80">
              <li>Thứ 2 - Thứ 7: 7:00 - 18:00</li>
              <li>Chủ Nhật: 8:00 - 17:00</li>
              <li className="pt-2 text-primary font-semibold">Tư vấn 24/7 qua Zalo</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-background/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Thiên Sơn Landscape. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
