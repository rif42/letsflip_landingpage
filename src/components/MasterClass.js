import React from "react";
import Footer from "./Footer";

function MasterClass() {
  return (
    <div>
      <div className="h-[110vw] sm:h-[35vw] w-full bg-no-repeat bg-center bg-pfc bg-cover flex flex-col align-middle sm:justify-center">
        <img
          className="absolute mt-[55vw] ml-[10vw] w-[60vw] sm:mt-[15vw] sm:ml-[12vw] sm:w-[35vw]"
          src={require("../assets/mc-header-phone.png")}
          alt={"mcphone"}
        />
        <h1 className="font-montserrat align-center text-right pr-[10vw] sm:pr-[5vw] pt-[5vw] sm:pt-0 text-[10vw] sm:text-[5vw] leading-tight font-extrabold text-white">
          MASTER<br></br>CLASSROOM
        </h1>
        <p className="font-montserrat py-[2vw] text-white sm:text-[1.2vw] text-[3vw] text-right pr-[10vw] sm:pr-[5vw] sm:pl-[60vw] pl-[40vw] leading-tight font-light">
          Experience interactive learning in a world of exclusive content
          created by qualified educators.
        </p>
        <a
          className="flex place-self-end sm:pr-0 sm:pt-0 pt-[2vw] pr-[5vw]"
          href="https://onelink.to/hc6ta4"
        >
          <div
            className="flex place-self-end justify-end font-montserrat text-center bg-transparent tracking-wide text-white font-light text-[2.4vw] sm:text-[0.9vw] items-center align-middle rounded-xl px-[15vw] sm:px-[3vw] mx-[5vw] w-fit h-[10vw] sm:h-[3vw]"
            style={{
              "box-shadow":
                "rgb(255 255 255 / 16%) -2px -3px 7px, rgb(0 0 0 / 20%) 2px 4px 7px",
            }}
          >
            Download now
          </div>
        </a>
      </div>

      <div className="sm:h-[35vw] h-[85vw] mt-[50vw] sm:mt-0 w-full flex flex-col ">
        <h2 className="font-montserrat align-center text-right pr-[5vw] pl-[10vw] sm:pl-[50vw] pt-[5vw] text-[8vw] sm:text-[3.5vw] leading-tight font-extrabold text-black">
          Master Classroom is an upgraded version of Private Classroom.
        </h2>
        <p className="font-montserrat pt-[10vw] text-black text-[4vw] sm:text-[2vw] text-center px-[15vw] font-medium">
          Though the functions are similar, this{" "}
          <span className=" outline outline-[#cc0e2e] rounded-lg">
            next level feature
          </span>{" "}
          gives an opportunity for the whole world to complete missions.
        </p>
      </div>

      <div className="sm:h-fit h-[115vw] w-full flex flex-col bg-[#FFEEEA]">
        <img
          className="absolute place-self-end w-[40vw] sm:w-[20vw] mt-[-25vw] sm:mt-[-10vw]"
          src={require("../assets/Giftbox2.png")}
          alt={"giftbox2"}
        />
        <img
          className="absolute hidden sm:flex place-self-end w-[35vw] mt-[-10vw]"
          src={require("../assets/Giftbox4.png")}
          alt={"giftbox4"}
        />
        <img
          className="absolute place-self-start w-[25vw] sm:w-[10vw] mt-[70vw] sm:mt-[16vw]"
          src={require("../assets/Giftbox8.png")}
          alt={"giftbox8"}
        />
        <img
          className="absolute place-self-start w-[50vw] sm:w-[25vw] mt-[65vw] sm:mt-[15vw]"
          src={require("../assets/Giftbox7.png")}
          alt={"giftbox7"}
        />
        <h2 className="font-montserrat align-center text-left px-[15vw] sm:px-[25vw] pt-[5vw] text-[9vw] sm:text-[4.5vw] leading-tight tracking-tight font-extrabold text-black">
          Based on the points received, you will be able to win rewards
        </h2>
        <p className="font-montserrat text-black text-[4vw] sm:text-[2vw] align-center text-left  px-[15vw] sm:px-[25vw] pb-[10vw] pt-[2vw] font-medium">
          Rewards will motivate users to continuously participate with the
          missions and responses.
        </p>
      </div>

      <div className="sm:h-fit h-[170vw] w-full flex flex-col ">
        <img
          className="absolute sm:place-self-start place-self-center sm:ml-[12vw] mt-[5vw] w-[50vw] sm:w-[20vw]"
          src={require("../assets/mc.png")}
          alt={"masterclassroom example"}
        />
        <h2 className="font-montserrat align-center text-right sm:mt-0 mt-[90vw] pt-[5vw] pr-[10vw] pl-[5vw] sm:pl-[30vw] text-[9vw] sm:text-[4.5vw] leading-tight tracking-tight font-extrabold text-black">
          Master Classroom is an excellent platform for influencers
        </h2>
        <p className="font-montserrat text-black text-[4vw] sm:text-[2vw] align-center text-right pb-[10vw] pt-[2vw] pr-[10vw] pl-[10vw] sm:pl-[30vw] font-medium">
          to promote themselves as well as larger businesses to advertise. Fans
          will then be inspired to purchase these classrooms.
        </p>
      </div>

      <div className="sm:h-fit h-[35vw] w-full flex flex-col bg-[#FFEEEA]">
        <p className="font-montserrat text-black text-[4vw] sm:px-0 px-[10vw] sm:text-[2vw] align-center text-center pt-[3vw] pb-[3vw] font-semibold">
          Upgrade to Master Classroom for only $7.99 USD per account.
        </p>

        <div className="flex flex-col text-center justify-center align-middle place-self-center bg-white border-black border-[0.05vw] rounded-xl font-semibold font-montserrat text-[3vw] sm:text-[0.9vw] w-[40vw] sm:w-[10vw] h-[10vw] sm:h-[2.9vw]">
          Upgrade now
        </div>

        <div className="h-[3vw]"></div>
      </div>
      <Footer />
    </div>
  );
}

export default MasterClass;
