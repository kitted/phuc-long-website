"use client";

import Footer from "@/app/components/footer";
import NewsCategories from "@/app/components/news/newsCategories";
import NewsHeader from "@/app/components/news/newsHeader";
import NewsHighlight from "@/app/components/news/newsHighlight";
import NewsList from "@/app/components/news/newsList";
import NewsSearch from "@/app/components/news/newsSearch";
import Paginate from "@/app/components/paginate";
import SubLayout from "@/app/subLayout";
import React from "react";

export default function Example() {
  return (
    <>
      <SubLayout>
        <div className="pt-[165px] md:pt-[165px] px-4 md:px-8 max-w-7xl mx-auto">
          <NewsSearch />
          <NewsHeader />
          <NewsCategories />
          <div className="pt-[10px] md:pt-[40px] px-4 md:px-8 max-w-7xl mx-auto">
            <NewsHighlight />
            <NewsList />
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <Paginate
              currentPage={1}
              totalPages={5}
              onPageChange={(page) => console.log("Go to page:", page)}
            />
          </div>
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
