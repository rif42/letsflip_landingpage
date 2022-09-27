import React from 'react'

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
      <div className='first-letter:flex h-[50vw] bg-white flex-col'>
        <div className='spcbg mt-[17vw] ml-[28vw] align-center w-fit h-fit'>
        {/* bg-gradient-to-r from-[#FC5229] to-[#AF067D] */}
            {/* <h2 className='spctext absolute font-extrabold text-[5vw] text-black'>
                HOW <br></br>
                IT WORKS
            </h2> */}
            {/* <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <text style="fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 14.2px; font-weight: 700;" transform="matrix(6.387061, 0, 0, 6.387061, -67.117386, -26.365225)">
                    <tspan x="12.459" y="17.609">HOW</tspan><tspan x="12.459" dy="1em">​</tspan>
                    <tspan>IT WORKS</tspan>
                </text>
            </svg> */}
        </div>

      </div>


    </div>
    
  )
}

<style>
        
</style>

export default PrivateClass