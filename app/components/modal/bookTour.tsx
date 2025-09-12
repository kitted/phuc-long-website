"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
  X,
  User,
  Mail,
  Phone,
  StickyNote,
  Calendar,
  Users,
} from "lucide-react";
import { useState } from "react";

interface BookTourModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookTourModal({
  isOpen,
  onOpenChange,
}: BookTourModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
    departureDate: "",
    peopleCount: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Đặt tour:", form);
    onOpenChange(false);
  };

  const inputStyle =
    "w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none";

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
        <Dialog.Content className="fixed z-50 left-1/2 top-1/2 max-h-[95vh] w-full max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-white px-8 py-8 shadow-xl border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="text-2xl font-semibold text-gray-800">
              📋 Liên Hệ Đặt Tour Du Lịch
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-gray-400 hover:text-red-500 transition">
                <X size={24} />
              </button>
            </Dialog.Close>
          </div>

          {/* Thông báo */}
          <div className="mb-6 text-gray-600 text-sm bg-blue-50 border border-blue-200 rounded-lg p-4">
            Nhân viên của chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất
            để sắp xếp tour phù hợp!
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Họ tên */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className={inputStyle}
                placeholder="Họ và tên"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputStyle}
                placeholder="Email"
              />
            </div>

            {/* Số điện thoại */}
            <div className="relative">
              <Phone
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                required
                className={inputStyle}
                placeholder="Số điện thoại"
              />
            </div>

            {/* Số người */}
            <div className="relative">
              <Users
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                name="peopleCount"
                type="number"
                min={1}
                value={form.peopleCount}
                onChange={handleChange}
                required
                className={inputStyle}
                placeholder="Số lượng người"
              />
            </div>

            {/* Ngày khởi hành */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ngày Khởi Hành
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  name="departureDate"
                  type="date"
                  value={form.departureDate}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-md border text-gray-700 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>

            {/* Ngày khởi hành */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ngày Trở Về
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  name="departureDate"
                  type="date"
                  value={form.departureDate}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-md border text-gray-700 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>

            {/* Ghi chú */}
            <div className="relative">
              <StickyNote
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                rows={3}
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Ghi chú thêm (nếu có)"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm text-lg"
            >
              Gửi yêu cầu đặt tour
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
