import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-extrabold text-xl mb-4 text-white">
              Thiên Sơn Landscape
            </h3>
            <p className="text-background/80 leading-relaxed mb-4">
              Công ty TNHH Sân Vườn Thiên Sơn
            </p>
            <p className="text-background/80 leading-relaxed text-sm">
              Đơn vị thiết kế và thi công hồ cá Koi, hòn non bộ, cảnh quan sân
              vườn chuyên nghiệp.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-extrabold text-lg mb-4 text-white">Dịch Vụ</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/thi-cong-ho-ca-koi"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Thi Công Hồ Cá Koi
                </Link>
              </li>
              <li>
                <Link
                  href="/thi-cong-hon-non-bo"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Thi Công Hòn Non Bộ
                </Link>
              </li>
              <li>
                <Link
                  href="/thu-vien-cong-trinh"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Thư Viện Công Trình
                </Link>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-extrabold text-lg mb-4 text-white">Liên Hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-background/70 text-sm mb-1">Hotline</p>
                  <a
                    href="tel:0938386679"
                    className="text-background/90 hover:text-primary transition-colors font-semibold"
                  >
                    0938 38 66 79
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-background/70 text-sm mb-1">Trụ Sở</p>
                  <p className="text-background/90 text-sm leading-relaxed">
                    178/19/33 Trương Thị Hoa, P.Tân Thới Hiệp, Q12, TP.HCM
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Branches & Social */}
          <div>
            <h3 className="font-extrabold text-lg mb-4 text-white">Cơ Sở</h3>
            <ul className="space-y-4 text-background/80 text-sm mb-8">
              <li>
                <p className="font-semibold text-background/90 mb-1">Cơ Sở 1</p>
                <p className="leading-relaxed">
                  315 Hùng Vương, TT Ngãi Giao, Châu Đức – Bà Rịa – Vũng Tàu
                </p>
              </li>
              <li>
                <p className="font-semibold text-background/90 mb-1">Cơ Sở 2</p>
                <p className="leading-relaxed">Phonghenh, Campuchia</p>
              </li>
            </ul>

            {/* Social Media */}
            <h3 className="font-extrabold text-lg mb-4 text-white">
              Theo Dõi Chúng Tôi
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/SanVuonThienSon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary hover:text-foreground flex items-center justify-center transition-all"
                title="Facebook"
              >
                <span className="text-xl">f</span>
              </a>

              <a
                href="https://www.youtube.com/@sanvuonthienson"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary hover:text-foreground flex items-center justify-center transition-all"
                title="YouTube"
              >
                <span className="text-lg">▶</span>
              </a>

              
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
            <p>© 2025 Thiên Sơn Landscape. Bảo lưu mọi quyền.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link
                href="/chinh-sach-bao-mat"
                className="hover:text-primary transition-colors"
              >
                Chính Sách Bảo Mật
              </Link>
              <Link
                href="/dieu-khoan-dich-vu"
                className="hover:text-primary transition-colors"
              >
                Điều Khoản Dịch Vụ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}