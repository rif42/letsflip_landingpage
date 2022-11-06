import React from "react";
import Footer from "./Footer";

function Demo() {
  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="flex flex-col justify-center banner1 h-[39.6vw] w-full bg-gradient-to-r from-[#FC5229] to-[#AF067D]">
        <img
          className="mt-[3.1vw]"
          src={require("../assets/demobg0.png")}
          alt={"phone background"}
        />
        <h1 className="absolute place-self-center font-montserrat text-center mb-[12vw] text-white text-[4vw] leading-tight font-extrabold">
          THANK YOU FOR{<br />} YOUR INTEREST IN LET'S FLIP!
        </h1>
        <p className="absolute place-self-center font-montserrat text-center  text-white text-[1.2vw] leading-tight font-medium">
          Ready to see Let’s Flip in action? We can’t wait to show you how
          exciting it is to create a gamified experience!
        </p>
      </div>

      <div className="flex flex-col justify-center h-[40vw] w-full">
        <p className="text-right font-montserrat text-[3vw] pr-[3vw] font-extrabold">
          Our educations team{<br />} will be able to share{<br />} more about
          Let’s Flip{<br />}
          through a demo session.{" "}
        </p>
        <img
          className="absolute mt-[4vw] w-[65%] ml-[-5vw]"
          src={require("../assets/demobg1.png")}
          alt={"phone background"}
        />
      </div>

      <div className="flex flex-col h-[70vw] justify-center align-middle bg-demobg2 bg-center bg-cover bg-no-repeat w-full">
        <h1 className="font-montserrat py-[5vw] text-center text-black text-[3.5vw] leading-tight font-extrabold">
          DEMO SESSION WILL INCLUDE:
        </h1>
        <div className="flex flex-row place-self-center justify-evenly w-[80%] h-[15vw]">
          <div className="flex h-[15vw] w-[18vw] flex-col justify-end items-center rounded-3xl border-white border-[0.2vw] bg-white/20">
            <p className="font-montserrat text-[1.5vw] font-bold pb-[2vw] px-[1vw]">
              Introduction to Let's Flip
            </p>
          </div>
          <div className="flex h-[15vw] w-[18vw] flex-col justify-end items-center rounded-3xl border-white border-[0.2vw] bg-white/20">
            <p className="font-montserrat text-[1.5vw] font-bold pb-[2vw] px-[1vw]">
              Why Let’s Flip
            </p>
          </div>
          <div className="flex h-[15vw] w-[18vw] flex-col justify-end items-center rounded-3xl border-white border-[0.2vw] bg-white/20">
            <p className="font-montserrat text-[1.5vw] font-bold pb-[2vw] px-[0.2vw]">
              Creating engaging content
            </p>
          </div>
        </div>
        <div className="flex flex-row place-self-center justify-evenly w-[50%] pt-[3vw] h-[15vw]">
          <div className="flex h-[15vw] w-[18vw] flex-col justify-end items-center rounded-3xl border-white border-[0.2vw] bg-white/20">
            <p className="font-montserrat text-[1.5vw] font-bold pb-[2vw] px-[0.2vw]">
              Gamification Experience Demo
            </p>
          </div>
          <div className="flex h-[15vw] w-[18vw] flex-col justify-end items-center rounded-3xl border-white border-[0.2vw] bg-white/20">
            <p className="font-montserrat text-[1.5vw] font-bold pb-[2vw] px-[0.2vw]">
              How we can work together
            </p>
          </div>
        </div>

        <a
          className="place-self-center mt-[7vw]"
          href="https://onelink.to/hc6ta4"
        >
          <div className=" font-montserrat flex text-center font-bold text-white text-[1.2vw] bg-[#EF5732] items-center justify-center align-middle rounded-full px-[4vw] mt-[2vw] w-fit h-[3vw] shadow-gray-500 shadow-md">
            Book a Demo
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Demo;
