import { useRef, useEffect, useState } from "react";

interface ProductImagesProps {
  images?: string[];
}

export default function ProductImages({ images = [] }: ProductImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!images.length) return;

    const container = thumbnailsRef.current;
    const activeThumb = container?.children[currentImageIndex] as HTMLElement;
    if (container && activeThumb) {
      const containerRect = container.getBoundingClientRect();
      const thumbRect = activeThumb.getBoundingClientRect();
      const offset =
        thumbRect.left -
        containerRect.left -
        containerRect.width / 2 +
        thumbRect.width / 2;

      container.scrollTo({
        left: container.scrollLeft + offset,
        behavior: "smooth",
      });
    }
  }, [currentImageIndex, images]);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Ảnh lớn */}
      <div className="w-full max-w-[500px] h-[400px] flex justify-center items-center overflow-hidden rounded-lg shadow">
        {images.length > 0 ? (
          <img
            src={images[currentImageIndex]}
            alt="product"
            className="object-contain w-full h-full transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
            Chưa có hình ảnh
          </div>
        )}
      </div>

      {/* Danh sách thumbnail */}
      {images.length > 0 && (
        <div
          ref={thumbnailsRef}
          className="flex gap-3 mt-4 overflow-x-auto scrollbar-hide scroll-smooth w-full max-w-[500px]"
        >
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-[80px] h-[80px] cursor-pointer rounded-lg border-2 transition-all duration-300 ${
                index === currentImageIndex
                  ? "border-yellow-500 scale-105"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`thumb-${index}`}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
