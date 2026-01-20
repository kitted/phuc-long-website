"use client";

import React from "react";
import ProductSpecSlider, { ProductSpecSlide } from "./ProductSpecSlider";

export default function MacanSpecsSection() {
  const slides: ProductSpecSlide[] = [
    {
      id: "spec-1",
      imageUrl:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768918948/MACAN_1_ndohe8.png",
      imageAlt: "Brake pad",
      heading: "THÔNG SỐ KỸ THUẬT",
      specs: [
        {
          label: "VẬT LIỆU MA SÁT hehe:",
          value: "METALLIC / STEEL FIBER COMPOUND",
        },
        {
          label: "CÔNG NGHỆ BỀ MẶT:",
          value: "ANTI-CORROSION COATING (CHỐNG ĂN MÒN)",
        },
        { label: "HIỆU SUẤT PHANH:", value: "ĂN LỰC ĐỀU – ỔN ĐỊNH KHI NÓNG" },
        {
          label: "KHẢ NĂNG TẢN NHIỆT:",
          value: "CAO – HẠN CHẾ FADING KHI CHẠY LIÊN TỤC",
        },
        { label: "ĐỘ MÒN ĐĨA:", value: "THẤP – BẢO VỆ ĐĨA PHANH" },
        { label: "ĐỘ ỒN:", value: "GIẢM RÍT – VẬN HÀNH ÊM" },
        {
          label: "ĐIỀU KIỆN SỬ DỤNG:",
          value: "CHẠY PHỐ – CHẠY DỊCH VỤ – DỪNG/ĐI LIÊN TỤC",
        },
        { label: "PHÙ HỢP XE:", value: "XE SỐ – XE TAY GA – XE DỊCH VỤ" },
        { label: "XUẤT XỨ:", value: "SẢN XUẤT TẠI THÁI LAN" },
      ],
    },
    {
      id: "spec-1",
      imageUrl:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1764524680/DSC00579-_-%C4%90%C3%A3-s%E1%BB%ADa_lqmj3m.png",
      imageAlt: "Brake pad",
      heading: "THÔNG SỐ KỸ THUẬT",
      specs: [
        {
          label: "VẬT LIỆU MA SÁT: dâd",
          value: "METALLIC / STEEL FIBER COMPOUND",
        },
        {
          label: "CÔNG NGHỆ BỀ MẶT:",
          value: "ANTI-CORROSION COATING (CHỐNG ĂN MÒN)",
        },
        { label: "HIỆU SUẤT PHANH:", value: "ĂN LỰC ĐỀU – ỔN ĐỊNH KHI NÓNG" },
        {
          label: "KHẢ NĂNG TẢN NHIỆT:",
          value: "CAO – HẠN CHẾ FADING KHI CHẠY LIÊN TỤC",
        },
        { label: "ĐỘ MÒN ĐĨA:", value: "THẤP – BẢO VỆ ĐĨA PHANH" },
        { label: "ĐỘ ỒN:", value: "GIẢM RÍT – VẬN HÀNH ÊM" },
        {
          label: "ĐIỀU KIỆN SỬ DỤNG:",
          value: "CHẠY PHỐ – CHẠY DỊCH VỤ – DỪNG/ĐI LIÊN TỤC",
        },
        { label: "PHÙ HỢP XE:", value: "XE SỐ – XE TAY GA – XE DỊCH VỤ" },
        { label: "XUẤT XỨ:", value: "SẢN XUẤT TẠI THÁI LAN" },
      ],
    },
    // Thêm slide 2, 3... nếu cần
  ];

  return <ProductSpecSlider slides={slides} className="my-8" />;
}
