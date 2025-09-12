import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function AboutSection() {
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
  return (
    <section
      className={`${layoutBg} ${textColor} px-10 md:px-20 py-16  relative overflow-hidden`}
    >
      {/* Logo background (chỉ hiện ở mobile) */}
      <div className="absolute inset-0 md:hidden opacity-20 flex justify-center items-center pb-[40px]">
        <Image
          src="/logo.png"
          alt="Phuc Long Logo"
          width={400}
          height={200}
          className="w-[90%] h-[50%] object-contain"
        />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="space-y-6">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold uppercase">
            Về Chúng Tôi
          </h2>

          {/* Description */}
          <p className="text-base leading-relaxed">
            Lubrex FZC is a leading lubricant manufacturing company, established
            in 2005 as the flag bearer in the UAE of a group of lubricant
            manufacturing oil exporting companies with decades of experience,
            supplying high-end lubricants and greases to meet the ever-growing
            needs of our clients. Our quality standards are unparalleled as we
            have been awarded 20 OEM approvals from the world’s leading
            automotive manufacturers, including BMW, Mercedes, Volvo, to name a
            few. <br />
            <Link href="#" className="underline font-medium">
              Learn more &gt;
            </Link>
          </p>

          {/* Small image */}
          <div className="w-full max-w-md">
            <Image
              src="/lubrex/lubrexFactory.png"
              alt="Lubrex Factory"
              width={600}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Right logo (desktop mới hiển thị riêng) */}
        <div className="hidden md:flex justify-center md:justify-end">
          <Image
            src="/logo.png"
            alt="Phuc Long Logo"
            width={400}
            height={400}
            className="w-full max-w-[350px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
