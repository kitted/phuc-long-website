"use client";

import React, { useEffect, useState } from "react";

export default function NewsSearch() {
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

  const containerBg = darkMode
    ? "bg-gradient-to-r from-gray-900 to-gray-800"
    : "bg-gradient-to-r from-gray-100 to-gray-50";

  const textColor = darkMode ? "text-white" : "text-black";
  const placeholderColor = darkMode
    ? "placeholder-gray-400"
    : "placeholder-gray-500";
  const borderColor = darkMode ? "focus:ring-[#0054A6]" : "focus:ring-blue-500";
  // const borderColor = darkMode ? "border-white" : "border-black";

  return (
    <div className="w-full max-w-xl mx-auto mb-6 border rounded-xl">
      <input
        type="text"
        placeholder="Tìm kiếm"
        className={`w-full px-4 py-2 rounded-xl ${containerBg} ${textColor} ${placeholderColor} focus:outline-none focus:ring-2 ${borderColor}`}
      />
    </div>
  );
}
