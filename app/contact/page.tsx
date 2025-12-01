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
import ContactForm from "../components/contactForm";

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
  const containerBg2 = darkMode ? "bg-white" : "bg-black";
  const containerBg3 = darkMode ? "border-white" : "border-black";
  const textColor = darkMode ? "text-white" : "text-black";
  const buttonBg = darkMode
    ? "bg-gradient-to-r from-gray-800/40 to-gray-900/40 border border-white/20"
    : "bg-gradient-to-r from-white/10 to-white/10 border border-black/10";

  return (
    <>
      <SubLayout>
        <div className="pt-[65px] md:pt-[1px]">
          <div
            className={`${containerBg} ${textColor}   pt-10 mx-auto space-y-8 max-w-7xl sm:pt-32 pb-10`}
          >
            <div
              className="w-full h-full mx-auto lg:mx-0 flex items-center flex-col  animate-fade-in md:mt-0"
              ref={contentRef}
            >
              <div className="w-full flex flex-col items-center py-4 gap-8">
                {/* Contact form */}
                <ContactForm />

                {/* Social info */}
                <div
                  className={`flex flex-col gap-4 w-[90%] md:w-[600px] ${containerBg2}/5 border ${containerBg3}/10 rounded-lg p-6 backdrop-blur-sm`}
                >
                  <div className={`flex gap-2 items-center ${textColor}`}>
                    <PhoneCall size={20} />
                    <a className="text-base underline" href="0939449861">
                      0939449861
                    </a>
                  </div>
                  <div className={`flex gap-2 items-center ${textColor}`}>
                    <Mail size={20} />
                    <a
                      href="mailto:phuclong@gmail.com"
                      className="text-base underline"
                    >
                      phuclong@gmail.com
                    </a>
                  </div>
                  <div className={`flex gap-2 items-center ${textColor}`}>
                    <Facebook size={20} />
                    <a
                      className="text-base underline"
                      target="_blank"
                      href="https://www.facebook.com/daunhotphutungPHUCLONG"
                    >
                      fb/@phuclong
                    </a>
                  </div>
                  <div className={`flex gap-2 items-start ${textColor}`}>
                    <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-base underline">
                      Số B1 hẻm 19, đường Lê Hồng Phong, Khu vực 2, Phường Bình
                      Thủy, quận Bình Thủy, TP Cần Thơ
                    </span>
                  </div>
                </div>
              </div>

              <TourMapContact
                locations={[
                  {
                    name: "B1/19, Lê Hồng Phong, Bình Thuỷ, TPCT",
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
