import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://sanvuonthienson.com"),
  title: "Thiên Sơn Landscape - Thiết Kế Hồ Cá Koi, Hòn Non Bộ Chuyên Nghiệp",
  description:
    "Thiên Sơn Landscape - Đơn vị thiết kế và thi công hồ cá Koi, hòn non bộ, tiểu cảnh sân vườn chuyên nghiệp tại Huế. Hơn 15 năm kinh nghiệm, 200+ công trình hoàn thành. Tư vấn miễn phí, phong thủy hợp lý.",
  keywords: [
    "thiết kế hồ cá koi",
    "thi công hồ cá koi",
    "hòn non bộ",
    "hòn non bộ Huế",
    "tiểu cảnh sân vườn",
    "cảnh quan sân vườn",
    "thiết kế cảnh quan",
    "landscape design",
    "sân vườn đẹp",
    "phong thủy hòn non bộ",
    "cafe cá koi",
  ],
  authors: [{ name: "Thiên Sơn Landscape" }],
  creator: "Thiên Sơn Landscape",
  publisher: "Thiên Sơn Landscape",
  formatDetection: { telephone: true },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://sanvuonthienson.com",
    title: "Thiên Sơn Landscape - Thiết Kế Hồ Cá Koi & Hòn Non Bộ",
    description:
      "Thiết kế và thi công hồ cá Koi, hòn non bộ, tiểu cảnh sân vườn chuyên nghiệp. Hơn 15 năm kinh nghiệm.",
    siteName: "Thiên Sơn Landscape",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiên Sơn Landscape - Thiết Kế Hồ Cá Koi",
    description: "Thiết kế hồ cá Koi, hòn non bộ, sân vườn chuyên nghiệp tại Huế",
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
  alternates: {
    canonical: "https://sanvuonthienson.com",
    languages: {
      vi: "https://sanvuonthienson.com",
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#3d7d4a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />

        {/* Structured Data - LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Thiên Sơn Landscape",
              image: "https://sanvuonthienson.com/logo.png",
              description: "Công ty thiết kế và thi công hồ cá Koi, hòn non bộ, tiểu cảnh sân vườn chuyên nghiệp",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Huế",
                addressLocality: "Huế",
                addressRegion: "Thừa Thiên Huế",
                addressCountry: "VN",
              },
              telephone: "+84938386679",
              url: "https://sanvuonthienson.com",
              areaServed: {
                "@type": "Country",
                name: "VN",
              },
              priceRange: "$$-$$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "200",
              },
              sameAs: ["https://zalo.me/0938386679"],
            }),
          }}
        />
      </body>
    </html>
  )
}
