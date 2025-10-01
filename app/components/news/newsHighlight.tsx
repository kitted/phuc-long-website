"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const smallNews = [
  {
    id: 1,
    title: "Marc Márquez vô địch MotoGP 2025, sánh ngang Valentino Rossi",
    img: "/news/news2.png",
    date: "28/09/2025",
  },
  {
    id: 2,
    title: "Toyota nâng cấp bộ sạc gia dụng ở Nhật, kỳ vọng thúc đẩy doanh số",
    img: "/news/news3.png",
    date: "28/09/2025",
  },
  {
    id: 3,
    title:
      "Đã liên kết ngân hàng, có cần nạp tiền để trả phí ETC khi qua trạm?",
    img: "/news/news4.png",
    date: "28/09/2025",
  },
  {
    id: 4,
    title:
      "Người Việt mua xe điện tăng kỷ lục, vượt cả ô tô truyền thống trong Q3",
    img: "/news/news4.png",
    date: "28/09/2025",
  },
  {
    id: 5,
    title: "VinFast ra mắt mẫu SUV mới, cạnh tranh trực tiếp Tesla",
    img: "/news/news4.png",
    date: "28/09/2025",
  },
];

export default function NewsHighlight() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/")[2] || "";

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

  const textColor = darkMode ? "text-white" : "text-black";
  const bgColor = darkMode ? "bg-black" : "bg-white";
  const bdColor = darkMode ? "border-white/10" : "border-gray-200";
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* Big news */}

      <Link
        href={currentSlug ? `${currentSlug}/1` : `news/car/1`}
        className="col-span-2 relative rounded-lg overflow-hidden group"
      >
        <div className="relative w-full min-h-[500px]">
          <Image
            src="/news/news1.png"
            alt="Tin lớn"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover"
          />
        </div>
        <div
          className={`absolute bottom-0 left-0 w-full border-b ${bdColor} ${bgColor} py-5 px-4`}
        >
          <h3 className={`text-lg md:text-xl font-semibold ${textColor}`}>
            Bán đồ tỉ đô trên TikTok Shop – nền tảng nổi không cho phép
          </h3>
          <p className={`text-sm font-light ${textColor} mt-2`}>
            Thời gian gần đây, trên các buổi phát trực tiếp qua nền tảng TikTok
            của các nhân viên tư vấn tại đại lý ôtô xuất hiện các lượt gắn giỏ
            hàng, chào bán các mẫu xe giá trị từ vài trăm triệu đến gần một tỷ
            đồng. Vậy người mua liệu có thể mua online ôtô qua TikTok Shop như
            quảng cáo hay không?
          </p>
        </div>
      </Link>

      {/* Small news */}
      <div className="flex flex-col gap-4">
        {smallNews.map((item) => (
          <Link
            href={currentSlug ? `${currentSlug}/1` : `news/car/1`}
            key={item.id}
            className={`flex gap-3 items-start border-b ${bdColor} pb-3`}
          >
            <div className="relative w-24 h-20 flex-shrink-0 rounded-md overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <p
                className={`text-sm font-medium line-clamp-3 cursor-pointer hover:underline ${textColor}`}
              >
                {item.title}
              </p>
              <span className={`text-xs mt-1 ${subTextColor}`}>
                {item.date}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
