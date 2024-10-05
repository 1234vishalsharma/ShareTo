import { FolderOpen, RadioReceiver } from 'lucide-react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import Card from '../components/Card'
import File from '../components/File';

const Dashboard = () => {
  const [files , setFiles] = useState([]);
  const SelectFiles = () => { 
    document.getElementById('selectFiles').click();
  }
  const recieveData = () => {
    alert("Todo next part to be build");
  }
 useEffect(()=>{
  console.log("Files are: " ,files);
 }, [files]);
  return (
    <div className='text-white fixed w-11/12 top-20 left-24 mb-32 p-4 bg-[#151515] rounded-2xl'>
      <span className='text-2xl pl-5'>Welcome To ShareTo...</span>
      <div className='flex items-center gap-3 pl-12 flex-wrap mt-5'>
          <div className='flex gap-3 items-center justify-center max-md:hidden'>
            <Card text="Downloaded"/>
            <Card text="Recieved"/>
            <Card text="Used of 30 GB"/>
          </div>
          <div className='flex gap-3 items-center justify-center'>
              <div className='h-56 w-56 rounded-xl p-4 bg-[#abd6e9] text-black flex flex-col justify-between'>
                  <FolderOpen size={64} color="black" />
                  <div>
                  <p className='text-2xl font-semibold mb-4'>Browse Files</p>
                  <input id='selectFiles' type="file" onChange={(e)=>setFiles(Array.from(e.target.files))} multiple hidden />
                  <button onClick={SelectFiles} className='p-2 w-full h-10 border-2 border-black rounded-full hover:cursor-pointer hover:bg-inherit hover:text-black bg-[#151515] text-white'>Go</button>
                  </div>
              </div>
              <div className='h-56 w-56 rounded-xl p-4 bg-[#abd6e9] text-black flex flex-col justify-between'>
                  <RadioReceiver  size={64} color="black" />
                  <div>
                  <p className='text-2xl font-semibold mb-4'>Recieve Files</p>
                  <button onClick={recieveData} className='p-2 w-full h-10 border-2 border-black rounded-full hover:cursor-pointer hover:bg-[#151515] hover:text-white'>Recieve</button>
                  </div>
              </div>
              
          </div>
      </div>
      
       <div className='flex gap-3 max-md:hidden w-full pl-12 h-64 rounded-2xl mt-8 mb-1 overflow-y-auto'>
        {
          files && files.map((file,key)=>{
            console.log("loop data: " , file , key);
            if(key < 5)  return (
              <File Number={key+1} FileName={file.name} FileSize={file.size}/>
            ) 
          })
        }
      </div>
    </div>
  )
}

export default Dashboard
