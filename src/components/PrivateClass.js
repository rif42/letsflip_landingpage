import React from 'react'
import Gradient from 'rgt'

function PrivateClass() {
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
        <img className='absolute ml-[24vw] mt-[4vw] w-[17vw] h-[20vw]' src={require('../assets/hiw-vector-3.png')} alt={'arrowdown'}/>
        <h2 className= 'text-right text-[5vw] font-extrabold text-black pr-[10vw]'>
          CREATE MISSION
        </h2>
        <p className='font-montserrat text-right text-black text-[1.2vw] leading-tight font-light pr-[10vw] pl-[40vw]'>
        Ask the right questions and you will receive thought-provoking answers. Create and ask question-based missions to boost creative & collaborative open-ended responses. There are multiple-choice questions, learning journeys, and collaborations. 
        </p>

        <h2 className= 'text-left text-[5vw] font-extrabold text-black pl-[15vw] pt-[9vw]'>
          SHARE
        </h2>
        <p className='font-montserrat text-left text-black text-[1.2vw] leading-tight font-light pl-[15vw] pr-[55vw]'>
        Share missions with anyone. Only people with a special code will be able to enter a classroom and complete the missions. You can even upload images of people you collaborated with so the recognition is given where due.
        </p>
      </div>
      <div className='h-[40vw] bg-green-300 flex flex-col'>
        <img className='absolute w-[32vw] h-[21vw] ml-[48vw] mt-[-10vw]' src={require('../assets/hiw-vector-4.png')} alt={'arrowdown'}/>
        <img className='absolute w-[30vw] h-[25vw] ml-[50vw] mt-[-25vw]' src={require('../assets/hiw-dave.png')} alt={'letsflip profile'}/>

        <h2 className= 'text-right text-[5vw] font-extrabold text-black pt-[10vw] pr-[10vw]'>
          RESPOND
        </h2>
        <p className='font-montserrat text-right text-black text-[1.2vw] leading-tight font-light pl-[53vw] pr-[10vw]'>
          Once it is live, just watch the magic unfold and receive unique responses. Watch students solve problems in a collaborative learning environment that inspires their creativity.
        </p>
      </div>
      
    </div>
  )
}

<style>
        
</style>

export default PrivateClass