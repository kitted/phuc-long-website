"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { technique } from "@/app/data/technique";
import { slugify } from "@/app/lib/slugify";

interface Props {
  currentSlug: string;
  currentType?: string | string[];
}

export default function TechniqueRelatedPostsDetail({
  currentSlug,
  currentType,
}: Props) {
  const getRelatedPosts = () => {
    if (Array.isArray(currentType)) {
      return technique.filter((t) =>
        currentType.some((type) =>
          Array.isArray(t.type) ? t.type.includes(type) : t.type === type,
        ),
      );
    }
    return technique;
  };

  const posts = getRelatedPosts();

  const filteredPosts = posts
    .filter((post) => slugify(post.title) !== currentSlug)
    .slice(0, 3);

  if (!filteredPosts.length) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">
        Bài viết liên quan
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            href={`/technique/${slugify(post.title)}`}
            className="group block border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
              <Image
                src={post.banner.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 bg-white dark:bg-gray-900">
              <p className="text-xs text-blue-600 uppercase tracking-wide mb-2 font-semibold">
                {Array.isArray(post.type) ? post.type.join(", ") : post.type}
              </p>
              <h3 className="font-semibold line-clamp-2 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {post.banner?.description?.[0] || ""}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
