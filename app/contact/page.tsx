"use client";
import { Facebook, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import { Card } from "../components/card";
import SubLayout from "../subLayout";
import Particles from "../components/particles";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Footer from "../components/footer";
import Image from "next/image";
// import TourMapContact from "../components/tourDetail/tourMapContact";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/ntnhanbk/",
    label: "Linkedin",
    handle: "@ntnhanbk",
  },
  {
    icon: <PhoneCall size={20} />,
    href: "tel:+84929990899",
    label: "Mobile",
    handle: "+84 929990899",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:francis@lexcodex.net",
    label: "Email",
    handle: "francis@lexcodex.net",
  },
];

export default function Example() {
  const key: string = process.env.NEXT_PUBLIC_EMAILJS_API_KEY || "";
  const services_id: string =
    process.env.NEXT_PUBLIC_EMAILJS_API_SERVICE_ID || "";
  const template_id: string =
    process.env.NEXT_PUBLIC_EMAILJS_API_TEMPLATE_ID || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contentRef = React.useRef<HTMLDivElement>(null);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.send(
        services_id,
        template_id,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        key
      );

      toast.success("Successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err: any) {
      console.error("Email gửi thất bại:", err.text);
      toast.success("Error sending email");
    }
  };

  return (
    <>
      <SubLayout>
        <div className=" px-6 pt-10 mx-auto space-y-8 max-w-7xl sm:pt-32 pb-10">
          <div
            className="w-full h-full mx-auto lg:mx-0 flex items-center flex-col  animate-fade-in md:mt-0"
            ref={contentRef}
          >
            <Particles className="absolute inset-0 -z-10 " quantity={50} />
            <div className="mt-5 relative w-[600px] md:w-[800px] h-auto aspect-[3/1] z-10 animate-fade-in">
              <Image
                src="/logo.png"
                alt="Saigon Viet Tourist"
                fill
                priority
                className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              />
            </div>

            {/* <h1 className="py-3.5 px-0.5 z-10 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text mt-2">
              Saigon Viet Tourist
            </h1> */}
            {/* <h4 className="text-base text-white mt-1 md:text-xl">
              Liên hệ tư vấn miễn phí
            </h4> */}

            <div className="w-full mt-10 flex items-center gap-4 max-md:flex-col">
              <div className="w-full basis-1/2 flex flex-col max-md:basis-full max-md:items-center">
                <h6 className="text-2xl text-white  md:text-3xl text-bold">
                  Kết nối với chúng tôi{" "}
                </h6>
                {/*<p className="mt-4 leading-8 duration-150 text-white group-hover:text-zinc-300 text-start max-w-[500px] max-md:text-center">*/}
                {/*  At Saigon Viet Tourist, we believe that every great adventure begins*/}
                {/*  with a conversation. Whether you're dreaming of a relaxing beach*/}
                {/*  retreat, an exciting cultural tour, or a custom-designed*/}
                {/*  itinerary, we’re here to bring your vision to life.*/}
                {/*</p>*/}
                {/*<p className="mt-4 leading-8 duration-150 text-white group-hover:text-zinc-300 text-start max-w-[500px] max-md:text-center">*/}
                {/*  Our dedicated team is passionate about travel and committed to*/}
                {/*  helping you create unforgettable experiences. With an eye for*/}
                {/*  detail and a love for exploration, we’ll guide you every step of*/}
                {/*  the way — from the moment you reach out to the day you return*/}
                {/*  home with lifelong memories.*/}
                {/*</p>*/}
                {/* <p className="mt-4 leading-8 duration-150 text-white group-hover:text-zinc-300 text-start max-w-[500px] max-md:text-left">
                Chào mừng đến với Saigon Viet Tourist, nơi những chuyến đi dành
                cho doanh nghiệp được nâng lên một tầm cao mới. Chúng tôi không
                chỉ tổ chức các tour du lịch, chúng tôi kiến tạo những trải
                nghiệm độc đáo được thiết kế riêng để truyền cảm hứng, thúc đẩy
                sự sáng tạo và gắn kết tinh thần đồng đội cho các công ty tại
                Việt Nam.
              </p> */}
                <p className="mt-4 leading-8 duration-150 text-white group-hover:text-zinc-300 text-start max-w-[500px] max-md:text-left">
                  Thế mạnh của Saigon Viet Tourist là sự linh hoạt và sáng tạo
                  không giới hạn. Dù doanh nghiệp của bạn đang tìm kiếm một
                  chương trình team building bùng nổ giữa thiên nhiên hùng vĩ,
                  một chuyến du lịch khen thưởng sang trọng tại các resort 5
                  sao, hay một sự kiện hội nghị kết hợp khám phá văn hóa bản
                  địa, đội ngũ của chúng tôi sẽ lắng nghe và biến ý tưởng của
                  bạn thành hiện thực. Chúng tôi chăm chút từng chi tiết nhỏ
                  nhất, từ hậu cần, kịch bản chương trình đến các hoạt động độc
                  quyền, đảm bảo mỗi hành trình không chỉ là một chuyến đi mà
                  còn là một di sản tinh thần, tiếp thêm năng lượng và tạo động
                  lực cho sự phát triển bền vững của doanh nghiệp bạn.
                </p>
                <div className="flex flex-col mt-5 gap-3">
                  <div className="flex gap-2 items-center">
                    <PhoneCall size={20} className="text-white" />
                    <a
                      className="text-white text-base underline"
                      href="tel:+840785092999"
                    >
                      078 509 2999
                    </a>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Mail size={20} className="text-white" />
                    <a
                      href="mailto:saigonvietourist@gmail.com"
                      className="text-white text-base underline"
                    >
                      saigonvietourist@gmail.com
                    </a>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Facebook size={20} className="text-white" />
                    <a
                      className="text-white text-base underline"
                      target="_blank"
                      href="https://www.facebook.com/saigonvietourist/"
                    >
                      @saigonvietourist
                    </a>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MapPin className="w-6 h-6 flex-shrink-0 text-white self-start mt-1" />
                    <span className="text-white text-base underline">
                      610A, ĐT743A, KP.Đông Tân, P.Dĩ An, TP.HCM
                    </span>
                  </div>
                </div>
              </div>

              <div className="basis-1/2 max-md:basis-full max-md:w-full max-md:mt-7">
                <Card>
                  <form className="w-full p-5" onSubmit={handleSendMessage}>
                    {/* <h6 className="text-base text-white  md:text-2xl">
                    Send a message
                  </h6> */}
                    <div className="flex flex-col items-center justify-center mt-4 gap-5">
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm text-white">
                          Tên
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full bg-transparent p-2 text-sm  border text-white rounded-md focus:outline-none focus:ring focus:ring-zinc-500"
                          required
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          value={formData.name}
                        />
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm text-white">
                          Email
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="w-full bg-transparent p-2 text-sm  border text-white rounded-md focus:outline-none focus:ring focus:ring-zinc-500"
                          required
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          value={formData.email}
                        />
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm text-white">
                          Số điện thoại
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className="w-full bg-transparent p-2 text-sm  border text-white rounded-md focus:outline-none focus:ring focus:ring-zinc-500"
                          required
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          value={formData.phone}
                        />
                      </div>

                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm text-white">
                          Nội dung
                        </label>
                        <textarea
                          id="phone"
                          name="phone"
                          className="w-full h-[110px] resize-none bg-transparent p-2 text-sm  border text-white rounded-md focus:outline-none focus:ring focus:ring-zinc-500"
                          required
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          value={formData.message}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full h-12 text-white border-white/10 bg-zinc-900/10 shadow-lg shadow-zinc-900/20 duration-200"
                      >
                        Gửi
                      </button>
                    </div>
                  </form>
                </Card>
              </div>
            </div>
            {/* <TourMapContact
              locations={[
                {
                  name: "610A, ĐT743A, KP.Đông Tân, P.Dĩ An, TP.HCM",
                  lat: 10.915685794511763,
                  lon: 106.76473357115822,
                },
              ]}
            /> */}
            {/* <div className="container flex items-center justify-center h-full px-4 mx-auto mt-14">
            <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
              {socials.map((s) => (
                <Card>
                  <Link
                    href={s.href}
                    target="_blank"
                    className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                  >
                    <span
                      className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                      aria-hidden="true"
                    />
                    <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-blue-700 group-hover:text-blue-700 group-hover:bg-blue border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                      {s.icon}
                    </span>{" "}
                    <div className="z-10 flex flex-col items-center">
                      <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                        {s.handle}
                      </span>
                      <span className="mt-4 text-sm text-center duration-1000 text-white group-hover:text-zinc-200">
                        {s.label}
                      </span>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div> */}
          </div>
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
