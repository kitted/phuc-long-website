"use client";

import React, { useEffect, useState } from "react";

type MenuItem = {
  title: string;
  description: string;
};

export default function MenuProduction({
  title,
  data,
}: {
  title: string;
  data?: MenuItem[];
}) {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Lấy theme từ localStorage
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

  const items: MenuItem[] = data && data.length > 0 ? data : [];

  const handleScrollToSection = (index: number) => {
    const id = `section-${index}`;
    const el = document.getElementById(id);
    if (!el) return;

    setActiveIndex(index);

    el.scrollIntoView({
      behavior: "smooth",
      block: "center", // căn giữa màn hình
    });
  };

  // Tách bỏ số thứ tự ở đầu title để dùng làm heading nội dung
  const getHeadingText = (title: string) =>
    title.replace(/^\s*\d+(\.\d+)?\s*/, "").trim();

  return (
    <div className={`${containerBg} w-full`}>
      {/* MỤC LỤC */}
      <div className="w-full max-w-[1500px] mx-auto pt-6 md:pt-10 px-4 md:px-0">
        <div
          className={`rounded-md border ${
            darkMode
              ? "border-slate-700 bg-slate-900/40"
              : "border-slate-200 bg-sky-50"
          }`}
        >
          {/* Header */}
          <div
            className={`flex items-center justify-center gap-2 px-4 py-3 border-b ${
              darkMode ? "border-slate-700" : "border-slate-200"
            }`}
          >
            <h2
              className={`${textColor} font-semibold text-base md:text-lg text-center`}
            >
              Mục lục
            </h2>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-xs md:text-sm text-blue-600 hover:underline ml-1"
            >
              [{isOpen ? "Ẩn" : "Hiện"}]
            </button>
          </div>

          {/* Danh sách mục lục */}
          {isOpen && (
            <div className="px-6 py-4">
              <ol className="space-y-2 text-sm md:text-base">
                {items.map((item, index) => (
                  <li key={index} className="leading-relaxed">
                    <button
                      type="button"
                      onClick={() => handleScrollToSection(index)}
                      className={`text-left w-full ${
                        activeIndex === index
                          ? "text-blue-700 font-semibold"
                          : textColor
                      } hover:text-blue-600 hover:underline`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>

      {/* NỘI DUNG BÊN DƯỚI */}
      <div className="w-full max-w-[1500px] mx-auto px-4 md:px-0 pb-12 md:pb-16">
        {items.length > 0 && (
          <p
            className={`${textColor} mt-6 md:mt-8 mb-6 text-sm md:text-base leading-relaxed whitespace-pre-line`}
          >
            Bài viết này cung cấp cho khách hàng những câu hỏi thường gặp về{" "}
            {title} xe máy được tổng hợp trong quá trình kinh doanh.
          </p>
        )}

        {items.map((item, index) => (
          <section
            key={index}
            id={`section-${index}`}
            className="mb-8 md:mb-10 scroll-mt-32"
          >
            <h2
              className={`${textColor} font-bold text-xl md:text-2xl mb-2 md:mb-3`}
            >
              {getHeadingText(item.title)}
            </h2>
            <p
              className={`${textColor} text-sm md:text-base leading-relaxed whitespace-pre-line`}
            >
              {item.description}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
