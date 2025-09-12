import { useState, useEffect } from "react";

interface TourImageProps {
  images: string[];
}

function TourImage({ images }: TourImageProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    if (images?.length) setSelectedImage(images[0]);
  }, [images]);

  if (!images || images.length === 0) {
    return <div className="w-1/2 px-4 max-md:w-full">No images available.</div>;
  }

  return (
    <div className="w-1/2 flex flex-col px-4 min-h-[450px] max-md:w-full">
      <div className="w-full h-[350px] relative rounded-sm overflow-hidden">
        <img
          alt="Selected tour"
          className="w-full h-full object-cover"
          src={selectedImage}
        />
      </div>

      <div className="flex gap-2 mt-3 overflow-x-auto max-w-full custom-scrollbar py-2">
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-[150px] h-[100px] relative overflow-hidden rounded-sm cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              alt="tour thumb"
              className="w-full h-full object-cover rounded-lg"
              src={img}
            />
            {selectedImage === img && (
              <div className="bg-black absolute w-full h-full z-10 top-0 opacity-40 rounded-lg transition-opacity"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TourImage;
