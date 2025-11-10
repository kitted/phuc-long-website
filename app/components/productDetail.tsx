"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductImages from "./productImages";

type ProductDetailProps = {
  product: Record<string, any>;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const router = useRouter();
  const [mainImage, setMainImage] = useState(product.image || "");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // 🖼 Auto slide gallery
  useEffect(() => {
    if (!product.gallery || product.gallery.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % product.gallery!.length;
        setMainImage(product.gallery![nextIndex]);
        return nextIndex;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [product.gallery]);

  // 🌗 Sync dark mode
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
  const containerBg2 = darkMode ? "bg-white" : "bg-black";
  const textColor2 = darkMode ? "text-black" : "text-white";
  const textColor3 = darkMode ? "text-yellow-300" : "text-blue-800";

  return (
    <div className={`w-full ${textColor} ${containerBg}`}>
      {/* TOP: layout 2 cột */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        {product.image && (
          <div className="flex flex-col h-full">
            <div className="w-full rounded-lg overflow-hidden p-4 flex-1">
              <div className="relative w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[500px] flex items-center justify-center rounded-lg">
                <img
                  src={mainImage}
                  alt={product.title || "Product image"}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* GALLERY thumbnails */}
            {product.gallery && product.gallery.length > 0 && (
              <div
                ref={(el) => {
                  if (!el) return;
                  // auto-scroll khi currentIndex thay đổi
                  const activeThumb = el.children[currentIndex] as HTMLElement;
                  if (activeThumb) {
                    const containerRect = el.getBoundingClientRect();
                    const thumbRect = activeThumb.getBoundingClientRect();
                    const offset =
                      thumbRect.left -
                      containerRect.left -
                      containerRect.width / 2 +
                      thumbRect.width / 2;
                    el.scrollTo({
                      left: el.scrollLeft + offset,
                      behavior: "smooth",
                    });
                  }
                }}
                className="flex gap-3 mt-4 overflow-x-auto scrollbar-hide h-auto cursor-grab px-4"
                onMouseDown={(e) => {
                  const container = e.currentTarget;
                  let startX = e.pageX - container.offsetLeft;
                  let scrollLeft = container.scrollLeft;

                  const handleMouseMove = (ev: MouseEvent) => {
                    const x = ev.pageX - container.offsetLeft;
                    const walk = (x - startX) * 1;
                    container.scrollLeft = scrollLeft - walk;
                  };

                  const handleMouseUp = () => {
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseup", handleMouseUp);
                  };

                  window.addEventListener("mousemove", handleMouseMove);
                  window.addEventListener("mouseup", handleMouseUp);
                }}
              >
                {product.gallery.map((img: any, idx: any) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setMainImage(img);
                      setCurrentIndex(idx);
                    }}
                    className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentIndex
                        ? "border-yellow-400 scale-100"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumb ${idx + 1}`}
                      className="w-28 h-28 object-cover block"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* RIGHT: thông tin chi tiết */}
        <div className="flex flex-col justify-between h-full space-y-6 px-4">
          {/* Title */}
          {product.title && (
            <h1
              className="text-3xl font-extrabold text-yellow-400 uppercase"
              style={{ fontFamily: "sans-serif" }}
            >
              {product.title}
            </h1>
          )}

          {product.shortDescription && (
            <p className="text-base italic opacity-80">
              {product.shortDescription}
            </p>
          )}

          {/* Giá */}
          <div className="flex items-center gap-4">
            {product.discountPrice ? (
              <>
                <span className="text-2xl font-bold text-red-500">
                  {product.discountPrice.toLocaleString("vi-VN")}₫
                </span>
                <span className="text-lg line-through opacity-70">
                  {product.price.toLocaleString("vi-VN")}₫
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold">
                {product.price.toLocaleString("vi-VN")}₫
              </span>
            )}
          </div>

          {/* Số lượng tồn */}
          {typeof product.stock === "number" && (
            <div>
              <span className="font-semibold">Tồn kho:</span>{" "}
              <span>{product.stock} sản phẩm</span>
            </div>
          )}

          {/* Option: Các biến thể sản phẩm */}
          {product.option && Array.isArray(product.option) && (
            <div>
              <h4 className={`font-semibold mb-2 ${textColor3}`}>
                Lựa chọn sản phẩm khác:
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.option.map((opt: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => router.push(`/${opt.url}`)}
                    className="bg-gray-200 hover:bg-blue-600 hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition-all"
                  >
                    {opt.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {product.tags && Array.isArray(product.tags) && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Bảng thông số kỹ thuật */}
          {product.specs && (
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${textColor3}`}>
                Thông số kỹ thuật:
              </h3>
              <table className="min-w-full border border-gray-400 rounded-md text-sm">
                <tbody>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <tr key={key} className="border-b border-gray-300">
                      <td className="font-medium p-2 border-r border-gray-300">
                        {key}
                      </td>
                      <td className="p-2">{value as string}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* CTA */}
          <button
            className={`hover:bg-blue-800 ${textColor2} ${containerBg2} font-extrabold text-lg px-8 py-4 rounded-lg shadow-lg transition w-full`}
          >
            Liên hệ ngay
          </button>
        </div>
      </div>

      {/* BOTTOM SECTIONS */}
      <div className="mt-10 space-y-6 px-4">
        {/* Description */}
        {product.description && (
          <section className={`${containerBg} p-6 rounded-lg`}>
            <h2 className={`text-lg font-semibold mb-2 ${textColor3}`}>
              Mô tả chi tiết sản phẩm:
            </h2>
            <div
              className={`text-sm leading-relaxed ${textColor} space-y-2 prose max-w-none`}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </section>
        )}
      </div>
    </div>
  );
}
