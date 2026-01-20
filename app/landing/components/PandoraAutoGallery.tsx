"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type GalleryImage = { id: string; url: string; alt?: string; caption?: string };

type Meta = {
  id: string;
  url: string;
  alt?: string;
  caption?: string;
  w: number;
  h: number;
  ratio: number;
};

type Props = {
  images: GalleryImage[];
  className?: string;

  rowHeight?: number;
  minRowHeight?: number;
  maxRowHeight?: number;

  gap?: number;
  panelCapacity?: number;
};

function clamp(n: number, a: number, b: number) {
  return Math.min(Math.max(n, a), b);
}

export default function PandoraAutoGallery({
  images,
  className = "",
  rowHeight = 190,
  minRowHeight = 150,
  maxRowHeight = 240,
  gap = 12,
  panelCapacity = 9,
}: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [metas, setMetas] = useState<Meta[]>([]);
  const [dragging, setDragging] = useState(false);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Load image sizes
  useEffect(() => {
    let cancelled = false;

    async function loadAll() {
      const res: Meta[] = [];

      await Promise?.all(
        images?.map(
          (img) =>
            new Promise<void>((resolve) => {
              const im = new Image();
              im.onload = () => {
                const w = im.naturalWidth || 1;
                const h = im.naturalHeight || 1;
                res.push({
                  id: img.id,
                  url: img.url,
                  alt: img.alt,
                  caption: img.caption,
                  w,
                  h,
                  ratio: w / h,
                });
                resolve();
              };
              im.onerror = () => resolve();
              im.src = img.url;
            })
        )
      );

      if (cancelled) return;

      const map = new Map(res.map((m) => [m.id, m]));
      const ordered = images
        .map((i) => map.get(i.id))
        .filter(Boolean) as Meta[];
      setMetas(ordered);
    }

    loadAll();
    return () => {
      cancelled = true;
    };
  }, [images]);

  // Split panels for horizontal “Pandora” scroll
  const panels = useMemo(() => {
    if (!metas.length) return [];
    const out: Meta[][] = [];
    const cap = Math.max(3, panelCapacity);
    for (let i = 0; i < metas.length; i += cap)
      out.push(metas.slice(i, i + cap));
    return out;
  }, [metas, panelCapacity]);

  // Drag-to-scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let startX = 0;
    let startScroll = 0;
    let down = false;

    const onDown = (e: PointerEvent) => {
      down = true;
      setDragging(true);
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.setPointerCapture?.(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      el.scrollLeft = startScroll - (e.clientX - startX);
    };
    const onUp = () => {
      down = false;
      setDragging(false);
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, []);

  const scrollBy = (dx: number) => {
    scrollerRef.current?.scrollBy({ left: dx, behavior: "smooth" });
  };

  // Open lightbox by id
  const openLightbox = (id: string) => {
    const i = metas.findIndex((m) => m.id === id);
    setActiveIndex(i >= 0 ? i : 0);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(metas.length - 1, i + 1));

  // Keyboard controls in lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, metas.length]);

  // Prevent body scroll while lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  if (!images?.length) return null;

  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div
            ref={scrollerRef}
            className={[
              "overflow-x-auto overflow-y-hidden rounded-2xl",
              "select-none",
              dragging ? "cursor-grabbing" : "cursor-grab",
              "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
            ].join(" ")}
            style={{ touchAction: "pan-y" }}
          >
            <div className="flex items-stretch" style={{ gap }}>
              {panels.map((panel, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[92vw] sm:w-[680px] md:w-[860px] lg:w-[980px]"
                >
                  <JustifiedPanel
                    images={panel}
                    gap={gap}
                    rowHeight={rowHeight}
                    minRowHeight={minRowHeight}
                    maxRowHeight={maxRowHeight}
                    onImageClick={(id) => openLightbox(id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          {panels.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => scrollBy(-560)}
                className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 shadow border border-slate-200 flex items-center justify-center hover:bg-white"
                aria-label="Scroll left"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => scrollBy(560)}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 shadow border border-slate-200 flex items-center justify-center hover:bg-white"
                aria-label="Scroll right"
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && metas[activeIndex] && (
        <Lightbox
          item={metas[activeIndex]}
          index={activeIndex}
          total={metas.length}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
          canPrev={activeIndex > 0}
          canNext={activeIndex < metas.length - 1}
        />
      )}
    </section>
  );
}

function JustifiedPanel({
  images,
  gap,
  rowHeight,
  minRowHeight,
  maxRowHeight,
  onImageClick,
}: {
  images: Meta[];
  gap: number;
  rowHeight: number;
  minRowHeight: number;
  maxRowHeight: number;
  onImageClick: (id: string) => void;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(900);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth || 900);

    return () => ro.disconnect();
  }, []);

  const rows = useMemo(() => {
    return buildJustifiedRows(
      images,
      width,
      gap,
      rowHeight,
      minRowHeight,
      maxRowHeight
    );
  }, [images, width, gap, rowHeight, minRowHeight, maxRowHeight]);

  return (
    <div ref={panelRef} className="rounded-2xl bg-white p-3 sm:p-4">
      <div className="space-y-3" style={{ rowGap: gap }}>
        {rows.map((row, i) => (
          <div key={i} className="flex" style={{ gap }}>
            {row.items.map((it) => (
              <button
                key={it.id}
                type="button"
                onClick={() => onImageClick(it.id)}
                className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm"
                style={{ width: it.displayW, height: it.displayH }}
                aria-label={it.alt ?? it.caption ?? "Open image"}
              >
                <img
                  src={it.url}
                  alt={it.alt ?? "Gallery image"}
                  className="h-full w-full object-cover object-center"
                  draggable={false}
                  loading="lazy"
                />
                {/* hover overlay */}
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />
                {/* caption small */}
                {(it.caption || it.alt) && (
                  <div className="pointer-events-none absolute bottom-2 left-2 right-2 hidden sm:block">
                    <div className="inline-flex max-w-full rounded-full bg-black/55 px-3 py-1 text-[11px] text-white/90 backdrop-blur">
                      <span className="truncate">{it.caption ?? it.alt}</span>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function buildJustifiedRows(
  images: Meta[],
  containerW: number,
  gap: number,
  targetH: number,
  minH: number,
  maxH: number
) {
  type RowItem = Meta & { displayW: number; displayH: number };
  type Row = { items: RowItem[]; h: number };

  const rows: Row[] = [];
  let current: Meta[] = [];
  let sumRatio = 0;

  const addRow = (imgs: Meta[], sumR: number, isLast = false) => {
    const gaps = gap * Math.max(0, imgs.length - 1);
    const usableW = Math.max(1, containerW - gaps);

    let h = usableW / sumR;
    if (isLast) h = clamp(h, minH, targetH);
    h = clamp(h, minH, maxH);

    const items: RowItem[] = imgs.map((m) => ({
      ...m,
      displayH: Math.round(h),
      displayW: Math.round(h * m.ratio),
    }));

    const totalW = items.reduce((a, b) => a + b.displayW, 0) + gaps;
    const diff = Math.round(containerW - totalW);
    if (items.length && Math.abs(diff) <= 30) {
      items[items.length - 1].displayW += diff;
    }

    rows.push({ items, h });
  };

  for (const img of images) {
    current.push(img);
    sumRatio += img.ratio;

    const gaps = gap * Math.max(0, current.length - 1);
    const usableW = Math.max(1, containerW - gaps);
    const computedH = usableW / sumRatio;

    if (computedH <= targetH) {
      addRow(current, sumRatio, false);
      current = [];
      sumRatio = 0;
    }
  }

  if (current.length) addRow(current, sumRatio, true);

  return rows;
}

function Lightbox({
  item,
  index,
  total,
  onClose,
  onPrev,
  onNext,
  canPrev,
  canNext,
}: {
  item: Meta;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
}) {
  const caption = item.caption ?? item.alt ?? "";

  // Download helper: force download via <a download>
  const download = () => {
    const a = document.createElement("a");
    a.href = item.url;
    a.download = `image-${item.id}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className="fixed inset-0 z-[80]">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* content */}
      <div className="relative z-[81] mx-auto flex h-full max-w-6xl flex-col px-4 py-4">
        {/* top bar */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="text-xs text-white/80">
            {index + 1}/{total}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={download}
              className="rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
            >
              Xem ảnh gốc
            </button>

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
            >
              Đóng
            </button>
          </div>
        </div>

        {/* image stage */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl bg-black/30">
          <img
            src={item.url}
            alt={item.alt ?? "Preview"}
            className="max-h-[80vh] w-auto max-w-full object-contain"
            draggable={false}
          />

          {/* prev/next */}
          <button
            type="button"
            onClick={onPrev}
            disabled={!canPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 text-white text-2xl leading-none hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!canNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 text-white text-2xl leading-none hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* caption */}
        {caption && (
          <div className="mt-3 text-center text-sm text-white/85">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
