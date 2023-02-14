import React from "react";
import samsungtab from "../svg/samsungtab.png";

function SamsungTabContent() {
  return (
      <div className="hidden sm:block">
        <div className="flex flex-col justify-center text-center m-10 rounded-3xl pt-[10px] pb-[10px] bg-[#F7F8FA] border">
          <img
            className="self-center w-40 pt-2"
            src={samsungtab}
            alt="samsungtab"
          />
          <div className="pb-3 mx-0 mt-12">
            <p className="px-8 py-4 text-gray-600">
              New Tablets <br /> Samsung
            </p>
          </div>
        </div>
      </div>
  );
}

export default SamsungTabContent;
