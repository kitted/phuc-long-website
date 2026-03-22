"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { technique } from "@/app/data/technique";
import { slugify } from "@/app/lib/slugify";

type Props = {
  currentSlug: string;
};

export default function TechniqueInterestedPostsDetail({ currentSlug }: Props) {
  // ✅ Lọc bỏ bài hiện tại
  const posts = technique
    .filter((post) => slugify(post.title) !== currentSlug)
    .slice(0, 4);

  if (!posts.length) return null;

  return (
    <div className="mt-16 pt-12 border-t">
      <h2 className="text-2xl font-bold mb-8">Bài viết bạn có thể quan tâm</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/technique/${slugify(post.title)}`}
            className="group block border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative h-32">
              <Image
                src={post.banner.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm line-clamp-2 group-hover:underline">
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
