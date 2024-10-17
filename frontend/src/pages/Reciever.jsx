import React , {useState} from 'react'


const Reciever = () => {
  const [roomID , setRoomId] = useState();
  const [validate , setValidate] = useState(false);
  const handelValidation = () => {
    alert("Todo Task");
    setValidate(!validate);
  }
  if(validate)  return (
    <div className='h-screen w-screen flex flex-col gap-6 justify-center items-center'>
        <p className='text-white text-8xl'>Loading...</p>
        <p className='text-white text-3xl'>Your data downloaded automatically, Once sender sends it.</p>
        <img className='rounded-xl' src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDk3cW80eGdtaTRrY2VkYWZwY2VtOWFvaWplOXhxZ3psaWkxYWJ5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Yj2nHhbGsNQSrGyvI7/giphy.gif" width="480" height="480"></img>
    </div>
  )
  else return (
    <div className='flex flex-col items-center'>
      <div className='w-full flex gap-4 justify-center items-center h-64'>
        <label className='text-2xl text-white font-semibold'>Enter room ID: </label>
        <input className='p-3 rounded-md border-2 border-white outline-none w-80' type="text" onChange={(e) => setRoomId(e.target.value)}/>
        <button onClick={handelValidation} className='text-black shadow-white shadow-sm w-32 border-2 h-12 font-bold border-white rounded-md bg-yellow-500'>Validate ID</button>
      </div>
    </div>
  )
}

export default Reciever
