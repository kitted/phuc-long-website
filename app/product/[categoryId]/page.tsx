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

const ITEMS_PER_PAGE = 15;

export default function Category() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSlug = pathname.split("/").pop();

  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [categories, setCategories] = useState<any[]>(productsList);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme === "dark");
    const handleThemeChange = () =>
      setDarkMode(localStorage.getItem("theme") === "dark");
    window.addEventListener("themeChange", handleThemeChange);
    return () => window.removeEventListener("themeChange", handleThemeChange);
  }, []);

  useEffect(() => {
    const pathParts = pathname.split("/").filter(Boolean);
    const categorySlug = pathParts[1];
    const subSlug = searchParams.get("sub");

    const category = productsList.find((c) => c.url === categorySlug);

    if (category && subSlug) {
      const filtered = category.products.filter(
        (p) =>
          p.url.endsWith(subSlug) ||
          p.name.toLowerCase().includes(subSlug.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else if (category) {
      setFilteredProducts(category.products);
    } else {
      const all = productsList.flatMap((c) => c.products);
      setFilteredProducts(all);
    }

    setCurrentPage(1);
  }, [pathname, searchParams]);

  const handleSearch = (keyword: string) => {
    const lowerKeyword = keyword.toLowerCase();
    const allProducts = productsList.flatMap((c) => c.products);
    const filtered = allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerKeyword) ||
        p.title.toLowerCase().includes(lowerKeyword) ||
        p.tag.some((t) => t.toLowerCase().includes(lowerKeyword))
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleFilter = (category: string, sub: string) => {
    const cat = productsList.find((c) => c.title === category);
    if (cat) {
      const filtered = cat.products.filter((p) =>
        p.name.toLowerCase().includes(sub.toLowerCase())
      );
      setFilteredProducts(filtered);
      setCurrentPage(1);
    }
  };

  const sidebarCategories = productsList.map((category) => ({
    name: category.title,
    url: category.url,
    subcategories: category.products.map((p) => ({
      name: p.name,
      url: p.url.split("/").pop(),
    })),
  }));

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const containerBg = darkMode ? "bg-black" : "bg-white";
  const containerBg2 = darkMode ? "bg-[#161616]" : "bg-[#F2F2F2]";

  const currentCategory = useMemo(() => {
    return categories.find((c) => c.url === currentSlug);
  }, [categories, currentSlug]);

  const [pageTitle, setPageTitle] = useState("Sản phẩm Lubrex");
  useEffect(() => {
    if (currentCategory) {
      setPageTitle(currentCategory.title);
    } else {
      setPageTitle("Sản phẩm Lubrex");
    }
  }, [currentCategory]);

  return (
    <>
      <SubLayout>
        <div className="pt-[85px] md:pt-[1px]">
          {/* <Banner imageUrls={["/banner/banner1.png", "/banner/banner2.png"]} /> */}

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
                categories={sidebarCategories}
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
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
