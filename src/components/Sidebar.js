import React from "react";
import Content from "./Content";
import rightarrow from "../svg/keyboard_arrow_right.svg";
import speakers from "../svg/speaker.svg";
import equipment from "../svg/router.svg";
import mouse from "../svg/mouse.svg";
import accessories from "../svg/memory.svg";
import audiotrack from "../svg/audiotrack.svg";
import kitchen from "../svg/kitchen.svg";
import tv from "../svg/tv.svg";
import watch from "../svg/watch.svg";
import videogame from "../svg/videogame_asset.svg";
import tablet from "../svg/tablet_mac.svg";
import keyboard from "../svg/keyboard.svg";
import computer from "../svg/desktop_mac.svg";
import laptop from "../svg/laptop_chromebook.svg";
import phone from "../svg/phone_iphone.svg";
import SmartWatchContent from "./SmartWatchContent";
import SamsungTabContent from "./SamsungTabContent";

function Sidebar() {
  const items = [
    { icon: speakers, alt: "speakers", title: "Speakers" },
    { icon: equipment, alt: "equipment", title: "Equipment" },
    { icon: mouse, alt: "mouse", title: "Controls" },
    { icon: accessories, img: accessories, title: "Accessories" },
    { icon: audiotrack, img: audiotrack, title: "Audio" },
    { icon: kitchen, img: kitchen, title: "Appliances" },
    { icon: tv, img: tv, title: "Television Set" },
    { icon: watch, img: watch, title: "Digital Watch" },
    { icon: videogame, img: videogame, title: "Video Games" },
    { icon: tablet, img: tablet, title: "Tablets" },
    { icon: keyboard, img: keyboard, title: "Accessories" },
    { icon: computer, img: computer, title: "Computers" },
    { icon: laptop, img: laptop, title: "Laptops" },
    { icon: phone, img: phone, title: "Smartphones" },
  ];
  return (
    <>
      <div className="flex">
        <div className="w-3/12 ">
          <div className="sm:block hidden items-center m-10 bg-white rounded-3xl pt-[10px] pb-[10px]">
            {items.map((item) => (
              <div className="flex justify-between py-3 m-2">
                <div className="flex">
                  <img className="ml-3" src={item.icon} alt={item.alt} />
                  <h4 className="ml-3 text-gray-600">{item.title}</h4>
                </div>
                <div>
                  <img src={rightarrow} alt="rightarrow" />
                </div>
              </div>
            ))}
          </div>
          <div>
            <SmartWatchContent />
          </div>
          <div>
            <SamsungTabContent />
          </div>
        </div>
        <div className="w-9/12 pr-4">
          <Content />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
