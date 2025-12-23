import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
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
        
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KK9Z5Z78');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${geist.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KK9Z5Z78"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
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