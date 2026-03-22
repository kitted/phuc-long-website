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
  {
    id: 13,
    title:
      "VẶN GA KHÔNG CHẠY NHƯNG ĐÈN VẪN SÁNG – VÌ SAO CÓ ĐIỆN MÀ XE KHÔNG CHẠY?",
    time: "2025-11-13",
    writer: "Phúc Long",
    views: 4800,
    tag: [
      "Sửa xe điện",
      "Xe điện không chạy",
      "Công tắc phanh",
      "Tay ga xe điện",
      "Bắt bệnh xe điện",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169875/611663401_1259374369546852_8663591268224050211_n_p6xt6d.jpg",
      title: "Đèn còi vẫn sáng mà vặn ga không chạy",
      description: [
        "Đây là bệnh rất thường gặp trên xe điện. Đèn sáng không có nghĩa là xe có thể chạy, cùng tìm hiểu nguyên nhân và cách xử lý nhanh.",
      ],
    },
    content: [
      {
        text: "Anh em thợ gặp hoài. Khách than: “Đèn còi vẫn sáng mà vặn ga không chạy.” Đây là bệnh rất thường gặp trên xe điện, không phải lỗi do pin.",
      },
      {
        title: "⚠️ TRIỆU CHỨNG",
      },
      {
        text: "➖ Đèn, còi, xi-nhan vẫn hoạt động bình thường.",
      },
      {
        text: "➖ Vặn ga “im ru”, hoặc nhích nhẹ rồi đứng.",
      },
      {
        text: "➖ Tắt mở khóa thì có lúc chạy lại được.",
      },
      {
        title: "🔌 NGUYÊN NHÂN GỐC (HIỂU CHO ĐÚNG)",
      },
      {
        text: "Xe điện có 2 nguồn: Nguồn phụ (nuôi đèn, còi) và Nguồn động lực (chạy motor). Đèn sáng chỉ chứng minh có nguồn phụ, nhưng để motor quay, controller cần tín hiệu hợp lệ.",
      },
      {
        text: "Lỗi hay gặp nhất:",
      },
      {
        text: "👉 Công tắc phanh kẹt → controller nghĩ đang bóp phanh → cắt ga.",
      },
      {
        text: "👉 Giắc tay ga/phanh oxy hóa → tín hiệu không lên.",
      },
      {
        text: "👉 Dây tín hiệu đứt ngầm.",
      },
      {
        text: "👉 Khóa điện / công tắc an toàn lỗi → controller không vào chế độ chạy.",
      },
      {
        title: "🔍 CÁCH KIỂM TRA NHANH",
      },
      {
        text: "✔️ Nhìn đèn phanh xem có sáng bất thường không.",
      },
      {
        text: "✔️ Tháo giắc tay ga / phanh → coi có xanh rêu, ẩm ướt không.",
      },
      {
        text: "✔️ Lắc giắc khi vặn ga → xem có chập chờn không.",
      },
      {
        title: "🛠️ CÁCH SỬA CHUẨN",
      },
      {
        text: "✔️ Thay công tắc phanh nếu bị lỗi.",
      },
      {
        text: "✔️ Xử lý hoặc thay tay ga nếu tín hiệu không ổn định.",
      },
      {
        text: "✔️ Vệ sinh giắc – bấm cos lại – cố định dây chống rung và chống ẩm.",
      },
      {
        title: "⭐ MẸO (BẮT BỆNH RẤT NHANH)",
      },
      {
        text: "Hỏi khách 1 câu: “Có khi bóp phanh thì xe mới chịu chạy không?” Nếu khách trả lời CÓ → 80% là lỗi phanh cắt ga.",
      },
      {
        text: "👨‍🔧 Lưu ý sau khi sửa nhớ: Test bóp/nhả phanh nhiều lần. Chạy thử đề pa cho chắc chắn.",
      },
      {
        title: "✅ KẾT LUẬN",
      },
      {
        text: "Đèn sáng ≠ xe chạy. Bắt đúng tín hiệu – sửa đúng chỗ → khách tin → quay lại hoài.",
      },
      {
        text: "#SuaXeDien #XeDienKhongChay #CongTacPhanh #TayGaXeDien #BatBenhXeDien #PhucLongDongHanh",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169875/611663401_1259374369546852_8663591268224050211_n_p6xt6d.jpg",
          title: "Vặn ga không chạy dù xe vẫn có điện",
        },
      },
    ],
  },
  {
    id: 14,
    title: "VÒNG BI LÀ GÌ? – NHỎ MÀ ẢNH HƯỞNG RẤT LỚN TỚI CẢM GIÁC CHẠY XE",
    time: "2025-11-14",
    writer: "Phúc Long",
    views: 4300,
    tag: [
      "Vòng bi",
      "Bạc đạn",
      "Sửa xe máy",
      "Sửa xe điện",
      "Cảm giác chạy xe",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169926/611611894_1260342212783401_8640102778354790137_n_yxs2aw.jpg", // Nhớ thay link ảnh thật vào đây nhé
      title: "“Xe em không hư mà chạy nặng, không êm như trước.”",
      description: [
        "Rất nhiều ca, thủ phạm nằm ở vòng bi (bạc đạn). Nhỏ mà ảnh hưởng rất lớn tới cảm giác chạy xe.",
      ],
    },
    content: [
      {
        text: "“Xe em không hư mà chạy nặng, không êm như trước.” Rất nhiều ca khách vào than như vậy, và thủ phạm nằm ở vòng bi (bạc đạn).",
      },
      {
        title: "⚙️ VÒNG BI LÀ GÌ?",
      },
      {
        text: "Vòng bi (bạc đạn) là bộ phận giúp các chi tiết quay tròn trơn tru, đúng trục, ít ma sát.",
      },
      {
        text: "Nhiệm vụ chính của vòng bi là: Giảm ma sát, giúp xe quay nhẹ, giữ độ êm và ổn định khi vận hành.",
      },
      {
        text: "💡 Vòng bi mà khô – mòn – kẹt thì xe chạy không còn ra xe.",
      },
      {
        title: "🛵 NHỮNG BỘ PHẬN TRÊN XE SỬ DỤNG VÒNG BI",
      },
      {
        text: "Trên xe máy và xe điện, vòng bi xuất hiện ở rất nhiều vị trí quan trọng:",
      },
      {
        text: "➖ Bánh trước – bánh sau → ảnh hưởng trực tiếp tới độ trớn và độ êm.",
      },
      {
        text: "➖ Cổ lái → quyết định cảm giác lái nhẹ hay nặng.",
      },
      {
        text: "➖ Trục động cơ / motor điện → ảnh hưởng lực kéo và độ bền motor.",
      },
      {
        text: "➖ Puly – trục trung gian – bánh đà → truyền lực mượt hay không.",
      },
      {
        text: "➖ Một số cơ cấu quay phụ trong hộp truyền động.",
      },
      {
        text: "⚠️ Chỉ cần 1 vòng bi hư, cả hệ thống quay đều bị ảnh hưởng.",
      },
      {
        title: "📉 VÒNG BI ẢNH HƯỞNG GÌ TỚI TRẢI NGHIỆM CHẠY XE?",
      },
      {
        text: "Khi vòng bi bắt đầu xuống cấp, xe sẽ có cảm giác:",
      },
      {
        text: "🔊 Nghe tiếng lạ: rè rè, ù ù, rào rào khi chạy.",
      },
      {
        text: "🏋️ Dắt xe nặng tay, quay bánh không trớn.",
      },
      {
        text: "🫨 Chạy không êm, rung nhẹ ở tay lái hoặc bánh.",
      },
      {
        text: "🔋 Xe điện hao pin hơn, chạy không bốc.",
      },
      {
        text: "⛽ Xe xăng hao xăng, máy phải gồng lực.",
      },
      {
        text: "💡 Nhiều khách tưởng pin yếu, máy yếu, nhưng thực tế là vòng bi kẹt → xe tốn lực để quay.",
      },
      {
        title: "👨‍🔧 GÓC NHÌN CỦA THỢ",
      },
      {
        text: "✔️ Kiểm tra vòng bi không mất nhiều thời gian.",
      },
      {
        text: "✔️ Thay đúng vòng bi → khách cảm nhận khác liền.",
      },
      {
        text: "✔️ Rất dễ ghi điểm vì xe êm – nhẹ – chạy sướng hơn thấy rõ.",
      },
      {
        text: "#VongBi #BacDan #SuaXeMay #SuaXeDien #CamGiacChayXe #AnhEmTho #PhucLongDongHanh",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169926/611611894_1260342212783401_8640102778354790137_n_yxs2aw.jpg", // Nhớ thay link ảnh thật vào đây nhé
          title: "Vòng bi mòn làm xe chạy nặng và kêu",
        },
      },
    ],
  },
  {
    id: 15,
    title: "XE BẠN ĐÃ ĐẾN LÚC PHẢI THAY BỐ THẮNG NGAY!!!",
    time: "2025-11-15",
    writer: "Phúc Long",
    views: 4600,
    tag: [
      "Bố thắng đĩa",
      "Thắng xe máy",
      "An toàn khi chạy xe",
      "Kinh nghiệm thợ",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169998/615344333_1264431599041129_6261393213627394728_n_ldsmkm.jpg",
      title: "Bố thắng mòn tiềm ẩn nguy hiểm cao!!!",
      description: [
        "Vì bố thắng mòn không chỉ “kêu” đâu, mà còn hại đĩa – giảm lực phanh – tăng rủi ro khi thắng gấp.",
      ],
    },
    content: [
      {
        text: "Vì bố thắng mòn không chỉ “kêu” đâu, mà còn hại đĩa – giảm lực phanh – tăng rủi ro khi thắng gấp - tiềm ẩn nguy hiểm cao!!! Dưới đây là 5 dấu hiệu báo động:",
      },
      {
        title: "🔊 1. Thắng kêu to khi bóp nhẹ",
      },
      {
        text: "➖ Bố thắng mòn tới lớp cứng hoặc chạm phần kim loại báo mòn.",
      },
      {
        text: "➖ Mặt bố chai, dính bụi, dính nước làm rung ma sát.",
      },
      {
        text: "⚠️ Hậu quả: Càng chạy càng kêu, lâu ngày cào mặt đĩa.",
      },
      {
        text: "👨‍🔧 Cách xử lý: Tháo kiểm tra độ dày bố + vệ sinh cụm heo, chốt trượt.",
      },
      {
        title: "🛑 2. Bóp thắng thấy trượt, không “ăn” liền",
      },
      {
        text: "➖ Bố thắng bị chai mặt do nóng quá mức.",
      },
      {
        text: "➖ Dính dầu, mỡ, nước rửa xe vào mặt bố.",
      },
      {
        text: "➖ Đĩa bị bóng hoặc bị “kính” làm giảm ma sát.",
      },
      {
        text: "⚠️ Hậu quả: Phanh có nhưng ăn chậm, gặp tình huống gấp là nguy hiểm.",
      },
      {
        text: "👨‍🔧 Cách xử lý: Soi mặt bố, mặt đĩa. Nếu dính dầu thường thay bố nhanh hơn vệ sinh.",
      },
      {
        title: "✊ 3. Tay thắng bóp sâu hơn trước",
      },
      {
        text: "➖ Bố mòn → piston phải thò ra nhiều hơn mới kẹp được đĩa.",
      },
      {
        text: "➖ Có thể kèm bọt khí/thiếu dầu phanh hoặc phốt heo mệt.",
      },
      {
        text: "⚠️ Hậu quả: Hành trình tay thắng dài, khách bóp “hụt tay”, mất tự tin khi chạy.",
      },
      {
        text: "👨‍🔧 Cách xử lý: Đo độ dày bố + kiểm tra dầu phanh, xả gió nếu cần.",
      },
      {
        title: "🔥 4. Đĩa thắng nóng nhanh, có mùi khét",
      },
      {
        text: "➖ Bố quá mòn hoặc vật liệu kém → ma sát sinh nhiệt nhiều.",
      },
      {
        text: "➖ Heo thắng kẹt, piston hồi không hết làm bó phanh nhẹ.",
      },
      {
        text: "⚠️ Hậu quả: Bố nhanh cháy, đĩa cong, phanh rung. Hao xăng/hao pin do bánh bị ghì.",
      },
      {
        text: "👨‍🔧 Cách xử lý: Kiểm tra heo thắng, chốt trượt, piston hồi, và tình trạng đĩa.",
      },
      {
        title: "⚠️ 5. Thắng gấp thấy xe không đứng chắc",
      },
      {
        text: "➖ Bố mòn + ma sát giảm → lực kẹp không đủ.",
      },
      {
        text: "➖ Đĩa mòn/đĩa kém, hoặc bố không đúng loại.",
      },
      {
        text: "⚠️ Hậu quả: Nguy hiểm nhất, nhất là trời mưa, đường trơn, chở nặng.",
      },
      {
        text: "👨‍🔧 Cách xử lý: Ưu tiên thay bố đúng chuẩn, chạy test phanh sau khi thay.",
      },
      {
        title: "✅ CHỐT LẠI",
      },
      {
        text: "💡 “Bố thắng mòn không chỉ kêu, mà còn hại đĩa và giảm lực phanh. Thay sớm là an toàn, lại tiết kiệm vì khỏi thay đĩa.”",
      },
      {
        text: "#BoThangDia #ThangXeMay #AnToanKhiChayXe #KinhNghiemTho #PhucLongDongHanh",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774169998/615344333_1264431599041129_6261393213627394728_n_ldsmkm.jpg",
          title: "Dấu hiệu cần thay bố thắng ngay",
        },
      },
    ],
  },
  {
    id: 16,
    title: "SAU TẾT XE KHÔNG ĐỀ ĐƯỢC? 90% DÍNH MẤY LỖI NÀY!",
    time: "2025-11-16",
    writer: "Phúc Long",
    views: 4700,
    tag: [
      "Không đề được",
      "Sửa xe sau Tết",
      "Ắc quy",
      "Anh em thợ",
      "Bảo dưỡng",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170088/624543743_1280420630775559_7584301412341191640_n_npffu6.jpg",
      title: "Hết Tết dắt xe ra bấm đề “cạch cạch” / im ru",
      description: [
        "Mấy ngày Tết chạy nhiều – dừng nhiều – để xe lâu… Dưới đây là 5 nguyên nhân chính và cách xử lý nhanh cho anh em thợ.",
      ],
    },
    content: [
      {
        text: "Mấy ngày Tết chạy nhiều – dừng nhiều – để xe lâu…hết Tết dắt xe ra bấm đề “cạch cạch” / im ru / đèn yếu là gặp hoài. Dưới đây là các nguyên nhân chính:",
      },
      {
        title: "🔋 1. Ắc quy yếu / sụt điện (lỗi gặp nhiều nhất)",
      },
      {
        text: "➖ Để xe 3–7 ngày không chạy → ắc quy tụt áp. Trời lạnh/sáng sớm → đề càng nặng.",
      },
      {
        text: "➖ Dấu hiệu: đèn mờ, còi yếu, đề “tạch tạch”.",
      },
      {
        text: "👨‍🔧 Giải pháp: Kiểm tra điện áp, sạc đúng chuẩn hoặc thay bình nếu đã chai.",
      },
      {
        title: "🔌 2. Cọc bình lỏng – rỉ sét – tiếp xúc kém",
      },
      {
        text: "➖ Chạy Tết rung lắc + hơi ẩm → cọc bị lỏng / oxy hóa.",
      },
      {
        text: "➖ Dấu hiệu: lúc đề được lúc không, lắc dây là có điện lại.",
      },
      {
        text: "👨‍🔧 Giải pháp: Siết lại cọc + vệ sinh, bôi mỡ chống oxy hóa là ổn.",
      },
      {
        title: "⚡ 3. Cháy cầu chì / hư rơ-le đề / nút đề",
      },
      {
        text: "➖ Đề nhiều, đề “cố” khi bình yếu → rơ-le nóng, chập chờn.",
      },
      {
        text: "➖ Dấu hiệu: bấm đề im re hoặc chỉ nghe “tạch” mà máy không quay.",
      },
      {
        text: "👨‍🔧 Giải pháp: Test rơ-le, kiểm tra cầu chì, nút đề, dây mass.",
      },
      {
        title: "🛠️ 4. Bugi – xăng – gió “khó nổ” (xe để lâu)",
      },
      {
        text: "➖ Xe để lâu → xăng xuống chất, bugi bám muội.",
      },
      {
        text: "➖ Dấu hiệu: đề quay nhưng không nổ, nổ rồi tắt.",
      },
      {
        text: "👨‍🔧 Giải pháp: Kiểm tra bugi, vệ sinh lọc gió, kiểm tra xăng/kim phun (tùy xe).",
      },
      {
        title: "🛵 5. Xe điện “có đèn nhưng không chạy”",
      },
      {
        text: "➖ Nguồn phụ vẫn sáng nhưng nguồn động lực không đủ/không nhận tín hiệu.",
      },
      {
        text: "➖ Hay gặp: công tắc phanh kẹt, giắc tay ga ẩm, BMS cắt.",
      },
      {
        text: "👨‍🔧 Giải pháp: Ưu tiên kiểm tra công tắc phanh – giắc tay ga – pin/pack dưới tải.",
      },
      {
        title: "⭐ MẸO NHANH CHO KHÁCH",
      },
      {
        text: "✔️ Tết về tới nhà: chạy thêm 5–10 phút cho ổn điện.",
      },
      {
        text: "✔️ Nếu để xe lâu: 2–3 ngày nổ máy 3–5 phút (xe xăng) / sạc đúng chuẩn (xe điện).",
      },
      {
        text: "✔️ Đừng cố đề nhiều lần khi đèn đã yếu → dễ hại rơ-le & bình.",
      },
      {
        text: "#KhongDeDuoc #SuaXeSauTet #AcQuy #PhuTungPhucLong #AnhEmTho",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170088/624543743_1280420630775559_7584301412341191640_n_npffu6.jpg",
          title: "Xe không đề được sau Tết",
        },
      },
    ],
  },
  {
    id: 17,
    title: "XE ĐIỆN ĐI CHƠI TẾT: 5 LỖI HAY GẶP & CÁCH PHÒNG!!!",
    time: "2025-11-17",
    writer: "Phúc Long",
    views: 4900,
    tag: [
      "Sửa xe điện",
      "Kiến thức xe điện",
      "Phụ tùng xe điện",
      "Bắt bệnh xe điện",
      "Anh em thợ",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170163/629585685_1286488173502138_1823403935260012878_n_peqcky.jpg",
      title: "5 lỗi xe điện hay gặp dịp Tết & cách phòng tránh",
      description: [
        "Xe điện Tết chạy nhiều, chở nhiều — bệnh nó lòi ra nhanh lắm nha anh em. Nhắc khách 5 lỗi hay gặp để phòng trước.",
      ],
    },
    content: [
      {
        text: "Xe điện Tết chạy nhiều, chở nhiều — bệnh nó lòi ra nhanh lắm nha anh em. Nhắc khách 5 lỗi hay gặp để phòng trước:",
      },
      {
        title: "🔋 1. Báo đầy nhưng chạy ít",
      },
      {
        text: "➖ Pin/pack “điện áp đủ nhưng dung lượng yếu”, dễ tụt theo bậc thang.",
      },
      {
        title: "🔌 2. Sạc lâu mới đầy",
      },
      {
        text: "➖ Do sạc yếu / jack nóng / tổn hao đường sạc / lệch cell.",
      },
      {
        title: "💡 3. Vặn ga không chạy nhưng đèn vẫn sáng",
      },
      {
        text: "➖ Kẹt công tắc phanh, giắc tay ga oxy hóa, dây tín hiệu đứt ngầm.",
      },
      {
        title: "🌀 4. Ga lúc vọt lúc hụt (“ga loạn”)",
      },
      {
        text: "➖ Nhiễu tín hiệu hall, giắc ẩm sau rửa xe, dây đi sát dây nguồn.",
      },
      {
        title: "⚙️ 5. Motor kêu rè/xe ì khi nóng",
      },
      {
        text: "➖ Bạc đạn/mô tơ có tải, pin yếu dưới tải càng lộ rõ.",
      },
      {
        title: "⭐ MẸO THỢ (CỰC QUAN TRỌNG)",
      },
      {
        text: "✔️ Test dưới tải (vặn ga/leo dốc) mới ra bệnh thật, đừng chỉ nhìn “vạch pin”.",
      },
      {
        text: "💡 Ai cần phụ tùng xe điện (pin, dây, jack, cảm biến…) Phúc Long hỗ trợ đủ.",
      },
      {
        text: "#SuaXeDien #XeDien #KienThucXeDien #PhuTungXeDien #BatBenhXeDien #PinXeDien #SacXeDien #Controller #TayGa #CongTacPhanh #AnhEmTho #PhucLongDongHanh #DBSCL",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170163/629585685_1286488173502138_1823403935260012878_n_peqcky.jpg",
          title: "Các lỗi xe điện thường gặp dịp Tết",
        },
      },
    ],
  },
  {
    id: 18,
    title:
      "THẮNG KÊU / THẮNG KHÔNG ĂN SAU TẾT: 4 NGUYÊN NHÂN + CÁCH XỬ LÝ NHANH",
    time: "2025-11-18",
    writer: "Phúc Long",
    views: 4400,
    tag: ["Bảo dưỡng sau Tết", "Thắng kêu", "Phanh đĩa", "Bố thắng", "Sửa xe"],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170233/629412293_1286503626833926_5486378400052612602_n_v8zmdz.jpg",
      title: "Bóp thắng kêu “két két”, thắng trượt, bóp sâu mới ăn",
      description: [
        "Sau Tết chạy nhiều, chở nặng, đi xa… xe về là hay gặp tình trạng này. Cùng điểm qua 4 nguyên nhân và cách xử lý nhanh.",
      ],
    },
    content: [
      {
        text: "Sau Tết chạy nhiều, chở nặng, đi xa… xe về là hay gặp: bóp thắng kêu “két két”, thắng trượt, bóp sâu mới ăn.",
      },
      {
        title: "⚠️ 4 NGUYÊN NHÂN GẶP NHIỀU NHẤT",
      },
      {
        text: "🛑 1. Bố thắng mòn / chai bố: Chạy đông xe, thắng liên tục → bố mòn nhanh, bề mặt chai → phanh không “ăn” liền.",
      },
      {
        text: "🌧️ 2. Dính nước – bùn – bụi thắng: Đi mưa/đường bẩn → bụi bám mặt bố & đĩa → kêu rít, phanh giật.",
      },
      {
        text: "🔥 3. Đĩa thắng nóng – bị chai/đánh bóng: Thắng gấp liên tục → đĩa nóng → bề mặt bị “láo” → thắng trượt, không bám.",
      },
      {
        text: "⚙️ 4. Heo dầu khô / kẹt pít-tông (phanh đĩa): Lâu ngày không vệ sinh → pít-tông hồi chậm → bóp thắng sâu, bánh bị ghì nhẹ.",
      },
      {
        title: "🔍 CÁCH KIỂM TRA NHANH (THỢ LÀM 5 PHÚT RA BỆNH)",
      },
      {
        text: "✔️ Nhìn độ dày bố + kiểm tra mặt bố có chai không.",
      },
      {
        text: "✔️ So đĩa có bị xước, xanh tím do nóng không.",
      },
      {
        text: "✔️ Quay bánh xem có bị ghì.",
      },
      {
        text: "✔️ Vệ sinh cụm thắng, tra mỡ đúng chỗ, test lại.",
      },
      {
        title: "✅ KẾT LUẬN",
      },
      {
        text: "Thắng là an toàn, kiểm tra sớm cho khách là giữ uy tín tiệm.",
      },
      {
        text: "#BoThang #PhanhDia #ThangKeu #ThangKhongAn #BaoDuongSauTet #XeMayAnToan #SuaXe #ThoSuaXe #KiemTraThang #BaoDuongXeMay #PhuTungXeMay #PhucLongDongHanh #DBSCL",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170233/629412293_1286503626833926_5486378400052612602_n_v8zmdz.jpg",
          title: "Nguyên nhân thắng kêu và không ăn sau Tết",
        },
      },
    ],
  },
  {
    id: 19,
    title: "PIN NATRI-ION LÀ GÌ? MẢNH GHÉP MỚI CỦA NĂNG LƯỢNG GIÁ RẺ VÀ BỀN BỈ",
    time: "2025-11-19",
    writer: "Phúc Long",
    views: 3800,
    tag: [
      "Pin Natri-ion",
      "Năng lượng mới",
      "Pin xe điện",
      "Kiến thức pin",
      "Lưu trữ điện",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://cafefcdn.com/203337114487263232/2023/4/14/sodium-boron-batteries-1681440212007-1681440212251444997800.jpeg",
      title: "Tương lai của năng lượng giá rẻ",
      description: [
        "Natri là nguyên tố dồi dào, an toàn và đang được ứng dụng làm pin Natri-ion với tiềm năng giá hợp lý, ổn định nhiệt tốt.",
      ],
    },
    content: [
      {
        text: "Natri là nguyên tố rất quen thuộc (có trong muối ăn), và vì dồi dào – dễ khai thác, nó đang được dùng để làm pin Natri-ion.",
      },
      {
        title: "⚡ CƠ CHẾ VÀ ƯU ĐIỂM",
      },
      {
        text: "Pin Natri-ion hoạt động giống pin lithium nhưng dùng ion natri, nên có tiềm năng giá hợp lý hơn.",
      },
      {
        text: "Đặc biệt, loại pin này rất an toàn và có độ ổn định nhiệt tốt khi ứng dụng trong nhiều môi trường khác nhau.",
      },
      {
        title: "🔋 ĐIỂM HẠN CHẾ & ỨNG DỤNG HIỆN TẠI",
      },
      {
        text: "Hiện tại, pin natri thường chứa điện thấp hơn lithium (cùng kích thước thì đi được quãng đường ít hơn).",
      },
      {
        text: "💡 Do đó, pin Natri-ion phù hợp nhất cho: Xe chạy đô thị quãng ngắn và các trạm lưu trữ điện (pin dự phòng, điện mặt trời).",
      },
      {
        title: "🔮 TƯƠNG LAI",
      },
      {
        text: "Tương lai, pin natri sẽ không thay thế hoàn toàn lithium, mà sẽ là một “mảnh ghép” quan trọng giúp năng lượng trở nên rẻ và bền hơn trong đời sống.",
      },
      {
        text: "#PinNatri #PinNatriIon #NangLuongMoi #PinXeDien #KienThucPin #LuuTruDien #PhucLongDongHanh",
      },
      {
        image: {
          img: "https://cafefcdn.com/203337114487263232/2023/4/14/sodium-boron-batteries-1681440212007-1681440212251444997800.jpeg",
          title: "Pin Natri-ion đang là xu hướng năng lượng mới",
        },
      },
    ],
  },
  {
    id: 20,
    title:
      "LINH KIỆN XE ĐIỆN DỄ HỎNG Ở VIỆT NAM: NGUYÊN NHÂN & CÁCH BẮT ĐÚNG BỆNH",
    time: "2025-11-20",
    writer: "Phúc Long",
    views: 5500,
    tag: [
      "Sửa xe điện",
      "Phụ tùng xe điện",
      "Bắt bệnh xe điện",
      "Khí hậu Việt Nam",
      "Kinh nghiệm thợ",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170603/643532776_1302404445243844_4232870475096948132_n_gyg2uf.jpg",
      title: "Xe điện ở VN hay gặp nắng nóng, mưa ngập, bụi bẩn...",
      description: [
        "Điều kiện khắc nghiệt khiến nhiều linh kiện xe điện xuống cấp rất nhanh. Dưới đây là cách bắt đúng bệnh cho 6 linh kiện dễ hỏng nhất.",
      ],
    },
    content: [
      {
        text: "Xe điện ở VN hay gặp nắng nóng – mưa nhiều – ngập nước – bụi – sạc điện nhà dân chập chờn… nên mấy linh kiện này xuống nhanh. Cùng điểm qua các bệnh thường gặp và cách xử lý:",
      },
      {
        title: "🔋 1. Pin/ắc quy (pack pin)",
      },
      {
        text: "➖ Dấu hiệu: Báo đầy nhưng chạy ít, tụt vạch “bậc thang”, đề pa hụt/leo dốc yếu.",
      },
      {
        text: "➖ Nguyên nhân: Chai pin, sụt áp dưới tải, lithium dễ lệch cell (BMS cắt sớm).",
      },
      {
        text: "👨‍🔧 Cách sửa: Test dưới tải (điểm ăn tiền) → thay đồng bộ ắc quy chì / kiểm tra BMS – cân cell – thay pack (lithium).",
      },
      {
        title: "🔌 2. Sạc + jack/cos/dây sạc",
      },
      {
        text: "➖ Dấu hiệu: Sạc lâu, sạc nóng, cắm chập chờn.",
      },
      {
        text: "➖ Nguyên nhân: Sạc yếu/sai dòng, jack oxy hóa/lỏng → hao nhiệt → dòng vào pin thấp.",
      },
      {
        text: "👨‍🔧 Cách sửa: Thử sạc chuẩn khác, xử lý jack/cos/dây, thay sạc đúng dòng.",
      },
      {
        title: "⚡ 3. Controller (bộ điều khiển)",
      },
      {
        text: "➖ Dấu hiệu: Có điện nhưng không chạy, chạy giật, nóng.",
      },
      {
        text: "➖ Nguyên nhân: Pin yếu dưới tải, giắc ẩm/oxy hóa, dây nguồn/mass lỏng.",
      },
      {
        text: "👨‍🔧 Cách sửa: Vệ sinh – bấm cos – cố định dây; chỉ thay controller khi đã loại trừ nguyên nhân do pin & giắc.",
      },
      {
        title: "✊ 4. Tay ga Hall + dây tín hiệu (ga loạn)",
      },
      {
        text: "➖ Dấu hiệu: Giữ ga đều mà xe tự vọt/hụt, hay xảy ra sau khi rửa xe hoặc trời ẩm.",
      },
      {
        text: "➖ Nguyên nhân: Giắc tay ga ẩm, dây đứt ngầm, nhiễu tín hiệu.",
      },
      {
        text: "👨‍🔧 Cách sửa: Siết/bấm cos lại, thay tay ga nếu tín hiệu không ổn, đi dây tránh sát dây nguồn.",
      },
      {
        title: "🛑 5. Công tắc phanh (phanh cắt ga)",
      },
      {
        text: "➖ Dấu hiệu: Vặn ga không chạy nhưng đèn vẫn sáng.",
      },
      {
        text: "➖ Nguyên nhân: Công tắc phanh kẹt → controller hiểu đang bóp phanh nên tự động cắt ga.",
      },
      {
        text: "👨‍🔧 Cách sửa: Kiểm tra xem đèn phanh có sáng bất thường không, thay công tắc phanh.",
      },
      {
        title: "🌀 6. Motor & bạc đạn motor",
      },
      {
        text: "➖ Dấu hiệu: Kêu rè, xe ì khi nóng, hao pin.",
      },
      {
        text: "➖ Nguyên nhân: Bạc đạn khô/vô nước, tải cơ tăng.",
      },
      {
        text: "👨‍🔧 Cách sửa: Nhấc bánh quay tay để loại trừ tải, thay bạc đạn đúng chuẩn.",
      },
      {
        title: "⭐ MẸO THỢ THỰC CHIẾN",
      },
      {
        text: "💡 Đừng nhìn “vạch pin” mà kết luận — test dưới tải + kiểm tra giắc/ẩm/oxy hóa là ra bệnh nhanh nhất.",
      },
      {
        text: "#SuaXeDien #PhuTungXeDien #PinXeDien #SacXeDien #Controller #TayGa #CongTacPhanh #BacDanMotor #BatBenhXeDien #PlusExPhucLong #DBSCL",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170603/643532776_1302404445243844_4232870475096948132_n_gyg2uf.jpg",
          title: "Bắt đúng bệnh linh kiện xe điện dễ hỏng tại Việt Nam",
        },
      },
    ],
  },
  {
    id: 21,
    title: "BÊN TRONG 1 CỤC PIN CÓ GÌ? (DỄ HIỂU)",
    time: "2025-11-21",
    writer: "Phúc Long",
    views: 4100,
    tag: [
      "Cấu tạo pin",
      "Kiến thức pin",
      "Xe điện",
      "Công nghệ pin",
      "Sửa xe điện",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170638/643880233_1302607265223562_3598502437265979059_n_khstje.jpg",
      title: "Khám phá bên trong 1 cục pin (cell)",
      description: [
        "Pin giống như một hộp điện mini — bên trong gia công phải cực chuẩn thì chạy mới bền và an toàn.",
      ],
    },
    content: [
      {
        text: "Một cục pin (cell) thường có 4 phần chính:",
      },
      {
        title: "🔋 1. 2 “tấm” tạo điện",
      },
      {
        text: "➖ Gồm Tấm A và Tấm B. Hai tấm này chứa vật liệu giúp pin tích điện khi sạc và xả điện khi dùng.",
      },
      {
        title: "🛡️ 2. Lớp mỏng ngăn cách ở giữa",
      },
      {
        text: "➖ Giống như bỏ một tờ giấy mỏng giữa 2 miếng kim loại.",
      },
      {
        text: "➖ Mục đích: Không cho 2 tấm chạm trực tiếp vào nhau (chạm là dễ chập cháy).",
      },
      {
        title: "💧 3. “Dung dịch đặc biệt” bên trong",
      },
      {
        text: "➖ Nó giống như “môi trường” giúp năng lượng di chuyển đúng cách trong pin.",
      },
      {
        text: "➖ Đây là dung dịch điện phân chuyên dụng, hoàn toàn không phải nước thường.",
      },
      {
        title: "🧰 4. Vỏ pin",
      },
      {
        text: "➖ Là “áo giáp” bảo vệ toàn bộ cấu trúc bên trong.",
      },
      {
        text: "➖ Có thể là dạng: tròn (như cell 18650), túi mềm (pouch), hoặc hộp vuông (prismatic).",
      },
      {
        title: "✅ NÓI GỌN LẠI",
      },
      {
        text: "💡 Pin giống như một hộp điện mini — bên trong gia công phải chuẩn thì mới bền và an toàn.",
      },
      {
        text: "#PinLaGi #CauTaoPin #KienThucPin #XeDien #PinXeDien #CongNghePin #SuaXeDien #PlusExPhucLong",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170638/643880233_1302607265223562_3598502437265979059_n_khstje.jpg",
          title: "Cấu tạo cơ bản bên trong 1 cục pin",
        },
      },
    ],
  },
  {
    id: 22,
    title: "ẮC QUY XE ĐIỆN LOẠI NÀO TỐT NHẤT THỊ TRƯỜNG?",
    time: "2025-11-22",
    writer: "Phúc Long",
    views: 4800,
    tag: [
      "Ắc quy xe điện",
      "Pin xe điện",
      "Chọn pin đúng",
      "Kiến thức xe điện",
      "Pin Lithium",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170705/644914411_1303359661814989_6440025183582161708_n_b02xab.jpg",
      title: "Không có 1 loại “tốt nhất cho tất cả”",
      description: [
        "Loại tốt nhất là loại đúng nhu cầu chạy + đúng ngân sách + đúng xe. Dưới đây là 3 lựa chọn phổ biến nhất hiện nay.",
      ],
    },
    content: [
      {
        text: "Không có 1 loại “tốt nhất cho tất cả”. Loại tốt nhất là loại đúng nhu cầu chạy + đúng ngân sách + đúng xe. Anh em thợ/khách thường rơi vào 3 lựa chọn dưới đây:",
      },
      {
        title:
          "🔋 1. Tốt nhất về trải nghiệm (nhẹ – đi xa – ổn định): Pin Lithium (ưu tiên LiFePO4)",
      },
      {
        text: "✔️ Ưu điểm: Nhẹ, đi xa, lực ổn khi chạy lâu, sụt áp ít hơn nếu pack + BMS làm chuẩn.",
      },
      {
        text: "❌ Nhược điểm: Giá cao hơn; sửa/ghép cell đòi hỏi kỹ thuật; chọn sai BMS dễ gặp tình trạng “tụt bậc thang”.",
      },
      {
        text: "💡 Hợp cho: Khách cần đi xa, chạy dịch vụ, muốn xe nhẹ & bốc.",
      },
      {
        title:
          "🪫 2. Tốt nhất về chi phí đầu tư (dễ thay – dễ kiếm – giá mềm): Ắc quy chì kín khí (AGM/GEL, deep-cycle)",
      },
      {
        text: "✔️ Ưu điểm: Giá dễ chịu, thay nhanh, phổ biến trên nhiều dòng xe.",
      },
      {
        text: "❌ Nhược điểm: Nặng, dễ yếu nếu hay để cạn pin/sạc sai; chạy tải nặng dễ “đuối” khi bình đã chai.",
      },
      {
        text: "💡 Hợp cho: Xe chạy gần, ngân sách thấp – trung bình, cần thay nhanh.",
      },
      {
        title: "🔮 3. Xu hướng tương lai (đang lên): Pin Natri-ion",
      },
      {
        text: "✔️ Ưu điểm: Hướng tới an toàn/ổn định nhiệt tốt, vật liệu dồi dào, tiềm năng chi phí tốt về dài hạn.",
      },
      {
        text: "❌ Nhược điểm: Hệ sinh thái còn mới (mã pin, chuẩn sạc/BMS, bảo hành), chất lượng còn tùy thuộc vào nhà sản xuất.",
      },
      {
        text: "💡 Hợp cho: Ai muốn thử công nghệ mới, ưu tiên an toàn & độ bền chu kỳ (tùy model).",
      },
      {
        title: "⭐ 5 TIÊU CHÍ CHỌN “ĐÚNG LOẠI TỐT” (Áp dụng cho mọi công nghệ)",
      },
      {
        text: "1️⃣ Wh/Ah thực: Đi xa hay không nằm ở dung lượng thật, không phải thông số ảo.",
      },
      {
        text: "2️⃣ Sụt áp dưới tải: Phải test lúc đề-pa/leo dốc mới ra bệnh yếu pin.",
      },
      {
        text: "3️⃣ BMS/Bo mạch bảo vệ: Bo mạch kém cắt sớm = tụt bậc thang nhanh.",
      },
      {
        text: "4️⃣ Sạc đúng chuẩn: Dòng và áp phải đúng thông số, jack cắm không bị nóng.",
      },
      {
        text: "5️⃣ Nguồn hàng & bảo hành rõ ràng: Có tem/QR đầy đủ, chính sách đổi trả minh bạch.",
      },
      {
        text: "#AcQuyXeDien #PinXeDien #ChonPinDung #SuaXeDien #KienThucXeDien #PinLithium #AcQuyChi #PinNatriIon #PhuTungXeDien #PlusExPhucLong #DBSCL",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170705/644914411_1303359661814989_6440025183582161708_n_b02xab.jpg",
          title: "Các loại ắc quy và pin xe điện trên thị trường",
        },
      },
    ],
  },
  {
    id: 23,
    title: "DÒNG ĐIỆN CHẠY TRONG XE MÁY ĐIỆN DỄ HIỂU NHẤT!!!",
    time: "2025-11-23",
    writer: "Phúc Long",
    views: 4600,
    tag: [
      "Xe máy điện",
      "Sửa xe điện",
      "Nguyên lý xe điện",
      "Controller",
      "Pin xe điện",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170779/646203644_1305691338248488_4360877632151260156_n_ekbd24.jpg",
      title: "Sơ đồ dòng điện trong xe máy điện cực dễ hiểu",
      description: [
        "Xe điện có 2 đường điện: Đường chính kéo motor và đường phụ nuôi đèn/còi/đồng hồ. Nắm rõ nguyên lý này bắt bệnh cực nhanh.",
      ],
    },
    content: [
      {
        text: "Để bắt bệnh xe điện chuẩn xác, anh em thợ cần hiểu rõ nguyên lý đi dây. Về cơ bản, xe điện có 2 đường điện độc lập: Đường chính kéo motor và đường phụ nuôi đèn/còi/đồng hồ.",
      },
      {
        title: "⚡ 1. Đường chính (để xe chạy)",
      },
      {
        text: "Đây là đường điện chịu tải cao nhất, sơ đồ đi từ nguồn ra bánh như sau:",
      },
      {
        text: "🔋 Pin/pack → 🔌 Cầu chì/CB → 🪢 Jack & dây nguồn → 🎛️ Controller → 🌀 Motor (kéo bánh).",
      },
      {
        title: "📡 2. Đường tín hiệu (điều kiện để controller cho chạy)",
      },
      {
        text: "Controller chỉ cấp điện cho motor khi nhận được đầy đủ tín hiệu hợp lệ từ các bộ phận sau:",
      },
      {
        text: "✔️ Tay ga (cảm biến Hall)",
      },
      {
        text: "✔️ Công tắc phanh (hệ thống phanh cắt ga)",
      },
      {
        text: "✔️ Khóa điện/chống trộm",
      },
      {
        title: "💡 3. Vì sao “đèn sáng mà xe không chạy”?",
      },
      {
        text: "Khách hay thắc mắc xe vẫn có điện đèn còi mà ga không đi. Lý do là vì đèn/còi dùng nguồn phụ, còn xe muốn chạy phải thỏa mãn đủ cả đường chính + tín hiệu.",
      },
      {
        text: "⚠️ Lỗi hay gặp nhất: Kẹt phanh cắt ga, giắc tay ga ẩm/oxy hóa, pin yếu dưới tải, jack nguồn lỏng, hoặc controller bị lỗi.",
      },
      {
        text: "#XeMayDien #SuaXeDien #NguyenLyXeDien #Controller #PinXeDien #PlusExPhucLong #DBSCL",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170779/646203644_1305691338248488_4360877632151260156_n_ekbd24.jpg",
          title: "Nguyên lý dòng điện chạy trong xe máy điện",
        },
      },
    ],
  },
  {
    id: 24,
    title: "NHÌN TEM CHỨNG NHẬN LÀ BIẾT ĐỒ XỊN HAY ĐỒ HÊN XUI",
    time: "2025-11-24",
    writer: "Phúc Long",
    views: 4100,
    tag: [
      "Chứng nhận an toàn",
      "Pin xe điện",
      "UL 2849",
      "UL 2271",
      "Kiến thức xe điện",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170877/646750253_1307834001367555_8870168131913467930_n_q3mrxd.jpg",
      title: "Nhìn tem chứng nhận là biết đồ xịn hay đồ hên xui",
      description: [
        "Xe điện/pin nhìn ngoài ai cũng “na ná”, nhưng đồ đáng tin thường có chứng nhận an toàn rõ ràng.",
      ],
    },
    content: [
      {
        text: "Xe điện/pin nhìn ngoài ai cũng “na ná”, nhưng đồ đáng tin thường có chứng nhận an toàn rõ ràng.",
      },
      {
        title:
          "🏷️ 2 CHỨNG NHẬN ANH EM NÊN BIẾT (Rất phổ biến ở thị trường quốc tế)",
      },
      {
        text: "➖ UL 2849: Chứng nhận an toàn cho hệ thống điện xe đạp/xe điện nhẹ (xem xét theo tổ hợp: hệ truyền động điện + pin + bộ sạc), hướng tới giảm rủi ro về điện/cháy trong quá trình sử dụng & sạc.",
      },
      {
        text: "➖ UL 2271: Chứng nhận an toàn cho bộ pin (battery pack) dùng cho phương tiện điện nhẹ (LEV).",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170877/648856037_1307834024700886_8275052542792896347_n_sltzqa.jpg",
          title: "Chứng nhận UL cho pin và hệ thống điện",
        },
      },
      {
        title: "💎 VÌ SAO CÁC TEM NÀY “ĐÁNG TIỀN”?",
      },
      {
        text: "✔️ Giảm rủi ro chập/cháy do điện – sạc – pin nhờ được kiểm tra theo chuẩn an toàn.",
      },
      {
        text: "✔️ Hạn chế cảnh “độ chế lung tung”: UL 2849 đánh giá đúng bộ xe–pin–sạc đi chung nhau.",
      },
      {
        text: "✔️ Với tiệm/thợ: Tư vấn dễ hơn, khách yên tâm hơn, ít ca quay lại than phiền.",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170876/646121861_1307834051367550_8714672904403367069_n_vrbafv.jpg",
          title: "Đảm bảo an toàn, hạn chế cháy nổ",
        },
      },
      {
        title: "📋 CHECKLIST NHANH KHI TƯ VẤN KHÁCH (Dễ áp dụng)",
      },
      {
        text: "👉 Ưu tiên xe/pin có chứng nhận rõ ràng (tem/nhãn/giấy tờ).",
      },
      {
        text: "👉 Dùng đúng sạc theo xe/pin, tránh sạc trôi nổi.",
      },
      {
        text: "👉 Pin phải có BMS/bo bảo vệ, giắc sạch – không oxy hóa.",
      },
      {
        text: "#XeDien #PinXeDien #AnToanXeDien #UL2849 #UL2271 #KienThucXeDien #SuaXeDien #PlusExPhucLong #DBSCL",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170876/649258017_1307833974700891_2174831646641200591_n_x942b2.jpg",
          title: "Tư vấn khách hàng sử dụng sạc và pin đúng chuẩn",
        },
      },
    ],
  },
  {
    id: 25,
    title: "MAI MỐT MUA PIN: QUÉT QR RA HẾT “LÝ LỊCH”!",
    time: "2025-11-25",
    writer: "Phúc Long",
    views: 4300,
    tag: [
      "Battery Passport",
      "Hộ chiếu pin",
      "Pin xe điện",
      "Mã QR pin",
      "Kiến thức xe điện",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170978/649266632_1310811361069819_5453301531782200_n_lrldem.jpg",
      title: "Quét QR ra ngay lý lịch của cục pin",
      description: [
        "Anh em thợ chắc sẽ gặp xu hướng này sớm: Battery Passport (Hộ chiếu pin) — kiểu như “CCCD của cục pin”.",
      ],
    },
    content: [
      {
        text: "Anh em thợ chắc sẽ gặp xu hướng này sớm: Battery Passport (Hộ chiếu pin) — kiểu như “CCCD của cục pin”.",
      },
      {
        title: "🔍 BATTERY PASSPORT LÀ GÌ?",
      },
      {
        text: "Hiểu đơn giản: Trên pin/pack pin sẽ có mã QR, quét vào là thấy các thông tin quan trọng như:",
      },
      {
        text: "➖ Pin thuộc lô nào, nhà sản xuất nào.",
      },
      {
        text: "➖ Dung lượng / chuẩn kỹ thuật cơ bản.",
      },
      {
        text: "➖ Lịch sử sử dụng – bảo hành (tùy hệ thống).",
      },
      {
        text: "➖ Hướng dẫn thu hồi/tái chế, nơi thu hồi.",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170978/649266632_1310811361069819_5453301531782200_n_lrldem.jpg",
          title: "Thông tin minh bạch qua mã QR",
        },
      },
      {
        title: "🌍 VÌ SAO XU HƯỚNG NÀY ĐANG LÊN?",
      },
      {
        text: "Ở EU, quy định mới hướng tới việc quản lý vòng đời pin rõ ràng: từ sản xuất → bán ra → sử dụng → thu hồi/tái chế.",
      },
      {
        text: "Mục tiêu là: Minh bạch nguồn gốc, tăng an toàn, giảm rác thải pin và hạn chế hàng trôi nổi.",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170976/650821145_1310811297736492_1536948361354180381_n_aonnd1.jpg",
          title: "Quản lý vòng đời pin rõ ràng",
        },
      },
      {
        title: "🇻🇳 LIÊN HỆ THỰC TẾ Ở VIỆT NAM",
      },
      {
        text: "Xe điện Việt Nam ngày càng nhiều → pin là phần đắt tiền nhất → khách sẽ quan tâm:",
      },
      {
        text: "❓ “Pin này zin hay thay?”",
      },
      {
        text: "❓ “Pin đã chai chưa?”",
      },
      {
        text: "❓ “Có đúng thông số không?”",
      },
      {
        text: "Khi Battery Passport phổ biến, thợ/tiệm quét QR là biết pin thuộc dạng nào, dễ tư vấn hơn, giảm tranh cãi, hạn chế hàng không rõ nguồn.",
      },
      {
        title: "🛠️ LỢI ÍCH CHO TIỆM/THỢ",
      },
      {
        text: "✔️ Dễ kiểm tra nguồn gốc (đỡ dính pin “trôi”).",
      },
      {
        text: "✔️ Dễ chẩn đoán & bảo hành (có lịch sử, có chuẩn).",
      },
      {
        text: "✔️ Thu hồi pin cũ bài bản (đỡ rủi ro, làm ăn lâu dài).",
      },
      {
        text: "💡 “Mai mốt khách mua pin không hỏi nhiều, quét QR cái là ra hết!”",
      },
      {
        text: "📧 Email hỗ trợ: phuclonglink@gmail.com",
      },
      {
        text: "#BatteryPassport #HoChieuPin #PinXeDien #QRPin #XeDien #KienThucXeDien #SuaXeDien #PlusExPhucLong #DBSCL",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774170975/649748445_1310811267736495_1604696236003632307_n_cb0v1z.jpg",
          title: "Dễ dàng chẩn đoán và bảo hành cho khách",
        },
      },
    ],
  },
  {
    id: 26,
    title: "XE MÁY ĐIỆN “ĐỔI PIN” LÀ GÌ? ĐỔI NHƯ THẾ NÀO CHO ĐÚNG – AN TOÀN?",
    time: "2025-11-26",
    writer: "Phúc Long",
    views: 4500,
    tag: [
      "Đổi pin xe điện",
      "Trạm đổi pin",
      "Chạy dịch vụ",
      "Kiến thức xe điện",
      "Sửa xe điện",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774171115/654506109_1317842990366656_3951391314356884456_n_t1tc6f.jpg",
      title: "Đổi pin = như đổ xăng",
      description: [
        "Thay vì cắm sạc chờ, mình tháo pack pin cạn → đổi pack pin đầy → chạy tiếp. Mô hình này đang cực kỳ phát triển.",
      ],
    },
    content: [
      {
        text: "Nôm na: Đổi pin = như đổ xăng. Thay vì cắm sạc chờ, mình tháo pack pin cạn → đổi pack pin đầy → chạy tiếp. Mô hình này nổi tiếng nhờ nhanh, tiện cho người chạy dịch vụ (như Gogoro hay VinFast đang triển khai).",
      },
      {
        title: "🔄 1. QUY TRÌNH ĐỔI PIN (Dễ hiểu, dễ làm)",
      },
      {
        text: "➖ Tới trạm/tủ đổi pin (đúng hệ xe/đúng hệ pin).",
      },
      {
        text: "➖ Mở khoang pin theo hướng dẫn (qua app, thẻ hoặc mã QR).",
      },
      {
        text: "➖ Lấy pack pin cạn ra, đưa vào tủ → hệ thống nhận pin và tự sạc.",
      },
      {
        text: "➖ Nhận pack pin đầy → lắp vào xe → khóa chốt → chạy tiếp.",
      },
      {
        text: "💡 Ở Việt Nam, VinFast từng công bố kế hoạch triển khai 150.000 trạm đổi pin xe máy điện để mở rộng mô hình này.",
      },
      {
        title: "⚠️ 2. NHỮNG ĐIỂM PHẢI CHÚ Ý ĐỂ “ĐỔI NHANH MÀ KHÔNG RỦI RO”",
      },
      {
        text: "👉 1) Đúng trạm – đúng chuẩn pin: Chỉ đổi tại hệ thống tương thích. Pin/giắc/BMS khác chuẩn rất dễ gây lỗi.",
      },
      {
        text: "👉 2) Khóa chốt đúng (quan trọng nhất): Pin phải đặt đúng vị trí và gài chốt chắc trước khi chạy. Đặt sai/lỏng chốt rất nguy hiểm.",
      },
      {
        text: "👉 3) Kiểm tra nhanh ngoại hình pin trước khi lắp: Tránh lấy pack bị nứt vỏ, phồng, móp hoặc giắc cắm bị bẩn/ướt.",
      },
      {
        text: "👉 4) Tay khô – tránh nước vào giắc: Đổi pin khi trời mưa/đường ngập cần lau khô tay và khu vực giắc, tránh ẩm gây oxy hóa → lỗi chập chờn.",
      },
      {
        text: "👉 5) Đừng cố chạy khi xe báo lỗi pin/hệ thống: Nếu đổi xong mà xe báo bất thường, phải dừng lại, kiểm tra chốt/giắc và liên hệ hỗ trợ trạm ngay.",
      },
      {
        title: "👨‍🔧 3. GÓC NHÌN “TIỆM/THỢ”: CƠ HỘI MỚI",
      },
      {
        text: "Khi xe đổi pin phổ biến, các tiệm sửa xe sẽ có thêm những việc hái ra tiền:",
      },
      {
        text: "✔️ Kiểm tra pin dưới tải.",
      },
      {
        text: "✔️ Vệ sinh giắc/cos kết nối.",
      },
      {
        text: "✔️ Xử lý lỗi phanh cắt ga / lỗi tay ga.",
      },
      {
        text: "✔️ Kiểm tra dây nguồn / controller.",
      },
      {
        text: "✔️ Tư vấn khách chọn pack/hệ sinh thái đúng nhu cầu.",
      },
      {
        text: "#XeMayDien #DoiPin #TramDoiPin #PinXeDien #ChayDichVu #KienThucXeDien #SuaXeDien #PlusExPhucLong #DBSCL",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774171115/654506109_1317842990366656_3951391314356884456_n_t1tc6f.jpg",
          title: "Mô hình trạm đổi pin xe máy điện",
        },
      },
    ],
  },
  {
    id: 27,
    title: '4 LẦM TƯỞNG VỀ ẮC QUY XE MÁY: ĐỪNG ĐỂ "CHẾT MÁY" MỚI HỐI TIẾC!',
    time: "2025-11-27",
    writer: "Phúc Long",
    views: 5300,
    tag: [
      "Ắc quy xe máy",
      "Phụ tùng xe máy",
      "Bảo dưỡng xe",
      "Kiến thức xe máy",
      "Ắc quy ECO START",
    ],
    type: "technique",
    origin: "phuclong.vn",
    banner: {
      image:
        "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774171556/zalofb_5_umlvqh.png",
      title: 'Đừng để "chết máy" giữa đường mới hối tiếc',
      description: [
        "Bấm đề im ru, còi kêu thều thào mới nhớ đến ắc quy thì dở rồi. Cùng điểm mặt 4 cú lừa khiến bình ắc quy xế cưng ra đi chân lạnh toát.",
      ],
    },
    content: [
      {
        text: 'Bấm đề im ru, còi kêu thều thào mới nhớ đến ắc quy thì dở rồi anh em ơi! Cùng điểm mặt 4 cú lừa "đi vào lòng đất" khiến bình ắc quy xế cưng ra đi chân lạnh toát:',
      },
      {
        title: '🔋 1. Lầm tưởng: "Ắc quy khô là bất tử, không cần chăm"',
      },
      {
        text: "➖ Sự thật: Dù không cần châm nước, nhưng cọc bình vẫn có thể bị rỉ sét. Nếu xe ít đi, bạn vẫn phải sạc bù, bỏ bê lâu ngày là chai bình như chơi!",
      },
      {
        title: '🏍️ 2. Lầm tưởng: "Xe còn đề nổ là bình còn ngon"',
      },
      {
        text: '➖ Sự thật: Đề nổ rướn nhưng điện áp yếu sẽ âm thầm "phá" hệ thống phun xăng điện tử (FI), đèn và sạc. Tới lúc hỏng lây sang bộ phận khác thì tiền sửa chát gấp mấy lần tiền thay bình!',
      },
      {
        title: '🔥 3. Lầm tưởng: "Càng chạy nhiều, ắc quy càng bền"',
      },
      {
        text: '➖ Sự thật: Cái gì quá cũng dở. Chạy liên tục dưới trời nóng hoặc xe "độ đẽo" quá nhiều đèn LED, còi to sẽ gây sạc vượt mức (overcharge), làm sôi axit, phù bình, thậm chí cháy nổ.',
      },
      {
        title: '🛌 4. Lầm tưởng: "Trùm mền để đó thì không tốn điện"',
      },
      {
        text: '➖ Sự thật: Kể cả khi rút chìa, đồng hồ điện tử và khóa smartkey vẫn ngầm hút điện. Để xe 2-3 tuần không đi là cạn kiệt điện, mảng bám sunfat hình thành khiến bình "hết cứu".',
      },
      {
        title: "✅ CHỐT LẠI",
      },
      {
        text: "Tuổi thọ ắc quy thường chỉ tầm 2 - 3 năm. Đừng cố vắt kiệt sức lao động của em nó!",
      },
      {
        text: '💡 Đang nghi ngờ bình xe mình "tới công chuyện"? Ghé ngay PlusEx Phúc Long và lên ngay ắc quy chính hãng ECO START & ABS "Chính Hãng" bao xịn, bao êm!',
      },
      {
        text: "#AcQuyXeMay #PhuTungXeMay #BaoDuongXe #KienThucXeMay #PlusExPhucLong",
      },
      {
        image: {
          img: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1774171241/zalofb_4_kocgqc.png",
          title: "4 lầm tưởng tai hại về ắc quy xe máy",
        },
      },
    ],
  },
];
