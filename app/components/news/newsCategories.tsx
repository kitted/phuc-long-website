// components/NewsCategories.tsx
"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const categories = [
  { name: "Mới nhất", slug: "" },
  { name: "Ô tô", slug: "car" },
  { name: "Xe máy", slug: "motorbike" },
  { name: "Xe điện", slug: "electric" },
  { name: "Độ xe", slug: "modified" },
  { name: "Đánh giá", slug: "review" },
  { name: "Kinh tế", slug: "economy" },
  { name: "Review", slug: "feedback" },
];

export default function NewsCategories() {
  const pathname = usePathname();
  const router = useRouter();

  const currentSlug = pathname.split("/")[2] || "";
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

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((cat) => {
        const isActive = currentSlug === cat.slug;

        const activeClass = darkMode
          ? "bg-white text-black font-semibold shadow"
          : "bg-black text-white font-semibold shadow";

        const inactiveClass = darkMode
          ? "bg-transparent text-white border border-white hover:bg-white/20"
          : "bg-transparent text-black border border-black hover:bg-black/10";

        return (
          <button
            key={cat.slug || "latest"}
            onClick={() => {
              if (cat.slug) {
                router.push(`/news/${cat.slug}`);
              } else {
                router.push(`/news`);
              }
            }}
            className={`px-4 py-2 rounded-md transition-all duration-200 ${
              isActive ? activeClass : inactiveClass
            }`}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}
