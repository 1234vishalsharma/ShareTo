import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import {useNavigate} from 'react-router-dom';


function Home() {

    const title = useRef(null)
    const one = useRef(null)
    const two = useRef(null)
    const three = useRef(null)
    
    const navigate = useNavigate();
    const [files , setFiles] = useState();

    
    const GoToLogin = () => {
      navigate('/Login');
    }
    const GoToSignup = () => {
      navigate('/Signup');
    }

    const HandelRecieverAction = () => {
      navigate('/Reciever');
    }
    const HandelSenderAction = () => {
      navigate('/Sender');
    }

    useEffect(() => {
        // Create a GSAP timeline
        const tl = gsap.timeline();
        // Animate the lines from the left to the center of the page
        tl.fromTo(
          [title.current, one.current, two.current , three.current],
          { y: '-200%' },   // Start from outside the left of the viewport
          { y: '0%', duration: 2, stagger: 0.3, ease: 'power3.out' } // End in the center with staggered delay
        )}, []);

  return (
    <div>
      <header className='absolute top-4 flex justify-between items-center w-screen pl-32 pr-32'>
        <span ref={title} className='text-yellow-500 text-4xl font-bold font-serif'>ShareTo</span>
        <div className='flex gap-10 max-md:hidden'>
            <span ref={one} onClick={GoToLogin} className='text-yellow-500 text-2xl cursor-pointer font-serif'>Login</span>
            <span ref={two} onClick={GoToSignup} className='text-yellow-500 text-2xl cursor-pointer font-serif'>Signup</span>
            <span ref={three} className='text-yellow-500 text-2xl cursor-pointer font-serif'>Support</span>
        </div>
      </header>
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
