import { useState } from "react";
import { ArrowRight } from "lucide-react";

function TourSchedule(data: any) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full flex mt-4 px-4 flex-col gap-3 max-[800px]:order-2">
      <h1 className="text-3xl text-black font-bold max-sm:text-2xl">
        Lịch Trình Mỗi Ngày
      </h1>

      <div className="mt-4 flex flex-col pr-4">
        {data?.data?.activities.length > 0 ? (
          data?.data?.activities?.map((item: any, i: any) => {
            const isOpen = openIndexes.includes(i);
            return (
              <div
                className="w-full h-full border-l-4 border-gray-200 px-6 mb-[20px] cursor-pointer"
                key={i}
                onClick={() => toggleIndex(i)}
              >
                <div className="w-full py-2 h-full border-b-2 border-gray-100 flex flex-col gap-y-1">
                  <div className="flex justify-between items-center cursor-pointer">
                    <h6 className="text-xl text-blue-500 font-bold max-sm:text-lg">
                      {item.title}
                    </h6>
                    <ArrowRight
                      className={`w-6 text-gray-500 transition-transform duration-500 ${
                        isOpen ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-md text-default font-bold">
                      {item.time}
                    </p>
                    <p className="text-md text-[#6e6e6e] font-medium whitespace-pre-line">
                      {item.desc?.split("\n").map((line: any, idx: any) => (
                        <span
                          key={idx}
                          className="block before:content-['•'] before:mr-2"
                        >
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-md text-[#6e6e6e] font-medium">Không có dữ liệu</p>
        )}
      </div>
    </div>
  );
}

export default TourSchedule;
