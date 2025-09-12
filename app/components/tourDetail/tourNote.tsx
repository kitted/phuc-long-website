interface TourNoteProps {
  data?: {
    note?: string;
  };
}

function TourNote({ data }: TourNoteProps) {
  return (
    <div className="w-full flex mt-4 flex-col gap-3">
      <h1 className="text-3xl text-black font-bold max-sm:text-2xl">
        Những Điểm cần Lưu ý
      </h1>
      <p className="text-md text-[#6e6e6e] font-medium whitespace-pre-line">
        {data?.note ? (
          <>
            <span className="text-blue-500">Lưu ý:</span> {data.note}
          </>
        ) : (
          <>
            <span className="text-blue-500">Lưu ý:</span> Quý khách cần mang
            theo đầy đủ giấy tờ tùy thân như hộ chiếu (còn hạn ít nhất 6 tháng),
            các giấy tờ liên quan nếu có trẻ em đi cùng. Vui lòng có mặt tại sân
            bay trước giờ khởi hành ít nhất 3 tiếng. Hành lý cần tuân thủ theo
            quy định của hãng hàng không (30kg ký gửi và 7kg xách tay). Không
            mang theo các vật phẩm cấm hoặc nguy hiểm. Trong suốt hành trình,
            vui lòng giữ liên lạc với hướng dẫn viên để đảm bảo an toàn và đúng
            lịch trình.
          </>
        )}
      </p>
    </div>
  );
}

export default TourNote;
