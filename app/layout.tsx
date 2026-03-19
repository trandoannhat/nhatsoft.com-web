import type { Metadata } from "next";
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

// Cập nhật chuẩn SEO cho NhatSoft
export const metadata: Metadata = {
  title: "NhatSoft - Hệ sinh thái phần mềm & Giải pháp Enterprise",
  description:
    "Cung cấp giải pháp phần mềm toàn diện, ứng dụng Web/SaaS, thiết kế Mobile App và mã nguồn chất lượng cao.",
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
