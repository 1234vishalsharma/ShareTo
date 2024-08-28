import React from 'react'
import {CircleHelp, Search} from 'lucide-react';
const Header = () => {
  return (
    <div className='w-screen fixed top-0 pl-32 h-16 bg-black text-white flex justify-between items-center z-10 p-6 pr-16'>
      <div className='flex items-center rounded-lg'>
        <Search/>
        <input className='bg-black ml-2 rounded-md p-1 outline-none border-none' type="text" placeholder="Search..." />
      </div>
      <div className='flex justify-center items-center gap-2'>
        <CircleHelp color='white' size={20} />
        <span className='text-md text-white'>Help & Support</span>
      </div>
    </div>
  )
}

export default Header
