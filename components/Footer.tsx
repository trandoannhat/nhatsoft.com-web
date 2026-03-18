import React from "react";
import Link from "next/link";
import {
  Zap,
  Mail,
  MapPin,
  Phone,
  Github,
  Facebook,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Cột 1: Thông tin thương hiệu */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Zap className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                Nhat<span className="text-blue-600">Soft</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed pr-4">
              Cung cấp giải pháp phần mềm toàn diện, mã nguồn chất lượng cao và
              tư vấn kiến trúc hệ thống chuẩn doanh nghiệp.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 -ml-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/doannhatit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://nhatdev.top"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all"
                aria-label="Website"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Cột 2: Giải pháp */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">
              Giải pháp
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors inline-block"
                >
                  Ứng dụng Web / SaaS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors inline-block"
                >
                  Ứng dụng Di động
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors inline-block"
                >
                  Hệ thống API & Microservices
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors inline-block"
                >
                  Thiết kế UI/UX
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Tài nguyên */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">
              Tài nguyên
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="https://nhatdev.top"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors inline-block"
                >
                  Tech Blog (Kinh nghiệm Dev)
                </a>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors inline-block"
                >
                  Mã nguồn mở
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors inline-block"
                >
                  Tài liệu API
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors inline-block"
                >
                  Hướng dẫn triển khai
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 4: Liên hệ */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">
              Liên hệ
            </h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Thành phố Hồ Chí Minh, Việt Nam</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                {/* Đã cập nhật số điện thoại ở đây */}
                <a
                  href="tel:0937120121"
                  className="hover:text-blue-600 font-medium transition-colors"
                >
                  0937 120 121
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:contact@nhatsoft.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  contact@nhatsoft.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} NhatSoft. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-blue-600 transition-colors">
              Chính sách bảo mật
            </Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">
              Điều khoản dịch vụ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
