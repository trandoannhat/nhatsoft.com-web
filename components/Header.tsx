"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap, ExternalLink, PhoneCall, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
            <Zap className="text-white w-4 h-4" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            Nhat<span className="text-indigo-600">Soft</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <Link
            href="/#products"
            className="hover:text-slate-900 transition-colors"
          >
            Sản phẩm
          </Link>
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Hệ sinh thái
          </Link>
          <a
            href="https://nhatdev.top"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
          >
            Tech Blog <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:0937120121"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-slate-400" />
            0937 120 121
          </a>

          <Link
            href="https://app.nhatsoft.com/register"
            className="bg-slate-900 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-slate-800 transition-all shadow-sm"
          >
            Dùng thử Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-50 transition-all"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full left-0">
          <div className="px-4 py-6 space-y-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/#products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-900 px-2"
              >
                Sản phẩm
              </Link>
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-900 px-2"
              >
                Hệ sinh thái
              </Link>
              <a
                href="https://nhatdev.top"
                className="text-base font-medium text-slate-900 flex items-center gap-2 px-2"
              >
                Tech Blog <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </nav>
            <div className="pt-6 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:0937120121"
                className="flex items-center justify-center gap-2 py-2.5 bg-slate-50 rounded-lg font-medium text-slate-900 text-sm"
              >
                <PhoneCall className="w-4 h-4 text-slate-500" />
                0937 120 121
              </a>
              <Link
                href="/#products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-2.5 text-center bg-slate-900 text-white rounded-lg font-medium text-sm shadow-sm"
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
