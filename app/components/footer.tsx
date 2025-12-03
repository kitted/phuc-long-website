"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (pathname === "/" || !visible) return null;

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Cột trái: Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src="https://res.cloudinary.com/dkxb7klnn/image/upload/v1764693713/PLUS_1_lpcvtz.png"
            alt="Phuc Long Logo"
            className="  w-full h-auto"
          />
        </div>

        {/* Cột phải: Tất cả phần còn lại */}
        <div className="flex flex-col justify-between h-full w-full text-center md:text-center">
          {/* Links (căn giữa theo chiều dọc) */}
          <div className="flex flex-1 items-center justify-center">
            <div className="grid grid-cols-2 gap-[2rem] sm:gap-[5rem] md:gap-[200px] text-left">
              <div className="leading-[30px]">
                <h3 className="text-[#191919A3] text-[12px] mb-3">
                  Hỗ Trợ Khách Hàng
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <Link href="/help" className="hover:underline">
                      Hướng dẫn mua hàng
                    </Link>
                  </li>
                  <li>
                    <Link href="/payment" className="hover:underline">
                      Hướng dẫn thanh toán
                    </Link>
                  </li>
                  <li>
                    <Link href="/policy" className="hover:underline">
                      Chính sách công ty
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="leading-[30px]">
                <h3 className="text-[#191919A3] text-[12px] mb-3">
                  Giới Thiệu
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <Link href="/about" className="hover:underline">
                      Về công ty
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:underline">
                      Góp ý - phản hồi
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:underline">
                      Thông tin liên lạc
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-3 mt-6 border-t border-gray-200 pt-5">
            <a
              href="https://www.facebook.com/daunhotphutungPHUCLONG"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Company info */}
          <div className="space-y-1 text-gray-600 text-sm mt-4">
            <p>Địa chỉ: B1/19 Lê Hồng Phong, Bình Thủy, TP.CT</p>
            <p>Sđt: 0939449861</p>
            <p>Email: phuclong@gmail.com</p>
            <p>MST: *****</p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 pt-4 text-gray-500 text-sm w-full text-center md:text-center mt-4">
            © 2025 PhucLong All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
