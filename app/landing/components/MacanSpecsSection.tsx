"use client";

import React from "react";
import ProductSpecSlider, { ProductSpecSlide } from "./ProductSpecSlider";

export default function MacanSpecsSection() {
  const slides: ProductSpecSlide[] = [
    {
      id: "spec-1",
      imageUrl:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986072/3_myi3ua.png",
      imageAlt: "Brake pad",
      heading: "THÔNG SỐ KỸ THUẬT",
      specs: [
        {
          label: "MÃ SẢN PHẨM:",
          value: "SONIC (S) - EXCITER (S)",
        },
        {
          label: "VẬT LIỆU MA SÁT:",
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
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986071/7_br0du8.png",
      imageAlt: "Brake pad",
      heading: "THÔNG SỐ KỸ THUẬT",
      specs: [
        {
          label: "MÃ SẢN PHẨM:",
          value: "SIRUS FI - EXCITER (T)",
        },
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
    {
      id: "spec-1",
      imageUrl:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986068/5_fftw0b.png",
      imageAlt: "Brake pad",
      heading: "THÔNG SỐ KỸ THUẬT",
      specs: [
        {
          label: "MÃ SẢN PHẨM:",
          value: "AIRBLACK 125CC - CLICK - VISION",
        },
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
    {
      id: "spec-1",
      imageUrl:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986066/19_tcqvgh.png",
      imageAlt: "Brake pad",
      heading: "THÔNG SỐ KỸ THUẬT",
      specs: [
        {
          label: "MÃ SẢN PHẨM:",
          value: "WAVE ZX - FUTURE I",
        },
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
    {
      id: "spec-1",
      imageUrl:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986066/13_eajjmf.png",
      imageAlt: "Brake pad",
      heading: "THÔNG SỐ KỸ THUẬT",
      specs: [
        {
          label: "MÃ SẢN PHẨM:",
          value: "WINNER (S)",
        },
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
    {
      id: "spec-1",
      imageUrl:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986062/21_ilywmz.png",
      imageAlt: "Brake pad",
      heading: "THÔNG SỐ KỸ THUẬT",
      specs: [
        {
          label: "MÃ SẢN PHẨM:",
          value: "WAVE RS - FUTURER NEO - FUTURE II",
        },
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
    {
      id: "spec-1",
      imageUrl:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986061/17_gmnw2f.png",
      imageAlt: "Brake pad",
      heading: "THÔNG SỐ KỸ THUẬT",
      specs: [
        {
          label: "MÃ SẢN PHẨM:",
          value: "RAIDER (T)",
        },
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
    {
      id: "spec-1",
      imageUrl:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986061/15_lzpgh0.png",
      imageAlt: "Brake pad",
      heading: "THÔNG SỐ KỸ THUẬT",
      specs: [
        {
          label: "MÃ SẢN PHẨM:",
          value: "SIRUS - EXCITER - NOVOLX",
        },
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
    {
      id: "spec-1",
      imageUrl:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986057/11_bzkt3o.png",
      imageAlt: "Brake pad",
      heading: "THÔNG SỐ KỸ THUẬT",
      specs: [
        {
          label: "MÃ SẢN PHẨM:",
          value: "JUPITER - NOVO 1,2,3 - SUZUKI VIVA",
        },
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
    {
      id: "spec-1",
      imageUrl:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986056/9_mlprhc.png",
      imageAlt: "Brake pad",
      heading: "THÔNG SỐ KỸ THUẬT",
      specs: [
        {
          label: "MÃ SẢN PHẨM:",
          value: "WAVE S110 - WINNER (T)",
        },
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
  ];

  return <ProductSpecSlider slides={slides} className="my-8" />;
}
