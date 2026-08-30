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
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                <Zap className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Nhat<span className="text-indigo-600">Soft</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Kiến tạo tương lai số bằng những sản phẩm phần mềm đóng gói chuẩn
              Enterprise. Tối ưu vận hành, bảo mật tuyệt đối.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "#" },
                {
                  icon: <Github className="w-4 h-4" />,
                  href: "https://github.com/doannhatit",
                },
                {
                  icon: <Globe className="w-4 h-4" />,
                  href: "https://nhatdev.top",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-5 text-sm uppercase tracking-wider">
              Sản phẩm chủ lực
            </h3>
            <ul className="space-y-3 text-sm text-slate-500">
              {[
                "Hệ thống Quản trị CRM",
                "Nền tảng Ecommerce",
                "Giải pháp F&B / Spa",
                "API Services Custom",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-5 text-sm uppercase tracking-wider">
              Hỗ trợ khách hàng
            </h3>
            <ul className="space-y-3 text-sm text-slate-500">
              {[
                "Tài liệu hướng dẫn",
                "Chính sách bảo hành",
                "Yêu cầu tính năng",
                "Cộng đồng NhatSoft",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-5 text-sm uppercase tracking-wider">
              Liên hệ
            </h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="leading-tight">TP. Hồ Chí Minh, Việt Nam</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href="tel:0937120121"
                  className="hover:text-indigo-600 font-medium text-slate-700 transition-colors"
                >
                  0937 120 121
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href="mailto:contact@nhatsoft.com"
                  className="hover:text-indigo-600 transition-colors"
                >
                  contact@nhatsoft.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} NhatSoft Ecosystem. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
