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
import { productsList } from "../../data/listProducts";
import { usePathname } from "next/navigation";

interface Product {
  id: number;
  name: string;
  title: string;
  url: string;
  image: string;
  gallery: string[];
  packaging: string;
  description: string;
  benefits: string[];
  application: string;
  tag: string[];
}

interface Category {
  id: number;
  title: string;
  name: string;
  label: string;
  url: string;
  products: Product[];
}

const ITEMS_PER_PAGE = 15;

export default function Example() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();
  const [categories, setCategories] = useState<Category[]>(productsList);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // 🟢 Load dữ liệu ban đầu
  useEffect(() => {
    if (productsList && productsList.length > 0) {
      const allProducts = productsList.flatMap((cat) => cat.products);
      setProducts(allProducts);
      setFilteredProducts(allProducts);
      setCategories(productsList);
    }
  }, []);

  // 🟣 Lọc theo URL category (tự động khi đổi slug)
  useEffect(() => {
    if (!currentSlug || categories.length === 0) return;

    const currentCategory = categories.find((c) => c.url === currentSlug);

    if (currentCategory) {
      // ✅ Nếu URL trùng category.url → chỉ hiển thị sản phẩm của category đó
      setFilteredProducts(currentCategory.products);
    } else {
      // ❌ Nếu không trùng category nào → hiển thị toàn bộ sản phẩm
      const allProducts = categories.flatMap((cat) => cat.products);
      setFilteredProducts(allProducts);
    }

    setCurrentPage(1);
  }, [currentSlug, categories]);

  // 🔍 Search handler
  const handleSearch = (keyword: string) => {
    const lowerKeyword = keyword.toLowerCase();
    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerKeyword) ||
        p.title.toLowerCase().includes(lowerKeyword) ||
        p.tag.some((t) => t.toLowerCase().includes(lowerKeyword))
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // 🧩 Filter handler
  const handleFilter = (category: string, sub: string) => {
    const lowerSub = sub.toLowerCase();
    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerSub) ||
        p.title.toLowerCase().includes(lowerSub) ||
        p.tag.some((t) => t.toLowerCase().includes(lowerSub))
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // 🌗 Dark mode sync
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

  // 🎨 UI màu nền
  const containerBg = darkMode ? "bg-black" : "bg-white";
  const containerBg2 = darkMode ? "bg-[#161616]" : "bg-[#F2F2F2]";

  // 📂 Chuẩn hoá categories để SidebarFilter hiểu
  const sidebarCategories = categories?.map((c) => ({
    name: c.title,
    subcategories: c.products?.map((p) => p.name),
  }));

  // 📄 Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // 🏷️ Lấy category hiện tại
  const currentCategory = useMemo(
    () => categories.find((c) => c.url === currentSlug),
    [categories, currentSlug]
  );
  const pageTitle = currentCategory?.title || "Sản phẩm Lubrex";

  return (
    <>
      <SubLayout>
        <div className="pt-[65px] md:pt-[1px]">
          <Banner imageUrls={["/banner/banner1.png", "/banner/banner2.png"]} />
          <Marquee />
          <Breadcrumbs />
          <ContentText overlayText={pageTitle} />

          {/* Main layout */}
          <div
            className={`flex flex-col md:flex-row gap-4 px-[2%] py-[2%] ${containerBg}`}
          >
            {/* Sidebar */}
            <div
              className={`flex-1 w-full md:max-w-[400px] ${containerBg2} rounded-lg`}
            >
              <SidebarFilter
                categories={sidebarCategories}
                onSearch={handleSearch}
                onFilter={handleFilter}
              />
            </div>

            {/* Product list */}
            <div className="flex-[3]">
              <ProductCardGrid products={paginatedProducts} />
            </div>
          </div>

          {/* Pagination */}
          <Paginate
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
