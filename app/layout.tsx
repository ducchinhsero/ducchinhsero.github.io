import type React from "react"
import type { Metadata } from "next"
import { Be_Vietnam_Pro } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const portfolioFont = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-portfolio",
})

export const metadata: Metadata = {
  title: "Dang Duc Chinh | Lập trình viên Full Stack",
  description: "Portfolio của Dang Duc Chinh, lập trình viên Full Stack tại Đà Nẵng, Việt Nam, với các dự án phát triển web, tích hợp AI và hệ thống nhúng.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${portfolioFont.variable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
