import React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand & Headquarters */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                <Zap className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Nhat<span className="text-indigo-600">Soft</span>
              </span>
            </Link>
            <p className="text-[13.5px] text-slate-600 leading-relaxed max-w-sm">
              NhatSoft Technologies - Nền tảng phần mềm quản trị doanh nghiệp và
              hệ sinh thái SaaS chuyên biệt, hướng tới tối ưu hóa vận hành và
              bảo mật dữ liệu.
            </p>
            <div className="space-y-2 pt-2 text-[13px] text-slate-700 font-sans">
              <div className="flex items-start gap-2">
                <span className="font-mono text-slate-400 text-xs uppercase w-20 shrink-0">
                  VĂN PHÒNG:
                </span>
                {/* Thay bằng địa chỉ thật của công ty */}
                <span>190, Phạm Văn Đồng, P.Hạnh Thông, TP.HCM</span>
              </div>
              <div className="flex items-center gap-2 pt-2 font-mono text-xs text-slate-500">
                <span className="text-indigo-600 font-semibold">
                  ZALO: 0937120121
                </span>
                <span>•</span>
                <span>EMAIL: doannhatit@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Solutions links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              GIẢI PHÁP
            </div>
            <ul className="space-y-2 text-[13.5px] text-slate-600">
              <li>
                <Link
                  href="/#services-section"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Phần mềm Doanh nghiệp
                </Link>
              </li>
              <li>
                <Link
                  href="/#services-section"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Giải pháp Hành chính công
                </Link>
              </li>
              <li>
                <Link
                  href="/#services-section"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Thiết kế Hệ thống theo yêu cầu
                </Link>
              </li>
              <li>
                <Link
                  href="/#industries-section"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Tích hợp API & Microservices
                </Link>
              </li>
            </ul>
          </div>

          {/* Products links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              HỆ SINH THÁI
            </div>
            <ul className="space-y-2 text-[13.5px] text-slate-600">
              <li>
                <Link
                  href="/#saas-core-section"
                  className="hover:text-indigo-600 transition-colors"
                >
                  NhatSoft Core Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/products/budget-management"
                  className="hover:text-indigo-600 transition-colors flex items-center gap-2"
                >
                  NhatSoft Budget{" "}
                  <span className="px-1.5 py-0.5 bg-rose-100 text-rose-600 text-[10px] font-bold rounded-sm uppercase">
                    Mới
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#saas-core-section"
                  className="hover:text-indigo-600 transition-colors"
                >
                  NhatSoft Inventory
                </Link>
              </li>
              <li>
                <Link
                  href="/#saas-core-section"
                  className="hover:text-indigo-600 transition-colors"
                >
                  NhatSoft CRM / Spa
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology & Company */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              NỀN TẢNG & CÔNG NGHỆ
            </div>
            <ul className="space-y-2 text-[13.5px] text-slate-600">
              <li>
                <Link
                  href="/#security-section"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Kiến trúc Multi-tenant
                </Link>
              </li>
              <li>
                <Link
                  href="/#security-section"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Phân quyền lõi RBAC
                </Link>
              </li>
              <li>
                <Link
                  href="/#security-section"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Bảo mật & Mã hóa dữ liệu
                </Link>
              </li>
              <li>
                <Link
                  href="/#security-section"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Cam kết Uptime 99.9%
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              CÔNG TY
            </div>
            <ul className="space-y-2 text-[13.5px] text-slate-600">
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Về NhatSoft
                </Link>
              </li>
              <li>
                <Link
                  href="/#case-studies-section"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Dự án tiêu biểu
                </Link>
              </li>
              <li>
                <Link
                  href="https://nhatdev.top"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Tech Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Điều khoản & Bảo mật
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} NhatSoft Technologies. Đã đăng ký bản
            quyền.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Hệ thống hoạt động ổn định
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span>Phiên bản v2.0.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
