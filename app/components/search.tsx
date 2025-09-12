import { MapPin, Calendar } from "lucide-react";
import { Card } from "./card";

function Search() {
    return (
        <><h1 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-4xl whitespace-nowrap bg-clip-text mt-5">
            Lên lịch trình của bạn ngay
        </h1><div className="w-full mt-3">
                <Card>
                    <form className="w-full p-5">
                        <h6 className="text-base text-white  md:text-2xl">
                            Bạn muốn đi đến đâu
                        </h6>
                        <div className="flex flex-col items-center justify-center mt-4 gap-5">
                            <div className="w-full h-12 flex gap-2 border border-zinc-500/50 rounded-md items-center px-2">
                                <MapPin size={24} className="text-white" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="pl-2 bg-transparent border-none outline-none  text-white w-full"
                                    required />
                            </div>

                            <div className="w-full flex gap-3">
                                <div className="w-1/2 flex flex-col gap-2">
                                    <label htmlFor="date" className="text-sm text-white">
                                        Ngày bắt đầu
                                    </label>
                                    <div className="relative w-full h-12 flex gap-2 border border-zinc-500/50 rounded-md items-center px-2">
                                        <Calendar size={24} className="text-white" />
                                        <input
                                            type="date"
                                            id="date"
                                            name="name"
                                            className="pl-2 pr-2 border-none outline-none bg-transparent text-white w-full hide-calendar-icon"
                                            required />
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-col gap-2">
                                    <label htmlFor="date" className="text-sm text-white">
                                        Ngày trở về
                                    </label>
                                    <div className="relative w-full h-12 flex gap-2 border border-zinc-500/50 rounded-md items-center px-2">
                                        <Calendar size={24} className="text-white" />
                                        <input
                                            type="date"
                                            id="date"
                                            name="name"
                                            className="pl-2 pr-2 border-none outline-none bg-transparent text-white w-full hide-calendar-icon"
                                            required />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full h-12 text-white border-white/10 bg-zinc-900/10 shadow-lg shadow-zinc-900/20 duration-200"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </Card>
            </div></>
    );
}

export default Search;