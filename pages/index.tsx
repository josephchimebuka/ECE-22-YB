'use client'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import slider1 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/image 32_portraits.png'
import slider2 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/image 31_portraits.png'
import slider3 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/image 30_portraits.png'
import slider4 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/image 29_portraits.png'
import slider5 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/image 27_portraits.png'
import slider6 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/IONO 4.png'
import slider7 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/image 29_portraits.png'
import slider8 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/image 27_portraits.png'
import slider10 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/IONO 10.png'
import slider11 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/IONO 11.png'
import slider12 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/IONO 12.png'
import slider13 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/IONO 13.png'
import slider14 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/IONO 14.png'
import slider15 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/IONO 15.png'
import maleemoji from '../assets/Male Memojis.svg'
import groupPic from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/YB ALL.png'
import Elipse from '../assets/Ellipse 12.svg'
import arrow from '../assets/ECE 022 YB/Arrows/Arrow Ledft 1 - 24px.svg'
import Listcards from '../components/Listcards'
import Arinze from '../assets/fre 1 (1).jpg'
import Mbachi from '../assets/fre 1 (2).jpg'
import Ebuka from '../assets/fre 1 (3).jpg'
import QuoteCard from '../components/QuoteCard'
import Ourstory from '../components/Ourstory'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import Footer from '../components/Footer'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TheHeader from '../components/TheHeader'


interface HomeProps{
  imageGroups: string[][]
  
}

const Home: React.FC<HomeProps> =()=> {



    const gallery=[
     {id:1, image: Arinze},
     {id:2, image: Mbachi},
     {id:3, image: Ebuka},
     {id:4, image: Arinze},
     {id:5, image: Mbachi},
     {id:6, image: Arinze},
     {id:7, image: Mbachi},
     {id:8, image: Arinze},
     {id:9, image: Mbachi},
     {id:10, image: Arinze}
    ]

  return (
    //Landing page
    <div>
          <div className='h-screen md:h-[calc(100vh_+_68px)] min-w-full'>
              <TheHeader/>
            <div className='bg-black h-[90vh] relative overflow-hidden'>
              <div className="slanted-bg"></div>
              <div className='image-container  my-5 relative top-9'>
                <Image className='images' src={slider11} alt=''/>
                <Image className='images' src={slider2} alt=''/>
                <Image className='images' src={slider13} alt=''/>
                <Image className='images' src={slider14} alt=''/>
                <Image className='images' src={slider10} alt=''/>
                <Image className='images' src={slider6} alt=''/>
                <Image className='images' src={slider5} alt=''/>
                <Image className='images' src={slider7} alt=''/>
                <Image className='images' src={slider5} alt=''/>
                <Image className='images' src={slider4} alt=''/>
                <Image className='images' src={slider5} alt=''/>
                <Image className='images' src={slider7} alt=''/>
                <Image className='images' src={slider5} alt=''/>
                <Image className='images' src={slider3} alt=''/>
                <Image className='images' src={slider5} alt=''/>
              </div>
              <div className='image-container2 md:relative md:top-20 '>
              <Image className='images' src={slider1} alt=''/>
                <Image className='images' src={slider12} alt=''/>
                <Image className='images' src={slider6} alt=''/>
                <Image className='images' src={slider4} alt=''/>
                <Image className='images' src={slider10} alt=''/>
                <Image className='images' src={slider4} alt=''/>
                <Image className='images' src={slider5} alt=''/>
                <Image className='images' src={slider8} alt=''/>
                <Image className='images' src={slider5} alt=''/>
                <Image className='images' src={slider4} alt=''/>
                <Image className='images' src={slider2} alt=''/>
                <Image className='images' src={slider8} alt=''/>
                <Image className='images' src={slider5} alt=''/>
                <Image className='images' src={slider4} alt=''/>
                <Image className='images' src={slider15} alt=''/>
              </div>
              <div className='text-container  items-center gap-10 w-full'>
                <h1 className='md:text-5xl text-4xl  flex flex-col w-full md:flex-row items-center gap-5 md:leading-5 font-bold leading-1 text-white font-Inter leading-4'><p>Graduating</p> <p className='inline-block'> ClassYear book!</p></h1>
                <h1 className='text-white font-times italic text-center text-3xl md:text-5xl mt-8  md:mt-4'>UNN ECE Class 2022</h1>
                <div className='absolute z-20 flex items-center justify-center left-[40%] md:left-[40%] mt-20'>
                <Image className='relative' color='white' src={Elipse} alt=''/>
                <Image className='absolute arrowbtn' src={arrow} alt=''/>
              </div>
              </div>

            
            </div>
          </div>
          <Ourstory/>
          <section className='bg-[#1E1D22]'>
            <div className='flex flex-col items-center gap-[20px] py-10'>
            <h1 className='text-center font-Inter text-4xl font-extrabold text-white'>Things dey sup...</h1>
            <p className='text-justify text-[18px] font-Inter px-10 md:w-2/3  text-white'>This digital yearbook is meticulously crafted
             to reflect the spirit and diversity of our class. Flip through its virtual pages to relive the highlights 
             of our UNN days, from the first day we nervously stepped through Peace park Nsukka 
            to the unforgettable adventures we embarked upon.</p>
            </div>
          </section>
          <section>
            <Image className='black-and-white' src={groupPic} alt=''/>
          </section>
          <section>
          <div>
        

            </div>
          </section>
          <section className='bg-[#1E1D22] overflow-hidden'>
            <div className='flex flex-col items-center text-white'>
            <div className='p-5 flex gap-5 mt-5'>
              <QuoteCard/>
              <QuoteCard/>
              <QuoteCard/>
            </div>
            
                <Image src={maleemoji} alt=''/>
                <h1 className='font-Inter font-bold text-4xl'>Get to know us for we </h1>
           <span className='font-Inter text-xl font-normal'>But first, we give honour to whom it is due, meet with our Distinguished classrep and his babe 🤣...</span>
              <div className='flex gap-10 mt-10'>
              <Listcards image={Arinze} name='Arinze' nickname={'001'}/> 
              <Listcards image={Arinze} name='Arinze' nickname={'001'}/> 
              </div>
              <p>‘Watch your back!!!!!.... This is our class attendance list... arranged in alphabetical order not based on CGPA</p>
           
         <div className='max-w-full mt-12 lg:mt-8 mx-auto relative lg:pb-2'>
         <Swiper
     spaceBetween={10}
     slidesPerView={5}
     navigation={{prevEl: '.swiper-button-prev' , nextEl: '.swiper-button-next'}}
     pagination={{ clickable: true }}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
      
    >{
      gallery.map((item)=>(
       <SwiperSlide 
       key={item.id}
       className="">
          <div className='h-[350px] w-[250px]'>
        <Image  src={item.image}  alt=''/>
        <div className='bg-white text-black flex flex-col items-center'>
            <h3 className='font-bold font-Inter'>name</h3>
            <p className='italic font-thin'>Nickname</p>
        </div>
    </div>
       </SwiperSlide>
      ))
    }
    
      <div className='swiper-button-prev'></div>
      <div className='swiper-button-next'></div>
    </Swiper>
         </div>
           
              
             
            <Link className='py-3 px-5 mt-10  rounded-3xl font-semibold text-center w-[200px]  hover:bg-transparent hover:text-white  border' href={'/classlist'}>See full list here</Link>
            </div>

         <Footer/>
          </section>
    </div>
  )
}

export default Home