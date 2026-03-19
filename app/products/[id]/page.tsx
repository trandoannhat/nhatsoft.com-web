import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Server,
  ShieldCheck,
  Zap,
  PhoneCall,
  ChevronRight,
  Smartphone,
  Box,
} from "lucide-react";

// Import data
import { PRODUCTS } from "../../../data/products";

const TechIconMap: Record<string, any> = {
  Server,
  Code2,
  Database,
  Layout,
  Smartphone,
};

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white text-slate-900 font-sans pb-24 w-full overflow-hidden selection:bg-indigo-100 selection:text-indigo-700">
      {/* ========================================================= */}
      {/* BREADCRUMB */}
      {/* ========================================================= */}
      <div className="border-b border-slate-200 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Link
            href="/"
            className="hover:text-indigo-600 transition-colors flex-shrink-0"
          >
            Hệ sinh thái
          </Link>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <Link
            href="/#products"
            className="hover:text-indigo-600 transition-colors flex-shrink-0"
          >
            Sản phẩm
          </Link>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <span className="text-indigo-600 truncate">{product.title}</span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* NỘI DUNG CHÍNH */}
      {/* ========================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-in">
              {product.badge && (
                <span
                  className={`px-3 py-1 text-[10px] font-black rounded-full uppercase tracking-widest ${product.badgeColor} shadow-sm`}
                >
                  {product.badge}
                </span>
              )}
              <span className="text-xs text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-widest border border-indigo-100">
                Version {product.version}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter">
              {product.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed font-medium">
              {product.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-xl hover:shadow-indigo-200 active:scale-95 w-full sm:w-auto group">
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Trải nghiệm Demo
              </button>
            </div>
          </div>

          {/* MOCKUP HÌNH ẢNH (Chỉnh lại sang trọng hơn) */}
          <div className="order-1 lg:order-2 relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-slate-200 aspect-[4/3] sm:aspect-video bg-slate-950 flex items-center justify-center w-full group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-600/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-20" />

            <div className="text-center p-6 relative z-10">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Box className="w-10 h-10 text-indigo-300" />
              </div>
              <p className="text-white font-bold tracking-wide">
                Giao diện hệ thống
              </p>
              <p className="text-slate-400 text-sm mt-2">
                (Cập nhật ảnh chụp màn hình tại đây)
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* THÔNG TIN KỸ THUẬT & BẢNG GIÁ */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* CỘT TRÁI: CHI TIẾT TÍNH NĂNG */}
          <div className="lg:col-span-2 space-y-16">
            {/* Tech Stack */}
            <section>
              <h2 className="text-3xl font-heading font-black text-slate-900 mb-8 flex items-center gap-3 tracking-tight">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-indigo-600" />
                </div>
                Kiến trúc & Nền tảng
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {product.techStack.map((tech, idx) => {
                  const TechIcon = TechIconMap[tech.iconName] || Code2;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center gap-4 hover:border-indigo-200 hover:shadow-lg hover:-translate-y-1 transition-all"
                    >
                      <TechIcon
                        className={`w-8 h-8 ${tech.color || "text-slate-700"}`}
                      />
                      <span className="font-bold text-slate-900 text-sm">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Features List */}
            <section>
              <h2 className="text-3xl font-heading font-black text-slate-900 mb-8 flex items-center gap-3 tracking-tight">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                Module Tính năng
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:bg-white hover:border-indigo-100 hover:shadow-md transition-all group"
                  >
                    <div className="mt-0.5 bg-indigo-100 rounded-full p-1 group-hover:bg-indigo-600 transition-colors shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 group-hover:text-white" />
                    </div>
                    <span className="text-slate-700 font-medium leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CỘT PHẢI: BÁO GIÁ & LIÊN HỆ (SaaS Style) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-[2rem] border border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="p-8 space-y-8">
                {/* Price Header */}
                <div className="border-b border-slate-100 pb-8 text-center">
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                    Chi phí triển khai
                  </span>
                  <span className="block text-4xl md:text-5xl font-heading font-black text-indigo-600 mb-4 tracking-tighter">
                    {product.price}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Cập nhật: {product.lastUpdate}
                  </span>
                </div>

                {/* Benefits */}
                <ul className="space-y-4 text-sm font-medium text-slate-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500" /> Bàn
                    giao mã nguồn sạch (Clean Code)
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500" /> Hỗ trợ
                    Setup lên Server/Cloud
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500" /> Bảo
                    hành kỹ thuật 12 tháng
                  </li>
                </ul>

                {/* Main Action */}
                <button className="w-full bg-indigo-600 text-white font-black text-lg py-5 rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all active:scale-95 flex items-center justify-center gap-2 group">
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Triển khai ngay
                </button>

                {/* Secondary Action */}
                <div className="pt-4 text-center">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                    Hoặc tư vấn trực tiếp cùng Architect
                  </p>
                  <a
                    href="tel:0937120121"
                    className="flex items-center justify-center gap-3 text-slate-900 font-black hover:text-indigo-600 hover:bg-indigo-50 transition-all bg-white border-2 border-slate-100 px-6 py-4 rounded-2xl w-full"
                  >
                    <PhoneCall className="w-5 h-5 text-indigo-600" />
                    0937 120 121
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
