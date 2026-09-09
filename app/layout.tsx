// Cập nhật chuẩn SEO cho NhatSoft - Giao diện Enterprise
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Cấu hình font Inter (Font chữ chính)
const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

// Cấu hình font JetBrains Mono (Dùng cho thông số kỹ thuật, code, thẻ tag)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Thiết lập Viewport riêng (Chuẩn Next.js 14+)
export const viewport: Viewport = {
  themeColor: "#2563eb", // Chuyển sang dải màu brand-600 mới
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Cấu hình chuẩn SEO & Open Graph cho NhatSoft (Đã giữ nguyên dữ liệu của bạn)
export const metadata: Metadata = {
  metadataBase: new URL("https://nhatsoft.com"),
  title: {
    default: "NhatSoft - Giải pháp phần mềm & Kiến trúc Enterprise",
    template: "%s | NhatSoft",
  },
  description:
    "Hệ sinh thái phần mềm đóng gói chuẩn Enterprise. Chuyên tư vấn kiến trúc hệ thống, phát triển Web/Mobile App và cung cấp dịch vụ API chất lượng cao.",
  keywords: [
    "công ty phần mềm",
    "giải pháp doanh nghiệp",
    "thiết kế web",
    "hệ thống CRM",
    "API",
    "mã nguồn",
    ".NET 8",
    "Next.js",
    "NhatSoft",
  ],
  authors: [{ name: "NhatDev", url: "https://nhatdev.top" }],
  creator: "NhatSoft Team",
  publisher: "NhatSoft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://nhatsoft.com",
    title: "NhatSoft - Giải pháp phần mềm & Kiến trúc Enterprise",
    description:
      "Hệ sinh thái phần mềm đóng gói chuẩn Enterprise. Tối ưu vận hành và bứt phá doanh thu cho doanh nghiệp của bạn.",
    siteName: "NhatSoft Ecosystem",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "NhatSoft Ecosystem Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NhatSoft - Giải pháp phần mềm Enterprise",
    description: "Hệ sinh thái phần mềm đóng gói chuẩn Enterprise.",
    images: ["/opengraph-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Nhúng bộ icon Material Symbols Outlined từ giao diện mới */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* Cập nhật class body theo chuẩn Enterprise (text-[15px], màu selection) */}
      <body className="bg-white font-sans text-slate-800 text-[15px] leading-relaxed antialiased selection:bg-brand-600 selection:text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
