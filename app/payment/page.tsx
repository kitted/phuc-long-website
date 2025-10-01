"use client";

import SubLayout from "../subLayout";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import GuideHeader from "../components/help/guideHeader";
import ContactChannel from "../components/help/contactChannel";
import Image from "next/image";

export default function Example() {
  const [darkMode, setDarkMode] = useState(false);

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
  const containerBg = darkMode ? "bg-black" : "bg-white";
  const layoutBg = darkMode ? "bg-white/10" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";
  return (
    <>
      <SubLayout>
        <div className="pt-[140px] px-4 md:px-8 max-w-3xl mx-auto">
          <GuideHeader title="Hướng dẫn Thanh Toán Công Ty Phúc Long" />
          <div
            className={`w-full min-h-screen bg-black ${textColor} ${containerBg} flex flex-col items-center py-10 space-y-6`}
          >
            <div className="rounded-xl overflow-hidden shadow-md max-w-3xl mx-auto">
              <Image
                src="/contact/payment.png"
                alt="QR Vietcombank"
                width={800}
                height={450}
                className="w-full object-cover"
              />
            </div>

            <div className="text-center space-y-2">
              <h2 className="font-semibold text-lg">
                Chuyển Khoản Thông Qua Ngân Hàng
              </h2>
              <ul className="font-light text-lg space-y-1">
                <li>• Ngân Hàng: Vietcombank</li>
                <li>• Tên Tài Khoản: Phuc Long</li>
                <li>• Số Tài Khoản: 1233456789</li>
              </ul>
            </div>

            <ContactChannel
              title="Gọi Qua Số Điện Thoại"
              image="/contact/phoneContact.png"
              alt="Gọi điện minh họa"
            />
            <h2
              className={`text-lg md:text-xl font-semibold ${textColor} text-center`}
            >
              Vui Lòng Chụp Lại Thông Tin Chuyển Khoản Và Gửi Lại Cho Chúng Tôi
              Theo Phương Thức Liên Lạc Trước Đó Để Xác Nhận Đã Thanh Toán
            </h2>
          </div>
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
