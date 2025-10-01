"use client";

import SubLayout from "../subLayout";
import React from "react";
import Footer from "../components/footer";
import GuideHeader from "../components/help/guideHeader";
import GuideContent from "../components/help/guideContent";
import GuideNote from "../components/help/guideNote";
import ContactChannel from "../components/help/contactChannel";
import NextStepButton from "../components/nextStepButton";

export default function Example() {
  return (
    <>
      <SubLayout>
        <div className="pt-[140px] px-4 md:px-8 max-w-3xl mx-auto">
          <GuideHeader title="Hướng Dẫn Đặt Hàng Từ Công Ty Phúc Long" />
          <GuideContent />
          <GuideNote />
          <ContactChannel
            title="Zalo"
            image="/contact/zalo.png"
            alt="Zalo minh họa"
          />
          <ContactChannel
            title="Facebook"
            image="/contact/fb.png"
            alt="Facebook minh họa"
          />
          <ContactChannel
            title="Gọi Qua Số Điện Thoại"
            image="/contact/phoneContact.png"
            alt="Gọi điện minh họa"
          />

          <NextStepButton
            label="Tiếp Theo: Hướng Dẫn Thanh Toán"
            href="/payment"
          />
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
