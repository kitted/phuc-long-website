"use client";

import Banner from "@/app/components/banner";
import ContentText from "@/app/components/contentText";
import Footer from "@/app/components/footer";
import Marquee from "@/app/components/marquee";
import Paginate from "@/app/components/paginate";
import ProductCardGrid from "@/app/components/productCardGrid";
import SidebarFilter from "@/app/components/sidebarFilter";
import SubLayout from "@/app/subLayout";
import React, { useEffect, useState } from "react";

const mockCategories = [
  {
    name: "Nhớt Lubrex A",
    subcategories: ["Loại A1", "Loại A2", "Loại A3", "Loại A4"],
  },
  {
    name: "Nhớt Lubrex B",
    subcategories: ["Loại B1", "Loại B2"],
  },
];
const mockProducts = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i),
  name: "Nhớt xe máy",
  title: "Nhớt xe máy Lubrex",
  image: "/lubrex/itemLubrex.png",
}));
export default function Example() {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const handleSearch = (keyword: string) => {
    const lowerKeyword = keyword.toLowerCase();
    setFilteredProducts(
      mockProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerKeyword) ||
          p.title.toLowerCase().includes(lowerKeyword)
      )
    );
  };

  const handleFilter = (category: string, sub: string) => {
    console.log("Filter", category, sub);
    const lowerSub = sub.toLowerCase();

    setFilteredProducts(
      mockProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerSub) ||
          p.title.toLowerCase().includes(lowerSub)
      )
    );
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

  const containerBg = darkMode ? "bg-black" : "bg-white";
  const containerBg2 = darkMode ? "bg-[#161616]" : "bg-[#F2F2F2]";
  const textColor = darkMode ? "text-white" : "text-black";
  return (
    <>
      <SubLayout>
        <div className="pt-[65px] md:pt-[1px]">
          <Banner imageUrls={["/banner/banner1.png", "/banner/banner2.png"]} />
          <Marquee />
          <ContentText overlayText={"Nhớt Lubrex"} />
          <div
            className={`flex flex-col md:flex-row gap-4 px-[2%] py-[2%] ${containerBg}`}
          >
            {/* Sidebar */}
            <div className={`sidebar-filter w-full ${containerBg2} rounded-lg`}>
              <SidebarFilter
                categories={mockCategories}
                onSearch={handleSearch}
                onFilter={handleFilter}
              />
            </div>

            {/* Product list */}
            <div className="flex-1 bg-gray-900">
              <ProductCardGrid products={filteredProducts} />
            </div>
          </div>
          <Paginate
            currentPage={1}
            totalPages={5}
            onPageChange={(page) => console.log("Go to page:", page)}
          />
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
