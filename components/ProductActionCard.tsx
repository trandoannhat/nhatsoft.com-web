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
    <div className="sticky top-24 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 md:p-8 space-y-6">
        {/* Price Header */}
        <div className="border-b border-slate-100 pb-6 text-center">
          <span className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
            Ngân sách dự kiến
          </span>
          <span className="block text-3xl md:text-4xl font-mono font-extrabold text-slate-900 mb-3 tracking-tight">
            {price}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Cập nhật: {lastUpdate}
          </span>
        </div>

        {/* Benefits */}
        <ul className="space-y-3 text-[13.5px] text-slate-600 font-sans">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
            <span>Bàn giao mã nguồn sạch (Clean Code)</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
            <span>Triển khai hạ tầng Server / Cloud K8s</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
            <span>SLA Vận hành & Hỗ trợ kỹ thuật 24/7</span>
          </li>
        </ul>

        {/* Main Action */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-slate-900 text-white font-semibold text-[14px] py-3.5 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          <Zap className="w-4 h-4 fill-white" />
          Yêu cầu cấu hình hệ thống
        </button>

        {/* Secondary Action */}
        <div className="pt-2 text-center">
          <a
            href="tel:0937120121"
            className="flex items-center justify-center gap-2 text-[13px] font-mono text-slate-600 font-medium hover:text-brand-600 transition-colors py-2 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200"
          >
            <PhoneCall className="w-4 h-4 text-slate-400" />
            (+84) 0937 120 121
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
