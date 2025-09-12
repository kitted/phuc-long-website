import TourCard from "./tourCard";

function Select() {
  return (
    <div className="w-full mt-10 flex flex-col items-center justify-center">
      <h1 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-3xl whitespace-nowrap bg-clip-text mt-5 uppercase">
        Tại sao lựa chọn chúng tôi
      </h1>

      <div className="mt-3 w-full flex gap-4 max-[868px]:flex-wrap justify-center">
        <div className="w-1/3 h-[350px] pb-5 flex flex-col gap-2  bg-white rounded-md shadow-md relative cursor-pointer overflow-hidden group max-[868px]:w-[46%] max-sm:w-full ">
          <div className="w-full h-[170px] ">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/372/532/articles/23138-dao-phu-quy-600x400.jpg?v=1574838413923"
              alt="tour"
              className="object-cover w-full h-full transform group-hover:scale-105 duration-700"
            />
          </div>
          <div className="flex flex-col gap-2 px-2 pt-2">
            <h6 className="font-semibold text-[#333333] text-xl">
              Đội ngũ hướng dẫn viên tận tâm
            </h6>
            <p className="text-base text-gray-700 ">
              Đội ngũ hướng dẫn viên của chúng tôi luôn sẵn sàng hỗ trợ 24/7,
              giúp chuyến đi của bạn diễn ra suôn sẻ và đầy ắp kỷ niệm.
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[350px] pb-5 flex flex-col gap-2  bg-white rounded-md shadow-md relative cursor-pointer overflow-hidden group max-[868px]:w-[46%] max-sm:w-full">
          <div className="w-full h-[170px] ">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/372/532/articles/da-nang-su-thay-doi-ngoan-muc-cua-lang-chai-nam-xua-2.jpg?v=1575897433350"
              alt="tour"
              className="object-cover w-full h-full transform group-hover:scale-105 duration-700"
            />
          </div>
          <div className="flex flex-col gap-2 px-2 pt-2">
            <h6 className="font-semibold text-[#333333] text-xl">
              Dịch vụ cá nhân hoá theo nhu cầu
            </h6>
            <p className="text-base text-gray-700 ">
              Mỗi tour được xây dựng dựa trên mục tiêu của doanh nghiệp: nghỉ
              dưỡng, team building, hay khen thưởng – tất cả đều tối ưu.
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[350px] pb-5 flex flex-col gap-2  bg-white rounded-md shadow-md relative cursor-pointer overflow-hidden group max-[868px]:w-[96%] max-sm:w-full">
          <div className="w-full h-[170px] ">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/372/532/articles/da-lat-pys-travel0091.jpg?v=1574838549530"
              alt="tour"
              className="object-cover w-full h-full transform group-hover:scale-105 duration-700"
            />
          </div>
          <div className="flex flex-col gap-2 px-2 pt-2">
            <h6 className="font-semibold text-[#333333] text-xl">
              Kinh nghiệm tổ chức chuyên nghiệp
            </h6>
            <p className="text-base text-gray-700 ">
              Chúng tôi đã đồng hành cùng hàng trăm công ty và tổ chức, mang đến
              những hành trình an toàn, thú vị và gắn kết tập thể hiệu quả.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select;
