"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigation } from "@/app/constant/navigation";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const pathName = usePathname();
  const menuRef = useRef<HTMLDivElement>(null); // ref cho mobile menu
  const [isIntersecting, setIntersecting] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme === "dark");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleToggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new Event("themeChange"));
  };

  const getNavBg = () => (darkMode ? "bg-black" : "bg-white");
  const getTextColor = () => (darkMode ? "text-white" : "text-black");

  const getLinkClass = (isActive: boolean) => {
    if (darkMode) {
      return `transition-colors duration-200 border border-white px-4 py-2 rounded-[5px] ${
        isActive
          ? "bg-white text-black"
          : "bg-transparent text-white hover:bg-white hover:text-black"
      }`;
    } else {
      return `transition-colors duration-200 border border-black px-4 py-2 rounded-[5px] ${
        isActive
          ? "bg-black text-white"
          : "bg-transparent text-black hover:bg-black hover:text-white"
      }`;
    }
  };

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur ${getNavBg()}`}
        style={{ height: "90px" }}
      >
        <div className="container flex items-center justify-between pl-4 pr-4 mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className={`inline-flex items-center gap-2 text-xl font-semibold ${getTextColor()}`}
          >
            <img
              src="/favicon.png"
              alt="Logo"
              className="w-[84px] h-[90px] object-contain"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center" style={{ gap: "11px" }}>
            {navigation?.map((item, i) => {
              const isActive =
                pathName === item.href || pathName.startsWith(item.href + "/");
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={getLinkClass(isActive)}
                >
                  {item.name}
                </Link>
              );
            })}
            <button
              onClick={handleToggleTheme}
              className={`flex items-center justify-center w-10 h-10 border rounded-full transition-colors duration-200 ${
                darkMode
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`${getTextColor()} md:hidden`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 md:hidden" // overlay tối
            onClick={() => setIsMenuOpen(false)} // click ngoài menu thì đóng
          >
            <div
              ref={menuRef}
              className={`absolute top-[90px] left-0 w-full border-t border-b backdrop-blur-md ${getNavBg()} flex flex-col items-center py-3 space-y-3`}
              onClick={(e) => e.stopPropagation()} // chặn click bên trong menu
            >
              {navigation?.map((item, i) => {
                const isActive =
                  pathName === item.href ||
                  pathName.startsWith(item.href + "/");
                return (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-full text-center transition-colors duration-200 ${
                      darkMode
                        ? isActive
                          ? "text-black bg-white"
                          : "text-white hover:bg-white hover:text-black"
                        : isActive
                        ? "text-white bg-black"
                        : "text-black hover:bg-black hover:text-white"
                    }`}
                    style={{ border: "none", borderRadius: 0 }}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile Dark/Light Toggle */}
              <button
                onClick={handleToggleTheme}
                className={`flex items-center justify-center w-10 h-10 border rounded-full transition-colors duration-200 ${
                  darkMode
                    ? "border-white text-white hover:bg-white hover:text-black"
                    : "border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
