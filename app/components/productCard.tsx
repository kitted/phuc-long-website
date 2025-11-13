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
  const cardBg = darkMode ? "bg-white/10" : "bg-white/13";
  const textColor = darkMode ? "text-white" : "text-black";

  return (
    <div
      className={`${containerBg} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-[10%] py-5`}
    >
      {products?.map((product: any, idx: any) => (
        <div
          key={idx}
          className={`${cardBg} ${textColor} rounded-2xl overflow-hidden shadow-lg flex flex-col w-auto h-[476px] sm:w-auto sm:h-auto`}
        >
          <Link
            href={`/product/${product.url}` || product.url || "/product/abc"}
            className={`inline-block text-sm font-medium ${textColor} hover:underline`}
          >
            {/* Image */}
            <div className="relative w-full h-[365px] overflow-hidden rounded-t-2xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className={`p-4 flex flex-col flex-1 ${cardBg}`}>
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className={`text-sm ${textColor} mt-2 flex-1`}>
                {product.description}
              </p>
              <Link
                href={
                  `/product/${product.url}` || product.url || "/product/abc"
                }
                className={`mt-3 inline-block text-sm font-medium ${textColor} hover:underline`}
              >
                {`View ${product.name || "Product"} `} &gt;
              </Link>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
