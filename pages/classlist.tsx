import React, { useState } from 'react'
import maleemoji from '../assets/Male Memojis.svg'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'

import Arinze from '../assets/fre 1 (1).jpg'
import Mbachi from '../assets/fre 1 (2).jpg'
import Ebuka from '../assets/fre 1 (3).jpg'
import TheHeader from '../components/TheHeader'
import { useRouter } from 'next/router'

const Classlist = () => {
  const router =useRouter()
  const[page, setpage] = useState(1)
  const gallery=[{id:1, image: Arinze},{id:2, image: Arinze},{id:3, image:Arinze},{id:4, image: Arinze},{id:5, image: Arinze},
    {id:6, image: Arinze},{id:7, image: Arinze}, {id:8, image: Arinze},{id:9, image: Arinze},
    {id:10, image: Ebuka},{id:11, image: Ebuka},{id:12, image: Ebuka},{id:13, image: Ebuka},{id:14, image: Ebuka},
    {id:15, image: Ebuka},{id:16, image: Ebuka},{id:17, image: Ebuka},{id:18, image: Ebuka},{id:19, image: Ebuka},{id:20, image: Ebuka},
    {id:21, image: Mbachi},{id:22, image: Mbachi},{id:23, image:Mbachi},{id:24, image: Mbachi},{id:25, image: Mbachi},
    {id:26, image: Mbachi},{id:27, image: Mbachi},{id:28, image: Mbachi},{id:29, image: Mbachi},{id:30, image: Mbachi}
   ]

   const scrollTotop=()=>{
    window.scrollTo({
      top: 20,
      behavior: 'smooth'
    })
   }

   const setPagehandler=(selectedpage:any)=>{
    setpage(selectedpage)
    scrollTotop()
   }

  
  return (
        <div className='bg-[#1E1D22] h-auto w-[100vw] overflow-hidden'>
          <TheHeader/>
          <div>

            <div className='flex flex-col items-center text-white'>

            <Image src={maleemoji} alt='ggh'/>
                <h1 className='font-Inter font-bold md:text-4xl text-3xl text-white'>Get to know us for we </h1>
                <p className='text-justify align-middle px-5'>‘Watch your back!!!!!.... This is our class attendance list... arranged in alphabetical order not based on CGPA</p>
                
            <div className='flex gap-2 invisible md:visible'>
          {
        ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'].map((item)=>(
          <button
          key={item}
          className='navigate-button'
          >
                {item}
          </button>
        ))

          }
        </div>
        <p className='search-text'>showing results for letter “A”</p>
        <div className='gallery'>
        {
          gallery.slice(page*10-10, page*10-1).map((item)=>(
            <div className='h-[280px] w-[250px]' key={item.id}>
            <Link href={`/profile/${item.image}`} legacyBehavior>
            <a>
            <Image   src={item.image}  alt=''/>
            <div className='bg-white text-black flex flex-col items-center'>
            <h3 className='font-bold font-Inter'>name</h3>
            <p className='italic font-thin'>Nickname</p>
            </div></a>
            </Link>
           
            </div>
                  ))
                }
            </div>
            {
              gallery.length > 0 && <div className='flex gap-2'>
              {
                  [...Array(gallery.length/10)].map((_,i)=>{

                    return <span className={page === i+1 ? "navigate-button__selected": "navigate-button"} key={i} onClick={()=> setPagehandler(i+1)}>{i+1}</span>
                  }
                  )
                }
              </div>
            }
      
            </div>
                </div>

            <Footer/>
        </div>
  )
}

export default Classlist