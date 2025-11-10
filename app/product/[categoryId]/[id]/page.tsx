"use client";

import Banner from "@/app/components/banner";
import Breadcrumbs from "@/app/components/breadcrumbs";
import Footer from "@/app/components/footer";
import Marquee from "@/app/components/marquee";
import ProductDetail from "@/app/components/productDetail";
import SidebarFilter from "@/app/components/sidebarFilter";
import SubLayout from "@/app/subLayout";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { productsList } from "../../../data/listProducts";
import { sidebarCategoriesV2 } from "@/app/data/menu";

export default function ProductDetailPage() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const categorySlug = segments[1];
  const productSlug = segments[2];

  const [darkMode, setDarkMode] = useState(false);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (!categorySlug || !productSlug) return;
    const foundCategory = productsList.find((c) => c.url === categorySlug);
    const foundProduct = foundCategory?.products?.find(
      (p) => p.url === `${categorySlug}/${productSlug}` || p.url === productSlug
    );
    setProduct(foundProduct || null);
  }, [categorySlug, productSlug]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme === "dark");
    const handleThemeChange = () =>
      setDarkMode(localStorage.getItem("theme") === "dark");
    window.addEventListener("themeChange", handleThemeChange);
    return () => window.removeEventListener("themeChange", handleThemeChange);
  }, []);

  const containerBg = darkMode ? "bg-black" : "bg-white";
  const containerBg2 = darkMode ? "bg-[#161616]" : "bg-[#F2F2F2]";
  const textColor = darkMode ? "text-white" : "text-black";

  const sidebarCategories = productsList.map((c) => ({
    name: c.title,
    url: c.url,
    subcategories: c.products.map((p) => ({
      name: p.name,
      url: p.url.split("/").pop(),
    })),
  }));

  return (
    <>
      <SubLayout>
        <div className="pt-[85px] md:pt-[1px]">
          {/* <Banner imageUrls={["/banner/banner1.png", "/banner/banner2.png"]} /> */}
          <Marquee />
          <div className={`${containerBg} w-full flex justify-center py-1`}>
            <Breadcrumbs />
          </div>

          <div className={`${containerBg} w-full flex justify-center py-1`}>
            <h1
              className={`${textColor} italic font-black text-[20px] lg:text-[60px] md:text-[40px] sm:text-[25px] text-center px-4`}
              style={{ fontFamily: " sans-serif", letterSpacing: "2%" }}
            >
              {product?.name || "Sản phẩm không tồn tại"}
            </h1>
          </div>

          <div
            className={`flex flex-col md:flex-row gap-4 px-[2%] py-[2%] ${containerBg}`}
          >
            <div
              className={`flex-1 w-full md:max-w-[400px] ${containerBg2} rounded-lg`}
            >
              <SidebarFilter
                categories={sidebarCategoriesV2}
                onSearch={() => {}}
              />
            </div>

            <div className="flex-[3]">
              {product ? (
                <ProductDetail product={product} />
              ) : (
                <div className="text-center py-20 text-gray-500 text-lg">
                  Không tìm thấy sản phẩm.
                </div>
              )}
            </div>
          </div>
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
