import React, { useState } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

function Home() {
  const [cardState, setCardState] = useState(1);

  return (
    <div>
      {/* banner1 */}
      <div className="flex flex-col banner1 h-fit sm:h-[34.9vw] w-full bg-gradient-to-r from-[#FC5229] to-[#AF067D]">
        <h1 className="font-montserrat text-left sm:text-center px-[10vw] sm:px-[22vw] pt-[5vw] sm:pt-[1vw] text-[7.6vw] sm:text-[3.5vw] leading-tight tracking-wide font-extrabold text-white">
          TURN THE WORLD INTO YOUR CLASSROOM & LET YOUR VOICES BE HEARD
        </h1>
        <div
          className="font-montserrat text-left px-[10vw] pt-[3vw] text-[3.5vw] tracking-wide text-white
        sm:pt-[1vw] sm:text-center sm:text-[1.1vw]"
        >
          Scroll through the hallways of Let’s Fl!p while learning beyond the
          walls of a classroom
        </div>
        <div
          className="flex flex-col justify-center w-full h-fit py-[2vw]
          sm:h-[5vw] sm:flex-row sm:inline-flex "
        >
          <a
            href="https://apps.apple.com/id/app/lets-fl-p/id1538266714"
            className="flex flex-row justify-center"
          >
            <div
              className="flex hover:cursor-pointer font-montserrat text-center bg-transparent tracking-wide text-white font-light text-[3vw] items-center justify-center align-middle rounded-xl w-[80vw] h-[8vw] mb-[3vw]
              sm:px-[3vw] sm:mx-[5vw] sm:w-[25vw] sm:h-[3vw] sm:mb-0 sm:text-[0.9vw]"
              style={{
                "box-shadow":
                  "rgb(255 255 255 / 16%) -2px -3px 7px, rgb(0 0 0 / 20%) 2px 4px 7px",
              }}
            >
              <img
                className="flex justify-center align-middle w-[8vw] pr-[3vw] sm:w-[3vw] sm:pr-[1vw]"
                src={require("../assets/appstore.png")}
                alt={"apple store icon"}
              />
              Download on the App Store
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.lets_flip&hl=en_US&gl=US"
            className="flex flex-row justify-center"
          >
            <div
              className="flex hover:cursor-pointer font-montserrat text-center bg-transparent tracking-wide text-white font-light text-[3vw] items-center justify-center align-middle rounded-xl w-[80vw] h-[8vw]
              sm:w-[25vw] sm:h-[3vw] sm:px-[3vw] sm:mx-[5vw] sm:text-[0.9vw]"
              style={{
                "box-shadow":
                  "rgb(255 255 255 / 16%) -2px -3px 7px, rgb(0 0 0 / 20%) 2px 4px 7px",
              }}
            >
              <img
                className="flex justify-center align-middle w-[7vw] pr-[3vw] sm:w-[3vw] sm:pr-[1vw]"
                src={require("../assets/playstore.png")}
                alt={"playstore icon"}
              />
              Download on the Play Store
            </div>
          </a>
        </div>
        <img
          className="flex justify-end mt-[1vw] sm:mt-0 px-[5vw] sm:px-[15vw] sm:py-[1vw]"
          src={require("../assets/phone-header.png")}
          alt={"phone header pic"}
        />
      </div>
      {/* banner1 */}

      {/* banner2 */}
      <div className="banner2 h-[100vw] sm:h-[48vw] pt-[3vw] w-full flex flex-row justify-evenly align-middle items-center overflow-hidden">
        <img
          onClick={
            cardState - 1 !== -1 ? () => setCardState(cardState - 1) : {}
          }
          className="absolute ml-[-45vw] max-w-[10%] max-h-[10%] sm:max-w-[100%] sm:max-h-[100%] z-50"
          src={require("../assets/arrow-left.png")}
          alt={"arrowleft"}
        />

        <motion.img
          initial={{ x: 0 }}
          animate={
            cardState === 0
              ? { x: "30vw" }
              : cardState === 2
              ? { x: "-30vw" }
              : { x: 0 }
          }
          className={
            cardState === 0
              ? "relative justify-center align-middle w-[45vw] sm:w-[21vw]"
              : "relative justify-center align-middle w-[30vw] sm:w-[15vw] opacity-70"
          }
          src={require("../assets/iphone-left.png")}
          alt={"iphone left"}
        />
        <motion.img
          initial={{ x: 0 }}
          animate={
            cardState === 0
              ? { x: "30vw" }
              : cardState === 2
              ? { x: "-30vw" }
              : {}
          }
          className={
            cardState === 1
              ? "relative justify-center align-middle w-[45vw] sm:w-[21vw] z-20"
              : "relative justify-cente align-middle w-[30vw] sm:w-[15vw] opacity-70 z-10"
          }
          // className="flex justify-center align-middle max-w-[100%] max-h-[100%]"
          src={require("../assets/iphone-center.png")}
          alt={"iphone center"}
        />
        <motion.img
          initial={{ x: 0 }}
          animate={
            cardState === 2
              ? { x: "-30vw" }
              : cardState === 0
              ? { x: "30vw" }
              : {}
          }
          className={
            cardState === 2
              ? "relative justify-center align-middle w-[45vw] sm:w-[21vw] z-20"
              : "relative justify-center align-middle w-[30vw] sm:w-[15vw] opacity-70"
          }
          src={require("../assets/iphone-right.png")}
          alt={"iphone right"}
        />

        <img
          onClick={cardState + 1 !== 3 ? () => setCardState(cardState + 1) : {}}
          className="absolute ml-[45vw] max-w-[10%] max-h-[10%] sm:max-w-[100%] sm:max-h-[100%] z-50"
          src={require("../assets/arrow-right.png")}
          alt={"arrowright"}
        />
      </div>
      {/* banner2 */}

      {/* banner3 */}
      <div
        className="banner3 h-[100vw] w-full bg-[#FFEEEA] flex flex-col sm:flex-row align-middle justify-start
      sm:h-[40vw]"
      >
        <div className="font-monserrat text-left w-[full] sm:w-[40vw] pl-[3vw] sm:pl-[10vw] pt-[5vw] flex-row align-middle">
          <h2 className="font-montserrat font-extrabold  text-black text-[7vw] sm:text-[3vw] leading-snug tracking-tight">
            THE WORLD’S FIRST AUTHENTIC MOBILE LEARNING APP
          </h2>
          <p className="font-montserrat pt-[1vw] text-black text-[2.5vw] sm:text-[1.1vw] pb-[5vw] sm:pb-0 sm:pr-0 pr-[25vw]">
            It is all about you in Let’s Flip! Your mission is to come up with
            the most accurate, creative and innovative responses and solutions
            to the questions posted by the world out there. Look up and look at
            the world. There are classrooms everywhere.
          </p>
          <div className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] place-self-center rounded-xl px-[3vw] mt-[2vw] w-fit h-[6vw] sm:h-[3vw]">
            <div className="flex flex-col text-center justify-center align-middle place-self-center bg-[#FFEEEA] rounded-xl font-montserrat font-semibold text-[2.5vw] sm:text-[0.9vw] mx-[-2.9vw] w-[25vw] sm:w-[10vw] h-[5.7vw] sm:h-[2.8vw]">
              Learn More
            </div>
          </div>
        </div>
        <img
          className="w-[50vw] place-self-end mt-[-13vw]
          sm:relative sm:flex sm:flex-row sm:ml-[10vw] sm:w-[40vw] sm:justify-end"
          src={require("../assets/world-first-phone.png")}
          alt={"halfphone"}
        />
      </div>
      {/* banner3 */}

      {/* banner4 */}
      <div className="banner4 h-[90vw] sm:h-[50vw] w-full flex flex-row align-middle">
        <img
          className="flex justify-start align-middle ml-[-40vw] sm:ml-0 max-w-[100%] max-h-[100%]"
          src={require("../assets/banner4.png")}
          alt={"banner4"}
        />
        <div className="ml-[5vw] w-[32vw] h-full text-right flex flex-col align-middle pt-[8vw] sm:pt-[5vw] items-end">
          <h2 className="font-montserrat font-extrabold text-black text-[7vw] sm:text-[4vw] leading-snug tracking-tight">
            ASK A QUESTION
          </h2>
          <p className="font-montserrat pt-[3vw] text-black text-[2.5vw] sm:text-[1.4vw] leading-tight tracking-tight">
            Create and ask question-based missions about any topics you are
            interested in or use it as a safe space to let your voices be heard.
          </p>
          <p className="font-montserrat pt-[3vw] pb-[3vw] text-black text-[2.5vw] sm:text-[1.4vw] leading-tight tracking-tight">
            Receive unique responses, challenge and beat the leaderboard in
            Classrooms against other users’ missions from around the world.
          </p>

          <div className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] place-self-end rounded-xl px-[3vw] mt-[2vw] w-fit h-[6vw] sm:h-[3vw]">
            <div className="flex flex-col text-center justify-center align-middle place-self-center bg-white rounded-xl font-montserrat font-semibold text-[2.5vw] sm:text-[0.9vw] mx-[-2.9vw] w-[25vw] sm:w-[10vw] h-[5.7vw] sm:h-[2.8vw]">
              Learn More
            </div>
          </div>
        </div>
      </div>
      {/* banner4 */}

      {/* banner5 */}
      <div className="banner5 bg-[#FFEEEA] h-[100vw] sm:h-[60vw] w-full flex flex-col align-middle justify-center">
        <h2 className="font-montserrat font-extrabold pb-[3vw] sm:pb-0 text-black text-[7vw] sm:text-[4vw] leading-snug tracking-tight">
          JOIN CLASSROOMS
        </h2>
        <p className="font-montserrat text-black text-center justify-center text-[2.4vw] sm:text-[1.1vw] px-[16vw] sm:px-[20vw] leading-tight tracking-tight">
          Respond to your chosen classrooms or create your own! Missions will be
          placed into a Classroom, which means a category. You will challenge
          users to respond through a video that will be 90 seconds or less.
          Video is used so that you will be able to do interactive visual
          learning instead of only reading.
        </p>
        <img
          className="flex justify-center content-center self-center py-[5vw] sm:w-[50vw] w-[70vw]"
          src={require("../assets/feat.png")}
          alt={"joinclassroom"}
        />
      </div>
      <div className="sm:flex-row flex sm:inline-flex flex-col sm:h-[20vw] h-[30vw] justify-center bg-white items-center align-middle px-[10vw] sm:px-[18vw] pt-[1vw]">
        <h2 className="font-montserrat font-extrabold text-black text-center sm:text-right text-[6vw] sm:text-[4vw] leading-snug tracking-tight px-[3vw]">
          BUILD A COMMUNITY
        </h2>
        <p className="font-montserrat text-black text-center sm:text-left justify-center align-middle text-[2.4vw] sm:text-[1.1vw] pb-[3vw] leading-tight tracking-tight">
          Find like minded people that share the same interests while advocating
          for each other in the learning process. A space to connect students
          and educators around the world through learning.
        </p>
      </div>
      {/* banner5 */}

      <img
        className="flex justify-center content-center self-center w-[100%] pt-[3vw]"
        src={require("../assets/people.png")}
        alt={"people"}
      />

      <Footer />
    </div>
  );
}

export default Home;
