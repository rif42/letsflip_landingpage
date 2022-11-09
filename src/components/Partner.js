import React from "react";
import Footer from "./Footer";

function Partner() {
  return (
    <div>
      <img
        className="absolute sm:mt-[-15vw] sm:w-[55vw] w-[70vw] left-[16.75vw] sm:left-[22.5vw]"
        src={require("../assets/mobileheader.png")}
        alt={"create mission"}
      />
      <div className="h-[80vw] sm:h-[35vw] w-full bg-pfc bg-no-repeat bg-center bg-cover flex flex-col align-middle justify-center z-10">
        <h1 className="font-montserrat align-center mt-[20vw] sm:mt-0 text-center px-[5vw] text-[7vw] sm:text-[5vw] pt-[5vw] leading-tight font-extrabold text-white">
          #TOGETHERSTRONGER
        </h1>
        <p className="font-montserrat py-[3vw] sm:py-[1vw] text-white text-[4vw] sm:text-[1.5vw] text-center px-[5vw] leading-tight">
          It takes a village to raise a child but it takes the entire world to
          transform education and to build a community
        </p>
      </div>

      <div className="h-[150vw] sm:h-[45vw] flex flex-row">
        <img
          className="absolute sm:mt-[2vw] mt-[15vw] ml-[15.5vw] sm:ml-[55vw] w-[70vw] sm:w-[38vw] z-10"
          src={require("../assets/mtt-header-phone.png")}
          alt={"mttphone"}
        />
        <div className="flex sm:mt-0 mt-[90vw] w-full sm:w-[40vw] flex-col justify-center align-middle">
          <h1 className="font-montserrat align-center text-center px-[1vw] text-[8vw] sm:text-[4vw] leading-tight font-extrabold text-black">
            Brand Partner
          </h1>
          <p className="font-montserrat py-[1vw] text-black text-[3vw] sm:text-[1.5vw] text-center sm:text-left px-[5vw] pt-[2vw] leading-tight">
            Selling or marketing a product is old school. Let's start looking at
            it from a different perspective. The story is not only seen by you
            but your audience. Allow them to experience the brand. Ask them a
            question and involve them in everything you do, from a distance.
          </p>
          <div className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] self-center sm:self-start rounded-xl sm:ml-[5vw] px-[3vw] mt-[5vw] sm:mt-[2vw] mb-[5vw] w-fit h-[7vw] sm:h-[3vw]">
            <div className="flex flex-col text-center justify-center align-middle place-self-center bg-white rounded-xl font-montserrat font-medium text-[3vw] sm:text-[0.9vw] mx-[-2.9vw] w-[35vw] sm:w-[10vw] h-[6.5vw] sm:h-[2.8vw]">
              Connect with us
            </div>
          </div>
        </div>
        <img
          className="hidden sm:flex"
          src={require("../assets/brandpartner.png")}
          alt={"create mission"}
        />
        <img
          className="absolute sm:hidden"
          src={require("../assets/brandpartnermobile.png")}
          alt={"create mission"}
        />
      </div>
      <div className="h-fit sm:h-[41vw] flex flex-col sm:justify-center">
        <img
          className="sm:flex hidden absolute z-[-1]"
          src={require("../assets/irabg.jpg")}
          alt={"ira bg"}
        />
        <img
          className="sm:hidden flex absolute z-[-1]"
          src={require("../assets/irabg2.png")}
          alt={"ira bg"}
        />
        <img
          className="absolute sm:ml-[3vw] sm:mt-[0.8vw] mt-[20vw] sm:w-[32vw] ml-[15.5vw] w-[70vw]"
          src={require("../assets/mtt-header-phone.png")}
          alt={"mttphone"}
        />
        <h1 className="font-montserrat align-center text-center sm:text-right px-[5vw] text-[8vw] sm:text-[4vw] sm:mt-0 mt-[110vw] leading-tight font-extrabold text-black">
          Learning Partner
        </h1>
        <p className="font-montserrat text-black text-[3vw] sm:text-[1.5vw] text-center sm:text-right px-[20vw] sm:px-[5vw] sm:pl-[55vw] py-[2vw] leading-tight">
          Let’s Flip is not a solution. It is a tool created to breathe life and
          fun into your "Learning Experience." Look up and be enthralled by what
          you see. Be inspired and create a classroom out of anything and
          everything. Share it with the world. No syllabus. No curriculum. No
          papers. Just you and your community, in your private space you create.
        </p>
        <div className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] self-center sm:self-end rounded-xl sm:mr-[5vw] px-[3vw] mt-[5vw] sm:mt-[2vw] mb-[5vw] w-fit h-[7vw] sm:h-[3vw]">
          <div className="flex flex-col text-center justify-center align-middle place-self-center bg-white rounded-xl font-montserrat font-medium text-[3vw] sm:text-[0.9vw] mx-[-2.9vw] w-[35vw] sm:w-[10vw] h-[6.5vw] sm:h-[2.8vw]">
            Connect with us
          </div>
        </div>
      </div>
      <div className="h-[70vw] sm:h-[29vw] flex flex-col justify-center align-middle">
        <img
          className="sm:hidden flex mt-[-21vw] absolute w-[40vw] place-self-start "
          src={require("../assets/phone2.png")}
          alt={"phone bg1"}
        />
        <img
          className="sm:hidden flex absolute mt-[15vw] w-[70vw] place-self-end z-[-10]"
          src={require("../assets/phone1.png")}
          alt={"phone bg1"}
        />
        <img
          className="sm:flex w-[100vw] hidden absolute z-[-10]"
          src={require("../assets/partnerbg2.jpg")}
          alt={"phone bg"}
        />
        <p className="font-montserrat py-[1vw] text-black text-[3vw] sm:text-[1.5vw] text-center font-semibold leading-tight">
          Want to know more
        </p>
        <div className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] self-center rounded-xl px-[3vw] mt-[2vw] sm:mt-[2vw] mb-[5vw] w-fit h-[7vw] sm:h-[3vw]">
          <div className="flex flex-col text-center justify-center align-middle place-self-center bg-white rounded-xl font-montserrat font-medium text-[3vw] sm:text-[0.9vw] mx-[-2.9vw] w-[35vw] sm:w-[10vw] h-[6.5vw] sm:h-[2.8vw]">
            Let's get in touch
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Partner;
