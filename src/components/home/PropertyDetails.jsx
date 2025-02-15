import React from "react";

import { FaLocationDot } from "react-icons/fa6";
const PropertyDetails = ({ property, index }) => {
  return (
    <div className="relative shadow-lg my-5 sm:my-0" data-aos="flip-left">
      <img src={property.img} alt={property.title} className="w-full h-auto " />
      <div className="absolute left-0 bottom-0 justify-center w-full">
        <div className="inline-block bg-white w-4/5 p-2 shadow-md">
          <h4 className="text-base font-semibold text-brand">
            {property.title} <span>|</span> {property.price}
          </h4>
          <h3 className="text-xl font-semibold text-dark py-2">
            {property.heading}
          </h3>

          <p className="text-base font-normal text-gray flex items-center gap-1">
            <span className="text-brand text-lg">
              <FaLocationDot />
            </span>
            {property.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
