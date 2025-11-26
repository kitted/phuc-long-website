import Image from "next/image";
import { useEffect, useState } from "react";

export default function PartnerSection() {
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
  const containerBg1 = darkMode
    ? "bg-gradient-to-b from-[#191919] to-[#0E0E0E]"
    : "bg-white/10";
  const cardBg = darkMode ? "bg-white/10" : "bg-white/13";
  const textColor = darkMode ? "text-white" : "text-black";
  return (
    <section
      className={`relative overflow-hidden py-16 flex flex-col items-center justify-center ${containerBg}`}
    >
      {/* Background gradient blur */}
      <div className="absolute -left-10 top-1/4 w-[180px] h-[220px] bg-gradient-to-br from-[#2100DF] via-[#46E3EE] to-[#907CFF] opacity-30 blur-[80px] rounded-full"></div>
      <div className="absolute -right-10 bottom-1/4 w-[180px] h-[220px] bg-gradient-to-br from-[#18A0FB] via-[#1F2AF2] to-[#EE46D3] opacity-30 blur-[80px] rounded-full"></div>
      <div className="absolute -right-90 bottom-0.3/4 w-[180px] h-[220px] bg-gradient-to-br from-[#18A0FB] via-[#1F2AF2] to-[#EE46D3] opacity-30 blur-[80px] rounded-full"></div>
      <div className="absolute -left-90 top-0.3/4 w-[180px] h-[220px] bg-gradient-to-br from-[#2100DF] via-[#46E3EE] to-[#907CFF] opacity-30 blur-[80px] rounded-full"></div>

      {/* Logo */}
      <div className="relative z-10 mb-6 sm:mb-10">
        <Image
          src="/logo.png"
          alt="Phuc Long Logo"
          width={200}
          height={200}
          className="object-contain mx-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full px-4">
        <div
          className={`p-8 rounded-2xl shadow-lg ${containerBg1} text-center`}
        >
          <h3 className={`text-lg sm:text-xl font-bold ${textColor}`}>
            Cộng tác với hơn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18A0FB] to-[#907CFF]">
              200+ địa điểm bán lẻ
            </span>{" "}
            khắp <span className="font-extrabold">ĐBSCL</span>
          </h3>
          <p className={`mt-4 text-sm sm:text-base ${textColor}`}>
            Và là đại diện bán sỉ của các dòng sản phẩm nhập khẩu chất lượng như
            ...
          </p>
        </div>
      </div>
    </section>
  );
}
