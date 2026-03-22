import React from "react";
import Image from "next/image";

type Section = {
  heading?: string;
  text?: string[];
  image?: string;
  caption?: string;
  images?: Array<{ src: string; caption?: string }>;
  video?: string;
  videoCaption?: string;
};

type Props = {
  sections: Section[];
  tags: string[];
  origin: string;
  views: number;
};

export default function TechniqueContentDetail({
  sections,
  tags,
  origin,
  views,
}: Props) {
  return (
    <div className="space-y-8 mb-12">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Content sections */}
      {sections.map((section, index) => (
        <div key={index}>
          {section.heading && (
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {section.heading}
            </h2>
          )}

          {section.text &&
            section.text.map((text, i) => (
              <p key={i} className="text-lg leading-relaxed mb-6 max-w-3xl">
                {text}
              </p>
            ))}

          {section.image && (
            <div className="my-8">
              <Image
                src={section.image}
                alt=""
                width={800}
                height={500}
                className="rounded-xl shadow-lg mx-auto"
              />
              {section.caption && (
                <p className="mt-2 text-sm text-gray-600 italic text-center">
                  {section.caption}
                </p>
              )}
            </div>
          )}

          {section.images && section.images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
              {section.images.map((img, i) => (
                <Image
                  key={i}
                  src={img.src}
                  alt=""
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Stats */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <span>Nguồn: {origin}</span>
        <span>•</span>
        <span>{views.toLocaleString()} views</span>
      </div>
    </div>
  );
}
