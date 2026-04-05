"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function ActivitiesSection() {
  const [darkMode, setDarkMode] = useState(false);

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
  const layoutBg = darkMode ? "bg-white/10" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";

  const images = [
    "https://res.cloudinary.com/dkxb7klnn/image/upload/q_auto/f_auto/v1775372890/z7684861214067_c1ac53bc4e1ec24e00e7b94ef59ebcd6_pqihsi.jpg",
    "https://res.cloudinary.com/dkxb7klnn/image/upload/q_auto/f_auto/v1775372890/z7684875337358_bf052fff408f984eab53456b0f3f3e9a_mxcmtc.jpg",
    "https://res.cloudinary.com/dkxb7klnn/image/upload/q_auto/f_auto/v1775372890/z7684854006819_f0926dfaf952d9013cfda2fee1476284_vswvng.jpg",
    "https://res.cloudinary.com/dkxb7klnn/image/upload/q_auto/f_auto/v1775372890/z7684835101532_43a2c2ea26ded2b2f8a584ab23a92a8b_zaijn5.jpg",
    "https://res.cloudinary.com/dkxb7klnn/image/upload/q_auto/f_auto/v1775372890/z7684875746878_846337fc61f74d26454c15bae649b046_tkrcrf.jpg",
    "https://res.cloudinary.com/dkxb7klnn/image/upload/q_auto/f_auto/v1775372891/z7684834183735_a0ea088a071caf28293f87c1a4b4611e_elvjic.jpg",
    "https://res.cloudinary.com/dkxb7klnn/image/upload/q_auto/f_auto/v1775372892/z7684875904934_7ba9ac846b6162af76c2794eb1e3889e_jmqyio.jpg",
    "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766311878/z7267792322408_04276dd02ddc15fdbcb4c8b3a1f8ec84_vjrxp3.jpg",
  ];

  return (
    <section
      className={`${layoutBg} ${textColor} px-10 md:px-20 pb-16 relative overflow-hidden`}
    >
      {/* <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center"> */}
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold uppercase">
          Hoạt Động Kinh Doanh
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-xl group"
            >
              <Image
                src={src}
                alt={`Hoạt động ${index + 1}`}
                width={200}
                height={200}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
