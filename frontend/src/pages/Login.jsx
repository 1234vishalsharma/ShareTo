import React , {useState} from 'react';


const Login = () => {
    const [password,setPassword] = useState();
    
    const [username,setUserName] = useState();

    const LoginAPI = () => {
        fetch('http://localhost:8000/api/login' , {
        method: 'POST',
        headers: {
            'content-type' : 'application/json', 
          },
        body: JSON.stringify({
            'username' : username,
            'password' : password
        })
        }).then((data)=>{
            console.log(data);
        }).then((finalData)=>{
            console.log(finalData);
        }).catch((e) => {
            console.log("Error occured " ,e);
        })
    }
    
    
    console.log("Reached to Login");
    return (
        <div className= 'text-white flex flex-col w-80 gap-5 justify-center items-center'>
            <span className='text-5xl'>Login page</span>
            <div className='flex w-full'>
                <label>Enter the Username</label>
                <input className='p-3 text-black' onChange={(e) => setUserName(e.target.value)} type="text" />
            </div>
            <br/><br/>
            <div className='flex w-full'>
                <label>Enter the Password</label>
                <input className='p-3 text-black' onChange={(e) => setPassword(e.target.value)} type="text" />
            </div>
            <br/><br/>
            <button onClick={LoginAPI} className='p-2 border-2 border-black bg-slate-500'>Login</button>
        </div>
    )
}


export default Login;