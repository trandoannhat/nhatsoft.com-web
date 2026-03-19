"use client";

import React, { useState } from "react";
import { CheckCircle2, Zap, PhoneCall } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

interface Props {
  productName: string;
  price: string;
  lastUpdate: string;
}

export default function ProductActionCard({
  productName,
  price,
  lastUpdate,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="sticky top-28 bg-white rounded-[2rem] border border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="p-8 space-y-8">
        {/* Price Header */}
        <div className="border-b border-slate-100 pb-8 text-center">
          <span className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
            Chi phí triển khai
          </span>
          <span className="block text-4xl md:text-5xl font-heading font-black text-indigo-600 mb-4 tracking-tighter">
            {price}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Cập nhật: {lastUpdate}
          </span>
        </div>

        {/* Benefits */}
        <ul className="space-y-4 text-sm font-medium text-slate-600">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
            <span>Bàn giao mã nguồn sạch (Clean Code)</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
            <span>Hỗ trợ Setup lên Server/Cloud</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
            <span>Bảo hành kỹ thuật 12 tháng</span>
          </li>
        </ul>

        {/* Main Action (BẬT MODAL KHI CLICK) */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-indigo-600 text-white font-black text-lg py-5 rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Triển khai ngay
        </button>

        {/* Secondary Action */}
        <div className="pt-4 text-center">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
            Hoặc tư vấn trực tiếp cùng Architect
          </p>
          <a
            href="tel:0937120121"
            className="flex items-center justify-center gap-3 text-slate-900 font-black hover:text-indigo-600 hover:bg-indigo-50 transition-all bg-white border-2 border-slate-100 px-6 py-4 rounded-2xl w-full"
          >
            <PhoneCall className="w-5 h-5 text-indigo-600" />
            0937 120 121
          </a>
        </div>
      </div>

      {/* MODAL Ở ĐÂY */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={productName} // Truyền tên sản phẩm vào form
      />
    </div>
  );
}
