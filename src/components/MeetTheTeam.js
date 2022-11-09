import React from "react";
import StaffCard from "./StaffCard";
import Footer from "./Footer";

function MeetTheTeam() {
  return (
    <div className="w-full">
      <div className="h-[90vw] sm:h-[35vw] w-full bg-no-repeat bg-center bg-pfc bg-cover flex flex-col align-middle justify-center">
        <img
          className="absolute place-self-end w-[45vw] ml-[20vw] mt-[19.6vw] sm:ml-[-3vw] sm:mt-[0.6vw] sm:w-[30vw]"
          src={require("../assets/mtt-header-phone.png")}
          alt={"mttphone"}
        />
        <p className="font-montserrat pb-[2vw] text-white text-[3vw] sm:text-[1.2vw] text-left pl-[5vw] pr-[15vw] sm:pr-[35vw] leading-tight font-light">
          Let's Fl!p is a team of innovative educators from all over the world
          who have come together to create the best lab for Authentic Learning.
        </p>
        <h1 className="align-center place-self-center text-left pl-[5vw] pr-[20vw] sm:pr-[30vw] text-[8vw] sm:text-[4vw] leading-none font-extrabold text-white">
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
          name="Nasser"
          role="Coach"
          bio="Coach Nasser has always been passionate about the kids who fall behind or are mistreated. An Ex Police Officer, World Traveler, Scuba Diver and now coach, he brings his visual and emotional global experience to the learners of today. "
          li="https://www.linkedin.com/in/nasser-ahmad-1ab260251/"
          fb="#"
          ig="#"
          wa="#"
          email="mailto:nasser@scorecampus.com"
        />

        <StaffCard
          name="Marc"
          role="Coach"
          bio="Coach Marc’s ability to empathize separates him from the crowd. He has dealt with the toughest people and situations in his life professionally, financially and personally that led him to come into the world of education to help others who are going through the tough time of life; kid or adult."
          li="https://www.linkedin.com/in/marc-g-42476b251/"
          fb="#"
          ig="#"
          wa="#"
          email="mailto:marc@scorecampus.com"
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
          li="https://www.linkedin.com/in/rifky-ariya-4206ba156/"
          fb=""
          ig=""
          wa="http://wa.me/681216351929"
          email="mailto:rifky@scorecampus.com"
        />

        <StaffCard
          name="Khoirul"
          role="Back-end Developer"
          bio="As a back-end developer, it's appropriate that he likes things that train logic and algorithms. Besides his profile which is very addicted to technology, he really likes sports, he likes to play football even though his body is not suited for sport."
          li="https://www.linkedin.com/in/khoirul-badarudin-8a8a99183/"
          fb=""
          ig="https://www.instagram.com/khoirul_bads/"
          wa="https://www.instagram.com/khoirul_bads/"
          email="mailto:khoirul@scorecampus.com"
        />
      </div>

      <Footer />
    </div>
  );
}

export default MeetTheTeam;
