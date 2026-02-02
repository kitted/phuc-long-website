"use client";

import React, { useEffect, useMemo, useState } from "react";

type ContactItem = {
  label: string;
  href?: string;
};

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

function CountdownPill({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-black/10 bg-black/5 px-3 py-2">
      <div className="text-lg font-extrabold text-black">{value}</div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/60">
        {label}
      </div>
    </div>
  );
}

export default function ContactBarUI() {
  const contacts: ContactItem[] = [
    {
      label: "@FB/DAUNHOTPHUTUNGPHUCLONG",
      href: "https://www.facebook.com/daunhotphutungPHUCLONG",
    },
    {
      label: "@ZALO/093 944 98 61",
      href: "https://zalo.me/0939449861",
    },
    {
      label: "GMAIL: PHUCLONGLINK@GMAIL.COM",
      href: "mailto:phuclonglink@gmail.com",
    },
  ];

  // ⏳ Countdown target
  const target = useMemo(() => new Date(2026, 1, 26, 23, 59, 59), []);
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(target));

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(calcTimeLeft(target)), 1000);
    return () => clearInterval(t);
  }, [target]);

  const isEnded = timeLeft.totalMs <= 0;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="rounded-sm bg-white px-6 py-8">
          {/* Top CTA */}
          <div className="flex justify-center">
            <a
              href="https://zalo.me/0939449861"
              className="
                inline-flex items-center justify-center
                rounded-full
                bg-emerald-600
                px-10 py-4
                text-center text-lg font-bold uppercase tracking-wide
                text-white
                shadow-lg
                transition
                hover:bg-emerald-700
                hover:scale-[1.03]
                active:scale-95
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-600
                focus-visible:ring-offset-2
              "
              aria-label="Liên hệ đặt hàng ngay qua Zalo"
            >
              LIÊN HỆ ĐẶT HÀNG NGAY
            </a>
          </div>

          {/* ⏳ Countdown block */}
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-xl rounded-3xl border border-black/10 bg-black/5 p-4">
              <div className="mb-3 text-center">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-black/60">
                  Ưu đãi ra mắt
                </div>
                <div className="mt-1 text-sm font-semibold text-black">
                  {isEnded ? "Sự kiện đã kết thúc" : "Mua 2 tặng 1 – Còn lại"}
                </div>
              </div>

              {!isEnded && (
                <div className="grid grid-cols-4 gap-2">
                  <CountdownPill label="Ngày" value={timeLeft.days} />
                  <CountdownPill label="Giờ" value={pad2(timeLeft.hours)} />
                  <CountdownPill label="Phút" value={pad2(timeLeft.minutes)} />
                  <CountdownPill label="Giây" value={pad2(timeLeft.seconds)} />
                </div>
              )}
            </div>
          </div>

          {/* Contact pills */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {contacts.map((c) => {
              const style = c.label.startsWith("@FB")
                ? "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600"
                : c.label.startsWith("@ZALO")
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-600"
                  : "bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-500";

              return (
                <a
                  key={c.label}
                  href={c.href}
                  className={[
                    "mx-auto inline-flex w-full max-w-md items-center justify-center",
                    "rounded-full px-4 py-3",
                    "text-center text-sm font-semibold uppercase tracking-wide",
                    "shadow-md transition",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                    style,
                  ].join(" ")}
                >
                  {c.label}
                </a>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-10 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-black">
              WWW.PHUTUNGDAUNHOT.COM
            </div>
            <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-black">
              © 2026 PLUSEX PHUC LONG X MACAN INC.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
