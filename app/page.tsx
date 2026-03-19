"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // Đã import framer-motion
import {
  Search,
  Box,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Star,
  LayoutGrid,
  Layers,
  Rocket,
  Clock,
  ArrowUpRight,
} from "lucide-react";

// Đảm bảo file data của bạn có chứa PRODUCTS
import { PRODUCTS } from "../data/products";
import ConsultationModal from "@/components/ConsultationModal";

export default function NhatSoftProductHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = PRODUCTS.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex flex-col w-full min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-700 relative">
      {/* ========================================== */}
      {/* 1. HERO SECTION */}
      {/* ========================================== */}
      <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-slate-50/50">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(79,70,229,0.1),transparent)]" />
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-indigo-200/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-200/20 rounded-full blur-[100px]" />
        </div>

        {/* THÊM MOTION CHO HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white border border-slate-200 shadow-sm text-indigo-600 text-xs font-bold mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              Hệ sinh thái NhatSoft Enterprise v3.0
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-black text-slate-900 tracking-tighter mb-8 leading-[1.1]">
              Sản phẩm công nghệ <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                Chuẩn mực quốc tế
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              Chúng tôi không chỉ bán mã nguồn, chúng tôi cung cấp giải pháp vận
              hành tối ưu được đóng gói hoàn chỉnh cho mọi mô hình doanh nghiệp.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Link
                href="#products"
                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold transition-all hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-200 flex items-center gap-2 group"
              >
                Khám phá hệ sinh thái{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-10 py-5 bg-slate-100 text-slate-900 rounded-3xl font-black text-lg hover:bg-slate-200 transition-all cursor-pointer"
              >
                Tư vấn sản phẩm
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* 2. VALUE PROPOSITION */}
      {/* ========================================== */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* BỌC MOTION ĐỂ TẠO HIỆU ỨNG STAGGER LẦN LƯỢT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12"
          >
            {[
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Triển khai thần tốc",
                desc: "Sẵn sàng vận hành trong 24h",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Bảo mật đa lớp",
                desc: "Dữ liệu được mã hóa đầu cuối",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Hiệu năng đỉnh cao",
                desc: "Tối ưu hóa tốc độ tải trang",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Hỗ trợ trọn đời",
                desc: "Cập nhật tính năng định kỳ",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className="group"
              >
                <div className="w-14 h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-indigo-200 group-hover:-translate-y-1">
                  {item.icon}
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-lg mb-2 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. PRODUCT CATALOG */}
      {/* ========================================== */}
      <section id="products" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">
                Danh mục Sản phẩm
              </h2>
              <p className="text-lg text-slate-500 font-medium">
                Tìm kiếm giải pháp phù hợp để tăng trưởng doanh nghiệp của bạn.
              </p>
            </div>
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
              <input
                type="text"
                placeholder="Tìm sản phẩm (vd: CRM, Spa, Soccer...)"
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none shadow-sm font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            /* MOTION GRID CHO SẢN PHẨM */
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  className="h-full"
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="group flex flex-col bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 h-full"
                  >
                    <div className="aspect-[16/10] bg-slate-900 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-950 to-slate-900">
                        <div className="relative">
                          <Box className="w-20 h-20 text-indigo-500/20 group-hover:scale-125 transition-transform duration-700" />
                          <div className="absolute inset-0 blur-2xl bg-indigo-500/30 rounded-full animate-pulse" />
                        </div>
                      </div>
                      {product.badge && (
                        <div
                          className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg backdrop-blur-md ${product.badgeColor} border border-white/20`}
                        >
                          {product.badge}
                        </div>
                      )}
                    </div>

                    <div className="p-10 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider rounded-lg">
                          {product.categoryId}
                        </span>
                      </div>

                      <h3 className="text-2xl font-heading font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors tracking-tight">
                        {product.title}
                      </h3>

                      <p className="text-slate-500 leading-relaxed mb-10 line-clamp-2 font-medium">
                        {product.desc}
                      </p>

                      <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                            Giá sở hữu
                          </p>
                          <p className="text-2xl font-heading font-black text-slate-900 tracking-tighter">
                            {product.price}
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm group-hover:rotate-12">
                          <ArrowUpRight className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-24 bg-white border-2 border-dashed border-slate-200 rounded-[2.5rem]">
              <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-2xl font-heading font-black text-slate-900 mb-2 tracking-tight">
                Không tìm thấy sản phẩm nào
              </h3>
              <p className="text-slate-500 font-medium">
                Không có giải pháp nào khớp với từ khóa "{searchQuery}". Vui
                lòng thử lại bằng một từ khóa khác.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-6 px-6 py-3 bg-indigo-50 text-indigo-600 font-bold rounded-xl hover:bg-indigo-100 transition-colors"
              >
                Xóa bộ lọc
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. ECOSYSTEM */}
      {/* ========================================== */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 leading-tight tracking-tighter">
                Hệ sinh thái <br />
                <span className="text-indigo-500 underline decoration-indigo-500/30 underline-offset-8">
                  Hợp nhất.
                </span>
              </h2>
              <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
                Các sản phẩm của NhatSoft được xây dựng trên một nền tảng kiến
                trúc duy nhất, cho phép dữ liệu lưu thông mượt mà.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Dữ liệu tập trung Cloud-base",
                  "API đồng bộ chuẩn RESTful",
                  "Báo cáo thông minh BI",
                  "Tự động hóa Workflow",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm"
                  >
                    <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" />
                    <span className="font-bold text-sm tracking-wide">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-square bg-indigo-600/10 border border-indigo-500/20 rounded-[3rem] p-12 overflow-hidden">
                <div className="grid grid-cols-2 gap-6 h-full">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center group/icon hover:bg-indigo-500/20 transition-all cursor-pointer"
                    >
                      <LayoutGrid className="w-12 h-12 text-indigo-400/30 group-hover/icon:scale-110 group-hover/icon:text-indigo-400 transition-all duration-500" />
                    </div>
                  ))}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500 rounded-full blur-[100px] opacity-40 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. CTA SECTION */}
      {/* ========================================== */}
      <section className="py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-4 text-center"
        >
          <div className="mb-12">
            <Rocket className="w-16 h-16 text-indigo-600 mx-auto mb-8 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-6 tracking-tight">
              Sẵn sàng bứt phá doanh thu?
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              Chọn một sản phẩm, nhận hỗ trợ trực tiếp từ đội ngũ chuyên gia sản
              phẩm của NhatSoft.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:0937120121"
              className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-3xl font-black text-lg hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200 flex items-center justify-center gap-4 group"
            >
              Hotline: 0937.120.121
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-10 py-5 bg-slate-100 text-slate-900 rounded-3xl font-black text-lg hover:bg-slate-200 transition-all cursor-pointer"
            >
              Gửi yêu cầu Demo
            </button>
          </div>

          <p className="mt-10 text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">
            Tư vấn miễn phí & hỗ trợ kỹ thuật 24/7
          </p>
        </motion.div>
      </section>

      {/* ĐẶT MODAL Ở NGOÀI CÙNG */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
