"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TechniqueType } from "@/app/technique/type";
import { slugify } from "@/app/lib/slugify";

type Props = {
  data: TechniqueType[] | any;
  darkMode: boolean;
};

export default function TechniqueHighlight({ data, darkMode }: Props) {
  const textColor = darkMode ? "text-white" : "text-black";
  const bgColor = darkMode ? "bg-black" : "bg-white";
  const bdColor = darkMode ? "border-white/10" : "border-gray-200";
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-700";

  if (!data?.length) return null;

  const [first, ...rest] = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* 🔹 Bài nổi bật đầu tiên */}
      <Link
        href={`/technique/${slugify(first.title)}`}
        className="col-span-2 relative rounded-lg overflow-hidden group"
      >
        <div className="relative w-full min-h-[500px]">
          <img
            src={first.banner.image}
            alt={first.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div
          className={`absolute bottom-0 left-0 w-full border-b ${bdColor} ${bgColor} py-5 px-4`}
        >
          <h3 className={`text-lg md:text-xl font-semibold ${textColor}`}>
            {first.title}
          </h3>
          <p className={`text-sm font-light ${textColor} mt-2`}>
            {first.banner.description?.[0]}
          </p>
        </div>
      </Link>

      {/* 🔹 6 bài còn lại */}
      <div className="flex flex-col gap-4">
        {rest?.slice(0, 6)?.map((item: any) => (
          <Link
            href={`/technique/${slugify(item.title)}`}
            key={item.id}
            className={`flex gap-3 items-start border-b ${bdColor} pb-3`}
          >
            <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
              <img
                src={item.banner.image}
                alt={item.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-between">
              <p
                className={`text-sm font-medium line-clamp-3 cursor-pointer hover:underline ${textColor}`}
              >
                {item.title}
              </p>
              <span className={`text-xs mt-1 ${subTextColor}`}>
                {item.time}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
