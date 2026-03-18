// components/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap, ExternalLink, PhoneCall, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Nhat<span className="text-blue-600">Soft</span>
          </span>
        </Link>

        {/* Điều hướng Desktop (Ẩn trên Mobile) */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          {/* <Link href="/" className="hover:text-blue-600 transition-colors">
            Trang chủ
          </Link> */}
          <Link href="/" className="text-blue-600">
            Giải pháp & Dự án
          </Link>
          <a
            href="https://nhatdev.top"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            Tech Blog <ExternalLink className="w-3 h-3" />
          </a>
        </nav>

        {/* Liên hệ & CTA Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:0907011886"
            className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-blue-600" />
            0937 120 121
          </a>
          <div className="w-px h-5 bg-gray-300"></div>
          <button className="text-sm font-medium bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-all active:scale-95 shadow-sm">
            Nhận tư vấn
          </button>
        </div>

        {/* Nút Hamburger Menu cho Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Trang chủ
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-blue-50"
            >
              Giải pháp & Dự án
            </Link>
            <a
              href="https://nhatdev.top"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Tech Blog <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-4 pb-4 border-t border-gray-200 px-5 space-y-4">
            <a
              href="tel:0907011886"
              className="flex items-center gap-2 text-base font-bold text-gray-700"
            >
              <PhoneCall className="w-5 h-5 text-blue-600" />
              0937 120 121
            </a>
            <button className="w-full text-base font-medium bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-all active:scale-95 shadow-sm">
              Nhận tư vấn
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
