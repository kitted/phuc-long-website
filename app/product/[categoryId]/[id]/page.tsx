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
import { usePathname } from "next/navigation";
import ProductDetail from "@/app/components/productDetail";

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
  name: "Nhớt xe máy ye",
  title: "Nhớt xe máy Lubrex ye",
  image: "/lubrex/itemLubrex.png",
}));
export default function Example() {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const pathname = usePathname();
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
          {/* <ContentText overlayText={`Home/ Lubrex/ ${pathname}`} /> */}
          <div className={`${containerBg} w-full`}>
            <div className="bottom-0 w-full flex justify-left py-1 sm:py-1 md:py-1 lg:py-1">
              <h1
                className={`${textColor} italic font-black text-[20px] lg:text-[60px] md:text-[40px] sm:text-[25px] text-center px-4`}
                style={{
                  fontFamily: "Archivo, sans-serif",
                  letterSpacing: "2%",
                }}
              >
                {`Home/ Lubrex ${pathname}`}
              </h1>
            </div>
          </div>
          <div className={`${containerBg} w-full`}>
            <div className="bottom-0 w-full flex justify-center py-1 sm:py-1 md:py-1 lg:py-1">
              <h1
                className={`${textColor} italic font-black text-[20px] lg:text-[60px] md:text-[40px] sm:text-[25px] text-center px-4`}
                style={{
                  fontFamily: "Archivo, sans-serif",
                  letterSpacing: "2%",
                }}
              >
                Lubrex Product Name A
              </h1>
            </div>
          </div>

          {/* <ContentText overlayText={`Lubrex Product Name A`} /> */}
          <div
            className={`flex flex-col md:flex-row gap-4 px-[2%] py-[2%] ${containerBg}`}
          >
            {/* Sidebar */}
            <div
              className={`flex-1 w-full md:max-w-[400px] ${containerBg2} rounded-lg`}
            >
              <SidebarFilter
                categories={mockCategories}
                onSearch={handleSearch}
                onFilter={handleFilter}
              />
            </div>

            {/* Product list */}
            <div className="flex-1 bg-gray-900">
              <ProductDetail
                product={{
                  title: "VELOCITY SPECIFIC LL-01 FE",
                  image: "/lubrex/itemLubrex.png",
                  gallery: [
                    "/lubrex/itemLubrex.png",
                    "/lubrex/lubrex1.png",
                    "/lubrex/lubrex2.png",
                    "/lubrex/lubrex3.png",
                    "/lubrex/lubrex4.png",
                    "/lubrex/lubrex5.png",
                    "/lubrex/lubrex6.png",
                    "/lubrex/lubrex7.png",
                    "/lubrex/lubrex8.png",
                    "/lubrex/lubrex9.png",
                    "/lubrex/lubrex10.png",
                    "/lubrex/lubrex11.png",
                    "/lubrex/lubrex12.png",
                    "/lubrex/lubrex13.png",
                    "/lubrex/lubrex14.png",
                  ],
                  viscosity: "0W-30",
                  acea: "ACEA A3/B3",
                  packaging: "1L, 4L, 5L, 20L, 200L",
                  availableGrades: ["0W-30"],
                  description:
                    "Velocity Specific LL-01 FE 5W-30 is a premium quality lubricant which is particularly resistant at high temperatures to allow better control of oil consumption and to reduce wear due to its excellent lubricating properties, while providing significant fuel economy. Provides excellent oil flow, instant oil pressure, faster engine revs up and faster engine warm-up. Velocity Specific LL-01 FE 5W-30 helps reduce fuel consumption thus reducing green house gas (CO2) emissions to protect the environment.",
                  benefits: [
                    "FEATURES & BENEFITS:",
                    "Excellent low temperature flow when cold starting, helping to instantly protect vital components.",
                    "Viscosity stability at high temperatures, delivering reduced wear and tear on the engine.",
                    "Excellent engine cleanliness and durability which reduces emissions and provides extended drain capability.",
                    "Delivers instant protection under hot or cold conditions.",
                    "PERFORMANCE LEVELS / MEETS OR EXCEEDS:",
                    "ACEA A5/B5",
                    "BMW LL-01 FE",
                  ],
                  application:
                    "VELOCITY SPECIFIC LL-01 0W-30 is specially designed for BMW and MINI vehicles, fitted with gasoline engines meeting Euro 4, 5 and 6 emission standards, requiring a “Fuel Economy” engine oil meeting BMW Long-Life 01 FE specifications.",
                }}
              />
            </div>
          </div>
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
