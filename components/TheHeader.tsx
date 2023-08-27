import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Menu from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/Vector.png'
import Search from '..//assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/material-symbols_search.png'
import close from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/icons8-close-50.png'

const TheHeader = () => {
  const [menuState, setMenuState] = useState(false)
  return (
    <div>
 <div className='bg-[#1E1D22]  py-6'>
   <div className='invisible sm:visible flex justify-center text-white items-center gap-[48px]'>
   <Link href={'/about'}>About</Link>
    <Link href={'/classlist'}>Class list</Link>
    <Link href={'/'} className='text-2xl font-bold italic font-times'>ECE 022</Link>
    <Link href={'/'}>Gallery</Link>
    <Link href={'/'}>Trivia</Link>
   </div>
   

    <div className='bg-[#1E1D22]  visible sm:invisible flex justify-between mx-10 items-center'>
    <span onClick={()=> setMenuState(true)}><Image src={Menu} alt=''/></span>
    <span><Image src={Search} alt=''/></span>
  </div>
  </div>

   {/* mobile menu */}
   <div className={`fixed left-0 top-0 h-screen w-full bg-[#1E1D22] z-10 sm:hidden ease-in-out transition-all duration-500 ${ menuState ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end mt-10 mr-5">
         
        </div>
        <div className="flex flex-col ml-14 mr-16">
          <div className="flex flex-col font-Inter font-semibold text-white text-xl outline-none">
           
            <div className='flex justify-between items-center'> 
            <Link legacyBehavior href={"/"}>
                <a className="mt-3 text-2xl font-bold italic font-times">ECE 022</a>
            </Link>
              <div className="w-6 h-6 cursor-pointer" onClick={()=> setMenuState(false)}><Image src={close} alt=''/></div>
          </div>
            
            <Link legacyBehavior href={"/about"}>
                <a className="mt-10 font-Inter text-[16px] text-white font-bold opacity-[0.5]">About</a>
            </Link>
            <Link legacyBehavior href={"/classlist"}>
                <a className="mt-10 font-Inter text-[16px] text-white font-bold opacity-[0.5]">Classlist</a>
            </Link>
            <Link legacyBehavior href={"/gallery"}>
                <a className="mt-10 font-Inter text-[16px] text-white font-bold opacity-[0.5]">Gallery</a>
            </Link>
            <Link legacyBehavior href={"/trivia"}>
                <a className="mt-10 font-Inter text-[16px] text-white font-bold opacity-[0.5]">Trivia</a>
            </Link>
            <div className="input-container">
            <input type="text" className="transparent-input" placeholder="Search a name"/>
            <button className="search-button"><Image src={Search} alt=''/></button>
          </div>
          </div>
         
        </div>
      </div>
    </div>
   
  )
}

export default TheHeader