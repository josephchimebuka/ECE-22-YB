import React from 'react'
import Image, { StaticImageData }  from 'next/image'

interface props{
  name: string
  nickname: string
  image: StaticImageData
}
const Listcards = (props: props) => {
  return (
    <div className='w-[250px] h-[281px] border-black'>
        <Image src={props.image}  alt=''/>
        <div className='bg-white text-black flex flex-col items-center'>
            <h3 className='font-bold font-Inter'>{props.name}</h3>
            <p className='italic font-thin'>{props.nickname}</p>
        </div>
    </div>
  )
}

export default Listcards