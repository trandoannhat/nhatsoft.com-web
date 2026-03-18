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
} from "lucide-react";

// Import data (nhớ kiểm tra lại đường dẫn này cho đúng với thư mục của bạn)
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
    // Xóa min-h-screen vì Layout.tsx đã lo phần này. Xóa Header cũ để tránh trùng lặp.
    <div className="bg-white text-gray-900 font-sans pb-20 w-full overflow-hidden">
      {/* ========================================================= */}
      {/* BREADCRUMB (THANH ĐIỀU HƯỚNG PHỤ) */}
      {/* ========================================================= */}
      <div className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Link
            href="/"
            className="hover:text-blue-600 transition-colors flex-shrink-0"
          >
            Trang chủ
          </Link>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <Link
            href="/"
            className="hover:text-blue-600 transition-colors flex-shrink-0"
          >
            Dự án
          </Link>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <span className="text-gray-900 font-medium truncate">
            {product.title}
          </span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* NỘI DUNG CHÍNH (MAIN CONTENT) */}
      {/* ========================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {product.badge && (
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide ${product.badgeColor}`}
                >
                  {product.badge}
                </span>
              )}
              <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
                Phiên bản {product.version}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              {product.title}
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              {product.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 md:px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-md active:scale-95 w-full sm:w-auto">
                <ExternalLink className="w-5 h-5" />
                Trải nghiệm Demo
              </button>
            </div>
          </div>

          {/* MOCKUP HÌNH ẢNH */}
          <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] sm:aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center w-full">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4">
                <Layout className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 font-medium">
                Ảnh chụp Giao diện / Chức năng
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Cập nhật hình ảnh sản phẩm tại đây
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* THÔNG TIN KỸ THUẬT & BẢNG GIÁ */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* CỘT TRÁI: CHI TIẾT TÍNH NĂNG */}
          <div className="lg:col-span-2 space-y-12">
            {/* Tech Stack */}
            <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-500" />
                Kiến trúc & Công nghệ
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {product.techStack.map((tech, idx) => {
                  const TechIcon = TechIconMap[tech.iconName] || Code2;
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl ${tech.bg} border border-white shadow-sm flex flex-col items-center justify-center text-center gap-3 transition-transform hover:-translate-y-1`}
                    >
                      <TechIcon className={`w-8 h-8 ${tech.color}`} />
                      <span className="font-bold text-gray-900 text-sm">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Features List */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-green-500" />
                Tính năng cốt lõi
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-blue-100 transition-colors group"
                  >
                    <div className="mt-0.5 bg-blue-50 rounded-full p-1 group-hover:bg-blue-100 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CỘT PHẢI: BÁO GIÁ & LIÊN HỆ (Sticky Sidebar) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              <div className="p-6 md:p-8 space-y-6">
                <div className="border-b border-gray-100 pb-6 text-center">
                  <span className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Chi phí đầu tư
                  </span>
                  <span className="block text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">
                    {product.price}
                  </span>
                  <span className="inline-block text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded">
                    Cập nhật: {product.lastUpdate}
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-gray-600 pb-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Tặng kèm
                    tài liệu hướng dẫn
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Hỗ trợ
                    cài đặt lên Server
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Bảo hành
                    mã nguồn 12 tháng
                  </li>
                </ul>

                <button className="w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Liên hệ báo giá
                </button>

                <div className="pt-4 text-center bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-sm font-medium text-gray-600 mb-3">
                    Tư vấn kiến trúc & Tuỳ biến
                  </p>
                  <a
                    href="tel:0937120121"
                    className="inline-flex items-center justify-center gap-2 text-blue-700 font-bold hover:text-blue-800 transition-colors bg-white border border-blue-100 px-6 py-2.5 rounded-lg w-full shadow-sm hover:shadow"
                  >
                    <PhoneCall className="w-5 h-5" />
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
