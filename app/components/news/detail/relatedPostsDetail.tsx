"use client";
import React, { useEffect, useState } from "react";
import NewsCardDetail from "./newsCardDetail";

const posts = [
  {
    id: 1,
    title: "Bán ôtô tiền tỷ trên TikTok Shop – nền tảng nói không cho phép",
    desc: "Các đại lý gắn sản phẩm ôtô trên TikTok Shop gây tranh cãi quy định của nền tảng.",
    date: "28/09/2025",
    img: "/news/news1.png",
    href: "/news/car/1",
  },
  {
    id: 2,
    title: "Xe điện VinFast bùng nổ doanh số, vượt cả ô tô truyền thống",
    desc: "Người Việt ngày càng chọn xe điện nhiều hơn trong quý 3.",
    date: "28/09/2025",
    img: "/news/news2.png",
    href: "/news/electric/2",
  },
  {
    id: 3,
    title: "Toyota ra mắt công nghệ pin mới, sạc đầy trong 10 phút",
    desc: "Hứa hẹn tạo cú hích lớn trên thị trường xe điện toàn cầu.",
    date: "28/09/2025",
    img: "/news/news3.png",
    href: "/news/electric/3",
  },
];

export default function RelatedPostsDetail() {
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
  return (
    <section className="my-8">
      <h2 className={`text-lg md:text-xl font-semibold mb-4 ${textColor}`}>
        Bài viết liên quan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts?.map((post) => (
          <NewsCardDetail key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
