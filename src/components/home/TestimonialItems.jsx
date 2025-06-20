import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Rating from "../utilities/Rating";

const TestimonialItems = ({ data }) => {
  return (
    <div className="p-5 bg-white rounded-xl mx-2">
      <FaQuoteLeft className="text-4xl text-blue-600" />
      <p className="py-5">{data.detail}</p>
      <div className="flex gap-3">
        <img className="w-16 g-16 rounded-full" src={data.Img} alt="" />
        <div>
          <h2 className="text-lg font-semibold">{data.title}</h2>
          <h3 className="py-1 text-base">{data.job}</h3>
          <Rating rating={data.rating} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialItems;
