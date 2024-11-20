import React, { useState } from 'react';
import process from 'process';
import toast , {Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_API_URL;
const Card = ({ui}) => {

  const [username , setUsername] = useState("");
  const [name , setName] = useState("");
  const [password , setPassword] = useState("");
  const [phonenumber , setPhonenumber] = useState("");
  const navigate = useNavigate();

    const RegisterUser = () => {
      console.log("URl : " , BASE_URL);
      if(!username || !name || !password || !phonenumber){
        toast.error("Field's cant be empty");
        return;
      }
      try{
        fetch(`${BASE_URL}/api/signup` , {
          method : "POST", 
          headers : {
            "content-type" : "application/json" 
          },
          body : JSON.stringify({
            username : username,
            name: name,
            password: password,
            phoneNumber : phonenumber
          })
        }).then((result) => {
          return result.json();
        }).then((response) => {
          if(response.success){
            navigate("/Login")
          }else{
            toast.error("Cannot Create Account")
          }
        }).catch((err) => {
          toast.error("Sorry, Error Occured");
        })
      }catch(e){
        toast.error("Error in USER SIGN_UP");
      }
    }
    const LoginUser = () => {
      if(!username || !password){
        toast.error("Failed to Login User");
        return;
      }
        try{
          console.log("URl : " , BASE_URL);
          fetch(`${BASE_URL}/api/Login` , {
          method : "POST", 
          headers : {
            "content-type" : "application/json" 
          },
          body : JSON.stringify({
            username : username,
            password: password,
          })
          }).then((result) => {
            return result.json();
          }).then((response) => {
            localStorage.setItem("token" , response.UserData._id);
            navigate("/");
          }).catch((err) => {
            toast.error("USER LOGIN FAILED");
          })
        }catch(e){
          toast.error("Exception Occured");
        }
    }


    if(ui == "Login"){ return (
      <div style={{"fontFamily": "Rubik Wet Paint", "fontWeight": "400", "fontStyle": "normal"}} className='bg-yellow-500 h-[330px] w-96 rounded-lg shadow-md flex flex-col gap-4 items-center justify-evenly'>
      <Toaster/>
        <p className='text-3xl text-center mt-4'>Login</p>
        <div className='p-8 w-96 flex flex-col justify-evenly gap-5'>
            <input onChange={(e) => setUsername(e.target.value)} type="email" className='p-3 outline-none w-full rounded-md' placeholder='Username'/>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className='p-3 outline-none w-full rounded-md' placeholder='Password'/>
        </div> 
        <a href="/Signup">Don't Have an account ?</a>
        <button onClick={LoginUser} className='border border-yellow-500 bg-black text-yellow-500 p-4 w-56 rounded-md'> Login</button>     
    </div>
  )}else if(ui == 'signup'){
    return ( <div style={{"fontFamily": "Rubik Wet Paint", "fontWeight": "400", "fontStyle": "normal"}} className='bg-yellow-500 h-[450px] w-96 rounded-md shadow-md flex flex-col gap-4 items-center justify-evenly'>
         <Toaster/> 
        <p className='text-3xl text-center mt-1'>Signup</p>
        <div className='p-8 w-96 flex flex-col justify-evenly gap-5'>
            <input onChange={(e) => setUsername(e.target.value)} type="email" className='p-3 outline-none w-full rounded-md' placeholder='Username'/>
            <input onChange={(e) => setName(e.target.value)} type="text" className='p-3 outline-none w-full rounded-md' placeholder='Name'/>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className='p-3 outline-none w-full rounded-md' placeholder='Set Password'/>
            <input onChange={(e) => setPhonenumber(e.target.value)} type="phone" className='p-3 outline-none w-full rounded-md' placeholder='Phone Number'/>
        </div> 
        <a href="/Login">Already have an account</a>
        <button onClick={RegisterUser} className='border border-yellow-500 bg-black text-yellow-500 p-3 w-56 rounded-md'>Create Account</button>     
    </div>)
  }

}

export default Card;
