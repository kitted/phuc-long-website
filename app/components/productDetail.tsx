"use client";

import { useEffect, useState } from "react";

type ProductDetailProps = {
  product: {
    title?: string;
    image?: string;
    gallery?: string[];
    viscosity?: string;
    acea?: string;
    packaging?: string;
    availableGrades?: string[];
    description?: string;
    benefits?: string[];
    application?: string;
  };
};

export default function ProductDetail({ product }: ProductDetailProps) {
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

  return (
    <div className={`w-full ${textColor} ${containerBg}`}>
      {/* TOP: layout 2 cột */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: ảnh chính */}
        {product.image && (
          <div className="flex flex-col h-full">
            <div className="w-full rounded-lg overflow-hidden p-4 flex-1">
              <img
                src={mainImage}
                alt={product.title || "Product image"}
                className="w-full h-full max-h-[500px] object-contain"
              />
            </div>
          </div>
        )}

        {/* RIGHT: thông tin chi tiết */}
        <div className="flex flex-col justify-between h-full space-y-6">
          {product.title && (
            <h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-yellow-400 uppercase"
              style={{ fontFamily: " sans-serif" }}
            >
              {product.title}
              <p className="text-sm font-extrabold text-red-800 uppercase mb-6">
                Fully Synthetic
              </p>
            </h1>
          )}

          <div className="space-y-8">
            {/* Viscosity */}
            {product.viscosity && (
              <div>
                <span className="text-base font-semibold">
                  SAE Viscosity Grade:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                    {product.viscosity}
                  </span>
                </div>
              </div>
            )}

            {/* ACEA */}
            {product.acea && (
              <div>
                <span className="text-base font-semibold">ACEA:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                    {product.acea}
                  </span>
                </div>
              </div>
            )}

            {/* Packaging */}
            {product.packaging && (
              <div>
                <span className="text-base font-semibold">Packaging:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                    {product.packaging}
                  </span>
                </div>
              </div>
            )}

            {/* Available Grades */}
            {product.availableGrades && product.availableGrades.length > 0 && (
              <div>
                <span className="text-base font-semibold">
                  Available Grades:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.availableGrades.map((g) => (
                    <span
                      key={g}
                      className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-lg text-sm"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <button className="bg-green-400 hover:bg-green-500 text-black font-extrabold text-lg px-8 py-4 rounded-lg shadow-lg transition w-full">
            Contact to buy now
          </button>
        </div>
      </div>

      {/* GALLERY thumbnails */}
      {product.gallery && product.gallery.length > 0 && (
        <div
          className="flex gap-3 mt-4 overflow-x-auto scrollbar-hide h-auto cursor-grab"
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
          {product.gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setMainImage(img);
                setCurrentIndex(idx);
              }}
              className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                img === mainImage
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

      {/* BOTTOM sections */}
      <div className="mt-10 space-y-6">
        {/* Description */}
        {product.description && product.description.trim() !== "" && (
          <section className={`${containerBg} p-6 rounded-lg`}>
            <h2 className="text-lg font-semibold mb-2 text-yellow-300">
              Description:
            </h2>
            <p className={`text-sm leading-relaxed ${textColor}`}>
              {product.description}
            </p>
          </section>
        )}

        {/* Benefits */}
        {product.benefits && product.benefits.length > 0 && (
          <section className={`${containerBg} p-6 rounded-lg`}>
            <h2 className="text-lg font-semibold mb-2 text-yellow-300">
              Benefits:
            </h2>
            <ul
              className={`list-disc list-inside text-sm space-y-1 ${textColor} marker:text-yellow-400`}
            >
              {product.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Application */}
        {product.application && product.application.trim() !== "" && (
          <section className={`${containerBg} p-6 rounded-lg`}>
            <h2 className="text-lg font-semibold mb-2 text-yellow-300">
              Application:
            </h2>
            <p className={`text-sm leading-relaxed ${textColor}`}>
              {product.application}
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
