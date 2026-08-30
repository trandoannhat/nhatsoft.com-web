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
  Users,
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
  Users,
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

  const heroImage =
    product.visualShowcases && product.visualShowcases.length >= 3
      ? product.visualShowcases[2].imagePath
      : product.visualShowcases && product.visualShowcases.length > 0
        ? product.visualShowcases[0].imagePath
        : null;

  return (
    <div className="bg-white text-slate-900 font-sans pb-24 w-full overflow-hidden">
      {/* 1. BREADCRUMB (Tinh giản, thanh lịch) */}
      <div className="border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Link
            href="/"
            className="hover:text-indigo-600 transition-colors flex-shrink-0"
          >
            Hệ sinh thái
          </Link>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-slate-300" />
          <Link
            href="/#products"
            className="hover:text-indigo-600 transition-colors flex-shrink-0"
          >
            Sản phẩm
          </Link>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-slate-300" />
          <span className="text-indigo-600 truncate font-bold">
            {product.title}
          </span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* 2. HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center">
          {/* Cột chữ */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {product.badge && (
                <span
                  className={`px-2.5 py-1 text-[11px] font-bold rounded-md uppercase tracking-wider border ${(
                    product.badgeColor ?? "bg-gray-100 text-gray-700"
                  ).replace("-100", "-50")} border-gray-200`}
                >
                  {product.badge}
                </span>
              )}
              <span className="text-[11px] text-slate-600 font-bold bg-slate-100 px-2.5 py-1 rounded-md uppercase tracking-wider border border-slate-200">
                Version {product.version}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight">
              {product.title}
            </h1>

            {product.id === "saas-core-engine" && (
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-indigo-50/50 border border-indigo-100 text-indigo-700 font-medium text-sm">
                  🚀 Tiết kiệm 2-3 tháng phát triển cho mỗi dự án ERP, CRM, HRM
                  hoặc SaaS Platform.
                </div>
              </div>
            )}

            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Các thông số đặc biệt cho SaaS Core */}
            {product.id === "saas-core-engine" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                {[
                  { value: "100+", label: "Permissions" },
                  { value: "15+", label: "Modules" },
                  { value: "∞", label: "Tenants" },
                  { value: "DDD", label: "Architecture" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm"
                  >
                    <div className="text-xl font-extrabold text-indigo-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Nút hành động chính */}
            <div className="flex flex-wrap gap-4">
              {product.demoUrl ? (
                <div className="flex flex-col gap-3 w-full sm:w-auto">
                  <a
                    href={product.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-slate-800 transition-all shadow-sm active:scale-[0.98] w-full group"
                  >
                    Trải nghiệm Demo
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </a>

                  {/* TK Demo cho Spa */}
                  {product.id === "nhatsoft-spa" && (
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 flex items-center justify-center gap-3 text-xs font-medium">
                      <span className="text-slate-500">
                        TK:{" "}
                        <strong className="text-slate-900 select-all">
                          spa_demo
                        </strong>
                      </span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span className="text-slate-500">
                        MK:{" "}
                        <strong className="text-slate-900 select-all">
                          123456
                        </strong>
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href="tel:0907011886"
                  className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-slate-800 transition-all shadow-sm active:scale-[0.98] w-full sm:w-auto group"
                >
                  <PhoneCall className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  Liên hệ Zalo
                </a>
              )}
            </div>

            {/* Checklist Core Engine */}
            {product.id === "saas-core-engine" && (
              <div className="mt-8 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
                <p className="text-sm text-emerald-700 leading-relaxed font-medium">
                  ✓ Đã tích hợp sẵn Multi-Tenant, Dynamic RBAC, ACL, JWT
                  Authentication, Audit Log, ASP.NET Core Identity, DDD, Clean
                  Architecture.
                </p>
              </div>
            )}
          </div>

          {/* Cột Mockup Ảnh */}
          <div className="order-1 lg:order-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-200 aspect-[4/3] sm:aspect-video bg-slate-50 flex items-center justify-center w-full group">
            {heroImage ? (
              <Image
                src={heroImage}
                alt={`${product.title} - Giao diện chính`}
                fill
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                priority
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 opacity-50" />
                <div className="text-center p-6 relative z-10">
                  <div className="w-16 h-16 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:-translate-y-1 transition-transform duration-500">
                    <Box className="w-8 h-8 text-slate-400" />
                  </div>
                  <p className="text-slate-600 font-medium">
                    Giao diện hệ thống
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* 3. SHOWCASE ẢNH XEN KẼ (Component đã tối ưu UI trước đó) */}
        <div className="mb-24">
          <ProductVisualShowcase product={product} />

          {product.id === "saas-core-engine" && (
            <section className="mt-20">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Hệ sinh thái phù hợp
              </h2>
              <div className="flex flex-wrap gap-2.5">
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
                    className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-indigo-200 hover:text-indigo-600 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* 4. THÔNG TIN KỸ THUẬT & BẢNG GIÁ (Layout 2 cột) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* CỘT TRÁI (Chiếm 7 hoặc 8 phần) */}
          <div className="lg:col-span-8 space-y-20">
            {/* Vì sao chọn (Chỉ hiện cho SaaS Core) */}
            {product.id === "saas-core-engine" && (
              <section>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">
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
                      className="bg-slate-50 border border-slate-100 rounded-xl p-4"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                        <span className="font-medium text-sm text-slate-700 leading-relaxed">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tech Stack */}
            <section>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight flex items-center gap-3">
                Công nghệ & Nền tảng
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {product.techStack.map((tech, idx) => {
                  const TechIcon = TechIconMap[tech.iconName] || Code2;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 hover:border-indigo-200 hover:shadow-md transition-all group"
                    >
                      <div
                        className={`p-2 rounded-lg ${tech.bg || "bg-slate-50"}`}
                      >
                        <TechIcon
                          className={`w-5 h-5 ${tech.color || "text-slate-600"}`}
                        />
                      </div>
                      <span className="font-semibold text-slate-800 text-sm">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight flex items-center gap-3">
                Module Tính năng
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white p-5 rounded-xl border border-slate-200 hover:border-indigo-100 hover:shadow-sm transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm leading-relaxed">
                      {feature.replace(
                        /[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g,
                        "",
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CỘT PHẢI (Chiếm 4 phần - Action Card) */}
          <div className="lg:col-span-4">
            {/* Sử dụng Component ProductActionCard đã được tối ưu UI ở bước trước */}
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
