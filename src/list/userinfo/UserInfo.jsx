import React from 'react'
import avatar from '../../assets/avatar.png'
import { BsThreeDots } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useUserStore } from '../../lib/userStore';


const UserInfo = () => {
  const {currentUser} = useUserStore()

  return (
    <div className='flex justify-between items-center'>
      <div className="user flex items-center gap-2 ml-4 mt-2">
        <img src={currentUser.avatar || avatar} alt="avatar" className='rounded-full h-10 w-10' />
        <h2 className='font-bold text-xl'>{currentUser.Username}</h2>
      </div>

      <div className="icons flex gap-4 cursor-pointer ">
        <BsThreeDots size={28}/>
        <FaVideo size={26}/>
        <FaEdit size={24}/>

      </div>
    </div>
  )
}

export default UserInfo