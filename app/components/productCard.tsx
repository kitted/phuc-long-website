"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const products = [
  {
    title: "X-trem sports",
    description:
      "Go to the extreme with our X-trem range that is specifically formulated to grant race your car the power and speed you need to win the race.",
    image: "/lubrex/lubrex1.png",
    label: "LUBREX AUTOMOTIVE",
  },
  {
    title: "X-trem sports",
    description:
      "Go to the extreme with our X-trem range that is specifically formulated to grant race your car the power and speed you need to win the race.",
    image: "/lubrex/lubrex2.png",
    label: "LUBREX X-TREM",
  },
  {
    title: "X-trem sports",
    description:
      "Go to the extreme with our X-trem range that is specifically formulated to grant race your car the power and speed you need to win the race.",
    image: "/lubrex/lubrex3.png",
    label: "LUBREX GREASES",
  },
  {
    title: "X-trem sports",
    description:
      "Go to the extreme with our X-trem range that is specifically formulated to grant race your car the power and speed you need to win the race.",
    image: "/lubrex/lubrex4.png",
    label: "LUBREX MARINE",
  },
  {
    title: "X-trem sports",
    description:
      "Go to the extreme with our X-trem range that is specifically formulated to grant race your car the power and speed you need to win the race.",
    image: "/lubrex/lubrex5.png",
    label: "LUBREX INDUSTRIAL",
  },
  {
    title: "X-trem sports",
    description:
      "Go to the extreme with our X-trem range that is specifically formulated to grant race your car the power and speed you need to win the race.",
    image: "/lubrex/lubrex6.png",
    label: "LUBREX SPECIALITIES",
  },
];

export default function ProductCardGrid() {
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
      className={`${containerBg} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10 px-[10%]`}
    >
      {products.map((product, idx) => (
        <div
          key={idx}
          className={`${cardBg} ${textColor} rounded-2xl overflow-hidden shadow-lg flex flex-col w-auto h-[376px] sm:w-auto sm:h-auto`}
        >
          {/* Image */}
          <div className="relative w-full h-[265px] overflow-hidden rounded-t-2xl">
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
              href="#"
              className={`mt-3 inline-block text-sm font-medium ${textColor} hover:underline`}
            >
              View Product &gt;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
