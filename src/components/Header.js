import React from "react";
import menu from "../svg/menu.svg";
import search from "../svg/search.svg";
import person from "../svg/person.svg";
import account from "../svg/shopping_cart.svg";
import downarrow from "../svg/keyboard_arrow_down.svg";

function Header() {
  return (
    <>
      <div className="justify-around hidden md:flex bg-gray-50">
        <div className="flex px-4">
          <img alt="menu" src={menu} />
          <h2 className="px-8 m-1.5 font-medium text-gray-700">Constructor</h2>
        </div>
        <div className="flex m-1.5 space-x-4 ">
          <h4 className="text-gray-600 font-small">Today's Deals</h4>
          <img src={downarrow} alt="downarrow" className="bg-gray-100" />
          <h4 className="text-gray-600 font-small">Best Sellers</h4>
          <img src={downarrow} alt="downarrow" />
          <h4 className="text-gray-600 font-small">Customer Service</h4>
          <h4 className="text-gray-600 font-small">New Releases</h4>
        </div>
        <div>
          <img className="flex" src={search} alt="searchIcon" />
        </div>
        <div className="flex">
          <img src={person} alt="searchIcon" />
          <div className="px-2 m-1.5 text-gray-600 md:flex hidden">Acconut</div>
          <img src={account} alt="searchIcon" />
          <div className="px-2 m-1.5 text-gray-600 md:flex hidden">Bag</div>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="flex justify-between px-4">
          <img alt="menu" src={menu} />
          <h2 className="px-8 m-1.5 font-medium text-gray-700">Constructor</h2>
          <div className="flex">
          <img className="flex" src={search} alt="searchIcon" />
          <img src={person} alt="searchIcon" />
          <img src={account} alt="searchIcon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
