"use client";

import React, { useEffect, useState } from "react";

interface Section {
  heading?: string;
  text: string[];
}

interface NewsContentDetailProps {
  sections: Section[];
}

export default function NewsContentDetail({
  sections,
}: NewsContentDetailProps) {
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
  const textColor1 = darkMode ? "text-white" : "text-black";
  const textColor2 = darkMode ? "text-gray-400" : "text-black/70";
  return (
    <article className="prose prose-invert max-w-none">
      {sections?.map((sec, idx) => (
        <div key={idx} className="mb-8">
          {sec.heading && (
            <h2
              className={`text-xl md:text-2xl font-semibold mb-3 text-center ${textColor1}`}
            >
              {sec.heading}
            </h2>
          )}
          {sec.text?.map((para, i) => (
            <p
              key={i}
              className={`text-sm md:text-base leading-relaxed ${textColor2}`}
            >
              {para}
            </p>
          ))}
        </div>
      ))}
      <hr></hr>
    </article>
  );
}
