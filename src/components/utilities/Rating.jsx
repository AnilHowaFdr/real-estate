import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

const Rating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => {
        const starIndex = index + 1;
        return starIndex <= rating ? (
          <MdOutlineStar key={index} className="text-yellow-500" />
        ) : (
          <MdOutlineStarBorder key={index} className="text-white" />
        );
      })}
    </div>
  );
};

export default Rating;
