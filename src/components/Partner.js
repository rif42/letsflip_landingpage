import React from "react";

function Partner() {
  return (
    <div>
        <img
          className="flex absolute left-[25%]"
          src={require("../assets/partnerheader.png")}
          alt={"create mission"}
        />
      <div className="h-[35vw] w-full bg-pfc bg-no-repeat bg-center bg-cover flex flex-col align-middle justify-center z-10">
        <h1 className="font-montserrat align-center text-center px-[5vw] text-[5vw] pt-[5vw] leading-tight font-extrabold text-white">
          #TOGETHERSTRONGER
        </h1>
        <p className="font-montserrat py-[1vw] text-white text-[1.5vw] text-center px-[5vw] leading-tight">
          It takes a village to raise a child but it takes the entire world to
          transform education and to build a community
        </p>
      </div>

      <div className="h-[45vw] flex flex-row">
        <img
          className="absolute mt-[2vw] ml-[55vw] w-[38vw]"
          src={require("../assets/mtt-header-phone.png")}
          alt={"mttphone"}
        />
        <div className="flex w-[40vw] flex-col justify-center align-middle">
          <h1 className="font-montserrat align-center text-center px-[1vw] text-[4vw] leading-tight font-extrabold text-black">
            Brand Partner
          </h1>
          <p className="font-montserrat py-[1vw] text-black text-[1.5vw] text-left px-[5vw] pt-[2vw] leading-tight">
            Selling or marketing a product is old school. Let's start looking at
            it from a different perspective. The story is not only seen by you
            but your audience. Allow them to experience the brand. Ask them a
            question and involve them in everything you do, from a distance.
          </p>
          <div className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] place-self-start rounded-xl ml-[5vw] px-[3vw] mt-[2vw] w-fit h-[3vw]">
            <div className="flex flex-col text-center justify-center align-middle place-self-center bg-white rounded-xl font-montserrat text-[0.9vw] mx-[-2.9vw] w-[10vw] h-[2.9vw]">
              Connect with us
            </div>
          </div>
        </div>
        <img
          className=""
          src={require("../assets/brandpartner.png")}
          alt={"create mission"}
        />
      </div>
      <div className="h-[41vw] flex flex-col justify-center">
        <img
          className="absolute z-[-1]"
          src={require("../assets/irabg.jpg")}
          alt={"ira bg"}
        />
        <img
          className="absolute ml-[3vw] mt-[0.8vw] w-[35vw]"
          src={require("../assets/mtt-header-phone.png")}
          alt={"mttphone"}
        />
        <h1 className="font-montserrat align-center text-right px-[5vw] text-[4vw] leading-tight font-extrabold text-black">
          Learning Partner
        </h1>
        <p className="font-montserrat text-black text-[1.5vw] text-right px-[5vw] pl-[55vw] py-[2vw] leading-tight">
          Let’s Flip is not a solution. It is a tool created to breathe life and
          fun into your "Learning Experience." Look up and be enthralled by what
          you see. Be inspired and create a classroom out of anything and
          everything. Share it with the world. No syllabus. No curriculum. No
          papers. Just you and your community, in your private space you create.
        </p>
        <div className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] place-self-end rounded-xl mr-[5vw] px-[3vw] w-fit h-[3vw]">
          <div className="flex flex-col text-center justify-center align-middle place-self-center bg-white rounded-xl font-montserrat text-[0.9vw] mx-[-2.9vw] w-[10vw] h-[2.9vw]">
            Connect with us
          </div>
        </div>
      </div>
      <div className="h-[29vw] flex flex-col justify-center align-middle">
        <img
          className="absolute z-[-10]"
          src={require("../assets/partnerbg2.jpg")}
          alt={"ira bg"}
        />
        <p className="font-montserrat py-[1vw] text-black text-[1.5vw] text-center font-medium leading-tight">
          Want to know more
        </p>
        <div className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] place-self-center rounded-full px-[5vw] w-[25vw] h-[5vw]">
          <div className="flex flex-col text-center justify-center align-middle place-self-center bg-white rounded-full font-montserrat font-medium text-[2vw] mx-[-4.8vw] w-[25vw] h-[4.7vw]">
            Let’s get in touch
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
