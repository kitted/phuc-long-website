import { title } from "process";
import { text } from "stream/consumers";

export const categories = [{ name: "Kỹ thuật", slug: "technique" }];

export const technique = [
  {
    id: 1,
    title: "XE ĐIỆN HOẠT ĐỘNG THẾ NÀO? HIỂU ĐỂ SỬA NHANH – BẮT BỆNH CHUẨN",
    time: "2025-11-01",
    writer: "Phúc Long Team",
    views: 5000,
    tag: ["Xe điện", "Controller", "Motor", "Pin", "Sửa chữa"],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774166412/595210510_1240801608070795_2831605205137725404_n_peuzzl.jpg",
      title: "Nhiều khách chạy xe điện mà không biết trong xe có cái gì",
      description: [
        "Anh em mình hiểu rõ thì vừa sửa nhanh, vừa tư vấn chuẩn, vừa giữ khách bền.",
      ],
    },
    content: [
      {
        title: "🧩 CẤU TẠO XE ĐIỆN",
      },
      {
        text: '🔋 Bình điện / Pin → "Trái tim" của xe, cung cấp năng lượng',
      },
      {
        text: "⚡ Controller → Bộ điều khiển, phân phối dòng điện",
      },
      {
        text: "🔌 Sạc → Gắn vào điện 220V để nạp năng lượng",
      },
      {
        text: "🌀 Motor → Tạo lực quay cho bánh xe",
      },
      {
        text: "🔧 Dây điện – Công tắc – Cảm biến → Truyền tín hiệu và kích hoạt tính năng",
      },
      {
        title: "👨‍🔧 NGUYÊN LÝ HOẠT ĐỘNG",
      },
      {
        text: "➡️ Pin → cấp điện",
      },
      {
        text: "➡️ Controller → điều chỉnh dòng",
      },
      {
        text: "➡️ Motor → quay bánh xe",
      },
      {
        text: "Xe chạy êm, không xăng – không số 👉 Thợ nào hiểu controller → là nắm 70% bệnh của xe điện.",
      },
      {
        title: "⚠️ BỆNH THƯỜNG GẶP",
      },
      {
        text: "🔥 Chập dây / Oxy hóa dây điện",
      },
      {
        text: "🪫 Pin yếu → sạc mau đầy",
      },
      {
        text: "🌀 Motor kêu rè rè → bạc đạn",
      },
      {
        text: "🌡️ Controller nóng → xe yếu, giật",
      },
      {
        text: "🔌 Sạc không vô điện → cầu chì hoặc cell chết",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774166412/595210510_1240801608070795_2831605205137725404_n_peuzzl.jpg",
          title: "Cấu tạo xe điện Phúc Long",
        },
      },
    ],
  },
];
