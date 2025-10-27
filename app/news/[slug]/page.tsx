"use client";

import { useParams } from "next/navigation";
import Footer from "@/app/components/footer";
import InterestedPostsDetail from "@/app/components/news/detail/interestedPostsDetail";
import NewsContentDetail from "@/app/components/news/detail/newsContentDetail";
import NewsHeaderDetail from "@/app/components/news/detail/newsHeaderDetail";
import NewsImageDetail from "@/app/components/news/detail/newsImageDetail";
import RelatedPostsDetail from "@/app/components/news/detail/relatedPostsDetail";
import SubLayout from "@/app/subLayout";
import React from "react";
import { news } from "@/app/data/news";
import { slugify } from "@/app/lib/slugify";

export default function NewsDetailPage() {
  const params = useParams();
  const rawSlug = params?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

  const currentNews = news.find((n) => slugify(n.title) === slug);

  if (!currentNews) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Không tìm thấy bài viết
      </div>
    );
  }

  // 🔧 Chuẩn hóa dữ liệu content
  const sections = [];

  if (Array.isArray(currentNews.banner.description)) {
    sections.push({ text: currentNews.banner.description });
  }

  currentNews.content.forEach((item: any) => {
    if (item.title) {
      sections.push({ heading: item.title, text: [] });
    }
    if (item.text) {
      sections.push({ text: [item.text] });
    }
    if (item.image) {
      sections.push({
        image: item.image.img,
        caption: item.image?.title || "",
      });
    }
    if (item.images && item.images.length > 0) {
      sections.push({
        images: item.images,
        caption: item?.caption || "", // tùy bạn có muốn caption cho nhóm ảnh không
      });
    }
    if (item.video && item.videoCaption.length > 0) {
      sections.push({
        video: item.video,
        videoCaption: item?.videoCaption || "", // tùy bạn có muốn caption cho nhóm ảnh không
      });
    }
  });

  return (
    <>
      <SubLayout>
        <div className="pt-[165px] md:pt-[165px] px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto px-4">
            <NewsHeaderDetail
              title={currentNews.title}
              date={currentNews.time}
              category={currentNews.type.join(", ")}
              author={currentNews.writer}
            />

            <NewsImageDetail
              src={currentNews.banner.image}
              alt={currentNews.title}
              caption={currentNews.banner.title}
            />

            {/* ✅ Truyền thêm tag, origin, views */}
            <NewsContentDetail
              sections={sections}
              tags={currentNews.tag}
              origin={currentNews.origin}
              views={currentNews.views}
            />

            <RelatedPostsDetail
              currentSlug={slug}
              currentType={currentNews.type}
            />

            <InterestedPostsDetail currentSlug={slug} />
          </div>
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
