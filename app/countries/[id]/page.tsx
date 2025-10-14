"use client";
// import TourImage from "@/app/components/tourDetail/tourImage";
// import TourInfo from "@/app/components/tourDetail/info";
import { navigation } from "@/app/constant/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
// import TourSchedule from "@/app/components/tourDetail/tourSchedule";
// import TourNote from "@/app/components/tourDetail/tourNote";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
// import BookTourModal from "@/app/components/modal/bookTour";
// import AboutTour from "@/app/components/tourDetail/aboutTour";
// import TravelHighlights from "@/app/components/tourDetail/travelHightlight";
// import FAQAccordion from "@/app/components/tourDetail/faqAccordion";
import Image from "next/image";
import TravelIntro from "../intro";
// import TourCard from "@/app/components/tourCard";
import ReviewSection from "../review";
import { Navbar } from "../nav";

// const TourMap = dynamic(() => import("@/app/components/tourDetail/tourMap"), {
//   ssr: false,
// });

const tourLocations = [
  { name: "Hà Nội", lat: 21.0285, lon: 105.8542 },
  { name: "Đà Nẵng", lat: 16.0544, lon: 108.2022 },
  { name: "TP. Hồ Chí Minh", lat: 10.8231, lon: 106.6297 },
];

interface MetadataType {
  key: string;
  href: string;
  title: string;
  SubTitle: string;
  description?: Array<string>;
  image?: Array<string>;
}

function TourDetail() {
  const pathName = usePathname();
  const contentUrl = pathName?.split("/")[2];
  const [isScrolledPastWhiteSection, setIsScrolledPastWhiteSection] =
    useState(false);
  const [data, setData] = useState<MetadataType | null>(null);
  // const { width } = useWindowDimensions();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const whiteSection = document.getElementById("white-section");
      if (!whiteSection) return;
      const whiteSectionTop = whiteSection.getBoundingClientRect().top;
      setIsScrolledPastWhiteSection(whiteSectionTop <= 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* <div className="w-full h-full flex justify-center bg-[rgb(10,_62,_114)]">
        <div className="w-full max-w-[1440px] h-full flex justify-center">
          <div className="w-full h-full px-2">
            <div className="flex w-full max-w-[1440px] justify-between py-5 items-center top-0 z-50 duration-200 bg-zinc-900/500">
              <Link
                href="/tour"
                className={`duration-200 text-zinc-300 hover:text-zinc-100 ${
                  isScrolledPastWhiteSection ? "text-zinc-600" : "text-zinc-400"
                } bg-white text-edge-outline text-2xl whitespace-nowrap bg-clip-text cursor-pointer`}
              >
                <ArrowLeft className="inline-block w-5 h-5 ml-2" />
              </Link>
              <div className="flex justify-between gap-8">
                {navigation?.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className={`duration-200 max-[450px]:text-xs max-[450px]:pr-2 ${
                      "/" + pathName?.split("/")[1] === item.href
                        ? isScrolledPastWhiteSection
                          ? "text-black font-semibold"
                          : "text-zinc-100 font-semibold"
                        : isScrolledPastWhiteSection
                        ? "text-zinc-600"
                        : "text-zinc-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Navbar />
      <div className="relative w-full flex flex-col items-center justify-center bg-[rgb(10,_62,_114)] py-52 overflow-hidden">
        {/* Ảnh nền */}
        <Image
          src="/background.png"
          alt="bg"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Nội dung phía trên ảnh */}
        <div className="z-10 text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Tour Nước Pháp
          </h1>
          <h2 className="text-white text-2xl md:text-2xl mt-4 font-bold">
            Hướng Dẫn Du lịch
          </h2>
          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
            Xem Tất Cả Các Tour Đến Pháp
          </button>
        </div>
      </div>
      <TravelIntro />
      <div className="w-full flex flex-col items-center justify-center">
        <div
          className="w-full h-full pt-16 pb-48 bg-white flex justify-center"
          id="white-section"
        >
          <div className="w-full max-w-[1440px] flex flex-col items-center gap-10 justify-center px-2">
            <div className="w-full mt-10 flex flex-col items-start  text-center justify-start">
              <h1 className="text-3xl text-black font-bold max-sm:text-2xl">
                Tour Nổi Bật Tại Pháp
              </h1>

              <div className="w-full h-full mt-0 py-4">
                {/* <Swiper
                  slidesPerView={
                    width <= 1131 && width > 785
                      ? 3
                      : width <= 785 && width > 556
                      ? 2
                      : width <= 536
                      ? 1
                      : 4
                  }
                  slidesPerGroup={
                    width <= 1131 && width > 785
                      ? 3
                      : width <= 785 && width > 556
                      ? 2
                      : width <= 536
                      ? 1
                      : 4
                  }
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
                  speed={1500}
                >
                  <SwiperSlide>
                    <TourCard tour={{ _id: 1 }} />{" "}
                  </SwiperSlide>

                  <SwiperSlide>
                    <TourCard tour={{ _id: 1 }} />{" "}
                  </SwiperSlide>

                  <SwiperSlide>
                    <TourCard tour={{ _id: 1 }} />{" "}
                  </SwiperSlide>
                  <SwiperSlide>
                    <TourCard tour={{ _id: 1 }} />{" "}
                  </SwiperSlide>

                  <SwiperSlide>
                    <TourCard tour={{ _id: 1 }} />{" "}
                  </SwiperSlide>
                </Swiper> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white px-4 flex flex-col items-center">
        {/* Ẩm thực tại Pháp */}
        <section className="max-w-6xl w-full mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Ẩm Thực Tại Pháp
          </h2>

          <div className="overflow-x-auto custom-scrollbar">
            <div className="flex gap-6 w-max px-4">
              {[
                { src: "/foods/croissant.png", alt: "Croissant" },
                { src: "/foods/ratatouille.jpg", alt: "Ratatouille" },
                { src: "/foods/macaron.jpg", alt: "Macaron" },
                { src: "/foods/baguette.jpg", alt: "Baguette" },
                { src: "/foods/crepe.jpg", alt: "Crêpe" },
              ]?.map((food, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[300px] flex flex-col items-center"
                >
                  <Image
                    src={food.src}
                    alt={food.alt}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-[200px]"
                  />
                  <p className="mt-2 text-center font-medium">{food.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Địa điểm du lịch nổi bật */}
        <section className="max-w-6xl w-full mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Địa Điểm Du Lịch Nổi Bật
          </h2>

          <div className="overflow-x-auto custom-scrollbar px-2">
            <div className="flex gap-6 w-max">
              {[
                { src: "/places/eiffel.jpg", label: "Tháp Eiffel" },
                { src: "/places/louvre.jpg", label: "Bảo tàng Louvre" },
                {
                  src: "/places/montsaintmichel.jpg",
                  label: "Mont Saint-Michel",
                },
                { src: "/places/notredame.jpg", label: "Nhà thờ Đức Bà Paris" },
                {
                  src: "/places/versailles.jpg",
                  label: "Cung điện Versailles",
                },
              ]?.map((place, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[300px] flex flex-col items-center"
                >
                  <Image
                    src={place.src}
                    alt={place.label}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-[200px]"
                  />
                  <p className="mt-2 text-center font-medium">{place.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl w-full mb-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Cần Mang Gì Khi Đến Tham Quan Nước Pháp?
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                title: "Hộ chiếu & Visa",
                icon: "🛂",
                bg: "bg-blue-50",
              },
              {
                title: "Tiền mặt & Thẻ quốc tế",
                icon: "💳",
                bg: "bg-yellow-50",
              },
              {
                title: "Áo khoác nhẹ / đồ ấm",
                icon: "🧥",
                bg: "bg-rose-50",
              },
              {
                title: "Giày thể thao thoải mái",
                icon: "👟",
                bg: "bg-green-50",
              },
              {
                title: "Ổ cắm chuyển đổi điện",
                icon: "🔌",
                bg: "bg-indigo-50",
              },
            ]?.map((item, i) => (
              <div
                key={i}
                className={`${item.bg} rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition w-full max-w-[260px]`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-lg font-medium text-gray-800">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ReviewSection />

        <section className="max-w-4xl w-full mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Những Điều Cần Biết Khi Đến Pháp
          </h2>
          <div className="flex flex-col gap-4">
            {[
              {
                icon: "🫱",
                text: "Người Pháp đánh giá cao sự lịch sự và lễ phép",
              },
              { icon: "💶", text: "Tiền tệ sử dụng: Euro (€)" },
              {
                icon: "🗣️",
                text: "Đa phần người Pháp nói tiếng Pháp, một số nơi nói tiếng Anh",
              },
              { icon: "🍽️", text: "Giờ ăn tối thường từ 19h đến 21h" },
              {
                icon: "🚇",
                text: "Giữ gìn trật tự nơi công cộng, đặc biệt trên tàu điện ngầm",
              },
            ]?.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl shadow-md bg-white hover:bg-gray-50 transition"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-gray-800 text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default TourDetail;
