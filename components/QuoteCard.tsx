import Image from 'next/image'
import React from 'react'
import obiech from '../assets/62a19386e02733cc2b3a07ca_Sebastien%20Gendreau%20-%20Agorapulse.jpeg.svg'

const QuoteCard = () => {
  return (
    <div className='bg-black flex flex-col w-[628px] h-[300px] items-center  py-[74px] px-[54px] gap-6'>
      <span className='w-[400px] h-[1px] bg-white '></span>
      <p>... Whatever you see in this result, 
        just know that a piece of paper cannot
         dettermine your destiny...</p>
      <div className='w-5 h-5 rounded-full'>
        <Image src={obiech} alt=''/>
      </div>
      <span className='w-[400px] h-[1px] bg-white '></span>
    </div>
  )
}

export default QuoteCard