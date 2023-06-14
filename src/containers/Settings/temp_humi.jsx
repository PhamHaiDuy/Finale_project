import React from "react";
import humidity from "../../assets/humidity.png"
const Temp_Humi = () => {
    return (
        <div className="flex flex-col gap-16 mt-5 ">
            <div className="ml-10">
                Hiển thị nhiệt độ và độ ẩm
                <div className="flex pt-5">
                    <div className="flex flex-1 gap-2 justify-center items-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/7794/7794499.png"
                            alt="..."
                            className="h-32 mt-1"
                        />
                        <h2 className="text-4xl font-extrabold">
                            27&#176;C
                        </h2>
                    </div>
                    <div className="flex flex-1 gap-2 justify-center items-center">
                        <img
                            src={humidity}
                            alt="..."
                            className="h-32 mt-1 mix-blend-multiply"
                        />
                        <h2 className="text-4xl font-extrabold">
                            80%
                        </h2>
                    </div>
                </div>
            </div>

            <div className="ml-10">
                <h1>Cấu hình ngưỡng nhiệt độ và độ ẩm</h1>
                <div className="flex pt-8">
                    <div className="flex flex-1 gap-2 justify-center">
                        <h2>Nhiệt độ</h2> <input className="search w-14 rounded-full text-center" type="text" ></input>&#176;C
                    </div>
                    <div className="flex flex-1 gap-2 justify-center">
                        <h2>Độ ẩm</h2> <input className="search w-14 rounded-full text-center" type="text" ></input>%
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="w-[180px] border-2 border-black p-[5px] rounded-xl mt-2">Save</button>
            </div>
        </div>


    );
}
export default Temp_Humi