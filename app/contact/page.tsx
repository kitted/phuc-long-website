"use client";
import { Facebook, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import { Card } from "../components/card";
import SubLayout from "../subLayout";
import Particles from "../components/particles";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Footer from "../components/footer";
import Image from "next/image";
import TourMapContact from "../components/tourMapContact";
import Banner from "../components/banner";
// import TourMapContact from "../components/tourDetail/tourMapContact";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/ntnhanbk/",
    label: "Linkedin",
    handle: "@ntnhanbk",
  },
  {
    icon: <PhoneCall size={20} />,
    href: "tel:+84929990899",
    label: "Mobile",
    handle: "+84 929990899",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:francis@lexcodex.net",
    label: "Email",
    handle: "francis@lexcodex.net",
  },
];

export default function Example() {
  const key: string = process.env.NEXT_PUBLIC_EMAILJS_API_KEY || "";
  const services_id: string =
    process.env.NEXT_PUBLIC_EMAILJS_API_SERVICE_ID || "";
  const template_id: string =
    process.env.NEXT_PUBLIC_EMAILJS_API_TEMPLATE_ID || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contentRef = React.useRef<HTMLDivElement>(null);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.send(
        services_id,
        template_id,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        key
      );

      toast.success("Successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err: any) {
      console.error("Email gửi thất bại:", err.text);
      toast.success("Error sending email");
    }
  };
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
  const textColor = darkMode ? "text-white" : "text-black";
  const buttonBg = darkMode
    ? "bg-gradient-to-r from-gray-800/40 to-gray-900/40 border border-white/20"
    : "bg-gradient-to-r from-white/10 to-white/10 border border-black/10";

  return (
    <>
      <SubLayout>
        <div className="pt-[65px] md:pt-[1px]">
          <div
            className={`${containerBg} ${textColor} px-6 pt-10 mx-auto space-y-8 max-w-7xl sm:pt-32 pb-10`}
          >
            <div
              className="w-full h-full mx-auto lg:mx-0 flex items-center flex-col  animate-fade-in md:mt-0"
              ref={contentRef}
            >
              <div className="w-full h-full flex items-top max-md:flex-col ">
                <div className="w-full basis-1/2 flex flex-col max-md:basis-full max-md:items-center">
                  <div className="flex flex-col gap-3">
                    <div className=" relative w-full h-full aspect-[3/2] z-10 animate-fade-in rounded-lg">
                      <Image
                        src="/lubrex/lubrex1.png"
                        alt="Phúc Long"
                        fill
                        priority
                        className="object-fill drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] rounded-lg"
                      />
                    </div>
                    <div className="flex gap-2 items-center">
                      <PhoneCall size={20} />
                      <a
                        className=" text-base underline"
                        href="tel:+04xxxxxxxxx"
                      >
                        09xxxxxxxxx
                      </a>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Mail size={20} />
                      <a
                        href="mailto:phuclong@gmail.com"
                        className="  text-base underline"
                      >
                        phuclong@gmail.com
                      </a>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Facebook size={20} />
                      <a
                        className=" text-base underline"
                        target="_blank"
                        href="https://www.facebook.com/phuclong/"
                      >
                        @phuclong
                      </a>
                    </div>
                    <div className="flex gap-2 items-center">
                      <MapPin className="w-6 h-6 flex-shrink-0  self-start mt-1" />
                      <span className=" text-base underline">
                        h1/19, Lê Hồng Phong, Bình Thuỷ, TPCT
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`basis-1/2 max-md:basis-full max-md:w-full ${containerBg} ${textColor}`}
                >
                  <div
                    className={`w-full flex flex-col items-center gap-10 ${containerBg} ${textColor} `}
                  >
                    {/* Contact form */}
                    <div className="w-[90%] md:w-[600px] bg-gradient-to-br from-[#0B0B2D] via-[#0F1A45] to-[#1A2B6D] p-8  shadow-2xl">
                      <h2 className="text-center text-lg font-bold mb-6 text-white">
                        LIÊN HỆ VỚI CHÚNG TÔI
                      </h2>

                      <form className="flex flex-col gap-4">
                        {/* Email */}
                        <div>
                          <label className="block text-sm mb-1 text-white">
                            EMAIL:
                          </label>
                          <input
                            type="email"
                            className="w-full rounded-md px-3 py-2 bg-white/10 border border-white/20 text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0054A6]"
                            placeholder="Nhập email"
                          />
                        </div>

                        {/* SĐT */}
                        <div>
                          <label className="block text-sm mb-1 text-white">
                            SĐT:
                          </label>
                          <input
                            type="text"
                            className="w-full rounded-md px-3 py-2 bg-white/10 border border-white/20 text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0054A6]"
                            placeholder="Nhập số điện thoại"
                          />
                        </div>

                        {/* Địa chỉ */}
                        <div>
                          <label className="block text-sm mb-1 text-white">
                            Đ/C:
                          </label>
                          <input
                            type="text"
                            className="w-full rounded-md px-3 py-2 bg-white/10 border border-white/20 text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0054A6]"
                            placeholder="Nhập địa chỉ"
                          />
                        </div>

                        {/* Nội dung */}
                        <div>
                          <label className="block text-sm mb-1 text-white">
                            NỘI DUNG:
                          </label>
                          <textarea
                            rows={4}
                            className="w-full rounded-md px-3 py-2 bg-white/10 border border-white/20 text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0054A6]"
                            placeholder="Nhập nội dung"
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          className="mt-4 bg-white/10 border border-white/20 text-white py-2 rounded-md font-semibold backdrop-blur-sm hover:bg-white/20 transition"
                        >
                          GỬI
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <TourMapContact
                locations={[
                  {
                    name: "h1/19, Lê Hồng Phong, Bình Thuỷ, TPCT",
                    lat: 10.08261,
                    lon: 105.73968,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
