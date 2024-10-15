import React from "react";

const Footer = () => {
  return (
    <footer className="h-[480px] bg-white mt-20 px-[64px] pt-[80px]">
      <div className="flex items-start justify-between">
        <div className="w-[292px] flex flex-col gap-4">
          <div>
            <p className="text-[24px] font-bold text-primaryColor">MORENT</p>
          </div>
          <div>
            <p className="text-[#131313] text-[16px]">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
        </div>
        <div className="w-[550px] flex items-center justify-between pr-10">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[20px] font-semibold">About</p>
            </div>
            <div className="flex flex-col gap-4 text-[#131313] text-[16px]">
              <p>How it works</p>
              <p>Featured</p>
              <p>Partnership</p>
              <p>Business Relation</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[20px] font-semibold">Community</p>
            </div>
            <div className="flex flex-col gap-4 text-[#131313] text-[16px]">
              <p>Events</p>
              <p>Blog</p>
              <p>Podcast</p>
              <p>Invite a friend</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[20px] font-semibold">Socials</p>
            </div>
            <div className="flex flex-col gap-4 text-[#131313] text-[16px]">
              <p>Discord</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Facebook</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px]">
        <hr className="bg-black" />
      </div>
      <div className="flex items-center justify-between mt-9 font-semibold">
        <div>
          <p>&copy;2022MORENT.All rights reserved</p>
        </div>
        <div className="flex items-center justify-between w-[300px]">
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
