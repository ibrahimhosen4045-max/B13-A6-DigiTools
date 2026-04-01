import React from 'react'

const RattingSec = () => {
  return (
    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] my-5 md:my-10'>
      <div className=' grid grid-cols-3 container mx-auto text-center py-13'>
        <div className='border-r border-white/70'>
            <h1 className='text-[35px] md:text-[60px] font-extrabold text-white'>50K+</h1>
            <p className='md:text-2xl font-medium text-white/70'>Active Users</p>
        </div>
        <div className='border-r border-white/70'>
            <h1 className='text-[35px] md:text-[60px] font-extrabold text-white'>200K+</h1>
            <p className='md:text-2xl font-medium text-white'>Premium Tools</p>
        </div>
        <div  >
            <h1 className='text-[35px] md:text-[60px] font-extrabold text-white'>4.9</h1>
            <p className='md:text-2xl font-medium text-white'>Rating</p>
        </div>
      </div>
    </div>
  )
}

export default RattingSec
