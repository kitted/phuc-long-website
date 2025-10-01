"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface NextStepButtonProps {
  label: string;
  onClick?: () => void;
  href?: string; // optional: nếu muốn link sang trang khác
}

export default function NextStepButton({
  label,
  onClick,
  href,
}: NextStepButtonProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme === "dark");

    const handleThemeChange = () => {
      setDarkMode(localStorage.getItem("theme") === "dark");
    };

    window.addEventListener("themeChange", handleThemeChange);
    return () => window.removeEventListener("themeChange", handleThemeChange);
  }, []);

  // base + theme classes
  const base =
    "px-6 py-3 font-semibold rounded-md transition inline-flex items-center gap-2";
  const darkClasses =
    "border border-white text-white bg-transparent hover:bg-white hover:text-black";
  const lightClasses =
    "border border-gray-300 text-black bg-transparent hover:bg-black hover:text-white";

  const btnClass = `${base} ${darkMode ? darkClasses : lightClasses}`;

  const ButtonInner = (
    <button
      onClick={onClick}
      className={btnClass}
      type="button"
      aria-label={label}
    >
      <span className="text-lg md:text-xl">{label}</span>
      <span className="ml-1 text-lg">{">"}</span>
    </button>
  );

  return (
    <div className="w-full flex justify-end mt-8 pb-6">
      {href ? <Link href={href}>{ButtonInner}</Link> : ButtonInner}
    </div>
  );
}
