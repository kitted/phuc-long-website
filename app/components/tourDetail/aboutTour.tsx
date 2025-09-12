import { MapPin } from "lucide-react";

export default function AboutTrip({ data }: any) {
  const placeList =
    data?.cities?.flatMap((cityObj: any) =>
      cityObj?.places?.map((place: any) => ({
        name: place.name,
        cityName: cityObj?.cityId?.name,
      }))
    ) || [];

  return (
    <div className="w-full py-6">
      <h1 className="text-3xl font-bold text-neutral-900 mb-4">
        Thông tin thêm
      </h1>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/4 w-full">
          <h2 className="text-xl font-semibold text-green-700">
            Điểm tham quan nổi bật
          </h2>
        </div>

        <div className="md:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {placeList.length > 0 ? (
            placeList.map((place: any, index: any) => (
              <div className="flex items-start gap-3" key={index}>
                <MapPin className="text-green-700 w-5 h-5 mt-1 min-w-[20px]" />
                <p className="text-gray-800 text-base leading-relaxed">
                  <span className="font-bold">{place.name}</span>
                  {place.cityName && ` - ${place.cityName}`}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Chưa có điểm tham quan.</p>
          )}
        </div>
      </div>
    </div>
  );
}
