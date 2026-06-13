import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

  const baseUrl = "https://nhatsoft.com";
  const ogImageUrl =
    product.visualShowcases && product.visualShowcases.length > 0
      ? `${baseUrl}${product.visualShowcases[0].imagePath}`
      : `${baseUrl}/default-thumbnail.png`;

  return {
    title: product.title,
    description: product.desc,
    openGraph: {
      title: product.title,
      description: product.desc,
      type: "article",
      url: `${baseUrl}/products/${product.id}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
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

  //  Đã xóa đoạn version Cache Bust gây vỡ ảnh
  const heroImage =
    product.visualShowcases && product.visualShowcases.length >= 3
      ? product.visualShowcases[2].imagePath
      : product.visualShowcases && product.visualShowcases.length > 0
        ? product.visualShowcases[0].imagePath
        : null;

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
            {product.id === "saas-core-engine" && (
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold">
                  🚀 Tiết kiệm 2-3 tháng phát triển cho mỗi dự án ERP, CRM, HRM
                  hoặc SaaS Platform
                </div>
              </div>
            )}
            <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed font-medium">
              {product.fullDescription}
            </p>
            {product.id === "saas-core-engine" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm">
                  <div className="text-2xl font-black text-indigo-600">
                    100+
                  </div>
                  <div className="text-xs text-slate-500">Permissions</div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm">
                  <div className="text-2xl font-black text-indigo-600">15+</div>
                  <div className="text-xs text-slate-500">Modules</div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm">
                  <div className="text-2xl font-black text-indigo-600">∞</div>
                  <div className="text-xs text-slate-500">Tenants</div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm">
                  <div className="text-2xl font-black text-indigo-600">DDD</div>
                  <div className="text-xs text-slate-500">Architecture</div>
                </div>
              </div>
            )}
            <div className="flex flex-wrap gap-4">
              {product.demoUrl ? (
                <div className="flex flex-col gap-3 w-full sm:w-auto">
                  <a
                    href={product.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-xl hover:shadow-indigo-200 active:scale-95 w-full group"
                  >
                    <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Trải nghiệm Demo
                  </a>

                  {/*  HIỂN THỊ TÀI KHOẢN DEMO (Chỉ hiện nếu là NhatSoft Spa)  */}
                  {product.id === "nhatsoft-spa" && (
                    <div className="bg-indigo-50/80 border border-indigo-100 rounded-xl p-3 flex items-center justify-center gap-4 text-sm animate-fade-in">
                      <span className="text-slate-600">
                        TK:{" "}
                        <strong className="text-indigo-700 select-all">
                          spa_demo
                        </strong>
                      </span>
                      <span className="w-1 h-1 bg-indigo-200 rounded-full"></span>
                      <span className="text-slate-600">
                        MK:{" "}
                        <strong className="text-indigo-700 select-all">
                          123456
                        </strong>
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  //  Đã cập nhật đúng số điện thoại của sếp
                  href="tel:0907011886"
                  className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-xl hover:shadow-indigo-200 active:scale-95 w-full sm:w-auto group"
                >
                  <PhoneCall className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Liên hệ Zalo
                </a>
              )}
            </div>
            {product.id === "saas-core-engine" && (
              <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                <p className="text-sm text-emerald-700 font-medium leading-relaxed">
                  ✓ Đã tích hợp sẵn Multi-Tenant, Dynamic RBAC, ACL, JWT
                  Authentication, Audit Log, ASP.NET Core Identity, DDD, Clean
                  Architecture, Repository Pattern và Unit Of Work.
                </p>
              </div>
            )}
          </div>

          {/* MOCKUP HÌNH ẢNH HERO */}
          <div className="order-1 lg:order-2 relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-slate-200 aspect-[4/3] sm:aspect-video bg-slate-50 flex items-center justify-center w-full group">
            {heroImage ? (
              <Image
                src={heroImage}
                alt={`${product.title} - Giao diện chính`}
                fill
                //  Đã xóa padding và đổi thành object-cover để ảnh bung full viền
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
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
          {product.id === "saas-core-engine" && (
            <section className="mt-16">
              <h2 className="text-3xl font-heading font-black text-slate-900 mb-8">
                Phù hợp cho
              </h2>

              <div className="flex flex-wrap gap-3">
                {[
                  "ERP",
                  "CRM",
                  "HRM",
                  "Hotel Management",
                  "Workflow",
                  "E-Office",
                  "Asset Management",
                  "School Management",
                  "SaaS Platform",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* THÔNG TIN KỸ THUẬT & BẢNG GIÁ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-16">
            {product.id === "saas-core-engine" && (
              <section className="mb-16">
                <h2 className="text-3xl font-heading font-black text-slate-900 mb-8">
                  Vì sao chọn SaaS Core Engine?
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Tiết kiệm 2-3 tháng xây dựng nền tảng cho mỗi dự án.",
                    "Sẵn sàng cho ERP, CRM, HRM và SaaS Platform.",
                    "RBAC + ACL + Multi-Tenant tích hợp sẵn.",
                    "Dễ dàng mở rộng và thương mại hóa.",
                    "Kiến trúc DDD và Clean Architecture.",
                    "Tập trung phát triển nghiệp vụ thay vì hạ tầng kỹ thuật.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
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
