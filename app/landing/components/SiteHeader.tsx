"use client";

import React, { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; href: string; active?: boolean };

const nav: NavItem[] = [
  { label: "TRANG CHỦ", href: "/home" },
  { label: "GIỚI THIỆU", href: "/about" },
  { label: "SẢN PHẨM", href: "/product" },
  { label: "LIÊN HỆ", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const navItems = useMemo(() => nav, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="w-full bg-white">
      {/* ✅ giảm chiều cao bằng min-h + py nhỏ */}
      <div className="mx-auto flex min-h-[56px] max-w-6xl items-center justify-between px-4 py-2">
        {/* Logo */}
        <a href="/home" className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dkxb7klnn/image/upload/v1768911953/Logo_1_my2huh.png"
            alt="PLUSEx Phúc Long"
            className="
    h-[56px]        /* mobile */
    sm:h-[64px]
    md:h-[72px]
    lg:h-[80px]   /* PC */
    w-[180px]      /* 🔴 PHẢI có width để crop */
    object-cover   /* ✅ crop */
    object-center
  "
          />

          {/* <div className="hidden sm:block leading-tight">
            <div className="text-[11px] text-slate-500">phutungdaunhot.com</div>
          </div> */}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://zalo.me/0939449861"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[15px] font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
          >
            ĐẶT HÀNG NGAY
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          {/* ✅ nút thấp hơn */}
          <a
            href="https://zalo.me/0939449861"
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[10px] font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
          >
            ĐẶT HÀNG NGAY
          </a>

          {/* ✅ icon nhỏ hơn */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50"
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-1">
              <span className="h-0.5 w-4 bg-slate-800" />
              <span className="h-0.5 w-4 bg-slate-800" />
              <span className="h-0.5 w-4 bg-slate-800" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown (giữ như cũ nếu anh đang dùng) */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"}`}
      >
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setOpen(false)}
        />
        <div className="fixed left-0 right-0 top-0 z-50 bg-white shadow-lg">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="text-sm font-extrabold tracking-wide text-slate-900">
                MENU
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-[15px] font-semibold text-slate-800 hover:bg-slate-50"
              >
                Đóng
              </button>
            </div>

            <div className="mt-3 space-y-1 pb-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
