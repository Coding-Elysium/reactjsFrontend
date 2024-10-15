import React from "react";
import Profile from "../assets/images/profile.png";
import { IoMdSettings, IoIosHeart, IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsFilter } from "react-icons/bs";
const Header = () => {
  return (
    <header className="px-6 py-4 bg-white lg:px-[62px]">
      <div className="flex items-center justify-between ">
        <div className="w-[702px] flex items-center justify-between">
          <div>
            <p className="text-[24px] font-bold text-primaryColor">MORENT</p>
          </div>
          <div className="relative lg:flex items-center hidden">
            <div className="absolute left-5 top-2">
              <CiSearch size={24} />
            </div>
            <div className="absolute right-5 top-2">
              <BsFilter size={24} />
            </div>
            <input
              type="text"
              placeholder="Search Something here"
              className="border border-gray-400- h-[44px] w-[492px] rounded-full pl-14 pr-14"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center lg:flex gap-4">
            <div className="w-[44px] h-[44px] rounded-full border-[#C3D4E9] border flex items-center justify-center">
              <IoIosHeart size={20} color="#596780" />
            </div>
            <div className="w-[44px] h-[44px] rounded-full border-[#C3D4E9] border flex items-center justify-center">
              <IoIosNotifications size={20} color="#596780" />
            </div>
            <div className="w-[44px] h-[44px] rounded-full border-[#C3D4E9] border flex items-center justify-center">
              <IoMdSettings size={20} color="#596780" />
            </div>
          </div>
          <div>
            <img src={Profile} alt="" className="lg:w-[44px] lg:h-[44px]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// sm — Small devices (640px and up)
// md — Medium devices (768px and up)
// lg — Large devices (1024px and up)
// xl — Extra-large devices (1280px and up)
// 2xl — Extra-extra-large devices (1536px an-d up)
