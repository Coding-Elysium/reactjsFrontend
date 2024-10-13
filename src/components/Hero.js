import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsFilter } from "react-icons/bs";
import BG from "../assets/images/BG.png";
import Car from "../assets/images/Car.png";
import Cards from "../components/Cards.js";
import Data from "../constant/Data.js";
const Hero = () => {
  const carPopular = Data.filter((datus) => {
    return datus.status === "Popular";
  });
  const showPopular = carPopular.map((popular, index) => {
    return (
      <div key={index}>
        <Cards
          name={popular.name}
          image={popular.image}
          gasCapacity={popular.gasCapacity}
          transmission={popular.transmission}
          peopleCapacity={popular.peopleCapacity}
          rentalPerday={popular.rentalPerDay}
        />
      </div>
    );
  });
  console.log(showPopular);
  return (
    <div className="px-6">
      <div className="flex items-center justify-between">
        <div className="bg-green-50 relative">
          <input
            className="pl-[40px] h-[48px] border border-gray-300  rounded-[10px] w-auto md:pr-4"
            type="text"
            placeholder="Search something here"
          />
          <CiSearch
            size={24}
            className="absolute top-1/2 left-3 transform -translate-y-1/2"
          ></CiSearch>
        </div>
        <div className="border border-gray-300 w-[48px] h-[48px] flex items-center justify-center rounded-[10px]">
          <BsFilter size={24} />
        </div>
      </div>
      <div className="relative w-full h-auto p-4 bg-colorInformation rounded-[10px] mt-8">
        <div className="w-[243px]">
          <p className="text-[16px] font-semibold text-white">
            The Best Platform for Car Rental
          </p>
          <p className="text-[12px] text-white mt-[12px]">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <button className="bg-primaryColor h-[44px] w-[128px] rounded-[10px] text-white mt-[12px]">
            Rental Car
          </button>
        </div>
        <div className="w-full flex justify-center">
          <img src={Car} className="mt-3" alt="" />
        </div>
        <img src={BG} className="absolute left-0 top-0 z-0" alt="" />
      </div>
      <div>
        <div className="flex items-center justify-between mb-5 mt-8">
          <p className="text-[#90A3BF] font-semibold text-[14px]">
            Popular Car
          </p>
          <p className="text-primaryColor text-[14px]">View All</p>
        </div>
        <div className="relative flex overflow-x-scroll gap-5 no-scrollbar">
          {showPopular}
        </div>
      </div>
      <div>
        <div className="mt-8 mb-5">
          <p className="text-[#90A3BF] font-semibold text-[14px]">
            Recommendation
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
