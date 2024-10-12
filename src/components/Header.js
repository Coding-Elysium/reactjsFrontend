import React from "react";
import Profile from "../assets/images/profile.png";

const Header = () => {
  return (
    <header className="sm:px-6 px-6 py-4">
      <div className="flex items-center justify-between">
        <p className="text-[24px] font-bold text-primaryColor">MORENT</p>
        <img src={Profile} alt="" />
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
