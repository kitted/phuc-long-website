"use client";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  // Auto-hide after 3s
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget; // Lưu form trước khi promise chạy

    emailjs
      .sendForm(
        "service_232vrhy",
        "template_4xj2ypt",
        form,
        "w2-xkAslcFcXIbhlr"
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          form.reset();
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <div className="w-[90%] md:w-[600px] bg-gradient-to-br from-[#0B0B2D] via-[#0F1A45] to-[#1A2B6D] p-8 shadow-2xl rounded-lg relative">
      <h2 className="text-center text-lg font-bold mb-6 text-white">
        LIÊN HỆ VỚI CHÚNG TÔI
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Email */}
        <div>
          <label className="block text-sm mb-1 text-white">EMAIL:</label>
          <input
            type="email"
            name="email"
            className="w-full rounded-md px-3 py-2 bg-white/10 border border-white/20 text-white 
                       placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 
                       focus:ring-[#0054A6]"
            placeholder="Nhập email"
            required
          />
        </div>

        {/* SĐT */}
        <div>
          <label className="block text-sm mb-1 text-white">SĐT:</label>
          <input
            type="text"
            name="phone"
            className="w-full rounded-md px-3 py-2 bg-white/10 border border-white/20 text-white 
                       placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 
                       focus:ring-[#0054A6]"
            placeholder="Nhập số điện thoại"
          />
        </div>

        {/* Địa chỉ */}
        <div>
          <label className="block text-sm mb-1 text-white">Đ/C:</label>
          <input
            type="text"
            name="address"
            className="w-full rounded-md px-3 py-2 bg-white/10 border border-white/20 text-white 
                       placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 
                       focus:ring-[#0054A6]"
            placeholder="Nhập địa chỉ"
          />
        </div>

        {/* Nội dung */}
        <div>
          <label className="block text-sm mb-1 text-white">NỘI DUNG:</label>
          <textarea
            rows={4}
            name="message"
            className="w-full rounded-md px-3 py-2 bg-white/10 border border-white/20 text-white 
                       placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 
                       focus:ring-[#0054A6]"
            placeholder="Nhập nội dung"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-white/10 border border-white/20 text-white py-2 rounded-md font-semibold 
                     backdrop-blur-sm hover:bg-white/20 transition disabled:opacity-50"
        >
          {loading ? "Đang gửi..." : "GỬI"}
        </button>
      </form>

      {/* Thông báo đẹp có fade */}
      {status && (
        <div
          className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-lg 
          text-white transition-opacity duration-1000 ease-in-out
          ${status === "success" ? "bg-green-500" : "bg-red-500"} 
          ${status ? "opacity-100 animate-fadeIn" : "opacity-0"}`}
        >
          {status === "success"
            ? "✅ Gửi email thành công!"
            : "❌ Gửi thất bại, vui lòng thử lại."}
        </div>
      )}
    </div>
  );
}
