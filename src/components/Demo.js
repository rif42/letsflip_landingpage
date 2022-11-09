import React, { useState } from "react";
import Footer from "./Footer";
import DemoModal from "./DemoModal";

function Demo() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="flex flex-col justify-center banner1 h-[100vw] sm:h-[39.6vw] w-full bg-gradient-to-r from-[#FC5229] to-[#AF067D]">
        <img
          className="sm:hidden flex absolute mt-[-37vw] w-[40vw] place-self-start  "
          src={require("../assets/phone2.png")}
          alt={"phone bg1"}
        />
        <img
          className="sm:hidden flex absolute mt-[36.5vw] w-[40vw] place-self-end "
          src={require("../assets/phone1.png")}
          alt={"phone bg1"}
        />
        <img
          className="hidden sm:flex mt-[3.1vw]"
          src={require("../assets/demobg0.png")}
          alt={"phone background"}
        />
        <h1 className="absolute place-self-center font-montserrat text-center px-[12vw] mb-[12vw] text-white text-[8vw] sm:text-[4vw] leading-tight font-extrabold">
          THANK YOU FOR YOUR INTEREST IN LET'S FLIP!
        </h1>
        <p className="absolute place-self-center font-montserrat text-center text-white text-[3vw] sm:px-0 px-[20vw] sm:mt-0 mt-[30vw] sm:text-[1.2vw] leading-tight font-normal">
          Ready to see Let’s Flip in action? We can’t wait to show you how
          exciting it is to create a gamified experience!
        </p>
      </div>

      <div className="banner4 h-[90vw] sm:h-[50vw] w-full flex flex-row align-middle">
        <img
          className="flex justify-start align-middle ml-[-40vw] sm:ml-0 max-w-[100%] max-h-[100%]"
          src={require("../assets/banner4.png")}
          alt={"banner4"}
        />
        <div className="ml-[5vw] w-[32vw] h-full text-right flex flex-col align-middle pt-[8vw] sm:pt-[5vw] items-end">
          <h2 className="font-montserrat font-extrabold text-black text-[6vw] sm:text-[3.5vw] mt-[5vw] sm:mt-[10vw] w-[40vw] mr-[2vw] leading-snug tracking-tight">
            Our educations team will be able to share more about Let's Flip
            through a demo session.
          </h2>
        </div>
      </div>

      <div className="flex flex-col h-[150vw] sm:h-[70vw] justify-center align-middle bg-demobg3 sm:bg-demobg2 bg-center bg-cover bg-no-repeat w-full">
        <img
          className="flex absolute place-self-start mt-[-30vw] sm:hidden w-[20vw]"
          src={require("../assets/demophone.png")}
          alt={"demo phone background"}
        />
        <img
          className="flex absolute place-self-end mt-[55vw] sm:hidden w-[25vw]"
          src={require("../assets/demophone2.png")}
          alt={"demo phone background"}
        />
        <h1 className="font-montserrat pb-[5vw] pt-[8vw] text-center text-black text-[7vw] sm:text-[3.5vw] leading-tight font-extrabold">
          DEMO SESSION WILL INCLUDE:
        </h1>
        <div className="flex flex-col sm:flex-row place-self-center justify-evenly w-[80%] h-fit sm:h-[15vw]">
          <div className="flex h-[15vw] w-[60vw] sm:h-[15vw] sm:w-[18vw] flex-col place-self-center justify-center sm:mb-0 mb-[3vw] sm:justify-end items-center rounded-xl border-white border-[0.2vw] bg-white/20">
            <p className="font-montserrat text-[4vw] sm:text-[1.5vw] font-medium pb-[2vw] px-[1vw]">
              Introduction to Let's Flip
            </p>
          </div>
          <div className="flex h-[15vw] w-[60vw] sm:h-[15vw] sm:w-[18vw] flex-col place-self-center justify-center sm:mb-0 mb-[3vw] sm:justify-end items-center rounded-xl border-white border-[0.2vw] bg-white/20">
            <p className="font-montserrat text-[4vw] sm:text-[1.5vw] font-medium pb-[2vw] px-[1vw]">
              Why Let’s Flip
            </p>
          </div>
          <div className="flex h-[15vw] w-[60vw] sm:h-[15vw] sm:w-[18vw] flex-col place-self-center justify-center sm:mb-0 mb-[3vw] sm:justify-end items-center rounded-xl border-white border-[0.2vw] bg-white/20">
            <p className="font-montserrat text-[4vw] sm:text-[1.5vw] font-medium pb-[2vw] px-[1vw]">
              Creating engaging content
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row place-self-center justify-evenly w-[50%] sm:pt-[3vw] h-fit sm:h-[15vw]">
          <div className="flex h-[15vw] w-[60vw] sm:h-[15vw] sm:w-[18vw] flex-col place-self-center justify-center sm:mb-0 mb-[3vw] sm:justify-end items-center rounded-xl border-white border-[0.2vw] bg-white/20">
            <p className="font-montserrat text-[4vw] sm:text-[1.5vw] font-medium pb-[2vw] px-[1vw]">
              Gamification Experience Demo
            </p>
          </div>
          <div className="flex h-[15vw] w-[60vw] sm:h-[15vw] sm:w-[18vw] flex-col place-self-center justify-center sm:mb-0 mb-[3vw] sm:justify-end items-center rounded-xl border-white border-[0.2vw] bg-white/20">
            <p className="font-montserrat text-[4vw] sm:text-[1.5vw] font-medium pb-[2vw] px-[1vw]">
              How we can work together
            </p>
          </div>
        </div>

        <DemoModal show={show} onClose={() => setShow(false)} />
        <div
          onClick={() => setShow(true)}
          className="hover:cursor-pointer place-self-center font-montserrat flex text-center font-bold text-white text-[3vw] sm:text-[1.2vw] bg-[#EF5732] items-center justify-center align-middle rounded-full px-[10vw] sm:px-[4vw] mt-[8vw] w-fit h-[8vw] sm:h-[3vw] shadow-gray-500 shadow-md"
        >
          Book a Demo
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Demo;
