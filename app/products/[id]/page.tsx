import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Code2,
  Database,
  Layout,
  Server,
  ShieldCheck,
  Zap,
  Smartphone,
  Box,
  Code,
  Users,
} from "lucide-react";

import { PRODUCTS } from "../../../data/products";
import ProductActionCard from "@/components/ProductActionCard";
import ProductVisualShowcase from "@/components/ProductVisualShowcase";

// Giữ lại Lucide React cho TechStack Map để không làm hỏng dữ liệu Data
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
    <div className="bg-white text-slate-800 font-sans pb-24 w-full overflow-hidden text-[15px] pt-16">
      {/* 1. BREADCRUMB (Kỹ thuật, thanh lịch) */}
      <div className="border-b border-slate-200 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Link
            href="/"
            className="hover:text-brand-600 transition-colors flex-shrink-0"
          >
            Hệ sinh thái
          </Link>
          <span className="material-symbols-outlined text-[14px] text-slate-300 flex-shrink-0">
            chevron_right
          </span>
          <Link
            href="/#products"
            className="hover:text-brand-600 transition-colors flex-shrink-0"
          >
            Sản phẩm
          </Link>
          <span className="material-symbols-outlined text-[14px] text-slate-300 flex-shrink-0">
            chevron_right
          </span>
          <span className="text-brand-600 truncate font-bold">
            {product.title}
          </span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* 2. ENTERPRISE HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 mb-24 items-center">
          {/* Cột chữ */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-3 mb-6 font-mono">
              {product.badge && (
                <span className="px-2.5 py-1 text-[10px] font-bold rounded bg-brand-50 text-brand-700 border border-brand-200 uppercase tracking-wider">
                  {product.badge}
                </span>
              )}
              <span className="text-[10px] text-slate-600 font-bold bg-slate-100 px-2.5 py-1 rounded border border-slate-200 uppercase tracking-wider">
                Bản dựng {product.version}
              </span>
            </div>

            <h1 className="text-3xl md:text-[42px] lg:text-[48px] font-extrabold text-slate-900 mb-5 leading-[1.15] tracking-tight">
              {product.title}
            </h1>

            {product.id === "saas-core-engine" && (
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-brand-50 border border-brand-100 text-brand-700 font-medium text-[13.5px]">
                  <span className="material-symbols-outlined text-[18px]">
                    rocket_launch
                  </span>
                  Tiết kiệm 2-3 tháng phát triển cho dự án ERP, CRM & SaaS.
                </div>
              </div>
            )}

            <p className="text-[15.5px] text-slate-600 mb-8 leading-relaxed max-w-xl">
              {product.fullDescription}
            </p>

            {/* Các thông số đặc biệt cho SaaS Core */}
            {product.id === "saas-core-engine" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 font-mono">
                {[
                  { value: "100+", label: "Permissions" },
                  { value: "15+", label: "Modules" },
                  { value: "Multi", label: "Tenants" },
                  { value: "DDD", label: "Architecture" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 rounded-lg p-3 text-center shadow-xs"
                  >
                    <div className="text-xl font-extrabold text-brand-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[9.5px] font-bold text-slate-400 uppercase tracking-wider">
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
                    className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-sm w-full group text-[14px]"
                  >
                    Trải nghiệm hệ thống
                    <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-white transition-colors">
                      open_in_new
                    </span>
                  </a>

                  {/* TK Demo cho Spa */}
                  {product.id === "nhatsoft-spa" && (
                    <div className="bg-slate-50 border border-slate-200 rounded-md p-2 flex items-center justify-center gap-3 text-[11px] font-mono">
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
                  href="tel:0937120121"
                  className="flex items-center justify-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-all shadow-sm w-full sm:w-auto group text-[14px]"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    call
                  </span>
                  Liên hệ chuyên gia
                </a>
              )}
            </div>

            {/* Checklist Core Engine */}
            {product.id === "saas-core-engine" && (
              <div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
                <p className="text-[13px] text-emerald-800 font-mono leading-relaxed">
                  <strong className="mr-1">✓ INTEGRATED:</strong>
                  Multi-Tenant, Dynamic RBAC, ACL, JWT Auth, Audit Log, EF Core
                  8+, Clean Architecture.
                </p>
              </div>
            )}
          </div>

          {/* Cột Mockup Ảnh - Chuẩn Enterprise */}
          <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-md border border-slate-200 aspect-[4/3] sm:aspect-video bg-slate-50 flex items-center justify-center w-full group">
            {heroImage ? (
              <>
                <Image
                  src={heroImage}
                  alt={`${product.title} - Giao diện chính`}
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 border border-slate-900/5 rounded-xl pointer-events-none"></div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 opacity-50" />
                <div className="text-center p-6 relative z-10">
                  <div className="w-14 h-14 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-center mx-auto mb-4">
                    <Box className="w-6 h-6 text-slate-400" />
                  </div>
                  <p className="text-slate-600 font-medium text-[14px]">
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
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-600 font-semibold mb-2">
                APPLICATION DOMAINS // LĨNH VỰC ỨNG DỤNG
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Hệ sinh thái phù hợp
              </h2>
              <div className="flex flex-wrap gap-2.5 font-mono text-[12px]">
                {[
                  "ERP Lõi",
                  "CRM Doanh nghiệp",
                  "Quản trị Nhân sự (HRM)",
                  "Hotel Management",
                  "Workflow Engine",
                  "E-Office",
                  "Asset Management",
                  "SaaS Platform",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-700 hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 transition-colors cursor-default"
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
          {/* CỘT TRÁI */}
          <div className="lg:col-span-8 space-y-20">
            {/* Vì sao chọn (Chỉ hiện cho SaaS Core) */}
            {product.id === "saas-core-engine" && (
              <section>
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-600 font-semibold mb-2">
                  BUSINESS VALUE // LỢI ÍCH DOANH NGHIỆP
                </div>
                <h2 className="text-[26px] font-extrabold text-slate-900 mb-6 tracking-tight">
                  Vì sao chọn SaaS Core Engine?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Tiết kiệm 2-3 tháng xây dựng nền tảng cho mỗi dự án.",
                    "Sẵn sàng cho ERP, CRM, HRM và hệ sinh thái SaaS.",
                    "Phân lập dữ liệu Multi-Tenant an toàn tuyệt đối.",
                    "Dễ dàng mở rộng và đóng gói thương mại hóa.",
                    "Kiến trúc chuẩn Clean Architecture & Domain-Driven Design.",
                    "Tập trung phát triển nghiệp vụ thay vì sửa lỗi hạ tầng.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs"
                    >
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[20px] text-brand-600 mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span className="font-medium text-[14px] text-slate-700 leading-relaxed">
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
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-600 font-semibold mb-2">
                TECHNOLOGY STACK // NGĂN XẾP CÔNG NGHỆ
              </div>
              <h2 className="text-[26px] font-extrabold text-slate-900 mb-6 tracking-tight">
                Nền tảng kỹ thuật
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {product.techStack.map((tech, idx) => {
                  const TechIcon = TechIconMap[tech.iconName] || Code2;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-white border border-slate-200 shadow-xs flex items-center gap-3 hover:border-brand-300 hover:shadow-sm transition-all"
                    >
                      <div className="p-2 rounded border border-slate-100 bg-slate-50 flex items-center justify-center">
                        <TechIcon className="w-4 h-4 text-slate-600" />
                      </div>
                      <span className="font-semibold text-slate-800 text-[13.5px] font-mono">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Features */}
            <section>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-600 font-semibold mb-2">
                FUNCTIONAL SCOPE // PHẠM VI CHỨC NĂNG
              </div>
              <h2 className="text-[26px] font-extrabold text-slate-900 mb-6 tracking-tight">
                Module Nghiệp vụ
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[20px] text-brand-600 shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="text-slate-700 text-[14px] leading-relaxed">
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
