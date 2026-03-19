"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Zap,
  ExternalLink,
  PhoneCall,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-300 shadow-lg shadow-indigo-100">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black text-slate-900 tracking-tighter">
            Nhat<span className="text-indigo-600">Soft</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-sm font-bold text-slate-600">
          <Link
            href="/#products"
            className="hover:text-indigo-600 transition-colors"
          >
            Sản phẩm
          </Link>
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Hệ sinh thái
          </Link>
          <a
            href="https://nhatdev.top"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition-colors flex items-center gap-1.5"
          >
            Tech Blog <ExternalLink className="w-3.5 h-3.5 opacity-50" />
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:0937120121"
            className="flex items-center gap-2 text-sm font-black text-slate-700 hover:text-indigo-600 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
              <PhoneCall className="w-4 h-4 text-indigo-600" />
            </div>
            0937 120 121
          </a>

          {/* SỬA NÚT THÀNH LINK CHUYỂN HƯỚNG TỚI DANH SÁCH SẢN PHẨM */}
          <Link
            href="/#products"
            className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-indigo-600 transition-all shadow-md active:scale-95 block"
          >
            Dùng thử Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-slate-50 text-slate-600 hover:text-indigo-600 transition-all"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-2xl absolute w-full left-0 animate-in fade-in slide-in-from-top-4">
          <div className="px-6 py-8 space-y-6">
            <nav className="flex flex-col gap-6">
              <Link
                href="/#products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-black text-indigo-600"
              >
                Sản phẩm
              </Link>
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-black text-slate-900"
              >
                Hệ sinh thái
              </Link>
              <a
                href="https://nhatdev.top"
                className="text-xl font-black text-slate-900 flex items-center gap-2"
              >
                Tech Blog <ExternalLink className="w-5 h-5 opacity-30" />
              </a>
            </nav>
            <div className="pt-8 border-t border-slate-100 flex flex-col gap-4">
              <a
                href="tel:0937120121"
                className="flex items-center justify-center gap-3 py-4 bg-slate-50 rounded-2xl font-black text-slate-900"
              >
                <PhoneCall className="w-5 h-5 text-indigo-600" />
                0937 120 121
              </a>

              {/* SỬA NÚT THÀNH LINK Ở MOBILE VÀ ĐÓNG MENU KHI CLICK */}
              <Link
                href="/#products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 text-center bg-indigo-600 text-white rounded-2xl font-black shadow-lg shadow-indigo-100 block"
              >
                Dùng thử Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
