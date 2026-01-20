"use client";

import React from "react";

type HeroMacanProps = {
  title?: string;
  subtitle?: string;
};

export default function HeroMacan({
  title = "MACAN",
  subtitle = "BRAKE PADS",
}: HeroMacanProps) {
  return (
    <section className="relative overflow-hidden">
      {/* ✅ FULL background for entire hero */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dkxb7klnn/image/upload/v1768914366/Gemini_Generated_Image_acl0u7acl0u7acl0_ukihbv.png"
          alt="Workshop background"
          className="h-full w-full object-cover object-center"
        />

        {/* Premium overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.14),transparent_55%),radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.35),transparent_35%,rgba(15,23,42,0.55))]" />
      </div>

      {/* ✅ CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:py-12 lg:py-16">
        {/* Headline */}
        <div className="mb-6 text-center">
          <div className="mx-auto inline-flex items-baseline gap-2">
            <h1 className="text-3xl font-extrabold tracking-[0.2em] text-white/90 drop-shadow">
              {title}
            </h1>
            <span className="text-sm font-semibold tracking-[0.3em] text-white/70 drop-shadow">
              {subtitle}
            </span>
          </div>
        </div>

        {/* Product overlay area */}
        <div className="relative mx-auto flex items-center justify-center">
          {/* responsive stage height */}
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
    scale-[3.15] sm:scale-[2.2] md:scale-[2.25] lg:scale-[2.3]  /* ✅ phóng to */
    drop-shadow-[0_28px_55px_rgba(0,0,0,0.55)]
  "
            />

            {/* highlight under product */}
            <div className="pointer-events-none absolute left-1/2 top-[68%] h-24 w-[70%] -translate-x-1/2 rounded-full bg-white/15 blur-2xl sm:h-28 sm:w-[62%]" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-white/10" />
    </section>
  );
}
