import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Event() {
  const [Toggle, setToggle] = useState(0);
  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="flex flex-row align-middle w-full h-[50vw]">
        <div className="flex flex-col justify-center align-middle w-[40%]">
          <img
            className="ml-[6vw] mt-[-4vw] max-w-[10%] max-h-[10%]"
            src={require("../assets/fliplogo.png")}
            alt={"letsfliplogo"}
          />
          <h2 className="font-montserrat pl-[6vw] align-center text-left text-[#FF0030] text-[4.5vw] leading-tight tracking-tight font-extrabold">
            LET'S FLIP TAKES YOU TO <span></span>
            <span
              style={{
                "text-shadow":
                  "-2px -2px 2px #FF0030,2px -2px 2px #FF0030,-2px 2px 2px #FF0030, 2px 2px 2px #FF0030",
              }}
              className="text-white tracking-normal"
            >
              USS
            </span>
          </h2>
          <p className="font-montserrat pl-[5vw] pr-[10vw] pt-[1vw]  text-black text-[1.1vw] align-center text-left font-medium">
            Your missions, if you choose to accept is to flip USS Join us this
            coming December for the first ever Let’s Flip USS competition
          </p>
          <div className="flex font-montserrat text-[1.1vw] font-medium text-white ml-[5vw] w-[10vw] py-[0.3vw] mt-[1vw] flex-row text-center place-content-center place-items-center align-middle bg-[#FF0030] hover:cursor-pointer">
            Register now!
          </div>
        </div>
        <div className="flex align-middle bg-blue-400 w-[60%]">
          <img
            className="flex justify-center align-middle max-w-[100%] max-h-[100%]"
            src={require("../assets/uss1.jpg")}
            alt={"background1"}
          />
        </div>
      </div>

      <div className="flex flex-row align-middle w-full bg-ussbg2 bg-cover bg-no-repeat bg-center h-[50vw]">
        <div className="flex flex-col justify-center align-middle w-[50%]">
          <h2 className="font-montserrat align-center text-center text-white text-[8vw] leading-tight tracking-tight font-extrabold">
            $5000
          </h2>
          <p className="font-montserrat  text-white text-[1.1vw] align-center text-center font-medium">
            W O R T H <span className="invisible">-</span> O F{" "}
            <span className="invisible">.</span> P R I Z E S{" "}
            <span className="invisible">.</span> U P{" "}
            <span className="invisible">.</span> F O R{" "}
            <span className="invisible">.</span> G R A B S !
          </p>
          <p className="font-montserrat text-white text-[0.9vw] tracking-wide align-center text-center font-medium">
            and a lucky draw for lucky participants
          </p>
        </div>
        <div className="flex align-middle w-[50%]">
          <p className="font-montserrat absolute flex justify-center align-middle place-self-center ml-[21.5vw] mt-[3vw] bg-gray-400 text-black text-[0.9vw] h-[1.4vw] px-2 tracking-wide align-center text-center font-medium">
            Lucky Draw - AirPods
          </p>
          <p className="font-montserrat absolute flex mt-[43vw] text-white text-[0.9vw] h-[1.4vw] px-2 tracking-wide text-center font-medium">
            Sony Playstation 5 Nintendo Switch Airpods JBL Speakers And more…
          </p>
          <img
            className="absolute flex justify-center align-middle place-self-center w-[18%] mt-[-5vw]"
            src={require("../assets/ps5.png")}
            alt={"ps5"}
          />
          <img
            className="absolute flex justify-center align-middle place-self-center w-[15%] ml-[-4vw] mt-[9vw]"
            src={require("../assets/jbl.png")}
            alt={"jbl"}
          />
          <img
            className="absolute flex justify-center align-middle place-self-center w-[24%] ml-[8vw] mt-[10.5vw]"
            src={require("../assets/switch.png")}
            alt={"switch"}
          />
          <img
            className="absolute flex justify-center align-middle place-self-center w-[18%] ml-[18vw] mt-[-8vw]"
            src={require("../assets/airpod.png")}
            alt={"airpod"}
          />
        </div>
      </div>

      <div className="slidey overflow-hidden h-[30vw] relative">
        <motion.div
          onClick={Toggle ? () => setToggle(0) : () => setToggle(1)}
          // initial={{ x: "100%" }}
          animate={{ ease: "linear", type: "Tween", duration: 3 }}
          className="flex absolute flex-row align-middle w-full bg-ussbg4 bg-cover bg-no-repeat bg-center h-[30vw]"
        >
          <div className="flex align-middle justify-center place-items-center w-[50%]">
            <h2 className="font-montserrat ml-[8vw] text-right  text-white text-[5vw] leading-tight tracking-tight font-extrabold">
              LET'S FLIP <br></br> BRINGS A <br></br> NEW <br></br> DIMENSION
            </h2>
          </div>
          <div className="flex flex-col align-middle justify-center place-items-center w-[50%]">
            <img
              className="flex  place-self-start w-[80%]"
              src={require("../assets/dino.jpg")}
              alt={"dinosaur"}
            />
            <p className="font-montserrat text-white text-[0.9vw] pt-[1vw] pr-[10vw] tracking-wide align-center text-left font-medium">
              to learning journeys and competitions in Singapore. With the
              increase usage of online learning and EdTech solutions, there has
              been a need to create a learning journey experience for the
              students to look forward to during the holidays. Not just a day of
              fun, but also going through an in depth of their learning
              experience will be provided.
            </p>
          </div>
        </motion.div>

        <motion.div
          onClick={Toggle ? () => setToggle(0) : () => setToggle(1)}
          animate={Toggle ? { x: "100vw" } : { x: "0" }}
          transition={{ type: "Tween", stiffness: 100, duration: 1 }}
          className="flex absolute flex-row w-full bg-ussbg4 bg-cover bg-no-repeat bg-center h-[30vw]"
        >
          <div className="flex flex-col align-bottom justify-center ml-[7vw] w-[50%]">
            <img
              className="flex place-self-start w-[80%]"
              src={require("../assets/elmo.jpg")}
              alt={"elmo statue"}
            />
            <p className="font-montserrat text-white text-[0.9vw] pt-[1vw] pr-[10vw] tracking-wide align-center text-right font-medium">
              This element will be essential to working towards a positive
              learning environment. WIth that, we are starting this journey
              right here in Singapore with the very first Let’s Flip Universal
              Studios SIngapore Learning Journey
            </p>
          </div>
          <div className="flex flex-col justify-center w-[50%]">
            <h2 className="font-montserrat ml-[-4vw] text-left place-self-start text-white text-[4vw] pr-[3vw] leading-none tracking-tight font-extrabold">
              LET'S FLIP FOCUSES ON CONNECTING STUDENTS AROUND THE WORLD THROUGH
              LEARNING
            </h2>
          </div>
        </motion.div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-[10vw] top-[95%] absolute left-[43vw]"
          viewBox="0 0 200 12"
          fill="currentColor"
        >
          <line //plus icon
            x1="0"
            y1="0"
            x2="100"
            y2="0"
            stroke={Toggle ? "white" : "black"}
            strokeWidth={Toggle ? 6 : 3}
          />
          <line //plus icon part 2
            x1="100"
            y1="0"
            x2="200"
            y2="0"
            stroke={Toggle ? "black" : "white"}
            strokeWidth={Toggle ? 3 : 6}
          />
        </svg>
      </div>

      <div className="flex flex-col w-full h-[50vw]">
        <p className="font-montserrat pt-[3vw] pb-[1vw] text-[#FF0030] text-[2vw] align-center text-center font-bold">
          STUDENTS AGED 12-17 YEARS OLD
        </p>
        <h2 className="font-montserrat text-center text-black text-[5.5vw] px-[10vw] leading-none tracking-tight font-extrabold">
          WILL BE INVITED TO JOIN US ON THIS JOURNEY
        </h2>
        <p className="font-montserrat px-[15vw] pt-[1vw] pb-[3vw] text-black text-[1.1vw] align-center text-center font-bold">
          You will be going through a series of missions in Universal Studios
          Singapore and the judges will grade your response. You bring out your
          competitive spirit, because there will be attractive prizes to be won!
        </p>
        <img
          className="w-full"
          src={require("../assets/rollercoasterbg.jpg")}
          alt={"rollercoaster"}
        />
      </div>
      <div className="flex flex-col justify-center align-middle w-full h-[35vw]">
        <h2 className="font-montserrat align-center text-center text-[#FF0030]  pt-[5vw] text-[4.5vw] leading-tight tracking-tight font-extrabold">
          THE STUDENTS THAT BEST EXEMPLIFY CREATIVITY
        </h2>
        <p className="font-montserrat pt-[1vw] px-[12vw] text-black text-[1.1vw] align-center text-center font-bold">
          confidence and clarity - displaying an ability to present their
          response in a way that is easy to understand - portraying
          knowledgeable content - will win the first Let’s Flip Universal
          Studios Singapore competition.
        </p>
        <div className="flex font-montserrat place-self-center place-content-center text-[1.1vw] mt-[3vw] font-medium text-white w-[10vw] bg-[#FF0030] hover:cursor-pointer">
          Register now!
        </div>
      </div>

      <div className="flex flex-col bg-ussbg5 bg-center bg-no-repeat bg-cover justify-center align-middle w-full h-[35vw] border-[5vw] border-[#EC3939]">
        <h2 className="font-montserrat align-center text-center text-white text-[6vw] px-[5vw] leading-tight tracking-tight font-extrabold">
          TURN USS INTO A <br></br>CLASSROOM
        </h2>
        <p className="font-montserrat pt-[1vw] px-[10vw] text-white text-[1.1vw] align-center text-center font-bold">
          150 Participants, 8 missions, Goodie bags, Prizes to be won.
        </p>
      </div>

      <div className="flex flex-row flex-wrap w-full h-fit justify-center px-[10vw] py-[5vw]">
        <div className="flex flex-col bg-g1 bg-center bg-no-repeat bg-cover place-content-end text-left w-[20vw] h-[25vw] m-[1vw] hover:cursor-pointer">
          <p className="font-montserrat text-white text-[2vw] px-[1vw] pb-[1vw] leading-tight tracking-tight font-extrabold">
            COMPLETE ALL RIDES
          </p>
        </div>
        <div className="flex flex-col bg-g2 bg-center bg-no-repeat bg-cover place-content-end text-left w-[20vw] h-[25vw] m-[1vw] hover:cursor-pointer">
          <p className="font-montserrat text-white text-[2vw] px-[1vw] pb-[1vw] leading-tight tracking-tight font-extrabold">
            WATCH YOUR MISSIONS
          </p>
        </div>
        <div className="flex flex-col bg-g3 bg-center bg-no-repeat bg-cover place-content-end text-left w-[20vw] h-[25vw] m-[1vw] hover:cursor-pointer">
          <p className="font-montserrat text-white text-[2vw] px-[1vw] pb-[1vw] leading-tight tracking-tight font-extrabold">
            RESPOND TO MISSION
          </p>
        </div>
        <div className="flex flex-col bg-g4 bg-center bg-no-repeat bg-cover place-content-end text-left w-[20vw] h-[25vw] m-[1vw] hover:cursor-pointer">
          <p className="font-montserrat text-white text-[2vw] px-[1vw] pb-[1vw] leading-tight tracking-tight font-extrabold">
            RECORD YOUR VIDEO
          </p>
        </div>
        <div className="flex flex-col bg-g5 bg-center bg-no-repeat bg-cover place-content-end text-left w-[20vw] h-[25vw] m-[1vw] hover:cursor-pointer">
          <p className="font-montserrat text-white text-[2vw] px-[1vw] pb-[1vw] leading-tight tracking-tight font-extrabold">
            EDIT WHAT YOU HAVE TAKEN
          </p>
        </div>
        <div className="flex flex-col bg-g6 bg-center bg-no-repeat bg-cover place-content-end text-left w-[20vw] h-[25vw] m-[1vw] hover:cursor-pointer">
          <p className="font-montserrat text-white text-[2vw] px-[1vw] pb-[1vw] leading-tight tracking-tight font-extrabold">
            UPLOAD MISSION
          </p>
        </div>
        <div className="flex flex-col bg-g7 bg-center bg-no-repeat bg-cover place-content-end text-left w-[20vw] h-[25vw] m-[1vw] hover:cursor-pointer">
          <p className="font-montserrat text-white text-[2vw] px-[1vw] pb-[1vw] leading-tight tracking-tight font-extrabold">
            WAIT PATIENTLY FOR GRADING
          </p>
        </div>
        <div className="flex flex-col bg-g8 bg-center bg-no-repeat bg-cover place-content-end text-left w-[20vw] h-[25vw] m-[1vw] hover:cursor-pointer">
          <p className="font-montserrat text-white text-[2vw] px-[1vw] pb-[1vw] leading-tight tracking-tight font-extrabold">
            WIN YOUR PRIZES
          </p>
        </div>
        <div className="flex flex-col bg-g9 bg-center bg-no-repeat bg-cover place-content-end text-left w-[20vw] h-[25vw] m-[1vw] hover:cursor-pointer">
          <p className="font-montserrat text-white text-[2vw] px-[1vw] pb-[1vw] leading-tight tracking-tight font-extrabold">
            DONT FORGET YOUR LEARNING JOURNEY
          </p>
        </div>
      </div>

      <img
        className="w-full object-cover h-[10vw]"
        src={require("../assets/ussbg4.jpg")}
        alt={"rollercoaster"}
      />

      <div className="flex flex-col justify-center align-middle h-fit">
        <h2 className="font-montserrat align-center text-center text-black text-[3vw] py-[3vw] px-[4.5vw] leading-tight tracking-tight font-semibold">
          Frequently asked Questions
        </h2>
        <div className="flex flex-row justify-between rounded-3xl border-[0.2vw] mx-[10vw] border-gray-400">
          <div className="flex flex-col justify-center align-middle pl-[5vw] py-[3vw] w-[80%]">
            <p className="font-montserrat text-left text-[1.1vw] text-black font-bold">
              How do I register for Let’s Flip USS learning journey?
            </p>
            <p className="font-montserrat text-left pt-[1vw] text-[0.9vw] text-black font-medium">
              You can sign up from our registration page here. Availability is
              on a first-come-first-served basis.
            </p>
          </div>
          <div className="flex justify-center place-self-center align-middle w-[10%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <line //stripe line
                x1="0"
                y1="10"
                x2="20"
                y2="10"
                stroke="black"
                strokeWidth={3}
              />

              {/* <line //plus icon
                x1="0"
                y1="10"
                x2="20"
                y2="10"
                stroke="black"
                strokeWidth={3}
              />
              <line //plus icon part 2
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              /> */}
            </svg>
          </div>
        </div>

        <div className="flex flex-row justify-between rounded-3xl mt-[1vw] mb-[0.5vw]  border-[0.2vw] mx-[10vw] border-gray-400">
          <div className="flex flex-col justify-center align-middle pl-[5vw] py-[3vw] w-[80%]">
            <p className="font-montserrat text-left text-[1.1vw] text-black font-bold">
              Is there only one date for the Let’s Flip USS Learning Journey?
            </p>
            {/* <p className="font-montserrat text-left pt-[1vw] text-[0.9vw] text-black font-medium">
              You can sign up from our registration page here. Availability is
              on a first-come-first-served basis.
            </p> */}
          </div>
          <div className="flex justify-center place-self-center align-middle w-[10%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {/* <line //stripe line
                x1="0"
                y1="10"
                x2="20"
                y2="10"
                stroke="black"
                strokeWidth={3}
              /> */}

              <line //plus icon
                x1="0"
                y1="10"
                x2="20"
                y2="10"
                stroke="black"
                strokeWidth={3}
              />
              <line //plus icon part 2
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-row justify-between rounded-3xl my-[0.5vw] border-[0.2vw] mx-[10vw] border-gray-400">
          <div className="flex flex-col justify-center align-middle pl-[5vw] py-[3vw] w-[80%]">
            <p className="font-montserrat text-left text-[1.1vw] text-black font-bold">
              If I have signed up for Let’s Flip USS Learning Journey in
              December 2022, can I sign up for the future ones again?
            </p>
            {/* <p className="font-montserrat text-left pt-[1vw] text-[0.9vw] text-black font-medium">
              You can sign up from our registration page here. Availability is
              on a first-come-first-served basis.
            </p> */}
          </div>
          <div className="flex justify-center place-self-center align-middle w-[10%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {/* <line //stripe line
                x1="0"
                y1="10"
                x2="20"
                y2="10"
                stroke="black"
                strokeWidth={3}
              /> */}

              <line //plus icon
                x1="0"
                y1="10"
                x2="20"
                y2="10"
                stroke="black"
                strokeWidth={3}
              />
              <line //plus icon part 2
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-row justify-between rounded-3xl my-[0.5vw] border-[0.2vw] mx-[10vw] border-gray-400">
          <div className="flex flex-col justify-center align-middle pl-[5vw] py-[3vw] w-[80%]">
            <p className="font-montserrat text-left text-[1.1vw] text-black font-bold">
              Will I be able to get my refund if my child cannot make it?
            </p>
            {/* <p className="font-montserrat text-left pt-[1vw] text-[0.9vw] text-black font-medium">
              You can sign up from our registration page here. Availability is
              on a first-come-first-served basis.
            </p> */}
          </div>
          <div className="flex justify-center place-self-center align-middle w-[10%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {/* <line //stripe line
                x1="0"
                y1="10"
                x2="20"
                y2="10"
                stroke="black"
                strokeWidth={3}
              /> */}

              <line //plus icon
                x1="0"
                y1="10"
                x2="20"
                y2="10"
                stroke="black"
                strokeWidth={3}
              />
              <line //plus icon part 2
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-row justify-between rounded-3xl my-[0.5vw] border-[0.2vw] mx-[10vw] border-gray-400">
          <div className="flex flex-col justify-center align-middle pl-[5vw] py-[3vw] w-[80%]">
            <p className="font-montserrat text-left text-[1.1vw] text-black font-bold">
              How will I know if I have successfully booked the learning
              journey?
            </p>
            {/* <p className="font-montserrat text-left pt-[1vw] text-[0.9vw] text-black font-medium">
              You can sign up from our registration page here. Availability is
              on a first-come-first-served basis.
            </p> */}
          </div>
          <div className="flex justify-center place-self-center align-middle w-[10%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {/* <line //stripe line
                x1="0"
                y1="10"
                x2="20"
                y2="10"
                stroke="black"
                strokeWidth={3}
              /> */}

              <line //plus icon
                x1="0"
                y1="10"
                x2="20"
                y2="10"
                stroke="black"
                strokeWidth={3}
              />
              <line //plus icon part 2
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            </svg>
          </div>
        </div>

        <p className="font-montserrat text-center flex flex-row justify-center place-self-center underline w-[20vw] text-[1.1vw] pt-[2vw] pb-[4vw] text-black font-medium hover:cursor-pointer">
          More Frequently asked Questions
        </p>
      </div>
    </div>
  );
}

export default Event;
