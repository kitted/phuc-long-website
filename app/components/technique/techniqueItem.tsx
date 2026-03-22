import React from "react";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/app/lib/slugify";

type Props = {
  title: string;
  desc?: string;
  date: string;
  img: string;
};

export default function TechniqueItem({ title, desc, date, img }: Props) {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
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

  return (
    <Link
      href={`/technique/${slugify(title)}`}
      className={`flex gap-4 pb-4 group border-b transition-colors duration-200 ${bdColor} ${bgColor}`}
      style={{ color: textColor }}
    >
      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold leading-tight line-clamp-2 group-hover:underline mb-1">
          {title}
        </h3>
        {desc && <p className="text-sm opacity-80 line-clamp-2 mb-2">{desc}</p>}
        <span className="text-xs opacity-60">{date}</span>
      </div>
    </Link>
  );
}
