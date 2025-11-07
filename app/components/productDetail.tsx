"use client";

import { useEffect, useState } from "react";

type ProductDetailProps = {
  product: {
    title?: string;
    image?: string;
    gallery?: string[];
    type?: string[];
    viscosity?: string;
    acea?: string;
    packaging?: string;
    availableGrades?: string[];
    description?: string;
    benefits?: string[];
    application?: string;
  };
};

export default function ProductDetail({ product }: ProductDetailProps | any) {
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: ảnh chính */}
        {product.image && (
          <div className="flex flex-col h-full">
            <div className="w-full rounded-lg overflow-hidden p-4 flex-1">
              <div className="relative w-full h-[800px] sm:h-[550px] md:h-[500px] flex items-center justify-center rounded-lg">
                <img
                  src={mainImage}
                  alt={product.title || "Product image"}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* RIGHT: thông tin chi tiết */}
        <div className="flex flex-col justify-between h-full space-y-6">
          {product.title && (
            <div className="block sm:hidden">
              <h1
                className="text-xl font-extrabold text-yellow-400 uppercase"
                style={{ fontFamily: "sans-serif" }}
              >
                {product.title}
                {/* <p className="text-sm font-extrabold text-red-800 uppercase mb-6">
                      Fully Synthetic
                    </p> */}
              </h1>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
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

            {/* Type */}
            {product.type && (
              <div>
                <span className="text-base font-semibold">Loại:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {Array.isArray(product.type) ? (
                    product.type.map((item: string, index: number) => (
                      <span
                        key={index}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                      >
                        {item}
                      </span>
                    ))
                  ) : (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                      {product.type}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Kích thước */}
            {product.size && (
              <div>
                <span className="text-base font-semibold">Kích thước:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {Array.isArray(product.size) ? (
                    product.size.map((item: string, index: number) => (
                      <span
                        key={index}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                      >
                        {item}
                      </span>
                    ))
                  ) : (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                      {product.size}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* CCA */}
            {product.cca && (
              <div>
                <span className="text-base font-semibold">Chỉ số CCA:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {Array.isArray(product.cca) ? (
                    product.cca.map((item: string, index: number) => (
                      <span
                        key={index}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                      >
                        {item}
                      </span>
                    ))
                  ) : (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                      {product.cca}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Khối lượng */}
            {product.weight && (
              <div>
                <span className="text-base font-semibold">Khối lượng:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {Array.isArray(product.weight) ? (
                    product.weight.map((item: string, index: number) => (
                      <span
                        key={index}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                      >
                        {item}
                      </span>
                    ))
                  ) : (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                      {product.weight}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Dung lượng danh định */}
            {product.dod && (
              <div>
                <span className="text-base font-semibold">
                  Dung lượng danh định:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {Array.isArray(product.dod) ? (
                    product.dod.map((item: string, index: number) => (
                      <span
                        key={index}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                      >
                        {item}
                      </span>
                    ))
                  ) : (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                      {product.dod}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Chế độ nạp tiêu chuẩn */}
            {product.standardCharge && (
              <div>
                <span className="text-base font-semibold">
                  Chế độ nạp tiêu chuẩn:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {Array.isArray(product.standardCharge) ? (
                    product.standardCharge.map(
                      (item: string, index: number) => (
                        <span
                          key={index}
                          className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                        >
                          {item}
                        </span>
                      )
                    )
                  ) : (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                      {product.standardCharge}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Chế độ nạp nhanh */}
            {product.withdrawCharge && (
              <div>
                <span className="text-base font-semibold">
                  Chế độ nạp nhanh:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {Array.isArray(product.withdrawCharge) ? (
                    product.withdrawCharge.map(
                      (item: string, index: number) => (
                        <span
                          key={index}
                          className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                        >
                          {item}
                        </span>
                      )
                    )
                  ) : (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                      {product.withdrawCharge}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Đơn vị */}
            {product.packaging && (
              <div>
                <span className="text-base font-semibold">Đơn vị:</span>
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
                  {product.availableGrades.map((g: any) => (
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
          <button
            className={`hover:bg-blue-800 ${textColor2} ${containerBg2} font-extrabold text-lg px-8 py-4 rounded-lg shadow-lg transition w-full`}
          >
            Liên hệ ngay
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
          {product.gallery.map((img: any, idx: any) => (
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
        {product.description && (
          <section className={`${containerBg} p-6 rounded-lg`}>
            <h2 className={`text-lg font-semibold mb-2 ${textColor3}`}>
              Mô tả chi tiết sản phẩm:
            </h2>
            <div className={`text-sm leading-relaxed ${textColor} space-y-2`}>
              {Array.isArray(product.description) ? (
                product.description.map((item: string, index: number) => (
                  <p key={index}>{item}</p>
                ))
              ) : (
                <p>{product.description}</p>
              )}
            </div>
          </section>
        )}

        {/* Benefits */}
        {product.benefits && product.benefits.length > 0 && (
          <section className={`${containerBg} p-6 rounded-lg`}>
            <h2 className={`text-lg font-semibold mb-2 ${textColor3}`}>
              Chính sách ưu đãi khi mua hàng:
            </h2>
            <ul
              className={`list-disc list-inside text-sm space-y-1 ${textColor} marker:${textColor3}`}
            >
              {product.benefits.map((b: any, i: any) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Application */}
        {product.application && (
          <section className={`${containerBg} p-6 rounded-lg`}>
            <h2 className={`text-lg font-semibold mb-2 ${textColor3}`}>
              Ứng dụng sản phẩm:
            </h2>
            <div className={`text-sm leading-relaxed ${textColor} space-y-2`}>
              {Array.isArray(product.application) ? (
                product.application.map((item: string, index: number) => (
                  <p key={index}>{item}</p>
                ))
              ) : (
                <p>{product.application}</p>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
