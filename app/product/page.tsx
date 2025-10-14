"use client";

import SubLayout from "../subLayout";
import React, { useRef } from "react";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Marquee from "../components/marquee";
import ProductCardGrid from "../components/productCard";
import ContentText from "../components/contentText";
import Paginate from "../components/paginate";
import Breadcrumbs from "../components/breadcrumbs";
import { productsList } from "../data/listProducts";
import { usePagination } from "../hook/usePagination";

export default function Example() {
  const gridRef = useRef<HTMLDivElement>(null);

  const { currentPage, setCurrentPage, totalPages, currentData } =
    usePagination(productsList, 9, gridRef);

  return (
    <>
      <SubLayout>
        <div className="pt-[65px] md:pt-[1px]">
          <Banner imageUrls={["/banner/banner1.png", "/banner/banner2.png"]} />
          <Marquee />
          <Breadcrumbs />
          <ContentText overlayText={"Danh Sách Sản Phẩm"} />

          <div ref={gridRef}>
            <ProductCardGrid products={currentData} />
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
