"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SubLayout from "../subLayout";
import Footer from "../components/footer";
import TechniqueList from "../components/technique/techniqueList";
import Paginate from "../components/paginate";
import { technique } from "../data/technique";
import { slugify } from "@/app/lib/slugify";
import TechniqueSearch from "../components/technique/techniqueSearch";
import TechniqueHighlight from "../components/technique/techniqueHighlight";

export default function TechniquePage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "";

  // ====== STATE ======
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 👈 số bài mỗi trang (sau 5 bài highlight)

  const search = searchParams.get("search") || "";

  // ✅ Lọc bài viết theo type + search
  const filteredTechnique = technique
    .filter((item) => {
      const matchType = type
        ? Array.isArray(item.type)
          ? item.type.includes(type)
          : item.type === type
        : true;

      const matchSearch = search
        ? item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.writer.toLowerCase().includes(search.toLowerCase()) ||
          item.banner.title.toLowerCase().includes(search.toLowerCase()) ||
          item.tag.some((t) => t.toLowerCase().includes(search.toLowerCase()))
        : true;

      return matchType && matchSearch;
    })
    .sort((a, b) => b.id - a.id);

  // ====== TÍNH PHÂN TRANG ======
  const totalItems =
    filteredTechnique.length > 5 ? filteredTechnique.length - 5 : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Dữ liệu hiển thị theo trang (sau 5 bài highlight)
  const startIdx = 7 + (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedTechnique = filteredTechnique.slice(startIdx, endIdx);

  // ====== DARK MODE ======
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

  return (
    <>
      <SubLayout>
        <div
          className={`pt-[165px] px-4 md:px-8 max-w-7xl mx-auto transition-colors duration-300 ${
            darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <TechniqueSearch />
          {/* TechniqueCategories - coming */}
          {/* <div className="h-20" /> */}

          <div className="pt-[40px]">
            {filteredTechnique.length > 0 ? (
              <>
                {/* ====== 5 BÀI HIGHLIGHT ====== */}
                <TechniqueHighlight
                  data={filteredTechnique.slice(0, 7)}
                  darkMode={darkMode}
                />

                {/* ====== DANH SÁCH CÒN LẠI (PHÂN TRANG) ====== */}
                <TechniqueList data={paginatedTechnique} />
              </>
            ) : (
              <p className="text-center text-gray-500 mt-10">
                Không có bài viết kỹ thuật nào.
              </p>
            )}

            {/* ====== PAGINATION ====== */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <Paginate
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            )}
          </div>
        </div>
      </SubLayout>

      <Footer />
    </>
  );
}
