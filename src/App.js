import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PrivateClass from "./components/PrivateClass";
import MasterClass from "./components/MasterClass";
import MeetTheTeam from "./components/MeetTheTeam";

import "./App.css";

function App() {
  const [navState, setNavState] = useState("Home");

  return (
    <div className="App">
      <div className="Navbar-container flex-row inline-flex w-full h-23">
        <div className="Navbar-logo bg-center bg-no-repeat bg-navlogo w-20 h-20 ml-5"></div>
        <div
          onClick={() => {
            setNavState("Home");
          }}
          className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer pl-[35vw]"
        >
          Home
        </div>
        <div
          onClick={() => {
            setNavState("PrivateClass");
          }}
          className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"
        >
          Private Classroom
        </div>
        <div
          onClick={() => {
            setNavState("MasterClass");
          }}
          className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"
        >
          Master Classroom
        </div>
        {/* <div
          onClick={() => {
            setNavState("Blog");
          }}
          className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"
        >
          Blog
        </div> */}
        <div
          onClick={() => {
            setNavState("MeetTheTeam");
          }}
          className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"
        >
          Meet The Team
        </div>
        {/* <div
          onClick={() => {
            setNavState("Partners");
          }}
          className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"
        >
          Partners
        </div> */}
        <a
          className="font-montserrat flex-none grow text-center pr-[1vw] mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"
          href="https://play.google.com/store/apps/details?id=com.lets_flip&hl=en_US&gl=US"
          alt="link to gplay"
        >
          Download Now
        </a>
      </div>

      {navState === "Home" ? <Home /> : null}
      {navState === "PrivateClass" ? <PrivateClass /> : null}
      {navState === "MasterClass" ? <MasterClass /> : null}
      {navState === "MeetTheTeam" ? <MeetTheTeam /> : null}

      <Footer />
    </div>
  );
}

export default App;
