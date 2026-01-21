"use client";

import React, { useEffect, useMemo, useState } from "react";

/* ===================== Utils ===================== */

type TimeLeft = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function calcTimeLeft(target: Date): TimeLeft {
  const now = new Date();
  const totalMs = Math.max(0, target.getTime() - now.getTime());
  const totalSec = Math.floor(totalMs / 1000);

  return {
    totalMs,
    days: Math.floor(totalSec / (3600 * 24)),
    hours: Math.floor((totalSec % (3600 * 24)) / 3600),
    minutes: Math.floor((totalSec % 3600) / 60),
    seconds: totalSec % 60,
  };
}

/* ===================== Small UI ===================== */

function CountdownPill({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur">
      <div className="text-xl font-extrabold text-white">{value}</div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
        {label}
      </div>
    </div>
  );
}

/* ===================== Event Modal ===================== */

function EventModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  /* ESC close */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  /* Lock body scroll */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-label="Đóng popup"
      />

      {/* Modal wrapper */}
      <div
        className="
          relative z-[81]
          mx-auto flex
          min-h-[100svh]
          max-w-3xl
          items-center
          px-4
          py-6 sm:py-10
        "
      >
        <div className="w-full rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                Ưu đãi ra mắt
              </div>
              <h3 className="mt-1 text-xl font-extrabold text-white">
                🎁 EVENT ƯU ĐÃI RA MẮT
              </h3>
            </div>

            <button
              onClick={onClose}
              className="h-10 w-10 rounded-full border border-white/10 bg-white/10 text-white hover:bg-white/20"
              aria-label="Đóng"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div
            className="
              max-h-[calc(100svh-160px)]
              overflow-y-auto
              overscroll-contain
              px-5 py-5 sm:px-6
              text-white/90
            "
          >
            <div className="space-y-4 rounded-2xl bg-white/5 p-4">
              <p className="text-sm leading-6">
                📦 <b>Mua 2 hộp BỐ THẮNG ĐĨA MACAN iNC</b>
                <br />
                (👉 1 hộp = 10 cặp)
              </p>

              <div className="rounded-xl bg-black/20 p-4">
                <b>🎁 TẶNG NGAY:</b>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>🛢️ 01 chai nhớt tay ga</li>
                  <li>💰 Giá ưu đãi đặc biệt cho khách hàng mua sớm</li>
                </ul>
              </div>

              <div className="text-sm">
                👉 Vừa có bố thắng bán đều
                <br />
                👉 Vừa có nhớt kèm để lời thêm
              </div>

              <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-3 text-sm text-amber-100">
                ⚠️ Số lượng có hạn – ưu tiên đơn sớm
              </div>
            </div>

            <a
              href="https://zalo.me/0939449861"
              className="
                mt-5 inline-flex w-full items-center justify-center
                rounded-full bg-emerald-600 px-6 py-3
                text-sm font-extrabold uppercase tracking-wide text-white
                shadow-lg transition
                hover:bg-emerald-700 hover:scale-[1.02]
                active:scale-95
              "
            >
              Liên hệ đặt hàng (Zalo)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== Hero ===================== */

export default function HeroMacan({
  title = "MACAN",
  subtitle = "BRAKE PADS",
}: {
  title?: string;
  subtitle?: string;
}) {
  const target = useMemo(() => new Date(2026, 0, 26, 23, 59, 59), []);

  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(target));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(calcTimeLeft(target)), 1000);
    return () => clearInterval(t);
  }, [target]);

  return (
    <section className="relative overflow-hidden">
      {/* ✅ Background – KHÔNG ĂN CLICK */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://res.cloudinary.com/dkxb7klnn/image/upload/v1768914366/Gemini_Generated_Image_acl0u7acl0u7acl0_ukihbv.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ✅ CONTENT – CLICK ĐƯỢC */}
      <div className="relative z-20 pointer-events-auto mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-[0.2em] text-white">
            {title}
          </h1>
          <div className="mt-1 text-sm font-semibold tracking-[0.3em] text-white/70">
            {subtitle}
          </div>

          {/* Promo */}
          <div className="mt-4 inline-flex items-center gap-3 rounded-full bg-amber-400/15 px-5 py-2 text-sm font-bold uppercase text-amber-100">
            Ưu Đãi Lớn Ra Mắt Sản Phẩm Mới Mua 2 Tặng 1
          </div>

          {/* Countdown */}
          <div className="mx-auto mt-5 max-w-xl rounded-3xl bg-white/5 p-4 backdrop-blur">
            <div className="grid grid-cols-4 gap-2">
              <CountdownPill label="Ngày" value={timeLeft.days} />
              <CountdownPill label="Giờ" value={pad2(timeLeft.hours)} />
              <CountdownPill label="Phút" value={pad2(timeLeft.minutes)} />
              <CountdownPill label="Giây" value={pad2(timeLeft.seconds)} />
            </div>

            <button
              onClick={() => setOpen(true)}
              className="
                mt-4 inline-flex items-center justify-center
                rounded-full bg-emerald-600 px-6 py-3
                text-sm font-extrabold uppercase text-white
                hover:bg-emerald-700
              "
            >
              Xem chi tiết event
            </button>
          </div>
        </div>
      </div>
      <>
        {/* Product overlay area */}
        <div className="relative mx-auto flex items-center justify-center">
          <div className="relative h-[320px] sm:h-[380px] md:h-[440px] lg:h-[520px] w-full">
            <img
              src="https://res.cloudinary.com/dkxb7klnn/image/upload/v1768466459/7_jazgxy.png"
              alt="Macan brake pads product"
              className="
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[92%] sm:w-[82%] md:w-[72%] lg:w-[66%]
                max-w-[760px]
                h-auto
                object-contain
                scale-[2] sm:scale-[2] md:scale-[2] lg:scale-[2]
                drop-shadow-[0_28px_55px_rgba(0,0,0,0.55)]
              "
            />
            <div className="pointer-events-none absolute left-1/2 top-[68%] h-24 w-[70%] -translate-x-1/2 rounded-full bg-white/15 blur-2xl sm:h-28 sm:w-[62%]" />
          </div>
        </div>

        {/* Divider */}
        <div className="relative z-10 border-t border-white/10" />
      </>
      {/* Popup */}
      <EventModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
