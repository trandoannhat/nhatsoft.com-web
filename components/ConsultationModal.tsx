"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Send, PhoneCall, CheckCircle2, Loader2 } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  productName,
}: ModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors z-10 border border-transparent hover:border-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-10 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center justify-center mb-5">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Gửi yêu cầu thành công
            </h3>
            <p className="text-[14px] text-slate-500">
              Chuyên gia Kiến trúc của NhatSoft sẽ liên hệ với bạn trong thời
              gian sớm nhất.
            </p>
          </div>
        ) : (
          <div className="p-8">
            <div className="font-mono text-[11px] font-bold text-brand-600 uppercase mb-2">
              Đăng ký tư vấn
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {productName
                ? `Triển khai ${productName}`
                : "Khảo sát giải pháp phần mềm"}
            </h3>
            <p className="text-[14px] text-slate-500 mb-6">
              Để lại thông tin, đội ngũ kỹ thuật sẽ liên hệ phân tích bài toán
              thực tế của bạn.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase mb-1.5">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-md focus:ring-1 focus:ring-brand-600 focus:border-brand-600 transition-all outline-none text-sm text-slate-900"
                  placeholder="Nhập tên của bạn"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase mb-1.5">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-md focus:ring-1 focus:ring-brand-600 focus:border-brand-600 transition-all outline-none text-sm text-slate-900 font-mono"
                    placeholder="09xx xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-md focus:ring-1 focus:ring-brand-600 focus:border-brand-600 transition-all outline-none text-sm text-slate-900 font-mono"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase mb-1.5">
                  Ghi chú yêu cầu
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-md focus:ring-1 focus:ring-brand-600 focus:border-brand-600 transition-all outline-none text-sm text-slate-900 resize-none"
                  placeholder="Mô tả ngắn gọn quy mô..."
                  defaultValue={
                    productName
                      ? `Tôi quan tâm đến ${productName}. Xin vui lòng tư vấn thêm.`
                      : ""
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-600 text-white font-semibold text-sm py-3 rounded-lg hover:bg-brand-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2 shadow-sm"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Xác nhận gửi yêu cầu
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[12px] text-slate-500">
                Hoặc liên hệ đường dây nóng:
              </span>
              <a
                href="tel:0937120121"
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors font-mono"
              >
                <PhoneCall className="w-4 h-4" /> 0937 120 121
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
