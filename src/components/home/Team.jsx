import React from "react";
import TeamItems from "./TeamItems";
import { TeamData } from "../..";

const Team = () => {
  return (
    <section className="py-20" id="About">
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col gap-3">
          <h3 className="uppercase font-primary text-lg text-center font-medium text-primary">
            Our Teams
          </h3>
          <h2 className="heading2 text-center">Meet Our Agents</h2>
        </div>
        <div className="py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {TeamData.map((item, key) => (
            <TeamItems key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
