"use client";

import React, { useEffect, useState } from "react";
import ContactForm from "./contactForm";

export default function ContactSection() {
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
  const buttonBg = darkMode
    ? "bg-gradient-to-r from-gray-800/40 to-gray-900/40 border border-white/20"
    : "bg-gradient-to-r from-white/10 to-white/10 border border-black/10";

  return (
    <div
      className={`w-full flex flex-col items-center gap-10 py-12 ${containerBg} ${textColor}`}
    >
      {/* Logo */}
      <h1 className="text-4xl md:text-6xl font-extrabold italic text-[#0054A6] tracking-wide font-logo">
        PHUC LONG
      </h1>

      {/* Social links */}
      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="#"
          className={`flex items-center gap-3 px-6 py-3 rounded-[16px]
                   ${buttonBg} backdrop-blur-md
                   hover:from-white/10 hover:to-white/10
                   dark:hover:from-gray-700/50 dark:hover:to-gray-800/30
                   transition`}
        >
          <img
            src="/zalo.png"
            alt="zalo"
            className="h-6 w-auto object-contain"
          />
          <span>Zalo/PhucLong</span>
        </a>

        <a
          href="#"
          className={`flex items-center gap-3 px-6 py-3 rounded-[16px]
                   ${buttonBg} backdrop-blur-md
                   hover:from-white/10 hover:to-white/10
                   dark:hover:from-gray-700/50 dark:hover:to-gray-800/30
                   transition`}
        >
          <img
            src="/facebook.png"
            alt="facebook"
            className="h-6 w-auto object-contain"
          />
          <span>Facebook/PhucLong</span>
        </a>
      </div>

      {/* Contact form */}
      <ContactForm />
    </div>
  );
}
