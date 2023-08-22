import React from 'react'
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


const about = () => {
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
    <div>
          <div className='bg-[#1E1D22] flex justify-center text-white items-center gap-[48px] py-6'>
              <Link href={'/about'}>About</Link>
              <Link href={'/'}>Class list</Link>
              <Link href={'/'} className='text-2xl font-bold italic font-times'>ECE 022</Link>
              <Link href={'/'}>Gallery</Link>
              <Link href={'/'}>Trivia</Link>
            </div>

<section>
              <div className='flex flex-col items-center gap-8'>
                <Image src={head} alt=''/>
              <h1 className='text-[#4d4d4d] font-times font-bold leading-10 text-3xl '>Our story choke oo</h1>
              <p className='font-Inter font-normal text-[16px] text-color w-2/3 leading-10'>This page serves as a testament to our shared experiences, the bonds weve forged, and the friendships that will endure beyond these hallowed halls. <br/>
                        So, join us in celebrating the culmination of our academic journey, our accomplishments, reflect on our growth, and cherish the memories that will forever hold a special place in our hearts. <br/>
                        Welcome to the UNN hhECE 022’ 
                        Graduating Class Yearbook website. Were proud of what weve achieved, and were excited to
                         share this milestone with you. Heres to the memories weve made and the 
                        bright futures that lie ahead!
                        </p>
                        <p ></p>
                        <Link className='font-bold underline mb-5' href={'/'}>See full story here</Link>
              </div>
          </section>

          <section className='bg-[#1E1D22]'>
             <div className='flex flex-col items-center md:py-10 md:gap-10'>
             <p className='font-Inter text-white text-[46px] items-center font-bold leading-10 text-center'>It all began on October the 12th, 2017 when UNN <br /> released her 2017/18 Merit Admission list...</p>
              <p className='font-Inter font-normal text-[16px]  text-white'>Smart guys like Ame, Obiechina, Ifesinachi, Lawrence , etc were topping the list that year.... God when?  </p>
              <Image src={List} alt=''/>
              <p className='font-Inter text-white text-[46px] items-center font-bold leading-10'>Then the battle began ...</p>
             
             </div>

             <div className='max-w-full mt-12 lg:mt-8 mx-auto relative lg:pb-2'>
              <Swiper
     spaceBetween={10}
     slidesPerView={3}
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
                <p className='font-Inter text-white text-[46px] items-center font-bold leading-10 text-center'>10th February, 2018 ... we Matriculated</p>
              <p className='font-Inter font-normal text-[16px]  text-white text-center'>Smart guys like Ame, Obiechina, Ifesinachi, Lawrence , etc were topping the list that year.... God when?  </p>

                </div>
            
              <div className='max-w-full mt-12 md:mt-24 md:mb-48  mx-auto relative lg:pb-2'>
              <Swiper
                spaceBetween={10}
                slidesPerView={3}
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

export default about