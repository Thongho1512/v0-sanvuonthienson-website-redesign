export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">TS</span>
              </div>
              <span className="font-bold text-xl">Thiên Sơn</span>
            </div>
            <p className="text-primary-foreground/70">Thiết kế cảnh quan và dịch vụ vườn cây cao cấp từ 2010.</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Dịch Vụ</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Thiết Kế Vườn
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Cảnh Quan
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Bảo Trì
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Tư Vấn
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Công Ty</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary-foreground transition-colors">
                  Danh Mục Dự Án
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Theo Dõi Chúng Tôi</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                title="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                title="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                🔗
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
            <p>&copy; 2025 Thiên Sơn Landscape. Bảo lưu mọi quyền.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Chính Sách Bảo Mật
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Điều Khoản Dịch Vụ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
