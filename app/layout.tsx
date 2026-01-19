import React from "react"
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'CashHeart - 경조사비 기록 · 관리',
  description: '주고받은 경조사비, 한눈에 깔끔하게 정리하세요. 결혼식, 돌잔치, 장례식, 생일, 졸업식 등 모든 경조사 내역을 사람별로 관리하는 개인용 기록 앱입니다.',
  generator: 'v0.app',
  icons: {
    icon: '/images/cashheart-logo.jpg',
    apple: '/images/cashheart-logo.jpg',
  },
  openGraph: {
    title: 'CashHeart - 경조사비 기록 · 관리',
    description: '주고받은 경조사비, 한눈에 깔끔하게 정리하세요.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#FF6258',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
