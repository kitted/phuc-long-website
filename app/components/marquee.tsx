"use client";
import React, { useEffect, useState } from "react";

const items = [
  "YMR",
  "MAX VELOZ",
  "PLUS EX",
  "MAXPLUS",
  "LPD",
  "YMR",
  "MAX VELOZ",
  "PLUS EX",
  "MAXPLUS",
  "LPD",
  "YMR",
  "MAX VELOZ",
  "PLUS EX",
  "MAXPLUS",
  "LPD",
  "YMR",
  "MAX VELOZ",
  "PLUS EX",
  "MAXPLUS",
  "LPD",
];

export default function Marquee() {
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
    <>
      <div>
        <div
          className={`relative overflow-hidden ${containerBg} py-1 md:py-4 `}
        >
          <div className="flex w-max animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-10 mr-10">
                {items.map((text, idx) => (
                  <span
                    key={`${i}-${idx}`}
                    className={`${textColor} italic tracking-wider text-lg ${
                      idx % 2 === 0 ? "font-bold" : "font-thin"
                    }`}
                  >
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`relative overflow-hidden ${containerBg} pb-[5rem] py-1 md:py-4 `}
        >
          <div className="flex w-max animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-10 mr-10">
                {items
                  .slice()
                  .reverse()
                  .map((text, idx) => (
                    <span
                      key={`${i}-${idx}`}
                      className={`${textColor} italic tracking-wider text-lg ${
                        idx % 2 === 0 ? "font-bold" : "font-thin"
                      }`}
                    >
                      {text}
                    </span>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
