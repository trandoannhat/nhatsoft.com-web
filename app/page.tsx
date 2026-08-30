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
  Database,
  Lock,
  Server,
  Code,
  Layers,
  Settings,
} from "lucide-react";

import { PRODUCTS } from "../data/products";
import ConsultationModal from "@/components/ConsultationModal";

export default function NhatSoftProductHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const flagshipProducts = PRODUCTS.slice(1, 4);

  // Lọc ra các sản phẩm có hình ảnh showcase VÀ KHÔNG PHẢI sản phẩm web cụ thể
  const sliderItems = PRODUCTS.filter(
    (p) =>
      p.visualShowcases &&
      p.visualShowcases.length > 0 &&
      p.id !== "outsource-web-dev",
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
      <section className="relative pt-8 pb-12 md:pt-10 md:pb-16 overflow-hidden">
        {/* Nền lưới */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-6">
          {/* Main Headline - Đã được ép gọn chiều cao tối đa */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Thu nhỏ padding và margin của badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
              <Zap className="w-3.5 h-3.5 fill-indigo-500" />
              Nền tảng phần mềm All-in-One
            </span>

            {/* Bỏ thẻ <br/> ngắt dòng, mở rộng max-w-4xl để dàn ngang trên 1 dòng ở Desktop */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-2 max-w-4xl mx-auto">
              Nền tảng phần mềm cho vận hành doanh nghiệp hiện đại
            </h1>

            {/* Mở rộng max-w-4xl để text mô tả nằm gọn trên 1 dòng (với màn hình to), giảm margin */}
            <p className="text-sm md:text-base text-slate-600 mb-5 max-w-4xl mx-auto leading-relaxed">
              Một nền tảng duy nhất - Đa dạng nghiệp vụ. Xây dựng kiến trúc vững
              chắc từ ERP, CRM, HRM đến Quản lý tài chính chuyên sâu.
            </p>

            {/* Thu gọn nút bấm: bỏ flex-col trên mobile (để 2 nút luôn nằm ngang), giảm padding */}
            <div className="flex flex-row gap-3 justify-center items-center mb-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm"
              >
                Nhận tư vấn
              </button>
              <a
                href="#ecosystem"
                className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                Hệ sinh thái
              </a>
            </div>
          </motion.div>
          {/* KHUNG SLIDER ẢNH SẢN PHẨM THỰC TẾ (Đã được phục hồi và tinh chỉnh) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-5xl mx-auto px-4 sm:px-0"
          >
            <div className="relative rounded-2xl border border-slate-200/80 bg-slate-100/80 shadow-2xl shadow-slate-300/40 overflow-hidden aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] group">
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
                        className="object-contain p-2 md:p-6"
                        priority
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent flex flex-col justify-end p-6 md:p-10 text-left">
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

              {/* Slider Controls */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  prevSlide();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-20"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  nextSlide();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-20"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 right-6 flex items-center gap-1.5 z-20">
                {sliderItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all ${currentIndex === idx ? "w-6 bg-indigo-500" : "w-2 bg-white/40 hover:bg-white"}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Trust Banner (Đã được phục hồi) */}
          <div className="mt-8 md:mt-10 flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="text-sm font-bold flex items-center gap-2">
              <Code className="w-5 h-5" /> .NET Core
            </span>
            <span className="text-sm font-bold flex items-center gap-2">
              <Database className="w-5 h-5" /> PostgreSQL
            </span>
            <span className="text-sm font-bold flex items-center gap-2">
              <Server className="w-5 h-5" /> SQL Server
            </span>
            <span className="text-sm font-bold flex items-center gap-2">
              <Globe className="w-5 h-5" /> Cloud Native
            </span>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. PLATFORM CORE VALUES */}
      {/* ========================================== */}
      <section className="py-12 border-y border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
            Kiến trúc phần mềm chuẩn Enterprise
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="pt-6 md:pt-0">
              <div className="mx-auto w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Kiến trúc Multi-tenant
              </h4>
              <p className="text-sm text-slate-500 mt-2 px-4">
                Đảm bảo cô lập và bảo mật dữ liệu tuyệt đối cho từng doanh
                nghiệp.
              </p>
            </div>
            <div className="pt-6 md:pt-0">
              <div className="mx-auto w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Bảo mật đa lớp
              </h4>
              <p className="text-sm text-slate-500 mt-2 px-4">
                Mã hóa chuẩn công nghiệp, phân quyền sâu tới từng tác vụ (RBAC).
              </p>
            </div>
            <div className="pt-6 md:pt-0">
              <div className="mx-auto w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                RESTful API Sẵn sàng
              </h4>
              <p className="text-sm text-slate-500 mt-2 px-4">
                Dễ dàng tích hợp với các hệ thống ERP, Kế toán, và phần mềm bên
                thứ ba.
              </p>
            </div>
            <div className="pt-6 md:pt-0">
              <div className="mx-auto w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
                <Settings className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Tùy biến linh hoạt
              </h4>
              <p className="text-sm text-slate-500 mt-2 px-4">
                Quy trình (Workflow) động, mở rộng dễ dàng theo quy mô phát
                triển.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. FEATURED RELEASE (Tin tức ra mắt NGÂN SÁCH) */}
      {/* ========================================== */}
      <section className="py-20 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 fill-blue-400" /> Tiêu điểm giải pháp
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                Quản lý Ngân sách: <br />
                <span className="text-white">
                  Chặt chẽ, Minh bạch & An toàn.
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Chấm dứt ma trận thủ công. Loại bỏ rủi ro xuất toán. NhatSoft ra
                mắt "trợ lý số" giải quyết trọn vẹn vòng đời tài chính cho cơ
                quan hành chính.
              </p>
            </div>
            <Link
              href="/products/budget-management"
              className="shrink-0 px-6 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-lg shadow-white/10"
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
      {/* 4. HỆ SINH THÁI SẢN PHẨM KHÁC (ECOSYSTEM) */}
      {/* ========================================== */}
      <section id="ecosystem" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Hệ sinh thái Giải pháp
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Các module chuyên biệt được thiết kế để hoạt động độc lập hoặc
              tích hợp xuyên suốt, đáp ứng mọi nghiệp vụ phức tạp của doanh
              ngệp.
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
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
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
      {/* 5. NỀN TẢNG LÕI NHATSOFT CORE */}
      {/* ========================================== */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Sức mạnh từ NhatSoft Core
            </h2>
            <p className="text-lg text-slate-500">
              Không chỉ là các module phần mềm rời rạc, mọi sản phẩm đều được
              xây dựng trên một Framework dùng chung mạnh mẽ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Phân quyền RBAC</h3>
              <p className="text-slate-500 text-sm">
                Kiểm soát truy cập dựa trên vai trò, cho phép phân quyền sâu tới
                từng field dữ liệu và action cụ thể.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Zap className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Workflow Engine</h3>
              <p className="text-slate-500 text-sm">
                Cấu hình quy trình phê duyệt động đa cấp bậc mà không cần can
                thiệp vào mã nguồn.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Database className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Audit Logging</h3>
              <p className="text-slate-500 text-sm">
                Lưu vết toàn bộ lịch sử thao tác của người dùng. Dễ dàng truy
                xuất và đối soát khi có sự cố dữ liệu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 6. CTA SECTION */}
      {/* ========================================== */}
      <section className="py-24 bg-white border-t border-slate-100">
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
