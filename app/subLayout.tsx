"use client";

import { useEffect, useState } from "react";
import FloatingButton from "./components/floatingButton";
import { Navigation } from "./components/nav";

function SubLayout({ children }: { children: React.ReactNode }) {
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
  const containerBg2 = darkMode ? "bg-[#393838]" : "bg-[#DFDEDE]";
  const textColor = darkMode ? "text-white" : "text-black";
  return (
    <div
      className={`relative w-full min-h-screen ${containerBg} overflow-x-hidden`}
    >
      <div className={`relative z-30 transition-all duration-700 ease-in-out`}>
        <Navigation />
        <div>{children}</div>
        <FloatingButton />
      </div>
    </div>
  );
}

export default SubLayout;
