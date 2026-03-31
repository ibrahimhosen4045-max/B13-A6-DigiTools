import React from 'react'
import bannerImg from '../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci'
import heroIcone from '../assets/heroIcone.png'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row container  mx-auto items-center justify-around gap-5 py-15 pt-25'>
      <div className='space-y-1.5 lg:space-y-3 flex-1 px-2 lg:px-0 flex flex-col items-center text-center md:items-start md:text-left'>
        <div className='py-2 px-4 font-medium bg-[#E1E7FF] inline-block rounded-full '>
          <span className='bg-linear-to-r bg-clip-text text-transparent from-[#4F39F6] to-[#9514FA] flex items-center gap-2'>
            <img src={heroIcone} alt="" />
            New: AI-Powered Tools Available
          </span>
        </div>
        <h1 className='text-[50px] lg:text-[72px] font-extrabold max-w-160'>Supercharge Your Digital Workflow</h1>
        <p className=' lg:text-lg text-[#627382] max-w-160'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
        <div className='flex items-center gap-3'>
          <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-[16px] hover:scale-105 transition py-5.5'>Explore Products</button>
          <button className="p-0.5 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:scale-105 transition cursor-pointer">
            <span className="block rounded-full px-6 py-2 bg-white">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold flex items-center gap-2">
             <CiPlay1 className='text-[#9514FA] text-lg' /> Watch Demo
            </span>
            </span>
            </button>
        </div>
      </div>
      <div className='flex-1 flex justify-end px-2 lg:px-0'>
        <img className=' object-cover ' src={bannerImg} alt="" />
      </div>
    </div>
  )
}

export default Hero
