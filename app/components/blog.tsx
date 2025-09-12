import TourCard from "./tourCard";

function Blog() {
    return (

        <div className="w-full mt-10 flex flex-col items-center justify-center">
            <h1 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-3xl whitespace-nowrap bg-clip-text mt-5 uppercase">
                Cảm hứng du lịch
            </h1>
            <span className="text-white text-center max-sm:text-xs">Thông tin về du lịch, văn hóa, ẩm thực, các sự kiện và lễ hội tại các điểm đến Việt nam, Đông Nam Á và Thế Giới</span>


            <div className="mt-3 w-full h-full flex flex-wrap gap-4">

                <div className="w-[calc(33.333%-1rem)] h-full max-h-[500px] pb-5 flex flex-col gap-2  bg-white rounded-md shadow-md relative cursor-pointer overflow-hidden group max-md:w-[calc(49%-1rem)] max-sm:w-[calc(99%-1rem)]">
                    <div className="w-full h-[170px] ">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/372/532/articles/da-nang-su-thay-doi-ngoan-muc-cua-lang-chai-nam-xua-2.jpg?v=1575897433350"
                            alt="tour"
                            className="object-cover w-full h-full transform group-hover:scale-105 duration-700"
                        />
                    </div>
                    <div className="flex flex-col gap-2 px-2 pt-2">
                        <h6 className="font-semibold text-[#333333] text-xl">
                            Cẩm nang du lịch Đà Nẵng một ngày cho hội bạn vui chơi “sập” Đà thành
                        </h6>
                        <p className="text-base text-gray-700 ">
                            Đà Nẵng có cả núi, đồng bằng và biển, chỉ nằm cách Hội An 30 km. Bao quanh bởi hàng loạt điểm tham quan du ...
                        </p>
                    </div>

                </div>

                <div className=" w-[calc(33.333%-1rem)] h-full max-h-[500px] pb-5 flex flex-col gap-2  bg-white rounded-md shadow-md relative cursor-pointer overflow-hidden group max-md:w-[calc(49%-1rem)] max-sm:w-[calc(99%-1rem)]">
                    <div className="w-full h-[170px] ">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/372/532/articles/da-lat-pys-travel0091.jpg?v=1574838549530"
                            alt="tour"
                            className="object-cover w-full h-full transform group-hover:scale-105 duration-700"
                        />
                    </div>
                    <div className="flex flex-col gap-2 px-2 pt-2">
                        <h6 className="font-semibold text-[#333333] text-xl">
                            Bí quyết du lịch Đà Lạt tự túc giá rẻ để xách túi và đi ngay không cần suy nghĩ
                        </h6>
                        <p className="text-base text-gray-700 ">
                            1. Thời tiết, khí hậu mát mẻ Đa phần các thành phố du lịch khác đều có các mùa nóng – lạnh đặc biệt và biến...
                        </p>
                    </div>
                </div>

                <div className="w-[calc(33.333%-1rem)] h-full max-h-[500px] pb-5 flex flex-col gap-2  bg-white rounded-md shadow-md relative cursor-pointer overflow-hidden group max-md:w-[calc(49%-1rem)] max-sm:w-[calc(99%-1rem)]">
                    <div className="w-full h-[170px] ">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/372/532/articles/23138-dao-phu-quy-600x400.jpg?v=1574838413923"
                            alt="tour"
                            className="object-cover w-full h-full transform group-hover:scale-105 duration-700"
                        />
                    </div>
                    <div className="flex flex-col gap-2 px-2 pt-2">
                        <h6 className="font-semibold text-[#333333] text-xl">
                            Vui chơi thả ga cùng bạn bè tại Phan Thiết với cẩm nang du lịch chi tiết này
                        </h6>
                        <p className="text-base text-gray-700 ">
                            Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về hướng ...
                        </p>
                    </div>
                </div>


                <div className="w-[calc(33.333%-1rem)] h-full max-h-[500px] pb-5 flex flex-col gap-2  bg-white rounded-md shadow-md relative cursor-pointer overflow-hidden group max-md:w-[calc(49%-1rem)] max-sm:w-[calc(99%-1rem)]">
                    <div className="w-full h-[170px] ">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/372/532/articles/da-nang-su-thay-doi-ngoan-muc-cua-lang-chai-nam-xua-2.jpg?v=1575897433350"
                            alt="tour"
                            className="object-cover w-full h-full transform group-hover:scale-105 duration-700"
                        />
                    </div>
                    <div className="flex flex-col gap-2 px-2 pt-2">
                        <h6 className="font-semibold text-[#333333] text-xl">
                            Cẩm nang du lịch Đà Nẵng một ngày cho hội bạn vui chơi “sập” Đà thành
                        </h6>
                        <p className="text-base text-gray-700 ">
                            Đà Nẵng có cả núi, đồng bằng và biển, chỉ nằm cách Hội An 30 km. Bao quanh bởi hàng loạt điểm tham quan du ...
                        </p>
                    </div>

                </div>

                <div className=" w-[calc(33.333%-1rem)] h-full max-h-[500px] pb-5 flex flex-col gap-2  bg-white rounded-md shadow-md relative cursor-pointer overflow-hidden group max-md:w-[calc(49%-1rem)] max-sm:w-[calc(99%-1rem)]">
                    <div className="w-full h-[170px] ">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/372/532/articles/da-lat-pys-travel0091.jpg?v=1574838549530"
                            alt="tour"
                            className="object-cover w-full h-full transform group-hover:scale-105 duration-700"
                        />
                    </div>
                    <div className="flex flex-col gap-2 px-2 pt-2">
                        <h6 className="font-semibold text-[#333333] text-xl">
                            Bí quyết du lịch Đà Lạt tự túc giá rẻ để xách túi và đi ngay không cần suy nghĩ
                        </h6>
                        <p className="text-base text-gray-700 ">
                            1. Thời tiết, khí hậu mát mẻ Đa phần các thành phố du lịch khác đều có các mùa nóng – lạnh đặc biệt và biến...
                        </p>
                    </div>
                </div>

                <div className="w-[calc(33.333%-1rem)] h-full max-h-[500px] pb-5 flex flex-col gap-2  bg-white rounded-md shadow-md relative cursor-pointer overflow-hidden group max-md:w-[calc(49%-1rem)] max-sm:w-[calc(99%-1rem)]">
                    <div className="w-full h-[170px] ">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/372/532/articles/23138-dao-phu-quy-600x400.jpg?v=1574838413923"
                            alt="tour"
                            className="object-cover w-full h-full transform group-hover:scale-105 duration-700"
                        />
                    </div>
                    <div className="flex flex-col gap-2 px-2 pt-2">
                        <h6 className="font-semibold text-[#333333] text-xl">
                            Vui chơi thả ga cùng bạn bè tại Phan Thiết với cẩm nang du lịch chi tiết này
                        </h6>
                        <p className="text-base text-gray-700 ">
                            Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về hướng ...
                        </p>
                    </div>
                </div>


            </div>


        </div>
    );
}

export default Blog;