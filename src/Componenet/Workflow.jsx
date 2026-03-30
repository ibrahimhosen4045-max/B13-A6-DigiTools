import React from 'react'

const Workflow = () => {
  return (
    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
      <div className='space-y-4 text-center flex flex-col items-center py-30'>
        <h1 className='text-[40px] font-extrabold text-white'>Ready to Transform Your Workflow?</h1>
        <p className='text-white/90'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
        <div className='flex gap-3 pt-6 '>
            <button className='btn rounded-full'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-semibold bg-clip-text text-transparent'>Explore Products</span></button>
            <button className='btn rounded-full bg-transparent text-white '>Explore Products</button>
        </div>
        <p className='text-white/90'>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  )
}

export default Workflow
