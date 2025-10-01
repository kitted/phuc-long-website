"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  animate,
  AnimatePresence,
} from "framer-motion";
import { Phone, Facebook, X } from "lucide-react";

const BUTTON_SIZE = 64;
const EDGE_MARGIN = 20;

export default function FloatingAssistant() {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [open, setOpen] = useState(false);
  const [onLeftSide, setOnLeftSide] = useState(true);

  const wasDraggedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // đặt vị trí ban đầu: góc phải dưới
  useEffect(() => {
    const placeInitial = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const initLeft = w - BUTTON_SIZE - EDGE_MARGIN;
      const initTop = h - BUTTON_SIZE - 140;

      setLeft(initLeft);
      setTop(initTop);
      setOnLeftSide(false);
    };

    placeInitial();
    window.addEventListener("resize", placeInitial);
    return () => window.removeEventListener("resize", placeInitial);
  }, []);

  // đóng menu khi click ra ngoài
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleDragStart = () => {
    wasDraggedRef.current = true;
  };

  const handleDragEnd = () => {
    const deltaX = x.get();
    const deltaY = y.get();

    const newLeft = left + deltaX;
    const newTop = top + deltaY;

    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    const btnCenter = newLeft + BUTTON_SIZE / 2;
    const snapToLeft = btnCenter < screenW / 2;

    const targetLeft = snapToLeft
      ? EDGE_MARGIN
      : screenW - BUTTON_SIZE - EDGE_MARGIN;
    const targetTop = Math.min(
      Math.max(newTop, EDGE_MARGIN),
      screenH - BUTTON_SIZE - EDGE_MARGIN
    );

    setOnLeftSide(snapToLeft);

    animate(x, targetLeft - left, {
      type: "spring",
      stiffness: 350,
      damping: 30,
      onComplete() {
        setLeft(targetLeft);
        x.set(0);
      },
    });

    animate(y, targetTop - top, {
      type: "spring",
      stiffness: 350,
      damping: 30,
      onComplete() {
        setTop(targetTop);
        y.set(0);
        setTimeout(() => {
          wasDraggedRef.current = false;
        }, 50);
      },
    });
  };

  const handleToggle = () => {
    if (wasDraggedRef.current) return;
    setOpen((s) => !s);
  };

  const subButtons = [
    {
      key: "fb",
      href: "https://facebook.com",
      label: "Facebook",
      bg: "bg-blue-600",
      icon: <Facebook size={18} className="text-white" />,
    },
    {
      key: "zalo",
      href: "https://zalo.me",
      label: "Zalo",
      bg: "bg-white",
      icon: <img src="/zalo.png" alt="Zalo" className="w-8 h-5" />,
    },
    {
      key: "phone",
      href: "tel:0123456789",
      label: "Gọi",
      bg: "bg-green-500",
      icon: <Phone size={18} className="text-white" />,
    },
  ];

  const getOffsets = (index: number) => {
    const distance = 72;
    if (index === 0) return { x: 0, y: -distance };
    if (index === 1)
      return onLeftSide ? { x: distance, y: 0 } : { x: -distance, y: 0 };
    if (index === 2) return { x: 0, y: distance };
    return { x: 0, y: 0 };
  };

  return (
    <div ref={containerRef}>
      <motion.div
        drag
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{
          x,
          y,
          position: "fixed",
          left,
          top,
          width: BUTTON_SIZE,
          height: BUTTON_SIZE,
          zIndex: 9999,
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Sub buttons */}
          <AnimatePresence>
            {open &&
              subButtons.map((b, i) => {
                const offset = getOffsets(i);
                return (
                  <motion.a
                    key={b.key}
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    layout
                    initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                    animate={{ opacity: 1, scale: 1, x: offset.x, y: offset.y }}
                    exit={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      delay: i * 0.08,
                    }}
                    className={`absolute w-12 h-12 ${b.bg} rounded-full shadow-md flex items-center justify-center`}
                  >
                    {b.icon}
                  </motion.a>
                );
              })}
          </AnimatePresence>

          {/* Main button */}
          <motion.button
            onClick={handleToggle}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 rounded-full shadow-xl flex items-center justify-center bg-sky-500"
          >
            {open ? (
              <X size={28} className="text-white" />
            ) : (
              <Phone size={28} className="text-white" />
            )}
          </motion.button>
        </div>
        <></>
      </motion.div>
    </div>
  );
}
