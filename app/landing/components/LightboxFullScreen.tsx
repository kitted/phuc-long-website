"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  open: boolean;
  src: string;
  alt?: string;
  caption?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  canPrev?: boolean;
  canNext?: boolean;
  onDownload?: () => void;
};

export default function LightboxFullScreen({
  open,
  src,
  alt,
  caption,
  onClose,
  onPrev,
  onNext,
  canPrev = true,
  canNext = true,
  onDownload,
}: Props) {
  const [zoom, setZoom] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    // lock scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, onPrev, onNext]);

  useEffect(() => {
    if (!open) return;
    setZoom(false);
  }, [open, src]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90]">
      {/* Backdrop (click to close) */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/80"
      />

      {/* Top bar */}
      <div className="absolute left-0 right-0 top-0 z-[91]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="text-xs text-white/80">{caption ?? ""}</div>

          <div className="flex items-center gap-2">
            {onDownload && (
              <button
                type="button"
                onClick={onDownload}
                className="rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
              >
                Download
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/15"
              aria-label="Close"
              title="Đóng (Esc)"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* Stage */}
      <div
        ref={stageRef}
        className="relative z-[91] mx-auto flex h-full max-w-6xl items-center justify-center px-4"
      >
        <div className="relative w-full">
          <img
            src={src}
            alt={alt ?? "Preview"}
            draggable={false}
            onDoubleClick={() => setZoom((z) => !z)}
            className={[
              "mx-auto max-h-[86vh] max-w-full",
              zoom ? "cursor-zoom-out" : "cursor-zoom-in",
              zoom ? "scale-[1.35] sm:scale-[1.5]" : "scale-100",
              "transition-transform duration-200 ease-out",
              "object-contain",
            ].join(" ")}
          />

          {/* Prev/Next */}
          {onPrev && (
            <button
              type="button"
              onClick={onPrev}
              disabled={!canPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white text-2xl hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous"
              title="Trước (←)"
            >
              ‹
            </button>
          )}

          {onNext && (
            <button
              type="button"
              onClick={onNext}
              disabled={!canNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white text-2xl hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next"
              title="Sau (→)"
            >
              ›
            </button>
          )}
        </div>
      </div>

      {/* Bottom caption (mobile friendly) */}
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 z-[91] px-4 pb-4">
          <div className="mx-auto max-w-6xl rounded-2xl bg-white/10 px-4 py-3 text-center text-sm text-white/90 backdrop-blur">
            {caption}
          </div>
        </div>
      )}
    </div>
  );
}
