import React, { useState } from 'react'
import avtar from '../assets/avatar.png'
import { toast } from 'react-toastify'

const Login = () => {

  const [avatar,setAvatar] = useState({
    file:null,
    url:""
  })

  const handleAvatar = e =>{
    if(e.target.files[0]){
      setAvatar({
        file:e.target.files[0],
        url:URL.createObjectURL(e.target.files[0])
      })
    }
   
  }

  const handleLogin = e =>{
    e.preventDefault();
    toast.warn("hello")
  }

  return (
    <div className='auth flex items-center justify-around w-[100%] h-[100%]'>
      <div className="login ">
            <div className="item">
              <h2 className='text-2xl mb-3 text-white'>Welcome Back , </h2>
              <form className='flex flex-col gap-4' onSubmit={handleLogin}>
                <input type="text" placeholder='Enter Username' name='Usernmae' className=' bg-blue-950/50 outline-none p-3 rounded-xl text-white '/>
                <input type="password" placeholder='Enter password' name='Password' className=' bg-blue-950/50 outline-none p-3 rounded-xl text-white '/>
                <button className='bg-blue-900 p-2 rounded-xl text-white'>Login</button>
              </form>
            </div>
      </div>

      <div className="separator h-[80%] w-[2px] bg-slate-400">

      </div>

      <div className="signup flex justify-between">
      <div className="item">
              <h2 className='text-2xl mb-3 text-white'>Create an account</h2>
              <form className='flex flex-col gap-4' onSubmit={handleLogin}>
                <div className='flex gap-2'>
                <img src={avatar.url || {avtar} } alt="" height={52} width={52} />
                <label htmlFor="file" className='text-white font-bold underline cursor-pointer'>Upload an image</label>
                </div>
                
                <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" placeholder='Enter Username' name='Username' className=' bg-blue-950/50 outline-none p-3 rounded-xl text-white '/>
                <input type="text" placeholder='Enter Email' name='Email' className=' bg-blue-950/50 outline-none p-3 rounded-xl text-white '/>
                <input type="password" placeholder='Enter password' name='password' className=' bg-blue-950/50 outline-none p-3 rounded-xl text-white '/>
                <button className='bg-blue-900 p-2 rounded-xl text-white'>Sign Up</button>
              </form>
            </div>
      </div>
    
    </div>
  )
}

export default Login