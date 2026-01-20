"use client";

import React from "react";

export default function BrandFooter() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center">
        {/* Logo */}
        <div className="mx-auto mb-4 flex justify-center">
          <img
            src="https://res.cloudinary.com/dkxb7klnn/image/upload/v1768914901/Product_Banner_1_imcq8e.png"
            alt="MACAN Brake Pads"
            className="
              h-12
              sm:h-14
              md:h-16
              w-auto
              object-contain
            "
          />
        </div>

        <h2 className="text-lg sm:text-xl font-bold tracking-[0.15em] text-slate-900">
          TECHNOLOGY BY THAILAND
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-6 text-slate-500">
          MACAN là thương hiệu má phanh – phụ tùng xe máy đến từ Thái Lan, tập
          trung vào độ ổn định ma sát, kiểm soát chất lượng nghiêm ngặt, đáp ứng
          tiêu chuẩn an toàn và điều kiện vận hành thực tế khu vực Đông Nam Á.
        </p>
      </div>
    </section>
  );
}
