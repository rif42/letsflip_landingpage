import React from 'react'
import Gradient from 'rgt'

function PrivateClass() {
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>

  return (
    <div>
      <img className='absolute pt-[3vw] ml-[40vw] w-[50vw] h-[70vw]' src={require('../assets/img1.png')} alt={'create mission'}/>
      <div className="h-[35vw] w-full bg-no-repeat bg-center bg-pfc bg-cover flex flex-col align-middle justify-center">
        <h1 className="align-center text-left pl-[5vw] text-[5vw] w-[20vw] leading-tight font-extrabold text-white"> PRIVATE CLASSROOM
        </h1>
        <p className='font-montserrat pt-[0.5vw] text-white text-[1.2vw] text-left pl-[5vw] leading-tight font-light'>
        Your exclusive space to create missions and grade your invitees.
        </p>
        <div className="flex-row inline-flex justify-start w-full h-[5vw] py-[2vw]"> 
          <div className="flex font-montserrat text-center bg-transparent tracking-wide text-white font-light text-[0.9vw] items-center justify-center align-middle rounded-full px-[3vw] mx-[5vw] w-fit h-[3vw]"
          style={{'box-shadow':'rgb(255 255 255 / 16%) -2px -3px 7px, rgb(0 0 0 / 20%) 2px 4px 7px'}}>
          Download now
          </div>
          <div className="flex font-montserrat text-center bg-transparent tracking-wide text-white font-light text-[0.9vw] items-center justify-center align-middle rounded-full px-[3vw] mx-[3vw] w-fit h-[3vw]"
          style={{'box-shadow':'rgb(255 255 255 / 16%) -2px -3px 7px, rgb(0 0 0 / 20%) 2px 4px 7px'}}>
          Upgrade now
          </div>
        </div>
      </div>
      <div className='first-letter:flex h-[21vw] flex-col'>
        <div className='mt-[13vw] ml-[26vw] align-center w-fit h-fit'>
          <h2 className= 'absolute text-left text-[6vw] font-extrabold z-[1] pl-[1vw]'>
              <Gradient dir="left-to-right" from="#FC5229" to="#AF067D">
                HOW <br></br>
                IT WORKS
              </Gradient>
          </h2>
          <p style={{"text-shadow": "-1px -1px 0 #CD324C,1px -1px 0 #CD324C,-1px 1px 0 #CD324C, 1px 1px 0 #CD324C"}} 
            className='absolute text-left text-[6vw] font-extrabold mt-[1vw] text-white'>
            HOW <br></br>
            IT WORKS
          </p>
        </div>
      </div>

      <div className='h-[40vw] flex flex-col'>
        <img className='absolute ml-[20vw] mt-[4vw] w-[22vw] h-[19vw]' src={require('../assets/hiw-vector-3.png')} alt={'arrowdown'}/>
        <h2 className= 'text-right text-[5vw] font-extrabold text-black pr-[10vw]'>
          CREATE MISSION
        </h2>
        <p className='font-montserrat text-right text-black text-[1.2vw] leading-tight font-light pr-[10vw] pl-[40vw]'>
        Ask the right questions and you will receive thought-provoking answers. Create and ask question-based missions to boost creative & collaborative open-ended responses. There are multiple-choice questions, learning journeys, and collaborations. 
        </p>

        <h2 className= 'text-left text-[5vw] font-extrabold text-black pl-[10vw] pt-[9vw]'>
          SHARE
        </h2>
        <p className='font-montserrat text-left text-black text-[1.2vw] leading-tight font-light pl-[10vw] pr-[55vw]'>
        Share missions with anyone. Only people with a special code will be able to enter a classroom and complete the missions. You can even upload images of people you collaborated with so the recognition is given where due.
        </p>
      </div>
      <div className='h-[45vw] flex flex-col'>
        <img className='absolute w-[32vw] h-[21vw] ml-[48vw] mt-[-10vw]' src={require('../assets/hiw-vector-4.png')} alt={'arrowdown'}/>
        <img className='absolute w-[30vw] h-[25vw] ml-[50vw] mt-[-25vw]' src={require('../assets/hiw-dave.png')} alt={'letsflip profile'}/>
        <img className='absolute w-[34vw] h-[30vw] ml-[13vw] mt-[5vw]' src={require('../assets/respon-1.png')} alt={'responses'}/>
        <h2 className= 'text-right text-[5vw] font-extrabold text-black pt-[10vw] pr-[10vw]'>
          RESPOND
        </h2>
        <p className='font-montserrat text-right text-black text-[1.2vw] leading-tight font-light pl-[53vw] pr-[10vw]'>
          Once it is live, just watch the magic unfold and receive unique responses. Watch students solve problems in a collaborative learning environment that inspires their creativity.
        </p>
        <img className='flex justify-right w-[60vw] h-[23vw] ml-[20vw]' src={require('../assets/hiw-vector-5.png')} alt={'arrow left to down'}/>
      </div>

      <div className='h-[32vw] flex flex-col'>
        <img className='flex place-self-end absolute w-[35vw] h-[55vw] mt-[-20vw] ml-[-12vw]' src={require('../assets/grading-phone.png')} alt={'letsflip profile'}/>
        <h2 className= 'text-left text-[5vw] font-extrabold text-black pt-[1vw] pl-[10vw]'>
          GRADE
        </h2>
        <p className='font-montserrat text-left text-black pl-[10vw] pr-[55vw] text-[1.2vw] leading-tight font-light '>
          Teachers will be able to review the missions and adjust the points accordingly. There is a leaderboard connected to the Let’s Flip Private classroom to make it gamified and able to track learning progress.
        </p>
      </div>

      <div className='h-fit flex flex-col'>
        <p style={{"text-shadow": "-1px -1px 0 #CD324C,1px -1px 0 #CD324C,-1px 1px 0 #CD324C, 1px 1px 0 #CD324C"}} 
          className='absolute text-center text-[6vw] font-extrabold pt-[2vw] pr-[1.5vw] text-white'>
          THROUGH LETS FLIP'S DEEP LEARNING JOURNEY
        </p>

        <h2 className= 'absolute text-center text-[6vw] font-extrabold pt-[2vw] z-[1] mt-[1.5vw] '>
          <Gradient dir="left-to-right" from="#FC5229" to="#AF067D">
          THROUGH LETS FLIP'S DEEP LEARNING JOURNEY
          </Gradient>
        </h2>

        <img className='flex pt-[22vw] place-self-center w-[55vw] h-[70vw] ' src={require('../assets/through-letsflip-image.png')} alt={'response'}/>

        <p className='font-montserrat text-center text-black px-[20vw] text-[1.2vw] leading-tight font-light '>
        we get a chance to see how your mind worked in getting the response, connect it to relevant academic topics, and identify real people who are affected by this phenomenon. 
        </p>

        <p className='font-montserrat text-center text-gray-800 px-[20vw] text-[1.5vw] pt-[3vw] leading-tight font-light '>
        Private Classroom missions will be similar to public classroom missions
        </p>

        <h2 style={{"text-shadow": "-1px -1px 0 #000000,1px-1px 0 #000000,-1px 1px 0 #000000,1px 1px 0 #000000"}}
        className= 'font-montserrat text-center leading-tight pb-[3vw] text-[3vw] bold font-extrabold text-black px-[15vw] antialiased'>
        This time, however, it will be a private space that will be ideal for schools and educators.
        </h2>

        <img className='flex place-self-center w-[30vw] rounded-3xl ' src={require('../assets/request-access.jpg')} alt={'request access private class'}/>
        
        <p className='font-montserrat text-center text-black px-[20vw] text-[1.1vw] py-[3vw] leading-tight font-light '>
        Contents for Private missions can be curated with personalized learning to engage every student. Upgrade to Private Classroom for only $2.99 USD per account. 
        </p>

        <div className="flex bg-gradient-to-r from-[#FC5229] to-[#AF067D] place-self-center rounded-xl px-[3vw] mx-[5vw] w-fit h-[3vw]">
          <div className='flex flex-col text-center justify-center align-middle place-self-center bg-white rounded-xl font-montserrat font-light text-[0.9vw] mx-[-2.9vw] w-[10vw] h-[2.8vw]'>
            Upgrade now
          </div>
        </div>
        <div className="h-[3vw]">
        </div>
      </div>
      
    </div>
  )
}

<style>
        
</style>

export default PrivateClass