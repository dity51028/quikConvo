import React, { useState } from 'react'
import avtar from '../assets/avatar.png'
import { toast } from 'react-toastify'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { auth, db } from '../lib/firebase'
import { doc, setDoc } from "firebase/firestore"; 
import upload from '../lib/upload'

const Login = () => {

  const [avatar,setAvatar] = useState({
    file:null,
    url:""
  })

  const [loading,setLoading] = useState(false)

  const handleAvatar = e =>{
    if(e.target.files[0]){
      setAvatar({
        file:e.target.files[0],
        url:URL.createObjectURL(e.target.files[0])
      })
    }
   
  }

  const handleLogin = async (e)=>{
    e.preventDefault();
    setLoading(true)

    const formData = new FormData(e.target);
    const {Email,password} = Object.fromEntries(formData)

    try{
      
      await signInWithEmailAndPassword(auth,Email,password)
      toast.success("Logged In !!")

    }catch(err){

      toast.error(err.message)

    }finally{
        setLoading(false)
    }
  }

  const handleSignUp =async e=>{
    e.preventDefault();
    setLoading(true)
    const formData = new FormData(e.target);
    const {Username,Email,password} = Object.fromEntries(formData)
    
    try{

      const res = await createUserWithEmailAndPassword(auth,Email,password)
      
      const imgURL = await upload(avatar.file)

      await setDoc(doc(db, "users", res.user.uid), {
       Username,
       Email,
       avatar:imgURL,
       id: res.user.uid,
       blockList:[]
      });

      await setDoc(doc(db, "userChat", res.user.uid), {
        chats:[],
       });

      toast.success("Account created successfully !! ")
    }catch(err){
      console.log(err);
      toast.error(err.message)
    }finally{
      setLoading(false)
    }


  }

  return (
    <div className='auth flex items-center justify-around w-[100%] h-[100%]'>
      <div className="login ">
            <div className="item">
              <h2 className='text-2xl mb-3 text-white'>Welcome Back , </h2>
              <form className='flex flex-col gap-4'>
                <input type="text" placeholder='Enter Email' name='Email' className=' bg-blue-950/50 outline-none p-3 rounded-xl text-white '/>
                <input type="password" placeholder='Enter password' name='Password' className=' bg-blue-950/50 outline-none p-3 rounded-xl text-white '/>
                <button className='bg-blue-900 p-2 rounded-xl text-white disabled:bg-blue-800/30 disabled:cursor-not-allowed' disabled={loading}>{loading ? "Loading":"Login"}</button>
              </form>
            </div>
      </div>

      <div className="separator h-[80%] w-[2px] bg-slate-400">

      </div>

      <div className="signup flex justify-between">
      <div className="item">
              <h2 className='text-2xl mb-3 text-white'>Create an account</h2>
              <form className='flex flex-col gap-4' onSubmit={handleSignUp}>
                <div className='flex gap-4 items-center'>
                <img src={avatar.url || avtar } alt="" height={52} width={52} className='rounded-lg' />
                <label htmlFor="file" className='text-white font-bold underline cursor-pointer'>Upload an image</label>
                </div>
                
                <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" placeholder='Enter Username' name='Username' className=' bg-blue-950/50 outline-none p-3 rounded-xl text-white '/>
                <input type="text" placeholder='Enter Email' name='Email' className=' bg-blue-950/50 outline-none p-3 rounded-xl text-white '/>
                <input type="password" placeholder='Enter password' name='password' className=' bg-blue-950/50 outline-none p-3 rounded-xl text-white '/>
                <button className='bg-blue-900 p-2 rounded-xl text-white  disabled:bg-blue-800/30 disabled:cursor-not-allowed'disabled={loading}>{loading ? "Loading":"Signup"}</button>
              </form>
            </div>
      </div>
    
    </div>
  )
}

export default Login