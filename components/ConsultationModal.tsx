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

  // Khai báo state để check Render Client (Tránh lỗi Hydration của Next.js)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // UX Nâng cao: Khóa cuộn trang nền khi Modal đang mở
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup khi component unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Nếu chưa mount xong hoặc đang đóng thì không render gì cả
  if (!isOpen || !mounted) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Giả lập API call 1.5s
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Tự động đóng sau 3 giây khi thành công
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  // Thay vì return trực tiếp HTML, ta gán nó vào biến modalContent
  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Lớp nền mờ */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Nội dung Modal */}
      <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          // Màn hình thành công
          <div className="p-12 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-heading font-black text-slate-900 mb-2 tracking-tight">
              Gửi yêu cầu thành công!
            </h3>
            <p className="text-slate-500 font-medium">
              Chuyên gia của NhatSoft sẽ liên hệ với bạn trong thời gian sớm
              nhất.
            </p>
          </div>
        ) : (
          // Form điền thông tin
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-heading font-black text-slate-900 mb-2 tracking-tight">
              {productName ? `Tư vấn ${productName}` : "Nhận tư vấn giải pháp"}
            </h3>
            <p className="text-slate-500 text-sm mb-8 font-medium">
              Để lại thông tin, kiến trúc sư hệ thống của chúng tôi sẽ liên hệ
              để phân tích bài toán của bạn.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none font-medium text-slate-900"
                  placeholder="Nhập tên của bạn"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none font-medium text-slate-900"
                    placeholder="09xx xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none font-medium text-slate-900"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Ghi chú yêu cầu
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none font-medium text-slate-900 resize-none"
                  placeholder="Mô tả ngắn gọn quy mô hoặc tính năng bạn cần..."
                  defaultValue={
                    productName
                      ? `Tôi quan tâm đến giải pháp ${productName}. Xin vui lòng tư vấn thêm.`
                      : ""
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white font-black text-lg py-4 rounded-xl hover:bg-indigo-700 transition-all active:scale-95 shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Gửi yêu cầu ngay
                  </>
                )}
              </button>
            </form>

            {/* Support Contact */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500 font-medium mb-3">
                Hoặc kết nối trực tiếp qua Hotline/Zalo
              </p>
              <a
                href="tel:0937120121"
                className="inline-flex items-center justify-center gap-2 text-indigo-600 font-black hover:text-indigo-800 transition-colors bg-indigo-50 px-5 py-2 rounded-lg"
              >
                <PhoneCall className="w-4 h-4" /> 0937 120 121
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Sử dụng createPortal để đưa Modal ra ngoài cùng của DOM (thẻ body)
  return createPortal(modalContent, document.body);
}
