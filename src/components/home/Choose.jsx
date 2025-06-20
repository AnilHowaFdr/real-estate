import React from "react";
import choose from "../../assets/choose/choose.jpg";
import ChooseItems from "./ChooseItems";

const Choose = () => {
  return (
    <section className="bg-green-200 py-28">
      <div className="container flex flex-col md:flex-row px-4 md:px-6 items-center gap-10">
        <div>
          <img src={choose} alt="" />
        </div>
        <div>
          <div>
            <h3 className="uppercase font-primary text-lg font-medium text-primary">
              Our Benifit
            </h3>
            <h2 className="heading2">Why Choose Homez</h2>
            <p>
              Our seasoned team excels in real estate with years of successful
              market navigation, offering informed decisions and optimal
              results.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-10">
            <ChooseItems
              title="Proven Expertise"
              detail="Seasoned team excels in real estate with years of successful
            market navigation, offering informed decisions and optimal"
            />
            <ChooseItems
              title="Customized Solutions"
              detail="Seasoned team excels in real estate with years of successful
            market navigation, offering informed decisions and optimal"
            />
            <ChooseItems
              title="Transparent Partnerships"
              detail="Seasoned team excels in real estate with years of successful
            market navigation, offering informed decisions and optimal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
