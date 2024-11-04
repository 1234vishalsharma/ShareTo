import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const title = useRef(null)
    const one = useRef(null)
    const two = useRef(null)
    const three = useRef(null)
    const navigate = useNavigate();    
    const GoToLogin = () => {
        navigate('/Login');
      }
      const GoToSignup = () => {
        navigate('/Signup');
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
    <header className='absolute top-4 flex justify-between items-center w-screen pl-32 pr-32'>
        <span ref={title} className='text-yellow-500 text-4xl font-bold font-serif'>ShareTo</span>
        <div className='flex gap-10 max-md:hidden'>
            <span ref={one} onClick={GoToLogin} className='text-yellow-500 text-2xl cursor-pointer font-serif'>Login</span>
            <span ref={two} onClick={GoToSignup} className='text-yellow-500 text-2xl cursor-pointer font-serif'>Signup</span>
            <span ref={three} className='text-yellow-500 text-2xl cursor-pointer font-serif'>Support</span>
        </div>
      </header>
  )
}

export default Header
