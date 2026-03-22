import React from "react";

type Props = {
  title: string;
  date: string;
  category: any;
  author: string;
};

export default function TechniqueHeaderDetail({
  title,
  date,
  category,
  author,
}: Props) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 text-sm text-blue-600 mb-4">
        <span>{category}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        {title}
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <span>{author}</span>
        <span>•</span>
        <span>{date}</span>
      </div>
    </div>
  );
}
