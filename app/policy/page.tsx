"use client";

import React, { useState, useEffect, useRef } from "react";
import SubLayout from "../subLayout";
import Image from "next/image";
import Footer from "../components/footer";
import Head from "next/head";

const sliderItems = [
  { image: "/slide/slide1.png", title: "Max Plus" },
  { image: "/slide/slide2.png", title: "Plus EX" },
  { image: "/slide/slide3.png", title: "Max Veloz" },
  { image: "/slide/slide4.png", title: "YMR" },
  { image: "/slide/slide5.png", title: "Và Nhiều Sản Phẩm Khác..." },
  { image: "/slide/slide1.png", title: "Max Plus" },
  { image: "/slide/slide2.png", title: "Plus EX" },
  { image: "/slide/slide3.png", title: "Max Veloz" },
  { image: "/slide/slide4.png", title: "YMR" },
  { image: "/slide/slide5.png", title: "Và Nhiều Sản Phẩm Khác..." },
  { image: "/slide/slide1.png", title: "Max Plus" },
  { image: "/slide/slide2.png", title: "Plus EX" },
  { image: "/slide/slide3.png", title: "Max Veloz" },
  { image: "/slide/slide4.png", title: "YMR" },
  { image: "/slide/slide5.png", title: "Và Nhiều Sản Phẩm Khác..." },
];

function Policy() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  // ---- Theme ----
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme === "dark");

    const handleThemeChange = () => {
      const newTheme = localStorage.getItem("theme");
      setDarkMode(newTheme === "dark");
    };

    window.addEventListener("themeChange", handleThemeChange);
    return () => window.removeEventListener("themeChange", handleThemeChange);
  }, []);

  const containerBg = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";

  // ---- Slider logic ----
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 1;
    const autoScroll = setInterval(() => {
      if (!isDragging) {
        slider.scrollLeft += scrollAmount;
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(autoScroll);
  }, [isDragging]);

  // Drag logic
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      {/* <Head>
         {sliderItems.map((item, i) => (
          <link key={i} rel="preload" as="image" href={item.image} />
        ))}
      </Head> */}

      <SubLayout>
        <div className={`${containerBg} px-6 pt-10 mx-auto space-y-8 py-10`}>
          <div
            className="w-full mx-auto lg:mx-0 flex flex-col items-center pt-[8vh] md:pt-[10vh] -mt-4"
            ref={contentRef}
          >
            <h1
              className={`${containerBg} text-2xl md:text-3xl font-extrabold ${textColor} text-center mb-6`}
            >
              Chính Sách Công Ty
            </h1>
            {/* Logo */}
            <div className="relative w-[600px] md:w-[800px] h-auto aspect-[3/1] z-10">
              <Image
                src="/logo.png"
                alt="Phúc Long"
                fill
                priority
                loading="eager"
                className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              />
            </div>

            {/* Nội dung */}
            <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
              Lubrex FZC is a leading lubricant manufacturing company,
              registered in Hamriyah Free Zone, Sharjah, UAE. It was established
              in 2005 as the flag bearer in the UAE of a group of lubricant
              manufacturing oil exporting companies with decades of experience.
              With a primary focus on the GCC, Middle East, Far East and Africa,
              Lubrex is uniquely positioned to lead in manufacturing,
              development and marketing in the regional and international
              markets, providing unmatched level of support and services for its
              customers. Having realised that a critical factor of success in
              any venture is the access to specific industry knowledge, the
              company is founded and articulated by a team of leading industry
              professionals, strategic partners, and business associates, which
              in turn have encouraged and emboldened the company to participate
              in one of the most challenging markets in the world. Lubrex uses
              state of the art automated blending systems with latest
              machineries to keep products precisely blended avoiding any avoid
              human errors, ensuring consistency in the delivery of products in
              scheduled time without compromising in quality. Lubrex lubricants
              are made from first grade mineral oils, virgin base oils, and high
              quality additives to meet industry standards.
            </p>
            <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
              At Lubrex, we focus on three main core values: Satisfaction:
              Customer satisfaction is our foremost commitment. We are customer
              centric in everything we do. We are focused on providing the best
              possible experience for our distributors, dealers and end
              customers. Quality: Our business is all about protection;
              protection of equipment, protection of employees while operating
              equipment, and protection of environment. This can only be
              achieved by striving and achieving quality in our products and
              processes. Passion: We are passionate about doing our business and
              creating a win-win situation for ourselves, our customers, our
              products, and our services.
            </p>

            {/* Slider */}
            {/* <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing px-4 py-10 w-full"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {sliderItems.map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-[300px] max-w-[350px] flex-shrink-0 bg-neutral-900 rounded-2xl p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform"
                  onClick={() => setPreviewImg(item.image)}
                >
                  <p className="mt-3 text-white text-center">{item.title}</p>
                  <div className="relative w-[250px] h-[250px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority
                      loading="eager"
                      className="object-contain cursor-pointer rounded-lg"
                      sizes="(max-width: 768px) 150px, 250px"
                    />
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </SubLayout>
      <Footer />

      {/* Popup Preview */}
      {/* {previewImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center"
          onClick={() => setPreviewImg(null)}
        >
          <div className="relative w-[90%] h-[90%]">
            <Image
              src={previewImg}
              alt="Preview"
              fill
              priority
              loading="eager"
              className="object-contain rounded-xl shadow-lg"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setPreviewImg(null)}
          >
            ✕
          </button>
        </div>
      )} */}
    </>
  );
}

export default Policy;
