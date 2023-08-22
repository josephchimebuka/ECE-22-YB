import Image from 'next/image'
import React from 'react'
import Mbachi from '../assets/fre 1 (2).jpg'



const QuoteCard = () => {
  return (
    <div className='bg-black flex flex-col w-[628px] h-[500px] items-center justify-between  py-[74px] px-[54px]'>
      <span className='w-[400px] h-[1px] bg-white '></span>
      <p className='italic font-times font-normal text-[22px]'>...Whatever you see in this result, 
        just know that a piece of paper cannot
         dettermine your destiny...</p>
      <div className='roundedImage'>
        <Image src={Mbachi} alt='ggh' />
      </div>
      <span className='w-[400px] h-[1px] bg-white '></span>
    </div>
  )
}

export default QuoteCard