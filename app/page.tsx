"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  LayoutGrid,
  Globe,
  PieChart,
  FileSpreadsheet,
  ShieldAlert,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  CheckCircle2,
} from "lucide-react";

import { PRODUCTS } from "../data/products";
import ConsultationModal from "@/components/ConsultationModal";

export default function NhatSoftProductHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const flagshipProducts = PRODUCTS.slice(1, 4);

  // Lọc ra các sản phẩm có hình ảnh showcase để đưa vào Slider Hero
  // const sliderItems = PRODUCTS.filter(
  //   (p) => p.visualShowcases && p.visualShowcases.length > 0,
  // );
  // Lọc ra các sản phẩm có hình ảnh showcase VÀ KHÔNG PHẢI sản phẩm web cụ thể
  const sliderItems = PRODUCTS.filter(
    (p) =>
      p.visualShowcases &&
      p.visualShowcases.length > 0 &&
      p.id !== "outsource-web-dev", // Sửa "web-design" thành id thực tế của sản phẩm bạn muốn ẩn
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tự động chuyển slide sau mỗi 4 giây
  useEffect(() => {
    if (sliderItems.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + sliderItems.length) % sliderItems.length,
    );
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-700">
      {/* ========================================== */}
      {/* 1. HERO SECTION & PRODUCT IMAGE SLIDER */}
      {/* ========================================== */}
      {/* Đã giảm pt-24 md:pt-28 xuống pt-8 md:pt-12 */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
        {/* Nền lưới */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* KHUNG SLIDER ẢNH SẢN PHẨM (ĐÃ ĐƯỢC ĐẨY LÊN ĐẦU) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto px-4 sm:px-0"
          >
            <div className="relative rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-indigo-500/10 overflow-hidden aspect-[16/10] md:aspect-[16/9] group">
              {/* Slider Content */}
              {sliderItems.length > 0 && (
                <Link
                  href={`/products/${sliderItems[currentIndex].id}`}
                  className="block relative w-full h-full"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={
                          sliderItems[currentIndex].visualShowcases![0]
                            .imagePath
                        }
                        alt={sliderItems[currentIndex].title}
                        fill
                        className="object-cover"
                        priority
                      />
                      {/* Overlay thông tin tên sản phẩm trên ảnh */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 md:p-10 text-left">
                        <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-md uppercase tracking-wider w-max mb-2">
                          {sliderItems[currentIndex].badge ||
                            "Sản phẩm chủ lực"}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
                          {sliderItems[currentIndex].title}
                        </h3>
                        <p className="text-slate-300 text-sm md:text-base line-clamp-1 max-w-2xl">
                          {sliderItems[currentIndex].desc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </Link>
              )}

              {/* Nút bấm chuyển Slide (Prev / Next) */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  prevSlide();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-20"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  nextSlide();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-20"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>

              {/* Chấm tròn định vị (Dots pagination) */}
              <div className="absolute bottom-4 right-6 flex items-center gap-1.5 z-20">
                {sliderItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${currentIndex === idx ? "w-6 bg-indigo-600" : "w-2 bg-white/60 hover:bg-white"}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. FEATURED RELEASE (Tin tức ra mắt NGÂN SÁCH) */}
      {/* ========================================== */}
      <section className="py-20 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-3 block">
                Tiêu điểm công nghệ
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                Quản lý Ngân sách: <br />
                <span className="text-white">
                  Chặt chẽ, Minh bạch & An toàn.
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Chấm dứt ma trận thủ công. Loại bỏ rủi ro xuất toán. NhatSoft ra
                mắt "trợ lý số" giải quyết trọn vẹn vòng đời tài chính công.
              </p>
            </div>
            <Link
              href="/products/budget-management"
              className="shrink-0 px-6 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors flex items-center gap-2"
            >
              Khám phá chi tiết <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                <PieChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Phân bổ Dự toán thông minh
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Linh hoạt "chẻ nhỏ" nguồn vốn từ Quyết định giao ngân sách đầu
                năm xuống tận từng tiểu mục chi tiết một cách chặt chẽ.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-6">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Bóc tách số liệu thực thu
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Công nghệ nhận diện dữ liệu Excel "bọc thép". Tự động triệt tiêu
                lỗi cộng gộp trùng lặp giữa dòng cha và dòng con.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 bg-rose-500/20 text-rose-400 rounded-xl flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Chốt chặn Kiểm soát chi
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tự động rà soát số dư thực tế theo thời gian thực. Chặn đứng
                giao dịch vượt mức khi lập Giấy rút dự toán hay Ủy nhiệm chi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. SOCIAL PROOF */}
      {/* ========================================== */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
            Đồng hành cùng sự phát triển của đơn vị
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200/60">
            <div>
              <h4 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                99.9%
              </h4>
              <p className="text-sm text-slate-500 font-medium mt-2">
                Uptime Server
              </p>
            </div>
            <div>
              <h4 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                24/7
              </h4>
              <p className="text-sm text-slate-500 font-medium mt-2">
                Hỗ trợ kỹ thuật
              </p>
            </div>
            <div>
              <h4 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                +150
              </h4>
              <p className="text-sm text-slate-500 font-medium mt-2">
                Dự án triển khai
              </p>
            </div>
            <div>
              <h4 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Top 1
              </h4>
              <p className="text-sm text-slate-500 font-medium mt-2">
                Kiến trúc bảo mật
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. CÁC SẢN PHẨM KHÁC */}
      {/* ========================================== */}
      <section id="solutions" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Giải pháp toàn diện
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Được thiết kế theo kiến trúc Microservices & SaaS, đáp ứng mọi quy
              mô vận hành.
            </p>
          </div>

          <div className="space-y-24 md:space-y-32">
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
                      className="block relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 group bg-slate-50"
                    >
                      {product.visualShowcases &&
                      product.visualShowcases.length > 0 ? (
                        <Image
                          src={product.visualShowcases[0].imagePath}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <LayoutGrid className="w-16 h-16 text-slate-200" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/5 transition-colors duration-300"></div>
                    </Link>
                  </div>
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                      {product.categoryId}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-lg text-slate-500 leading-relaxed">
                      {product.desc}
                    </p>
                    <ul className="space-y-3 pt-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-slate-600"
                        >
                          <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
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
                        className="inline-flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group"
                      >
                        Khám phá chi tiết{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. CTA SECTION */}
      {/* ========================================== */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Sẵn sàng chuyển đổi số cùng NhatSoft?
          </h2>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Trò chuyện trực tiếp với chuyên gia phần mềm của chúng tôi để tìm ra
            định hướng công nghệ phù hợp nhất.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              Yêu cầu tư vấn ngay
            </button>
            <a
              href="tel:0937120121"
              className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              Hotline: 0937.120.121
            </a>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
