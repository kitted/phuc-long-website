"use client";

import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface Section {
  heading?: string;
  text?: string[];
  image?: string;
  caption?: string;
  images?: { src: string; caption?: string }[]; // ✅ Thêm hỗ trợ nhiều ảnh
}

interface NewsContentDetailProps {
  sections: Section[];
  tags?: string[];
  origin?: string;
  views?: number;
}

export default function NewsContentDetail({
  sections,
  tags = [],
  origin,
  views,
}: NewsContentDetailProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
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

  const textColor1 = darkMode ? "text-white" : "text-black";
  const textColor2 = darkMode ? "text-gray-400" : "text-black/70";

  return (
    <article className="prose prose-invert max-w-none">
      {sections?.map((sec, idx) => (
        <div key={idx} className="mb-8">
          {/* 🔹 Tiêu đề */}
          {sec.heading && (
            <h2
              className={`text-xl md:text-2xl font-semibold mb-3 text-center ${textColor1}`}
            >
              {sec.heading}
            </h2>
          )}

          {/* 🔹 Văn bản */}
          {sec.text?.map((para, i) => (
            <p
              key={i}
              className={`text-sm md:text-base leading-relaxed ${textColor2}`}
            >
              {para}
            </p>
          ))}

          {/* 🔹 Một ảnh */}
          {sec.image && (
            <div
              className="flex flex-col items-center my-4 cursor-pointer group"
              onClick={() => {
                if (sec.image) {
                  setActiveImage(sec.image);
                }
                setShowModal(true);
              }}
            >
              <img
                src={sec.image}
                alt={sec.caption || ""}
                className="rounded-lg shadow-md max-h-[600px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
              {sec.caption && (
                <p className="text-xs text-gray-500 italic mt-2 text-center">
                  {sec.caption}
                </p>
              )}
            </div>
          )}

          {/* 🔹 Bộ ảnh (gallery) */}
          {sec.images && sec.images.length > 0 && (
            <div className="flex flex-col items-center my-4">
              {/* Grid 2 ảnh / hàng - giảm khoảng cách dọc và ngang */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 w-full">
                {sec.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative group cursor-pointer"
                    onClick={() => {
                      setActiveImage(img.src);
                      setShowModal(true);
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.caption || ""}
                      className="rounded-lg shadow-md object-cover w-full h-52 sm:h-60 transition-transform duration-300 group-hover:scale-[1.02] my-[0px]"
                    />
                    {/* {img.caption && (
                      <p className="text-[11px] text-gray-500 mt-1 text-center">
                        {img.caption}
                      </p>
                    )} */}
                  </div>
                ))}
              </div>

              {/* Caption tổng - giữ sát */}
              {sec.caption && (
                <p className="text-xs text-gray-500 italic mt-2 text-center">
                  {sec.caption}
                </p>
              )}
            </div>
          )}
        </div>
      ))}

      {/* 🔻 Divider */}
      <hr className="my-6 border-gray-300/30" />

      {/* 🔹 Tag + nguồn + lượt xem */}
      <div className="flex flex-col gap-3 mt-6">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {(origin || views) && (
          <div
            className={`flex flex-wrap items-center justify-between text-sm ${textColor2}`}
          >
            {origin && (
              <p>
                <span className="font-semibold">Nguồn:</span> {origin}
              </p>
            )}
            {views !== undefined && (
              <p className="flex items-center gap-1">
                <Eye className="w-4 h-4" /> {views.toLocaleString()} lượt xem
              </p>
            )}
          </div>
        )}
      </div>
      {/* 🔍 Popup phóng to ảnh */}
      {showModal && activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowModal(false)}
        >
          <img
            src={activeImage}
            alt="Zoomed"
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // tránh tắt khi click ảnh
          />
          <button
            className="absolute top-5 right-5 text-white text-2xl font-bold"
            onClick={() => setShowModal(false)}
          >
            ✕
          </button>
        </div>
      )}
    </article>
  );
}
