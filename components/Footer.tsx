import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
           {/* Footer */}
           <div className='md:flex md:flex-row px-10 md:px-28 py-14 text-white'>
              <div className='flex-[30%]'>
                <h2 className='text-xl mr-10 mb-5'>Electronic Engineering Department <br /> 022’ class <br /> University of Nigeria Nsukka <br /> Enugu State <br /> Nigeria</h2>
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
    </div>
  )
}

export default Footer