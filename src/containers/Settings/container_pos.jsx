import React from "react";


const Con_position = () => {
    return (
        <div>
            <div className="flex gap-4 justify-center mt-5 mr-6">
                <span className="w-10 h-6 border-2 border-current bg-red-500 "></span>
                <h1>Full</h1>
            </div>
            <div className="flex gap-4 justify-center mt-5">
                <span className="w-10 h-6 border-2 border-current bg-green-400 "></span>
                <h1>Empty</h1>
            </div>
            <div className="flex justify-around mt-16 ">
                <span className="w-1/6 h-24 border-2 border-current bg-red-500 flex justify-center items-center">Slot 1</span>
                <span className="w-1/6 h-24 border-2 border-current bg-green-400 flex justify-center items-center">Slot 2</span>
            </div>
            <div className="flex justify-around mt-16 ">
                <span className="w-1/6 h-24 border-2 border-current bg-green-400 flex justify-center items-center">Slot 3</span>
                <span className="w-1/6 h-24 border-2 border-current bg-green-400 flex justify-center items-center">Slot 4</span>
            </div>
        </div>
    );
}
export default Con_position