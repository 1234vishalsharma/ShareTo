import { Circle, History, LayoutDashboard, Moon, Settings, Sun } from 'lucide-react'
import React, { useState } from 'react'

const LeftNav = () => {
    const [mode , setMode] = useState("light");
    const token = false
  if(token){ return (
    <div className="h-screen w-20 fixed left-0 top-0 flex flex-col justify-between items-center bg-black z-10 p-4">
        {/* Profile container */}
        <div className='overflow-hidden rounded-full h-16 w-full flex justify-center items-center'>
            <Circle className='hover:cursor-pointer' color="white" size={64}/>
        </div>

        {/* NAvigation options dashboard ,settings, history*/}
            <div className='flex flex-col gap-2 items-center justify-center'>
                <div className='hover:cursor-pointer h-16 w-full flex flex-col justify-center items-center gap-1'>
                    <LayoutDashboard color="#ffffff" />
                    <span className='text-sm text-white'>Dashboard</span>
                </div>

                <div className='hover:cursor-pointer h-16 w-full flex flex-col justify-center items-center gap-1'>
                    <History color="#ffffff" />
                    <span className='text-sm text-white'>History</span>
                </div>
                
                <div className='hover:cursor-pointer h-16 w-full flex flex-col justify-center items-center gap-1'>
                    <Settings color="#ffffff" />
                    <span className='text-sm text-white'>Settings</span>
                </div>
            </div>

        {/* light-mode / dark-mode and country option*/}
        <div className='flex flex-col gap-4 items-center justify-center'>
            <div>
                {mode == 'light' ? <Moon onClick={()=>setMode('dark')} className='hover:cursor-pointer' color="#ffffff" /> : <Sun onClick={() => setMode('light')} className='hover:cursor-pointer' color="#ffffff" />}
            </div>
            
            <div>
                <Circle color="#ffffff" size={30}/>
                <span className='text-sm text-white'>India</span>
            </div>
        </div>
    </div>
  )}
  else{
    return (<></>);
  }
}

export default LeftNav
