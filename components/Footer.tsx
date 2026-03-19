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
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100">
                <Zap className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">
                Nhat<span className="text-indigo-600">Soft</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Kiến tạo tương lai số bằng những sản phẩm phần mềm đóng gói chuẩn
              Enterprise, tối ưu vận hành và bảo mật tuyệt đối.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Facebook className="w-5 h-5" />, href: "#" },
                {
                  icon: <Github className="w-5 h-5" />,
                  href: "https://github.com/doannhatit",
                },
                {
                  icon: <Globe className="w-5 h-5" />,
                  href: "https://nhatdev.top",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-sm transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="font-black text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">
              Sản phẩm chủ lực
            </h3>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              {[
                "Hệ thống Quản trị CRM",
                "Nền tảng Ecommerce",
                "Giải pháp F&B / Spa",
                "API Services Custom",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-indigo-600 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-black text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">
              Hỗ trợ khách hàng
            </h3>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              {[
                "Tài liệu hướng dẫn",
                "Chính sách bảo hành",
                "Yêu cầu tính năng",
                "Cộng đồng NhatSoft",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-indigo-600 transition-colors inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-black text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">
              Văn phòng liên hệ
            </h3>
            <ul className="space-y-5 text-sm font-bold text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="leading-tight text-slate-500">
                  TP. Hồ Chí Minh, Việt Nam
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
                <a
                  href="tel:0937120121"
                  className="hover:text-indigo-600 transition-colors text-lg font-black text-slate-900"
                >
                  0937 120 121
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                <a
                  href="mailto:contact@nhatsoft.com"
                  className="hover:text-indigo-600 transition-colors text-slate-500"
                >
                  contact@nhatsoft.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} NhatSoft Ecosystem. All rights
            reserved.
          </p>
          <div className="flex gap-8 text-xs font-black text-slate-400 uppercase tracking-widest">
            <Link href="#" className="hover:text-indigo-600 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
