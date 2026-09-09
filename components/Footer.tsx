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
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-sm">
                <Zap className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Nhat<span className="text-brand-600">Soft</span>
              </span>
            </Link>
            <p className="text-[13.5px] text-slate-600 leading-relaxed max-w-sm">
              NhatSoft Technologies Co., Ltd. - Tổ chức kỹ thuật chuyên sâu về
              kiến trúc phần mềm, phát triển nền tảng B2B SaaS và tích hợp hệ
              thống quy mô lớn.
            </p>
            <div className="space-y-2 pt-2 text-[13px] text-slate-700 font-sans">
              <div className="flex items-start gap-2">
                <span className="font-mono text-slate-400 text-xs uppercase w-20 shrink-0">
                  HÀ NỘI:
                </span>
                <span>Tầng 12, Keangnam Landmark 72, Nam Từ Liêm, Hà Nội</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-slate-400 text-xs uppercase w-20 shrink-0">
                  TP.HCM:
                </span>
                <span>
                  Tầng 8, Bitexco Financial Tower, Quận 1, TP. Hồ Chí Minh
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1 font-mono text-xs text-slate-500">
                <span>TEL: (+84) 0937 120 121</span>
                <span>•</span>
                <span>EMAIL: contact@nhatsoft.com</span>
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
                  className="hover:text-brand-600 transition-colors"
                >
                  Enterprise ERP & SCM
                </Link>
              </li>
              <li>
                <Link
                  href="/#services-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  Nền tảng B2B SaaS
                </Link>
              </li>
              <li>
                <Link
                  href="/#services-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  Máy đo phần mềm theo yêu cầu
                </Link>
              </li>
              <li>
                <Link
                  href="/#services-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  Hệ thống API Integration Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/#industries-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  Kiến trúc Clean DDD
                </Link>
              </li>
            </ul>
          </div>

          {/* Products links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              SẢN PHẨM LÕI
            </div>
            <ul className="space-y-2 text-[13.5px] text-slate-600">
              <li>
                <Link
                  href="/#saas-core-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  NhatSoft SaaS Core Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/products/budget-management"
                  className="hover:text-brand-600 transition-colors"
                >
                  NhatSoft Budget
                </Link>
              </li>
              <li>
                <Link
                  href="/#saas-core-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  NhatSoft Inventory
                </Link>
              </li>
              <li>
                <Link
                  href="/#saas-core-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  NhatSoft Spa & Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#tech-stack-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  SDK & Extensions
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology & Security links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              BẢO MẬT & NIỀM TIN
            </div>
            <ul className="space-y-2 text-[13.5px] text-slate-600">
              <li>
                <Link
                  href="/#security-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  ISO/IEC 27001 Certified
                </Link>
              </li>
              <li>
                <Link
                  href="/#security-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  OWASP Top 10 Mitigation
                </Link>
              </li>
              <li>
                <Link
                  href="/#security-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  GDPR Data Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/#security-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  Cam kết SLA 99.9% Uptime
                </Link>
              </li>
              <li>
                <Link
                  href="/#models-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  Chính sách Bảo mật
                </Link>
              </li>
              <li>
                <Link
                  href="/#models-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  Điều khoản Dịch vụ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              DOANH NGHIỆP
            </div>
            <ul className="space-y-2 text-[13.5px] text-slate-600">
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-600 transition-colors"
                >
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link
                  href="/#case-studies-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  Dự án bàn giao
                </Link>
              </li>
              <li>
                <Link
                  href="/#process-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  Quy trình Agile
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-600 transition-colors"
                >
                  Đội ngũ Kỹ sư
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  Báo giá & Hợp đồng
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq-section"
                  className="hover:text-brand-600 transition-colors"
                >
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-600 transition-colors"
                >
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Công ty Cổ phần Công nghệ NhatSoft. Bản
            quyền đã được bảo hộ.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>•
              Trạng thái hệ thống: 100% Hoạt động
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span>Bản dựng: {new Date().getFullYear()}.04-LTS</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span>Tuân thủ ISO/IEC 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
