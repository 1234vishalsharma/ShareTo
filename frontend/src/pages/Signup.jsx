import React , {useState} from 'react';
const Signup = () => {
    const [username , setUserName] = useState();
    const [password , setPassword] = useState();
    const [phoneNumber , setphoneNumber] = useState();
    const SignupAPI = () => {
        fetch('http://localhost:8000/api/signup' , {
        method: 'POST',
        headers: {
            'content-type' : 'application/json', 
          },
        body: JSON.stringify({
            'username' : username,
            'password' : password,
            'phoneNumber' : phoneNumber
        })
        }).then((data)=>{
            console.log(data);
        }).then((finalData)=>{
            console.log(finalData);
        }).catch((e) => {
            console.log("Error occured " ,e);
        })
    }
    return (
        <div className= 'text-white flex flex-col w-80 gap-5 justify-center items-center'>
            <span className='text-5xl'>Signup page</span>
            <div className='flex w-full'>
                <label>Enter the Username</label>
                <input className='p-3 text-black' onChange={(e) => setUserName(e.target.value)} type="text" />
            </div>
            <br/><br/>
            <div className='flex w-full'>
                <label>Enter the Password</label>
                <input className='p-3 text-black' onChange={(e) => setPassword(e.target.value)} type="text" />
            </div>

            <div className='flex w-full'>
                <label>Enter the Phone Number</label>
                <input className='p-3 text-black' onChange={(e) => setphoneNumber(e.target.value)} type="text" />
            </div>
            <br/><br/>
            <button onClick={SignupAPI} className='p-2 border-2 border-black bg-slate-500'>Signup</button>
        </div>
    )
}


export default Signup;