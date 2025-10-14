import { useEffect, useRef } from "react";

export default function ReviewSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" }); // Quay lại đầu
      } else {
        container.scrollBy({ left: 320, behavior: "smooth" }); // Cuộn tiếp
      }
    }, 4000); // Mỗi 4 giây cuộn 1 thẻ

    return () => clearInterval(interval);
  }, []);

  const reviews = [
    {
      name: "Nguyễn Văn A",
      avatar: "/avatars/user1.jpg",
      score: 9.5,
      review: "Chuyến đi tuyệt vời, đồ ăn ngon và cảnh đẹp như tranh!",
    },
    {
      name: "Lê Thị B",
      avatar: "/avatars/user2.jpg",
      score: 9.0,
      review: "Người dân thân thiện và dịch vụ rất chuyên nghiệp.",
    },
    {
      name: "Trần Minh C",
      avatar: "/avatars/user3.jpg",
      score: 8.8,
      review: "Thời tiết hơi lạnh nhưng trải nghiệm tổng thể rất đáng nhớ!",
    },
    {
      name: "Phạm Thị D",
      avatar: "/avatars/user4.jpg",
      score: 9.2,
      review: "Pháp đẹp tuyệt, tôi sẽ quay lại vào mùa thu!",
    },
  ];

  return (
    <section className="max-w-6xl w-full mb-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Đánh Giá Từ Du Khách
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-2 scroll-smooth hide-scrollbar"
      >
        {reviews?.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[320px] bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 flex-shrink-0"
          >
            <div className="flex items-center gap-4 mb-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border border-blue-300"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <span className="text-sm text-yellow-600 font-bold">
                  {item.score}/10
                </span>
              </div>
            </div>
            <p className="italic text-gray-700">“{item.review}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
