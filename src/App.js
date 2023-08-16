import React, { useState } from "react";
import Gradient from "rgt";
import Home from "./components/Home";
import PrivateClass from "./components/PrivateClass";
import MasterClass from "./components/MasterClass";
import MeetTheTeam from "./components/MeetTheTeam";
import Partner from "./components/Partner";
import Event from "./components/Event";
import TOC from "./components/TOC";
import Demo from "./components/Demo";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Privacy from "./components/Privacy";

import "./App.css";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";

function App() {
  const [navState, setNavState] = useState("Home");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <Router basename="/">
      <div className="App">
        <ScrollToTop />
        {windowWidth > 640 ? <Navbar /> : <MobileNavbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Event" element={<Event />} /> */}
          <Route path="/MasterClass" element={<MasterClass />} />
          <Route path="/PrivateClass" element={<PrivateClass />} />
          <Route path="/MeetTheTeam" element={<MeetTheTeam />} />
          <Route path="/Partner" element={<Partner />} />
          <Route path="/Demo" element={<Demo />} />
          <Route path="/TOC" element={<TOC />} />
          <Route path="/privacy" exact element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
