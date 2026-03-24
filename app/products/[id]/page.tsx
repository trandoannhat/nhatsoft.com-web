import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next"; // BẮT BUỘC IMPORT METADATA
import Image from "next/image";
import {
  CheckCircle2,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Server,
  ShieldCheck,
  Zap,
  ChevronRight,
  Smartphone,
  Box,
  Code,
  PhoneCall,
} from "lucide-react";

import { PRODUCTS } from "../../../data/products";
import ProductActionCard from "@/components/ProductActionCard";
import ProductVisualShowcase from "@/components/ProductVisualShowcase";

const TechIconMap: Record<string, any> = {
  Server,
  Code2,
  Database,
  Layout,
  Smartphone,
  ShieldCheck,
  Zap,
  Code,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.id === resolvedParams.id);

  if (!product) {
    return {
      title: "Sản phẩm không tồn tại",
    };
  }

  return {
    title: product.title,
    description: product.desc,
    openGraph: {
      title: product.title,
      description: product.desc,
      type: "article",
    },
  };
}

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

  // 🌟 FIX LỖI TYPE: Sử dụng biến visualShowcases thay vì biến cũ featureImages
  const heroImage =
    product.visualShowcases && product.visualShowcases.length >= 3
      ? product.visualShowcases[2].imagePath // Ảnh Ghi đè xịn xò
      : product.visualShowcases && product.visualShowcases.length > 0
        ? product.visualShowcases[0].imagePath // Ảnh fallback
        : null; // Không có ảnh

  return (
    <div className="bg-white text-slate-900 font-sans pb-24 w-full overflow-hidden selection:bg-indigo-100 selection:text-indigo-700">
      {/* BREADCRUMB */}
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
              {product.demoUrl ? (
                <a
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-xl hover:shadow-indigo-200 active:scale-95 w-full sm:w-auto group"
                >
                  <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Trải nghiệm Demo
                </a>
              ) : (
                <a
                  href="tel:0937120121" // 🌟 FIX LỖI: Đã điền đúng số Zalo của NhatDev
                  className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-xl hover:shadow-indigo-200 active:scale-95 w-full sm:w-auto group"
                >
                  <PhoneCall className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Liên hệ Zalo
                </a>
              )}
            </div>
          </div>

          {/* MOCKUP HÌNH ẢNH HERO */}
          <div className="order-1 lg:order-2 relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-slate-200 aspect-[4/3] sm:aspect-video bg-white flex items-center justify-center w-full group">
            {heroImage ? (
              <Image
                src={heroImage}
                alt={`${product.title} - Giao diện chính`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-slate-950 bg-gradient-to-br from-indigo-500/20 to-blue-600/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-20" />
                <div className="text-center p-6 relative z-10">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Box className="w-10 h-10 text-indigo-300" />
                  </div>
                  <p className="text-white font-bold tracking-wide">
                    Giao diện hệ thống
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* SHOWCASE ẢNH XEN KẼ */}
        <div className="mb-24">
          <ProductVisualShowcase product={product} />
        </div>

        {/* THÔNG TIN KỸ THUẬT & BẢNG GIÁ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* CỘT TRÁI: CHI TIẾT TÍNH NĂNG */}
          <div className="lg:col-span-2 space-y-16">
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

          {/* CỘT PHẢI: GỌI COMPONENT ACTION CARD */}
          <div className="lg:col-span-1">
            <ProductActionCard
              productName={product.title}
              price={product.price}
              lastUpdate={product.lastUpdate}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
