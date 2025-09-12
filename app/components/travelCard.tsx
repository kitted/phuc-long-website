"use client";

import { slugify } from "@/util/helpers/convert-url";
import { Star } from "lucide-react";
import Link from "next/link";

export default function TourCard({ tour }: { tour: any }) {
  const {
    _id,
    name,
    images = [],
    day,
    description,
    price,
    salePrice,
    averageRating,
    cities = [],
  } = tour;

  const imageUrl =
    images[0] || "https://via.placeholder.com/384x200?text=No+Image";

  const isOnSale = salePrice && price && salePrice < price;

  return (
    <Link
      href={`/tour/${slugify(name)}-${_id}`}
      className="block w-full h-full"
    >
      <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden h-full min-h-[500px]">
        <div className="relative w-full h-[220px] min-h-[150px]">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between flex-1 p-4">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(averageRating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-1 text-sm font-medium">
                {averageRating?.toFixed(1) || "0.0"}
              </span>
            </div>

            <div className="min-h-[48px] flex items-center">
              <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
                {name}
              </h3>
            </div>

            <div className="flex items-center space-x-3 text-xs text-gray-600 mb-2">
              <div>📅 {day} Ngày</div>
              <div>📍 {cities.length} Thành Phố</div>
            </div>

            <p className="text-sm text-gray-700 mb-3 line-clamp-2 min-h-[40px]">
              {description || "No description available."}
            </p>

            <div className="flex items-center mb-3">
              <span className="text-xs text-gray-600 items-center">
                Giá tour:{" "}
              </span>

              {/* <span className="text-xs text-gray-600">Giá chỉ từ</span>
              <span className="ml-1 text-blue-600 font-bold">
                {(salePrice || price)?.toLocaleString()} Vnđ
              </span> */}
            </div>
            <div className="flex items-center mb-3">
              <span className="text-blue-600 font-bold">
                Vui lòng liên hệ để có giá tốt nhất
              </span>
            </div>
          </div>

          <div className="flex space-x-2 mt-auto">
            <button className="flex-1 bg-red-500 text-white font-medium py-2 px-4 rounded text-sm">
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
