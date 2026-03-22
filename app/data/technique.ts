import { title } from "process";
import { text } from "stream/consumers";

export const categories = [{ name: "Kỹ thuật", slug: "technique" }];

export const technique = [
  {
    id: 1,
    title: "Pin xe điện hiện nay có những loại nào?",
    time: "2025-08-26",
    writer: "Việt Hà",
    views: 1250,
    tag: ["Pin", "Xe điện", "Công nghệ"],
    type: "technique",
    origin: "zingnews.vn",
    banner: {
      image: "/news/news1.png",
      title:
        "Pin giữ vai trò then chốt trên xe điện, quyết định hiệu năng, giá trị và tuổi thọ.",
      description: [
        "Để giảm sự phụ thuộc vào nguồn cung từ Trung Quốc, nhiều doanh nghiệp toàn cầu đang nỗ lực phát triển các loại pin sử dụng các nguyên liệu thay thế khác nhau.",
      ],
    },
    content: [
      {
        title: "Lithium-ion - Vua của xe điện hiện đại",
      },
      {
        text: "Pin lithium-ion trở thành nền tảng chủ đạo với khả năng sạc nhanh, mật độ năng lượng cao và hiệu suất ổn định.",
      },
      {
        image: {
          img: "/news/news2.png",
          title: "Cấu tạo pin lithium-ion",
        },
      },
      {
        text: "Ưu thế của lithium-ion nằm ở khả năng sạc nhanh và chậm linh hoạt.",
      },
      {
        title: "Pin thể rắn - Tương lai xe điện",
      },
      {
        text: "Pin thể rắn hứa hẹn mật độ năng lượng gấp đôi lithium-ion và an toàn hơn.",
      },
    ],
  },
  {
    id: 2,
    title: "Công nghệ YECVT trên Yamaha NVX 155 mới",
    time: "2025-06-27",
    writer: "Phúc Hậu",
    views: 980,
    tag: ["Động cơ", "CVT", "Yamaha"],
    type: "technique",
    origin: "zingnews.vn",
    banner: {
      image: "/news/news3.png",
      title:
        "Yamaha Electric Continuously Variable Transmission - công nghệ hộp số điện tử mới.",
      description: [
        "Người lái có thể chuyển đổi nhanh NVX 155 giữa 2 chế độ vận hành, T-Mode đô thị và S-Mode thể thao.",
      ],
    },
    content: [
      {
        text: "YECVT cho phép chủ động 'giảm số' khi vượt xe hoặc kích hoạt phanh động cơ.",
      },
      {
        image: {
          img: "/news/news4.png",
          title: "Nút Shift trên NVX 155",
        },
      },
      {
        title: "3 mức độ phản hồi",
      },
      {
        text: "Low, Medium, High - hỗ trợ vượt xe và xuống dốc hiệu quả.",
      },
    ],
  },
  {
    id: 3,
    title: "Khủng hoảng chip Nexperia ảnh hưởng ngành ô tô",
    time: "2025-10-26",
    writer: "Việt Hà",
    views: 2100,
    tag: ["Chip", "Ô tô", "Nexperia"],
    type: "technique",
    origin: "zingnews.vn",
    banner: {
      image: "/news/news1.png",
      title:
        "Tranh chấp Trung Quốc - Phương Tây đe dọa tê liệt sản xuất ô tô Mỹ.",
      description: [
        "Nexperia cung cấp chip cho cần gạt nước, cửa sổ - linh kiện tưởng đơn giản nhưng cực kỳ quan trọng.",
      ],
    },
    content: [
      {
        text: "Chip thế hệ cũ đảm nhiệm chức năng cơ bản nhưng có rất ít nhà sản xuất.",
      },
      {
        title: "Nguy cơ dừng sản xuất",
      },
      {
        text: "MEMA cảnh báo nhà máy ô tô Mỹ có thể ngừng 2-4 tuần.",
      },
      {
        image: {
          img: "/news/news2.png",
          title: "Chip Nexperia trong ô tô",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Động cơ VTEC Turbo trên Civic Type R",
    time: "2025-10-24",
    writer: "Đan Thanh",
    views: 1540,
    tag: ["VTEC", "Turbo", "Honda"],
    type: "technique",
    origin: "zingnews.vn",
    banner: {
      image: "/news/news3.png",
      title: "315 mã lực từ động cơ 2.0L tăng áp VTEC.",
      description: [
        "Honda Civic Type R sử dụng hộp số sàn 6 cấp với Rev-matching bù ga.",
      ],
    },
    content: [
      {
        text: "420 Nm mô-men xoắn tại 2.600-4.000 vòng/phút.",
      },
      {
        image: {
          img: "/news/news4.png",
          title: "Động cơ K20C1 VTEC Turbo",
        },
      },
      {
        title: "Hệ thống Brembo",
      },
      {
        text: "Phanh hiệu năng cao kết hợp lốp Michelin Pilot Sport 4S.",
      },
    ],
  },
  {
    id: 5,
    title: "Honda CT125 - Kỹ thuật xe trail đô thị",
    time: "2025-10-28",
    writer: "Đan Thanh",
    views: 4450,
    tag: ["Trail", "Honda", "CT125"],
    type: "technique",
    origin: "zingnews.vn",
    banner: {
      image: "/news/news1.png",
      title:
        "CT125 - xe trail 125cc với thiết kế 'ăn chơi' và khả năng địa hình.",
      description: [
        "Chiều cao yên 830mm, khoảng sáng gầm 180mm phù hợp đô thị lẫn offroad nhẹ.",
      ],
    },
    content: [
      {
        text: "Khối lượng khô chỉ 107kg, dễ điều khiển trong phố đông.",
      },
      {
        title: "Hệ thống treo",
      },
      {
        text: "Phuộc trước USD 31mm upside-down, giảm xóc Pro-Link sau.",
      },
    ],
  },
  {
    id: 6,
    title: "VinFast Evo Grand - Pin LFP kép tháo rời",
    time: "2025-10-28",
    writer: "Đắc An",
    views: 2450,
    tag: ["Pin LFP", "VinFast", "Xe điện"],
    type: "technique",
    origin: "zingnews.vn",
    banner: {
      image: "/news/news2.png",
      title: "Quãng đường 262km với 2 pin LFP tháo rời độc lập.",
      description: ["Động cơ IP67 kháng nước, tốc độ tối đa 70km/h."],
    },
    content: [
      {
        text: "Pin LFP bền bỉ, bảo hành 8 năm không giới hạn km.",
      },
      {
        title: "Hệ thống phanh CBS",
      },
      {
        text: "Phanh đĩa trước/sau kết hợp lốp chống trượt.",
      },
    ],
  },
];
