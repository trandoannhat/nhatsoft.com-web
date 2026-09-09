"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Giải pháp", href: "/#services-section" },
    { name: "SaaS Core", href: "/#saas-core-section" },
    { name: "Lĩnh vực", href: "/#industries-section" },
    { name: "Quy trình", href: "/#process-section" },
    { name: "Dự án", href: "/#case-studies-section" },
    { name: "Bảo mật", href: "/#security-section" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 group whitespace-nowrap"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-sm shrink-0">
            <Zap className="text-white w-4 h-4" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            Nhat<span className="text-brand-600">Soft</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13.5px] font-medium text-slate-600 tracking-tight">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-brand-600 transition-colors py-1 whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Dual Actions & Operational Status */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-full font-mono text-[11px] text-slate-600 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span>Hệ thống: Ổn định</span>
          </div>

          <Link
            href="/#contact-section"
            className="hidden sm:inline-flex items-center justify-center text-[13.5px] font-medium text-slate-700 hover:text-brand-600 px-2 transition-colors whitespace-nowrap"
          >
            Liên hệ
          </Link>

          <Link
            href="/#contact-section"
            className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white text-[13.5px] font-semibold px-4 py-2 rounded-lg transition-all shadow-sm shadow-blue-500/20 hover:shadow-md hover:shadow-blue-500/25 gap-1.5 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Tư vấn miễn phí</span>
            <span className="sm:hidden">Tư vấn</span>
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-md text-slate-600 hover:bg-slate-50 hover:text-brand-600 transition-all ml-1 shrink-0"
          >
            <span className="material-symbols-outlined text-[24px]">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full left-0">
          <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[15px] font-medium text-slate-700 hover:text-brand-600 px-2 py-1.5 rounded-md hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-6 mt-2 border-t border-slate-100 flex flex-col gap-3 px-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-lg font-mono text-[11px] text-slate-600 justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Hệ thống: Bình thường • v2.4</span>
              </div>

              <a
                href="tel:0937120121"
                className="flex items-center justify-center gap-2 py-3 bg-slate-50 rounded-lg font-semibold text-slate-900 text-[14px] border border-slate-200"
              >
                <span className="material-symbols-outlined text-[18px] text-slate-500">
                  call
                </span>
                (+84) 0937 120 121
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
