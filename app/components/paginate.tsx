"use client";

import React, { useEffect, useState } from "react";

type PaginateProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Paginate({
  currentPage,
  totalPages,
  onPageChange,
}: PaginateProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
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

  // Colors
  const containerBg = darkMode ? "bg-black" : "bg-white";
  const activeBg = darkMode
    ? "bg-gray-700 text-white"
    : "bg-gray-200 text-gray-900";
  const inactiveBg = darkMode
    ? "bg-gray-800 text-gray-400 hover:bg-gray-700"
    : "bg-white text-gray-600 hover:bg-gray-100";
  const arrowDisabled = "opacity-40 cursor-not-allowed";

  return (
    <div
      className={`flex justify-center items-center gap-2 py-6 ${containerBg}`}
    >
      {/* Previous Arrow */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`w-9 h-9 flex items-center justify-center rounded-md text-lg 
          ${currentPage === 1 ? arrowDisabled : inactiveBg}`}
      >
        ‹
      </button>

      {/* Page numbers */}
      {pages?.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`min-w-[36px] h-9 px-2 flex items-center justify-center rounded-md text-sm font-medium transition-colors
            ${page === currentPage ? activeBg : inactiveBg}`}
        >
          {page}
        </button>
      ))}

      {/* Next Arrow */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`w-9 h-9 flex items-center justify-center rounded-md text-lg 
          ${currentPage === totalPages ? arrowDisabled : inactiveBg}`}
      >
        ›
      </button>
    </div>
  );
}
