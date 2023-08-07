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
import head from '../assets/23 6.svg'
import groupPic from '../assets/DYIO3016 2.jpg'
import Elipse from '../assets/Ellipse 12.svg'
import arrow from '../assets/ECE 022 YB/Arrows/Arrow Ledft 1 - 24px.svg'

export default function Home() {
  return (
    //Landing page
    <div>
          <div className='h-screen md:h-[calc(100vh_+_68px)] min-w-full'>
            <div className='bg-[#1E1D22] flex justify-center text-white items-center gap-[48px] py-6'>
              <Link href={'/'}>About</Link>
              <Link href={'/'}>Class list</Link>
              <Link href={'/'} className='text-2xl font-bold italic font-times'>ECE 022</Link>
              <Link href={'/'}>Gallery</Link>
              <Link href={'/'}>Trivia</Link>
            </div>
            <div className='bg-black h-[90vh] relative overflow-hidden'>
              <div className="slanted-bg"></div>
              <div className='flex md:overflow-hidden h-52 gap-10 my-5 -rotate-6 relative top-9'>
                <Image src={slider1}/>
                <Image src={slider2}/>
                <Image src={slider3}/>
                <Image src={slider4}/>
                <Image src={slider5}/>
              </div>
              <div className='flex md:overflow-hidden h-52 gap-10 -rotate-6 relative top-20 '>
                <Image src={slider1}/>
                <Image src={slider3}/>
                <Image src={slider5}/>
                <Image src={slider4}/>
                <Image src={slider2}/>
              </div>
              <div className='text-container items-center'>
                <h1 className='text-5xl font-bold leading-1 text-white font-Inter inline-block leading-4'>Graduating ClassYear book!</h1>
                <h1 className='text-white font-times italic text-center text-5xl  mt-4'>UNN ECE Class 2022</h1>
              </div>

              <div className='absolute z-20 flex items-center justify-center left-[45%]'>
                <Image className='relative' color='white' src={Elipse}/>
                <Image className='absolute arrowbtn' src={arrow}/>
              </div>
            </div>
          </div>
          <section>
              <div className='flex flex-col items-center gap-8'>
                <Image src={head}/>
              <h1 className='text-[#4d4d4d] font-times font-bold leading-10 text-3xl '>Our story choke oo</h1>
              <p className='font-Inter font-normal text-[16px] text-color w-2/3 leading-10'>This page serves as a testament to our shared experiences, the bonds we've forged, and the friendships that will endure beyond these hallowed halls. <br/>
                        So, join us in celebrating the culmination of our academic journey, our accomplishments, reflect on our growth, and cherish the memories that will forever hold a special place in our hearts. <br/>
                        Welcome to the UNN hhECE 022’ 
                        Graduating Class Yearbook website. We're proud of what we've achieved, and we're excited to
                         share this milestone with you. Here's to the memories we've made and the 
                        bright futures that lie ahead!
                        </p>
                        <p ></p>
                        <Link className='font-bold underline mb-5' href={'/'}>See full story here</Link>
              </div>
          </section>
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
            <Image src={groupPic}/>
          </section>
    </div>
  )
}
