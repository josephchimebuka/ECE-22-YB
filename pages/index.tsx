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
import Multicarousel from '../components/Multicarousel'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface HomeProps{
  imageGroups: string[][]
}
const Home: React.FC<HomeProps> =()=> {
    const imageGroups=[
      [Arinze, Ebuka, Mbachi, Arinze],
      [Arinze, Ebuka, Mbachi, Arinze],
      [Arinze, Ebuka, Mbachi, Arinze],
      [Arinze, Ebuka, Mbachi, Arinze],
    ]

  return (
    //Landing page
    <div>
          <div className='h-screen md:h-[calc(100vh_+_68px)] min-w-full'>
            <div className='bg-[#1E1D22] flex justify-center text-white items-center gap-[48px] py-6'>
              <Link href={'/about'}>About</Link>
              <Link href={'/'}>Class list</Link>
              <Link href={'/'} className='text-2xl font-bold italic font-times'>ECE 022</Link>
              <Link href={'/'}>Gallery</Link>
              <Link href={'/'}>Trivia</Link>
            </div>
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
              <div className=' image-container2 relative top-20 '>
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
              <div className='text-container items-center'>
                <h1 className='text-5xl font-bold leading-1 text-white font-Inter inline-block leading-4'>Graduating ClassYear book!</h1>
                <h1 className='text-white font-times italic text-center text-5xl  mt-4'>UNN ECE Class 2022</h1>
                <div className='absolute z-20 flex items-center justify-center left-[40%] mt-20'>
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
            <p className='text-justify text-[18px] font-Inter w-2/3  text-white'>This digital yearbook is meticulously crafted
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
          <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> 
       <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
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
           
            <div className='image-carousel'>
               <Listcards image={Ebuka} name='Arinze' nickname={'001'}/> 
                <Listcards image={Arinze} name='Arinze' nickname={'001'}/> 
                 <Listcards image={Mbachi} name='Arinze' nickname={'001'}/> 
                  <Listcards image={Ebuka} name='Arinze' nickname={'001'}/> 
                 <Listcards image={Mbachi} name='Arinze' nickname={'001'}/> 
                  <Listcards image={Ebuka} name='Arinze' nickname={'001'}/> 
                 <Listcards image={Mbachi} name='Arinze' nickname={'001'}/> 
                  <Listcards image={Ebuka} name='Arinze' nickname={'001'}/> 
                  
            </div>
            <div className='image-carousel'>
            <Multicarousel imageGroups={imageGroups}/>
            
            </div>
                  
            <Link className='py-3 px-5 mt-10 border-none rounded-3xl font-semibold text-center w-[200px] bg-white text-black hover:bg-transparent hover:text-white hover:border-white' href={'/'}>See full list here</Link>
            </div>

            {/* Footer */}
            <div className='flex px-28 py-14 text-white'>
              <div className='flex-[30%]'>
                <h2 className='text-xl mr-10'>Electronic Engineering Department <br /> 022’ class <br /> University of Nigeria Nsukka <br /> Enugu Stateb <br /> Nigeria</h2>
              </div>
              <div className='flex flex-[70%] justify-between'>
                <div className='flex  flex-col gap-2'>
                  <h3 className='font-semibold'>Class Info</h3>
                  <Link className='font-light font-Inter' href={'/'}>Our story </Link>
                  <Link className='font-light font-Inter' href={'/'}>Dey play</Link>
                  <Link className='font-light font-Inter' href={'/'}>Photos Choke</Link>
                  <Link className='font-light font-Inter' href={'/'}>Instagram</Link>
                </div>

                <div className='flex flex-col gap-2'>
                  <h3 className='font-semibold'>Current Achievements</h3>
                  <Link className='font-light font-Inter' href={'/'}>Marriages/Children</Link>
                  <Link className='font-light font-Inter' href={'/'}>Companies</Link>
                  <Link className='font-light font-Inter' href={'/'}>Awards</Link>
                </div>

                <div className='flex flex-col gap-2 '>
                  <h3>Contact Us</h3>
                  <Link className='font-light font-Inter' href={'/'}>Info@ece22.com</Link>
                  <Link className='font-light font-Inter' href={'/'}>Telp: +234 9030503285</Link>
                </div>
              </div>
            </div>

            <hr />
            <p className='text-center py-6 text-white'>Made with 💛💛💚💙 </p>
          </section>
    </div>
  )
}

export default Home