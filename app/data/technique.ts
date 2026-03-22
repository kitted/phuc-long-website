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
  {
    id: 7,
    title: "NHÔNG - SÊN - DĨA LÀ GÌ? VÌ SAO MÒN LÀ XE YẾU LIỀN??",
    time: "2025-11-07",
    writer: "Phúc Long",
    views: 3900,
    tag: ["Nhông sên dĩa", "Truyền động", "Bảo dưỡng", "Phụ tùng"],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169225/600928716_1249484727202483_5380612802138659398_n_uiczj5.jpg",
      title: "Vì sao mòn NHÔNG – SÊN – DĨA làm xe yếu dù máy còn tốt?",
      description: [
        "Một bộ nhông sên dĩa tốt – giữ được cả chiếc xe khỏe mạnh.",
      ],
    },
    content: [
      {
        title: "⚙️ Nhông trước (nhông máy)",
      },
      {
        text: "Gắn trực tiếp vào trục hộp số của động cơ.",
      },
      {
        text: "Chức năng: Nhận lực quay trực tiếp từ máy → Truyền lực này qua sên ra bánh sau.",
      },
      {
        text: "Khi nhông mòn: Răng nhọn, mỏng → Truyền lực kém → Dễ gây giật – kêu – mòn sên nhanh.",
      },
      {
        text: "💡 “Nhông trước giống như bánh răng đầu nguồn – mòn là yếu liền.”",
      },
      {
        title: "🔗 Sên (xích)",
      },
      {
        text: "Là cầu nối giữa nhông trước và dĩa sau.",
      },
      {
        text: "Chức năng: Truyền lực kéo từ máy ra bánh → Giữ cho xe chạy êm, đều ga.",
      },
      {
        text: "Khi sên mòn / giãn: Xe chạy giật – kêu lạch cạch → Tăng sên hoài không hết → Dễ tuột sên khi chạy nhanh.",
      },
      {
        text: "👨‍🔧 Thợ nhìn là biết: “Sên giãn là dấu hiệu cả bộ đã tới lúc thay.”",
      },
      {
        title: "💿 Dĩa sau",
      },
      {
        text: "Gắn trực tiếp vào bánh sau.",
      },
      {
        text: "Chức năng: Nhận lực từ sên → Biến lực kéo thành chuyển động bánh xe.",
      },
      {
        text: "Khi dĩa mòn: Răng nhọn, không đều → Ăn sên kém → Làm xe yếu, hao xăng.",
      },
      {
        text: "💡 “Dĩa mòn thì lực tới bánh không đủ, máy mạnh cũng uổng.”",
      },
      {
        title: "⚠️ VÌ SAO MÒN NHÔNG – SÊN – DĨA LÀM XE YẾU DÙ MÁY CÒN TỐT?",
      },
      {
        text: "Vì đây là bộ truyền lực cuối cùng. Máy sinh ra lực, nhưng nhông – sên – dĩa truyền không trọn → lực bị hao hụt → xe ì, ga không bốc.",
      },
      {
        text: "Nếu để lâu: Mòn máy theo → Hao xăng → Nguy hiểm khi tuột sên bất ngờ.",
      },
      {
        title: "✅ KẾT LUẬN",
      },
      {
        text: "Thay nhông sên dĩa đúng lúc: Xe chạy êm ✔️ Ga bốc ✔️ Khách hài lòng ✔️ Giữ uy tín tiệm lâu dài.",
      },
      {
        text: "#NhongSenDia #NhongSenDiaLaGi #SuaXeChuyenNghiep #PhuTungXeMay #PhucLongDongHanh",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169225/600928716_1249484727202483_5380612802138659398_n_uiczj5.jpg",
          title: "Nhông sên dĩa mòn làm xe yếu",
        },
      },
    ],
  },
  {
    id: 8,
    title: "VÌ SAO NHỮNG DẤU HIỆU NÀY BÁO HIỆU NHÔNG SÊN DĨA ĐÃ TỚI LÚC THAY?",
    time: "2025-11-08",
    writer: "Phúc Long",
    views: 4100,
    tag: ["Nhông sên dĩa", "Dấu hiệu hư hỏng", "Sửa chữa", "Bảo dưỡng"],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169413/604660339_1250862493731373_1366259060657204553_n_w7fwd9.jpg",
      title: "Dấu hiệu báo động cần thay nhông sên dĩa",
      description: [
        "Nhông sên dĩa mòn không chỉ làm xe yếu, mà còn hao xăng và mòn máy theo.",
      ],
    },
    content: [
      {
        title: "🔗 1. Sên chùng – tăng hoài không hết",
      },
      {
        text: "Khi sên đã giãn quá mức: Các mắt sên mòn không đều. Tăng sên chỉ là giải pháp tạm, chạy vài bữa là chùng lại.",
      },
      {
        text: "💡 Dấu hiệu này cho thấy sên đã “hết tuổi”, không còn khả năng truyền lực ổn định.",
      },
      {
        title: "⚙️ 2. Răng nhông, răng dĩa nhọn hoắt",
      },
      {
        text: "Nhông dĩa mới có răng bằng, tròn, đều. Khi mòn: Răng nhọn, mỏng như lưỡi câu, ăn sên kém, làm mòn sên nhanh hơn.",
      },
      {
        text: "👨‍🔧 Thợ nhìn răng là biết bộ còn hay hết.",
      },
      {
        title: "🔊 3. Xe chạy giật – kêu lạch cạch",
      },
      {
        text: "Do sên mòn không đều, răng nhông dĩa ăn khớp kém.",
      },
      {
        text: "Lực truyền lúc mạnh lúc yếu → xe giật. Kim loại cọ nhau → phát tiếng kêu.",
      },
      {
        text: "⚠️ Chạy lâu dễ tuột sên bất ngờ, rất nguy hiểm.",
      },
      {
        title: "🚀 4. Ga lên mà xe không vọt",
      },
      {
        text: "Máy vẫn mạnh, nhưng lực bị hao hụt trên đường truyền. Nhông sên dĩa trượt, không truyền đủ lực ra bánh.",
      },
      {
        text: "💡 Nói cho khách hiểu: “Máy còn lực mà bánh không nhận đủ → xe không bốc.”",
      },
      {
        title: "💧 5. Sên bị khô, rít, dễ nhảy mắt",
      },
      {
        text: "Do thiếu mỡ bôi trơn, sên mòn, các mắt kẹt cứng.",
      },
      {
        text: "Sên không ôm đều răng, dễ nhảy mắt, trượt sên.",
      },
      {
        text: "⚠️ Đây là dấu hiệu rất nguy hiểm khi chạy nhanh.",
      },
      {
        title: "✅ KẾT LUẬN",
      },
      {
        text: "Nhông sên dĩa mòn không chỉ làm xe yếu, mà còn: Hao xăng, mòn máy theo, nguy hiểm khi lưu thông.",
      },
      {
        text: "Thay sớm: Xe êm hơn ✔️ Ga bốc hơn ✔️ An toàn hơn ✔️ Khách hài lòng → quay lại dài lâu.",
      },
      {
        text: "#ThayNhongSenDia #KiemTraXe #AnhEmSuaXe #PhuTungPhucLong",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169413/604660339_1250862493731373_1366259060657204553_n_w7fwd9.jpg",
          title: "Dấu hiệu nhông sên dĩa mòn",
        },
      },
    ],
  },
  {
    id: 9,
    title: "NHÔNG SÊN DĨA MẮC & RẺ KHÁC NHAU Ở ĐÂU?",
    time: "2025-11-09",
    writer: "Phúc Long",
    views: 4200,
    tag: [
      "So sánh nhông sên dĩa",
      "Phụ tùng chất lượng",
      "Làm nghề phải tính",
      "Phụ tùng xe máy",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169520/603807329_1252309406920015_2041638702270667534_n_nybo7u.jpg",
      title: "Không phải mắc – rẻ ở cái tên, mà khác nhau từ bên trong",
      description: [
        "Khách hay hỏi: “Sao bộ này rẻ, bộ kia mắc dữ vậy?”. Bài viết này sẽ giúp anh em thợ giải thích cặn kẽ cho khách.",
      ],
    },
    content: [
      {
        text: "Khách hay hỏi: “Sao bộ này rẻ, bộ kia mắc dữ vậy?” Thật ra, không phải mắc – rẻ ở cái tên, mà khác nhau từ bên trong.",
      },
      {
        title: "🛡️ 1. Chất liệu thép – quyết định độ bền",
      },
      {
        text: "✔️ Nhông sên dĩa tốt: Dùng thép hợp kim hoặc thép tôi nhiệt. Răng dày – cứng – đều. Chạy lâu ít mòn, ít rão.",
      },
      {
        text: "❌ Nhông sên dĩa rẻ: Thép thường, ít xử lý nhiệt. Răng mỏng. Chạy một thời gian là hú – giãn – mòn nhanh.",
      },
      {
        text: "💡 “Thép yếu thì răng ăn không nổi, chạy sao bền được.”",
      },
      {
        title: "⚙️ 2. Độ chính xác gia công – quyết định độ êm",
      },
      {
        text: "✔️ Gia công chuẩn: Răng nhông – dĩa đồng đều, khớp hoàn toàn với sên. Khi chạy → lực truyền đều → xe êm, không giật.",
      },
      {
        text: "❌ Gia công kém: Răng lệch, không đều. Sên ăn lúc chặt lúc lỏng. Gây giật xe – mòn sên – kêu lạch cạch.",
      },
      {
        text: "⚠️ Chạy lâu sẽ làm hỏng cả bộ truyền lực, chứ không riêng gì sên.",
      },
      {
        title: "✨ 3. Xử lý bề mặt – quyết định tuổi thọ",
      },
      {
        text: "✔️ Bộ tốt: Mạ kẽm, mạ niken hoặc xử lý chống gỉ. Ít sét, ít ăn mòn. Phù hợp chạy mưa, chạy miền sông nước.",
      },
      {
        text: "❌ Bộ rẻ: Mạ sơ sài hoặc không mạ. Gặp nước là sét. Sên khô, rít, dễ kẹt mắt.",
      },
      {
        text: "🌧️ Khách miền Tây chạy mưa nhiều → phần này rất quan trọng.",
      },
      {
        title: "🔗 4. Độ đồng bộ của cả bộ nhông – sên – dĩa",
      },
      {
        text: "✔️ Bộ tốt: Nhông – sên – dĩa được thiết kế ăn khớp đồng bộ. Mòn đều → bền hơn.",
      },
      {
        text: "❌ Bộ rẻ: Mỗi món một kiểu. Ăn khớp kém → mòn chéo, nhanh hư.",
      },
      {
        text: "👨‍🔧 Vì vậy thợ thường khuyên: “Mòn là thay nguyên bộ cho bền.”",
      },
      {
        title: "✅ KẾT LUẬN",
      },
      {
        text: "Bộ nhông sên dĩa tốt: Giá cao hơn chút nhưng chạy bền gấp đôi. Ít quay lại bảo hành.",
      },
      {
        text: "Thợ khỏe – khách vui – giữ uy tín lâu dài. Rẻ mà mau hư → cuối cùng lại tốn tiền nhiều hơn.",
      },
      {
        text: "#SoSanhNhongSenDia #PhuTungChatLuong #LamNghePhaiTinh #PhuTungXeMay",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169520/603807329_1252309406920015_2041638702270667534_n_nybo7u.jpg",
          title: "Phân biệt nhông sên dĩa mắc và rẻ",
        },
      },
    ],
  },
  {
    id: 10,
    title: "BÍ QUYẾT GIỮ NHÔNG SÊN DĨA BỀN GẤP ĐÔI SAU MỖI LẦN THAY!!!!",
    time: "2025-11-10",
    writer: "Phúc Long",
    views: 4500,
    tag: [
      "Bảo dưỡng xe",
      "Nhông sên dĩa",
      "Sửa xe miền Tây",
      "Kinh nghiệm thợ",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169592/605249384_1252891396861816_2824162400494807566_n_dnewna.jpg",
      title: "Bán nhông sên dĩa thì dễ, giữ khách mới khó",
      description: [
        "Dặn khách chạy sao cho bền mới là cách giữ khách lâu dài. Anh em thợ chỉ cần dặn đúng mấy điều dưới đây là ghi điểm liền.",
      ],
    },
    content: [
      {
        text: "Bán nhông sên dĩa thì dễ, dặn khách chạy sao cho bền mới là giữ khách lâu dài. Anh em thợ chỉ cần dặn đúng mấy điều dưới đây là ghi điểm liền 🤝",
      },
      {
        title: "🧼 1. Vệ sinh sên định kỳ",
      },
      {
        text: "Sên chạy lâu sẽ bám: Bụi, Cát, Bùn đất, Dầu mỡ cũ. Nếu không vệ sinh: Sên mài mòn nhanh, răng nhông dĩa ăn không đều, xe chạy nặng và kêu.",
      },
      {
        text: "💡 Dặn khách: “Chạy vài tuần nên rửa sên một lần, nhất là đi mưa – đi đường đất.”",
      },
      {
        title: "🛢️ 2. Tra mỡ sên đúng loại",
      },
      {
        text: "Mỡ sên có nhiệm vụ: Bôi trơn các mắt sên, giảm ma sát, chống gỉ sét.",
      },
      {
        text: "Sai lầm nhiều khách hay gặp: Tra dầu nhớt loãng → mau trôi. Không tra gì hết → sên khô, rít.",
      },
      {
        text: "💡 Dặn khách: “Tra mỡ sên chuyên dụng thì sên mới bền, chạy mới êm.”",
      },
      {
        title: "🔧 3. Không tăng sên quá căng",
      },
      {
        text: "Nhiều khách nghĩ: “Căng cho chắc” → sai hoàn toàn. Sên căng quá → kéo nặng máy, hao bạc đạn, mòn nhông – mòn dĩa nhanh.",
      },
      {
        text: "💡 Dặn khách dễ hiểu: “Sên cũng cần có độ rơ vừa phải, giống dây đàn – căng quá là đứt.”",
      },
      {
        title: "🌧️ 4. Tránh chạy ngập nước lâu",
      },
      {
        text: "Nước + bùn + cát = kẻ thù của nhông sên dĩa. Nước cuốn trôi mỡ sên, cát chui vô mắt sên làm mài mòn, dễ sét và kẹt mắt sên.",
      },
      {
        text: "💡 Dặn khách: “Nếu có chạy ngập, về nhớ rửa sên + tra mỡ lại liền.”",
      },
      {
        title: "🔄 5. Thay nguyên bộ khi đã mòn đều",
      },
      {
        text: "Đây là điểm thợ chuyên luôn nhấn mạnh: Chỉ thay sên → nhông dĩa cũ ăn không khớp. Chỉ thay nhông → sên cũ mòn chéo. Kết quả: bộ mới cũng mau hư.",
      },
      {
        text: "💡 Nói cho khách hiểu: “Nhông – sên – dĩa giống 3 bánh răng ăn với nhau, hư là hư chung.”",
      },
      {
        title: "✅ KẾT LUẬN",
      },
      {
        text: "Tiệm nào dặn kỹ – làm có tâm: Khách thấy mình hiểu nghề ✔️ Xe chạy bền, ít hư vặt ✔️ Khách nhớ tiệm → quay lại hoài ✔️ Giới thiệu thêm khách mới.",
      },
      {
        text: "#BaoDuongXe #NhongSenDiaBen #PhucLongDongHanh #SuaXeMienTay",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169592/605249384_1252891396861816_2824162400494807566_n_dnewna.jpg",
          title: "Bí quyết giữ nhông sên dĩa bền",
        },
      },
    ],
  },
  {
    id: 11,
    title: "XE CHẠY YẾU DẦN THEO THỜI GIAN – VÌ SAO CÀNG NGÀY CÀNG Ì?",
    time: "2025-11-11",
    writer: "Phúc Long",
    views: 5200,
    tag: [
      "Sửa xe điện",
      "Xe điện yếu",
      "Pin xe điện",
      "Bắt bệnh xe điện",
      "Kinh nghiệm thợ",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169685/605776006_1254169343400688_65986712500496656_n_yowiwe.jpg",
      title:
        "Khách hay hỏi: “Hồi mới mua chạy bốc lắm, giờ càng ngày càng yếu như xe bị nghẹt.”",
      description: [
        "Đây không phải lỗi lạ, mà là bệnh kinh điển của xe điện. Cùng tìm hiểu nguyên nhân gốc và cách xử lý dứt điểm.",
      ],
    },
    content: [
      {
        text: "Anh em thợ chắc gặp hoài. Khách vô tiệm hay hỏi: “Hồi mới mua chạy bốc lắm, giờ càng ngày càng yếu như xe bị nghẹt.” Đây không phải lỗi lạ, mà là bệnh kinh điển của xe điện.",
      },
      {
        title: "⚠️ TRIỆU CHỨNG THƯỜNG GẶP",
      },
      {
        text: "➖ Đề pa chậm, vặn ga mà xe “lì”, chở nặng hoặc leo dốc là hụt rõ.",
      },
      {
        text: "➖ Chạy quãng ngắn còn tạm, càng chạy lâu hoặc gặp nắng nóng là yếu nhanh.",
      },
      {
        text: "➖ Pin tụt nhanh hơn trước, có xe tới 20–30% là rớt lực rất mạnh.",
      },
      {
        text: "💡 Khách hay nói: “Xe không hư hẳn, nhưng chạy không còn bốc”.",
      },
      {
        title: "🔋 NGUYÊN NHÂN GỐC – VÌ SAO XE YẾU DẦN?",
      },
      {
        text: "Nguyên nhân phổ biến nhất: PIN / ẮC QUY BỊ LÃO HÓA (CHAI).",
      },
      {
        text: "Với pin/ắc quy đã chai: Dung lượng thực giảm, điện trở trong tăng.",
      },
      {
        text: "Khi đề pa, leo dốc: Dòng kéo tăng → Điện áp sụt mạnh tức thời → Controller nhận áp thấp → giảm công suất hoặc kích bảo vệ thấp áp.",
      },
      {
        text: "💡 Xe yếu không phải thiếu volt đứng yên, mà là thiếu khả năng cấp dòng ổn định dưới tải.",
      },
      {
        title: "🪫 PHÂN BIỆT ẮC QUY CHÌ VÀ PIN LITHIUM",
      },
      {
        text: "🔹 ẮC QUY CHÌ: Dễ gặp sunfat hóa bản cực. Chai nhanh nếu hay để cạn pin hoặc sạc sai. Chạy càng lâu → càng yếu rõ.",
      },
      {
        text: "🔹 PIN LITHIUM: Thường gặp cell già + nhiệt cao + xả dòng lớn liên tục. Lệch cell → vài cell yếu chạm ngưỡng trước BMS giới hạn/cắt sớm → xe yếu kiểu “bất thường”.",
      },
      {
        title: "🔍 CÁCH KIỂM TRA ĐÚNG – KHÔNG THAY BỪA",
      },
      {
        text: "🗣️ 1. HỎI KHÁCH CHO TRÚNG: Yếu từ từ hay yếu đột ngột? Yếu nhất lúc đề pa hay leo dốc? Có hay chở nặng, chạy ngập nước, để pin cạn không? (Hỏi đúng là đã bắt trúng 50% bệnh).",
      },
      {
        text: "⚡ 2. TEST DƯỚI TẢI (ĐIỂM ĂN TIỀN): So điện áp khi đứng yên và khi vặn ga mạnh / leo dốc.",
      },
      {
        text: "👉 Nếu điện áp tụt mạnh dưới tải rồi hồi lại khi nhả ga → Pin yếu dưới tải (bệnh rất rõ).",
      },
      {
        text: "👉 Nếu pin tụt theo “cục” → Nghi lệch cell / BMS giới hạn.",
      },
      {
        text: "⚙️ 3. LOẠI TRỪ TẢI CƠ HỌC: Nhấc bánh quay tay. Nếu bánh/motor nặng, sượng → Có thể tải cơ tăng, không phải pin là gốc.",
      },
      {
        title: "🛠️ CÁCH SỬA CHUẨN – LÀM MỘT LẦN CHO ĐÁNG",
      },
      {
        text: "✔️ Ắc quy chì: Thay đồng bộ cả bộ (Cùng dung lượng – cùng chủng loại). Kiểm tra luôn sạc + jack + dây.",
      },
      {
        text: "✔️ Lithium: Kiểm tra pack pin & BMS. Cân cell (nếu phù hợp). Thay cell yếu hoặc thay pack đạt chuẩn.",
      },
      {
        text: "👨‍🔧 Sau sửa: Test lại thực tế (đề pa + leo dốc) → hết sụt áp bất thường mới giao xe.",
      },
      {
        title: "⭐ MẸO THỢ (CỰC QUAN TRỌNG)",
      },
      {
        text: "Đồng hồ pin nhiều xe chỉ là ước lượng theo điện áp → rất dễ ảo. Thợ giỏi luôn tin test tải hơn là tin đồng hồ.",
      },
      {
        text: "Nếu xe yếu kèm motor nóng / tiếng lạ → Xử lý tải trước rồi mới kết luận pin.",
      },
      {
        title: "✅ KẾT LUẬN",
      },
      {
        text: "Xe điện yếu dần không phải “bệnh mơ hồ”. Bắt đúng nguyên nhân – sửa đúng chỗ → khách tin → quay lại → giới thiệu thêm khách mới.",
      },
      {
        text: "#SuaXeDien #XeDienYeu #PinXeDien #BatBenhXeDien #AnhEmTho #PhucLongDongHanh",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169685/605776006_1254169343400688_65986712500496656_n_yowiwe.jpg",
          title: "Kiểm tra pin và bình ắc quy xe điện",
        },
      },
    ],
  },
  {
    id: 12,
    title: "BÁO PIN ĐẦY NHƯNG CHẠY RẤT ÍT – VÌ SAO “ĐẦY MÀ KHÔNG ĐI XA”?",
    time: "2025-11-12",
    writer: "Phúc Long",
    views: 5100,
    tag: [
      "Sửa xe điện",
      "Pin xe điện",
      "Báo đầy giả",
      "Lệch cell",
      "Bắt bệnh xe điện",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169762/611266175_1258034706347485_8247405843153185497_n_df4jah.jpg",
      title: "Sạc báo đầy đàng hoàng mà chạy vài cây là tụt pin liền",
      description: [
        "Đây không phải lỗi hiếm, mà là bệnh rất thường gặp trên xe điện. Cùng tìm hiểu nguyên nhân gốc và cách giải thích cho khách hiểu ngay.",
      ],
    },
    content: [
      {
        text: "Anh em thợ chắc gặp hoài. Khách vô tiệm than: “Sạc báo đầy đàng hoàng mà chạy vài cây là tụt pin liền.” Đây không phải lỗi hiếm, mà là bệnh rất thường gặp trên xe điện.",
      },
      {
        title: "⚠️ TRIỆU CHỨNG DỄ NHẬN BIẾT",
      },
      {
        text: "➖ Sạc báo đầy đúng thời gian nhưng chạy được rất ít.",
      },
      {
        text: "➖ Pin tụt theo kiểu “bậc thang” (4 vạch xuống 2 vạch rất nhanh).",
      },
      {
        text: "➖ Đề pa mạnh thì tụt vạch, nhả ga lại hồi.",
      },
      {
        text: "💡 Khách nói: “Mới sạc xong mà như chưa sạc”.",
      },
      {
        title: "🔋 NGUYÊN NHÂN GỐC – GIẢI THÍCH DỄ HIỂU",
      },
      {
        text: "Đây là lỗi “điện áp đạt – dung lượng không còn”. Pin/ắc quy vẫn sạc lên đủ volt cuối, nhưng dung lượng thực (Ah) đã giảm → năng lượng tích trữ ít → chạy không xa.",
      },
      {
        title: "⚡ VỚI PIN LITHIUM",
      },
      {
        text: "Rất hay gặp tình trạng lệch cell: chỉ cần 1 nhóm cell yếu chạm ngưỡng trước → BMS cắt xả sớm để bảo vệ. Cả pack bị “hết pin” dù phần còn lại vẫn còn. Xe báo đầy nhưng chạy vài km là hết lực.",
      },
      {
        title: "🔌 TRƯỜNG HỢP “ĐẦY GIẢ” DO ĐƯỜNG SẠC",
      },
      {
        text: "Jack sạc / cos / dây bị: Lỏng, oxy hóa, hoặc nóng bất thường khi sạc.",
      },
      {
        text: "Điện hao hụt thành nhiệt → Dòng vào pin thấp → Pin không thật sự no năng lượng.",
      },
      {
        title: "🔍 CÁCH KIỂM TRA ĐÚNG – KHÔNG THAY BỪA",
      },
      {
        text: "✔️ Test quãng đường thực tế sau khi sạc đầy (vòng test cố định).",
      },
      {
        text: "✔️ Quan sát: tụt khi tải – hồi khi nhả ga → pin mệt / lệch cell.",
      },
      {
        text: "✔️ Kiểm tra jack sạc – cos – dây có nóng bất thường khi sạc không.",
      },
      {
        title: "🛠️ CÁCH SỬA CHUẨN",
      },
      {
        text: "👉 Ắc quy chì: Thay nguyên bộ. Kiểm tra sạc đúng áp – đúng dòng. Soát lại jack & dây sạc.",
      },
      {
        text: "👉 Pin lithium: Cân cell hoặc xử lý cell yếu. Kiểm tra BMS có cắt sớm không. Thay pack nếu đã suy nặng. Đồng thời xử lý tổn hao đường sạc nếu có.",
      },
      {
        title: "💡 MẸO GIẢI THÍCH CHO KHÁCH (CỰC HAY)",
      },
      {
        text: "Dùng ví dụ: “Ly nước đầy miệng không có nghĩa là ly to.” Khách hiểu liền – tin liền!",
      },
      {
        text: "💧 “Báo đầy” giống như nước chạm miệng ly: Xe báo pin đầy thường dựa theo điện áp (Volt). Điện áp lên tới “mốc đầy” → xe/charger báo FULL. Giống như rót nước tới miệng ly → nhìn thấy đầy.",
      },
      {
        text: "🫙 Nhưng “đi xa hay không” lại phụ thuộc ly to hay nhỏ: Dung lượng (Ah / Wh) mới là thứ quyết định chạy được bao xa. Pin chai thì giống như ly bị nhỏ lại (hoặc bị thủng/giảm sức chứa). Nên dù nước vẫn chạm miệng (Volt vẫn đủ) nhưng lượng nước bên trong ít → uống vài ngụm là hết (chạy vài km là tụt nhanh).",
      },
      {
        title: "⭐ MẸO THỢ",
      },
      {
        text: "Nếu pin tụt nhanh khi đề pa mạnh → Ưu tiên bắt bệnh pin/pack trước, đừng vội nghi controller.",
      },
      {
        text: "#SuaXeDien #PinXeDien #BaoDayGia #LechCell #BatBenhXeDien #PhucLongDongHanh",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169762/611266175_1258034706347485_8247405843153185497_n_df4jah.jpg",
          title: "Bệnh báo pin đầy ảo trên xe điện",
        },
      },
    ],
  },
];
