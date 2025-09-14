"use client";

import React, { useState, useEffect, useRef } from "react";

const items = [
  { id: 1, image: "/store/store.png", title: "ĐC: ABC/123/456" },
  { id: 2, image: "/store/store.png", title: "ĐC: ABC/123/456" },
  { id: 3, image: "/store/store.png", title: "ĐC: ABC/123/456" },
  { id: 4, image: "/store/store.png", title: "ĐC: ABC/123/456" },
  { id: 5, image: "/store/store.png", title: "ĐC: ABC/123/456" },
  { id: 6, image: "/store/store.png", title: "ĐC: ABC/123/456" },
  { id: 7, image: "/store/store.png", title: "ĐC: ABC/123/456" },
];

const ITEM_WIDTH = 220;

const StoreSlider = () => {
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const dragOffset = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [darkMode, setDarkMode] = useState(false);
  const moveToIndex = (newIndex: number) => {
    setIndex((newIndex + items.length) % items.length);
  };

  useEffect(() => {
    if (!dragging) {
      const timeout = setTimeout(() => moveToIndex(index + 1), 4000);
      return () => clearTimeout(timeout);
    }
  }, [index, dragging]);

  const handleDragStart = (x: number) => {
    setDragging(true);
    startX.current = x;
    dragOffset.current = 0;
  };

  const handleDragMove = (x: number) => {
    if (!dragging) return;
    dragOffset.current = x - startX.current;
  };

  const handleDragEnd = () => {
    if (!dragging) return;
    setDragging(false);

    if (dragOffset.current > ITEM_WIDTH / 2) {
      moveToIndex(index - 1);
    } else if (dragOffset.current < -ITEM_WIDTH / 2) {
      moveToIndex(index + 1);
    }

    dragOffset.current = 0;
  };

  const handleMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX);
  const handleTouchStart = (e: React.TouchEvent) =>
    handleDragStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    handleDragMove(e.touches[0].clientX);
  const handleTouchEnd = () => handleDragEnd();

  useEffect(() => {
    const handleMouseMoveWindow = (e: MouseEvent) => handleDragMove(e.clientX);
    const handleMouseUpWindow = () => handleDragEnd();

    window.addEventListener("mousemove", handleMouseMoveWindow);
    window.addEventListener("mouseup", handleMouseUpWindow);
    return () => {
      window.removeEventListener("mousemove", handleMouseMoveWindow);
      window.removeEventListener("mouseup", handleMouseUpWindow);
    };
  }, [dragging]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme === "dark");

    const handleThemeChange = () => {
      const newTheme = localStorage.getItem("theme");
      setDarkMode(newTheme === "dark");
    };

    window.addEventListener("themeChange", handleThemeChange);
    return () => window.removeEventListener("themeChange", handleThemeChange);
  }, []);

  const containerBg = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";

  return (
    <div
      className={`${containerBg} relative w-full flex justify-center items-center overflow-hidden`}
    >
      <div
        ref={sliderRef}
        className={`relative flex items-center justify-center w-[90%] h-[500px] cursor-grab ${
          dragging ? "cursor-grabbing" : ""
        }`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, i) => {
          let position = (i - index + items.length) % items.length;
          if (position > items.length / 2) position -= items.length;

          const distance = Math.abs(position);
          const translateX = position * ITEM_WIDTH + dragOffset.current;
          const scale = 1 - distance * 0.1;
          // const opacity = 1 - distance * 0.2;
          const zIndex = 10 - distance;

          return (
            <div
              key={item.id}
              className="absolute rounded-2xl overflow-hidden bg-black shadow-lg transition-transform duration-300 ease-out cursor-pointer"
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                // opacity,
                zIndex,
                width: 300,
                height: 400,
              }}
              onClick={() => moveToIndex(i)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-3 text-sm">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => moveToIndex(index - 1)}
        className={`absolute left-6 top-1/2 -translate-y-1/2 hover:bg-black/10 ${textColor} p-3 rounded-full`}
      >
        ‹
      </button>
      <button
        onClick={() => moveToIndex(index + 1)}
        className={`absolute right-6 top-1/2 -translate-y-1/2 hover:bg-black/10 ${textColor} p-3 rounded-full`}
      >
        ›
      </button>
    </div>
  );
};

export default StoreSlider;
