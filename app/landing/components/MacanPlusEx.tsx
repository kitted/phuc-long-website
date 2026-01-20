"use client";

import React from "react";

export default function MacanPlusEx() {
  return (
    <section className="relative overflow-hidden mt-5">
      {/* ✅ FULL background for entire hero */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dkxb7klnn/image/upload/v1768917325/Gemini_Generated_Image_1f0p941f0p941f0p_jvgvmg.png"
          alt="Workshop background"
          className="h-full w-full object-cover object-center"
        />

        {/* Premium overlays */}
        <div className="absolute inset-0 bg-black/-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.14),transparent_55%),radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.35),transparent_35%,rgba(15,23,42,0.55))]" />
      </div>

      {/* ✅ CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:py-12 lg:py-16">
        {/* Product overlay area */}
        <div className="relative mx-auto flex items-center justify-center">
          {/* responsive stage height */}
          <div className="relative h-[120px] sm:h-[380px] md:h-[440px] lg:h-[520px] w-full">
            <img
              src="https://res.cloudinary.com/dkxb7klnn/image/upload/c_crop,w_900,h_360,g_center/v1768911953/Logo_1_my2huh.png"
              alt="PlusEx PhucLong"
              className="
    absolute inset-0
    h-full w-full
    object-cover        /* ✅ giống header */
    object-center
    scale-[0.5] sm:scale-[0.5] md:scale-[0.15] lg:scale-[0.5]
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
