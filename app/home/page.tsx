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
  return (
    <>
      <SubLayout>
        <div className="pt-[100px] sm:pt-[4px]">
          <Banner
            imageUrls={["/banner/banner1.png", "/banner/banner2.png"]}
            // overlayText={"UY TÍN TẠO NÊN THƯƠNG HIỆU"}
          />
          <Marquee />

          <ContentText overlayText={"UY TÍN TẠO NÊN THƯƠNG HIỆU"} />
          <ProductCardGrid />
          <ContentText
            overlayText={
              "CHÚNG TÔI CHUYÊN KINH DOANH CÁC DÒNG SẢN PHẨM NHẬP KHẨU"
            }
          />
          <AboutSection />
          <PartnerSection />
          <HorizontalSlider />
          <ContentText
            overlayText={"Các Cửa Hàng Đối Tác Nổi Bật Của Công Ty Phúc Long"}
          />
          <StoreSlider />
          <ContactForm />
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
