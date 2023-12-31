import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import head from '../assets/23 6.svg'
import Link from 'next/link'
import List from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/image 18.png'
import pics1 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/Rectangle 1082.png'
import pics2 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/Rectangle 1083.png'
import pics3 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/Rectangle 1085.png'
import pics4 from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/Rectangle 1086.png'
import  {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from '../components/Footer'
import Ourstory from '../components/Ourstory'
import TheHeader from '../components/TheHeader'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';


const About = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const textRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (textRef.current) {
            textRef.current.style.opacity = '1';
            textRef.current.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        }
      });
    }, { threshold: 0.5 });

    if (textRef.current) {
      textRef.current.style.transform = 'translateY(100px)'; // Initial slide-down effect
      observer.observe(textRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
  const Firstyear=[
    {id:1, image: pics1},
    {id:2, image: pics2},
    {id:3, image: pics1},
    {id:4, image: pics2}
  ]
  const MatricPics = [
    {id:1, image: pics3},
    {id:2, image: pics4},
    {id:3, image: pics1},
    {id:4, image: pics2}
  ]


  return (
    <div className='h-auto w-[100vw] md:w-auto overflow-hidden'>
       <TheHeader/>

<section>
             <Ourstory/>
          </section>

          <section className='bg-[#1E1D22]'>
            <div className='fadeInText' ref={textRef} >

             <div className='flex flex-col items-center md:py-10 md:gap-10 p-10'>
              <p className='fadeInText' ref={textRef}></p>
             <p className='font-Inter text-white text-3xl  md:text-[46px] items-center font-bold leading-10 mb-5 text-center'>It all began on October the 12th, 2017 when UNN released her 2017/18 Merit Admission list...</p>
              <p className='font-Inter font-normal text-[16px]  text-white mb-5 text-justify align-middle'>Smart guys like Ame, Obiechina, Ifesinachi, Lawrence , etc were topping the list that year.... God when?  </p>
              <Image src={List} alt=''/>
              <p className='font-Inter text-white text-3xl md:text-[46px] items-center font-bold leading-10 mb-5'>Then the battle began ...</p>
              <p className='font-Inter font-normal text-[16px]  text-white mb-5 text-justify align-middle'>Smart guys like Ame, Obiechina, Ifesinachi, Lawrence , etc were topping the list that year.... God when?  </p>
             </div>
            </div>

             <div className='max-w-full mt-12 lg:mt-8 mx-auto relative lg:pb-2'>
              <Swiper
     spaceBetween={10}
     breakpoints={{
      // When window width is >= 640px
      640: {
        slidesPerView: 2,
      },
      // When window width is >= 1280px
      1280: {
        slidesPerView: 3,
      },
    }}
     navigation={{prevEl: '.swiper-button-prev' , nextEl: '.swiper-button-next'}}
     pagination={{ clickable: true }}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
      
    >{
      Firstyear.map((item)=>(
       <SwiperSlide 
       key={item.id}
       className="flex overflow-hidden gap-20">
          <div className='h-[408px] w-[500px]'>
        <Image  src={item.image}  alt=''/>
    </div>
       </SwiperSlide>
      ))
    }
    
      <div className='swiper-button-prev'></div>
      <div className='swiper-button-next'></div>
    </Swiper>
              </div>
                <div className='text-center gap-10 flex flex-col mt-10 mb-14'>
                <p className='font-Inter text-white text-3xl md:text-[46px] items-center font-bold leading-10 text-center'>10th February, 2018 ... we Matriculated</p>
              <p className='font-Inter font-normal text-[16px]  text-white text-center'>Smart guys like Ame, Obiechina, Ifesinachi, Lawrence , etc were topping the list that year.... God when?  </p>

                </div>
            
              <div className='max-w-full mt-12 md:mt-24 md:mb-48  mx-auto relative lg:pb-2'>
              <Swiper
                spaceBetween={10}
                breakpoints={{
                 // When window width is >= 640px
                 640: {
                   slidesPerView: 2,
                 },
                 // When window width is >= 1280px
                 1280: {
                   slidesPerView: 3,
                 },
               }}
                navigation={{prevEl: '.swiper-button-prev' , nextEl: '.swiper-button-next'}}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                 
    >{
      MatricPics.map((item)=>(
       <SwiperSlide 
       key={item.id}
       className="flex overflow-hidden gap-20">
          <div className='h-[408px] w-[500px]'>
        <Image  src={item.image}  alt=''/>
    </div>
       </SwiperSlide>
      ))
    }
    
      <div className='swiper-button-prev'></div>
      <div className='swiper-button-next'></div>
    </Swiper>
              </div>

              <Footer/>
          </section>
    </div>
  )
}

export default About