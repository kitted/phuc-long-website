import React, { useEffect, useState } from "react";
import Link from "next/link";

interface NewsHeaderDetailProps {
  title: string;
  category: string;
  author: string;
  date: string;
}

export default function NewsHeaderDetail({
  title,
  category,
  author,
  date,
}: NewsHeaderDetailProps) {
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
  const textColor = darkMode ? "text-white" : "text-black";
  return (
    <header className="mb-8 text-center">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-2">
        <Link href="/news" className="hover:underline">
          News
        </Link>{" "}
        &gt;{" "}
        <Link
          href={`/news/${category.toLowerCase()}`}
          className="hover:underline"
        >
          {category}
        </Link>
      </nav>

      {/* Title */}
      <h1
        className={`text-2xl md:text-3xl font-bold leading-snug mb-3 ${textColor}`}
      >
        {title}
      </h1>

      {/* Meta info */}
      <p className="text-xs md:text-sm text-gray-400">
        <span className={`font-semibold ${textColor}`}>{author}</span> - {date}
      </p>
    </header>
  );
}
