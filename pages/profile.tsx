import React from 'react'
import TheHeader from '../components/TheHeader'
import Image from 'next/image'
import Mbachi from '../assets/WEB ASSETS-20230806T213952Z-001/WEB ASSETS/image 16.png'
import Link from 'next/link'
import Footer from '../components/Footer'
import {CiFacebook} from 'react-icons/ci'
import {FaLinkedin,} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {PiCaretDownBold} from 'react-icons/pi'

const profile = () => {
  return (
    <div className='w-auto md:h-[100%] overflow-hidden'>
      <TheHeader/>
      <div className='flex flex-col'>

      <div className='bg-[rgb(30,29,34)] text px-10 md:px-[400px] md:relative'>
        <h2 className='text-4xl text-white'>Joseph Chimebuka <span className='ml-10 text-[#8A8A8A] text-[20px] float-right cursor-pointer'><PiCaretDownBold/></span></h2>
        <h4 className='text-[#8A8A8A] text-[20px] italic'>Jojo </h4>
        <div className='text-white flex text-[20px] gap-2 py-3'><CiFacebook/> <FaLinkedin/>  <FiInstagram/></div>
      </div>
      <div className='md:flex md:justify-between'>
        <div className='w-100vw h-[364px] md:w-[278px] md:h-[363px] md:absolute top-[150px] left-[100px]'>
          <Image className='image-body' src={Mbachi} alt=''/>
        </div>
        <div className='mt-16 px-10 md:flex md:flex-col md:gap-5 md:absolute md:left-[400px]'>
          <div>
          <p className='text-[#1E1D22] font-Inter text-[14px] font-bold'>Biodata</p>
          </div>
          <div className='md:grid md:grid-cols-3 md:gap-[50px]'>
          <p className='flex flex-col text-[14px] gap-2 mb-5'>
            <span className='text-[#1E1D22] font-Inter text-[14px] font-normal'>First name</span>
            <span className='text-[#8A8A8A] text-Inter'>Chiagozie</span>
          </p>
          <p className='flex flex-col text-[14px] gap-2 mb-2'>
            <span className='text-[#1E1D22] font-Inter text-[14px] font-normal'>First name</span>
            <span className='text-[#8A8A8A] text-Inter'>Chiagozie</span>
          </p>
          <p className='flex flex-col text-[14px] gap-2 mb-5'>
            <span className='text-[#1E1D22] font-Inter text-[14px] font-normal'>First name</span>
            <span className='text-[#8A8A8A] text-Inter'>Chiagozie</span>
          </p>
          <p className='flex flex-col text-[14px] gap-2 mb-5'>
            <span className='text-[#1E1D22] font-Inter text-[14px] font-normal'>First name</span>
            <span className='text-[#8A8A8A] text-Inter'>Chiagozie</span>
          </p>
          <p className='flex flex-col text-[14px] gap-2 mb-5'>
            <span className='text-[#1E1D22] font-Inter text-[14px] font-normal'>First name</span>
            <span className='text-[#8A8A8A] text-Inter'>Chiagozie</span>
          </p>
          <p className='flex flex-col text-[14px] gap-2 mb-5'>
            <span className='text-[#1E1D22] font-Inter text-[14px] font-normal'>First name</span>
            <span className='text-[#8A8A8A] text-Inter'>Chiagozie</span>
          </p>
          </div>
          
          
        </div>
      </div>
      <div className='md:absolute md:top-[600px] md:h-auto'>
      <div className='hidden md:block mt-5 px-24'>
          <h1 className='font-Inter font-bold text-3xl'>Can we meet you??</h1>
          <p className='font-Inter text-[#9A9A9A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores qui eligendi rerum, reiciendis harum fugiat ipsam nostrum dolore! Magnam et dolorum quis 
            voluptatum consequuntur facilis iste distinctio accusantium eaque excepturi!</p>
        </div>
      <div className='flex items-center justify-center align-middle p-5 mx-auto'>
        <iframe
          className='md:w-[800px] md:mx-auto'
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
        <div className='mt-5 px-10 md:hidden'>
          <h1 className='font-Inter font-bold text-3xl '>Can we meet you??</h1>
          <p className='font-Inter text-[#9A9A9A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores qui eligendi rerum, reiciendis harum fugiat ipsam nostrum dolore! Magnam et dolorum quis 
            voluptatum consequuntur facilis iste distinctio accusantium eaque excepturi!</p>
        </div>

        <div className='mt-5 px-10 md:px-24'>
          <h1 className='font-Inter font-bold text-3xl'>Why Electronic Engineering? What else?</h1>
          <p className='font-Inter text-[#9A9A9A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores qui eligendi rerum, reiciendis harum fugiat ipsam nostrum dolore! Magnam et dolorum quis 
            voluptatum consequuntur facilis iste distinctio accusantium eaque excepturi!</p>
        </div>
        <div className='mt-5 px-10 md:px-24'>
          <h1 className='font-Inter font-bold text-3xl'>What has been the highlight of your academics,
          What moment defined you?</h1>
          <p className='mb-5 font-Inter text-[#9A9A9A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores qui eligendi rerum, reiciendis harum fugiat ipsam nostrum dolore! Magnam et dolorum quis 
            voluptatum consequuntur facilis iste distinctio accusantium eaque excepturi!</p>
          
        </div>
            <div className='flex items-center mx-auto justify-center'>
            <Link className='py-3 px-5   rounded-3xl font-semibold text-center w-[200px]  hover:bg-transparent align-middle border-profile' href={'/classlist'}>Go back to classlist</Link>
        
            </div>
   
     <div className='bg-[#1E1D22] mt-5'>
     <Footer/>
      </div> 
      </div>
        
      </div>
    </div>
  )
}

export default profile