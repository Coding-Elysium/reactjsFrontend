import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsFilter } from "react-icons/bs";
import BG from "../assets/images/BG.png";
import Car from "../assets/images/Car.png";
import Cards from "../components/Cards.js";
import Data from "../constant/Data.js";
import Recommendation from "./Recommendation.js";
import Btn from "./Button.js";
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
  const carRecommendation = Data.filter((datus) => {
    return datus.status === "Recommendation";
  });
  const showRecommendation = carRecommendation.map((popular, index) => {
    return (
      <div key={index}>
        <Recommendation
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
    <div className="px-6 lg:px-[62px]">
      <div className="flex items-center justify-between">
        <div className="bg-green-50 relative  lg:hidden">
          <input
            className="pl-[40px] h-[48px] border border-gray-300  rounded-[10px] w-auto md:pr-4"
            type="text"
            placeholder="Search something here"
          />
          <CiSearch
            size={24}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 lg:hidden"
          ></CiSearch>
        </div>
        <div className="border border-gray-300 w-[48px] h-[48px] flex items-center justify-center rounded-[10px] lg:hidden">
          <BsFilter size={24} />
        </div>
      </div>
      <div className="flex gap-[30px]">
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
            <div className="w-full flex justify-center">
              <img src={Car} className="mt-3" alt="" />
            </div>
            <img src={BG} className="absolute left-0 top-0 z-0" alt="" />
          </div>
        </div>
        <div className="relative w-full h-auto p-4 bg-colorInformation rounded-[10px] mt-8 hidden lg:flex">
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
            <div className="w-full flex justify-center">
              <img src={Car} className="mt-3" alt="" />
            </div>
            <img src={BG} className="absolute left-0 top-0 z-0" alt="" />
          </div>
        </div>
        <div className="relative w-full h-auto p-4 bg-colorInformation rounded-[10px] mt-8 hidden lg:flex">
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
            <div className="w-full flex justify-center">
              <img src={Car} className="mt-3" alt="" />
            </div>
            <img src={BG} className="absolute left-0 top-0 z-0" alt="" />
          </div>
        </div>
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
          <p className="text-[#90A3BF] font-semibold text-[14px] mb-5">
            Recommendation
          </p>
          <div className="flex flex-col gap-6">{showRecommendation}</div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Btn padding="16" text="Show More Cars" height="32" />
      </div>
    </div>
  );
};

export default Hero;
