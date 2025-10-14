"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-center  text-[15px] text-gray-400 mx-2 mt-16">
      <ol className="inline-flex gap-1 flex-wrap justify-center">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        {segments?.map((seg, idx) => {
          const href = "/" + segments.slice(0, idx + 1).join("/");
          const isLast = idx === segments.length - 1;

          return (
            <li key={idx} className="flex items-center gap-1">
              <span>&gt;</span>
              {isLast ? (
                <span className="text-gray-500 capitalize">{seg}</span>
              ) : (
                <Link href={href} className="hover:underline capitalize">
                  {seg}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
