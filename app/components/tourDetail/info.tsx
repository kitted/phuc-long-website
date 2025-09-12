import { useState } from "react";
import { CalendarDays, Soup, Car, Clock } from "lucide-react";
import DescriptionModal from "../modal/descriptionModal";

interface BookTour {
  setOpenModal: (open: boolean) => void;
  data: any;
}

function TourInfo({ setOpenModal, data }: BookTour) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <div className="w-1/2 max-md:w-full px-10 max-md:px-4 py-6 flex flex-col gap-6 animate-fadeIn">
        <h1 className="text-3xl font-bold text-blue-700 leading-snug">
          {data?.name || ""}
        </h1>

        <div className="text-base text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-700 mb-3 line-clamp-2 min-h-[40px]">
            {data?.description || "No description available."}
          </p>
          {data?.description?.length > 120 && (
            <button
              onClick={() => setShowDescription(true)}
              className="text-blue-600 underline mt-1 hover:text-blue-800 transition"
            >
              Xem thêm
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-sm:grid-cols-1">
          <InfoBlock
            icon={<CalendarDays />}
            title="Lưu trú "
            value={`${data?.day || 0} Ngày`}
          />
          <InfoBlock
            icon={<Soup />}
            title="Bữa ăn "
            value={`${data?.food || "Không có"}`}
          />
          <InfoBlock
            icon={<Car />}
            title="Di chuyển "
            value={`${data?.transportation || "Tự do"}`}
          />
          <InfoBlock
            icon={<Clock />}
            title="Khởi hành "
            value={`${data?.depart || "Tự do"}`}
          />
        </div>

        <div className="flex justify-between items-center flex-wrap gap-4 mt-2">
          {/* <div className="text-2xl sm:text-3xl font-semibold text-blue-700">
            {data?.price?.toLocaleString() || 0} Vnđ
          </div> */}

          <div className="flex items-center mb-3">
            <span className="text-blue-600 font-bold">
              Vui lòng liên hệ để có giá tốt nhất
            </span>
          </div>
          <button
            onClick={() => setOpenModal(true)}
            className="px-6 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition-all"
          >
            Liên hệ ngay
          </button>
        </div>
      </div>

      <DescriptionModal
        open={showDescription}
        onClose={() => setShowDescription(false)}
        description={data?.description}
      />
    </>
  );
}
export default TourInfo;

function InfoBlock({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-start min-w-[140px]">
      <span className="flex gap-2 items-center text-gray-700 text-sm">
        {icon}
        {title}
        <span className="text-[rgb(25,110,220)] text-sm font-medium">
          {value}
        </span>
      </span>
    </div>
  );
}
