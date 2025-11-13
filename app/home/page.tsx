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
import { productsList } from "../data/listProducts";

export default function Example() {
  return (
    <>
      <SubLayout>
        <div className="pt-[65px] md:pt-[1px]">
          <Banner imageUrls={["/banner/banner1.png", "/banner/banner2.png"]} />
          <Marquee />
          <ContentText overlayText={"UY TÍN TẠO NÊN THƯƠNG HIỆU"} />
          <ProductCardGrid products={productsList.slice(0, 6)} />
          <ContentText
            overlayText={
              "CHÚNG TÔI KINH DOANH CÁC SẢN PHẨM CHẤT LƯỢNG VÀ GIÁ CẠNH TRANH NHẤT THỊ TRƯỜNG"
            }
          />
          <AboutSection />
          <PartnerSection />
          <HorizontalSlider />
          <ContentText
            overlayText={"CÁC CỬA HÀNG ĐỐI TÁC CỦA CÔNG TY PHÚC LONG"}
          />
          <StoreSlider />
          <ContactForm />
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
