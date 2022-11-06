import React, { useState } from "react";
import Gradient from "rgt";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function MobileNavbar() {
  const [popup, setPopup] = useState(0);

  return (
    <div>
      <div className="Navbar-container flex-row flex justify-between w-full h-10 sticky top-0 bg-white z-50">
        <div className="Navbar-logo place-self-center bg-center bg-no-repeat bg-navlogo bg-contain ml-[8vw] w-[15vw] h-[8vw]"></div>
        <a
          className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] place-self-center place-content-center place-items-center justify-center align-middle rounded-md mx-[5vw] px-[0.3vw] w-fit h-[7vw]"
          href="https://onelink.to/hc6ta4"
        >
          <div className="flex flex-col text-center font-medium tracking-wide justify-center align-middle place-self-center bg-white rounded-md font-montserrat text-[0.75em] w-[30vw] h-[6.5vw]">
            Download Now
          </div>
        </a>
        <svg
          viewBox="0 0 24 24"
          stroke-width="0.4vw"
          stroke="#E6593C"
          className="w-[6vw] mx-[5vw] mr-[8vw]"
          onClick={() => setPopup(popup === 1 ? 0 : 1)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div
        className={
          popup === 1
            ? "popup w-full h-fit flex flex-col justify-center align-middle"
            : "hidden"
        }
      >
        <Link to="/Event">
          <div className="w-full h-[10vw] font-montserrat flex flex-col justify-center font-bold text-center text-[0.8em] hover:bg-gray-300">
            <Gradient dir="left-to-right" from="#FC5229" to="#AF067D">
              Event
            </Gradient>
          </div>
        </Link>

        <Link to="/">
          <div className="w-full h-[10vw] font-montserrat flex flex-col justify-center font-bold text-center text-[0.8em] hover:bg-gray-300">
            Home
          </div>
        </Link>

        <Link to="/PrivateClass">
          <div className="w-full h-[10vw] font-montserrat flex flex-col justify-center font-bold text-center text-[0.8em] hover:bg-gray-300">
            Private Classroom
          </div>
        </Link>

        <Link to="/MasterClass">
          <div className="w-full h-[10vw] font-montserrat flex flex-col justify-center font-bold text-center text-[0.8em] hover:bg-gray-300">
            Master Classroom
          </div>
        </Link>

        <Link to="/MeetTheTeam">
          <div className="w-full h-[10vw] font-montserrat flex flex-col justify-center font-bold text-center text-[0.8em] hover:bg-gray-300">
            Meet The Team
          </div>
        </Link>

        <Link to="/Partner">
          <div className="w-full h-[10vw] font-montserrat flex flex-col justify-center font-bold text-center text-[0.8em] hover:bg-gray-300">
            Partner
          </div>
        </Link>

        <Link to="/Demo">
          <div className="w-full h-[10vw] font-montserrat flex flex-col justify-center font-bold text-center text-[0.8em] hover:bg-gray-300">
            Demo
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MobileNavbar;
