import React from "react";
import StaffCard from "./StaffCard";
import Gradient from "rgt";

function MeetTheTeam() {
  return (
    <div>
      <div className="h-[35vw] w-full bg-no-repeat bg-center bg-pfc bg-cover flex flex-col align-middle justify-center">
        <img
          className="absolute place-self-end ml-[-3vw] mt-[0.6vw] w-[30vw]"
          src={require("../assets/mtt-header-phone.png")}
          alt={"mttphone"}
        />
        <p className="font-montserrat pb-[2vw] text-white text-[1.2vw] text-left pl-[5vw] pr-[35vw] leading-tight font-light">
          Let's Fl!p is a team of innovative educators from all over the world
          who have come together to create the best lab for Authentic Learning.
        </p>
        <h1 className="align-center place-self-center text-left pl-[5vw] pr-[30vw] text-[4vw] leading-none font-extrabold text-white">
          Their missions are simple — Breaking the barriers for learning and
          empowering you to ask the questions that matter.
        </h1>
      </div>

      <div className="flex flex-wrap flex-row w-full px-[5vw] py-[5vw] h-fit]">
        <StaffCard
          name="Gabriel"
          role="Founder"
          bio="The guide, the mentor, the visionary. 
                He inspires and drives the team with unbridled attention to detail. 
                The biggest, baddest coach on the outside. The softest teddy bear on the inside. Besides coaching, he has a passion for golfing and you can even see him on the court hooping. 
                "
          li="https://www.linkedin.com/in/gabrielsuppiah/"
          fb="https://www.facebook.com/Gabrielsuppiah71"
          ig="https://www.instagram.com/coachgabe71/"
          wa="http://wa.me/6596951102"
          email="mailto:gabriel@scorecampus.com"
        />

        <StaffCard
          name="Dave"
          role="Co-Founder"
          bio="He lives his passion with nothing holding him back and will inspire you to think about yours. His best quality is his inability to sing, which he does anyway because he simply wants the people around him to laugh. He dedicates his free time to playing Ultimate Frisbee and binge-watching his favourite TV show, FRIENDS."
          li="https://www.linkedin.com/in/rahul-dave-educator/"
          fb=""
          ig="https://www.instagram.com/rahuldavecoaches/"
          wa="http://wa.me/6590402225"
          email="mailto:dave@scorecampus.com"
        />

        <StaffCard
          name="Ira Atiqah"
          role="Master Educator"
          bio="She is the burst of energy who never quits. A trooper who comes through 
          any time you need her. She is the queen of multitasking and time management. Ira is also an incredible team player and leader. As an athlete since the age of nine, she is the ideal workout buddy because she enjoys sports all day, 
          every day!"
          li="https://www.linkedin.com/in/ira-atiqah/"
          fb="https://www.facebook.com/profile.php?id=100015297615843"
          ig="https://www.instagram.com/heyiraas/"
          wa="http://wa.me/6591822117"
          email="mailto:ira@scorecampus.com"
        />

        <StaffCard
          name="Rido Fisabililah"
          role="Graphic Designer"
          bio="A versatile creative with a flair of his own. Rido brings ideas to life and colors to the team with his unique perspective of design that is shown all over our social media. Rido is a highly enthusiastic individual that could create nothing to something. "
          li="https://www.linkedin.com/in/mridhofp/"
          fb="https://www.instagram.com/mridhofp/"
          ig="https://www.instagram.com/mridhofp/"
          wa="http://wa.me/6289603414757"
          email="mailto:ridho@scorecampus.com"
        />

        <StaffCard
          name="Haidar"
          role="Developer Team Lead"
          bio="As a professional web developer, Haidar is always up for a challenge because it pushes him to be a better leader and problem solver. When he has free time, he enjoys playing futsal regularly, and other times, he takes time to learn new technology. Haidar is a cat lover who adopts, fosters and even feeds stray cats everyday."
          li="https://www.linkedin.com/in/haidar-rais-abdillah-896007157"
          fb="https://www.facebook.com/Haidar0Rais"
          ig="http://instagram.com/haidarrais_"
          wa="http://wa.me/681272964751"
          email="mailto:haidarrais@scorecampus.com"
        />

        <StaffCard
          name="Rifky"
          role="Front-end Developer"
          bio="Being a front-end developer means being able to see the direct results of what you’re coding on the website. In Rifky’s eyes, he feels like he is “painting a picture with poetry” when he does this. Besides being an avid gamer, he believes that the secret of life is balance. This mindset has made him who he is today. "
          li=""
          fb=""
          ig=""
          wa=""
          email=""
        />

        <StaffCard
          name="Khoirul"
          role="Back-end Developer"
          bio="As a back-end developer, it's appropriate that he likes things that train logic and algorithms. Besides his profile which is very addicted to technology, he really likes sports, he likes to play football even though his body is not suited for sport."
          li=""
          fb=""
          ig=""
          wa=""
          email=""
        />

        <StaffCard
          name="Imam Daru"
          role="Back-end Developer"
          bio="When there’s nothing much to do, you can find Imam working on his programming skills, reading, or even traveling. His indomitable spirit inspires him to constantly work on developing himself. Imam is also known to have a spontaneous and adventurous persona."
          li=""
          fb=""
          ig=""
          wa=""
          email=""
        />
      </div>
    </div>
  );
}

export default MeetTheTeam;
