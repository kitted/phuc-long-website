"use client";
import React from "react";
import TechniqueItem from "./techniqueItem";
import { TechniqueType } from "@/app/technique/type";

type Props = {
  data: TechniqueType[] | any;
};

export default function TechniqueList({ data }: Props) {
  if (!data?.length) {
    return (
      <p className="text-center text-gray-500 mt-10">
        Không có bài viết kỹ thuật nào.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {data.map((item: any) => (
        <TechniqueItem
          key={item.id}
          title={item.title}
          desc={item.banner?.description?.[0]}
          date={item.time}
          img={item.banner?.image}
        />
      ))}
    </div>
  );
}
