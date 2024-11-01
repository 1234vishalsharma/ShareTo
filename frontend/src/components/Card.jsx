import React from 'react'

const Card = ({ui}) => {


    const RegisterUser = () => {

    }
    const LoginUser = () => {
        
    }

  if(ui == "Login"){ return (
    <div className='bg-yellow-500 h-[450px] w-96 rounded-md shadow-md flex flex-col gap-4 items-center justify-evenly'>
        <p className='text-3xl text-center font-bold'>Login</p>
        <div className='p-8 w-96 flex flex-col justify-evenly gap-4'>
            <input type="email" className='p-3 outline-none w-full rounded-md' placeholder='Username'/>
            <input type="password" className='p-3 outline-none w-full rounded-md' placeholder='Password'/>
        </div> 
        <button onClick={LoginUser} className='border border-yellow-500 bg-black text-yellow-500 p-4 w-56 rounded-md'> Login</button>     
    </div>
  )}else if(ui == 'signup'){
    return ( <div className='bg-yellow-500 h-[450px] w-96 rounded-md shadow-md flex flex-col gap-4 items-center justify-evenly'>
        <p className='text-3xl text-center font-bold'>Signup</p>
        <div className='p-8 w-96 flex flex-col justify-evenly gap-4'>
            <input type="email" className='p-3 outline-none w-full rounded-md' placeholder='Username'/>
            <input type="email" className='p-3 outline-none w-full rounded-md' placeholder='Name'/>
            <input type="password" className='p-3 outline-none w-full rounded-md' placeholder='Set Password'/>
        </div> 
        <button onClick={RegisterUser} className='border border-yellow-500 bg-black text-yellow-500 p-4 w-56 rounded-md'>Create Account</button>     
    </div>)
  }

}

export default Card
