import React from "react";

const BlogItems = ({ data }) => {
  return (
    <div>
      <div className="relative scale-95 hover:scale-100 transition-transform duration-300">
        <img src={data.Img} className="rounded-xl overfolow-hidden" alt="" />
        <span className="absolute top-3 left-3 p-2 bg-brand rounded-xl text-white">
          January 28, 2025
        </span>
      </div>
      <div className="py-7 px-3 font-primary">
        <div className="flex items-center gap-3">
          <p className="font-semibold">Jerome Bell</p>
          <p>Furniture</p>
        </div>
        <div>
          <h5 className="pt-4 pb-2 text-2xl leading-9 font-medium">
            Building gains into housing stocks and how to trade the sector
          </h5>
          <p className="text-[17px] ">
            The average contract interest rate for 30-year fixed-rate mortgages
            with conforming loan balances...
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItems;
