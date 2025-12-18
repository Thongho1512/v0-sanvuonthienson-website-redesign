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
    "Công ty TNHH Sân Vườn Thiên Sơn - Chuyên thiết kế và thi công hồ cá Koi, hòn non bộ, tiểu cảnh sân vườn chuyên nghiệp. Hơn 15 năm kinh nghiệm, 200+ công trình hoàn thành. Hotline: 0938 38 66 79",
  keywords: [
    "thiết kế hồ cá koi",
    "thi công hồ cá koi",
    "hòn non bộ",
    "tiểu cảnh sân vườn",
    "cảnh quan sân vườn",
    "thiết kế cảnh quan",
    "landscape design",
    "sân vườn đẹp",
    "phong thủy hòn non bộ",
    "cafe cá koi",
    "thiên sơn landscape",
    "sân vườn thiên sơn",
  ],
  authors: [{ name: "Công ty TNHH Sân Vườn Thiên Sơn" }],
  creator: "Công ty TNHH Sân Vườn Thiên Sơn",
  publisher: "Công ty TNHH Sân Vườn Thiên Sơn",
  formatDetection: { telephone: true },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://sanvuonthienson.com",
    title: "Thiên Sơn Landscape - Thiết Kế Hồ Cá Koi & Hòn Non Bộ",
    description:
      "Công ty TNHH Sân Vườn Thiên Sơn - Thiết kế và thi công hồ cá Koi, hòn non bộ, tiểu cảnh sân vườn chuyên nghiệp. Hơn 15 năm kinh nghiệm.",
    siteName: "Thiên Sơn Landscape",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiên Sơn Landscape - Thiết Kế Hồ Cá Koi",
    description: "Thiết kế hồ cá Koi, hòn non bộ, sân vườn chuyên nghiệp",
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
        <meta name="theme-color" content="#059669" />
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
              name: "Công ty TNHH Sân Vườn Thiên Sơn",
              image: "https://sanvuonthienson.com/logo.png",
              description: "Công ty thiết kế và thi công hồ cá Koi, hòn non bộ, tiểu cảnh sân vườn chuyên nghiệp",
              address: {
                "@type": "PostalAddress",
                streetAddress: "178/19/33 Trương Thị Hoa, P.Tân Thới Hiệp, Q12",
                addressLocality: "Thành phố Hồ Chí Minh",
                addressRegion: "TP.HCM",
                addressCountry: "VN",
              },
              telephone: "+84938386679",
              url: "https://sanvuonthienson.com",
              areaServed: [
                {
                  "@type": "Place",
                  name: "Việt Nam",
                },
                {
                  "@type": "Place",
                  name: "TP. Hồ Chí Minh",
                },
                {
                  "@type": "Place",
                  name: "Bà Rịa - Vũng Tàu",
                },
              ],
              priceRange: "$$-$$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "200",
              },
              sameAs: ["https://zalo.me/0938386679"],
              openingHours: "Mo-Su 07:00-21:00",
            }),
          }}
        />
      </body>
    </html>
  )
}