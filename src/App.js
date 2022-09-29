import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PrivateClass from "./components/PrivateClass";
import MasterClass from "./components/MasterClass";
import MeetTheTeam from "./components/MeetTheTeam";
import Partner from "./components/Partner";

import "./App.css";

function App() {
  const [navState, setNavState] = useState("Home");

  return (
    <div className="App">
      <div className="Navbar-container flex-row inline-flex justify-even w-full h-23">
        <div className="Navbar-logo bg-center bg-no-repeat bg-navlogo w-20 h-20 pl-[15vw]"></div>
        <div
          onClick={() => {
            setNavState("Home");
          }}
          className="font-montserrat font-medium flex text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"
        >
          Home
        </div>
        <div
          onClick={() => {
            setNavState("PrivateClass");
          }}
          className="font-montserrat font-medium flex text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"
        >
          Private Classroom
        </div>
        <div
          onClick={() => {
            setNavState("MasterClass");
          }}
          className="font-montserrat font-medium flex text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"
        >
          Master Classroom
        </div>
        {/* <div
          onClick={() => {
            setNavState("Blog");
          }}
          className="font-montserrat flex  text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"
        >
          Blog
        </div> */}
        <div
          onClick={() => {
            setNavState("MeetTheTeam");
          }}
          className="font-montserrat font-medium flex text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"
        >
          Meet The Team
        </div>
        <div
          onClick={() => {
            setNavState("Partner");
          }}
          className="font-montserrat font-medium flex text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer pr-[2vw]"
        >
          Partners
        </div>
        <a
          className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] place-self-center justify-center align-middle rounded-xl mr-[15vw] mb-[-0.3vw] px-[3vw] w-fit h-[3vw]"
          href="https://play.google.com/store/apps/details?id=com.lets_flip&hl=en_US&gl=US"
        >
          <div className="flex flex-col text-center font-medium tracking-wide justify-center align-middle place-self-center bg-white rounded-xl font-montserrat text-[0.9vw] mx-[-2.95vw] w-[10vw] h-[2.86vw]">
            Download Now
          </div>
        </a>

        {/* <a
          className="font-montserrat font-medium flex text-center pr-[0vw] mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"
          href="https://play.google.com/store/apps/details?id=com.lets_flip&hl=en_US&gl=US"
          alt="link to gplay"
        >
          Download Now
        </a> */}
      </div>

      {navState === "Home" ? <Home /> : null}
      {navState === "PrivateClass" ? <PrivateClass /> : null}
      {navState === "MasterClass" ? <MasterClass /> : null}
      {navState === "MeetTheTeam" ? <MeetTheTeam /> : null}
      {navState === "Partner" ? <Partner /> : null}

      <Footer />
    </div>
  );
}

export default App;
