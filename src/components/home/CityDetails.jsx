import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CityDetails = ({ data }) => {
  return (
    <div className="relative px-1">
      <img className="rounded-md" src={data.img} alt="" />
      <div className="absolute left-3 right-3 bottom-3 p-3 rounded-md bg-white flex items-center justify-between">
        <div>
          <p className="pb-2 text-base font-medium font-primary">
            {data.detail}
          </p>
          <h3 className="font-semibold text-xl text-gray-600">{data.title}</h3>
        </div>
        <button className="w-8 h-8 rounded-full bg-white border border-green-200 hover:bg-primary hover:border-none flex items-center justify-center">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CityDetails;
