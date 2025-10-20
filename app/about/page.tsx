"use client";

import React, { useState, useEffect, useRef } from "react";
import SubLayout from "../subLayout";
import Image from "next/image";
import Footer from "../components/footer";
import Head from "next/head";
import { Link } from "lucide-react";

const sliderItems = [
  { image: "/slide/slide1.png", title: "Max Plus" },
  { image: "/slide/slide2.png", title: "Plus EX" },
  { image: "/slide/slide3.png", title: "Max Veloz" },
  { image: "/slide/slide4.png", title: "YMR" },
  { image: "/slide/slide5.png", title: "Và Nhiều Sản Phẩm Khác..." },
  { image: "/slide/slide1.png", title: "Max Plus" },
  { image: "/slide/slide2.png", title: "Plus EX" },
  { image: "/slide/slide3.png", title: "Max Veloz" },
  { image: "/slide/slide4.png", title: "YMR" },
  { image: "/slide/slide5.png", title: "Và Nhiều Sản Phẩm Khác..." },
  { image: "/slide/slide1.png", title: "Max Plus" },
  { image: "/slide/slide2.png", title: "Plus EX" },
  { image: "/slide/slide3.png", title: "Max Veloz" },
  { image: "/slide/slide4.png", title: "YMR" },
  { image: "/slide/slide5.png", title: "Và Nhiều Sản Phẩm Khác..." },
];

function About() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  // ---- Theme ----
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
  const textColor = darkMode ? "text-white" : "text-black";
  const BgSlide = darkMode ? "bg-neutral-900" : "bg-gray-100";

  // ---- Slider logic ----
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 1;
    const autoScroll = setInterval(() => {
      if (!isDragging) {
        slider.scrollLeft += scrollAmount;
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(autoScroll);
  }, [isDragging]);

  // Drag logic
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <Head>
        {/* Preload tất cả ảnh để click là hiển thị ngay */}
        {sliderItems?.map((item, i) => (
          <link key={i} rel="preload" as="image" href={item.image} />
        ))}
      </Head>

      <SubLayout>
        <div className={`${containerBg} px-6 pt-10 mx-auto space-y-8 py-10`}>
          <div
            className="w-full mx-auto lg:mx-0 flex flex-col items-center pt-[8vh] md:pt-[10vh] xl:pt-[10vh] lg:pt-[10vh] 2xl:pt-[10vh] md:mt-2 mt-1"
            ref={contentRef}
          >
            <h1
              className={`${containerBg} text-2xl md:text-3xl font-extrabold italic ${textColor} text-center mb-6`}
            >
              Về Chúng Tôi
            </h1>
            {/* <h1
              className={`${containerBg} text-2xl md:text-3xl font-extrabold ${textColor} text-center mb-6`}
            >
              Về Chúng Tôi
            </h1> */}
            {/* Logo */}
            <div className="relative w-[600px] md:w-[800px] h-auto aspect-[3/1] z-10">
              <Image
                src="/logo.png"
                alt="Phúc Long"
                fill
                priority
                loading="eager"
                className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              />
            </div>

            {/* Nội dung */}
            {/* <div className="text-left">
              <p
                className={`mt-0 text-center leading-8 ${textColor} max-w-[900px]`}
              >
                GIỚI THIỆU VỀ NHÀ PHÂN PHỐI PHỤ TÙNG DẦU NHỚT PHÚC LONG{" "}
              </p>
              <p
                className={`mt-0 text-center leading-8 ${textColor} max-w-[900px]`}
              >
                Đối tác tin cậy của các tiệm sửa xe và đại lý phụ tùng tại miền
                Tây{" "}
              </p>
              <br />
              <p
                className={`mt-0 text-left leading-8 ${textColor} max-w-[900px]`}
              >
                Với hơn 10 năm kinh nghiệm trong lĩnh vực phân phối dầu nhớt và
                phụ tùng , NHÀ PHÂN PHỐI PHỤ TÙNG DẦU NHỚT PHÚC LONG tự hào là
                đơn vị cung cấp đáng tin cậy cho hàng trăm đại lý và tiệm sửa xe
                tại Cần Thơ, Hậu Giang, Vĩnh Long và Đồng Tháp. Chúng tôi không
                chỉ mang đến sản phẩm chất lượng – giá cả hợp lý – giao hàng
                nhanh chóng, mà còn luôn đồng hành cùng khách hàng trong suốt
                quá trình kinh doanh.
              </p>
              <br />
              <p
                className={`mt-0 text-center leading-8 ${textColor} max-w-[900px]`}
              >
                TẦM NHÌN
              </p>
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Trở thành nhà phân phối dầu nhớt và phụ tùng xe máy hàng đầu khu
                vực miền Tây, xây dựng thương hiệu PHÚC LONG gắn liền với uy
                tín, chất lượng và sự tận tâm phục vụ.{" "}
              </p>
              <br />
              <p
                className={`mt-0 text-center leading-8 ${textColor} max-w-[900px]`}
              >
                SỨ MỆNH{" "}
              </p>
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Phân phối sản phẩm chính hãng, chất lượng cao, nguồn gốc rõ
                ràng. Cung cấp giải pháp kinh doanh hiệu quả cho tiệm sửa xe và
                đại lý phụ tùng. Góp phần nâng cao chất lượng dịch vụ và niềm
                tin của người tiêu dùng Việt Nam.
              </p>
              <br />
              <p
                className={`mt-0 text-center leading-8 ${textColor} max-w-[900px]`}
              >
                GIÁ TRỊ CỐT LÕI{" "}
              </p>
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Uy tín – Là nền tảng của mọi hợp tác lâu dài.{" "}
              </p>
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Tận tâm – Luôn đặt lợi ích của khách hàng lên hàng đầu.{" "}
              </p>
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Chuyên nghiệp – Làm việc có quy trình, chuẩn mực và cam kết.
              </p>
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Hợp tác cùng phát triển – Cùng khách hàng xây dựng thị trường
                bền vững.{" "}
              </p>
              <br />
              <p
                className={`mt-0 text-center leading-8 ${textColor} max-w-[900px]`}
              >
                SẢN PHẨM & DỊCH VỤ CHÍNH
              </p>
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Dầu nhớt Plus EX – Công nghệ tiên tiến, bảo vệ động cơ tối đa.
                Phụ tùng xe máy chất lượng cao: Nhông sên dĩa, lốp xe, vòng bi,
                bố thắng, dây ga – dây thắng, linh kiện điện,…{" "}
              </p>
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Hỗ trợ công nợ linh hoạt 30–60 ngày, giúp khách hàng chủ động
                dòng tiền. Dịch vụ giao hàng tận nơi – tư vấn kỹ thuật – hỗ trợ
                bán hàng.
              </p>
              <br />
              <p
                className={`mt-0 text-center leading-8 ${textColor} max-w-[900px]`}
              >
                CAM KẾT PHÚC LONG
              </p>
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                “Phúc Long cam kết mang đến cho khách hàng sản phẩm thật – giá
                trị thật – niềm tin thật.”{" "}
              </p>
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Chúng tôi hiểu rằng, thành công của khách hàng chính là thước đo
                lớn nhất cho sự phát triển của doanh nghiệp. Vì vậy, mỗi đơn
                hàng, mỗi cuộc gọi và mỗi lần giao tiếp đều được chúng tôi thực
                hiện với trách nhiệm, sự tận tâm và tinh thần phục vụ chuyên
                nghiệp.
              </p>
              <br />
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                KHU VỰC PHỤC VỤ Hiện tại, PHÚC LONG đang phát triển mạnh tại:
                Cần Thơ – Hậu Giang – Vĩnh Long – Đồng Tháp, và định hướng mở
                rộng hệ thống phân phối đến toàn bộ khu vực Đồng bằng sông Cửu
                Long trong thời gian tới.{" "}
              </p>
              <br />
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                THÔNG TIN LIÊN HỆ Công ty: NHÀ PHÂN PHỐI PHỤ TÙNG DẦU NHỚT PHÚC
                LONG{" "}
              </p>
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Hotline/Zalo: [Số điện thoại]
              </p>
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Địa chỉ kho hàng: [Địa chỉ cụ thể]
              </p>
            </div> */}
            <div className="text-left">
              {/* <p
                className={`mt-0 text-center leading-8 ${textColor} max-w-[900px]`}
              >
                GIỚI THIỆU VỀ NHÀ PHÂN PHỐI PHỤ TÙNG DẦU NHỚT PHÚC LONG{" "}
              </p> */}
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Đối tác tin cậy của các tiệm sửa xe và đại lý phụ tùng tại miền
                Tây - Với hơn 10 năm kinh nghiệm trong lĩnh vực phân phối dầu
                nhớt và phụ tùng , NHÀ PHÂN PHỐI PHỤ TÙNG DẦU NHỚT PHÚC LONG tự
                hào là đơn vị cung cấp đáng tin cậy cho hàng trăm đại lý và tiệm
                sửa xe tại Cần Thơ, Hậu Giang, Vĩnh Long và Đồng Tháp. Chúng tôi
                không chỉ mang đến sản phẩm chất lượng, giá cả hợp lý, giao hàng
                nhanh chóng, mà còn luôn đồng hành cùng khách hàng trong suốt
                quá trình kinh doanh.
              </p>
              <br />
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                TẦM NHÌN - Trở thành nhà phân phối dầu nhớt và phụ tùng xe máy
                hàng đầu khu vực miền Tây, xây dựng thương hiệu PHÚC LONG gắn
                liền với uy tín, chất lượng và sự tận tâm phục vụ.{" "}
              </p>
              <br />
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                SỨ MỆNH - Phân phối sản phẩm chính hãng, chất lượng cao, nguồn
                gốc rõ ràng. Cung cấp giải pháp kinh doanh hiệu quả cho tiệm sửa
                xe và đại lý phụ tùng. Góp phần nâng cao chất lượng dịch vụ và
                niềm tin của người tiêu dùng Việt Nam.
              </p>
              <br />
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                GIÁ TRỊ CỐT LÕI - Uy tín là nền tảng của mọi hợp tác lâu dài.
                Tận tâm luôn đặt lợi ích của khách hàng lên hàng đầu. Chuyên
                nghiệp làm việc có quy trình, chuẩn mực và cam kết. Hợp tác cùng
                phát triển cùng khách hàng xây dựng thị trường bền vững.{" "}
              </p>
              <br />
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                SẢN PHẨM & DỊCH VỤ - Dầu nhớt Plus EX công nghệ tiên tiến, bảo
                vệ động cơ tối đa. Phụ tùng xe máy chất lượng cao như nhông sên
                dĩa, lốp xe, vòng bi, bố thắng, dây ga, dây thắng, linh kiện
                điện,…{" "}
              </p>
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Hỗ trợ công nợ linh hoạt 30 đến 60 ngày, giúp khách hàng chủ
                động dòng tiền. Dịch vụ giao hàng tận nơi, tư vấn kỹ thuật, hỗ
                trợ bán hàng.
              </p>
              <br />
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                CAM KẾT - “Phúc Long cam kết mang đến cho khách hàng sản phẩm
                thật giá trị thật niềm tin thật.”{" "}
              </p>
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Chúng tôi hiểu rằng, thành công của khách hàng chính là thước đo
                lớn nhất cho sự phát triển của doanh nghiệp. Vì vậy, mỗi đơn
                hàng, mỗi cuộc gọi và mỗi lần giao tiếp đều được chúng tôi thực
                hiện với trách nhiệm, sự tận tâm và tinh thần phục vụ chuyên
                nghiệp.
              </p>
              <br />
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                KHU VỰC PHỤC VỤ - PHÚC LONG đang phát triển mạnh tại: Cần Thơ,
                Hậu Giang, Vĩnh Long, Đồng Tháp, và định hướng mở rộng hệ thống
                phân phối đến toàn bộ khu vực Đồng bằng sông Cửu Long trong thời
                gian tới.{" "}
              </p>
              <br />
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                THÔNG TIN LIÊN HỆ - Nhà phân phối phụ tùng dầu nhớt PHÚC LONG:{" "}
              </p>
              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Zalo:{" "}
                <a
                  href="https://zalo.me/3648225468408384638"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  https://zalo.me/officalPHUCLONG
                </a>
              </p>
              <div className={`flex gap-2 items-center ${textColor}`}>
                <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                  Facebook:
                </p>
                <a
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  href="https://www.facebook.com/daunhotphutungPHUCLONG"
                >
                  fb/@phuclongvn
                </a>
              </div>
              <div className={`flex gap-2 items-center ${textColor}`}>
                <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                  Hotline:
                </p>
                <a className="text-blue-500 hover:underline" href="0939449861">
                  0939449861
                </a>
                &
                <a className="text-blue-500 hover:underline" href="0939449861">
                  0939449861
                </a>
              </div>
              <div className={`flex gap-2 items-center ${textColor}`}>
                <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                  Gmail:
                </p>
                <a
                  href="mailto:phuclong@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  phuclong@gmail.com
                </a>
              </div>

              <p className={`mt-0 leading-8 ${textColor} max-w-[900px]`}>
                Địa chỉ kho hàng: Số B1 hẻm 19, đường Lê Hồng Phong, Khu vực 2,
                Phường Bình Thủy, quận Bình Thủy, TP Cần Thơ
              </p>
            </div>
            {/* Slider */}
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing px-4 py-10 w-full"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {sliderItems?.map((item, idx) => (
                <div
                  key={idx}
                  className={`min-w-[300px] max-w-[350px] flex-shrink-0 ${BgSlide} rounded-2xl p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform`}
                  onClick={() => setPreviewImg(item.image)}
                >
                  <p className={`mt-3 ${textColor} text-center`}>
                    {item.title}
                  </p>
                  <div className="relative w-[250px] h-[250px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority
                      loading="eager"
                      className="object-contain cursor-pointer rounded-lg"
                      sizes="(max-width: 768px) 150px, 250px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SubLayout>
      <Footer />

      {/* Popup Preview */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center"
          onClick={() => setPreviewImg(null)}
        >
          <div className="relative w-[90%] h-[90%]">
            <Image
              src={previewImg}
              alt="Preview"
              fill
              priority
              loading="eager"
              className="object-contain rounded-xl shadow-lg"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setPreviewImg(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}

export default About;
