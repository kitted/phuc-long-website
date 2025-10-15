"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ProductCardGrid({ products }: any) {
  const [darkMode, setDarkMode] = useState(false);

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
  const cardBg = darkMode ? "bg-white/10" : "bg-white/20";
  const textColor = darkMode ? "text-white" : "text-black";

  return (
    <div
      className={`${containerBg} grid [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] gap-5 px-4 sm:px-[2%]`}
    >
      {products?.map((product: any, idx: number) => (
        <div
          key={idx}
          className={`${cardBg} ${textColor} rounded-2xl overflow-hidden shadow-lg flex flex-col w-full`}
        >
          <Link
            href={`/product/${product.url}` || product.url || "/product/abc"}
          >
            {/* Image giữ tỉ lệ */}
            <div className="relative w-full aspect-[3.5/3] overflow-hidden rounded-t-2xl group">
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="w-full h-auto sm:h-full object-contain sm:object-fill transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className={`p-4 flex flex-col flex-1 ${cardBg}`}>
              <h3 className="font-semibold text-lg line-clamp-3">
                {product.title}
              </h3>
              <p className={`text-sm ${textColor} mt-2 flex-1 line-clamp-3`}>
                {product.description}
              </p>
              <Link
                href={
                  `/product/${product.url}` || product.url || "/product/abc"
                }
                className={`mt-3 inline-block text-sm font-medium ${textColor} hover:underline`}
              >
                View Product &gt;
              </Link>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
