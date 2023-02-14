import React from "react";
import mail from "../svg/mailinbox.svg";
import ipad from "../svg/ipadbanner.svg";
import airpod from "../svg/airpod.svg";

import bodyContent from "../svg/Product_Banner.svg";
import joystick_banner from "../svg/joystick_banner.svg";
import samsung_watch from "../svg/samsung_watch.svg";
import joystick from "../svg/joystick.png";
import portablespeaker from "../svg/portablespeaker.png";
import content3 from "../svg/content3.png";
import samsungs10 from "../svg/samsungs10.png";
import samsungtv from "../svg/samsungtv.png";
import monitor from "../svg/monitor.png";
import computers from "../svg/computers.svg";
import tablet from "../svg/tablet.svg";

function Content() {
  return (
    <>
      <div className="flex items-center justify-between p-3 m-[30px]">
        <div>
          <h1 className="text-2xl font-bold text-gray-600">
            Hypermarket Electronics
          </h1>
        </div>
        <div className="relative flex gap-4">
          <img
            className="absolute top-[5px] left-[10px]"
            src={mail}
            alt="mail"
          />
          <input
            className="px-3 py-2 rounded-3xl pl-[50px]"
            type="text"
            placeholder="Your Mail"
            size="10"
          />
          <button className="px-4 py-2 bg-orange-600 rounded-3xl font-[20px] text-white">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex gap-4 px-3">
        <div>
          <img src={ipad} alt="ipad" />
        </div>
        <div>
          <img src={airpod} alt="airpod" />
        </div>
      </div>
      <div className="flex gap-4 px-3 mt-5">
        <div>
          <img src={bodyContent} alt="bodyContent" />
        </div>
        <div>
          <img src={joystick_banner} alt="joystick_banner" />
        </div>
        <div>
          <img src={samsung_watch} alt="samsung_watch" />
        </div>
      </div>
      <div className="px-3 my-[80px] text-center text-2xl text-gray-600">
        <h1 className="font-bold">Hypermarket Electronics</h1>
      </div>
      <div className="flex flex-wrap justify-between px-3">
        <div className="w-[23%] bg-[#000] flex-row justify-center text-center justify-self-center p-4 rounded-xl">
          <div className="flex justify-center my-8">
            <img src={joystick} alt="bodycontent" />
          </div>
          <p className="mt-4 text-yellow-400">BLACK FRIDAY</p>
          <p className="mt-4 text-white">Gamepad Xbox One X</p>
        </div>
        <div className="w-[23%] bg-[#000] flex-row justify-center text-center justify-self-center p-4 rounded-xl">
          <div className="flex justify-center my-8">
            <img src={tablet} alt="tablet" />
          </div>
          <p className="mt-4 text-white">TABLETS</p>
          <p className="mt-4 text-white">iPad Pro 11</p>
          <p className="my-4 text-white">$450.00</p>
        </div>
        <div className="w-[23%] bg-[#000] flex-row justify-center text-center justify-self-center p-4 rounded-xl">
          <div className="flex justify-center my-8">
            <img src={content3} alt="content3" />
          </div>
          <p className="mt-4 text-white">Computers</p>
          <p className="mt-4 text-white">Pro Display XDR</p>
          <p className="my-4 text-white">$950.00</p>
        </div>
        <div className="w-[23%] bg-[#000] flex-row justify-center text-center justify-self-center p-4 rounded-xl">
          <div className="flex justify-center my-8">
            <img src={computers} alt="computers" />
          </div>
          <p className="mt-4 text-white">Computers Spares</p>
          <p className="mt-4 text-white">Spares</p>
          <p className="my-4 text-white">$50.00</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between px-3 mt-6">
        <div className="w-[23%] bg-[#fff] flex-row justify-center text-center justify-self-center p-4 rounded-xl">
          <div className="flex justify-center my-8">
            <img src={samsungs10} alt="samsungs10" />
          </div>
          <p className="mt-4 text-gray-600">Phones</p>
          <p className="mt-4 text-gray-600">Samsung Galaxy s10</p>
          <p className="my-4 text-gray-600">$950.00</p>
        </div>
        <div className="w-[23%] bg-[#fff] flex-row justify-center text-center justify-self-center p-4 rounded-xl">
          <div className="flex justify-center my-8">
            <img src={samsungtv} alt="samsungtv" />
          </div>
          <p className="mt-4 text-gray-600">Television</p>
          <p className="mt-4 text-gray-600">Samsung Tv</p>
          <p className="my-4 text-gray-600">$950.00</p>
        </div>
        <div className="w-[23%] bg-[#fff] flex-row justify-center text-center justify-self-center p-4 rounded-xl">
          <div className="flex justify-center my-8">
            <img src={portablespeaker} alt="portablespeaker" />
          </div>
          <p className="mt-4 text-gray-600">Sound Systems</p>
          <p className="mt-4 text-gray-600">Portable Speaker</p>
          <p className="my-4 text-gray-600">$150.00</p>
        </div>
        <div className="w-[23%] bg-[#fff] flex-row justify-center text-center justify-self-center p-4 rounded-xl">
          <div className="flex justify-center my-8">
            <img src={monitor} alt="monitor" />
          </div>
          <p className="mt-4 text-gray-600">Monitor</p>
          <p className="mt-4 text-gray-600">Mac book pro</p>
          <p className="my-4 text-gray-600">$450.00</p>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="flex justify-between px-4">
          <h1 className="text-2xl font-bold text-gray-600">
            Hypermarket Electronics
          </h1>
        </div>
      </div>
    </>
  );
}

export default Content;
