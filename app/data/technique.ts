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
  // ID2,3 tương tự - FULL content (giữ nguyên hoàn toàn theo feedback)
  {
    id: 2,
    title: "LINH KIỆN XE ĐIỆN DỄ HƯ – DỄ THAY – LỜI TỐT CHO TIỆM",
    time: "2025-11-02",
    writer: "Phúc Long",
    views: 2500,
    tag: ["Linh kiện", "Xe điện", "Sửa chữa"],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774167462/598936716_1241478391336450_7199833131981936251_n_da15xn.jpg",
      title: "Top linh kiện xe điện dễ hư nhất – cơ hội vàng cho tiệm sửa chữa",
      description: [
        "Xe điện ít nhớt, ít nồi… Nhưng linh kiện điện lại dễ xuống cấp, đặc biệt ở miền Tây hay mưa – ngập – ẩm.",
      ],
    },
    content: [
      {
        text: "🔧 Top linh kiện xe điện dễ hư nhất:",
      },
      {
        text: "🔋 1. Bình ắc quy / Pin lithium — Mau chai nếu sạc sai cách— Lời tốt, thay nhanh, khách cần gấp",
      },
      {
        text: "⚡ 2. Sạc xe điện — Hư do chập điện hoặc nước vào— Dễ bán, tiệm nào cũng nên trữ",
      },
      {
        text: "🧩 3. Controller (bộ điều khiển) — Hư nhẹ: xe chạy yếu— Hư nặng: xe không chạy— Lợi nhuận cao, khách buộc phải thay",
      },
      {
        text: "🌀 4. Motor / Bạc đạn motor — Kêu rè rè, chạy yếu— Thợ biết làm → giữ khách cực tốt",
      },
      {
        text: "🔌 5. Dây điện – công tắc – cảm biến — Rẻ – lời cao – dễ thay— Thích hợp upsell trong tiệm",
      },
      {
        title: "💡 Vì sao thợ nên tập trung phụ tùng xe điện?",
      },
      {
        text: "✔ Số lượng xe điện tăng mạnh ở thành phố lẫn tỉnh ✔ Bệnh dễ gặp – khách cần sửa ngay ✔ Linh kiện nhỏ – vốn thấp – xoay vòng nhanh ✔ Lời ổn định – dễ mở rộng dịch vụ",
      },
      {
        text: "Phúc Long luôn sẵn hàng: Ắc quy – pin – dây điện – motor – phụ tùng hỗ trợ. #PhuTungXeDien #LinhKienXeDien #BinhXeDien #SuaXeDien",
      },
    ],
  },
  {
    id: 3,
    title: '🛢️ DẦU NHỚT LÀ GÌ? VÌ SAO GỌI LÀ "MÁU" CỦA CHIẾC XE??',
    time: "2025-11-03",
    writer: "Phúc Long",
    views: 3200,
    tag: ["Nhớt", "Động cơ", "Bảo dưỡng"],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774167895/600324416_1245103227640633_7459930853004051175_n_wk01se.jpg",
      title: "Nhiều khách chạy xe hằng ngày nhưng không hiểu nhớt là gì",
      description: [
        "Nhớt là sống còn của động cơ - 'máu sạch xe khỏe, máu dơ máy hư'",
      ],
    },
    content: [
      {
        text: "Nhiều khách chạy xe hằng ngày nhưng không hiểu nhớt là gì, chỉ biết 'tới kỳ thì thay' 😄",
      },
      {
        text: "Còn anh em thợ mình thì biết rõ: nhớt là sống còn của động cơ.",
      },
      {
        title: "👉 DẦU NHỚT LÀM GÌ?",
      },
      {
        text: "💧 Giảm ma sát piston, cam, bạc, trục… 🔥 Giảm nóng máy, tản nhiệt ⚙️ Làm sạch động cơ, cuốn muội than 🛡️ Chống mài mòn - chống gỉ ⏳ Kéo dài tuổi thọ động cơ",
      },
      {
        title: "🔧 NHỚT TỐT GIÚP GÌ?",
      },
      {
        text: "✔ Máy êm ✔ Xe bốc, đề nhẹ ✔ Ít nóng ✔ Nồi-cam-piston bền ✔ Khách quay lại thay hoài",
      },
      {
        title: "👨‍🔧 ANH EM THỢ SỬA XE",
      },
      {
        text: "Chọn đúng nhớt → đúng xe → đúng thói quen chạy → Giữ uy tín tiệm ❤️",
      },
      {
        text: "Phúc Long đủ nhớt cho: Xe số | Tay ga | Xe côn | Xe đặc thù 👉 Nhớt tốt = khách bền!",
      },
      {
        text: "#DauNhotLaGi #NhotXeMay #NhotTotMayBen #SuaXeChuyenNghiep #DauNhotPhucLong",
      },
    ],
  },
  {
    id: 4,
    title:
      "CÁCH CHỌN NHỚT ĐÚNG CHUẨN CHO TỪNG LOẠI XE - SO SÁNH CÁC NHU CẦU VỀ NHỚT THEO DÒNG XE!!!",
    time: "2025-11-04",
    writer: "Phúc Long",
    views: 4500,
    tag: ["Nhớt", "10W30", "5W30", "15W40", "20W50"],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774168042/600162817_1245115457639410_4587792867764740522_n_rbdij4.jpg",
      title: "Nhớt nào cho xe nào?",
      description: ["Tư vấn chuẩn tạo lòng tin khách hàng"],
    },
    content: [
      {
        text: "10W-30 là gì? Số trước chữ W (10W) 👉 Độ loãng của nhớt khi máy còn nguội 👉 Số càng nhỏ → nhớt càng loãng lúc đề máy → xe đề nhẹ – máy mau bôi trơn Số sau chữ W (30) 👉 Độ đặc của nhớt khi máy nóng, đang chạy 👉 Số càng lớn → nhớt càng chịu nhiệt – chịu tải tốt 👉 Nói dễ hiểu: Trước W = lúc mới nổ máy Sau W = lúc xe chạy nóng máy",
      },
      {
        title: "🛵 1️⃣ Nhớt 10W-30 / 5W-30 – Vì sao hợp xe tay ga?",
      },
      {
        text: "✔ Nhớt loãng khi nguội → đề nhẹ, chạy êm ✔ Mát máy , ít nóng khi chạy phố ✔ Phù hợp xe ga đời mới, xe chạy hằng ngày 👉 Khuyên dùng cho: Xe tay ga, Xe chạy nhẹ, ít tải, Người chạy trong phố, quãng ngắn ❌ Không phù hợp xe chở nặng hoặc chạy đường dài liên tục.",
      },
      {
        title: "🏍 2️⃣ Nhớt 15W-40 / 20W-50 – Vì sao hợp xe số, xe côn?",
      },
      {
        text: "✔ Nhớt đặc hơn khi máy nóng ✔ Chịu tải tốt, ít hụt nhớt ✔ Bảo vệ nồi – cam – piston tốt hơn 👉 Khuyên dùng cho: Xe số, Xe côn tay, Xe chở hàng, chạy xa, chạy dịch vụ ⚠️ Nếu dùng cho xe ga → dễ ì máy, hao xăng.",
      },
      {
        title:
          "🔥 3️⃣ Nhớt tổng hợp (Fully Synthetic) – Đắt hơn vì sao đáng tiền?",
      },
      {
        text: "✔ Bôi trơn tốt hơn nhớt thường ✔ Ít hao nhớt , bền nhiệt ✔ Giữ máy sạch, ít muội than ✔ Kéo dài chu kỳ thay nhớt 👉 Khuyên dùng cho: Xe đời mới, Xe chạy nhiều, chạy dịch vụ Khách muốn xe êm – bền lâu 💡 Giá cao hơn nhưng tính ra rẻ hơn về lâu dài vì ít hư máy.",
      },
      {
        title: "👨‍🔧 Lời khuyên cho anh em thợ",
      },
      {
        text: "Chọn nhớt đúng thông số – đúng loại xe – đúng nhu cầu chạy → xe bền→ khách hài lòng→ tiệm giữ được uy tín lâu dài ❤️ Phúc Long luôn có đủ:🛢️ Nhớt 10W-30 / 5W-30🛢️ Nhớt 15W-40 / 20W-50🔥 Nhớt tổng hợp chất lượng cao. #ThongSoNhot #10W30 #5W30 #15W40 #20W50 #NhotTongHop #DauNhotPhucLong #TuVanDungNhot #AnhEmSuaXe.",
      },
    ],
  },
  {
    id: 5,
    title: "🛢️ DẤU HIỆU XE BẠN CẦN THAY NHỚT GẤP!!!",
    time: "2025-11-05",
    writer: "Phúc Long",
    views: 4800,
    tag: ["Nhớt", "Dấu hiệu", "Bảo dưỡng"],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774168174/600323918_1245116317639324_5934224804806562858_n_ntjrym.jpg",
      title: "Xe có 3 dấu hiệu này → nhắc thay nhớt liền",
      description: ["Chờ nữa là cháy máy 🔥"],
    },
    content: [
      {
        text: "Xe có 3 dấu hiệu này → nhắc thay nhớt liền, chờ nữa là cháy máy 🔥:",
      },
      {
        title: '1️⃣ Tiếng máy kêu "lóc cóc" – nổ lớn hơn bình thường',
      },
      {
        text: 'Khi thiếu nhớt hoặc nhớt quá loãng: Kim loại cọ trực tiếp → phát ra tiếng "lóc cóc" Máy nóng nhanh → tiếng nổ to, khô, "gắt" 💡 \'Máy không dầu giống xe đạp không mỡ\'',
      },
      {
        title: "2️⃣ Xe yếu – tăng tốc chậm – đề nặng",
      },
      {
        text: "Ma sát tăng cao → động cơ tốn lực quay Máy nóng → ECU tự giảm hiệu suất 🚫 Xe ì | Không bốc | Hao xăng 💡 'Máy khô quay không trơn sao mạnh?'",
      },
      {
        title: "3️⃣ Nhớt đen, loãng, mùi khét",
      },
      {
        text: "Nhớt cũ biến chất + cặn bẩn + cháy nhiệt Nhớt không bôi trơn → mòn máy nhanh hơn ⚠️ Thợ nhìn biết ngay: 'Nhớt này chạy nữa là ăn cam!'",
      },
      {
        title: "👨‍🔧 KẾT LUẬN",
      },
      {
        text: "❗ Thiếu nhớt rút ngắn tuổi thọ động cơ rất nhanh 👉 Thay đúng lúc đúng loại → máy êm xe bốc tiết kiệm tiền sửa #ThayNhotGiapDinh #KiemTraNhot #PhucLongDongHanh",
      },
    ],
  },
  {
    id: 6,
    title: "NHỮNG SAI LẦM KHI THAY NHỚT - TƯỞNG BÌNH THƯỜNG HOÁ BẤT THƯỜNG!!!",
    time: "2025-11-06",
    writer: "Phúc Long",
    views: 3800,
    tag: ["Nhớt", "Thay nhớt", "Thợ sửa xe"],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774168281/600144195_1245117284305894_6134386512987384998_n_sfhxi2.jpg",
      title: "Không phải thay nhớt là xong đâu anh em!",
      description: ["Nhiều thợ mới mắc 4 lỗi → xe hư hơn"],
    },
    content: [
      {
        title: "❌ 1️⃣ Chọn sai độ nhớt (xe nóng/ì)",
      },
      {
        text: "Mỗi động cơ thiết kế độ nhớt phù hợp: Nhớt quá đặc (20W-50 xe ga) → khó luân chuyển → nóng ì Nhớt quá loãng (10W-30 xe tải) → không bảo vệ → mòn nhanh 💡 'Nhớt như quần áo size'",
      },
      {
        title: "❌ 2️⃣ Không vệ sinh lọc thô/lưới lọc",
      },
      {
        text: "Lọc giữ cặn bẩn mạt kim loại → Không vệ sinh → nhớt sạch nhanh bẩn Lâu ngày: mòn cam, kẹt bạc, nóng máy 💡 Thợ biết nhưng nhiều người bỏ qua vì mất thời gian",
      },
      {
        title: "❌ 3️⃣ Siết ốc quá mạnh → tuôn ren",
      },
      {
        text: "Ốc xả chỉ cần lực vừa → Siết quá → tuôn ren lốc máy → rò nhớt → tháo máy phục hồi 💸 Lỗi nhỏ tiền lớn",
      },
      {
        title: "❌ 4️⃣ Nhớt rẻ pha tạp → khách than máy kêu",
      },
      {
        text: "Nhớt kém: độ nhớt không ổn | Nhanh loãng cháy | Ít phụ gia → Chạy vài trăm km: 🔊 Kêu | 🔥 Nóng | ⚙️ Mòn nhanh Khách biết xe không êm → mất uy tín thợ",
      },
      {
        title: "👨‍🔧 KẾT LUẬN",
      },
      {
        text: "Thay nhớt không chỉ xả-đổ-siết ốc → Làm đúng từng bước → Giữ máy khách + chữ tín tiệm ❤️ #SaiLamKhiThayNhot #SuaXeVungTay #PhuTungDauNhot",
      },
    ],
  },
];
