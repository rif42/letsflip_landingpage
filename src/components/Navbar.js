import React from 'react'

function Navbar() {
  return (
    <div className="Navbar-container flex-row inline-flex w-full h-23">
        <div className="Navbar-logo bg-center bg-no-repeat bg-navlogo w-20 h-20 ml-5"> </div>
        <div className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer pl-[35vw]"> Home </div>
        <div className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"> Private Classroom </div>
        <div className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"> Master Classroom </div>
        <div className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"> Blog </div>
        <div className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"> Meet The Team </div>
        <div className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"> Partners </div>
        <div className="font-montserrat flex-none grow text-center pr-[1vw] mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"> Download Now </div>
    </div>
  )
}

export default Navbar