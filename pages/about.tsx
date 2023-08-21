import React from 'react'
import Image from 'next/image'
import head from '../assets/23 6.svg'
import Link from 'next/link'

const about = () => {
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
              <h2>It all began when UNN released it's admission</h2>
          </section>
    </div>
  )
}

export default about