"use client";

import { useParams } from "next/navigation";
import Footer from "@/app/components/footer";
import TechniqueHeaderDetail from "@/app/components/technique/detail/techniqueHeaderDetail";
import TechniqueContentDetail from "@/app/components/technique/detail/techniqueContentDetail";
import TechniqueInterestedPostsDetail from "@/app/components/technique/detail/techniqueInterestedPostsDetail";
import SubLayout from "@/app/subLayout";
import React from "react";
import { technique } from "@/app/data/technique";
import { slugify } from "@/app/lib/slugify";
import TechniqueImageDetail from "@/app/components/technique/detail/techniqueImageDetail";
import TechniqueRelatedPostsDetail from "@/app/components/technique/detail/techniqueRelatedPostsDetail";

export default function TechniqueDetailPage() {
  const params = useParams();
  const rawSlug = params.slug as string;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

  const currentTechnique = technique.find((n) => slugify(n.title) === slug);

  if (!currentTechnique) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl bg-gray-50 dark:bg-gray-900">
        Không tìm thấy bài viết kỹ thuật
      </div>
    );
  }

  // Safe type handling
  const getCategory = (type: string | string[]) => {
    return Array.isArray(type) ? type.join(", ") : type;
  };

  const category = getCategory(currentTechnique.type);

  // Normalize content sections
  const sections: any[] = [];

  if (currentTechnique.banner?.description) {
    sections.push({
      text: Array.isArray(currentTechnique.banner.description)
        ? currentTechnique.banner.description
        : [currentTechnique.banner.description],
    });
  }

  (currentTechnique.content || []).forEach((item: any) => {
    if (item.title) {
      sections.push({ heading: item.title });
    }
    if (item.text) {
      sections.push({
        text: Array.isArray(item.text) ? item.text : [item.text],
      });
    }
    if (item.image) {
      sections.push({
        image: item.image.img,
        caption: item.image.title || "",
      });
    }
  });

  return (
    <>
      <SubLayout>
        <div className="pt-[165px] px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto px-4">
            <TechniqueHeaderDetail
              title={currentTechnique.title}
              date={currentTechnique.time}
              category={category}
              author={currentTechnique.writer}
            />

            <TechniqueImageDetail
              src={currentTechnique.banner.image}
              alt={currentTechnique.title}
              caption={currentTechnique.banner.title}
            />

            <TechniqueContentDetail
              sections={sections}
              tags={currentTechnique.tag || []}
              origin={currentTechnique.origin || "N/A"}
              views={currentTechnique.views || 0}
            />

            <TechniqueRelatedPostsDetail
              currentSlug={slug}
              currentType={currentTechnique.type}
            />

            <TechniqueInterestedPostsDetail currentSlug={slug} />
          </div>
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
