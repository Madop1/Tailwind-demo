import React from "react";
import smartwatch from "../svg/Image.svg";

function SmartWatchContent() {
  return (
    <>
      <div className="hidden sm:block">
        <div className="flex flex-col justify-center text-center m-10 rounded-3xl pt-[10px] pb-[10px] bg-[#F7F8FA] border">
          <p className="px-8 py-4 text-gray-600">
            The New Smart <br /> Watches
          </p>
          <img className="self-center w-40 pt-2" src={smartwatch} alt="smartwatch" />
          <div className="pb-3 mx-0 mt-12">
            <button className="h-12 px-8 text-center text-white bg-orange-600 rounded-3xl">
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmartWatchContent;
