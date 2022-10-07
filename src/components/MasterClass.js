import React from "react";
import Footer from "./Footer";

function MasterClass() {
  return (
    <div>
      <div className="h-[35vw] w-full bg-no-repeat bg-center bg-pfc bg-cover flex flex-col align-middle justify-center">
        <img
          className="absolute mt-[15vw] ml-[12vw] w-[35vw]"
          src={require("../assets/mc-header-phone.png")}
          alt={"mcphone"}
        />
        <h1 className="font-montserrat align-center text-right pr-[5vw] text-[5vw] leading-tight font-extrabold text-white">
          MASTER<br></br>CLASSROOM
        </h1>
        <p className="font-montserrat py-[2vw] text-white text-[1.2vw] text-right pr-[5vw] leading-tight font-light">
          Experience interactive learning in a world of<br></br>exclusive
          content created by qualified educators.
        </p>
        <a className="flex place-self-end" href="https://onelink.to/hc6ta4">
          <div
            className="flex place-self-end justify-end font-montserrat text-center bg-transparent tracking-wide text-white font-light text-[0.9vw] items-center align-middle rounded-full px-[3vw] mx-[5vw] w-fit h-[3vw]"
            style={{
              "box-shadow":
                "rgb(255 255 255 / 16%) -2px -3px 7px, rgb(0 0 0 / 20%) 2px 4px 7px",
            }}
          >
            Download now
          </div>
        </a>
      </div>

      <div className="h-[35vw] w-full flex flex-col ">
        <h2 className="font-montserrat align-center text-right pr-[5vw] pl-[50vw] pt-[5vw] text-[3.5vw] leading-tight font-extrabold text-black">
          Master Classroom is an upgraded version of Private Classroom.
        </h2>
        <p className="font-montserrat pt-[10vw] text-black text-[2vw] text-center px-[15vw] font-medium">
          Though the functions are similar, this{" "}
          <span className=" outline outline-[#cc0e2e] rounded-lg">
            next level feature
          </span>{" "}
          gives an opportunity for the whole world to complete missions.
        </p>
      </div>

      <div className="h-fit w-full flex flex-col ">
        <img
          className="absolute place-self-end mt-[-10vw]"
          src={require("../assets/Giftbox2.png")}
          alt={"giftbox2"}
        />
        <img
          className="absolute place-self-end mt-[-10vw]"
          src={require("../assets/Giftbox4.png")}
          alt={"giftbox4"}
        />
        <img
          className="absolute place-self-start mt-[16vw]"
          src={require("../assets/Giftbox8.png")}
          alt={"giftbox8"}
        />
        <img
          className="absolute place-self-start mt-[15vw]"
          src={require("../assets/Giftbox7.png")}
          alt={"giftbox7"}
        />
        <h2 className="font-montserrat align-center text-left px-[25vw] pt-[5vw] text-[4.5vw] leading-tight tracking-tight font-extrabold text-black">
          Based on the points received, you will be able to win rewards
        </h2>
        <p className="font-montserrat text-black text-[2vw] align-center text-left px-[25vw] pt-[2vw] font-medium">
          Rewards will motivate users to continuously participate with the
          missions and responses.
        </p>

        <h2 className="font-montserrat align-center text-right pt-[15vw] pr-[10vw] pl-[30vw] text-[4.5vw] leading-tight tracking-tight font-extrabold text-black">
          Master Classroom is an excellent platform for influencers
        </h2>
        <p className="font-montserrat text-black text-[2vw] align-center text-right pt-[2vw] pr-[10vw] pl-[30vw] font-medium">
          to promote themselves as well as<br></br>
          larger businesses to advertise. Fans will then<br></br>
          be inspired to purchase these classrooms.
        </p>
        <img
          className="absolute ml-[12vw] mt-[42vw] w-[20vw]"
          src={require("../assets/mc.png")}
          alt={"masterclassroom example"}
        />

        <p className="font-montserrat text-black text-[2vw] align-center text-center pt-[10vw] pb-[3vw] font-bold">
          Upgrade to Master Classroom for only $7.99 USD per account.
        </p>

        <div className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] place-self-center rounded-xl px-[3vw] mx-[5vw] w-fit h-[3vw]">
          <div className="flex flex-col text-center justify-center align-middle place-self-center bg-white rounded-xl font-montserrat text-[0.9vw] mx-[-2.9vw] w-[10vw] h-[2.9vw]">
            Upgrade now
          </div>
        </div>

        <div className="h-[3vw]"></div>
      </div>
      <Footer />
    </div>
  );
}

export default MasterClass;
