"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type SpecRow = { label: string; value: string };

export type ProductSpecSlide = {
  id: string;
  imageUrl: string;
  imageAlt?: string;
  heading: string;
  productTitle?: string;
  productSubtitle?: string;
  description?: string;
  specs: SpecRow[];
};

type Props = {
  slides: ProductSpecSlide[];
  className?: string;
  initialIndex?: number;
};

export default function ProductSpecSlider({
  slides,
  className = "",
  initialIndex = 0,
}: Props) {
  const safeSlides = useMemo(() => slides ?? [], [slides]);
  const count = safeSlides.length;

  const [index, setIndex] = useState(() =>
    Math.min(Math.max(initialIndex, 0), Math.max(count - 1, 0))
  );
  const [openModal, setOpenModal] = useState(false);

  const viewportRef = useRef<HTMLDivElement | null>(null);

  // ✅ intent-based swipe (fix mobile scroll)
  const pid = useRef<number | null>(null);
  const sx = useRef(0);
  const sy = useRef(0);
  const dx = useRef(0);
  const dy = useRef(0);
  const dragActive = useRef(false);

  const [dragX, setDragX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const clampIndex = (i: number) => {
    if (count === 0) return 0;
    return Math.min(Math.max(i, 0), count - 1);
  };

  const goTo = (i: number) => {
    setIsAnimating(true);
    setDragX(0);
    setIndex(clampIndex(i));
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const getViewportWidth = () => viewportRef.current?.clientWidth ?? 1;

  // Keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openModal) {
        if (e.key === "Escape") setOpenModal(false);
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
        return;
      }
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, openModal]);

  // lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (count <= 1 || openModal) return;

    // ✅ click on image should not start swipe
    const target = e.target as HTMLElement;
    if (target.closest("[data-no-drag='true']")) return;

    pid.current = e.pointerId;
    sx.current = e.clientX;
    sy.current = e.clientY;
    dx.current = 0;
    dy.current = 0;
    dragActive.current = false;

    // ✅ IMPORTANT: do NOT change animation on pointer down
    // only change AFTER detecting horizontal intent
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (pid.current == null) return;

    const ddx = e.clientX - sx.current;
    const ddy = e.clientY - sy.current;
    dx.current = ddx;
    dy.current = ddy;

    const ax = Math.abs(ddx);
    const ay = Math.abs(ddy);

    // ✅ detect intent
    if (!dragActive.current) {
      // vertical scroll intent -> cancel tracking, let browser scroll
      if (ay > ax && ay > 8) {
        pid.current = null;
        return;
      }

      // horizontal swipe intent -> activate drag
      if (ax > ay && ax > 8) {
        dragActive.current = true;
        setIsAnimating(false);
        (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
      } else {
        return;
      }
    }

    // active drag
    setDragX(ddx);
  };

  const endDrag = () => {
    if (pid.current == null) return;

    const wasActive = dragActive.current;
    pid.current = null;
    dragActive.current = false;

    if (!wasActive) return;

    const width = getViewportWidth();
    const threshold = Math.max(60, width * 0.18);
    const ddx = dx.current;

    setIsAnimating(true);
    setDragX(0);

    if (ddx > threshold) return prev();
    if (ddx < -threshold) return next();

    goTo(index);
  };

  if (count === 0) return null;

  const activeSlide = safeSlides[index];

  return (
    <>
      <section className={`w-full ${className}`}>
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative">
            <div
              ref={viewportRef}
              className="relative overflow-hidden rounded-2xl bg-white"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              // ✅ allow vertical scroll + pinch zoom
              style={{ touchAction: "pan-y pinch-zoom" }}
            >
              <div
                className={[
                  "flex",
                  isAnimating
                    ? "transition-transform duration-300 ease-out"
                    : "",
                ].join(" ")}
                style={{
                  transform: `translateX(${
                    -index * getViewportWidth() + dragX
                  }px)`,
                }}
              >
                {safeSlides.map((s) => (
                  <Slide
                    key={s.id}
                    slide={s}
                    onImageClick={() => setOpenModal(true)}
                  />
                ))}
              </div>
            </div>

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  disabled={index === 0}
                  className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 shadow border border-slate-200 flex items-center justify-center hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Previous slide"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={next}
                  disabled={index === count - 1}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 shadow border border-slate-200 flex items-center justify-center hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Next slide"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {count > 1 && (
            <div className="mt-4 flex items-center justify-center gap-2">
              {safeSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goTo(i)}
                  className={[
                    "h-2.5 w-2.5 rounded-full",
                    i === index ? "bg-slate-900" : "bg-slate-300",
                  ].join(" ")}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ✅ Modal sync index + can swipe to change product */}
      <ProductDetailModal
        open={openModal}
        slide={activeSlide}
        index={index}
        count={count}
        onClose={() => setOpenModal(false)}
        onChangeIndex={(i) => goTo(i)} // ✅ key fix: modal controls index directly
      />
    </>
  );
}

function Slide({
  slide,
  onImageClick,
}: {
  slide: ProductSpecSlide;
  onImageClick: () => void;
}) {
  return (
    <div className="w-full flex-shrink-0">
      <div className="px-5 py-7 sm:px-10 sm:py-10">
        <div className="mx-auto flex justify-center">
          <button
            type="button"
            onClick={onImageClick}
            data-no-drag="true"
            className="group relative outline-none"
            aria-label="Open product detail"
          >
            <img
              src={slide.imageUrl}
              alt={slide.imageAlt ?? slide.heading}
              draggable={false}
              className="
                h-[230px] sm:h-[270px] md:h-[310px] lg:h-[350px]
                w-auto object-contain
                scale-[1.4] sm:scale-[1.45] md:scale-[1.5] lg:scale-[1.55]
                drop-shadow-[0_18px_35px_rgba(0,0,0,0.25)]
              "
            />
            <div className="mt-2 text-center text-[11px] font-semibold text-slate-500">
              Chạm để xem chi tiết
            </div>
          </button>
        </div>

        <h3 className="mt-5 text-center text-lg sm:text-xl font-extrabold tracking-[0.15em] text-slate-900">
          {slide.heading}
        </h3>

        {/* ✅ Mobile specs smaller */}
        <div className="mx-auto mt-7 max-w-3xl">
          <div className="space-y-2 md:hidden">
            {slide.specs.map((row) => (
              <div
                key={row.label}
                className="flex items-start justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/40 px-3 py-2"
              >
                <div className="text-[10px] font-semibold tracking-[0.12em] text-slate-900">
                  {row.label}
                </div>
                <div className="text-right text-[10px] font-semibold tracking-[0.10em] text-slate-800">
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop 2 columns */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-3">
            <div className="space-y-3">
              {slide.specs.map((row) => (
                <div
                  key={row.label}
                  className="text-[12px] font-semibold tracking-[0.15em] text-slate-900"
                >
                  {row.label}
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {slide.specs.map((row) => (
                <div
                  key={row.label}
                  className="text-[12px] font-semibold tracking-[0.15em] text-slate-900"
                >
                  {row.value}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4" />
      </div>
    </div>
  );
}

function ProductDetailModal({
  open,
  slide,
  index,
  count,
  onClose,
  onChangeIndex,
}: {
  open: boolean;
  slide?: ProductSpecSlide;
  index: number;
  count: number;
  onClose: () => void;
  onChangeIndex: (nextIndex: number) => void;
}) {
  const pid = useRef<number | null>(null);
  const sx = useRef(0);
  const sy = useRef(0);
  const dx = useRef(0);
  const active = useRef(false);

  const canPrev = index > 0;
  const canNext = index < count - 1;

  const onPrev = () => canPrev && onChangeIndex(index - 1);
  const onNext = () => canNext && onChangeIndex(index + 1);

  const onDown = (e: React.PointerEvent) => {
    pid.current = e.pointerId;
    sx.current = e.clientX;
    sy.current = e.clientY;
    dx.current = 0;
    active.current = false;
  };

  const onMove = (e: React.PointerEvent) => {
    if (pid.current == null) return;

    const ddx = e.clientX - sx.current;
    const ddy = e.clientY - sy.current;
    dx.current = ddx;

    const ax = Math.abs(ddx);
    const ay = Math.abs(ddy);

    if (!active.current) {
      if (ay > ax && ay > 10) {
        pid.current = null;
        return;
      }
      if (ax > ay && ax > 10) {
        active.current = true;
        (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
      } else return;
    }
  };

  const onUp = () => {
    if (pid.current == null) return;
    pid.current = null;

    if (!active.current) return;

    const threshold = 70;
    if (dx.current > threshold) onPrev();
    if (dx.current < -threshold) onNext();
  };

  if (!open || !slide) return null;

  return (
    <div className="fixed inset-0 z-[90]">
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
      />

      <div className="relative z-[91] mx-auto flex h-full max-w-5xl items-center px-4 py-6">
        <div
          className="
      w-full rounded-3xl bg-white shadow-2xl
      max-h-[88vh] overflow-hidden
    "
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div className="min-w-0">
              <div className="text-sm font-extrabold tracking-[0.15em] text-slate-900">
                {slide.productTitle ?? "CHI TIẾT SẢN PHẨM"}
              </div>
              {slide.productSubtitle && (
                <div className="mt-1 text-xs font-semibold text-slate-500">
                  {slide.productSubtitle}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="max-h-[88vh] overflow-y-auto overscroll-contain">
            <div className="grid gap-6 p-5 md:grid-cols-2 md:p-7">
              {/* ✅ swipe changes product + content updates immediately */}
              <div
                className="relative overflow-hidden rounded-2xl bg-slate-50"
                onPointerDown={onDown}
                onPointerMove={onMove}
                onPointerUp={onUp}
                onPointerCancel={onUp}
                style={{ touchAction: "pan-y pinch-zoom" }}
              >
                <div className="flex items-center justify-center p-4">
                  <img
                    src={slide.imageUrl}
                    alt={slide.imageAlt ?? slide.heading}
                    className="
                    h-[340px] sm:h-[440px] md:h-[520px]
                    w-full object-contain
                    scale-[1.45] sm:scale-[1.55] md:scale-[1.65]
                    drop-shadow-[0_28px_60px_rgba(0,0,0,0.18)]
                  "
                    draggable={false}
                  />
                </div>

                <button
                  type="button"
                  onClick={onPrev}
                  disabled={!canPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 shadow border border-slate-200 flex items-center justify-center hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Previous product"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  disabled={!canNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 shadow border border-slate-200 flex items-center justify-center hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Next product"
                >
                  ›
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-[11px] text-white/90">
                  Vuốt ngang để xem sản phẩm khác • {index + 1}/{count}
                </div>
              </div>

              <div>
                <div className="text-lg font-extrabold tracking-[0.15em] text-slate-900">
                  {slide.heading}
                </div>

                {slide.description && (
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {slide.description}
                  </p>
                )}

                <div className="mt-5 space-y-2">
                  {slide.specs.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-start justify-between gap-4 rounded-xl border border-slate-100 bg-white px-4 py-3"
                    >
                      <div className="text-[12px] font-semibold tracking-[0.15em] text-slate-900">
                        {row.label}
                      </div>
                      <div className="text-right text-[12px] font-semibold tracking-[0.15em] text-slate-800">
                        {row.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    Đóng
                  </button>

                  <a
                    href="#"
                    className="rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                  >
                    Đặt hàng / Nhận báo giá
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 px-5 py-3 text-center text-[11px] text-slate-500">
              Click nền đen để tắt • Nhấn <b>ESC</b> để đóng • Vuốt ngang để đổi
              sản phẩm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
