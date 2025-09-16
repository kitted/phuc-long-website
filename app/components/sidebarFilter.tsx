"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type SidebarFilterProps = {
  categories: {
    name: string;
    subcategories: string[];
  }[];
  onSearch: (keyword: string) => void;
  onFilter: (category: string, subcategory: string) => void;
};

export default function SidebarFilter({
  categories,
  onSearch,
  onFilter,
}: SidebarFilterProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const handleToggle = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };
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

  const containerBg = darkMode ? "bg-[#161616]" : "bg-[#F2F2F2]";
  const containerBg2 = darkMode ? "bg-[#393838]" : "bg-[#DFDEDE]";
  const textColor = darkMode ? "text-white" : "text-black";
  return (
    <aside
      className={`w-full ${textColor} p-4 space-y-4 ${containerBg} rounded-lg`}
    >
      {/* Search */}
      <input
        type="text"
        placeholder="Tìm kiếm"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onSearch(e.target.value);
        }}
        className="
        w-full max-w-[365px] h-[40px]
          rounded-[16.36px]
          px-4 text-white
          border border-white/30
          placeholder-white/60
          focus:outline-none
          backdrop-blur-md
          [background:linear-gradient(90deg,rgba(11,70,118,0.25)_0%,rgba(21,13,255,0.25)_100%)]
        "
      />

      {/* Categories */}
      <div className="space-y-2">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`rounded-lg ${containerBg2} overflow-hidden`}
          >
            <button
              className="flex justify-between items-center w-full px-4 py-3 text-left text-base font-medium hover:bg-white/10 transition-colors"
              onClick={() => handleToggle(cat.name)}
            >
              {cat.name}
              {openCategory === cat.name ? (
                <ChevronUp className="w-4 h-4  stroke-[1.5]" />
              ) : (
                <ChevronDown className="w-4 h-4  stroke-[1.5]" />
              )}
            </button>

            {/* Subcategories */}
            {openCategory === cat.name && (
              <div>
                {cat.subcategories.map((sub, i) => (
                  <button
                    key={sub}
                    onClick={() => onFilter(cat.name, sub)}
                    className={`w-full text-left px-4 py-2 text-sm font-light hover:bg-white/10 transition-colors ${
                      i !== cat.subcategories.length - 1
                        ? "border-b border-white/20"
                        : ""
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
