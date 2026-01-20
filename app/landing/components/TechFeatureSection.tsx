"use client";

import React from "react";

type Side = "left" | "right";

type TechFeatureSectionProps = {
  title: string;
  subtitle?: string;
  description?: string;

  bgImageUrl: string;
  productImageUrl: string;

  productSide?: Side; // PC only
  className?: string;

  productAlt?: string;
  bgAlt?: string;

  // optional: adjust stage height
  stageHeight?: {
    base?: string;
    sm?: string;
    md?: string;
    lg?: string;
  };

  // optional: make product bigger/smaller
  productScale?: {
    base?: string; // e.g. "scale-[1.08]"
    sm?: string;
    md?: string;
    lg?: string;
  };
};

export default function TechFeatureSection({
  title,
  subtitle,
  description,
  bgImageUrl,
  productImageUrl,
  productSide = "right",
  className = "",
  productAlt = "Product image",
  bgAlt = "Background image",
  stageHeight = {
    base: "h-[280px]",
    sm: "sm:h-[340px]",
    md: "md:h-[420px]",
    lg: "lg:h-[520px]",
  },
  productScale = {
    base: "scale-[1.10]",
    sm: "sm:scale-[1.12]",
    md: "md:scale-[1.15]",
    lg: "lg:scale-[1.18]",
  },
}: TechFeatureSectionProps) {
  // ✅ Mobile luôn: Image trước, Text sau
  // ✅ PC (md+) theo productSide: nếu productSide="left" => image trái, text phải
  const pcImageOrder = productSide === "left" ? "md:order-1" : "md:order-2";
  const pcTextOrder = productSide === "left" ? "md:order-2" : "md:order-1";

  return (
    <section className={`relative overflow-hidden bg-white ${className}`}>
      <div className="mx-auto max-w-6xl px-4  ">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* ✅ IMAGE FIRST on mobile */}
          <div className={`order-1 ${pcImageOrder}`}>
            <div
              className={[
                "relative w-full overflow-hidden rounded-2xl",
                stageHeight.base,
                stageHeight.sm,
                stageHeight.md,
                stageHeight.lg,
              ].join(" ")}
            >
              {/* Background */}
              <img
                src={bgImageUrl}
                alt={bgAlt}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Overlay nhẹ cho premium */}
              <div className="absolute inset-0 bg-white/35" />

              {/* ✅ Product bigger */}
              <img
                src={productImageUrl}
                alt={productAlt}
                className={[
                  "absolute left-1/2 top-1/2",
                  "-translate-x-1/2 -translate-y-1/2",
                  // bigger width
                  "w-[105%] sm:w-[102%] md:w-[98%] lg:w-[96%]",
                  "max-w-[980px]",
                  // crop to fill (đập mắt)
                  "h-full object-cover object-center",
                  // scale for extra size
                  productScale.base,
                  productScale.sm,
                  productScale.md,
                  productScale.lg,
                  "drop-shadow-[0_28px_60px_rgba(0,0,0,0.28)]",
                ].join(" ")}
              />

              {/* highlight */}
              <div className="pointer-events-none absolute left-1/2 top-[72%] h-24 w-[72%] -translate-x-1/2 rounded-full bg-black/10 blur-2xl sm:h-28 sm:w-[62%]" />
            </div>
          </div>

          {/* ✅ TEXT SECOND on mobile */}
          <div className={`order-2 ${pcTextOrder}`}>
            <h2 className="text-3xl font-extrabold tracking-[0.15em] text-slate-900">
              {title}
            </h2>

            {subtitle ? (
              <p className="mt-5 text-[18px] font-semibold tracking-[0.15em] text-slate-700">
                {subtitle}
              </p>
            ) : null}

            {description ? (
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
