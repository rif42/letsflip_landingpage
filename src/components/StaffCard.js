import React from "react";
import Gradient from "rgt";

function StaffCard({ name, role, bio, li, fb, ig, wa, email }) {
  return (
    <div
      className="flex flex-col p-[1vw] sm:w-[22vw] sm:h-[50vw] sm:mb-0
    w-[90vw] h-[50vw] rounded-xl shadow-md mb-[3vw]"
    >
      <img
        className="sm:h-[25vw] sm:w-[20vw] sm:relative sm:ml-0 sm:mt-0 sm:rounded-none absolute h-[50vw] w-[40vw] rounded-tl-xl rounded-bl-xl ml-[-1vw] mt-[-1vw]"
        src={require(`../assets/${name}.jpg`)}
        alt={`${name}`}
      />
      <h2 className="text-[4vw] sm:text-[2vw] font-montserrat text-left font-bold sm:ml-0 sm:mt-0 mt-[5vw] ml-[45vw] pt-[1vw] w-[35vw] sm:w-[20vw]">
        {name}
      </h2>
      <p className="font-montserrat font-semibold text-left text-[2.6vw] sm:text-[1.4vw] sm:ml-0 sm:mt-0 mt-[1vw] ml-[45vw] w-[35vw] sm:w-[20vw]">
        <Gradient dir="left-to-right" from="#FC5229" to="#AF067D">
          {role}
        </Gradient>
      </p>
      <p className="font-montserrat font-normal pt-[0.5vw] text-[1.8vw] sm:text-[0.9vw] sm:ml-0 sm:mt-0 mt-[1vw] ml-[45vw] w-[35vw] sm:w-[20vw] text-left">
        {bio}
      </p>
      <div className="absolute inline-flex flex-row sm:ml-0 sm:mr-[9%]  sm:mt-[45%] mt-[45vw] mr-0 ml-[44.5vw]">
        <a href={li}>
          <div className="bg-linkedin bg-no-repeat bg-center bg-contain w-[3vw] h-[3vw] sm:w-[1.5vw] sm:h-[1.5vw] pr-[5vw] sm:pr-[2.3vw] hover:cursor-pointer"></div>
        </a>
        <a href={fb}>
          <div className="bg-fb bg-no-repeat bg-center bg-contain w-[3vw] h-[3vw] sm:w-[1.5vw] sm:h-[1.5vw] pr-[5vw] sm:pr-[2.3vw] hover:cursor-pointer"></div>
        </a>
        <a href={ig}>
          <div className="bg-ig bg-no-repeat bg-center bg-contain w-[4vw] h-[4vw] sm:w-[2vw] sm:h-[2vw] pr-[5vw] sm:pr-[2.3vw] hover:cursor-pointer"></div>
        </a>
        <a href={wa}>
          <div className="bg-wa bg-no-repeat bg-center bg-contain w-[3vw] h-[3vw] sm:w-[1.5vw] sm:h-[1.5vw] pr-[5vw] sm:pr-[2.3vw] hover:cursor-pointer"></div>
        </a>
        <a href={email}>
          <div className="bg-email bg-no-repeat bg-center bg-contain w-[2.8vw] h-[2.8vw] sm:w-[1.4vw] sm:h-[1.4vw] pr-[5vw] sm:pr-[2.3vw] hover:cursor-pointer"></div>
        </a>
      </div>
    </div>
  );
}

export default StaffCard;
