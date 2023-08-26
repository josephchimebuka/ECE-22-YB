import React, { useState } from 'react'
import Link from 'next/link'

const TheHeader = () => {
  const [menuState, setMenuState] = useState(true)
  return (
    <div>
 <div className='bg-[#1E1D22] flex justify-center text-white items-center gap-[48px] py-6'>
    <Link href={'/about'}>About</Link>
    <Link href={'/classlist'}>Class list</Link>
    <Link href={'/'} className='text-2xl font-bold italic font-times'>ECE 022</Link>
    <Link href={'/'}>Gallery</Link>
    <Link href={'/'}>Trivia</Link>
  </div>
  <div className='hidden'>
    <span>M</span>
    <span>S</span>
  </div>
   {/* mobile menu */}
   <div className={`fixed left-0 top-0 h-screen w-full bg-[rgba(0,0,0,0.93)] z-10 sm:hidden ease-in-out transition-all duration-500 ${ menuState ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end mt-10 mr-5">
          <div className="w-9 h-9 cursor-pointer" onClick={()=> setMenuState(false)}> 
              {/* <div><Image src={closeIcon} alt=''/></div> */}
          </div>
        </div>
        <div className="flex flex-col ml-14 mr-16">
          <div className="flex flex-col font-Inter font-semibold text-white text-xl outline-none">
            <Link legacyBehavior href={"/"}>
                <a className="mt-10">Home</a>
            </Link>
            <div className="mt-10 flex flex-col">
                <div className='ml-3 block'>
                  <ul className="pt-3 pl-3 pr-4 text-white/80 font-Inter text-base">
                    <li className="mt-1 cursor-pointer">
                      <Link legacyBehavior href={"/blockfund"}>
                        <div className="rounded-full py-1.5 pl-2 flex items-center">
                          <span className="rounded-full w-1 h-1 bg-white mr-3"></span>
                          <span>Blockchain Fund</span>
                        </div>
                      </Link>
                    </li>
                    <li className="mt-2 cursor-pointer">
                      <Link legacyBehavior href={"/glaunch"}>
                        <div className="rounded-full py-1.5 pl-2 flex items-center">
                          <span className="rounded-full w-1 h-1 bg-white mr-3"></span>
                          <span>Glaunch</span>
                        </div>
                      </Link>
                    </li>
                    <li className="mt-2 cursor-pointer">
                      <Link legacyBehavior href={"/farmpayrolls"}>
                        <div className="rounded-full py-1.5 pl-2 flex items-center">
                          <span className="rounded-full w-1 h-1 bg-white mr-3"></span>
                          <span>Non farm Payroll</span>
                        </div>
                      </Link>
                    </li>
                    <li className="mt-2 cursor-pointer">
                      <Link legacyBehavior href={"/nft"}>
                        <div className="rounded-full py-1.5 pl-2 flex items-center">
                          <span className="rounded-full w-1 h-1 bg-white mr-3"></span>
                          <span>NFTs</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>
            <Link legacyBehavior href={"/insights"}>
                <a className="mt-10">Insight</a>
            </Link>
            <Link legacyBehavior href={"/invest"}>
                <a className="mt-10">Invest</a>
            </Link>
            <Link legacyBehavior href={"/aboutus"}>
                <a className="mt-10">About Us</a>
            </Link>
          </div>
          <div className="mt-16 flex flex-col">
            <Link legacyBehavior href={"/login"}>
              <a className='bg-meta-dark-green text-white rounded-xl py-3 px-5 font-Raleway text-base font-semibold text-center'>
                Dashboard
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default TheHeader