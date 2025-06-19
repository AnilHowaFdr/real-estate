import React from "react";

const ChooseItems = ({ title, detail }) => {
  return (
    <div className="px-5 lg:px-7 py-3 lg:py-5 scale-95 hover:scale-100 transition-transform duration-500  rounded-md bg-white font-primary">
      <h2 className="pb-3 text-xl font-medium ">{title}</h2>
      <p className="text-base leading-6">{detail}</p>
    </div>
  );
};

export default ChooseItems;
