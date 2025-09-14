"use client";

import React, { useEffect, useState, useRef } from "react";

interface BannerProps {
  imageUrls: string[];
  overlayText?: string;
  interval?: number;
}

const Banner: React.FC<BannerProps> = ({ imageUrls, interval = 5000 }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  // Theme dark/light
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

  // Auto slide
  useEffect(() => {
    if (imageUrls.length <= 1) return;
    const timer = setInterval(() => {
      goToNext();
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, imageUrls, interval]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
  };

  // Drag/Swipe handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (translateX > 100) {
      goToPrev();
    } else if (translateX < -100) {
      goToNext();
    }
    setIsDragging(false);
    setTranslateX(0);
  };

  // Touch (mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    if (translateX > 100) {
      goToPrev();
    } else if (translateX < -100) {
      goToNext();
    }
    setIsDragging(false);
    setTranslateX(0);
  };

  const containerBg = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "bg-white" : "bg-black";

  return (
    <div
      className={`${containerBg} w-full relative aspect-[16/6.5] md:aspect-[21/7] overflow-hidden`}
    >
      <div
        ref={slideRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(calc(${
            -currentIndex * 100
          }% + ${translateX}px))`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {imageUrls.map((url, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            <img
              src={url}
              alt={`Banner ${idx + 1}`}
              className="w-full h-full object-fill"
            />
          </div>
        ))}
      </div>

      {/* Navigation dots (bên trong ảnh) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20 pointer-events-auto">
        {imageUrls.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition border ${
              idx === currentIndex ? textColor : `${textColor}/10`
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
