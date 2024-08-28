import { FolderOpen, RadioReceiver } from 'lucide-react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import Card from '../components/Card'

const Dashboard = () => {
  const [files , setFiles] = useState([]);
  const SelectFiles = () => { 
    document.getElementById('selectFiles').click();
  }
  const recieveData = () => {
    alert("Todo next part to be build");
  }
 useEffect(()=>{
  console.log(files);
 }, [files]);
  return (
    <div className='text-white fixed w-11/12 top-20 left-24 p-6 overflow-x-auto bg-[#151515] rounded-2xl'>
      <div className='flex items-center w-full gap-1 justify-center'>
          <Card text="Downloaded"/>
          <Card text="Recieved"/>
          <Card text="Used of 30 GB"/>
          <div className='h-64 w-64 rounded-xl p-4 bg-[#abd6e9] text-black flex flex-col justify-between'>
              <FolderOpen size={64} color="black" />
              <div>
              <p className='text-2xl font-semibold mb-4'>Browse Files</p>
              <input id='selectFiles' type="file" onChange={(e)=>setFiles(e.target.files)} multiple hidden />
              <button onClick={SelectFiles} className='p-2 w-full h-10 border border-black rounded-full hover:cursor-pointer hover:bg-[#151515] hover:text-white'>Go</button>
              </div>
          </div>
          <div className='h-64 w-64 rounded-xl p-4 bg-[#abd6e9] text-black flex flex-col justify-between'>
              <RadioReceiver  size={64} color="black" />
              <div>
              <p className='text-2xl font-semibold mb-4'>Recieve Files</p>
              <button onClick={recieveData} className='p-2 w-full h-10 border border-black rounded-full hover:cursor-pointer hover:bg-[#151515] hover:text-white'>Recieve</button>
              </div>
          </div>
          
      </div>
      
      <div className='w-11/12 h-64 rounded-2xl mt-8 mb-1'>

      </div>
    </div>
  )
}

export default Dashboard
