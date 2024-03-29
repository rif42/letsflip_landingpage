import React, { useState } from "react";
import Gradient from "rgt";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  const [navState, setNavState] = useState("Event");

  return (
    <>
      <ScrollToTop />
      <div className="Navbar-container align-middle place-content-center place-items-center flex-row flex justify-between w-full h-23 sticky top-0 bg-white z-50">
        <div className="Navbar-logo bg-center bg-no-repeat bg-navlogo bg-contain w-[15vw] h-[4.5vw] pl-[15vw]"></div>
        {/* <Link to="/Event">
          <div
            onClick={() => {
              setNavState("Event");
            }}
            className={
              navState === "Event"
                ? "font-montserrat font-bold flex text-center text-[0.9vw] tracking-wide text-black cursor-pointer underline decoration-2 underline-offset-4 decoration-red-400"
                : "font-montserrat font-bold flex text-center text-[0.9vw] tracking-wide text-black cursor-pointer"
            }
          >
            <Gradient dir="left-to-right" from="#FC5229" to="#AF067D">
              Event
            </Gradient>
          </div>
        </Link> */}

        <Link to="/">
          <div
            onClick={() => {
              setNavState("Home");
            }}
            className={
              navState === "Home"
                ? "font-montserrat font-medium flex text-center text-[0.9vw] tracking-wide text-black cursor-pointer underline decoration-2 underline-offset-4 decoration-red-400"
                : "font-montserrat font-medium flex text-center text-[0.9vw] tracking-wide text-black cursor-pointer"
            }
          >
            Home
          </div>
        </Link>

        <Link to="/PrivateClass">
          <div
            onClick={() => {
              setNavState("PrivateClass");
            }}
            className={
              navState === "PrivateClass"
                ? "font-montserrat font-medium flex text-center text-[0.9vw] tracking-wide text-black cursor-pointer underline decoration-2 underline-offset-4 decoration-red-400"
                : "font-montserrat font-medium flex text-center text-[0.9vw] tracking-wide text-black cursor-pointer"
            }
          >
            Private Classroom
          </div>
        </Link>

        <Link to="/MasterClass">
          <div
            onClick={() => {
              setNavState("MasterClass");
            }}
            className={
              navState === "MasterClass"
                ? "font-montserrat font-medium flex text-center text-[0.9vw] tracking-wide text-black cursor-pointer underline decoration-2 underline-offset-4 decoration-red-400"
                : "font-montserrat font-medium flex text-center text-[0.9vw] tracking-wide text-black cursor-pointer"
            }
          >
            Master Classroom
          </div>
        </Link>

        <Link to="/MeetTheTeam">
          <div
            onClick={() => {
              setNavState("MeetTheTeam");
            }}
            className={
              navState === "MeetTheTeam"
                ? "font-montserrat font-medium flex text-center text-[0.9vw] tracking-wide text-black cursor-pointer underline decoration-2 underline-offset-4 decoration-red-400"
                : "font-montserrat font-medium flex text-center text-[0.9vw] tracking-wide text-black cursor-pointer"
            }
          >
            Meet The Team
          </div>
        </Link>

        <Link to="/Partner">
          <div
            onClick={() => {
              setNavState("Partner");
            }}
            className={
              navState === "Partner"
                ? "font-montserrat font-medium flex text-center text-[0.9vw] tracking-wide text-black cursor-pointer underline decoration-2 underline-offset-4 decoration-red-400"
                : "font-montserrat font-medium flex text-center text-[0.9vw] tracking-wide text-black cursor-pointer"
            }
          >
            Partners
          </div>
        </Link>

        <Link to="/Demo">
          <div
            onClick={() => {
              setNavState("Demo");
            }}
            className={
              navState === "Demo"
                ? "font-montserrat font-medium flex text-center text-[0.9vw] tracking-wide text-black cursor-pointer underline decoration-2 underline-offset-4 decoration-red-400"
                : "font-montserrat font-medium flex text-center text-[0.9vw] tracking-wide text-black cursor-pointer"
            }
          >
            Demo
          </div>
        </Link>

        <a
          className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] place-self-center place-content-center place-items-center justify-center align-middle rounded-xl mx-[5vw] px-[3vw] w-fit h-[2.5vw]"
          href="https://onelink.to/hc6ta4"
        >
          <div className="flex flex-col text-center font-medium tracking-wide justify-center align-middle place-self-center bg-white rounded-xl font-montserrat text-[0.9vw] mx-[-2.9vw] w-[10vw] h-[2.3vw]">
            Download Now
          </div>
        </a>
      </div>
    </>
  );
}

export default Navbar;
