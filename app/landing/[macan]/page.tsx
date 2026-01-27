import type { Metadata } from "next";

import SiteHeader from "../components/SiteHeader";
import HeroMacan from "../components/HeroMacan";
import BrandFooter from "../components/BrandFooter";
import TechFeatureSection from "../components/TechFeatureSection";
import MacanPlusEx from "../components/MacanPlusEx";
import TextFooter from "../components/TextFooter";
import MacanSpecsSection from "../components/MacanSpecsSection";
import GalleryDemo from "../components/GalleryDemo";
import ContactBarUI from "../components/ContactBarUI";
import FloatingButton from "@/app/components/floatingButton";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://phutungdaunhot.com"),

  title: "Má phanh MACAN iNC | PlusEx Phúc Long",
  description:
    "Má phanh MACAN iNC – công nghệ Thái Lan, bền – êm – ít rít, phù hợp chạy dịch vụ.",

  openGraph: {
    title: "Má phanh MACAN iNC | PlusEx Phúc Long",
    description:
      "Má phanh MACAN iNC – công nghệ Thái Lan, bền – êm – ít rít, phù hợp chạy dịch vụ.",
    url: "https://phutungdaunhot.com/landing/macan",
    siteName: "PlusEx Phúc Long",
    locale: "vi_VN",
    type: "website",
    images: [
      // Ưu tiên ảnh ngang chuẩn Facebook (khuyên dùng 1200x630)
      {
        url: "/og/macan-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Má phanh MACAN iNC",
      },
      // Dự phòng ảnh vuông (Zalo/khung vuông)
      {
        url: "/og/macan-1200x1200.png",
        width: 1200,
        height: 1200,
        alt: "Má phanh MACAN iNC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Má phanh MACAN iNC | PlusEx Phúc Long",
    description:
      "Má phanh MACAN iNC – công nghệ Thái Lan, bền – êm – ít rít, phù hợp chạy dịch vụ.",
    images: ["/og/macan-1200x630.png"],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <HeroMacan title="MACAN iNC" subtitle="Technology by Thailand" />
      <BrandFooter />

      <TechFeatureSection
        title="CÔNG NGHỆ"
        subtitle="METALLIC / STEEL FIBER KẾT HỢP LỚP PHỦ"
        description="Metallic / Steel Fiber kết hợp lớp phủ Anti-Corrosion Coating, giúp tăng độ bám thắng, chịu nhiệt cao, giảm mài mòn và chống ăn mòn vượt trội trong môi trường ẩm, bụi và vận hành cường độ cao."
        bgImageUrl="https://res.cloudinary.com/dkxb7klnn/image/upload/v1768916126/Product_Banner_2_nujswm.png"
        productImageUrl="https://res.cloudinary.com/dkxb7klnn/image/upload/v1768466459/6_zolnn5.png"
        productSide="right"
      />

      <TechFeatureSection
        title="GIÁ THÀNH"
        subtitle="CHẤT LƯỢNG / GIÁ THÀNH CẠNH TRANH NHẤT THỊ TRƯỜNG"
        description="Macan iNC có giá thành hợp lý so với chất lượng, cân bằng tốt giữa hiệu suất – độ bền – độ an toàn, giúp thợ dễ bán, khách dễ chọn và sử dụng lâu dài."
        bgImageUrl="https://res.cloudinary.com/dkxb7klnn/image/upload/v1768916281/Product_Banner_3_fabb3o.png"
        productImageUrl="https://res.cloudinary.com/dkxb7klnn/image/upload/v1768466459/8_j6glmg.png"
        productSide="left"
      />

      <TechFeatureSection
        title="ỨNG DỤNG"
        subtitle="ĐỦ SỨC CẠNH TRANH VỚI CHẤT LƯỢNG CAO HƠN CÁC SẢN PHẨM CÙNG PHÂN KHÚC"
        description="So với các bố thắng cùng phân khúc, Macan iNC cho cảm giác thắng ăn đều ngay từ đầu, ít trượt khi rà nhẹ. Khi chạy thực tế, Macan iNC ổn định hơn lúc nóng, ít rít, ít mòn đĩa; trong khi nhiều dòng khác dễ kêu, xuống lực nhanh khi chạy dịch vụ hoặc dừng–chạy liên tục."
        bgImageUrl="https://res.cloudinary.com/dkxb7klnn/image/upload/v1768916685/14_cmcjsc.png"
        productImageUrl="https://res.cloudinary.com/dkxb7klnn/image/upload/v1768916961/13_ehduqi.png"
        productSide="right"
      />

      <MacanPlusEx />
      <TextFooter />
      <MacanSpecsSection />
      <GalleryDemo />
      <ContactBarUI />
      <FloatingButton />
      <Footer />
    </main>
  );
}
