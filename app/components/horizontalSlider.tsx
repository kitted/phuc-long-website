"use client";

import React, { useRef, useState, useEffect } from "react";

const items = [
  { image: "/slide/slide1.png", title: "Max Plus" },
  { image: "/slide/slide2.png", title: "Plus EX" },
  { image: "/slide/slide3.png", title: "Max Veloz" },
  { image: "/slide/slide4.png", title: "YMR" },
  { image: "/slide/slide5.png", title: "Và Nhiều Sản Phẩm Khác..." },
  { image: "/slide/slide1.png", title: "Max Plus" },
  { image: "/slide/slide2.png", title: "Plus EX" },
  { image: "/slide/slide3.png", title: "Max Veloz" },
  { image: "/slide/slide4.png", title: "YMR" },
  { image: "/slide/slide5.png", title: "Và Nhiều Sản Phẩm Khác..." },
  { image: "/slide/slide1.png", title: "Max Plus" },
  { image: "/slide/slide2.png", title: "Plus EX" },
  { image: "/slide/slide3.png", title: "Max Veloz" },
  { image: "/slide/slide4.png", title: "YMR" },
  { image: "/slide/slide5.png", title: "Và Nhiều Sản Phẩm Khác..." },
  { image: "/slide/slide1.png", title: "Max Plus" },
  { image: "/slide/slide2.png", title: "Plus EX" },
  { image: "/slide/slide3.png", title: "Max Veloz" },
  { image: "/slide/slide4.png", title: "YMR" },
  { image: "/slide/slide5.png", title: "Và Nhiều Sản Phẩm Khác..." },
];

const HorizontalSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // ---- Auto scroll ----
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 1;
    const autoScroll = setInterval(() => {
      if (!isDragging) {
        slider.scrollLeft += scrollAmount;
        // nếu tới cuối thì quay lại đầu
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollLeft = 0;
        }
      }
    }, 20); // tốc độ auto scroll (ms)

    return () => clearInterval(autoScroll);
  }, [isDragging]);

  // ---- Drag bằng chuột ----
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.2; // tốc độ kéo
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={sliderRef}
      className="flex gap-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing px-4 pb-10"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="min-w-[200px] max-w-[220px] flex-shrink-0 bg-neutral-900 rounded-2xl p-4 flex flex-col items-center justify-center"
        >
          <p className="mt-3 text-white text-center">{item.title}</p>
          <img
            src={item.image}
            alt={item.title}
            className="w-[120px] h-[120px] object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalSlider;
