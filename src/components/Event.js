import React from 'react'

function Event() {
  return (
    <div className='flex flex-col justify-center align-middle'>
        <div className='flex flex-row align-middle bg-red-300 w-full h-[50vw]'>
            <div className='flex flex-col justify-center align-middle bg-green-400 w-[50%]'>
              <h2 className="font-montserrat pl-[5vw] align-center text-left text-[4.5vw] leading-tight tracking-tight font-extrabold text-black">
                LET'S FLIP TAKES YOU TO <span>USS</span>
              </h2>
              <p className="font-montserrat pl-[5vw] pr-[10vw] pt-[1vw] text-black text-[1.1vw] align-center text-left font-medium">
              Your missions, if you choose to accept is to flip USS
              Join us this coming December for the first ever Let’s Flip USS competition
              </p>
              <div className="flex font-montserrat ml-[5vw] w-[10vw] p-[0.8vw] mt-[1vw] flex-row text-center place-content-center place-items-center align-middle bg-red-400 hover:cursor-pointer">
                Register now!
              </div>
            </div>
            <div className='flex align-middle bg-blue-400 w-[50%]'>
                lmao
            </div>
        </div>

    </div>
  )
}

export default Event