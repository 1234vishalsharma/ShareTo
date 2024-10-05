import { FileCheck } from 'lucide-react'
import React from 'react'

const File = ({Number , FileName , FileSize}) => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center border border-[#edf2f4] rounded-xl w-56 h-56 overflow-hidden'>
        <div className='flex gap-2 justify-center items-center'>
            <span className='text-2xl'>{Number}.</span>
            <FileCheck size={80}/>
        </div>
        <div className='flex flex-col justify-center items-center w-full'>
                <span className='text-md'>File Name : {FileName}</span>
                <span className='text-md'>File Size : {FileSize}</span>
        </div>
    </div>
  )
}

export default File
