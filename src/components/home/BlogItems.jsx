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
      <div className="py-7 px-3">
        <div className="flex items-center gap-3">
          <p className="font-semibold">Jerome Bell</p>
          <p>Furniture</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BlogItems;
