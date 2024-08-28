import { Folder, HardDriveDownload, HardDriveUpload } from 'lucide-react'
import React from 'react'

const Card = (props) => {
  return (
    <div className='h-64 w-64 rounded-xl p-4 bg-[#abd6e9] text-black flex flex-col justify-between'>
        <div className='rounded-full bg-[#9ecee3] w-20 overflow-hidden flex justify-center items-center p-3 h-20'>
            {props.text == "Downloaded" ? <HardDriveUpload size={64} color="black" /> : null}
            {props.text == "Recieved" ? <HardDriveDownload size={64} color="black" /> : null}
            {props.text == "Used of 30 GB" ? <Folder size={64} color="black" /> : null}
        </div>
        <div>
        <p className='text-4xl font-bold '>0 GB</p>
        <span>{props.text}</span>
        </div>
    </div>
  )
}

export default Card
