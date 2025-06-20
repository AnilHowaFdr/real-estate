import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const TeamItems = ({ data }) => {
  return (
    <div className="p-4 cursor-pointer">
      <div className="pb-5">
        <img className="rounded-xl" src={data.Img} alt="" />
      </div>
      <div className="flex items-center justify-between p-3">
        <div>
          <h2 className="">{data.title}</h2>
          <p className="">{data.detail}</p>
        </div>
        <div className="flex gap-3">
          <FaPhone className="cursor-pointer p-2 text-brand w-10 h-10 rounded-full border" />
          <MdOutlineMailOutline className="cursor-pointer p-2 text-brand w-10 h-10 rounded-full border" />
        </div>
      </div>
    </div>
  );
};

export default TeamItems;
