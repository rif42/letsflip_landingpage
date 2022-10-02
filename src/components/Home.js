import React from "react";
import App from "../App";

function Home() {
  return (
    <div>
      {/* banner1 */}
      <div className="flex flex-col banner1 h-[34.9vw] w-full bg-gradient-to-r from-[#FC5229] to-[#AF067D]">
        <h1 className="font-montserrat text-center px-[22vw] pt-[1vw] text-[3.5vw] leading-tight font-extrabold text-white">
          {" "}
          TURN THE WORLD INTO YOUR CLASSROOM & LET YOUR VOICES BE HEARD{" "}
        </h1>
        <div className="font-montserrat text-center px-[10vw] pt-[1vw] text-[1.1vw] tracking-wide text-white">
          {" "}
          Scroll through the hallways of Let’s Fl!p while learning beyond the
          walls of a classroom
        </div>
        <div className="flex-row inline-flex justify-center w-full h-[5vw] py-[2vw]">
          <div
            className="flex hover:cursor-pointer font-montserrat text-center bg-transparent tracking-wide text-white font-light text-[0.9vw] items-center justify-center align-middle rounded-full px-[3vw] mx-[5vw] w-fit h-[3vw]"
            style={{
              "box-shadow":
                "rgb(255 255 255 / 16%) -2px -3px 7px, rgb(0 0 0 / 20%) 2px 4px 7px",
            }}
          >
            <img
              className="flex justify-center align-middle pr-[1vw]"
              src={require("../assets/appstore.png")}
              alt={"apple store icon"}
            />
            Download on the App Store
          </div>
          <div
            className="flex hover:cursor-pointer font-montserrat text-center bg-transparent tracking-wide text-white font-light text-[0.9vw] items-center justify-center align-middle rounded-full px-[3vw] mx-[5vw] w-fit h-[3vw]"
            style={{
              "box-shadow":
                "rgb(255 255 255 / 16%) -2px -3px 7px, rgb(0 0 0 / 20%) 2px 4px 7px",
            }}
          >
            <img
              className="flex justify-center align-middle pr-[1vw]"
              src={require("../assets/playstore.png")}
              alt={"playstore icon"}
            />
            Download on the Play Store
          </div>
        </div>
        <img
          className="flex justify-end px-[15vw] py-[1vw]"
          src={require("../assets/phone-header.png")}
          alt={"phone header pic"}
        />
      </div>
      {/* banner1 */}

      {/* banner2 */}
      <div className="banner2 h-[45vw] w-full flex flex-row justify-between align-middle items-center">
        <img
          className="flex justify-center align-middle max-w-[100%] max-h-[100%]"
          src={require("../assets/arrow-left.png")}
          alt={"arrowleft"}
        />

        <img
          className="flex justify-center align-middle max-w-[100%] max-h-[100%]"
          src={require("../assets/iphone-left.png")}
          alt={"iphone left"}
        />
        <img
          className="flex justify-center align-middle max-w-[100%] max-h-[100%]"
          src={require("../assets/iphone-center.png")}
          alt={"iphone center"}
        />
        <img
          className="flex justify-center align-middle max-w-[100%] max-h-[100%]"
          src={require("../assets/iphone-right.png")}
          alt={"iphone right"}
        />

        <img
          className="flex justify-center align-middle max-w-[100%] max-h-[100%]"
          src={require("../assets/arrow-right.png")}
          alt={"arrowright"}
        />
      </div>
      {/* banner2 */}

      {/* banner3 */}
      <div className="banner3 h-[40vw] w-full flex flex-row align-middle justify-end">
        <div className="font-monserrat text-left w-[40vw] pr-[10vw] pt-[5vw] flex-row align-middle">
          <h2 className="font-montserrat font-extrabold text-black text-[3vw] leading-snug tracking-tight">
            THE WORLD’S FIRST AUTHENTIC MOBILE LEARNING APP
          </h2>
          <p className="font-montserrat pt-[1vw] text-black text-[1.1vw] leading-tight">
            It is all about you in Let’s Flip! Your mission is to come up with
            the most accurate, creative and innovative responses and solutions
            to the questions posted by the world out there. Look up and look at
            the world. There are classrooms everywhere.
          </p>
          <div className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] place-self-center rounded-xl px-[3vw] mt-[2vw] w-fit h-[3vw]">
            <div className="flex flex-col text-center justify-center align-middle place-self-center bg-white rounded-xl font-montserrat text-[0.9vw] mx-[-2.9vw] w-[10vw] h-[2.8vw]">
              Learn More
            </div>
          </div>
          {/* <button className='font-montserrat flex text-center text-black text-[0.9vw] items-center justify-center align-middle rounded-xl px-[3vw] mt-[2vw] w-fit h-[3vw] shadow-gray-500 shadow-md'> Learn more </button> */}
        </div>
        <img
          className="flex"
          src={require("../assets/world-first-phone.png")}
          alt={"halfphone"}
        />
      </div>
      {/* banner3 */}

      {/* banner4 */}
      <div className="banner4 h-[50vw] w-full flex flex-row align-middle">
        <img
          className="flex justify-start align-middle max-w-[100%] max-h-[100%]"
          src={require("../assets/banner4.png")}
          alt={"banner4"}
        />
        <div className="px-[7vw] h-full text-right flex flex-col align-middle pt-[10%] items-end">
          <h2 className="font-montserrat font-extrabold text-black text-[4vw] leading-snug tracking-tight">
            ASK A QUESTION
          </h2>
          <p className="font-montserrat pt-[3vw] text-black text-[1.4vw] leading-tight tracking-tight">
            Create and ask question-based missions about any topics you are
            interested in or use it as a safe space to let your voices be heard.
          </p>
          <p className="font-montserrat pt-[3vw] text-black text-[1.4vw] leading-tight tracking-tight">
            Receive unique responses, challenge and beat the leaderboard in
            Classrooms against other users’ missions from around the world.
          </p>

          <div className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] place-self-end rounded-xl px-[3vw] mt-[3vw] w-fit h-[3vw]">
            <div className="flex flex-col text-center justify-center align-middle place-self-center bg-white rounded-xl font-montserrat text-[0.9vw] mx-[-2.9vw] w-[10vw] h-[2.9vw]">
              Learn More
            </div>
          </div>
          {/* <button className='font-montserrat flex text-center text-black text-[0.9vw] items-center align-middle rounded-xl px-[3vw] mt-[3vw] w-fit h-[3vw] shadow-gray-500 shadow-md'> Learn more </button> */}
        </div>
      </div>
      {/* banner4 */}

      {/* banner5 */}
      <div className="banner5 h-[60vw] w-full flex flex-col align-middle justify-center">
        <h2 className="font-montserrat font-extrabold text-black text-[4vw] leading-snug tracking-tight">
          JOIN CLASSROOMS
        </h2>
        <p className="font-montserrat text-black text-center justify-center text-[1.1vw] px-[20vw] leading-tight tracking-tight">
          Respond to your chosen classrooms or create your own! Missions will be
          placed into a Classroom, which means a category. You will challenge
          users to respond through a video that will be 90 seconds or less.
          Video is used so that you will be able to do interactive visual
          learning instead of only reading.
        </p>
        <img
          className="flex justify-center content-center self-center py-[2vw] max-w-[38%]"
          src={require("../assets/feat.png")}
          alt={"joinclassroom"}
        />
        <div className="flex-row inline-flex justify-center items-center align-middle px-[18vw] pt-[1vw]">
          <h2 className="font-montserrat font-extrabold text-black text-right text-[4vw] leading-snug tracking-tight px-[3vw]">
            BUILD A COMMUNITY
          </h2>
          <p className="font-montserrat text-black text-left justify-center align-middle text-[1.1vw] leading-tight tracking-tight">
            Find like minded people that share the same interests while
            advocating for each other in the learning process. A space to
            connect students and educators around the world through learning.
          </p>
        </div>
      </div>
      {/* banner5 */}

      <img
        className="flex justify-center content-center self-center w-[100%] pt-[3vw]"
        src={require("../assets/people.png")}
        alt={"people"}
      />
    </div>
  );
}

export default Home;
