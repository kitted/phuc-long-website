"use client";

import SubLayout from "../subLayout";
import React from "react";
import Footer from "../components/footer";
import Paginate from "../components/paginate";
import NewsSearch from "../components/news/newsSearch";
import NewsCategories from "../components/news/newsCategories";
import NewsHeader from "../components/news/newsHeader";
import NewsHighlight from "../components/news/newsHighlight";
import NewsList from "../components/news/newsList";

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
