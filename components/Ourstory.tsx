import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import head from '../assets/23 6.svg'


const Ourstory = () => {
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
  return (
    <div>
    <section>
        <div className='flex flex-col items-center gap-8 pt-8 fadeInText' ref={textRef}>
          <Image src={head} alt=''/>
        <h1 className='text-[#4d4d4d] font-times font-bold leading-10 text-4xl italic'>Our story choke oo</h1>
        <p className='font-Inter font-normal text-[16px] text-color px-10 md:w-2/3 leading-10'>This page serves as a testament to our shared experiences, the bonds weve forged, and the friendships that will endure beyond these hallowed halls. <br/>
                  So, join us in celebrating the culmination of our academic journey, our accomplishments, reflect on our growth, and cherish the memories that will forever hold a special place in our hearts. <br/>
                  Welcome to the UNN hhECE 022’ 
                  Graduating Class Yearbook website. Were proud of what weve achieved, and were excited to
                   share this milestone with you. Heres to the memories weve made and the 
                  bright futures that lie ahead!
                  </p>
                  <p ></p>
                  <Link className='font-bold underline mb-5' href={'/'}>See full story here</Link>
        </div>
    </section></div>
  )
}

export default Ourstory