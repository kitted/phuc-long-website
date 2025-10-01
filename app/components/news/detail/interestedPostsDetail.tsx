"use client";
import React, { useEffect, useState } from "react";
import NewsCardDetail from "./newsCardDetail";

const posts = [
  {
    id: 1,
    title: "Bán ôtô tiền tỷ trên TikTok Shop – nền tảng nói không cho phép",
    date: "28/09/2025",
    img: "/news/news1.png",
    href: "/news/car/1",
  },
  {
    id: 2,
    title: "Honda công bố kế hoạch ra mắt xe máy điện tại Việt Nam",
    date: "28/09/2025",
    img: "/news/news2.png",
    href: "/news/motorbike/2",
  },
  {
    id: 3,
    title: "Người trẻ Việt chuộng độ xe cá tính hơn bao giờ hết",
    date: "28/09/2025",
    img: "/news/news3.png",
    href: "/news/modified/3",
  },
  {
    id: 4,
    title: "Mercedes EQS 2025 ra mắt, chuẩn bị cạnh tranh Tesla",
    date: "28/09/2025",
    img: "/news/news4.png",
    href: "/news/electric/4",
  },
  {
    id: 5,
    title: "Thị trường ô tô cũ sôi động trở lại cuối năm",
    date: "28/09/2025",
    img: "/news/news1.png",
    href: "/news/car/5",
  },
  {
    id: 6,
    title: "Review VinFast VF9 sau 10.000km sử dụng",
    date: "28/09/2025",
    img: "/news/news2.png",
    href: "/news/review/6",
  },
];

export default function InterestedPostsDetail() {
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
  const textColor = darkMode ? "text-white" : "text-black";
  return (
    <section className="my-8">
      <h2 className={`text-lg md:text-xl font-semibold mb-4 ${textColor}`}>
        Quan tâm
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <NewsCardDetail key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
