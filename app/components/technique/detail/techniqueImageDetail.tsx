import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  caption?: string;
}

export default function TechniqueImageDetail({ src, alt, caption }: Props) {
  return (
    <div className="mb-8 flex flex-col items-center">
      {/* Container giới hạn chiều rộng tối đa để ảnh không bị quá "khổng lồ" trên màn hình to */}
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl">
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          // w-full và h-auto giúp ảnh hiển thị trọn vẹn 100% không bị cắt, chiều cao tự tính toán
          className="w-full h-auto hover:scale-[1.02] transition-transform duration-500 ease-in-out"
          priority
        />
      </div>

      {caption && (
        <p className="mt-4 text-center text-sm italic text-gray-600 dark:text-gray-400">
          {caption}
        </p>
      )}
    </div>
  );
}
