"use client";

import React, { useEffect, useState } from "react";

interface BannerProps {
  imageUrl?: string;
  overlayText?: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, overlayText }) => {
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
    <div
      className={`${containerBg} w-full relative aspect-[16/9] md:aspect-[21/9]`}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={"Banner"}
          className="w-full h-full object-contain"
        />
      )}

      {overlayText && (
        <div className="bottom-0 w-full flex justify-center pb-6">
          <h1
            className={`${textColor} italic font-black text-[20px] lg:text-[60px] md:text-[40px] sm:text-[25px] text-center px-4`}
            style={{ fontFamily: "Archivo, sans-serif", letterSpacing: "2%" }}
          >
            {overlayText}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Banner;
