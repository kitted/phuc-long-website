"use client";

import React from "react";
import SubLayout from "../subLayout";
import Particles from "../components/particles";
import Image from "next/image";
import Footer from "../components/footer";

function About() {
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <SubLayout>
        <div className=" px-6 pt-10 mx-auto space-y-8 max-w-7xl md:pt-10">
          <div
            className="w-full mx-auto lg:mx-0 flex flex-col items-center animate-fade-in pt-[8vh] md:pt-[10vh] -mt-4"
            ref={contentRef}
          >
            <Particles className="absolute inset-0 -z-10 " quantity={50} />
            <div className="relative w-[600px] md:w-[800px] h-auto aspect-[3/1] z-10 animate-fade-in">
              <Image
                src="/logo.png"
                alt="Saigon Viet Tourist"
                fill
                priority
                className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              />
            </div>

            <p className="mt-0 leading-8 duration-150 text-white group-hover:text-zinc-300 max-w-[900px] max-sm:text-md max-sm:mt-2">
              Chào mừng đến với Saigon Viet Tourist, nơi những chuyến đi dành
              cho doanh nghiệp được nâng lên một tầm cao mới. Chúng tôi không
              chỉ tổ chức các tour du lịch, chúng tôi kiến tạo những trải nghiệm
              độc đáo được thiết kế riêng để truyền cảm hứng, thúc đẩy sự sáng
              tạo và gắn kết tinh thần đồng đội cho các công ty tại Việt Nam.
            </p>
            <p className="mt-4 leading-8 duration-150 text-white group-hover:text-zinc-300 max-w-[900px] max-sm:text-md">
              Thế mạnh của Saigon Viet Tourist là sự linh hoạt và sáng tạo không
              giới hạn. Dù doanh nghiệp của bạn đang tìm kiếm một chương trình
              team building bùng nổ giữa thiên nhiên hùng vĩ, một chuyến du lịch
              khen thưởng sang trọng tại các resort 5 sao, hay một sự kiện hội
              nghị kết hợp khám phá văn hóa bản địa, đội ngũ của chúng tôi sẽ
              lắng nghe và biến ý tưởng của bạn thành hiện thực. Chúng tôi chăm
              chút từng chi tiết nhỏ nhất, từ hậu cần, kịch bản chương trình đến
              các hoạt động độc quyền, đảm bảo mỗi hành trình không chỉ là một
              chuyến đi mà còn là một di sản tinh thần, tiếp thêm năng lượng và
              tạo động lực cho sự phát triển bền vững của doanh nghiệp bạn.
            </p>
          </div>
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}

export default About;
