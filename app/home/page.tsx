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
      title: "X-trem sports",
      description:
        "Go to the extreme with our X-trem range that is specifically formulated to grant race your car the power and speed you need to win the race.",
      image: "/lubrex/lubrex1.png",
      label: "LUBREX AUTOMOTIVE",
    },
    {
      title: "X-trem sports",
      description:
        "Go to the extreme with our X-trem range that is specifically formulated to grant race your car the power and speed you need to win the race.",
      image: "/lubrex/lubrex2.png",
      label: "LUBREX X-TREM",
    },
    {
      title: "X-trem sports",
      description:
        "Go to the extreme with our X-trem range that is specifically formulated to grant race your car the power and speed you need to win the race.",
      image: "/lubrex/lubrex3.png",
      label: "LUBREX GREASES",
    },
    {
      title: "X-trem sports",
      description:
        "Go to the extreme with our X-trem range that is specifically formulated to grant race your car the power and speed you need to win the race.",
      image: "/lubrex/lubrex4.png",
      label: "LUBREX MARINE",
    },
    {
      title: "X-trem sports",
      description:
        "Go to the extreme with our X-trem range that is specifically formulated to grant race your car the power and speed you need to win the race.",
      image: "/lubrex/lubrex5.png",
      label: "LUBREX INDUSTRIAL",
    },
    {
      title: "X-trem sports",
      description:
        "Go to the extreme with our X-trem range that is specifically formulated to grant race your car the power and speed you need to win the race.",
      image: "/lubrex/lubrex6.png",
      label: "LUBREX SPECIALITIES",
    },
  ];
  return (
    <>
      <SubLayout>
        <div className="pt-[65px] md:pt-[1px]">
          <Banner
            imageUrls={["/banner/banner1.png", "/banner/banner2.png"]}
            // overlayText={"UY TÍN TẠO NÊN THƯƠNG HIỆU"}
          />
          <Marquee />

          <ContentText overlayText={"UY TÍN TẠO NÊN THƯƠNG HIỆU"} />
          <ProductCardGrid products={products} />
          <ContentText
            overlayText={
              "CHÚNG TÔI CHUYÊN KINH DOANH CÁC DÒNG SẢN PHẨM NHẬP KHẨU"
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
