import React from "react";
import { FaRegHeart, FaGasPump } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { SiTransmission } from "react-icons/si";
import Btn from "../components/Button";
const Recommendation = (props) => {
  return (
    <div className="bg-white h-[240px] sm:h-[286px] w-full lg:w-[255px] p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-semibold">{props.name}</p>
          <FaRegHeart size={24} />
        </div>
        <div className="mt-1">
          <p className="text-[#90A3BF] text-[12px] font-medium">Sports</p>
        </div>
      </div>
      <div className="flex items-center justify-between lg:flex-col">
        <div>
          <img src={props.image} alt="" />
        </div>
        <div className="lg:flex gap-12">
          <div className="flex items-center gap-1">
            <FaGasPump size={14} color="#90A3BF" />
            <p className="text-[12px] text-[#90A3BF]">{props.gasCapacity}</p>
          </div>
          <div className="flex items-center gap-1">
            <SiTransmission size={14} color="#90A3BF" />
            <p className="text-[12px] text-[#90A3BF]">{props.transmission}</p>
          </div>
          <div className="flex items-center gap-1">
            <IoPeople size={14} color="#90A3BF" />
            <p className="text-[12px] text-[#90A3BF]">{props.peopleCapacity}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <p>{props.rentalPerday}/</p>
          <p>day</p>
        </div>
        <div>
          <Btn padding="16" text="Rental Now" height="32" />
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
