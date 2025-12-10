"use client";

import Banner from "@/app/components/banner";
import Breadcrumbs from "@/app/components/breadcrumbs";
import ContentText from "@/app/components/contentText";
import Footer from "@/app/components/footer";
import Marquee from "@/app/components/marquee";
import Paginate from "@/app/components/paginate";
import ProductCardGrid from "@/app/components/productCardGrid";
import SidebarFilter from "@/app/components/sidebarFilter";
import SubLayout from "@/app/subLayout";
import React, { useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { productsList } from "../../data/listProducts";
import { sidebarCategoriesV2 } from "@/app/data/menu";
import MenuProduction from "@/app/components/menuProductions";

const ITEMS_PER_PAGE = 15;

export default function Category() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSlug = pathname.split("/").pop();

  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [categories, setCategories] = useState<any[]>(productsList);

  /* ===================== THEME ===================== */
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme === "dark");

    const handleThemeChange = () =>
      setDarkMode(localStorage.getItem("theme") === "dark");

    window.addEventListener("themeChange", handleThemeChange);
    return () => window.removeEventListener("themeChange", handleThemeChange);
  }, []);

  /* ===================== FILTER BY URL ===================== */
  useEffect(() => {
    const pathParts = pathname.split("/").filter(Boolean);
    const categorySlug = pathParts[1];
    const subSlug = searchParams.get("sub") || "";

    const category = productsList.find((c) => c.url === categorySlug);

    const filterByWords = (products: any[], sub: string) => {
      const words = sub
        .toLowerCase()
        .split(/[-\s]+/)
        .filter(Boolean);

      if (words.length === 0) return products;

      return products.filter((p) => {
        const name = p.name.toLowerCase();
        const title = p.title.toLowerCase();
        const tags = (p.tags || []).map((t: string) => t.toLowerCase());

        // match theo từ
        return words.some(
          (w) =>
            name.includes(w) ||
            title.includes(w) ||
            tags.some((t: any) => t.includes(w))
        );
      });
    };

    if (category) {
      if (subSlug) {
        setFilteredProducts(filterByWords(category.products, subSlug));
      } else {
        setFilteredProducts(category.products);
      }
    } else {
      const all = productsList.flatMap((c: any) => c.products);
      setFilteredProducts(subSlug ? filterByWords(all, subSlug) : all);
    }

    setCurrentPage(1);
  }, [pathname, searchParams]);

  /* ===================== SEARCH ===================== */
  const handleSearch = (keyword: string) => {
    const lowerKeyword = keyword.toLowerCase();
    const allProducts = productsList.flatMap((c: any) => c.products);

    const filtered = allProducts.filter((p) => {
      const name = p.name.toLowerCase();
      const title = p.title.toLowerCase();
      const url = p.url.toLowerCase(); // thêm dòng này
      const tags = (p.tags || []).map((t: string) => t.toLowerCase()); // SỬA p.tag → p.tags

      return (
        name.includes(lowerKeyword) ||
        title.includes(lowerKeyword) ||
        url.includes(lowerKeyword) ||
        tags.some((t: any) => t.includes(lowerKeyword))
      );
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  /* ===================== SIDEBAR FILTER ===================== */
  const handleFilter = (category: string, sub: string) => {
    const cat = productsList.find((c) => c.title === category);

    // Nếu chỉ có category
    if (cat && !sub) {
      setFilteredProducts(cat.products);
      setCurrentPage(1);
      return;
    }

    // Nếu có category + sub → match theo từ
    if (cat && sub) {
      const words = sub
        .toLowerCase()
        .split(/[-\s]+/)
        .filter(Boolean);

      const filtered = cat.products.filter((p) => {
        const name = p.name.toLowerCase();
        const title = p.title.toLowerCase();
        const tags = (p.tags || []).map((t: string) => t.toLowerCase());

        // match nếu bất kỳ từ nào xuất hiện trong name, title hoặc tags
        return words.some(
          (w) =>
            name.includes(w) ||
            title.includes(w) ||
            tags.some((t) => t.includes(w))
        );
      });

      setFilteredProducts(filtered);
      setCurrentPage(1);
      return;
    }
  };

  /* ===================== SIDEBAR DATA ===================== */
  const sidebarCategories = productsList.map((category) => ({
    name: category.title,
    url: category.url,
    subcategories: category.products.map((p) => ({
      name: p.name,
      url: p.url.split("/").pop(),
    })),
  }));

  /* ===================== PAGINATION ===================== */
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const containerBg = darkMode ? "bg-black" : "bg-white";
  const containerBg2 = darkMode ? "bg-[#161616]" : "bg-[#F2F2F2]";

  /* ===================== TITLE ===================== */
  const currentCategory = useMemo(() => {
    return categories.find((c) => c.url === currentSlug);
  }, [categories, currentSlug]);

  const [pageTitle, setPageTitle] = useState("Sản phẩm Lubrex");
  useEffect(() => {
    setPageTitle(currentCategory ? currentCategory.title : "Sản phẩm Lubrex");
  }, [currentCategory]);

  /* ===================== RENDER ===================== */
  return (
    <>
      <SubLayout>
        <div className="pt-[85px] md:pt-[1px]">
          <Marquee />
          <Breadcrumbs />
          <ContentText overlayText={pageTitle} />

          <div
            className={`flex flex-col md:flex-row gap-4 px-[2%] py-[2%] ${containerBg}`}
          >
            <div
              className={`flex-1 w-full md:max-w-[400px] ${containerBg2} rounded-lg`}
            >
              <SidebarFilter
                categories={sidebarCategoriesV2}
                onSearch={handleSearch}
                onFilter={handleFilter}
              />
            </div>

            <div className="flex-[3]">
              <ProductCardGrid products={paginatedProducts} />
            </div>
          </div>

          <Paginate
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
          <div
            className={`flex flex-col md:flex-row gap-4 px-[2%] py-[2%] ${containerBg}`}
          >
            {currentCategory?.menu && (
              <MenuProduction data={currentCategory?.menu} title={pageTitle} />
            )}
          </div>
        </div>
      </SubLayout>

      <Footer />
    </>
  );
}
