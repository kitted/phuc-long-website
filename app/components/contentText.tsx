"use client";

import React, { useEffect, useState } from "react";

interface Props {
  overlayText?: string;
}

const ContentText: React.FC<Props> = ({ overlayText }) => {
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
    <div className={`${containerBg} w-full`}>
      {overlayText && (
        <div className="bottom-0 w-full flex justify-center py-10 sm:py-1 md:py-10 lg:py-10">
          <h1
            className={`${textColor}   font-black text-[20px] lg:text-[60px] md:text-[40px] sm:text-[25px] text-center px-4`}
            style={{ fontFamily: " sans-serif", letterSpacing: "2%" }}
          >
            {overlayText}
          </h1>
        </div>
      )}
    </div>
  );
};

export default ContentText;
