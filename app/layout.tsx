import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header"; // Đưa Header vào Layout luôn

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Cập nhật chuẩn SEO cho NhatSoft
export const metadata: Metadata = {
  title: "NhatSoft - Giải pháp phần mềm & Mã nguồn chất lượng",
  description:
    "Cung cấp giải pháp phần mềm toàn diện, ứng dụng Web/SaaS, thiết kế Mobile App và mã nguồn chất lượng cao.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      {" "}
      {/* Sửa thành vi */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Header sẽ hiển thị ở mọi trang */}
        <Header />

        {/* Vùng chứa nội dung các trang, tự động đẩy Footer xuống đáy */}
        <main className="flex-grow flex flex-col">{children}</main>

        {/* Footer luôn ở cuối */}
        <Footer />
      </body>
    </html>
  );
}
