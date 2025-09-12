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

export default function Example() {
  return (
    <>
      <SubLayout>
        <div className="pt-[70px] sm:pt-[4px]">
          <Banner
            imageUrl={"/banner/banner1.png"}
            overlayText={"UY TÍN TẠO NÊN THƯƠNG HIỆU"}
          />
          <Marquee />
          <ContentText
            overlayText={
              "CHÚNG TÔI CHUYÊN KINH DOANH CÁC  DÒNG SẢN PHẨM NHẬP KHẨU"
            }
          />
          <ProductCardGrid />
          <ContentText
            overlayText={
              "Với hơn 5+ năm kinh nghiệm phân phối các linh kiện về xe chúng tôi cam kết đưa ra thị trường các sản phẩm chất lượng với giá cả cạnh tranh nhất"
            }
          />
          <AboutSection />
          <PartnerSection />
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
