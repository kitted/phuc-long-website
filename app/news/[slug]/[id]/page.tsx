"use client";

import Footer from "@/app/components/footer";
import InterestedPostsDetail from "@/app/components/news/detail/interestedPostsDetail";
import NewsContentDetail from "@/app/components/news/detail/newsContentDetail";
import NewsHeaderDetail from "@/app/components/news/detail/newsHeaderDetail";
import NewsImageDetail from "@/app/components/news/detail/newsImageDetail";
import RelatedPostsDetail from "@/app/components/news/detail/relatedPostsDetail";
import SubLayout from "@/app/subLayout";
import React from "react";

export default function Example() {
  const news = {
    title: "Bán Ôtô Tỉ Đô Trên TikTok Shop – Nền Tảng Nổi Không Cho Phép",
    date: "30/09/2025",
    category: "Tin tức",
    image: "/news/news1.png",
    caption:
      "Thời gian gần đây, trên TikTok Shop xuất hiện các giỏ hàng bán ôtô.",
    sections: [
      {
        text: [
          "Thời gian gần đây, trên các buổi phát trực tiếp qua nền tảng TikTok của các nhân viên tư vấn tại đại lý ôtô xuất hiện các lượt gắn giỏ hàng, chào bán các mẫu xe giá trị từ vài trăm triệu đến gần một tỷ đồng.",
          "Vậy người mua liệu có thể mua online ôtô qua TikTok Shop như quảng cáo hay không?",
        ],
      },
      {
        heading: "Gắn Giỏ Hàng Xe Tiền Tỷ, Hẹn Giao Trong 3 Ngày",
        text: [
          "Các trang mở giỏ hàng ôtô trên TikTok Shop thường đến từ nhân viên tư vấn hoặc chính các đại lý hãng xe ở nhiều tỉnh thành. Theo ghi nhận của phóng viên, giá bán xe trên các trang này gần như sát với mức niêm yết của hãng, thậm chí được giảm thêm vài chục triệu đồng. Thông tin trên mục mở bán có ghi rõ các mẫu xe có thể giao tận tay khách trong 1-3 ngày.",
          "Hóa đơn xe trị giá gần một tỷ đồng có thể dễ dàng bấm 'thanh toán' trên nền tảng TikTok. Đặc biệt ở mục tiếp thị liên kết, mỗi đơn giao dịch thành công, người gắn giỏ hàng có thể nhận được hơn chục triệu đồng tiền 'hoa hồng'. Vì vậy, không ít tài khoản liên tục đăng tải video, gắn kèm giỏ hàng tiền tỷ này với hi vọng có thể kiếm được khoản hoa hồng giá trị. Ví dụ một gian hàng TikTok Shop đang bán mẫu xe giá gần một tỷ đồng với hơn 10 lượt bán được hiển thị.",
          "Thậm chí nếu đặt mua, khách hàng còn có thể áp dụng các phiếu giảm giá phí vận chuyển theo chương trình 'Freeship Xtra'. Tuy nhiên khi chọn vào mục đặt hàng, người mua chỉ có thể thanh toán hóa đơn bằng cách chuyển khoản từ ngân hàng. Các hình thức thanh toán khác như thanh toán khi giao hàng (COD), qua ví điện tử hay tài khoản liên kết đều không thể sử dụng do vượt hạn mức cho phép.",
        ],
      },
      {
        heading: "Chưa Được Bán Ôtô Trên TikTok Shop",
        text: [
          "Chia sẻ với Tri Thức - Znews, bà Giang Thế An, Giám đốc Truyền thông TikTok Việt Nam, cho biết TikTok hiện chưa triển khai ngành hàng ôtô trên TikTok Shop. Một số người bán đã tìm cách 'lách luật' để mở gian hàng. 'Ngành hàng ôtô chưa được mở trên TikTok. Hiện có một vài người bán lách luật nhưng TikTok đang chủ động quét lỗi vi phạm và gỡ sản phẩm liên tục', bà Giang khẳng định.",
          "Bà An cũng cho biết TikTok đang kiểm tra thêm về thông tin liên quan đến các đơn đã được thực hiện trên nền tảng liên quan đến ngành hàng ôtô. Mua ôtô là khoản chi tiêu lớn, đòi hỏi hợp đồng, giấy đăng ký và nhiều thủ tục pháp lý đi kèm. Vì vậy, việc “gắn giỏ hàng” trên TikTok Shop hiện chỉ dừng lại ở chiêu trò tiếp thị, hơn là một kênh giao dịch thực sự. Người tiêu dùng cần cân nhắc kỹ trước khi chuyển tiền.",
        ],
      },
    ],
  };
  return (
    <>
      <SubLayout>
        <div className="pt-[165px] md:pt-[165px] px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto px-4 ">
            <NewsHeaderDetail
              title={news.title}
              date={news.date}
              category={news.category}
              author="Tin it"
            />
            <NewsImageDetail
              src={news.image}
              alt={news.title}
              caption={news.caption}
            />
            <NewsContentDetail sections={news.sections} />
            <RelatedPostsDetail />
            <InterestedPostsDetail />
          </div>
        </div>
      </SubLayout>
      <Footer />
    </>
  );
}
