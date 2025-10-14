import React from "react";
import NewsItem from "./newsItem";

const newsData = [
  {
    id: 1,
    title: "Mẫu SUV nước của YangWang U8 sau siêu bão gây bất ngờ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "29/09/2025",
    img: "/news/news2.png",
  },
  {
    id: 2,
    title: "Siêu xe điện mới ra mắt với công nghệ vượt trội",
    desc: "Nullam euismod, nisi vel consectetur interdum, nisl nisi aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "28/09/2025",
    img: "/news/news2.png",
  },
  {
    id: 3,
    title: "Siêu xe điện mới ra mắt với công nghệ vượt trội",
    desc: "Nullam euismod, nisi vel consectetur interdum, nisl nisi aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "28/09/2025",
    img: "/news/news2.png",
  },
  {
    id: 4,
    title: "Siêu xe điện mới ra mắt với công nghệ vượt trội",
    desc: "Nullam euismod, nisi vel consectetur interdum, nisl nisi aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "28/09/2025",
    img: "/news/news2.png",
  },
  {
    id: 5,
    title: "Siêu xe điện mới ra mắt với công nghệ vượt trội",
    desc: "Nullam euismod, nisi vel consectetur interdum, nisl nisi aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "28/09/2025",
    img: "/news/news2.png",
  },
];

export default function NewsList() {
  return (
    <div className="flex flex-col gap-6">
      {newsData?.map((item) => (
        <NewsItem
          key={item.id}
          title={item.title}
          desc={item.desc}
          date={item.date}
          img={item.img}
        />
      ))}
    </div>
  );
}
