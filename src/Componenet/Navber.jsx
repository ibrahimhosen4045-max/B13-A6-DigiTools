import React from 'react'
import userLogo from '../assets/user.png'

const Navber = ({data}) => {
  const total = data.reduce((sum, item) => sum + item.price , 0)
    const meno = (
        <>
            <li className='hover:text-purple-800'>Products</li>
            <li className='hover:text-purple-800'>Features</li>
            <li className='hover:text-purple-800'>Pricing</li>
            <li className='hover:text-purple-800'>Testimonials</li>
            <li className='hover:text-purple-800'>FAQ</li>
        </>
    )

  return (
    <div className="navbar bg-white shadow-sm fixed z-50 ">
      <div className="flex justify-between container mx-auto">
        <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {meno}
      </ul>
    </div>
    <h1 className='text-3xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1>
  </div>
  <div className=' navbar-center '>
    <ul className=' gap-4 font-semibold hidden lg:flex cursor-pointer '>
        {meno}
    </ul>
  </div>
        <div className=' navbar-end'>
            <div className="flex-none flex  gap-1 items-center">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                        {data.length > 0 && <span className="badge badge-sm indicator-item text-green-800 bg-green-100">{data.length}</span>}
                    </div>
                </div>
                <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                    <div className="card-body">
                        <span className="text-lg font-bold">{data.length} Items</span>
                        <span className="text-info">Total: ${total}</span>
                  
                    </div>
                </div>
            </div>
            <h1 className='text-[16px] font-semibold btn bg-none bg-white border-none hidden md:flex'>Login</h1>

            <button className='btn text-[16px] font-semibold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:scale-105 transition duration-300 hidden md:flex'>Get Started</button>

            <div className="dropdown dropdown-end flex md:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={userLogo} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-10 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Get Started</a></li>
        <li><a>Login</a></li>
      </ul>
    </div>
            
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Navber
