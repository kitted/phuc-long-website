import { useEffect, useRef, useState } from "react";

const TravelIntro = () => {
  const [expanded, setExpanded] = useState(false);
  const [shouldShowToggle, setShouldShowToggle] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const text = `Là công ty hàng đầu thế giới về trải nghiệm du lịch, chúng tôi kết nối bạn với nước Pháp đích thực theo cách không giống bất kỳ ai. Pháp là vùng đất của nghệ thuật, lịch sử và văn hóa sống động — nơi những di sản vĩ đại của châu Âu vẫn hiện hữu trong từng góc phố Paris, trong những lâu đài cổ kính ở thung lũng Loire, hay trong làn gió biển vùng Riviera. Tại đây, những công trình tráng lệ như tháp Eiffel, cung điện Versailles hay nhà thờ Đức Bà không chỉ là biểu tượng, mà còn là chứng tích của một nền văn minh rực rỡ. Dạo bước trên những con phố lát đá của Montmartre, ngắm hoàng hôn từ đỉnh đồi Sacré-Cœur, hay phiêu lãng giữa cánh đồng oải hương tím ngắt ở Provence — mỗi trải nghiệm đều mang đậm hơi thở Pháp. Khi bạn du lịch cùng Trafalgar, bạn sẽ không chỉ thấy nước Pháp — bạn sẽ sống cùng nước Pháp. Gặp gỡ các nghệ nhân chế tác nước hoa tại Grasse, nếm thử những loại rượu vang hảo hạng cùng chuyên gia tại Bordeaux, hoặc học nấu món Pháp truyền thống cùng đầu bếp bản địa. Dù bạn đang khám phá bảo tàng Louvre hay đơn giản là thưởng thức bánh croissant tại một quán cà phê nhỏ, mỗi khoảnh khắc đều là một phần của hành trình khám phá chiều sâu tinh tế của văn hóa Pháp. Hãy để chúng tôi đồng hành cùng bạn trong chuyến phiêu lưu này.`;

  useEffect(() => {
    const checkShouldShowToggle = () => {
      const el = textRef.current;
      const container = containerRef.current;
      if (!el || !container) return;

      const lineHeight = parseFloat(getComputedStyle(el).lineHeight || "24");
      const maxLines = 11;
      const maxHeight = lineHeight * maxLines;

      // Set initial max height
      if (!expanded) {
        container.style.maxHeight = `${maxHeight}px`;
      }

      // Check if content overflows
      const needsToggle = el.scrollHeight > maxHeight;
      setShouldShowToggle(needsToggle);
    };

    checkShouldShowToggle();
    window.addEventListener("resize", checkShouldShowToggle);
    return () => window.removeEventListener("resize", checkShouldShowToggle);
  }, [expanded]);

  return (
    <div className="w-full bg-white px-6 py-12 flex flex-col items-center text-center">
      <div
        ref={containerRef}
        className={`overflow-hidden transition-max-height duration-500 ease-in-out max-w-4xl`}
      >
        <p
          ref={textRef}
          className="text-gray-800 text-base md:text-lg leading-relaxed"
        >
          {text}
        </p>
      </div>

      {shouldShowToggle && (
        <button
          onClick={() => {
            setExpanded((prev) => {
              const el = containerRef.current;
              const textEl = textRef.current;
              if (el && textEl) {
                if (!prev) {
                  el.style.maxHeight = `${textEl.scrollHeight}px`;
                } else {
                  const lineHeight = parseFloat(
                    getComputedStyle(textEl).lineHeight || "24"
                  );
                  el.style.maxHeight = `${lineHeight * 11}px`;
                }
              }
              return !prev;
            });
          }}
          className="mt-4 text-blue-600 hover:underline font-medium"
        >
          {expanded ? "Thu gọn" : "Xem thêm"}
        </button>
      )}
    </div>
  );
};

export default TravelIntro;
