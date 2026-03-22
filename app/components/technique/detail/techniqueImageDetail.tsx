import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  caption?: string;
};

export default function TechniqueImageDetail({ src, alt, caption }: Props) {
  return (
    <div className="mb-8">
      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>
      {caption && (
        <p className="mt-4 italic text-sm text-gray-600 dark:text-gray-400 text-center">
          {caption}
        </p>
      )}
    </div>
  );
}
