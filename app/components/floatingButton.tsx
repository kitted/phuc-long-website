"use client";

import React from "react";
import { Phone, Facebook } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  const buttons = [
    {
      key: "phone",
      href: "tel:0939449861",
      label: "Gọi",
      bg: "bg-green-500",
      icon: <Phone size={20} className="text-white" />,
    },
    {
      key: "zalo",
      href: "https://zalo.me/3648225468408384638",
      label: "Zalo",
      bg: "bg-white border shadow-md",
      icon: (
        <Image
          src="/zalo.png"
          alt="Zalo"
          width={32}
          height={20}
          className="p-1"
        />
      ),
    },
    {
      key: "facebook",
      href: "https://www.facebook.com/daunhotphutungPHUCLONG",
      label: "Facebook",
      bg: "bg-blue-600",
      icon: <Facebook size={20} className="text-white" />,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[9999] pointer-events-auto">
      {buttons.map((button) => (
        <motion.a
          key={button.key}
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center ${button.bg} ${button.key === "zalo" ? "p-1.5" : ""}`}
        >
          {button.icon}
        </motion.a>
      ))}
    </div>
  );
}
