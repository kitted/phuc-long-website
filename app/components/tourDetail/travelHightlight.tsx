"use client";

import { Check } from "lucide-react";
// import { Button } from "@/components/ui/button"

export default function TravelHighlights({ data }: any) {
  return (
    <div className=" mx-auto">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-[#9b2226] mb-2 max-sm:text-2xl">
            Du lịch nổi bật
          </h2>
          <p className="text-gray-700">
            Thông tin di chuyển cụ thể có thể tìm thấy ở đây:
          </p>
          <div className="mt-4">
            <button className="bg-[#9b2226] hover:bg-[#7c1d1d] text-white px-6 py-2 rounded-none">
              Đưa đón tại sân bay
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {/* Left column */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="text-[#9b2226] mt-1 flex-shrink-0" size={24} />
              <p className="text-gray-700">
                Hướng dẫn viên du lịch và tài xế chuyên nghiệp
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Check className="text-[#9b2226] mt-1 flex-shrink-0" size={24} />
              <p className="text-gray-700">
                Những khách sạn được lựa chọn kỹ lưỡng, tất cả đều đã được thử
                nghiệm và tin cậy
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Check className="text-[#9b2226] mt-1 flex-shrink-0" size={24} />
              <p className="text-gray-700">
                Bao gồm tiền hoa hồng cho nhân viên tiếp tân và nhà hàng
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Check className="text-[#9b2226] mt-1 flex-shrink-0" size={24} />
              <p className="text-gray-700">
                Bao gồm tiền hoa hồng và thuế lưu trú của khách sạn
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Check className="text-[#9b2226] mt-1 flex-shrink-0" size={24} />
              <p className="text-gray-700">Ăn sáng hằng ngày và bữa tối</p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="text-[#9b2226] mt-1 flex-shrink-0" size={24} />
              <p className="text-gray-700">
                Những điểm tham quan không thể bỏ qua và những điều bất ngờ thú
                vị
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Check className="text-[#9b2226] mt-1 flex-shrink-0" size={24} />
              <p className="text-gray-700">
                Tai nghe hướng dẫn du lịch cho chuyến tham quan linh hoạt
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Check className="text-[#9b2226] mt-1 flex-shrink-0" size={24} />
              <p className="text-gray-700">
                Xe khách sang trọng và có máy lạnh, Wi-Fi ở hầu hết các quốc gia
                hoặc phương tiện di chuyển thay thế (như tàu hỏa)
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Check className="text-[#9b2226] mt-1 flex-shrink-0" size={24} />
              <p className="text-gray-700">
                Trải nghiệm tự do và thời gian rảnh
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Check className="text-[#9b2226] mt-1 flex-shrink-0" size={24} />
              <p className="text-gray-700">
                Đôi khi, có thể sử dụng các khách sạn có tiêu chuẩn và vị trí
                tương tự.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
