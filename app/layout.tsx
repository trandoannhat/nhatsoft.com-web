// Cập nhật chuẩn SEO cho NhatSoft
import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Cấu hình font Be Vietnam Pro chuẩn KiraApp
const beVietnam = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam",
  display: "swap",
});

// Thiết lập Viewport riêng (Chuẩn Next.js 14+)
export const viewport: Viewport = {
  themeColor: "#4f46e5", // Màu Indigo-600 đồng bộ với giao diện
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Cấu hình chuẩn SEO & Open Graph cho NhatSoft
export const metadata: Metadata = {
  metadataBase: new URL("https://nhatsoft.com"),
  title: {
    default: "NhatSoft - Giải pháp phần mềm & Kiến trúc Enterprise",
    template: "%s | NhatSoft", // Các trang con sẽ tự nối đuôi. VD: "Sản phẩm A | NhatSoft"
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

  // Open Graph (Tối ưu hiển thị khi share qua Zalo, Facebook)
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
        url: "/opengraph-image.png", // Cần chuẩn bị ảnh bìa này
        width: 1200,
        height: 630,
        alt: "NhatSoft Ecosystem Thumbnail",
      },
    ],
  },

  // Twitter Card (Dành cho share trên X/Twitter, LinkedIn)
  twitter: {
    card: "summary_large_image",
    title: "NhatSoft - Giải pháp phần mềm Enterprise",
    description: "Hệ sinh thái phần mềm đóng gói chuẩn Enterprise.",
    images: ["/opengraph-image.png"],
  },

  // Hướng dẫn Bot của Google
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
    <html lang="vi" className={`${beVietnam.variable}`}>
      <body className="font-sans antialiased text-slate-900 selection:bg-indigo-100 selection:text-indigo-700 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
