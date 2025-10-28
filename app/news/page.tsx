"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SubLayout from "../subLayout";
import Footer from "../components/footer";
import NewsSearch from "../components/news/newsSearch";
import NewsCategories from "../components/news/newsCategories";
import NewsHighlight from "../components/news/newsHighlight";
import NewsList from "../components/news/newsList";
import Paginate from "../components/paginate";
import { news } from "../data/news";
import { slugify } from "@/app/lib/slugify";

export default function NewsPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "";

  // ====== STATE ======
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 👈 số bài mỗi trang (sau 5 bài highlight)

  const search = searchParams.get("search") || "";

  // ✅ Lọc bài viết theo type + search
  const filteredNews = news
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
    // .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
    .sort((a, b) => b.id - a.id);

  // ====== LỌC BÀI VIẾT ======
  // const filteredNews = news
  //   .filter((item) =>
  //     type
  //       ? Array.isArray(item.type)
  //         ? item.type.includes(type)
  //         : item.type === type
  //       : true
  //   )
  //   .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

  // ====== TÍNH PHÂN TRANG ======
  const totalItems = filteredNews.length > 5 ? filteredNews.length - 5 : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Dữ liệu hiển thị theo trang (sau 5 bài highlight)
  const startIdx = 7 + (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedNews = filteredNews.slice(startIdx, endIdx);

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
          <NewsSearch />
          <NewsCategories />

          <div className="pt-[40px]">
            {filteredNews.length > 0 ? (
              <>
                {/* ====== 5 BÀI HIGHLIGHT ====== */}
                <NewsHighlight
                  data={filteredNews.slice(0, 7)}
                  darkMode={darkMode}
                />

                {/* ====== DANH SÁCH CÒN LẠI (PHÂN TRANG) ====== */}
                <NewsList data={paginatedNews} />
              </>
            ) : (
              <p className="text-center text-gray-500 mt-10">
                Không có bài viết nào trong danh mục này.
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
