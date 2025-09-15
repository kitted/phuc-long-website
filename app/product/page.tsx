"use client";

import SubLayout from "../subLayout";
import React from "react";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Marquee from "../components/marquee";
import ProductCardGrid from "../components/productCard";
import ContentText from "../components/contentText";
import AboutSection from "../components/about";
import PartnerSection from "../components/partner";
import HorizontalSlider from "../components/horizontalSlider";
import StoreSlider from "../components/storeSlider";
import ContactForm from "../components/contact";

export default function Example() {
  const products = [
    {
      title: "Nhớt xe máy A",
      description: "Nhớt xe máy A",
      image: "/lubrex/lubrex7.png",
      label: "Nhớt xe máy A",
    },
    {
      title: "Dầu Máy B",
      description: "Dầu Máy B",
      image: "/lubrex/lubrex8.png",
      label: "Dầu Máy B",
    },
    {
      title: "Dầu Máy B",
      description: "Dầu Máy B",
      image: "/lubrex/lubrex9.png",
      label: "Dầu Máy B",
    },
    {
      title: "Dầu Máy B",
      description: "Dầu Máy B",
      image: "/lubrex/lubrex10.png",
      label: "Dầu Máy B",
    },
    {
      title: "Dầu Máy B",
      description: "Dầu Máy B",
      image: "/lubrex/lubrex11.png",
      label: "Dầu Máy B",
    },
    {
      title: "Dầu Máy B",
      description: "Dầu Máy B",
      image: "/lubrex/lubrex12.png",
      label: "Dầu Máy B",
    },
    {
      title: "Dầu Máy B",
      description: "Dầu Máy B",
      image: "/lubrex/lubrex13.png",
      label: "Dầu Máy B",
    },
    {
      title: "Dầu Máy B",
      description: "Dầu Máy B",
      image: "/lubrex/lubrex14.png",
      label: "Dầu Máy B",
    },
    {
      title: "Dầu Máy B",
      description: "Dầu Máy B",
      image: "/lubrex/lubrex1.png",
      label: "Dầu Máy B",
    },
    {
      title: "Dầu Máy B",
      description: "Dầu Máy B",
      image: "/lubrex/lubrex2.png",
      label: "Dầu Máy B",
    },
    {
      title: "Dầu Máy B",
      description: "Dầu Máy B",
      image: "/lubrex/lubrex3.png",
      label: "Dầu Máy B",
    },
    {
      title: "Dầu Máy B",
      description: "Dầu Máy B",
      image: "/lubrex/lubrex4.png",
      label: "Dầu Máy B",
    },
  ];
  return (
    <>
      <SubLayout>
        <div className="pt-[65px] md:pt-[1px]">
          <Banner imageUrls={["/banner/banner1.png", "/banner/banner2.png"]} />
          <ContentText overlayText={"Danh Sách Sản Phẩm"} />
          <ProductCardGrid products={products} />
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
