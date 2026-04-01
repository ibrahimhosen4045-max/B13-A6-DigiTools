import React from 'react'
import userImage from '../assets/user.png'
import userImage2 from '../assets/package.png'
import userImage3 from '../assets/rocket.png'

const ToolsSec = () => {
  return (
    <div className='bg-[#F9FAFC] py-30'>
      <div className='text-center space-y-3 pb-10 px-6'>
        <h1 className='text-3xl md:text-5xl font-extrabold'>Get Started in 3 Steps</h1>
        <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 w-11/12 mx-auto px-2 md:px-0'>
        <div className='bg-white rounded-xl shadow-md py-22 px-6 relative text-center'>
            <div className=' absolute top-3 right-3'>
                <button className='px-2.5 py-1.75 text-sm rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>01</button>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <div className='p-5 rounded-full bg-[#E1E7FF]'>
                    <img src={userImage} alt="" />
                </div>
                <h1 className='text-2xl font-bold '>Create Account</h1>
                <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-md py-22 px-6 relative text-center'>
            <div className=' absolute top-3 right-3'>
                <button className='px-2.5 py-1.75 text-sm rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>02</button>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <div className='p-5 rounded-full bg-[#E1E7FF]'>
                    <img src={userImage2} alt="" />
                </div>
                <h1 className='text-2xl font-bold '>Choose Products</h1>
                <p className='text-[#627382]'>Browse our catalog and select the toolsthat fit your needs</p>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-md py-22 px-6 relative text-center'>
            <div className=' absolute top-3 right-3'>
                <button className='px-2.5 py-1.75 text-sm rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>03</button>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <div className='p-5 rounded-full bg-[#E1E7FF]'>
                    <img src={userImage3} alt="" />
                </div>
                <h1 className='text-2xl font-bold '>Start Creating</h1>
                <p className='text-[#627382]'>Download and start using your premium tools immediately</p>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default ToolsSec
