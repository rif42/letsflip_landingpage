import React from "react";
import Gradient from "rgt";

function StaffCard({ name, role, bio, img }) {
  return (
    <div className="flex flex-col p-[1vw] h-[50vw]">
      <img
        className="max-w-[90%]"
        src={require(`../assets/${name}.png`)}
        alt={`${name}`}
      />
      <h2 className="text-[2vw] font-montserrat text-left font-bold pt-[1vw] w-[20vw]">
        {name}
      </h2>
      <p className="font-montserrat font-semibold text-left text-[1.4vw] w-[20vw]">
        <Gradient dir="left-to-right" from="#FC5229" to="#AF067D">
          {role}
        </Gradient>
      </p>
      <b className="font-montserrat font-normal pt-[0.5vw] text-[0.9vw] w-[20vw] text-left">
        {bio}
      </b>
      <div className="absolute inline-flex flex-row mr-[9%] mt-[43%]">
        <div className="bg-linkedin bg-no-repeat bg-center bg-contain w-[1.5vw] h-[1.5vw] pr-[2.3vw] hover:cursor-pointer"></div>
        <div className="bg-fb bg-no-repeat bg-center bg-contain w-[1.5vw] h-[1.5vw] pr-[2.3vw] hover:cursor-pointer"></div>
        <div className="bg-ig bg-no-repeat bg-center bg-contain w-[2vw] h-[2vw] pr-[2.3vw] hover:cursor-pointer"></div>
        <div className="bg-wa bg-no-repeat bg-center bg-contain w-[1.5vw] h-[1.5vw] pr-[2.3vw] hover:cursor-pointer"></div>
        <div className="bg-email bg-no-repeat bg-center bg-contain w-[1.4vw] h-[1.4vw] pr-[2.3vw] hover:cursor-pointer"></div>
      </div>
    </div>
  );
}

export default StaffCard;
