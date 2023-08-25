import React from 'react'
import Link from 'next/link'

const TheHeader = () => {
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
    </div>
   
  )
}

export default TheHeader