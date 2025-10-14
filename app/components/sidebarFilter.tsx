"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

type SidebarFilterProps = {
  categories: any;
  onSearch: (keyword: string) => void;
  onFilter?: (category: string, subcategory: string) => void;
};

export default function SidebarFilter({
  categories,
  onSearch,
  onFilter,
}: SidebarFilterProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [selected, setSelected] = useState<{
    category: string;
    sub: string;
  } | null>(null);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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

  useEffect(() => {
    const pathParts = pathname.split("/").filter(Boolean);
    const categorySlug = pathParts[1];
    const subSlug = searchParams.get("sub") || "";
    if (categorySlug) {
      setSelected({ category: categorySlug, sub: subSlug });
      setOpenCategory(categorySlug);
    }
  }, [pathname, searchParams]);

  const handleToggle = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const handleSelect = (cat: any, sub: any) => {
    if (selected?.category === cat.url && selected?.sub === sub.url) {
      setSelected({ category: cat.url, sub: "" });

      const newUrl = `/product/${cat.url}`;
      router.push(newUrl, { scroll: false });

      onFilter?.(cat.name, "");
      return;
    }

    setSelected({ category: cat.url, sub: sub.url });
    const newUrl = `/product/${cat.url}?sub=${encodeURIComponent(sub.url)}`;
    const pathParts = pathname.split("/").filter(Boolean);

    if (pathParts.length > 2) {
      router.push(newUrl);
    } else {
      router.push(newUrl, { scroll: false });
      onFilter?.(cat.name, sub.name);
    }
  };

  const containerBg = darkMode ? "bg-[#161616]" : "bg-[#F2F2F2]";
  const containerBg2 = darkMode ? "bg-[#393838]" : "bg-[#DFDEDE]";
  const textColor = darkMode ? "text-white" : "text-black";

  return (
    <aside
      className={`w-full ${textColor} p-4 space-y-4 ${containerBg} rounded-lg`}
    >
      <div className="w-full">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onSearch(e.target.value);
          }}
          className={`w-full h-[40px] rounded-[12px] px-4 text-sm ${textColor}
            border border-white/30 placeholder-white/60 focus:outline-none
            backdrop-blur-md [background:linear-gradient(90deg,rgba(11,70,118,0.25)_0%,rgba(21,13,255,0.25)_100%)]
          `}
        />
      </div>

      <div className="space-y-2">
        {categories.map((cat: any) => {
          const isCategorySelected = selected?.category === cat.url;
          return (
            <div
              key={cat.name}
              className={`rounded-lg ${containerBg2} overflow-hidden`}
            >
              <button
                className={`flex justify-between items-center w-full px-4 py-3 text-left text-base font-medium transition-colors
                  ${
                    isCategorySelected
                      ? darkMode
                        ? "bg-blue-700 text-white"
                        : "bg-blue-300 text-blue-900"
                      : "hover:bg-white/10"
                  }`}
                onClick={() => handleToggle(cat.url)}
              >
                {cat.name}
                {openCategory === cat.url ? (
                  <ChevronUp className="w-4 h-4 stroke-[1.5]" />
                ) : (
                  <ChevronDown className="w-4 h-4 stroke-[1.5]" />
                )}
              </button>

              {openCategory === cat.url && (
                <div>
                  {cat.subcategories.map((sub: any, i: number) => {
                    const isSelected =
                      selected?.category === cat.url &&
                      selected?.sub === sub.url;
                    return (
                      <button
                        key={sub.url}
                        onClick={() => handleSelect(cat, sub)}
                        className={`w-full text-left px-4 py-2 text-sm font-light transition-colors
                          ${
                            i !== cat.subcategories.length - 1
                              ? "border-b border-white/20"
                              : ""
                          }
                          ${
                            isSelected
                              ? darkMode
                                ? "bg-blue-600 text-white font-medium"
                                : "bg-blue-200 text-blue-900 font-medium"
                              : "hover:bg-white/10"
                          }`}
                      >
                        {sub.name}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
