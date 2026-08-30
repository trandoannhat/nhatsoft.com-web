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
    <div className="sticky top-24 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 md:p-8 space-y-6">
        {/* Price Header */}
        <div className="border-b border-slate-100 pb-6 text-center">
          <span className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
            Chi phí triển khai
          </span>
          <span className="block text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            {price}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Cập nhật: {lastUpdate}
          </span>
        </div>

        {/* Benefits */}
        <ul className="space-y-3 text-sm text-slate-600">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
            <span>Bàn giao mã nguồn sạch (Clean Code)</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
            <span>Hỗ trợ Setup lên Server/Cloud</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
            <span>Bảo hành kỹ thuật 12 tháng</span>
          </li>
        </ul>

        {/* Main Action */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-indigo-600 text-white font-medium text-sm py-3.5 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          <Zap className="w-4 h-4" />
          Yêu cầu triển khai
        </button>

        {/* Secondary Action */}
        <div className="pt-2 text-center">
          <a
            href="tel:0937120121"
            className="flex items-center justify-center gap-2 text-sm text-slate-600 font-medium hover:text-slate-900 transition-colors py-2 rounded-lg hover:bg-slate-50"
          >
            <PhoneCall className="w-4 h-4 text-slate-400" />
            Tư vấn qua ĐT: 0937 120 121
          </a>
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={productName}
      />
    </div>
  );
}
