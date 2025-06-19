import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Rating from "../utilities/Rating";

const TestimonialItems = ({ data }) => {
  return (
    <div>
      <FaQuoteLeft />
      <p>{data.detail}</p>
      <h2>{data.title}</h2>
      <h3>{data.job}</h3>
      <Rating rating={data.rating} />
    </div>
  );
};

export default TestimonialItems;
