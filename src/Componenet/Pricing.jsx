import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Pricing = () => {
  return (
    <div className=' py-30'>
          <div className='text-center space-y-3 pb-10 px-6'>
            <h1 className='text-3xl md:text-5xl font-extrabold'>Simple, Transparent Pricing</h1>
            <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 container mx-auto px-2 md:px-0'>
            <div className='bg-white rounded-xl shadow-md p-6  space-y-6 flex flex-col'>
             <div>
                <h1 className='text-2xl font-bold'>Starter</h1>
                <p className='text-[#627382]'>Perfect for getting started</p>
             </div>
             <h1 className='text-lg text-[#627382]'><span className='text-[34px] text-black font-bold'>$0</span>/Month</h1>
             <div className='space-y-1.5  '>
                <h2 className='flex items-center gap-2'><FaCheck className='text-green-500'/> Access to 10 free tools</h2>
                <h2 className='flex items-center gap-2'><FaCheck className='text-green-500'/> Basic templates</h2>
                <h2 className='flex items-center gap-2'><FaCheck className='text-green-500'/> Community support</h2>
                <h2 className='flex items-center gap-2'><FaCheck className='text-green-500'/> 1 project per month</h2>
             </div>
             <div className='flex items-end flex-1'>
                <button className='btn border-none w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Get Started Free</button>
             </div>
            </div>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-xl shadow-md p-6 space-y-6 relative'>
             <div>
                <h1 className='text-2xl font-bold'>Pro</h1>
                <p className='text-[#ced7df]'>Best for professionals</p>
             </div>
             <h1 className='text-lg text-[#ced7df]'><span className='text-[34px] text-white font-bold'>$29</span>/month</h1>
             <div className='space-y-1.5'>
                <h2 className='flex items-center gap-2'><FaCheck className='text-white'/> Access to all premium tools</h2>
                <h2 className='flex items-center gap-2'><FaCheck className='text-white'/> Unlimited templates</h2>
                <h2 className='flex items-center gap-2'><FaCheck className='text-white'/> Priority support</h2>
                <h2 className='flex items-center gap-2'><FaCheck className='text-white'/> Unlimited projects</h2>
                <h2 className='flex items-center gap-2'><FaCheck className='text-white'/> Cloud sync</h2>
                <h2 className='flex items-center gap-2'><FaCheck className='text-white'/> Advanced analytics</h2>
             </div>
             <button className='py-2 px-3 absolute -top-4 -translate-x-[50%] left-[50%]  text-sm text-red-500 bg-[#FEF3C6] rounded-full'>Most Popular</button>
             <button className='btn border-none w-full rounded-full '><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Start Pro Trial</span></button>
             
            </div>
            <div className='bg-white rounded-xl shadow-md p-6 space-y-6'>
             <div>
                <h1 className='text-2xl font-bold'>Enterprise</h1>
                <p className='text-[#627382]'>For teams and businesses</p>
             </div>
             <h1 className='text-lg text-[#627382]'><span className='text-[34px] text-black font-bold'>$99</span>/month</h1>
             <div className='space-y-1.5'>
                <h2 className='flex items-center gap-2'><FaCheck className='text-green-500'/> Everything in Pro</h2>
                <h2 className='flex items-center gap-2'><FaCheck className='text-green-500'/> Team collaboration</h2>
                <h2 className='flex items-center gap-2'><FaCheck className='text-green-500'/> Custom integrations</h2>
                <h2 className='flex items-center gap-2'><FaCheck className='text-green-500'/> Dedicated support</h2>
                <h2 className='flex items-center gap-2'><FaCheck className='text-green-500'/> SLA guarantee</h2>
                <h2 className='flex items-center gap-2'><FaCheck className='text-green-500'/> Custom branding</h2>
             </div>
             <button className='btn border-none w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Contact Sales</button>
            </div>
            
          </div>
        </div>
  )
}

export default Pricing
