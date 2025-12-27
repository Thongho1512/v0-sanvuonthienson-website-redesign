import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"
import KoiHero from "@/components/services/koi-hero"
import KoiArticleSection from "@/components/services/koi-article-section"
import Reviews from "@/components/sections/reviews"

export const metadata: Metadata = {
  title: "Thi Công Hồ Cá Koi Đẹp, Chuyên Nghiệp | Thiết Kế Hồ Koi Chuẩn | Thiên Sơn",
  description:
    "⭐ Thi công hồ cá koi đẹp, chuyên nghiệp tại TP.HCM ✓ Thiết kế hồ cá koi đẹp ✓ Thi công hồ cá koi ✓ Hồ cá koi mini ✓ Bảo hành 10 năm ✓ Tư vấn miễn phí 24/7. Hotline: 0938 386 679",
  keywords: [
    // Từ khóa chính
    "thi công hồ cá koi",
    "thiết kế hồ cá koi đẹp",
    "thiết kế hồ koi",
    "làm hồ cá koi",
    
    // Từ khóa phụ - Volume cao
    "hồ cá koi",
    "xây hồ cá koi",
    "sân vườn hồ cá koi",
    "trang trí hồ cá koi",
    "hòn non bộ hồ cá koi",
    "lắp đặt hồ cá koi",
    
    // Từ khóa Long-tail
    "thi công hồ cá koi đẹp",
    "thiết kế thi công hồ cá koi",
    "thiết kế hồ cá koi sân vườn",
    "làm hồ cá koi đẹp",
    "thiết kế hồ cá koi ngoài trời",
    "thiết kế hồ cá koi mini",
    "hồ cá koi phong thủy",
    
    // Từ khóa địa phương
    "thi công hồ cá koi TP.HCM",
    "thiết kế hồ cá koi Sài Gòn",
    "làm hồ cá koi miền Nam",
    "thi công hồ koi Bình Dương",
    "hồ cá koi Đồng Nai",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://thiensonkoi.com/thi-cong-ho-ca-koi",
    title: "Thi Công Hồ Cá Koi Đẹp Chuyên Nghiệp - Bảo Hành 10 Năm",
    description:
      "Thiết kế thi công hồ cá koi đẹp, chuyên nghiệp với 15+ năm kinh nghiệm. Bảo hành 10 năm, tư vấn miễn phí 24/7",
    siteName: "Thiên Sơn Landscape",
    images: [
      {
        url: "/luxury-koi-pond-landscape-modern-design.jpg",
        width: 1200,
        height: 630,
        alt: "Thi công hồ cá koi đẹp"
      }
    ]
  },
  alternates: {
    canonical: "https://thiensonkoi.com/thi-cong-ho-ca-koi"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function KoiPage() {
  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Thi Công Hồ Cá Koi",
            "description": "Dịch vụ thiết kế và thi công hồ cá koi chuyên nghiệp, đẹp, hợp phong thủy",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Công ty TNHH Sân Vườn Thiên Sơn",
              "image": "https://thiensonkoi.com/logo.png",
              "telephone": "+84938386679",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "178/19/33 Trương Thị Hoa, P.Tân Thới Hiệp, Q12",
                "addressLocality": "TP. Hồ Chí Minh",
                "addressCountry": "VN"
              }
            },
            "areaServed": [
              "TP. Hồ Chí Minh",
              "Bình Dương", 
              "Đồng Nai",
              "Bà Rịa - Vũng Tàu"
            ],
            "serviceType": "Thi công hồ cá koi",
            "category": "Landscaping",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Dịch vụ hồ cá koi",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Thiết kế hồ cá koi đẹp",
                    "description": "Thiết kế hồ cá koi đẹp, hợp phong thủy"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Thi công hồ cá koi",
                    "description": "Thi công hồ cá koi chuyên nghiệp, bảo hành 10 năm"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hồ cá koi mini",
                    "description": "Thiết kế và thi công hồ cá koi mini cho sân vườn nhỏ"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "200"
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Chi phí thi công hồ cá koi bao nhiêu tiền?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Chi phí làm hồ cá koi phụ thuộc vào kích thước, vật liệu, hệ thống lọc. Một hồ cá koi mini khoảng 3-5m² có giá từ 15-30 triệu. Hồ lớn từ 50 triệu trở lên. Liên hệ Thiên Sơn để được tư vấn báo giá miễn phí chi tiết."
                }
              },
              {
                "@type": "Question",
                "name": "Thời gian thi công hồ cá koi mất bao lâu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tùy quy mô: hồ cá koi mini mất 3-7 ngày, hồ trung bình 10-15 ngày, hồ lớn kết hợp hòn non bộ có thể 20-30 ngày. Thiên Sơn cam kết hoàn thành đúng tiến độ."
                }
              },
              {
                "@type": "Question",
                "name": "Hồ cá koi có cần hệ thống lọc nước không?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Có. Hệ thống lọc nước là bắt buộc để duy trì chất lượng nước, giúp cá khỏe mạnh. Lắp đặt hồ cá koi chuyên nghiệp cần có bơm lọc, lọc vật lý, lọc sinh học và UV diệt khuẩn."
                }
              },
              {
                "@type": "Question",
                "name": "Nên làm hồ cá koi ở vị trí nào trong nhà?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Theo phong thủy, nên xây hồ cá koi ở phía Đông hoặc Đông Nam. Sân vườn hồ cá koi ngoài trời là lý tưởng nhất. Tránh vị trí phía Tây gắt nắng chiều."
                }
              },
              {
                "@type": "Question",
                "name": "Thiên Sơn có bảo hành hồ cá koi không?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Có. Thiên Sơn bảo hành 10 năm cho kết cấu hồ và bảo trì miễn phí 6 tháng đầu. Cam kết sửa chữa, thay thế miễn phí nếu có lỗi kỹ thuật."
                }
              }
            ]
          })
        }}
      />
      
      <main className="w-full overflow-x-hidden">
        <Header />
        <KoiHero />
        <KoiArticleSection />
        <Reviews />
        <Footer />
        <FloatingContact />
      </main>
    </>
  )
}