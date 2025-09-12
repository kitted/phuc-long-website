import Image from "next/image";

export default function PartnerSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-black overflow-hidden py-12 sm:py-20">
      {/* Background gradient blur */}
      <div className="absolute -left-10 top-1/4 w-[180px] h-[220px] bg-gradient-to-br from-[#2100DF] via-[#46E3EE] to-[#907CFF] opacity-30 blur-[80px] rounded-full"></div>
      <div className="absolute -right-10 bottom-1/4 w-[180px] h-[220px] bg-gradient-to-br from-[#18A0FB] via-[#1F2AF2] to-[#EE46D3] opacity-30 blur-[80px] rounded-full"></div>

      {/* Logo */}
      <div className="relative z-10 mb-6 sm:mb-10">
        <Image
          src="/logo.png"
          alt="Phuc Long Logo"
          width={200}
          height={200}
          className="object-contain mx-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full px-4">
        <div className="rounded-2xl bg-gradient-to-b from-[#191919] to-[#0E0E0E] p-6 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Cộng tác với hơn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18A0FB] to-[#907CFF]">
              200+ địa điểm bán lẻ
            </span>{" "}
            khắp <span className="font-extrabold">ĐBSCL</span>
          </h3>
          <p className="mt-4 text-sm sm:text-base text-gray-300">
            Và là đại diện bán sỉ của các dòng sản phẩm nhập khẩu chất lượng như
            ...
          </p>
        </div>
      </div>
    </section>
  );
}
