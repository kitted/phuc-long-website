"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { technique } from "@/app/data/technique";
import { slugify } from "@/app/lib/slugify";
import { TechniqueType } from "@/app/technique/type";

type Props = {
  currentSlug: string;
  currentType?: any;
};

export default function TechniqueRelatedPostsDetail({
  currentSlug,
  currentType,
}: Props) {
  // ✅ Nếu không truyền `relatedNews`, tự lọc từ `technique`
  const posts = currentType
    ? technique.filter((t) =>
        currentType.some((type: any) =>
          Array.isArray(t.type) ? t.type.includes(type) : t.type === type,
        ),
      )
    : technique;

  const filteredPosts = posts
    .filter((post) => slugify(post.title) !== currentSlug)
    .slice(0, 3);

  if (!filteredPosts.length) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Bài viết liên quan</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            href={`/technique/${slugify(post.title)}`}
            className="group block border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative h-48">
              <Image
                src={post.banner.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-blue-600 mb-2">{post.type}</p>
              <h3 className="font-semibold line-clamp-2 group-hover:underline">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {post.banner.description?.[0]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
