// app/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Code,
  Layout,
  Smartphone,
  Server,
  Star,
  ShieldCheck,
  HeadphonesIcon,
  Zap,
} from "lucide-react";

// ĐÃ XÓA IMPORT HEADER VÀ FOOTER VÌ ĐÃ CÓ TRONG LAYOUT.TSX

// IMPORT DATA
import { PRODUCTS, CATEGORIES } from "../data/products";

// Ánh xạ string iconName sang Component
const IconMap: Record<string, any> = {
  Layout,
  Smartphone,
  Server,
  Code,
  Star,
};

export default function NhatSoftStore() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.categoryId === activeCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    // Đã xóa Header và class bao bọc (min-h-screen) dư thừa
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
      {/* ========================================================= */}
      {/* SIDEBAR (Chỉ hiện trên màn hình lớn - Desktop) */}
      {/* ========================================================= */}
      <aside className="w-60 flex-shrink-0 hidden lg:block">
        <div className="sticky top-24">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-3">
            Danh mục giải pháp
          </h2>
          <nav className="space-y-1">
            {CATEGORIES.map((cat) => {
              const CategoryIcon = IconMap[cat.iconName] || Layout;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-blue-700 shadow-sm"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <CategoryIcon
                    className={`w-5 h-5 ${
                      isActive ? "text-blue-700" : "text-gray-400"
                    }`}
                  />
                  {cat.name}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* ========================================================= */}
      {/* MAIN CONTENT */}
      {/* Cập nhật quan trọng: Đổi overflow-hidden thành min-w-0 */}
      {/* ========================================================= */}
      <div className="flex-1 w-full min-w-0">
        {/* HERO SECTION WITH SEARCH */}
        <section className="mb-8 lg:mb-12">
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 md:p-8 text-center shadow-sm">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Giải pháp & Mã nguồn chất lượng cao
            </h1>
            <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-600">
              Khám phá các sản phẩm, mã nguồn và giải pháp phần mềm được xây
              dựng chuyên nghiệp để tăng tốc độ phát triển và tối ưu vận hành.
            </p>
            <div className="mt-6 md:mt-8 max-w-xl mx-auto">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Tìm kiếm dự án (vd: Quản lý, Spa, API...)"
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 border-2 border-transparent rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* MOBILE CATEGORY SCROLL (Đã fix lỗi bị che và tràn viền mượt) */}
        {/* ========================================================= */}
        <div className="lg:hidden mb-8">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
            Danh mục giải pháp
          </h2>
          {/* Dùng -mx-4 px-4 để thanh cuộn kéo dài sát mép màn hình điện thoại */}
          <div className="-mx-4 px-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Dùng w-max để thẻ div tự động giãn độ rộng theo nội dung, không bị ép hẹp lại */}
            <div className="flex gap-2 w-max pb-2 pr-4">
              {CATEGORIES.map((cat) => {
                const CategoryIcon = IconMap[cat.iconName] || Layout;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border whitespace-nowrap ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
                        : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <CategoryIcon
                      className={`w-4 h-4 ${
                        isActive ? "text-blue-700" : "text-gray-400"
                      }`}
                    />
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* TIÊU ĐỀ DANH SÁCH SẢN PHẨM */}
        <div className="mb-6 flex justify-between items-end">
          <h2 className="text-xl font-bold text-gray-900">
            {CATEGORIES.find((c) => c.id === activeCategory)?.name ||
              "Tất cả dự án"}
          </h2>
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {filteredProducts.length} kết quả
          </span>
        </div>

        {/* PRODUCT LISTING */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const ProductIcon = IconMap[product.iconName] || Layout;
              return (
                <Link
                  href={`/products/${product.id}`}
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full group relative block"
                >
                  {product.badge && (
                    <span
                      className={`absolute top-4 right-4 px-2.5 py-1 text-xs font-bold rounded-full ${product.badgeColor}`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-5 border border-gray-100 group-hover:bg-blue-50 transition-colors">
                    <ProductIcon className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 pr-16 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3">
                    {product.desc}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="font-bold text-gray-900">
                      {product.price}
                    </span>
                    <div className="text-sm font-semibold bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                      Chi tiết
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border-2 border-gray-200 rounded-2xl border-dashed">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 mb-4">
              <Search className="w-7 h-7 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              Không tìm thấy dự án nào
            </h3>
            <p className="text-gray-500 mt-1 text-sm">
              Vui lòng thử lại với từ khóa khác hoặc chọn danh mục khác.
            </p>
          </div>
        )}

        {/* ========================================================= */}
        {/* SECTION: TẠI SAO CHỌN CHÚNG TÔI (Tạo Trust) */}
        {/* ========================================================= */}
        <section className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Tại sao chọn NhatSoft?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Code sạch & Chuẩn mực
              </h3>
              <p className="text-sm text-gray-500">
                Mã nguồn được cấu trúc rõ ràng, dễ dàng mở rộng và tùy biến theo
                nhu cầu doanh nghiệp.
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Tối ưu hiệu suất
              </h3>
              <p className="text-sm text-gray-500">
                Ứng dụng công nghệ mới nhất giúp hệ thống chạy mượt mà, chịu tải
                cao.
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
                <HeadphonesIcon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Hỗ trợ tận tâm
              </h3>
              <p className="text-sm text-gray-500">
                Tài liệu hướng dẫn chi tiết, hỗ trợ cài đặt và giải đáp kỹ thuật
                24/7.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
