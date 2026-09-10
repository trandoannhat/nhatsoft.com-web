"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  LayoutGrid,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  CheckCircle2,
} from "lucide-react";

// Import dữ liệu
import { PRODUCTS } from "@/data/products";
import { COMPANY_STATS, SERVICES, WORKFLOW_STEPS } from "@/data/company";
import ConsultationModal from "@/components/ConsultationModal";

export default function NhatSoftProductHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lọc sản phẩm hiển thị
  const flagshipProducts = PRODUCTS.slice(1, 4);
  const sliderItems = PRODUCTS.filter(
    (p) =>
      p.visualShowcases &&
      p.visualShowcases.length > 0 &&
      p.id !== "outsource-web-dev",
  );

  useEffect(() => {
    if (sliderItems.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderItems.length]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white font-sans text-slate-800 text-[15px] leading-relaxed pt-16">
      {/* 1. HERO SECTION (Khôi phục đầy đủ code) */}
      <section className="relative w-full border-b border-slate-200/80 bg-gradient-to-b from-slate-50/80 via-white to-white blueprint-grid hero-glow-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
              <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 bg-brand-50 border border-brand-200 rounded-full font-mono text-xs text-brand-700 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-brand-600"></span>
                <span>PHÁT TRIỂN PHẦN MỀM DOANH NGHIỆP & NỀN TẢNG SAAS</span>
              </div>
              <h1 className="font-sans text-[40px] sm:text-[50px] lg:text-[56px] font-extrabold tracking-[-0.035em] text-slate-900 leading-[1.12] mb-6">
                Kiến tạo phần mềm doanh nghiệp & Nền tảng{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">
                  SaaS quy chuẩn.
                </span>
              </h1>
              <p className="font-sans text-[16.5px] text-slate-600 leading-relaxed mb-9 max-w-xl">
                NhatSoft đồng hành cùng các tổ chức xây dựng hệ thống phần mềm
                lõi quy mô lớn, kiến trúc chuẩn mực và tự động hóa quy trình
                nghiệp vụ chuyên sâu — từ tư vấn giải pháp đến vận hành liên
                tục.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white font-semibold text-[15px] px-6 py-3.5 rounded-lg shadow-sm shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30 transition-all gap-2"
                >
                  <span>Đăng ký tư vấn miễn phí</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
                <Link
                  href="#case-studies-section"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 font-semibold text-[15px] px-5 py-3.5 rounded-lg border border-slate-300 hover:border-slate-400 shadow-xs transition-all gap-2 group"
                >
                  <span>Xem Dự án tiêu biểu</span>
                  <span className="material-symbols-outlined text-[18px] text-slate-500 group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
              <div className="pt-6 border-t border-slate-200/90 w-full grid grid-cols-3 gap-4 font-mono text-[12px]">
                <div>
                  <div className="text-slate-400 uppercase text-[10px] tracking-wider">
                    Kiến trúc
                  </div>
                  <div className="font-semibold text-slate-800 mt-0.5">
                    Clean DDD / CQRS
                  </div>
                </div>
                <div>
                  <div className="text-slate-400 uppercase text-[10px] tracking-wider">
                    Khả năng mở rộng
                  </div>
                  <div className="font-semibold text-slate-800 mt-0.5">
                    Multi-Tenant Ready
                  </div>
                </div>
                <div>
                  <div className="text-slate-400 uppercase text-[10px] tracking-wider">
                    Công nghệ cốt lõi
                  </div>
                  <div className="font-semibold text-slate-800 mt-0.5">
                    .NET 8/9 • Next.js
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Topology Visual */}
            <div className="lg:col-span-6 w-full relative">
              <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl p-6 text-slate-800 font-sans overflow-hidden">
                <div className="absolute -right-16 -top-16 w-56 h-56 bg-brand-50 rounded-full blur-3xl pointer-events-none opacity-60"></div>
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100 font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="text-slate-500 ml-1 font-semibold">
                      cluster-prod-asia // telemetry-trực-tiếp
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      99.9% Hoạt động
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4 font-mono">
                  <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-lg">
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      Thông lượng API
                    </div>
                    <div className="text-[18px] font-bold text-slate-900 mt-0.5">
                      24.8k{" "}
                      <span className="text-[11px] font-normal text-slate-500">
                        req/s
                      </span>
                    </div>
                    <div className="text-[10.5px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[13px]">
                        trending_up
                      </span>{" "}
                      +12.4% cao điểm
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-lg">
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      Độ trễ P95
                    </div>
                    <div className="text-[18px] font-bold text-slate-900 mt-0.5">
                      18.4{" "}
                      <span className="text-[11px] font-normal text-slate-500">
                        ms
                      </span>
                    </div>
                    <div className="text-[10.5px] text-slate-500 mt-1">
                      Global Edge
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-lg">
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      Phiên làm việc
                    </div>
                    <div className="text-[18px] font-bold text-brand-600 mt-0.5">
                      1,248{" "}
                      <span className="text-[11px] font-normal text-slate-500">
                        hoạt động
                      </span>
                    </div>
                    <div className="text-[10.5px] text-emerald-600 font-semibold mt-1">
                      0% rò rỉ dữ liệu
                    </div>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="bg-white border border-slate-200 p-3.5 rounded-lg flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
                        <span className="material-symbols-outlined text-[18px]">
                          dns
                        </span>
                      </div>
                      <div>
                        <div className="text-slate-900 font-bold text-[12.5px]">
                          Cổng biên & Reverse Proxy
                        </div>
                        <div className="text-slate-500 font-mono text-[11px]">
                          TLS 1.3 • Token Bucket Rate Limiter
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-[10px] font-bold rounded">
                      HOẠT ĐỘNG
                    </span>
                  </div>
                  <div className="bg-brand-50/40 border border-brand-200 p-3.5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-brand-600 text-[18px]">
                          hub
                        </span>
                        <span className="text-slate-900 font-bold text-[12.5px]">
                          NhatSoft Core App Engine (.NET 9)
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-brand-100 text-brand-800 font-mono text-[10px] font-bold rounded">
                        TỰ ĐỘNG MỞ RỘNG
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                      <div className="bg-white p-2 rounded border border-brand-100 shadow-xs">
                        <span className="text-slate-500">Command Bus:</span>
                        <span className="text-slate-900 font-semibold ml-1">
                          MediatR
                        </span>
                      </div>
                      <div className="bg-white p-2 rounded border border-brand-100 shadow-xs">
                        <span className="text-slate-500">Tenant Resolver:</span>
                        <span className="text-slate-900 font-semibold ml-1">
                          Schema
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="text-brand-600 font-bold">$</span>
                    <span>trạng thái triển khai: clean-architecture-ready</span>
                  </div>
                  <span className="text-slate-400 font-semibold">
                    CI/CD: GitHub Actions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THỐNG KÊ (Dữ liệu động) */}
      <section className="w-full border-b border-slate-200/80 bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-14 text-center">
            {COMPANY_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50/60 rounded-xl border border-slate-100"
              >
                <div
                  className={`font-sans text-4xl sm:text-5xl font-extrabold tracking-tight ${stat.color || "text-slate-900"}`}
                >
                  {stat.value}
                </div>
                <div className="font-sans text-sm font-bold text-slate-800 mt-2">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DỊCH VỤ CỐT LÕI (Dữ liệu động) */}
      <section
        className="w-full border-b border-slate-200/80 bg-slate-50/60 py-24"
        id="services-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-600 font-semibold mb-2">
              DỊCH VỤ & GIẢI PHÁP // NĂNG LỰC CỐT LÕI
            </div>
            <h2 className="font-sans text-[33px] sm:text-[42px] font-extrabold text-slate-900 tracking-tight">
              Xây dựng phần mềm giải quyết triệt để bài toán kinh doanh.
            </h2>
            <p className="text-[16px] text-slate-600 mt-3 leading-relaxed">
              Chúng tôi tập trung vào 4 nhóm năng lực kỹ thuật then chốt, mang
              lại hạ tầng công nghệ bền vững, khả năng mở rộng không giới hạn và
              bảo mật tuyệt đối cho tổ chức.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 p-7 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-brand-300 transition-all group"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-xs">
                    <span className="material-symbols-outlined text-[30px]">
                      {srv.icon}
                    </span>
                  </div>
                  <h3 className="font-sans text-[20px] font-bold text-slate-900 mb-2.5">
                    {srv.title}
                  </h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-[11px] text-slate-600">
                    {srv.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-slate-100 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-[14px] font-bold text-brand-600 group-hover:text-brand-700 transition-colors"
                  >
                    <span>Tìm hiểu thêm</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HỆ SINH THÁI (Render từ mảng PRODUCTS) */}
      <section
        id="saas-core-section"
        className="py-24 bg-white border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-600 font-semibold mb-2">
              HỆ SINH THÁI GIẢI PHÁP // NHATSOFT ECOSYSTEM
            </div>
            <h2 className="text-[33px] md:text-[42px] font-extrabold text-slate-900 tracking-tight mb-6">
              Mô-đun chuyên biệt. Tích hợp xuyên suốt.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Các nền tảng được thiết kế để hoạt động độc lập hoặc đồng bộ dữ
              liệu hoàn toàn dựa trên khung kiến trúc SaaS Core.
            </p>
          </div>

          <div className="space-y-24">
            {flagshipProducts.map((product, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={product.id}
                  className={`flex flex-col gap-12 lg:gap-16 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className="w-full lg:w-1/2">
                    <Link
                      href={`/products/${product.id}`}
                      className="block relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg group bg-slate-50"
                    >
                      {product.visualShowcases &&
                      product.visualShowcases.length > 0 ? (
                        <Image
                          src={product.visualShowcases[0].imagePath}
                          alt={product.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <LayoutGrid className="w-16 h-16 text-slate-300" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/5 transition-colors duration-300"></div>
                    </Link>
                  </div>
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider border border-brand-100">
                      {product.categoryId}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {product.desc}
                    </p>
                    <ul className="space-y-3 pt-2 font-sans">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-slate-700"
                        >
                          <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">
                            {feature.replace(
                              /[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g,
                              "",
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6">
                      <Link
                        href={`/products/${product.id}`}
                        className="inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-700 transition-colors group"
                      >
                        Khám phá chi tiết{" "}
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. QUY TRÌNH (Dữ liệu động) */}
      <section
        className="w-full border-b border-slate-200/80 bg-slate-50/60 py-24"
        id="process-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-left">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-600 font-semibold mb-2">
              AGILE ENGINEERING WORKFLOW // QUY TRÌNH PHÁT TRIỂN
            </div>
            <h2 className="font-sans text-[33px] sm:text-[42px] font-extrabold text-slate-900 tracking-tight">
              Quy trình phát triển chuẩn xác 6 giai đoạn.
            </h2>
            <p className="text-[16px] text-slate-600 mt-2 leading-relaxed">
              Mô hình bàn giao Agile kết hợp tiến độ minh bạch, code review liên
              tục và kiểm soát rủi ro từ ý tưởng đến vận hành thực tế.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
            {WORKFLOW_STEPS.map((wf, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-xs hover:border-brand-300 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-full bg-brand-600 text-white font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                      {wf.step}
                    </span>
                  </div>
                  <h3 className="font-sans text-[16px] font-bold text-slate-900 mb-2">
                    {wf.title}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed">
                    {wf.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION (Khôi phục đầy đủ code) */}
      <section className="w-full bg-white py-20 lg:py-24" id="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-12 lg:p-16 text-white border border-slate-800 shadow-2xl overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/20 border border-brand-400/30 text-brand-300 font-mono text-xs uppercase tracking-wider rounded-full mb-4">
                  TRỰC TIẾP VỚI SOLUTION ARCHITECT
                </div>
                <h2 className="font-sans text-[28px] sm:text-[40px] font-extrabold tracking-tight text-white leading-[1.2] mb-4">
                  Sẵn sàng kiến tạo hệ thống phần mềm đột phá cho doanh nghiệp
                  của bạn?
                </h2>
                <p className="text-slate-300 text-[16px] max-w-2xl leading-relaxed mb-8">
                  Đội ngũ kỹ sư phần mềm NhatSoft sẵn sàng làm việc cùng bạn.
                  Phân tích bài toán thực tế, đánh giá rủi ro kiến trúc và xây
                  dựng giải pháp kỹ thuật tối ưu.
                </p>
                <div className="flex flex-wrap items-center gap-6 font-mono text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-brand-400 text-[20px]">
                      call
                    </span>
                    <span>
                      Hotline:{" "}
                      <strong className="text-white font-semibold">
                        (+84) 0937 120 121
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-brand-400 text-[20px]">
                      mail
                    </span>
                    <span>
                      Email:{" "}
                      <strong className="text-white font-semibold">
                        doannhatit@gmail.com
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-600 hover:bg-brand-500 text-white font-bold text-[15px] px-8 py-4 rounded-xl shadow-lg transition-all gap-2 text-center"
                >
                  <span>Đăng ký tư vấn miễn phí 1:1 →</span>
                </button>
                <div className="mt-3 font-mono text-xs text-slate-400">
                  Tư vấn trực tiếp cùng Chuyên gia Kiến trúc
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
