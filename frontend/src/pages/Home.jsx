import React, { useEffect, useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../components/Header';


function Home() {

  
    
    const navigate = useNavigate();
    const [files , setFiles] = useState();

    const HandelRecieverAction = () => {
      navigate('/Reciever');
    }
    const HandelSenderAction = () => {
      navigate('/Sender');
    }

  return (
    <div>
      <Header/>
      <div className={`flex gap-8 h-screen w-screen justify-between items-center p-64`}>
        <div className='text-yellow-500'>
            <p>
                <span className='text-6xl font-semibold max-md:hidden'>WELCOME TO THE ShareTo</span>
            </p>
        </div>


        <div className='flex gap-8'>
            <button onClick={HandelSenderAction} className='text-black shadow-white shadow-sm w-32 border-2 h-12 font-bold border-white rounded-md bg-yellow-500'>Send Data</button>
            <button onClick={HandelRecieverAction} className='text-black shadow-white shadow-sm w-32 border-2 h-12 font-bold border-white rounded-md bg-yellow-500'>Recieve Data</button>
        </div>
      </div>

    </div>
  )
}

export default Home
