"use client";

import SubLayout from "../subLayout";
import React from "react";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Marquee from "../components/marquee";
import ProductCardGrid from "../components/productCard";
import ContentText from "../components/contentText";
import Paginate from "../components/paginate";

export default function Example() {
  const news = [
    {
      title: "Tin tức A",
      description: "Tin tức A",
      image: "/lubrex/lubrex7.png",
      label: "Tin tức B",
      type: "news",
      url: "/news/id1",
    },
    {
      title: "Tin tức B",
      description: "Tin tức B",
      image: "/lubrex/lubrex8.png",
      label: "Tin tức B",
      type: "news",
      url: "/news/id1",
    },
    {
      title: "Tin tức B",
      description: "Tin tức B",
      image: "/lubrex/lubrex9.png",
      label: "Tin tức B",
      type: "news",
      url: "/news/id1",
    },
    {
      title: "Tin tức B",
      description: "Tin tức B",
      image: "/lubrex/lubrex10.png",
      label: "Tin tức B",
      type: "news",
      url: "/news/id1",
    },
    {
      title: "Tin tức B",
      description: "Tin tức B",
      image: "/lubrex/lubrex11.png",
      label: "Tin tức B",
      type: "news",
      url: "/news/id1",
    },
    {
      title: "Tin tức B",
      description: "Tin tức B",
      image: "/lubrex/lubrex12.png",
      label: "Tin tức B",
      type: "news",
      url: "/news/id1",
    },
    {
      title: "Tin tức B",
      description: "Tin tức B",
      image: "/lubrex/lubrex13.png",
      label: "Tin tức B",
      type: "news",
      url: "/news/id1",
    },
    {
      title: "Tin tức B",
      description: "Tin tức B",
      image: "/lubrex/lubrex14.png",
      label: "Tin tức B",
      type: "news",
      url: "/news/id1",
    },
    {
      title: "Tin tức B",
      description: "Tin tức B",
      image: "/lubrex/lubrex1.png",
      label: "Tin tức B",
      type: "news",
      url: "/news/id1",
    },
    {
      title: "Tin tức B",
      description: "Tin tức B",
      image: "/lubrex/lubrex2.png",
      label: "Tin tức B",
      type: "news",
      url: "/news/id1",
    },
    {
      title: "Tin tức B",
      description: "Tin tức B",
      image: "/lubrex/lubrex3.png",
      label: "Tin tức B",
      type: "news",
      url: "/news/id1",
    },
    {
      title: "Tin tức B",
      description: "Tin tức B",
      image: "/lubrex/lubrex4.png",
      label: "Tin tức B",
      type: "news",
      url: "/news/id1",
    },
  ];
  return (
    <>
      <SubLayout>
        <div className="pt-[65px] md:pt-[1px]">
          <Banner imageUrls={["/banner/banner1.png", "/banner/banner2.png"]} />{" "}
          <Marquee />
          <ContentText overlayText={"Tin tức mới"} />
          <ProductCardGrid products={news} />
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
