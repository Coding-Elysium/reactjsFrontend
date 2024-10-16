import React from "react";
import { FaRegHeart, FaGasPump } from "react-icons/fa";
import { SiTransmission } from "react-icons/si";
import { IoPeople } from "react-icons/io5";
import Btn from "../components/Button";
const Cards = (props) => {
  return (
    <div className="w-[240px] lg:w-[255px] h-[286px] bg-white p-4 flex flex-col flex-shrink-0 justify-between rounded-[10px] ">
      <div>
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-semibold">{props.name}</p>
          <FaRegHeart size={24} />
        </div>
        <div className="mt-1">
          <p className="text-[#90A3BF] text-[12px] font-medium">Sports</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={props.image} alt="Car" />
      </div>
      <div className="flex items-center justify-between">
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
      <div className="flex items-center gap-1 justify-between">
        <div className="flex items-center justify-center">
          <p className="text-[16px] font-bold">{props.rentalPerday}/</p>
          <p className="text-[12px]"> day</p>
        </div>
        <div>
          <Btn padding="16" text="Rental Now" height="32" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
