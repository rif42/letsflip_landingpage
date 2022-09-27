import React , { useState }  from 'react'
import App from '../App'

export default function Navbar( ) {
  const [navState, setNavState] = useState(1);
  const childToParent = () => {
   
  }

  return (
    <div className="Navbar-container flex-row inline-flex w-full h-23">
        <div className="Navbar-logo bg-center bg-no-repeat bg-navlogo w-20 h-20 ml-5"> </div>
        <div onClick={()=>{setNavState(1);console.log(navState)}} className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer pl-[35vw]"> Home </div>
        <div onClick={()=>{setNavState(2);console.log(navState)}} className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"> Private Classroom </div>
        <div onClick={()=>{setNavState(3);console.log(navState)}} className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"> Master Classroom </div>
        <div onClick={()=>{setNavState(4);console.log(navState)}} className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"> Blog </div>
        <div onClick={()=>{setNavState(5);console.log(navState)}} className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"> Meet The Team </div>
        <div onClick={()=>{setNavState(6);console.log(navState)}} className="font-montserrat flex-none grow text-center mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"> Partners </div>
        <div onClick={()=>{setNavState(7);console.log(navState)}} className="font-montserrat flex-none grow text-center pr-[1vw] mx-auto my-auto text-[0.9vw] tracking-wide text-black cursor-pointer"> Download Now </div>
    </div>
  )
}
