import Image from 'next/image'
import React from 'react'
import Mbachi from '../assets/fre 1 (2).jpg'



const QuoteCard = () => {
  return (
    <div className='md:bg-black bg-white flex flex-col md:w-[628px] w-[300px] md:h-[500px] items-center justify-between  py-[74px] px-[54px]'>
      <span className='w-[400px] h-[1px] bg-white '></span>
      <p className='italic font-times font-normal text-[22px] text-black md:text-white'>...Whatever you see in this result, 
        just know that a piece of paper cannot
         determine your destiny...</p>
      <div className='roundedImage'>
        <Image src={Mbachi} alt='ggh' />
      </div>
      <span className='w-[400px] h-[1px] bg-white '></span>
    </div>
  )
}

export default QuoteCard