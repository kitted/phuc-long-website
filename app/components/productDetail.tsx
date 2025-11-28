"use client";

import {
  useEffect,
  useState,
  useRef,
  type MouseEvent as ReactMouseEvent,
} from "react";
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

  // 🔍 Zoom & hover state
  const [isDesktop, setIsDesktop] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0.5, y: 0.5 });

  const [isHoveringMain, setIsHoveringMain] = useState(false);

  // 👉 NEW: dùng ref để lưu timeout
  const zoomDelayRef = useRef<NodeJS.Timeout | null>(null);

  // 🖼 Auto slide gallery
  useEffect(() => {
    if (!product.gallery || product.gallery.length === 0) return;

    // 👉 Nếu đang hover main image thì tắt auto slide
    if (isHoveringMain) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % product.gallery!.length;
        setMainImage(product.gallery![nextIndex]);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [product.gallery, isHoveringMain]);

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

  // 🖥 Xác định desktop để bật hover zoom
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // 📍 Cập nhật vị trí zoom khi di chuột
  const handleMouseMoveOnImage = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !isHoveringMain) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = Math.min(Math.max(x / rect.width, 0), 1);
    const percentY = Math.min(Math.max(y / rect.height, 0), 1);

    setZoomPos({ x: percentX, y: percentY });
  };

  // 👉 NEW: Hàm xử lý hover có delay 2s
  const handleMouseEnter = () => {
    if (!isDesktop) return;

    // nếu đang có delay trước đó → clear
    if (zoomDelayRef.current) clearTimeout(zoomDelayRef.current);

    zoomDelayRef.current = setTimeout(() => {
      setIsHoveringMain(true);
    }, 1000);
  };

  // 👉 NEW: Khi rời chuột → tắt zoom ngay + clear timeout
  const handleMouseLeave = () => {
    if (zoomDelayRef.current) clearTimeout(zoomDelayRef.current);
    setIsHoveringMain(false);
  };

  const containerBg = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";
  const containerBg2 = darkMode ? "bg-white" : "bg-black";
  const textColor2 = darkMode ? "text-black" : "text-white";
  const textColor3 = darkMode ? "text-yellow-300" : "text-blue-800";
  const textColor4 = darkMode ? "text-white" : "text-black";

  const zoomBackgroundPosition = `${zoomPos.x * 100}% ${zoomPos.y * 100}%`;

  return (
    <div className={`w-full ${textColor} ${containerBg}`}>
      {/* TOP: layout 2 cột */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start relative">
        {product.image && (
          <div className="flex flex-col h-full">
            <div className="w-full rounded-lg overflow-visible p-4 flex-1">
              {/* MAIN IMAGE + ZOOM */}
              <div
                className="relative w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[500px] flex items-center justify-center rounded-lg cursor-zoom-in lg:cursor-crosshair"
                onClick={() => setIsZoomOpen(true)}
                onMouseMove={handleMouseMoveOnImage}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={mainImage}
                  alt={product.title || "Product image"}
                  className="max-h-full max-w-full object-contain"
                />

                {/* Vùng zoom (desktop + sau 2 giây hover) */}
                {isDesktop && isHoveringMain && (
                  <div
                    className="hidden lg:block absolute top-1/2 -left-[180px] -translate-y-1/2 w-[360px] h-[360px] border border-gray-500 rounded-lg overflow-hidden shadow-xl bg-white/90 z-20"
                    style={{
                      backgroundImage: `url(${mainImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "300%",
                      backgroundPosition: zoomBackgroundPosition,
                    }}
                  />
                )}
              </div>
            </div>

            {/* GALLERY thumbnails */}
            {product.gallery && product.gallery.length > 0 && (
              <div
                ref={(el) => {
                  if (!el) return;
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
          {product.title && (
            <h1 className="text-3xl font-extrabold text-yellow-400 uppercase">
              {product.title}
            </h1>
          )}

          {product.shortDescription && (
            <p className="text-base italic opacity-80">
              {product.shortDescription}
            </p>
          )}

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

          {typeof product.stock === "number" && (
            <div>
              <span className="font-semibold">Tồn kho:</span>{" "}
              <span>{product.stock} sản phẩm</span>
            </div>
          )}

          {product.option && Array.isArray(product.option) && (
            <div>
              <h4 className={`font-semibold mb-2 ${textColor3}`}>
                Lựa chọn sản phẩm khác:
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.option.map((opt: any, index: number) => (
                  <button
                    key={index}
                    onClick={() =>
                      opt.url ? router.push(`/${opt.url}`) : null
                    }
                    className="text-black bg-gray-200 hover:bg-blue-600 hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition-all"
                  >
                    {opt.name}
                  </button>
                ))}
              </div>
            </div>
          )}

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

          <button
            className={`hover:bg-blue-800 ${textColor2} ${containerBg2} font-extrabold text-lg px-8 py-4 rounded-lg shadow-lg transition w-full`}
          >
            Liên hệ ngay
          </button>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-10 space-y-6 px-4">
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

        {product.description && (
          <section className={`${containerBg} p-6 rounded-lg`}>
            <h2 className={`text-lg font-semibold mb-2 ${textColor}`}>
              Mô tả chi tiết sản phẩm:
            </h2>
            <div
              className={`
                text-sm leading-relaxed ${textColor4}
                space-y-2 prose prose-sm max-w-none
                ${darkMode ? "prose-invert" : ""}
                description-content
              `}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </section>
        )}
      </div>

      {/* POPUP */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-white/80 flex items-center justify-center p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative max-w-[95vw] max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-3 -right-3 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-lg"
              onClick={() => setIsZoomOpen(false)}
              aria-label="Đóng"
            >
              ×
            </button>
            <img
              src={mainImage}
              alt="Zoomed product"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
