import React from "react";
import Gradient from "rgt";
import Footer from "./Footer";

function PrivateClass() {
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat"
    rel="stylesheet"
  ></link>;

  return (
    <div>
      <img
        className="absolute mt-[70vw] sm:mt-[3vw] ml-[25vw] sm:ml-[40vw] w-[80vw] h-[110vw] sm:w-[50vw] sm:h-[70vw]"
        src={require("../assets/img1.png")}
        alt={"create mission"}
      />
      <div className="sm:h-[35vw] h-[100vw] w-full bg-no-repeat bg-center bg-pfc bg-cover flex flex-col align-middle justify-center">
        <h1 className="font-montserrat align-center text-left mt-[-20vw] sm:mt-0 pl-[5vw] text-[10vw] sm:text-[5vw] w-[20vw] leading-tight font-extrabold text-white">
          PRIVATE CLASSROOM
        </h1>
        <p className="font-montserrat pt-[0.5vw] text-white text-[3vw] sm:text-[1.2vw] text-left sm:pr-0 pr-[30vw] pl-[5vw] leading-tight ">
          Your exclusive space to create missions and grade your invitees.
        </p>
        <div className="sm:inline-flex sm:flex-row flex flex-col hover:cursor-pointer justify-start w-full h-fit sm:h-[5vw] py-[2vw]">
          <a href="https://onelink.to/hc6ta4">
            <div
              className="flex font-montserrat text-center bg-transparent tracking-wide text-white text-[2.5vw] sm:text-[0.9vw] items-center justify-center align-middle rounded-xl px-[20vw] sm:px-[3vw] my-[3vw] sm:my-0 mx-[5vw] w-[60vw] sm:w-fit h-[10vw] sm:h-[3vw]"
              style={{
                "box-shadow":
                  "rgb(255 255 255 / 16%) -2px -3px 7px, rgb(0 0 0 / 20%) 2px 4px 7px",
              }}
            >
              Download now
            </div>
          </a>
          <div
            className="flex font-montserrat text-center bg-transparent tracking-wide text-white text-[2.5vw] sm:text-[0.9vw] items-center justify-center align-middle rounded-xl px-[20vw] sm:px-[3vw] mx-[5vw] w-[60vw] sm:w-fit h-[10vw] sm:h-[3vw]"
            style={{
              "box-shadow":
                "rgb(255 255 255 / 16%) -2px -3px 7px, rgb(0 0 0 / 20%) 2px 4px 7px",
            }}
          >
            Upgrade now
          </div>
        </div>
      </div>
      <div className="first-letter:flex h-[21vw] sm:mt-0 mt-[42vw] flex-col">
        <div className="absolute mt-[-8vw] ml-[10vw] w-full h-[60vw] bg-bubblebg bg-contain bg-no-repeat z-[-10]"></div>
        <div className="sm:mt-[13vw] sm:ml-[26vw] ml-[5vw] align-center w-fit h-fit">
          <h2 className="font-montserrat absolute text-left text-[9vw] sm:text-[6vw] font-extrabold z-[1] pl-[1vw]">
            <Gradient dir="left-to-right" from="#FC5229" to="#AF067D">
              HOW <br></br>
              IT WORKS
            </Gradient>
          </h2>
          <p
            style={{
              "text-shadow":
                "-1px -1px 0 #CD324C,1px -1px 0 #CD324C,-1px 1px 0 #CD324C, 1px 1px 0 #CD324C",
            }}
            className="font-montserrat absolute text-left text-[9vw] sm:text-[6vw] font-extrabold mt-[1vw] text-white"
          >
            HOW <br></br>
            IT WORKS
          </p>
        </div>
      </div>

      <div className="sm:h-[40vw] h-[110vw] flex flex-col">
        <img
          className="absolute ml-[20vw] mt-[23vw] sm:mt-[8vw] w-[30vw] sm:w-[20vw] h-[50vw] sm:h-[17vw]"
          src={require("../assets/hiw-vector-3.png")}
          alt={"arrowdown"}
        />
        <h2 className="font-montserrat text-right text-[8vw] sm:text-[5vw] sm:pl-0 pl-[50vw] sm:mt-[5vw] mt-[17vw] font-extrabold text-black pr-[10vw] leading-none">
          CREATE MISSION
        </h2>
        <p className="font-montserrat text-right text-black text-[2.5vw] sm:text-[1.2vw] sm:pt-0 pt-[3vw] leading-tight pr-[10vw] pl-[30vw] sm:pl-[40vw]">
          Ask the right questions and you will receive thought-provoking
          answers. Create and ask question-based missions to boost creative &
          collaborative open-ended responses. There are multiple-choice
          questions, learning journeys, and collaborations.
        </p>

        <h2 className="font-montserrat text-left text-[8vw] sm:text-[5vw] font-extrabold text-black sm:mt-0 mt-[10vw] pl-[10vw] pt-[9vw]">
          SHARE
        </h2>
        <p className="font-montserrat text-left text-black text-[2.5vw] sm:text-[1.2vw] leading-tight pl-[10vw] pr-[40vw] sm:pr-[55vw]">
          Share missions with anyone. Only people with a special code will be
          able to enter a classroom and complete the missions. You can even
          upload images of people you collaborated with so the recognition is
          given where due.
        </p>
      </div>
      <div className="h-[100vw] sm:h-[45vw] flex bg-[#FFEEEA] flex-col">
        <img
          className="hidden sm:flex sm:absolute w-[32vw] h-[26vw] ml-[48vw] mt-[-10vw]"
          src={require("../assets/hiw-vector-4.png")}
          alt={"arrowdown"}
        />
        <img
          className="absolute w-[60vw] h-[50vw] ml-[55vw] mt-[-50vw] sm:w-[30vw] sm:h-[25vw] sm:ml-[50vw] sm:mt-[-25vw]"
          src={require("../assets/hiw-dave.png")}
          alt={"letsflip profile"}
        />
        <img
          className="absolute w-[65vw] h-[50vw] ml-[20vw] mt-[10vw] sm:w-[34vw] sm:h-[30vw] sm:ml-[13vw] sm:mt-[5vw] z-10"
          src={require("../assets/respon-1.png")}
          alt={"responses"}
        />

        <img
          className="sm:hidden flex absolute w-[62.5vw] h-[68vw] ml-[19vw] mt-[-3vw]"
          src={require("../assets/vector3.png")}
          alt={"arrowdown"}
        />

        <h2 className="font-montserrat text-right sm:mt-0 mt-[50vw] text-[8vw] sm:text-[5vw] font-extrabold text-black pt-[16vw] pr-[10vw]">
          RESPOND
        </h2>
        <p className="font-montserrat text-right text-black text-[2.5vw] sm:text-[1.2vw] leading-tight pl-[15vw] sm:pl-[53vw] pr-[10vw]">
          Once it is live, just watch the magic unfold and receive unique
          responses. Watch students solve problems in a collaborative learning
          environment that inspires their creativity.
        </p>
        <img
          className="flex justify-right w-[60vw] mt-[3vw] h-[30vw] ml-[20vw]"
          src={require("../assets/hiw-vector-5.png")}
          alt={"arrow left to down"}
        />
      </div>

      <div className="sm:h-[40vw] h-[80vw] flex flex-col">
        <div className="absolute sm:ml-[10vw] ml-0 w-[80%] sm:h-[40vw] h-[80vw] bg-bubblebg2 bg-cover sm:bg-contain bg-no-repeat z-[-10]"></div>
        <img
          className="flex place-self-end absolute w-[50vw] h-[80vw] sm:w-[35vw] sm:h-[55vw] sm:mt-[-12vw] sm:ml-[-12vw]"
          src={require("../assets/grading-phone.png")}
          alt={"letsflip profile"}
        />
        <h2 className="font-montserrat text-left text-[8vw] sm:text-[5vw] font-extrabold text-black sm:mt-0 mt-[7vw] pt-[13vw] pl-[10vw]">
          GRADE
        </h2>
        <p className="font-montserrat text-left text-black pl-[10vw] pr-[55vw] text-[2.5vw] sm:text-[1.2vw] leading-tight ">
          Teachers will be able to review the missions and adjust the points
          accordingly. There is a leaderboard connected to the Let’s Flip
          Private classroom to make it gamified and able to track learning
          progress.
        </p>
      </div>

      <div className="h-fit flex flex-col">
        <div className="absolute mt-[25vw] w-full h-[40vw] bg-bubblebg3 bg-contain bg-no-repeat z-[-10]"></div>
        <p
          style={{
            "text-shadow":
              "-1px -1px 0 #CD324C,1px -1px 0 #CD324C,-1px 1px 0 #CD324C, 1px 1px 0 #CD324C",
          }}
          className="font-montserrat absolute text-center text-[8.6vw] sm:text-[6vw] font-extrabold pt-[2vw] pr-[1.5vw] text-white"
        >
          THROUGH LETS FLIP'S DEEP LEARNING JOURNEY
        </p>

        <h2 className="font-montserrat absolute text-center text-[8.6vw] sm:text-[6vw] font-extrabold pt-[2vw] z-[1] mt-[1.5vw] ">
          <Gradient dir="left-to-right" from="#FC5229" to="#AF067D">
            THROUGH LETS FLIP'S DEEP LEARNING JOURNEY
          </Gradient>
        </h2>

        <img
          className="flex sm:pt-[22vw] sm:mt-0 pt-[22vw] mt-[20vw] place-self-center w-[80vw] h-[90vw] sm:w-[55vw] sm:h-[70vw] "
          src={require("../assets/through-letsflip-image.png")}
          alt={"response"}
        />

        <p className="font-montserrat text-center text-black px-[20vw] pb-[3vw] text-[2.5vw] sm:text-[1.2vw] leading-tight  ">
          we get a chance to see how your mind worked in getting the response,
          connect it to relevant academic topics, and identify real people who
          are affected by this phenomenon.
        </p>
      </div>

      <div className="h-fit flex flex-col bg-[#FFEEEA]">
        <p className="font-montserrat text-center text-gray-800 px-[20vw] pb-[2vw] text-[2.8vw] sm:text-[1.5vw] pt-[2vw] leading-tight  ">
          Private Classroom missions will be similar to public classroom
          missions
        </p>

        <h2
          style={{
            "text-shadow":
              "-1px -1px 0 #000000,1px-1px 0 #000000,-1px 1px 0 #000000,1px 1px 0 #000000",
          }}
          className="font-montserrat text-center leading-tight pb-[3vw] text-6vw sm:text-[3vw] bold font-extrabold text-black px-[15vw] antialiased"
        >
          This time, however, it will be a private space that will be ideal for
          schools and educators.
        </h2>

        <img
          className="flex place-self-center w-[60vw] sm:w-[30vw] rounded-xl "
          src={require("../assets/request-access.png")}
          alt={"request access private class"}
        />
        <div className="h-[3vw]"></div>
      </div>

      <div className="h-fit flex flex-col justify-center">
        <p className="font-montserrat text-center text-black px-[20vw] text-[2.5vw] sm:text-[1.1vw] py-[3vw] leading-tight  ">
          Contents for Private missions can be curated with personalized
          learning to engage every student. {<br />}
          {<br />}Upgrade to Private Classroom for only $2.99 USD per account.
        </p>

        <div className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] self-center rounded-xl px-[3vw] mt-[2vw] mb-[5vw] w-fit h-[6vw] sm:h-[3vw]">
          <div className="flex flex-col text-center justify-center align-middle place-self-center bg-white rounded-xl font-montserrat font-semibold text-[2.5vw] sm:text-[0.9vw] mx-[-2.9vw] w-[25vw] sm:w-[10vw] h-[5.7vw] sm:h-[2.8vw]">
            Upgrade Now
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

<style></style>;

export default PrivateClass;
