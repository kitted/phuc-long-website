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
import { usePathname, useSearchParams } from "next/navigation";

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

  const searchParams = useSearchParams();
  const subSlug = searchParams.get("sub");

  // 🟢 Load dữ liệu ban đầu
  useEffect(() => {
    if (productsList && productsList.length > 0) {
      const allProducts = productsList.flatMap((cat) => cat.products);
      setProducts(allProducts);
      setFilteredProducts(allProducts);
      setCategories(productsList);
    }
  }, []);

  useEffect(() => {
    if (!currentSlug || categories.length === 0) return;

    const currentCategory = categories.find((c) => c.url === currentSlug);
    const subSlug = searchParams.get("sub");

    if (subSlug && currentCategory) {
      // lọc theo sub item
      const filtered = currentCategory.products.filter(
        (p) =>
          p.url.endsWith(subSlug) ||
          p.name.toLowerCase().includes(subSlug.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else if (currentCategory) {
      setFilteredProducts(currentCategory.products);
    } else {
      const allProducts = categories.flatMap((c) => c.products);
      setFilteredProducts(allProducts);
    }

    setCurrentPage(1);
  }, [currentSlug, searchParams, categories]);

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

  useEffect(() => {
    const pathParts = pathname.split("/").filter(Boolean);
    const categorySlug = pathParts[1];
    const subSlug = pathParts[2];

    // 🔹 Nếu có cả category và product
    if (categorySlug && subSlug) {
      const category = productsList.find((c) => c.url === categorySlug);
      const subProduct = category?.products.find(
        (p) => p.url === `${categorySlug}/${subSlug}`
      );
      if (subProduct) setFilteredProducts([subProduct]);
    }
    // 🔹 Nếu chỉ có category
    else if (categorySlug) {
      const category = productsList.find((c) => c.url === categorySlug);
      if (category) setFilteredProducts(category.products);
    } else {
      // Nếu không có slug → hiển thị tất cả
      const all = productsList.flatMap((c) => c.products);
      setFilteredProducts(all);
    }
  }, [pathname]);

  // 📂 Chuẩn hoá categories để SidebarFilter hiểu
  // const sidebarCategories = categories?.map((c) => ({
  //   name: c.title,
  //   subcategories: c.products?.map((p) => p.name),
  // }));
  const sidebarCategories = productsList.map((category) => ({
    name: category.title,
    url: category.url,
    subcategories: category.products.map((p) => ({
      name: p.name,
      url: p.url, // ví dụ: "dau-nhon/mco-max-veloz-10w40-sn-1-lit"
    })),
  }));

  // 📄 Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // 🏷️ Lấy category hiện tại
  const currentCategory = useMemo(() => {
    return categories.find((c) => c.url === currentSlug);
  }, [categories, currentSlug]);

  // 🏷️ Tiêu đề trang
  const [pageTitle, setPageTitle] = useState("Sản phẩm Lubrex");

  // 🟢 Cập nhật title mỗi khi URL đổi
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
